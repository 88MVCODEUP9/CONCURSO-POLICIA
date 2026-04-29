'use strict';

/* ══ UTILS ═════════════════════════════════════ */
const $ = (sel, ctx = document) => ctx.querySelector(sel);

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

  getData() {
    return window.DA || null;
  },

  isTopicDone(topic) {
    return !!this.studyProgress[topic];
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
  key: 'mv_progress',

  load() {
    try {
      AppState.studyProgress =
        JSON.parse(localStorage.getItem(this.key)) || {};
    } catch {
      AppState.studyProgress = {};
    }
  },

  save() {
    localStorage.setItem(this.key, JSON.stringify(AppState.studyProgress));
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
    const da = AppState.getData();
    if (!da) return { total: 0, done: 0, pct: 0 };

    const topics = Object.keys(da);
    const done = topics.filter(t => AppState.studyProgress[t]).length;

    return {
      total: topics.length,
      done,
      pct: topics.length
        ? Math.round((done / topics.length) * 100)
        : 0
    };
  },

  updateUI() {
    const s = this.getStats();

    const pctEl = $('#prog-pct');
    const fillEl = $('#sidebar-prog-fill');
    const chip = $('#top-prog .chip-text');

    if (pctEl) pctEl.textContent = `${s.pct}%`;
    if (fillEl) fillEl.style.width = `${s.pct}%`;
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

    this.container?.addEventListener('click', e => {
      const btn = e.target.closest('.topic-btn');
      if (!btn) return;

      selectTopic(btn.dataset.topic);
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

    this.container.innerHTML = `
      <div class="topics-list">
        ${list
          .map(([topic, data]) => {
            const done = AppState.isTopicDone(topic);
            const active = topic === AppState.currentTopic;

            return `
              <button class="topic-btn ${active ? 'active' : ''} ${done ? 'is-done' : ''}"
                data-topic="${escapeHTML(topic)}">
                <span class="topic-icon">${data?.icon || '📚'}</span>
                <span class="topic-lbl">${escapeHTML(topic)}</span>
                <span class="topic-check">${done ? '✓' : ''}</span>
              </button>
            `;
          })
          .join('')}
      </div>
    `;

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
  Progress.toggle(AppState.currentTopic);
  renderCurrentView();
}

/* ══ RENDER ═════════════════════════════════ */
function renderCurrentView() {
  const area = $('#view-area');
  if (!area) return;

  if (AppState.viewMode === 'progresso') {
    const s = Progress.getStats();

    area.innerHTML = `
      <h2>📊 Progresso</h2>
      <p>${s.done} de ${s.total} (${s.pct}%)</p>
      <div class="prog-large">
        <div style="width:${s.pct}%"></div>
      </div>
    `;
    return;
  }

  if (!AppState.currentTopic) {
    area.innerHTML = `<p>Selecione um tópico</p>`;
    return;
  }

  const data = AppState.getData()[AppState.currentTopic];
  const done = AppState.isTopicDone(AppState.currentTopic);

  area.innerHTML = `
    <button id="progress-btn" class="progress-btn ${done ? 'done' : ''}">
      ${done ? '✅ Concluído' : 'Marcar como concluído'}
    </button>
    ${data.aprendizado || '<p>Sem conteúdo</p>'}
  `;

  // evento seguro
  $('#progress-btn')?.addEventListener('click', toggleProgress);
}

/* ══ TABBAR ═══════════════════════════════ */
const Tabbar = {
  init() {
    document.querySelectorAll('.tab-label').forEach(btn => {
      btn.addEventListener('click', () => {
        document
          .querySelectorAll('.tab-label')
          .forEach(b => b.classList.remove('active'));

        btn.classList.add('active');

        AppState.viewMode = btn.textContent
          .toLowerCase()
          .includes('progresso')
          ? 'progresso'
          : 'aprender';

        renderCurrentView();
      });
    });
  }
};

/* ══ MOBILE ═════════════════════════════════ */
function openMobileSidebar() {
  $('#sidebar')?.classList.add('open');
  $('#sidebar-overlay')?.classList.add('active');
}

function closeMobileSidebar() {
  $('#sidebar')?.classList.remove('open');
  $('#sidebar-overlay')?.classList.remove('active');
}

/* ══ AUDIO PLAYER ═══════════════════════════ */
class PremiumAudioPlayer {
  constructor() {
    this.audio = $('#audioPlayer');
    this.playBtn = $('#playBtn');
    this.playIcon = $('#playIcon');
    this.progressBar = $('#progressBar');
    this.progressContainer = $('.progress-container');
    this.timeNow = $('#timeNow');
    this.timeFull = $('#timeFull');
    this.volumeFill = $('#volumeFill');
    this.volumeSlider = $('.volume-slider');
    this.prevBtn = $('#prevBtn');
    this.nextBtn = $('#nextBtn');
    this.volumeBtn = $('#volumeBtn');

    this.isPlaying = false;
    this.init();
  }

  init() {
    if (!this.audio) {
      console.warn('⚠️ Audio não encontrado');
      return;
    }

    this.audio.addEventListener('play', () => this.onPlay());
    this.audio.addEventListener('pause', () => this.onPause());
    this.audio.addEventListener('timeupdate', () => this.updateProgress());
    this.audio.addEventListener('loadedmetadata', () => this.updateProgress());
    this.audio.addEventListener('ended', () => this.onEnded());

    this.playBtn?.addEventListener('click', () => this.togglePlay());
    this.prevBtn?.addEventListener('click', () => this.prevTrack());
    this.nextBtn?.addEventListener('click', () => this.nextTrack());
    this.volumeBtn?.addEventListener('click', () => this.toggleMute());

    this.progressContainer?.addEventListener('click', e => this.seek(e));
    this.volumeSlider?.addEventListener('click', e => this.setVolume(e));

    this.audio.volume = 0.75;
    this.updateVolumeUI();
  }

  togglePlay() {
    this.isPlaying ? this.audio.pause() : this.audio.play().catch(console.error);
  }

  onPlay() {
    this.isPlaying = true;
    if (this.playIcon) this.playIcon.className = 'fas fa-pause';
  }

  onPause() {
    this.isPlaying = false;
    if (this.playIcon) this.playIcon.className = 'fas fa-play';
  }

  onEnded() {
    this.isPlaying = false;
    if (this.playIcon) this.playIcon.className = 'fas fa-play';
    if (this.progressBar) this.progressBar.style.width = '0%';
  }

  updateProgress() {
    if (!this.audio.duration) return;

    const percent = (this.audio.currentTime / this.audio.duration) * 100;
    if (this.progressBar) this.progressBar.style.width = percent + '%';

    if (this.timeNow)
      this.timeNow.textContent = this.formatTime(this.audio.currentTime);

    if (this.timeFull)
      this.timeFull.textContent = this.formatTime(this.audio.duration);
  }

  seek(e) {
    if (!this.audio.duration) return;

    const rect = this.progressContainer.getBoundingClientRect();
    const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    this.audio.currentTime = percent * this.audio.duration;
  }

  setVolume(e) {
    const rect = this.volumeSlider.getBoundingClientRect();
    const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));

    this.audio.volume = percent;
    if (this.volumeFill) this.volumeFill.style.width = (percent * 100) + '%';
  }

  updateVolumeUI() {
    if (this.volumeFill)
      this.volumeFill.style.width = (this.audio.volume * 100) + '%';
  }

  toggleMute() {
    this.audio.muted = !this.audio.muted;

    const icon = this.volumeBtn?.querySelector('i');
    if (icon) {
      icon.className = this.audio.muted
        ? 'fas fa-volume-mute'
        : 'fas fa-volume-up';
    }
  }

  prevTrack() {
    console.log('⏮️ Anterior');
  }

  nextTrack() {
    console.log('⏭️ Próxima');
  }

  formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  }
}

/* ══ INIT ═════════════════════════════════ */
function initializeApp() {
  ThemeManager.init();
  Progress.load();
  Sidebar.init();
  Tabbar.init();
  Progress.updateUI();

  $('#mobile-toggle')?.addEventListener('click', openMobileSidebar);
  $('#sidebar-overlay')?.addEventListener('click', closeMobileSidebar);

  // seleciona primeiro tópico automaticamente
  const data = AppState.getData();
  if (data) {
    const first = Object.keys(data)[0];
    if (first) selectTopic(first);
  }
}

/* 🚀 START */
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
  new PremiumAudioPlayer();
});
