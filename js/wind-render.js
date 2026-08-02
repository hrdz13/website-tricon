/* =========================================================
   WIND-RENDER.JS
   =========================================================
   Mesin yang membangun daftar portofolio proyek turbin angin
   di halaman om-wind-turbine.html dari data di js/wind-data.js.
   TIDAK PERLU DIEDIT — cukup edit js/wind-data.js.

   Yang dikerjakan otomatis:
   - 1 proyek  -> tampil besar (foto kiri, keterangan kanan)
   - 2+ proyek -> berubah jadi grid kartu
   - Galeri foto: panah & titik navigasi hanya muncul kalau
     fotonya 2 atau lebih (ditangani js/main.js)
   - Dwibahasa: setiap teks ditulis dengan atribut data-id /
     data-en, lalu js/i18n.js yang memilih bahasanya.

   PENTING (urutan <script> di HTML):
   file ini harus dimuat SEBELUM js/i18n.js dan js/main.js,
   supaya kartu sudah ada di halaman saat kedua file itu bekerja.
   ========================================================= */
(function () {

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // Teks dwibahasa {id, en} -> atribut data-id/data-en supaya diurus i18n.js.
  // Kalau nilainya teks biasa (nama diri), dipakai apa adanya di kedua bahasa.
  function bi(val, opts) {
    opts = opts || {};
    var idText, enText;
    if (val && typeof val === 'object') {
      idText = val.id !== undefined ? val.id : val.en;
      enText = val.en !== undefined ? val.en : val.id;
    } else {
      idText = enText = val;
    }
    // Nilai kosong tetap harus menutup tag pembuka, supaya HTML tidak rusak
    if (idText === undefined || idText === null || idText === '') return '>';
    var attrs = ' data-id="' + esc(idText) + '" data-en="' + esc(enText) + '"';
    if (opts.html) attrs += ' data-html';
    // Isi awal dipakai sebagai tampilan sementara sebelum i18n.js jalan
    return attrs + '>' + (opts.html ? idText : esc(idText));
  }

  function iconPin() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>';
  }

  function galleryHtml(p) {
    var photos = p.photos && p.photos.length ? p.photos : [];
    return photos.map(function (file, i) {
      return '<img src="frontend/images/portfolio/' + esc(p.slug) + '/' + esc(file) + '" ' +
             'alt="' + esc(p.name) + ' — foto dokumentasi ' + (i + 1) + '" loading="lazy">';
    }).join('');
  }

  function cardHtml(p, isFeature) {
    var modalId = 'wt-modal-' + p.slug;
    var cover = (p.photos && p.photos[0]) ? p.photos[0] : '';
    var hasMulti = p.photos && p.photos.length > 1;

    var scopeHtml = (p.scope || []).map(function (s) {
      return '<li class="wt-chip"' + bi(s) + '</li>';
    }).join('');

    var logoHtml = p.logo
      ? '<img class="wt-client-logo" src="' + esc(p.logo) + '" alt="Logo ' + esc(p.client) + '">'
      : '';

    var mediaHtml = cover
      ? '<button type="button" class="wt-media" ' +
          'onclick="document.getElementById(\'' + modalId + '\').showModal()" ' +
          'aria-label="Lihat dokumentasi ' + esc(p.name) + '">' +
          '<img src="frontend/images/portfolio/' + esc(p.slug) + '/' + esc(cover) + '" alt="Dokumentasi ' + esc(p.name) + '">' +
          '<span class="wt-sector"' + bi(p.sector) + '</span>' +
          '<span class="wt-view">' +
            '<span' + bi({ id: 'Lihat Dokumentasi', en: 'View Documentation' }) + '</span>' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>' +
          '</span>' +
        '</button>'
      : '';

    return (
      '<article class="wt-card reveal' + (isFeature ? ' wt-card--feature' : '') + '">' +
        mediaHtml +
        '<div class="wt-body">' +
          '<div class="wt-top">' +
            (p.status ? '<span class="wt-status"' + bi(p.status) + '</span>' : '') +
            (p.year ? '<span class="wt-year">' + esc(p.year) + '</span>' : '') +
          '</div>' +
          '<h3 class="wt-title">' + esc(p.name) + '</h3>' +
          '<div class="wt-client">' +
            logoHtml +
            '<div class="wt-client-info">' +
              '<span class="wt-client-name">' + esc(p.client) + '</span>' +
              (p.clientNote ? '<span class="wt-client-note"' + bi(p.clientNote) + '</span>' : '') +
            '</div>' +
          '</div>' +
          '<p class="wt-loc">' + iconPin() + '<span' + bi(p.location) + '</span></p>' +
          '<p class="wt-desc"' + bi(p.summary, { html: true }) + '</p>' +
          (scopeHtml ? '<ul class="wt-scope">' + scopeHtml + '</ul>' : '') +
        '</div>' +
      '</article>' +

      // ---- Jendela detail (memakai gaya modal yang sama dengan halaman Portfolio) ----
      (cover ?
      '<dialog id="' + modalId + '" class="pf-modal wt-modal">' +
        '<div class="pf-modal-head">' +
          '<button type="button" class="pf-modal-close" onclick="this.closest(\'dialog\').close()" aria-label="Tutup">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6 6 18"/></svg>' +
          '</button>' +
          '<div class="pf-gallery">' + galleryHtml(p) + '</div>' +
          (hasMulti ? '<span class="pf-hint"' + bi({ id: 'Geser → untuk foto lainnya', en: 'Swipe → for more photos' }) + '</span>' : '') +
        '</div>' +
        '<div class="pf-modal-body">' +
          '<div class="pf-logo-row">' +
            (p.logo ? '<img src="' + esc(p.logo) + '" alt="Logo ' + esc(p.client) + '">' : '') +
            '<div>' +
              '<h3 style="margin:0;">' + esc(p.name) + '</h3>' +
              '<p class="pf-loc" style="margin:0;">' + esc(p.client) + '</p>' +
            '</div>' +
          '</div>' +
          '<p class="pf-desc"' + bi(p.description, { html: true }) + '</p>' +
          (p.website ?
            '<a class="pf-visit" href="' + esc(p.website) + '" target="_blank" rel="noopener">' +
              '<span' + bi({ id: 'Kunjungi Website', en: 'Visit Website' }) + '</span>' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M7 7h10v10"/></svg>' +
            '</a>' : '') +
        '</div>' +
      '</dialog>' : '')
    );
  }

  function render() {
    var host = document.getElementById('wt-list');
    if (!host) return;

    var data = window.TRICON_WIND_PROJECTS || [];
    if (!data.length) {
      host.innerHTML = '';
      return;
    }

    var isFeature = data.length === 1;
    host.className = 'wt-grid' + (isFeature ? ' is-single' : '');
    host.innerHTML = data.map(function (p) { return cardHtml(p, isFeature); }).join('');
  }

  document.addEventListener('DOMContentLoaded', render);
  window.TRICON_RENDER_WIND = render;
})();
