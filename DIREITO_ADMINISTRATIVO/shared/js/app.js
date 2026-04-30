'use strict';

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * MV Study App - JavaScript Principal (Versão Profissional)
 * ═══════════════════════════════════════════════════════════════════════════════
 */

/* ══ DOM UTILITIES ═════════════════════════════════════════════════════════════ */
const DOM = {
    /**
     * Query selector com contexto opcional
     * @param {string} selector - Seletor CSS
     * @param {Document|Element} [context=document] - Contexto da busca
     * @returns {Element|null}
     */
    query(selector, context = document) {
        return context.querySelector(selector);
    },

    /**
     * Query selector all com contexto opcional
     * @param {string} selector - Seletor CSS
     * @param {Document|Element} [context=document] - Contexto da busca
     * @returns {NodeListOf<Element>}
     */
    queryAll(selector, context = document) {
        return context.querySelectorAll(selector);
    },

    /**
     * Escapa HTML para prevenir XSS
     * @param {string} str - String a ser escapada
     * @returns {string}
     */
    escapeHTML(str = '') {
        const div = document.createElement('div');
        div.textContent = String(str);
        return div.innerHTML;
    }
};

/* ══ APPLICATION STATE ═════════════════════════════════════════════════════════ */
class AppState {
    static #instance = null;

    constructor() {
        this.currentTopic = null;
        this.studyProgress = {};
        this.viewMode = 'aprender';
        this.isMobile = window.matchMedia('(max-width: 768px)').matches;
        this.#initMediaQuery();
    }

    static getInstance() {
        if (!AppState.#instance) {
            AppState.#instance = new AppState();
        }
        return AppState.#instance;
    }

    #initMediaQuery() {
        window.matchMedia('(max-width: 768px)').addListener((mq) => {
            this.isMobile = mq.matches;
        });
    }

    isTopicDone(topic) {
        return !!this.studyProgress[topic];
    }

    getData() {
        return window.DA ?? null;
    }
}

/* ══ THEME MANAGER ═════════════════════════════════════════════════════════════ */
class ThemeManager {
    static #currentTheme = 'dark';

    static init() {
        const savedTheme = localStorage.getItem('mv_theme');
        this.#currentTheme = savedTheme || 'dark';
        this.#applyTheme();
    }

    static #applyTheme() {
        document.documentElement.setAttribute('data-theme', this.#currentTheme);
        localStorage.setItem('mv_theme', this.#currentTheme);
    }

    static toggle() {
        this.#currentTheme = this.#currentTheme === 'dark' ? 'light' : 'dark';
        this.#applyTheme();
    }
}

/* ══ PROGRESS MANAGER ═════════════════════════════════════════════════════════ */
class ProgressManager {
    static #STORAGE_KEY = 'mv_progress_v8';

    static init() {
        ProgressManager.#loadProgress();
    }

    static #loadProgress() {
        try {
            const state = AppState.getInstance();
            state.studyProgress = JSON.parse(localStorage.getItem(this.#STORAGE_KEY)) || {};
        } catch {
            const state = AppState.getInstance();
            state.studyProgress = {};
        }
    }

    static save() {
        localStorage.setItem(this.#STORAGE_KEY, JSON.stringify(AppState.getInstance().studyProgress));
    }

    static toggleTopic(topic) {
        if (!topic) return;

        const state = AppState.getInstance();
        if (state.studyProgress[topic]) {
            delete state.studyProgress[topic];
        } else {
            state.studyProgress[topic] = true;
        }

        ProgressManager.save();
        ProgressManager.updateUI();
        Sidebar.render();
    }

    static getStats() {
        const state = AppState.getInstance();
        const data = state.getData();
        
        if (!data) {
            return { total: 0, done: 0, pending: 0, pct: 0 };
        }

        const topics = Object.keys(data);
        const doneCount = topics.filter(t => state.studyProgress[t]).length;

        return {
            total: topics.length,
            done: doneCount,
            pending: topics.length - doneCount,
            pct: topics.length ? Math.round((doneCount / topics.length) * 100) : 0
        };
    }

    static updateUI() {
        const stats = ProgressManager.getStats();
        const pctEl = DOM.query('#prog-pct');
        const sidebarFill = DOM.query('#sidebar-prog-fill');
        const chipEl = DOM.query('#top-prog .chip-text');

        if (pctEl) pctEl.textContent = `${stats.pct}%`;
        if (sidebarFill) sidebarFill.style.width = `${stats.pct}%`;
        if (chipEl) chipEl.textContent = `${stats.done} / ${stats.total}`;
    }
}

/* ══ SIDEBAR CONTROLLER ═══════════════════════════════════════════════════════ */
class Sidebar {
    static #container = null;
    static #searchInput = null;

    static init() {
        Sidebar.#container = DOM.query('#sidebar-list');
        Sidebar.#searchInput = DOM.query('#search-input');

        if (Sidebar.#searchInput) {
            Sidebar.#searchInput.addEventListener('input', (e) => {
                Sidebar.render(e.target.value);
            });
        }

        if (Sidebar.#container) {
            Sidebar.#container.addEventListener('click', (event) => {
                const button = event.target.closest('.topic-btn');
                if (!button) return;

                const topic = button.dataset.topic;
                if (!topic || topic === AppState.getInstance().currentTopic) return;

                Navigation.selectTopic(topic);
            });
        }

