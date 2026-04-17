'use strict';

/* ══ ESTADO GLOBAL ══════════════════════════════════════ */
const AppState = {
    currentTopic: null,
    studyProgress: {},
    viewMode: 'aprender',
    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    isTopicDone(t) { return Boolean(this.studyProgress[t]); },
    getData() { return window.DA ?? null; }
};

/* ══ TEMA ═══════════════════════════════════════════════ */
const ThemeManager = {
    init() {
        this.apply(localStorage.getItem('mv_theme') || 'dark');
    },
    apply(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('mv_theme', theme);
    },
    toggle() {
        const cur = document.documentElement.getAttribute('data-theme');
        this.apply(cur === 'dark' ? 'light' : 'dark');
    }
};

/* ══ PROGRESSO ══════════════════════════════════════════ */
const Progress = {
    key: 'mv_progress_v6',

    load() {
        try {
            AppState.studyProgress = JSON.parse(localStorage.getItem(this.key) || '{}');
        } catch {
            AppState.studyProgress = {};
        }
    },

    save() {
        try {
            localStorage.setItem(this.key, JSON.stringify(AppState.studyProgress));
        } catch { }
    },

    toggle(topic) {
        if (!topic) return;

        if (AppState.studyProgress[topic]) {
            delete AppState.studyProgress[topic];
        } else {
            AppState.studyProgress[topic] = true;
        }

        this.save();
        this.updateUI();
        Sidebar.render();
    },

    getStats() {
        const da = window.DA;
        if (!da) return { total: 0, done: 0, pending: 0, pct: 0 };

        const topics = Object.keys(da);
        const done = topics.filter(t => AppState.studyProgress[t]).length;

        return {
            total: topics.length,
            done,
            pending: topics.length - done,
            pct: topics.length ? Math.round((done / topics.length) * 100) : 0
        };
    },

    updateUI() {
        const s = this.getStats();

        const pct = document.getElementById('prog-pct');
        const fill = document.getElementById('sidebar-prog-fill');
        const chip = document.querySelector('#top-prog .chip-text');

        if (pct) pct.textContent = `${s.pct}%`;
        if (fill) fill.style.width = `${s.pct}%`;
        if (chip) chip.textContent = `${s.done} / ${s.total} tópicos`;
    }
};

/* ══ SIDEBAR ════════════════════════════════════════════ */
const Sidebar = {
    container: null,

    init() {
        this.container = document.getElementById('sidebar-list');

        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.render(e.target.value || '');
            });
        }

        this.render();
    },

    render(filter = '') {
        const container = this.container;
        if (!container || !window.DA) return;

        const entries = Object.entries(window.DA);
        const filterLower = filter.toLowerCase();

        const filtered = filter
            ? entries.filter(([topic]) => topic.toLowerCase().includes(filterLower))
            : entries;

        if (!filtered.length) {
            container.innerHTML = `<div class="no-results">🔍 Nenhum resultado para "${filter}"</div>`;
            return;
        }

        const topicButtons = filtered.map(([topic, data]) => {
            const isDone = AppState.studyProgress[topic];
            const isActive = topic === AppState.currentTopic;
            const icon = data?.icon || '📚';

            return `
            <button
                class="topic-btn ${isActive ? 'active' : ''} ${isDone ? 'is-done' : ''}"
                data-topic="${this._esc(topic)}"
                type="button"
            >
                <span class="topic-icon">${icon}</span>
                <span class="topic-lbl">${this._esc(topic)}</span>
                <span class="topic-check">${isDone ? '✓' : ''}</span>
                ${isActive ? '<div class="active-indicator"></div>' : ''}
            </button>
            `;
        }).join('');

        container.innerHTML = `<div class="topics-list" id="topics-list">${topicButtons}</div>`;

        const topicsList = container.querySelector('#topics-list');

        if (topicsList) {
            topicsList.onclick = (e) => {
                const btn = e.target.closest('.topic-btn');
                if (!btn) return;

                const topic = btn.dataset?.topic;
                if (!topic || topic === AppState.currentTopic) return;

                selectTopic(topic);
            };
        }

        Progress.updateUI();
    },

    updateActiveButton(topic) {
        document.querySelectorAll('#sidebar-list .topic-btn').forEach(btn => {
            const btnTopic = btn.dataset?.topic;
            const isMatch = btnTopic === topic;
            const isDone = AppState.studyProgress[btnTopic];

            btn.classList.toggle('active', isMatch);
            btn.classList.toggle('is-done', isDone);

            const indicator = btn.querySelector('.active-indicator');

            if (isMatch && !indicator) {
                btn.insertAdjacentHTML('beforeend', '<div class="active-indicator"></div>');
            } else if (!isMatch && indicator) {
                indicator.remove();
            }

            const checkEl = btn.querySelector('.topic-check');
            if (checkEl) checkEl.textContent = isDone ? '✓' : '';
        });
    },

    _esc(str = '') {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }
};

/* ══ NAVEGAÇÃO ═══════════════════════════════════════ */
function selectTopic(topic) {
    if (!window.DA?.[topic]) return;

    AppState.currentTopic = topic;
    Sidebar.updateActiveButton(topic);
    renderCurrentView();

    if (AppState.isMobile) closeMobileSidebar();
}

function toggleProgress() {
    if (!AppState.currentTopic) return;

    Progress.toggle(AppState.currentTopic);
    renderCurrentView();
    Sidebar.updateActiveButton(AppState.currentTopic);
}

