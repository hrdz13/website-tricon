# Website PT Tricon Mitra Utama Konsultan

Website korporat untuk perusahaan **EPC (Engineering, Procurement and Construction)**
yang bergerak di bidang telekomunikasi, transmisi & distribusi tenaga listrik, konstruksi
sipil, dan operasi & pemeliharaan pembangkit listrik tenaga bayu.

🔗 **Live:** [www.triconconsultant.com](https://www.triconconsultant.com)

---

## Latar belakang

Website sebelumnya dibangun dengan **Laravel**, dengan sumber kode berada di luar
`public_html` dan sebagian konten diambil dari database. Akibatnya pemilik website tidak
bisa memperbarui isinya sendiri — mengedit file lewat File Manager tidak pernah mengubah
tampilan.

Situs ini dibangun ulang sebagai **HTML statis murni** dengan satu batasan utama:

> Pemilik website harus bisa memperbarui isinya sendiri, tanpa memahami pemrograman,
> tanpa proses build, dan tanpa terminal — cukup mengedit satu file lalu meng-upload-nya
> lewat File Manager hosting.

Batasan itulah yang membentuk hampir seluruh keputusan teknis di bawah.

---

## Teknologi

| | |
|---|---|
| Bahasa | HTML5, CSS3, JavaScript (vanilla, ES5-compatible) |
| Framework | — tidak ada, sengaja |
| Build step | — tidak ada, file langsung siap upload |
| Dependensi | — nol, tanpa npm/CDN kecuali Google Fonts |
| Server | Apache (`.htaccess`) di shared hosting |

---

## Keputusan teknis yang menarik

### 1. Pusat data — satu sumber kebenaran untuk konten berulang

Nomor telepon, alamat, dan email muncul di belasan tempat di 6 halaman. Daripada
mengetik ulang di setiap file, semuanya disimpan di `js/company-data.js`, lalu
`js/populate.js` menyuntikkannya ke elemen bertanda atribut:

```html
<span data-text="phone.officeDisplay">+62 812-1111-7887</span>
<a data-href="tel-office">Telepon</a>
```

Ganti nomor di satu file → seluruh halaman ikut berubah.

### 2. Dwibahasa tanpa file terjemahan

Saklar ID/EN bekerja lewat sepasang atribut pada elemen yang sama, jadi penerjemahan
dilakukan tepat di tempat teksnya ditulis — tidak perlu mengelola file terjemahan
terpisah yang gampang tidak sinkron.

```html
<h2 data-id="Layanan Kami" data-en="Our Service">Layanan Kami</h2>
```

Pilihan bahasa disimpan di `localStorage`, jadi tetap diingat antar halaman.

### 3. Daftar yang dibangun dari data, bukan ditulis manual

- **143 proyek** pada halaman Portfolio (`js/projects-data.js`) — lengkap dengan filter
  kategori, pencarian, dan "muat lebih banyak" 12 per klik.
- **Portofolio turbin angin** (`js/wind-data.js`) — tata letaknya menyesuaikan sendiri:
  satu proyek tampil sebagai kartu besar, dua atau lebih otomatis berubah jadi grid.
  Panah dan titik navigasi galeri hanya muncul kalau fotonya lebih dari satu.

Menambah proyek = menyalin satu blok objek di file data. Tidak menyentuh HTML/CSS.

### 4. Penomoran kartu lewat CSS counter

Kartu layanan diberi nomor urut oleh browser, bukan diketik di HTML:

```css
.service-grid { counter-reset: layanan; }
.service-mini { counter-increment: layanan; }
.service-mini::before { content: counter(layanan, decimal-leading-zero); }
```

Kartu bisa ditambah, dihapus, atau ditukar urutannya tanpa penomoran jadi kacau.

### 5. Clean URL & kanonikalisasi domain

`.htaccess` memetakan `/service` → `service.html` tanpa menampilkan ekstensi, mengalihkan
semua varian alamat ke satu versi resmi (`https://www.` …) demi SEO, memasang halaman 404
kustom, dan menambahkan tiga header keamanan dasar.

### 6. Aksesibilitas & responsif

Navigasi keyboard dengan `:focus-visible`, `aria-label` pada kontrol ikon, `<dialog>`
native untuk modal galeri, dan tata letak yang diuji pada 1280 / 1024 / 768 / 375 px.

---

## Struktur

```
├── index.html               Home
├── service.html             Our Service
├── om-wind-turbine.html     O&M Service — turbin angin
├── portfolio.html           Portfolio + rekam jejak 143 proyek
├── contact.html             Contact Us
├── 404.html                 Halaman tidak ditemukan
├── .htaccess                Clean URL, HTTPS/www, header keamanan
├── robots.txt / sitemap.xml
│
├── css/style.css            Seluruh styling & responsif
│
├── js/
│   ├── company-data.js      🎯 Pusat data perusahaan
│   ├── content-about.js     🎯 Konten About Us
│   ├── projects-data.js     🎯 Data 143 proyek
│   ├── wind-data.js         🎯 Data proyek turbin angin
│   ├── populate.js          Mesin penyuntik data
│   ├── i18n.js              Mesin saklar bahasa
│   ├── projects-render.js   Pembangun daftar proyek
│   ├── wind-render.js       Pembangun kartu proyek turbin angin
│   └── main.js              Menu mobile, form WhatsApp, galeri, animasi
│
└── frontend/images/         Logo, favicon, dan foto portofolio
```

File bertanda 🎯 adalah file yang dirancang untuk diedit pemilik website.

---

## Menjalankan secara lokal

Karena tidak ada build step, cukup jalankan server statis apa pun dari folder ini:

```bash
npx serve .
```

Catatan: membuka file lewat `file://` akan membuat link antar halaman tidak bekerja,
karena semua link memakai format clean URL tanpa `.html`.

---

## Dokumentasi

Dokumentasi lengkap berbahasa Indonesia — arsitektur, cara mengelola konten, riwayat
perubahan, dan catatan troubleshooting — ada di
**[`Backup/DOKUMENTASI-WEBSITE.md`](Backup/DOKUMENTASI-WEBSITE.md)**.

---

## Lisensi & hak cipta

Kode di repositori ini dipublikasikan sebagai portofolio. Seluruh **logo, merek, foto
proyek, dan materi perusahaan** — baik milik PT Tricon Mitra Utama Konsultan maupun
klien-kliennya — adalah hak pemiliknya masing-masing dan tidak termasuk dalam izin
penggunaan ulang.
