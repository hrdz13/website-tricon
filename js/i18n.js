/* =========================================================
   I18N.JS — Saklar Bahasa Indonesia / English
   =========================================================
   Cara pakai di HTML (tidak perlu edit file ini):

   Teks biasa:
     <h3 data-id="Judul Bahasa Indonesia" data-en="English Title">Judul Bahasa Indonesia</h3>

   Teks yang mengandung tag HTML (mis. <strong>) di dalamnya:
     <p data-id="Teks <strong>tebal</strong>" data-en="Text <strong>bold</strong>" data-html>
       Teks <strong>tebal</strong>
     </p>

   Placeholder pada input/textarea:
     <input data-id-placeholder="Nama lengkap" data-en-placeholder="Full name">

   Isi elemen HTML yang ditulis di tag itu sendiri (di antara data-id/data-en) HANYA
   dipakai sebagai fallback tampilan sebelum JS ini jalan — nilai yang benar-benar
   dipakai selalu diambil dari atribut data-id / data-en.

   Pilihan bahasa disimpan di localStorage browser, jadi tetap "diingat" walau
   pindah halaman atau menutup lalu membuka lagi browsernya.
   ========================================================= */
(function () {
  var STORAGE_KEY = 'tricon_lang';

  function getSavedLang() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    return (saved === 'en' || saved === 'id') ? saved : 'id';
  }

  function applyLang(lang) {
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-id]').forEach(function (el) {
      var attr = lang === 'en' ? 'data-en' : 'data-id';
      if (!el.hasAttribute(attr)) return;
      var val = el.getAttribute(attr);
      if (el.hasAttribute('data-html')) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });

    document.querySelectorAll('[data-id-placeholder]').forEach(function (el) {
      var attr = lang === 'en' ? 'data-en-placeholder' : 'data-id-placeholder';
      if (el.hasAttribute(attr)) el.setAttribute('placeholder', el.getAttribute(attr));
    });

    document.querySelectorAll('.lang-switch [data-lang]').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Sinkronkan juga konten yang diisi dari company-data.js / content-*.js
    if (typeof window.TRICON_POPULATE === 'function') {
      window.TRICON_POPULATE(lang);
    }

    // Sinkronkan label "Semua/All" dan ringkasan di daftar Project Track Record
    if (typeof window.TRICON_RENDER_PROJECTS === 'function') {
      window.TRICON_RENDER_PROJECTS();
    }

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyLang(getSavedLang());
    document.querySelectorAll('.lang-switch [data-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(btn.getAttribute('data-lang'));
      });
    });
  });

  // Bisa dipanggil manual dari console kalau perlu, mis: TRICON_SET_LANG('en')
  window.TRICON_SET_LANG = applyLang;
})();
