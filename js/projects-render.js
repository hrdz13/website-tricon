/* =========================================================
   PROJECTS-RENDER.JS
   Membangun tampilan "Project Track Record" di halaman Portfolio:
   tab filter kategori, kotak pencarian, daftar kartu proyek,
   dan tombol "Muat Lebih Banyak". Data diambil dari
   js/projects-data.js -- edit di sana untuk menambah/mengubah
   proyek, tidak perlu edit file ini.
   ========================================================= */
(function () {
  var PAGE_SIZE = 12;
  var state = { category: 'Semua', query: '', shown: PAGE_SIZE };
  var initialized = false;

  function isEN() {
    return document.documentElement.getAttribute('lang') === 'en';
  }

  function escapeHtml(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function render() {
    var DATA = window.TRICON_PROJECTS || [];
    var listEl = document.getElementById('tr-list');
    var tabsEl = document.getElementById('tr-tabs');
    var loadMoreBtn = document.getElementById('tr-load-more');
    var countEl = document.getElementById('tr-count');
    var emptyEl = document.getElementById('tr-empty');
    if (!listEl || !tabsEl || !DATA.length) return;

    // ---- Bangun daftar kategori (urutan sesuai kemunculan pertama di data) ----
    var categories = ['Semua'];
    var seen = {};
    DATA.forEach(function (p) {
      if (!seen[p.category]) { seen[p.category] = true; categories.push(p.category); }
    });

    function countFor(cat) {
      if (cat === 'Semua') return DATA.length;
      return DATA.filter(function (p) { return p.category === cat; }).length;
    }

    // ---- Render tab ----
    tabsEl.innerHTML = '';
    categories.forEach(function (cat) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'tr-tab' + (cat === state.category ? ' active' : '');
      var label = cat === 'Semua' ? (isEN() ? 'All' : 'Semua') : cat;
      btn.textContent = label + ' (' + countFor(cat) + ')';
      btn.addEventListener('click', function () {
        state.category = cat;
        state.shown = PAGE_SIZE;
        render();
      });
      tabsEl.appendChild(btn);
    });

    // ---- Filter + search ----
    var q = state.query.trim().toLowerCase();
    var filtered = DATA.filter(function (p) {
      if (state.category !== 'Semua' && p.category !== state.category) return false;
      if (!q) return true;
      var hay = (p.project + ' ' + p.client + ' ' + p.location + ' ' + p.scope + ' ' + p.sector).toLowerCase();
      return hay.indexOf(q) !== -1;
    });

    var toShow = filtered.slice(0, state.shown);

    // ---- Render kartu ----
    listEl.innerHTML = toShow.map(function (p) {
      var scopeLine = (p.scope && p.scope.trim().toLowerCase() !== p.project.trim().toLowerCase())
        ? '<p class="tr-scope">' + escapeHtml(p.scope) + '</p>' : '';
      return (
        '<div class="tr-card">' +
          '<div class="tr-card-top">' +
            '<span class="tr-tag">' + escapeHtml(p.sector) + '</span>' +
            '<span class="tr-year">' + escapeHtml(p.year) + '</span>' +
          '</div>' +
          '<h4 class="tr-project">' + escapeHtml(p.project) + '</h4>' +
          '<div class="tr-meta">' +
            '<span class="tr-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>' + escapeHtml(p.client) + '</span>' +
            '<span class="tr-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>' + escapeHtml(p.location) + '</span>' +
          '</div>' +
          scopeLine +
        '</div>'
      );
    }).join('');

    // ---- Status kosong / tombol muat lebih banyak / ringkasan ----
    if (emptyEl) emptyEl.style.display = filtered.length ? 'none' : 'block';
    if (loadMoreBtn) loadMoreBtn.style.display = (state.shown < filtered.length) ? 'inline-flex' : 'none';
    if (countEl) {
      countEl.textContent = isEN()
        ? 'Showing ' + toShow.length + ' of ' + filtered.length + ' projects'
        : 'Menampilkan ' + toShow.length + ' dari ' + filtered.length + ' proyek';
    }

    if (!initialized) {
      initialized = true;
      var searchEl = document.getElementById('tr-search-input');
      if (searchEl) {
        searchEl.addEventListener('input', function () {
          state.query = searchEl.value;
          state.shown = PAGE_SIZE;
          render();
        });
      }
      if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function () {
          state.shown += PAGE_SIZE;
          render();
        });
      }
    }
  }

  document.addEventListener('DOMContentLoaded', render);
  // Supaya label "Semua/All" & ringkasan ikut ganti saat saklar bahasa diklik
  window.TRICON_RENDER_PROJECTS = render;
})();
