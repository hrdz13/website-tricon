/* =========================================================
   POPULATE.JS
   Mengisi otomatis semua elemen bertanda data-text / data-href
   di halaman dengan data dari:
     - js/company-data.js   (window.TRICON_DATA)
     - js/content-*.js      (window.TRICON_CONTENT)
   Tidak perlu diedit — cukup edit file-file di atas.

   Mendukung dwibahasa: kalau nilai yang ditemukan berbentuk
   {id:"...", en:"..."}, otomatis dipilih sesuai bahasa aktif
   (dikoordinasikan oleh js/i18n.js). Kalau nilainya teks biasa
   (bukan objek id/en), dipakai apa adanya di kedua bahasa —
   cocok untuk data yang sama di semua bahasa seperti nomor
   telepon, alamat, dan email.
   ========================================================= */
function TRICON_POPULATE(lang) {
  lang = lang || 'id';
  var root = Object.assign({}, window.TRICON_DATA || {}, window.TRICON_CONTENT || {});
  if (!Object.keys(root).length) return;

  function resolve(path) {
    return path.split('.').reduce(function (obj, key) {
      return (obj !== undefined && obj !== null) ? obj[key] : undefined;
    }, root);
  }

  // Kalau hasil resolve berbentuk {id:"...", en:"..."}, pilih sesuai bahasa aktif
  function pickLang(val) {
    if (val && typeof val === 'object' && ('id' in val || 'en' in val)) {
      return val[lang] !== undefined ? val[lang] : (val.id !== undefined ? val.id : val.en);
    }
    return val;
  }

  // ---- Isi teks (data-text="path.ke.data") ----
  document.querySelectorAll('[data-text]').forEach(function (el) {
    var val = pickLang(resolve(el.getAttribute('data-text')));
    if (val === undefined) return;
    if (el.hasAttribute('data-html')) {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });

  // ---- Isi link (data-href="...") ----
  document.querySelectorAll('[data-href]').forEach(function (el) {
    var key = el.getAttribute('data-href');
    var val;
    if (key === 'tel-office') {
      val = 'tel:+' + root.phone.officeRaw;
    } else if (key === 'wa-office') {
      val = 'https://wa.me/' + root.phone.officeRaw;
    } else if (key === 'mail-main') {
      val = 'mailto:' + root.email.main;
    } else if (key.indexOf('tel:') === 0) {
      val = 'tel:+' + resolve(key.slice(4));
    } else if (key.indexOf('mail:') === 0) {
      val = 'mailto:' + resolve(key.slice(5));
    } else {
      val = pickLang(resolve(key));
    }
    if (val !== undefined) el.setAttribute('href', val);
  });

  // ---- Isi gambar (data-src="path.ke.data") ----
  document.querySelectorAll('[data-src]').forEach(function (el) {
    var val = pickLang(resolve(el.getAttribute('data-src')));
    if (val !== undefined) el.setAttribute('src', val);
  });

  // ---- Peta Google Maps (halaman Contact, jika masih memakai mode data-map) ----
  var mapEl = document.querySelector('[data-map]');
  if (mapEl && root.address && root.address.mapQuery) {
    mapEl.src = 'https://www.google.com/maps?q=' + encodeURIComponent(root.address.mapQuery) + '&output=embed';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  TRICON_POPULATE('id');
});