        Sidebar.render();
    }

    static render(filter = '') {
        if (!Sidebar.#container || !AppState.getInstance().getData()) return;

        const state = AppState.getInstance();
        const entries = Object.entries(state.getData());
        const searchTerm = filter.toLowerCase();
        const filteredEntries = filter 
            ? entries.filter(([topic]) => topic.toLowerCase().includes(searchTerm))
            : entries;

        if (!filteredEntries.length) {
            Sidebar.#container.innerHTML = `<div class="no-results">🔍 Nenhum resultado encontrado</div>`;
            return;
        }

        Sidebar.#container.innerHTML = `
            <div class="topics-list">
                ${filteredEntries.map(([topic, data]) => {
                    const isDone = state.isTopicDone(topic);
                    const isActive = topic === state.currentTopic;

                    return `
                        <button class="topic-btn ${isActive ? 'active' : ''} ${isDone ? 'is-done' : ''}"
                            data-topic="${DOM.escapeHTML(topic)}"
                            aria-label="Selecionar tópico: ${DOM.escapeHTML(topic)}">
                            <span class="topic-icon" aria-hidden="true">${data?.icon || '📚'}</span>
                            <span class="topic-label">${DOM.escapeHTML(topic)}</span>
                            <span class="topic-check" aria-label="${isDone ? 'Concluído' : 'Pendente'}">
                                ${isDone ? '✓' : ''}
                            </span>
                            ${isActive ? '<div class="active-indicator" aria-hidden="true"></div>' : ''}
                        </button>
                    `;
                }).join('')}
            </div>
        `;

        ProgressManager.updateUI();
    }
}

/* ══ NAVIGATION CONTROLLER ═══════════════════════════════════════════════════ */
class Navigation {
    static selectTopic(topic) {
        const state = AppState.getInstance();
        const data = state.getData();

        if (!data?.[topic]) return;

        state.currentTopic = topic;
        Sidebar.render();
        Renderer.renderCurrentView();

        if (state.isMobile) {
            MobileUI.closeSidebar();
        }
    }

    static toggleProgress() {
        const state = AppState.getInstance();
        if (!state.currentTopic) return;

        ProgressManager.toggleTopic(state.currentTopic);
        Renderer.renderCurrentView();
    }
}

/* ══ RENDERER ════════════════════════════════════════════════════════════════ */
class Renderer {
    static renderCurrentView() {
        const viewArea = DOM.query('#view-area');
        if (!viewArea) return;

        const state = AppState.getInstance();

        if (state.viewMode === 'progresso') {
            this.#renderProgressView(viewArea);
            return;
        }

        if (!state.currentTopic) {
            this.#renderEmptyState(viewArea);
            return;
        }

        this.#renderTopicContent(viewArea);
    }

    static #renderEmptyState(area) {
        area.innerHTML = `
            <div class="empty-state" role="alert">
                <div class="empty-icon" aria-hidden="true">📖</div>
                <h2 class="empty-title">Selecione um tópico</h2>
                <p class="empty-subtitle">Escolha um assunto no menu lateral para começar</p>
            </div>
        `;
    }

    static #renderTopicContent(area) {
        const state = AppState.getInstance();
        const topicData = state.getData()[state.currentTopic];
        const isDone = state.isTopicDone(state.currentTopic);

        area.innerHTML = `
            <div class="topic-content">
                <button class="progress-btn ${isDone ? 'done' : ''}" 
                        onclick="Navigation.toggleProgress()"
                        aria-label="${isDone ? 'Desmarcar como concluído' : 'Marcar como concluído'}">
                    ${isDone ? '✅ Concluído' : '⏳ Marcar como concluído'}
                </button>
                <div class="topic-content-inner">
                    ${topicData?.aprendizado || '<p class="no-content">Conteúdo não disponível.</p>'}
                </div>
            </div>
        `;

        area.scrollTo({ top: 0, behavior: 'smooth' });

        // Bind audio player events after content is in DOM
        AudioPlayer.bindAll();
    }

    static #renderProgressView(area) {
        const stats = ProgressManager.getStats();

        area.innerHTML = `
            <div class="progress-view">
                <header class="progress-header">
                    <h1>📊 Progresso Geral</h1>
                    <div class="progress-badge">${stats.pct}%</div>
                </header>

                <div class="stats-grid">
                    <div class="stat-card">
                        <span class="stat-number">${stats.done}</span>
                        <span class="stat-label">Concluídos</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-number">${stats.pending}</span>
                        <span class="stat-label">Pendentes</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-number">${stats.total}</span>
                        <span class="stat-label">Total</span>
                    </div>
                </div>

                <div class="progress-track-large">
                    <div class="progress-track-bg"></div>
                    <div class="progress-fill-large" style="width: ${stats.pct}%"></div>
                </div>
            </div>
        `;
    }
}

/* ══ MOBILE UI CONTROLLER ═══════════════════════════════════════════════════ */
class MobileUI {
    static openSidebar() {
        DOM.query('#sidebar')?.classList.add('open');
        DOM.query('#sidebar-overlay')?.classList.add('active');
    }

    static closeSidebar() {
        DOM.query('#sidebar')?.classList.remove('open');
        DOM.query('#sidebar-overlay')?.classList.remove('active');
    }
}

/* ══ TABBAR CONTROLLER ═══════════════════════════════════════════════════════ */
class Tabbar {
    static init() {
        const tabButtons = DOM.queryAll('.tab-label');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.#switchTab(button, tabButtons);
            });
        });

        // Define tab ativo inicial
        const activeTab = DOM.query('.tab-label.active') || tabButtons[0];
        if (activeTab) {
            activeTab.classList.add('active');
            AppState.getInstance().viewMode = 'aprender';
        }
    }

    static #switchTab(activeButton, allButtons) {
        // Remove classe active de todos os botões
        allButtons.forEach(btn => btn.classList.remove('active'));

        // Adiciona classe active no botão clicado
        activeButton.classList.add('active');

        // Determina o modo baseado no texto do botão
        const buttonText = activeButton.textContent.toLowerCase();
        const state = AppState.getInstance();
        
        state.viewMode = buttonText.includes('progresso') ? 'progresso' : 'aprender';
        
        // Re-renderiza a view atual
        Renderer.renderCurrentView();
    }
}

/* ══ APPLICATION INITIALIZER ════════════════════════════════════════════════ */
class AppInitializer {
    static init() {
        // Garante que os dados estejam disponíveis
        this.#ensureDataAvailability();

        // Inicializa componentes
        ThemeManager.init();
        ProgressManager.init();
        Sidebar.init();
        Tabbar.init();
        ProgressManager.updateUI();

        // Configura event listeners mobile
        const mobileToggle = DOM.query('#mobile-toggle');
        const sidebarOverlay = DOM.query('#sidebar-overlay');

        if (mobileToggle) {
            mobileToggle.addEventListener('click', MobileUI.openSidebar);
        }

        if (sidebarOverlay) {
            sidebarOverlay.addEventListener('click', MobileUI.closeSidebar);
        }

        // Toggle theme global
        const themeToggle = DOM.query('#theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => ThemeManager.toggle());
        }

        // Seleciona primeiro tópico automaticamente
        const data = AppState.getInstance().getData();
        if (data) {
            const first = Object.keys(data)[0];
            if (first) Navigation.selectTopic(first);
        }
    }

    static #ensureDataAvailability() {
        if (!window.DA) {
            const dataKey = Object.keys(window).find(key => key.startsWith('DATA_'));
            if (dataKey) {
                window.DA = window[dataKey];
            }
        }
    }
}

/* ══ AUDIO PLAYER ═══════════════════════════════════════════════════════════ */
class AudioPlayer {
    static #bound = new WeakSet();

    static init() {
        // Click delegation (works fine — click bubbles)
        document.addEventListener('click', (e) => {
            const card = e.target.closest('.audio-player-card');
            if (!card) return;

            const audio = card.querySelector('.audio-element');
            if (!audio) return;

            if (e.target.closest('.audio-play-btn')) {
                AudioPlayer.#togglePlay(card, audio);
            }
            else if (e.target.closest('.audio-volume-btn')) {
                AudioPlayer.#toggleMute(card, audio);
            }
            else if (e.target.closest('.audio-progress-bar')) {
                const bar = card.querySelector('.audio-progress-bar');
                const rect = bar.getBoundingClientRect();
                const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                if (audio.duration) audio.currentTime = pct * audio.duration;
            }
            else if (e.target.closest('.audio-volume-slider')) {
                const slider = card.querySelector('.audio-volume-slider');
                const rect = slider.getBoundingClientRect();
                const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                audio.volume = pct;
                const fill = card.querySelector('.audio-volume-fill');
                if (fill) fill.style.width = (pct * 100) + '%';
            }
        });
    }

    // Call after topic content is rendered — binds media events directly
    static bindAll() {
        document.querySelectorAll('.audio-element').forEach(audio => {
            if (AudioPlayer.#bound.has(audio)) return;
            AudioPlayer.#bound.add(audio);

            const card = audio.closest('.audio-player-card');
            if (!card) return;

            audio.addEventListener('timeupdate', () => {
                AudioPlayer.#updateProgress(card, audio);
            });

            audio.addEventListener('loadedmetadata', () => {
                AudioPlayer.#updateProgress(card, audio);
            });

            audio.addEventListener('ended', () => {
                const icon = card.querySelector('.audio-play-icon');
                if (icon) icon.className = 'audio-play-icon fas fa-circle-play';
                const fill = card.querySelector('.audio-progress-fill');
                if (fill) fill.style.width = '0%';
            });
        });
    }

    static #togglePlay(card, audio) {
        if (audio.paused) {
            audio.play().catch(console.error);
            const icon = card.querySelector('.audio-play-icon');
            if (icon) icon.className = 'audio-play-icon fas fa-circle-pause';
        } else {
            audio.pause();
            const icon = card.querySelector('.audio-play-icon');
            if (icon) icon.className = 'audio-play-icon fas fa-circle-play';
        }
    }

    static #toggleMute(card, audio) {
        audio.muted = !audio.muted;
        const btn = card.querySelector('.audio-volume-btn i');
        if (btn) btn.className = audio.muted ? 'fas fa-volume-mute' : 'fas fa-volume-up';
    }

    static #updateProgress(card, audio) {
        if (!audio.duration) return;
        const pct = (audio.currentTime / audio.duration) * 100;
        const fill = card.querySelector('.audio-progress-fill');
        if (fill) fill.style.width = pct + '%';

        const timeNow = card.querySelector('.audio-time-now');
        if (timeNow) timeNow.textContent = AudioPlayer.#formatTime(audio.currentTime);

        const timeFull = card.querySelector('.audio-time-full');
        if (timeFull) timeFull.textContent = AudioPlayer.#formatTime(audio.duration);
    }

    static #formatTime(seconds) {
        if (isNaN(seconds)) return '0:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    }
}

/* ══ APPLICATION BOOTSTRAP ═══════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
    AppInitializer.init();
    AudioPlayer.init();
});

// Exporta funções globais para uso em HTML
window.Navigation = Navigation;
window.ThemeManager = ThemeManager;
window.MobileUI = MobileUI;
