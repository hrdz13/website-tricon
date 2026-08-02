/* =========================================================
   PUSAT DATA PERUSAHAAN — TRICON MITRA UTAMA KONSULTAN
   =========================================================
   Edit HANYA file ini untuk mengubah nama perusahaan, alamat,
   nomor telepon, email, kontak person, dan link sosial media.
   Semua halaman (index.html, service.html, portfolio.html,
   contact.html) otomatis menarik data dari sini lewat
   js/populate.js — tidak perlu edit satu-satu di tiap halaman.

   ATURAN PENULISAN NOMOR "Raw":
   - Tulis TANPA tanda "+", TANPA spasi, TANPA angka 0 di depan.
   - Contoh: nomor +62 812-1111-7887  ->  ditulis "6281211117887"
   - Nomor "Raw" ini dipakai otomatis untuk membuat link
     tel:, wa.me, dan tombol WhatsApp mengambang.

   CATATAN PETA (Google Maps) di halaman Contact Us:
   - Peta di contact.html SUDAH memakai kode embed dari Google
     yang Anda ambil sendiri (lebih akurat karena berbasis Place ID,
     langsung menunjuk ke lokasi kantor persis, bukan hasil pencarian
     kata kunci). Jadi field "mapQuery" di bawah TIDAK dipakai lagi
     dan boleh diabaikan.
   - Kalau kantor pindah lagi nanti: buka Google Maps → cari lokasi
     baru → Share → Embed a map → salin kode <iframe> → tempel
     langsung menggantikan iframe di contact.html (bagian peta).
   ========================================================= */

window.TRICON_DATA = {

  // ---------- Identitas Perusahaan ----------
  companyName: "PT. Tricon Mitra Utama Konsultan",
  brandShort: "TRICON",
  brandTagline: "Mitra Utama Konsultan",

  // ---------- Alamat ----------
  address: {
    // Alamat singkat, dipakai di top-bar
    short: "Banten, Indonesia",

    // Alamat lengkap satu baris (dipakai di footer, dsb)
    full: "Vanya Park Cluster Alesha Yellow 5 No 6, Cicalengka, Kec. Pagedangan, Kabupaten Tangerang, Banten 15339",

    // Alamat lengkap dengan baris baru (dipakai di halaman Contact Us)
    fullHtml: "Vanya Park Cluster Alesha Yellow 5 No 6,<br>Cicalengka, Kec. Pagedangan,<br>Kabupaten Tangerang, Banten 15339",

    // (tidak dipakai lagi — lihat catatan peta di atas)
    mapQuery: "Cicalengka, Kabupaten Tangerang, Banten"
  },

  // ---------- Nomor Telepon Kantor Utama ----------
  // Dipakai untuk: tombol WhatsApp mengambang, ikon WA footer, form kontak, top-bar
  phone: {
    officeDisplay: "+62 812-1111-7887",   // yang tampil di layar
    officeRaw: "6281211117887"            // untuk link tel:/wa.me
  },

  // ---------- Email Utama ----------
  email: {
    main: "sales.support@triconconsultant.com"
  },

  // ---------- Contact Person (halaman Contact Us) ----------
  // Boleh tambah/kurangi baris di dalam array ini
  contacts: [
    {
      role: "Contact — Tika Mustika S",
      email: "t.mustika@triconconsultant.com",
      phoneDisplay: "+62 812-1111-7887",
      phoneRaw: "6281211117887"
    },
    {
      role: "Contact — Sales",
      email: "sales.support@triconconsultant.com",
      phoneDisplay: "+62 819-9460-6517",
      phoneRaw: "6281994606517"
    }
  ],

  // ---------- Sosial Media ----------
  // Baris yang tidak dipakai boleh dihapus atau dikomentari dengan // di depan
  social: {
    // facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com/tricon8_consultant/"
  },

  // ---------- Logo & Favicon ----------
  // SATU-SATUNYA tempat yang perlu diedit kalau ganti nama file logo/favicon.
  // Semua tag <img> dan <link> di header/footer/tab-browser 4 halaman sudah
  // otomatis menarik path dari sini — tidak perlu buka file .html sama sekali.
  //
  // Kalau Anda GANTI NAMA FILE, ubah pathnya di bawah ini.
  // Kalau cuma TIMPA ISI file dengan nama yang SAMA, tidak perlu ubah apa pun.
  brandAssets: {
    logo: "frontend/images/logo-tricon.png",
    favicon512: "frontend/images/icon-tricon-512.png",
    favicon180: "frontend/images/icon-tricon-180.png",
    favicon32: "frontend/images/icon-tricon-32.png",
    favicon16: "frontend/images/icon-tricon-16.png",
    faviconIco: "frontend/images/icon-tricon.ico"
  }

};
