'use strict';

/* ══ UTILS ═════════════════════════════════════ */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => ctx.querySelectorAll(sel);

const escapeHTML = (str = '') =>
    String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');

/* ══ ESTADO GLOBAL ═════════════════════════════ */
const AppState = {
    currentTopic: null,
    studyProgress: {},
    viewMode: 'aprender',
    isMobile: window.matchMedia('(max-width: 768px)').matches,

    isTopicDone(t) {
        return !!this.studyProgress[t];
    },

    getData() {
        return window.DA ?? null;
    }
};

/* ══ TEMA ═════════════════════════════════════ */
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

/* ══ PROGRESSO ════════════════════════════════ */
const Progress = {
    key: 'mv_progress_v7',

    load() {
        try {
            AppState.studyProgress = JSON.parse(localStorage.getItem(this.key)) || {};
        } catch {
            AppState.studyProgress = {};
        }
    },

    save() {
        localStorage.setItem(this.key, JSON.stringify(AppState.studyProgress));
    },

    toggle(topic) {
        if (!topic) return;

        AppState.studyProgress[topic]
            ? delete AppState.studyProgress[topic]
            : AppState.studyProgress[topic] = true;

        this.save();
        this.updateUI();
        Sidebar.render();
    },

    getStats() {
        const da = AppState.getData();
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

        $('#prog-pct') && ($('#prog-pct').textContent = `${s.pct}%`);
        $('#sidebar-prog-fill') && ($('#sidebar-prog-fill').style.width = `${s.pct}%`);

        const chip = $('#top-prog .chip-text');
        if (chip) chip.textContent = `${s.done} / ${s.total}`;
    }
};

/* ══ SIDEBAR ═════════════════════════════════ */
const Sidebar = {
    container: null,

    init() {
        this.container = $('#sidebar-list');

        $('#search-input')?.addEventListener('input', e => {
            this.render(e.target.value);
        });

        this.container?.addEventListener('click', (e) => {
            const btn = e.target.closest('.topic-btn');
            if (!btn) return;

            const topic = btn.dataset.topic;
            if (!topic || topic === AppState.currentTopic) return;

            selectTopic(topic);
        });

        this.render();
    },

    render(filter = '') {
        if (!this.container || !AppState.getData()) return;

        const entries = Object.entries(AppState.getData());
        const f = filter.toLowerCase();

        const list = filter
            ? entries.filter(([t]) => t.toLowerCase().includes(f))
            : entries;

        if (!list.length) {
            this.container.innerHTML = `<div class="no-results">🔍 Nenhum resultado</div>`;
            return;
        }

        this.container.innerHTML = `
        <div class="topics-list">
            ${list.map(([topic, data]) => {
                const done = AppState.isTopicDone(topic);
                const active = topic === AppState.currentTopic;

                return `
                <button class="topic-btn ${active ? 'active' : ''} ${done ? 'is-done' : ''}"
                    data-topic="${escapeHTML(topic)}">
                    <span class="topic-icon">${data?.icon || '📚'}</span>
                    <span class="topic-lbl">${escapeHTML(topic)}</span>
                    <span class="topic-check">${done ? '✓' : ''}</span>
                    ${active ? '<div class="active-indicator"></div>' : ''}
                </button>`;
            }).join('')}
        </div>`;

        Progress.updateUI();
    }
};

/* ══ NAVEGAÇÃO ═══════════════════════════════ */
function selectTopic(topic) {
    if (!AppState.getData()?.[topic]) return;

    AppState.currentTopic = topic;
    Sidebar.render();
    renderCurrentView();

    if (AppState.isMobile) closeMobileSidebar();
}

function toggleProgress() {
    if (!AppState.currentTopic) return;

    Progress.toggle(AppState.currentTopic);
    renderCurrentView();
}

/* ══ RENDER ═════════════════════════════════ */
function renderCurrentView() {
    const area = $('#view-area');
    if (!area) return;

    if (AppState.viewMode === 'progresso') {
        renderProgresso(area);
        return;
    }

    if (!AppState.currentTopic) {
        area.innerHTML = `
        <div class="empty-state">
            <div class="empty-icon">📖</div>
            <p class="empty-title">Selecione um tópico</p>
        </div>`;
        return;
    }

    const data = AppState.getData()[AppState.currentTopic];
    const done = AppState.isTopicDone(AppState.currentTopic);

    area.innerHTML = `
        <div class="topic-content">
            <button class="progress-btn ${done ? 'done' : ''}" onclick="toggleProgress()">
                ${done ? '✅ Concluído' : '⏳ Marcar como concluído'}
            </button>
            ${data.aprendizado || '<p>Sem conteúdo.</p>'}
        </div>
    `;

    area.scrollTo({ top: 0 });
}

/* ══ PROGRESS VIEW ═══════════════════════════ */
function renderProgresso(area) {
    const s = Progress.getStats();

    area.innerHTML = `
    <div class="progress-view">
        <h2>📊 Progresso</h2>

        <div class="stats-row">
            <div class="stat-card"><span class="stat-num">${s.done}</span><span class="stat-lbl">Feitos</span></div>
            <div class="stat-card"><span class="stat-num">${s.pending}</span><span class="stat-lbl">Pendentes</span></div>
            <div class="stat-card"><span class="stat-num">${s.pct}%</span></div>
        </div>

        <div class="prog-large-track">
            <div class="prog-large-fill" style="width:${s.pct}%"></div>
        </div>
    </div>`;
}

/* ══ MOBILE ═════════════════════════════════ */
function openMobileSidebar() {
    $('#sidebar')?.classList.add('open');
    $('#sidebar-overlay')?.classList.add('active');
}

function closeMobileSidebar() {
    $('#sidebar')?.classList.remove('open');
    $('#sidebar-overlay')?.classList.remove('active');
}

/* ══ TABBAR (CORRIGIDO) ═════════════════════ */
const Tabbar = {
    init() {
        const tabs = document.querySelectorAll('.tab-label');

        tabs.forEach(btn => {
            btn.addEventListener('click', () => {

                // remove active de todos
                tabs.forEach(b => b.classList.remove('active'));

                // ativa o clicado
                btn.classList.add('active');

                // 🔥 muda o modo
                const txt = btn.textContent.toLowerCase();

                if (txt.includes('progresso')) {
                    AppState.viewMode = 'progresso';
                } else {
                    AppState.viewMode = 'aprender';
                }

                // re-renderiza
                renderCurrentView();
            });
        });

        // estado inicial
        if (!document.querySelector('.tab-label.active') && tabs.length) {
            tabs[0].classList.add('active');
        }
    }
};

/* ══ INIT ═════════════════════════════════ */
function initializeApp() {
    if (!window.DA) {
        const key = Object.keys(window).find(k => k.startsWith('DATA_'));
        if (key) window.DA = window[key];
    }

    ThemeManager.init();
    Progress.load();
    Sidebar.init();
    Tabbar.init();
    Progress.updateUI();

    // Mobile sidebar toggle
    $('#mobile-toggle')?.addEventListener('click', openMobileSidebar);
    $('#sidebar-overlay')?.addEventListener('click', closeMobileSidebar);
}

/* ══ START ═════════════════════════════════ */
document.addEventListener('DOMContentLoaded', initializeApp);
