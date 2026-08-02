/* =========================================================
   DATA — PORTOFOLIO O&M WIND TURBINE (halaman om-wind-turbine.html)
   =========================================================
   🎯 INI SATU-SATUNYA FILE YANG PERLU DIEDIT untuk menambah,
   mengubah, atau menghapus proyek turbin angin. Tampilannya
   dibangun otomatis oleh js/wind-render.js — tidak perlu
   menyentuh HTML, CSS, atau JS lain.

   ---------------------------------------------------------
   TAMPILAN OTOMATIS MENYESUAIKAN JUMLAH PROYEK
   ---------------------------------------------------------
   - 1 proyek  -> tampil BESAR (foto di kiri, keterangan di kanan)
   - 2 proyek atau lebih -> otomatis berubah jadi grid kartu
   Jadi halaman tidak akan terlihat kosong saat baru ada 1 proyek,
   dan tidak perlu diubah lagi saat proyek bertambah.

   ---------------------------------------------------------
   CARA MENAMBAH PROYEK BARU
   ---------------------------------------------------------
   1. Buat folder foto baru di:
        frontend/images/portfolio/nama-slug-proyek/
      (huruf kecil semua, spasi diganti tanda "-", tanpa simbol aneh)
   2. Masukkan foto-fotonya ke folder itu. Nama file bebas, asal
      nanti ditulis sama persis di bagian "photos" di bawah.
   3. Salin SATU blok { ... } di bawah ini, tempel di bawahnya,
      lalu ganti isinya. JANGAN LUPA koma "," di antara blok.
   4. Simpan, upload ulang file ini + folder fotonya. Selesai.

   ---------------------------------------------------------
   ATURAN PENULISAN
   ---------------------------------------------------------
   - Teks berbentuk { id: "...", en: "..." } artinya dwibahasa:
     isi KEDUANYA supaya saklar ID/EN di pojok atas tetap benar.
   - Teks berupa nama diri (nama proyek, nama PT, tahun) ditulis
     satu kali saja sebagai teks biasa — memang sengaja tidak
     diterjemahkan, sama seperti halaman lain.
   - "photos" boleh berisi 1 foto saja. Panah & titik navigasi
     galeri otomatis muncul hanya kalau fotonya 2 atau lebih.
   - "website" boleh dihapus kalau klien tidak punya website —
     tombol "Kunjungi Website" otomatis tidak ditampilkan.
   ========================================================= */

window.TRICON_WIND_PROJECTS = [

  {
    // Nama folder di frontend/images/portfolio/
    slug: "sidrap",

    // Nama proyek (nama diri — tidak diterjemahkan)
    name: "Project Sidrap — Crack Repair and Recoating",

    // Klien / pemilik proyek
    client: "PT UPC Sidrap Bayu Energi",
    clientNote: { id: "Barito Renewables — Barito Wind Energy", en: "Barito Renewables — Barito Wind Energy" },

    // Logo klien (kosongkan "" kalau belum ada logonya)
    logo: "frontend/images/portfolio/sidrap/logo.png",

    year: "2026",
    status: { id: "Proyek Berjalan", en: "Ongoing Project" },
    sector: { id: "Energi Angin", en: "Wind Energy" },
    location: { id: "Sidenreng Rappang, Sulawesi Selatan", en: "Sidenreng Rappang, South Sulawesi" },

    // Ringkasan pendek — tampil di kartu
    // (disesuaikan dengan papan proyek di lokasi: "CRACK REPAIR (CONCRETE /
    //  GROUTING) AND WATERPROOF COATING ON WTG FOUNDATION")
    summary: {
      id: "Perbaikan retak dengan metode concrete/grouting dan pelapisan kedap air (waterproof coating) pada pondasi turbin angin di PLTB Sidrap 75 MW — pembangkit listrik tenaga bayu skala utilitas pertama di Indonesia.",
      en: "Crack repair using concrete/grouting methods and waterproof coating on the wind turbine generator foundations at the 75 MW Sidrap Wind Farm — the first utility-scale wind power plant in Indonesia."
    },

    // Keterangan lengkap — tampil di jendela detail (modal)
    description: {
      id: "Tricon Mitra Utama Konsultan menangani pekerjaan perbaikan retak dengan metode concrete/grouting serta aplikasi lapisan kedap air (waterproof coating) pada pondasi turbin angin (WTG foundation) di PLTB Sidrap berkapasitas 75 MW, milik PT UPC Sidrap Bayu Energi di bawah Barito Renewables. Pekerjaan diawali dengan persiapan lokasi dan pencatatan kondisi awal (record of condition) pada setiap pondasi, dilanjutkan perbaikan retak dan pelapisan kedap air untuk melindungi struktur beton dari rembesan air. Proyek ini menandai perluasan layanan EPC Tricon ke sektor energi terbarukan, khususnya operasi dan pemeliharaan (O&amp;M) pembangkit listrik tenaga bayu.",
      en: "Tricon Mitra Utama Konsultan is carrying out crack repair using concrete/grouting methods together with waterproof coating application on the wind turbine generator (WTG) foundations at the 75 MW Sidrap Wind Farm, owned by PT UPC Sidrap Bayu Energi under Barito Renewables. The work starts with site preparation and a record of condition for each foundation, followed by crack repair and waterproofing to protect the concrete structure against water ingress. This project marks the expansion of Tricon's EPC services into the renewable energy sector, particularly the operation and maintenance (O&amp;M) of wind power plants."
    },

    // Lingkup pekerjaan — tampil sebagai label kecil. Boleh tambah/kurangi.
    scope: [
      { id: "Persiapan Lokasi", en: "Site Preparation" },
      { id: "Pencatatan Kondisi Awal", en: "Record of Condition" },
      { id: "Perbaikan Retak (Concrete/Grouting)", en: "Crack Repair (Concrete/Grouting)" },
      { id: "Pelapisan Kedap Air", en: "Waterproof Coating" },
      { id: "Pondasi Turbin Angin (WTG)", en: "WTG Foundation" }
    ],

    // Daftar foto di dalam folder "slug" di atas.
    // Foto PERTAMA dipakai sebagai cover kartu; sisanya jadi galeri di jendela detail.
    photos: ["foto1.jpg", "cover.jpg"]

    // Kalau klien punya website, aktifkan baris di bawah (jangan lupa
    // tambahkan koma "," di akhir baris photos di atas):
    // website: "https://www.upcrenewables.com/"
  }

  // ---------------------------------------------------------
  // Tempel blok proyek berikutnya di sini (awali dengan koma ",")
  // ---------------------------------------------------------

];