/* ══ RENDER ═══════════════════════════════════════ */
function renderCurrentView() {
    const area = document.getElementById('view-area');
    if (!area) return;

    if (AppState.viewMode === 'progresso') {
        renderProgresso(area);
        return;
    }

    if (!AppState.currentTopic || !window.DA?.[AppState.currentTopic]) {
        area.innerHTML = `
        <div class="empty-state">
            <div class="empty-icon">📖</div>
            <p class="empty-title">Selecione um tópico para começar</p>
            <p class="empty-hint">← Use a barra lateral para navegar</p>
        </div>`;
        return;
    }

    const data = window.DA[AppState.currentTopic];
    const isDone = AppState.isTopicDone(AppState.currentTopic);

    const safeTopic = AppState.currentTopic.replace(/'/g, "\\'");

    area.innerHTML = `
        <div class="notion-section">
            <button class="progress-btn ${isDone ? 'done' : ''}" onclick="toggleProgress()">
                ${isDone ? '✅ Concluído — clique para desmarcar' : '⏳ Marcar como concluído'}
            </button>
            ${data.aprendizado || '<p>Conteúdo não disponível.</p>'}
        </div>
    `;

    area.scrollTop = 0;
}

/* ══ PROGRESS VIEW ═════════════════════════════════════ */
function renderProgresso(area) {
    if (!window.DA) return;

    const s = Progress.getStats();
    const topics = Object.entries(window.DA);

    area.innerHTML = `
    <div class="progress-view fade-in">
        <h2>📊 Seu Progresso</h2>

        <div class="stats-row">
            <div class="stat-card"><span class="stat-num">${s.done}</span><span class="stat-lbl">Concluídos</span></div>
            <div class="stat-card"><span class="stat-num">${s.pending}</span><span class="stat-lbl">Pendentes</span></div>
            <div class="stat-card"><span class="stat-num">${s.pct}%</span><span class="stat-lbl">Progresso</span></div>
        </div>

        <div class="prog-large-track">
            <div class="prog-large-fill" style="width:${s.pct}%"></div>
        </div>

        <div class="topics-grid">
            ${topics.map(([topic, data]) => {
        const isDone = AppState.isTopicDone(topic);
        const safe = topic.replace(/'/g, "\\'");
        return `
                <div class="topic-card-pg ${isDone ? 'done' : ''}" onclick="selectTopic('${safe}')">
                    <div class="tc-icon">${data?.icon || '📚'}</div>
                    <div>
                        <div class="tc-name">${topic}</div>
                        <div class="tc-status">${isDone ? '✅ Concluído' : '⏳ Pendente'}</div>
                    </div>
                </div>`;
    }).join('')}
        </div>
    </div>`;
}

/* ══ MOBILE ═════════════════════════════════════ */
function openMobileSidebar() {
    document.getElementById('sidebar')?.classList.add('open');
    document.getElementById('sidebar-overlay')?.classList.add('active');
    document.body.classList.add('sidebar-open');
}

function closeMobileSidebar() {
    document.getElementById('sidebar')?.classList.remove('open');
    document.getElementById('sidebar-overlay')?.classList.remove('active');
    document.body.classList.remove('sidebar-open');
}

/* ══ INIT ═════════════════════════════════════ */
function initializeApp() {
    if (!window.DA) {
        const key = Object.keys(window).find(k => k.startsWith('DATA_') && typeof window[k] === 'object');
        if (key) window.DA = window[key];
    }

    ThemeManager.init();
    Progress.load();
    Sidebar.init();
    Progress.updateUI();
    renderCurrentView();

    document.querySelectorAll('.tab-input').forEach(inp => {
        inp.addEventListener('change', () => {
            AppState.viewMode = inp.id === 'tab-aprender' ? 'aprender' : 'progresso';
            renderCurrentView();
        });
    });

    document.getElementById('mobile-toggle')?.addEventListener('click', () => {
        const sb = document.getElementById('sidebar');
        sb?.classList.contains('open') ? closeMobileSidebar() : openMobileSidebar();
    });

    document.getElementById('sidebar-overlay')?.addEventListener('click', closeMobileSidebar);

    document.getElementById('btn-theme')?.addEventListener('click', () => ThemeManager.toggle());

    document.addEventListener('keydown', e => {
        if (e.target.tagName === 'INPUT') return;

        if (e.key === 't') ThemeManager.toggle();
        if (e.key === 'f') {
            e.preventDefault();
            document.getElementById('search-input')?.focus();
        }
        if (e.key === 'Escape') {
            closeMobileSidebar();
            document.getElementById('search-input')?.blur();
        }
        if (e.key === '1') switchTab('aprender');
        if (e.key === '2') switchTab('progresso');
    });

    const viewArea = document.querySelector('.view-area');
    const scrollBtn = document.getElementById('scroll-btn');

    if (viewArea && scrollBtn) {
        viewArea.addEventListener('scroll', () => {
            const near = viewArea.scrollTop + viewArea.clientHeight >= viewArea.scrollHeight - 100;
            scrollBtn.style.display =
                (viewArea.scrollHeight > viewArea.clientHeight + 50 && !near)
                    ? 'flex'
                    : 'none';
        }, { passive: true });

        scrollBtn.addEventListener('click', () => {
            viewArea.scrollTo({ top: viewArea.scrollHeight, behavior: 'smooth' });
        });
    }

    if (AppState.isMobile) {
        document.documentElement.classList.add('is-mobile');
    }
}

function switchTab(mode) {
    const inp = document.getElementById(`tab-${mode}`);
    if (inp) {
        inp.checked = true;
        AppState.viewMode = mode;
        renderCurrentView();
    }
}

/* ══ API GLOBAL ═════════════════════════════════════ */
window.App = { selectTopic, toggleProgress, ThemeManager, Progress, Sidebar, AppState };
window.selectTopic = selectTopic;
window.toggleProgress = toggleProgress;
window.filterTopics = (v) => Sidebar.render(v);

document.addEventListener('DOMContentLoaded', initializeApp);
window.addEventListener('beforeunload', () => Progress.save());
