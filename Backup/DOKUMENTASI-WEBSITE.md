# Dokumentasi Website — PT. Tricon Mitra Utama Konsultan

Dokumen ini merangkum seluruh proses, konsep, dan struktur website `triconconsultant.com`
versi baru — dari alasan awal pembuatan sampai kondisi terkini. Simpan file ini sebagai
referensi kalau suatu saat perlu edit lagi atau serah terima ke orang lain.

---

## 1. Latar Belakang

Website lama dibangun dengan **Laravel** (framework PHP). Sumber kode aslinya berada di
folder terpisah (`resources/views/*.blade.php`, dsb) di luar `public_html`, sementara
`public_html` di Hostinger hanya berisi file "pintu masuk" (`index.php`) dan aset
(CSS/JS/gambar). Karena itu, mengedit file langsung di File Manager pada `public_html`
tidak pernah mengubah tampilan — sumber aslinya ada di tempat lain, dan sebagian konten
bahkan diambil dari database.

**Keputusan:** membangun ulang tampilan front-end sebagai **HTML statis murni**
(HTML + CSS + JavaScript, tanpa server/database), supaya:
- Bisa diedit manual langsung oleh pemilik website tanpa perlu paham Laravel/PHP
- Tetap bisa tampil modern dan terstruktur rapi
- Cukup di-upload ke `public_html` seperti file biasa

Konsekuensinya: fitur yang tadinya "dinamis" lewat database (form kontak tersimpan ke
database, daftar service/portfolio dari admin panel) diganti pendekatan statis:
- Form kontak → mengarah ke **WhatsApp** (bukan disimpan ke database)
- Daftar service & portfolio → ditulis langsung di HTML, dikelola manual

---

## 2. Struktur File

```
public_html/
├── index.html                     Halaman Home
├── service.html                   Halaman Our Service
├── om-wind-turbine.html           Halaman O&M Service (turbin angin) — lihat bagian 18
├── portfolio.html                 Halaman Portfolio
├── contact.html                   Halaman Contact Us
├── 404.html                       Halaman "tidak ditemukan" (dipanggil lewat .htaccess)
├── .htaccess                      Clean URL + paksa HTTPS/www + halaman 404 (file tersembunyi)
├── robots.txt                     Izin mesin pencari + penunjuk sitemap
├── sitemap.xml                    Daftar halaman untuk Google (5 halaman)
├── googled9394f72c89e7f4a.html    File verifikasi Google Search Console
├── DOKUMENTASI-WEBSITE.md         File ini
├── BACA-INI-PANDUAN.md            Panduan ringkas versi awal
│
├── css/
│   └── style.css                  Semua styling (warna, font, layout, responsive)
│
├── js/
│   ├── company-data.js            🎯 PUSAT DATA — nama perusahaan, alamat, telepon, email, kontak, sosmed, logo, favicon
│   ├── content-about.js           🎯 Konten teks "About Us" + 3 pillar (halaman Home)
│   ├── projects-data.js           🎯 Data 143 proyek "Rekam Jejak" (halaman Portfolio) — lihat bagian 17
│   ├── wind-data.js               🎯 Data proyek turbin angin (halaman O&M Service) — lihat bagian 18
│   ├── populate.js                Mesin penyuntik data company-data/content-* ke HTML (jangan diedit)
│   ├── i18n.js                    Mesin saklar bahasa ID/EN (jangan diedit)
│   ├── projects-render.js         Mesin pembangun daftar 143 proyek (jangan diedit)
│   ├── wind-render.js             Mesin pembangun kartu proyek turbin angin (jangan diedit)
│   └── main.js                    Menu mobile, form ke WhatsApp, animasi scroll, galeri modal, back-to-top
│
└── frontend/images/
    ├── logo-tricon.png            Logo perusahaan (header & footer)
    ├── og-image.jpg               Gambar preview saat link dibagikan (WhatsApp, LinkedIn, dll)
    ├── icon-tricon.ico            Favicon utama (berisi 16+32+48 sekaligus)
    ├── icon-tricon-16/32/48/180/512.png   Favicon berbagai ukuran — lihat bagian 7
    └── portfolio/<nama-slug>/     Foto & logo per perusahaan/proyek
```

**Prinsip penting:** semua halaman HTML berdiri sendiri-sendiri (tidak ada sistem "include"
otomatis di HTML polos), tapi bagian yang **datanya** sama di semua halaman (kontak,
telepon, alamat, dst) sudah disatukan lewat sistem "Pusat Data" di bagian 4.

**Konsekuensinya:** kalau menu navigasi berubah (menambah/menghapus halaman), link-nya
harus ditambahkan manual di **navbar DAN footer** pada **semua** file `.html` — termasuk
`404.html`. Ini satu-satunya bagian yang belum terpusat.

---

## 3. Konsep Desain

**Tema visual:** *"Corporate Energy"* — terinspirasi situs korporat BUMN/perusahaan
energi besar (referensi: pertamina.com), dengan penyesuaian warna sesuai identitas Tricon.

| Elemen | Nilai |
|---|---|
| Warna latar halaman | `#F4F7FB` (biru sangat muda) |
| Warna utama (header/footer/CTA) | `#063B7A` (biru tua korporat) |
| Warna aksen (link/hover) | `#0B63C4` |
| Warna aksen sekunder (gradasi hero) | `#2FA3E0` |
| Warna highlight kecil | `#F2A93C` (emas/amber) |
| Font judul | Plus Jakarta Sans |
| Font isi | Inter |
| Bentuk elemen | Membulat (rounded corner, pill button), berbayang halus |

**Kartu layanan (`.service-mini`)** — dipakai di halaman Our Service dan O&M Service:
isinya rata tengah, dengan nomor urut kecil di atas, ikon bulat biru tua, lalu nama
layanan. **Nomornya dihitung otomatis oleh browser** (CSS counter), jadi kalau kartu
ditambah, dihapus, atau ditukar urutannya, penomorannya ikut menyesuaikan sendiri —
tidak perlu mengetik angka di HTML sama sekali.

**Susunan hero** — semua halaman kini seragam: judul besar → paragraf pengantar →
tombol utama. Tidak ada elemen lain di bawah tombol.

> **Sudah dihapus:** dulu di bawah tombol ada "strip informasi" berupa kotak putih
> 3 kolom (`.title-block`) — di Home berisi Perusahaan / Bidang / Lokasi, di O&M
> Service berisi Lingkup / Proyek Berjalan / Lokasi. Dihapus atas permintaan pemilik
> website karena **isinya sudah diulang di bagian lain halaman** (judul hero, About Us,
> top-bar, footer, kartu portofolio) sehingga tidak menambah informasi baru, sementara
> tampilannya sulit dibuat rapi di berbagai lebar layar. Seluruh CSS-nya ikut
> dibersihkan, jadi tidak ada aturan menganggur yang tertinggal di `style.css`.

**Lebar teks** — judul dan paragraf memakai lebar penuh kolom (tidak dibatasi), supaya
kalimat mengalir sampai tepi kanan dan tidak putus di tengah. Paragraf panjang dibuat
rata kanan-kiri (justify), lalu otomatis kembali rata kiri di layar ≤640px karena di
HP justify membuat jarak antar kata melebar tidak beraturan.

**Ciri khas layout:**
- **Top-bar** biru tua di paling atas berisi telepon, email, lokasi, dan ikon sosial media
- **Header** putih menempel (sticky) di bawah top-bar saat scroll
- **Hero** setiap halaman berupa banner biru gradasi dengan judul besar
- Tombol utama berbentuk pil (rounded-full), tombol WhatsApp berwarna hijau (`#25D366`)
- Tombol WhatsApp mengambang di pojok kanan bawah di semua halaman

*(Catatan: desain awal proyek ini sempat memakai tema "blueprint/technical sheet" —
garis-garis teknik dan penomoran dokumen ala gambar kerja EPC — sebelum diganti ke tema
korporat biru seperti sekarang atas permintaan.)*

---

## 4. Sistem Pusat Data (bagian paling penting untuk manajemen sehari-hari)

Karena situs ini statis (tanpa database), data yang sama seperti nomor telepon, alamat,
dan email awalnya harus diketik ulang di 4 file HTML sekaligus — sangat merepotkan dan
rawan lupa satu tempat. Untuk mengatasi ini, dibuat sistem "Pusat Data" berbasis
JavaScript:

### Cara kerjanya
1. **`js/company-data.js`** — berisi semua data perusahaan dalam format terstruktur
   (nama, alamat, telepon, email, daftar contact person, link sosial media).
2. **`js/content-about.js`** — berisi teks paragraf About Us + 3 kartu keunggulan
   (khusus halaman Home), supaya bisa fokus edit satu file tanpa bongkar HTML.
3. **`js/populate.js`** — script "mesin" yang berjalan otomatis saat halaman dibuka. Ia
   mencari semua elemen HTML yang punya atribut `data-text="..."` atau `data-href="..."`,
   lalu mengisi teks/link-nya dari data di kedua file di atas.

Contoh di HTML:
```html
<span data-text="phone.officeDisplay">+62 812-1111-7887</span>
<a data-href="tel-office" href="tel:+6281211117887">Telepon</a>
```
Kalau nomor telepon di `company-data.js` diubah, kedua elemen ini otomatis ikut berubah
di semua halaman yang memakainya — tanpa perlu sentuh HTML sama sekali.

### Yang SUDAH terpusat (edit di 1 file cukup)
- Nama perusahaan, tagline
- Alamat (short & lengkap) — tampil di top-bar, footer, halaman Contact
- Nomor telepon kantor — dipakai juga untuk tombol WhatsApp & form kontak
- Email utama
- Daftar contact person (halaman Contact Us)
- Link Instagram (Facebook sudah dinonaktifkan)
- Teks About Us + 3 pillar (halaman Home)

### Yang SUDAH terpusat lewat file data terpisah
- Daftar 143 proyek "Rekam Jejak" → `js/projects-data.js` (bagian 17)
- Proyek turbin angin di halaman O&M Service → `js/wind-data.js` (bagian 18)

### Yang BELUM terpusat (masih harus edit manual per halaman)
- **Menu navigasi** (navbar & footer) — kalau menambah/menghapus halaman, semua file
  `.html` harus diedit satu per satu, termasuk `404.html`
- Judul hero tiap halaman (teks besar di banner biru atas)
- Daftar layanan & kartu service unggulan (`service.html`, `om-wind-turbine.html`)
- Kartu-kartu portfolio klien (`portfolio.html`)
- Teks CTA band ("Punya proyek yang ingin didiskusikan?" dsb) di tiap halaman

Ini bisa dipusatkan juga ke depannya kalau diperlukan — tinggal buat file
`js/content-service.js`, `js/content-portfolio.js` dengan pola yang sama seperti
`content-about.js`.

---

## 5. Integrasi WhatsApp

Form "Kirim Pesan" di halaman Contact Us **tidak menyimpan data ke server/database**.
Saat tombol submit ditekan, `js/main.js` akan:
1. Mengambil isian Nama, Email, Telepon, dan Pesan dari form
2. Menyusun jadi satu teks pesan
3. Membuka tab baru ke `https://wa.me/<nomor>?text=<pesan>` — otomatis membuka WhatsApp
   dengan pesan siap kirim ke nomor kantor

Nomor tujuan diambil otomatis dari `phone.officeRaw` di `company-data.js`. Tombol
WhatsApp mengambang (pojok kanan bawah) dan ikon WA di footer juga memakai nomor yang
sama secara otomatis.

---

## 6. Manajemen Portfolio (versi galeri + animasi)

Sejak pembaruan ini, halaman `portfolio.html` memakai **kartu bergaya galeri** (terinspirasi
dari layout studi-kasus seperti levnerconsulting.com/portfolio) — tiap kartu punya foto
dokumentasi kegiatan, logo klien, dan saat diklik akan membuka **jendela detail (modal)**
berisi galeri foto (geser ke samping) + deskripsi lengkap + tombol ke website (kalau ada).

Kartu juga otomatis **muncul dengan animasi** (fade + slide naik) saat halaman di-scroll,
dan foto sedikit membesar (zoom) saat kartu di-hover — tanpa perlu setting tambahan.

### Struktur folder gambar per perusahaan
```
frontend/images/portfolio/
├── siemens-indonesia/
│   ├── cover.jpg        ← foto utama, tampil di kartu depan & foto pertama di galeri
│   ├── logo.png          ← logo perusahaan (badge bulat)
│   ├── gallery-2.jpg      ← foto dokumentasi tambahan (opsional, boleh lebih banyak)
│   └── gallery-3.jpg
├── cg-power/ ...
├── pln/ ...
├── wpd-indonesia/ ...
├── duta-realtindo/ ...
└── _template/             ← contoh kosong untuk dicontoh kalau bikin folder baru
```
Semua gambar saat ini masih **placeholder** (kotak biru bertuliskan nama perusahaan) —
tinggal timpa file dengan nama yang sama pakai foto/logo asli, tidak perlu ubah kode.

**Spesifikasi gambar yang disarankan:**
| File | Ukuran disarankan | Rasio |
|---|---|---|
| `cover.jpg`, `gallery-*.jpg` | Minimal 1000×700px | Landscape (mendatar) |
| `logo.png` | Minimal 240×240px | Persegi, latar transparan lebih baik |

### Cara menambah perusahaan baru **TANPA bantuan siapa pun**
Panduan lengkap langkah-demi-langkah sudah dituliskan sebagai **komentar HTML** langsung
di dalam file `portfolio.html` (cari tulisan besar **"TEMPLATE — CARA MENAMBAH PERUSAHAAN
BARU"** menjelang bagian bawah file). Ringkasannya:
1. Buat folder baru di `frontend/images/portfolio/nama-perusahaan-baru/`
2. Isi dengan `cover.jpg`, `logo.png`, `gallery-2.jpg`, `gallery-3.jpg`
3. Copy 1 blok kartu (dari `<button class="pf-card"...` sampai `</dialog>`) yang ada di
   template tadi, tempel sebelum penutup `.pf-grid`
4. Ganti semua tulisan `nama-slug-perusahaan` jadi nama folder Anda (harus sama persis di
   semua baris supaya tombol & jendela detail-nya "nyambung")
5. Ganti teks nama, lokasi, kategori, deskripsi, dan link website (atau hapus baris link
   kalau belum ada website)
6. Simpan & upload — **tidak perlu sentuh CSS atau JS sama sekali**, animasi dan efek
   hover otomatis berlaku karena sudah pakai class yang sama seperti kartu lain.

*(PT Tritech Consult Indonesia sempat ditambahkan lalu dihapus atas permintaan — data
sebelumnya salah.)*

---

## 7. Favicon & SEO

### Favicon
Ikon kecil di tab browser (dan berpotensi muncul di hasil pencarian Google) sekarang
sudah memakai **logo asli perusahaan** (simbol infinity), bukan lagi ikon sementara
huruf "T". File-nya ada di `frontend/images/icon-tricon-*`.

> **Catatan riwayat (sudah diperbaiki):** sebelumnya ada 2 masalah tersembunyi di sini —
> (1) ukuran 32×32 dan 16×16 menunjuk ke file `icon-tricon.png` yang **tidak pernah ada**,
> sehingga setiap halaman menghasilkan 2 permintaan gagal (404); dan (2) file
> `icon-tricon.ico` sebenarnya **bukan file ICO**, melainkan PNG 512×512 (192 KB) yang
> hanya di-*rename* jadi `.ico` — formatnya tidak valid dan ukurannya kelewat besar untuk
> sebuah favicon. Keduanya sudah diperbaiki: ukuran 16/32/48 dibuatkan file PNG aslinya,
> dan `icon-tricon.ico` dibuat ulang sebagai file ICO yang benar berisi 3 ukuran sekaligus
> (16+32+48, total hanya 5 KB).

Daftar file favicon yang dipakai sekarang:

| File | Ukuran | Dipakai untuk |
|---|---|---|
| `icon-tricon.ico` | 16+32+48 | Favicon utama (`rel="shortcut icon"`), dibaca browser lama & crawler Google |
| `icon-tricon-16.png` | 16×16 | Tab browser ukuran kecil |
| `icon-tricon-32.png` | 32×32 | Tab browser / bookmark |
| `icon-tricon-48.png` | 48×48 | Cadangan di dalam file `.ico` |
| `icon-tricon-180.png` | 180×180 | Ikon di layar utama iPhone/iPad (Apple touch icon) |
| `icon-tricon-512.png` | 512×512 | Master resolusi tinggi, sumber semua ukuran di atas |

*(File lama `favicon-16/32/48/180/512.png` dan `favicon1.ico` adalah ikon sementara "T"
versi awal — sudah tidak dipakai di halaman mana pun, boleh dihapus.)*

**Kalau suatu saat logo diganti:** timpa `icon-tricon-512.png` dengan logo baru, lalu
buatkan ulang ukuran 16/32/48 dan file `.ico`-nya (bisa lewat situs gratis seperti
favicon.io / realfavicongenerator.net). Jangan hanya me-*rename* PNG jadi `.ico` —
itulah yang dulu menyebabkan masalah di atas.

### Logo
Sejak pembaruan ini, semua tag logo (header & footer, di 4 halaman) sudah tersambung ke
`brandAssets.logo` di `js/company-data.js`. Ada 2 cara ganti logo, pilih salah satu:

1. **Cara termudah (disarankan):** timpa langsung file `frontend/images/logo.png` dengan
   logo baru, **pakai nama file yang sama persis**. Tidak perlu edit apa pun — semua
   halaman otomatis ikut berubah.
2. **Kalau nama/format file logo baru berbeda** (misal ingin pakai `logo-baru.svg`):
   cukup ubah satu baris di `company-data.js`:
   ```js
   brandAssets: {
     logo: "frontend/images/logo-baru.svg"
   }
   ```
   Upload file barunya ke folder `frontend/images/`, lalu upload ulang `company-data.js`
   — logo di header & footer semua halaman otomatis ikut ganti, tidak perlu buka satu
   pun file `.html`.

### Favicon (ikon di tab browser & hasil pencarian Google)
Favicon sekarang juga **terpusat lewat `brandAssets` di `company-data.js`**, sama seperti
logo — cukup edit satu tempat:
```js
brandAssets: {
  logo: "frontend/images/logo-tricon.png",
  favicon512: "frontend/images/icon-tricon-512.png",
  favicon180: "frontend/images/icon-tricon-180.png",
  favicon32: "frontend/images/icon-tricon-32.png",
  favicon16: "frontend/images/icon-tricon-16.png",
  faviconIco: "frontend/images/icon-tricon.ico"
}
```
- **Kalau cuma timpa ISI file** dengan nama yang sama → tidak perlu ubah apa pun, cukup
  upload file barunya ke `frontend/images/`
- **Kalau GANTI NAMA file** (mis. `favicon-baru.png`) → ubah path-nya di `company-data.js`
  saja, otomatis berlaku di tab browser & ikon semua halaman

---

### Google Search Console
Website sudah diverifikasi kepemilikannya di Google Search Console memakai file
`googled9394f72c89e7f4a.html`, yang harus **tetap ada** di root `public_html` (jangan
dihapus, jangan diedit) selama status verifikasi ingin dipertahankan.

**Catatan penting:** perubahan seperti favicon baru **tidak langsung** muncul di hasil
pencarian Google walau sudah "Request Indexing" — Google punya jadwal crawl sendiri
khusus untuk favicon, biasanya butuh beberapa hari sampai beberapa minggu.

---

## 8. Cara Deploy / Update ke Hostinger

1. Login ke **hPanel Hostinger** → **File Manager** → masuk folder **`public_html`**
2. Upload file yang ingin diperbarui, pilih **Replace/Overwrite** kalau nama filenya sama
3. Untuk perubahan **teks kontak/about saja** → cukup upload ulang file di folder `js/`
   (`company-data.js` dan/atau `content-about.js`)
4. Untuk perubahan **layout/desain** → upload ulang `css/style.css`
5. Untuk perubahan **konten spesifik halaman** (hero, service, portfolio) → upload ulang
   file `.html` halaman terkait
6. Untuk **menambah proyek** → cukup upload ulang `js/projects-data.js` (halaman Portfolio)
   atau `js/wind-data.js` (halaman O&M Service) + folder fotonya
7. Setelah upload, buka website dan **hard refresh** (`Ctrl+Shift+R`) untuk memastikan
   tidak melihat versi lama dari cache browser

> **Kalau menambah HALAMAN baru**, ada 4 hal yang gampang terlupa:
> 1. Tambah link di **navbar DAN footer** pada **semua** file `.html`, termasuk `404.html`
> 2. Tambah 1 blok `<url>` di `sitemap.xml`, lalu submit ulang di Search Console
> 3. Isi `<link rel="canonical">` + tag Open Graph/Twitter di `<head>` halaman baru
> 4. Beri `data-id` / `data-en` pada setiap teks supaya saklar bahasa tetap berfungsi
>
> `.htaccess` **tidak perlu diubah** — aturan clean URL-nya berlaku umum untuk file
> `.html` apa pun di root.

---

## 9. Riwayat Perubahan Penting (Changelog)

| Perubahan | Keterangan |
|---|---|
| Migrasi dari Laravel ke HTML statis | Situs lama tidak bisa diedit manual di File Manager karena berbasis Laravel |
| Desain v1 → v2 | Dari tema "blueprint teknik" (garis & nomor dokumen) ke tema "korporat biru" ala Pertamina |
| Sistem Pusat Data dibuat | `company-data.js` + `populate.js`, supaya kontak/alamat/telepon tidak perlu diedit di 4 file terpisah |
| About Us dipisah ke file sendiri | `content-about.js`, supaya fokus edit tanpa bongkar `index.html` |
| Portfolio diperbarui | Tritech dihapus (data salah), ditambahkan deskripsi + link untuk Siemens/CG Power/PLN/WPD, ditambahkan PT Duta Realtindo Perkasa |
| Tombol "Contact Us" ganda di header dihapus | Sebelumnya ada 2 tombol Contact Us (link biasa + tombol pill biru) di semua halaman, sekarang cuma 1 |
| Favicon dibuat & dipasang | Ikon sementara "T", menunggu logo asli untuk versi final |
| Google Search Console diverifikasi | File verifikasi sudah terpasang, sudah request indexing |
| Halaman **O&M Service** ditambahkan | Halaman ke-5 untuk sektor turbin angin + portofolio Project Sidrap — lihat bagian 18 |
| Lebar teks dilebarkan | Judul & paragraf sebelumnya dibatasi 520–760px sehingga kalimat putus di tengah lalu turun ke baris bawah. Sekarang memakai lebar penuh kolom, paragraf rata kanan-kiri (otomatis rata kiri di HP) |
| Kartu layanan didesain ulang | Ikon bulat biru tua rata tengah + penomoran otomatis (01, 02, …) — berlaku di halaman Our Service & O&M Service |
| Bug strip statistik hero diperbaiki | Selector `.title-block div` mengenai semua div di dalamnya, membuat label & nilai ikut kena padding dan garis pemisah sendiri — teks jadi putus dan muncul jarak kosong besar. Tinggi kotak turun dari 192px ke 88px |
| Strip informasi hero **dihapus** | Kotak putih 3 kolom di bawah tombol hero (`.title-block`) dihilangkan dari `index.html` dan `om-wind-turbine.html` beserta seluruh CSS-nya. Alasannya: isinya mengulang informasi yang sudah ada di bagian lain halaman, dan tata letaknya berkali-kali bermasalah. Hero sekarang berhenti di tombol utama |
| Ejaan "Consultant" diperbaiki | Judul tab Home dan satu teks lingkup di `js/projects-data.js` → "Konsultan". Domain `triconconsultant.com` & email tidak diubah |
| Favicon diperbaiki total | Ukuran 32/16 sebelumnya menunjuk file yang tidak ada (404 di tiap halaman), dan `icon-tricon.ico` ternyata PNG 192 KB yang di-*rename*. Sekarang semua ukuran dibuatkan file aslinya + file ICO yang benar (5 KB) — lihat bagian 7 |

---

## 10. Masalah yang Pernah Terjadi & Solusinya (Troubleshooting Log)

| Gejala | Penyebab | Solusi |
|---|---|---|
| Edit file di File Manager tidak berpengaruh ke tampilan | Situs lama berbasis Laravel, sumber asli di luar `public_html` | Bangun ulang sebagai HTML statis |
| Tampilan jadi kosong/aneh (jarak besar di atas halaman) | Sisa CSS `padding` dari desain versi sebelumnya (untuk header versi lama) tidak disesuaikan ke desain baru | Sesuaikan ulang nilai padding |
| Ikon telepon tampil raksasa memenuhi layar | File `css/style.css` gagal dimuat (folder `css` tidak ikut ter-upload/tersalin) | Pastikan struktur folder (`css/`, `js/`, `frontend/`) ikut lengkap saat upload |
| Perubahan tidak muncul walau file sudah diedit & diupload | Cache browser | Hard refresh (`Ctrl+Shift+R`) atau buka via Incognito |
| Data di `company-data.js` tidak terbaca sama sekali | Kesalahan penulisan (typo tanda kutip/koma) membuat seluruh file JS gagal jalan secara diam-diam | Cek tab Console di Developer Tools (F12) untuk pesan error merah |
| Logo tampil sebagai ikon gambar rusak | File gambar belum diupload/folder gambar kosong | Upload file gambar dengan nama persis sesuai yang direferensikan di HTML |
| Favicon tetap tidak muncul walau file sudah diupload | Path di `company-data.js` menunjuk nama file yang tidak ada, atau file `.ico` sebenarnya PNG yang cuma di-*rename* | Buka tab Network di Developer Tools (F12), cari baris merah 404. Pastikan nama file di `brandAssets` sama persis dengan file di `frontend/images/`, dan `.ico` dibuat pakai generator favicon, bukan hasil rename |
| Kartu proyek turbin angin tidak muncul / tidak ikut ganti bahasa | Urutan `<script>` di `om-wind-turbine.html` tertukar | `wind-render.js` harus di atas `i18n.js` dan `main.js` — lihat bagian 18 |

---

## 11. Yang Masih Perlu Dilakukan (To-Do)

- [x] Ganti favicon sementara ("T") dengan simbol logo asli perusahaan
- [x] Ganti `logo.png` (header & footer) dengan logo resmi resolusi tinggi (`logo-tricon.png`)
- [x] Konfirmasi tahun Project Sidrap — sudah dipastikan **2026** oleh pemilik website
- [x] Perbaiki judul tab halaman Home — sebelumnya tertulis "PT Tricon Mitra Utama
      **Consultant**", seharusnya "**Konsultan**"
- [x] Periksa ulang deskripsi & lingkup Project Sidrap — sudah dikoreksi agar sesuai
      papan proyek di lokasi (crack repair concrete/grouting + waterproof coating pada
      pondasi WTG), bukan lagi "recoating / proteksi korosi" seperti draf awal
- [ ] **Kompres `sidrap/cover.jpg`** — ukurannya 2,4 MB, terlalu berat untuk web. Bisa
      turun ke ±280 KB (hemat 89%) tanpa perubahan dimensi maupun kualitas yang terlihat
- [ ] Hapus `sidrap/cover1.jpg` yang sudah tidak dipakai
- [ ] Tambahkan foto dokumentasi lain untuk Project Sidrap ke
      `frontend/images/portfolio/sidrap/`, lalu daftarkan nama filenya di `photos`
- [ ] Pertimbangkan memasukkan Project Sidrap ke daftar 143 proyek di halaman Portfolio
      (butuh kategori/tab filter baru, mis. "Wind Energy")
- [ ] Lengkapi link website untuk PT Duta Realtindo Perkasa (jika ada)
- [ ] Hapus file ikon sementara lama yang sudah tidak dipakai (`favicon-*.png`, `favicon1.ico`)
- [ ] Pertimbangkan memusatkan teks hero, service, dan portfolio ke sistem Pusat Data
      seperti About Us, kalau ke depannya sering berubah
- [ ] Pantau tampilan favicon di hasil pencarian Google secara berkala (estimasi 3–4 minggu)

---

## 12. Clean URL (tanpa akhiran .html)

Sejak pembaruan terbaru, semua halaman bisa diakses **tanpa akhiran `.html`**:

| Sebelum | Sekarang |
|---|---|
| `triconconsultant.com/index.html` | `triconconsultant.com/` |
| `triconconsultant.com/service.html` | `triconconsultant.com/service` |
| `triconconsultant.com/om-wind-turbine.html` | `triconconsultant.com/om-wind-turbine` |
| `triconconsultant.com/portfolio.html` | `triconconsultant.com/portfolio` |
| `triconconsultant.com/contact.html` | `triconconsultant.com/contact` |

**Cara kerjanya:** file **`.htaccess`** di root `public_html` mengatur server Apache agar:
1. Kalau ada yang membuka link lama berakhiran `.html`, otomatis dialihkan (redirect) ke
   versi bersih tanpa `.html`
2. Kalau yang diketik `/service` (tanpa `.html`), server tetap menampilkan isi file
   `service.html` yang sebenarnya, tapi address bar tetap menampilkan `/service`

**Penting saat upload ke Hostinger:**
- File `.htaccess` **wajib ikut diupload** ke `public_html` (sejajar dengan `index.html`)
- File ini **tersembunyi** (nama diawali titik) — di File Manager Hostinger, aktifkan
  opsi "Show Hidden Files" kalau tidak terlihat
- Kalau habis upload halaman jadi Error 500, kemungkinan modul `mod_rewrite` di hosting
  tidak aktif — hubungi support Hostinger untuk mengaktifkannya (umumnya sudah aktif
  secara default di semua paket Hostinger)
- Semua link navigasi (menu, tombol, logo) di 4 halaman HTML **sudah diperbarui** memakai
  format bersih ini, jadi tidak perlu diubah manual lagi

## 13. Dwibahasa (Indonesia / English)

Website sekarang punya **saklar bahasa ID / EN** di pojok kanan atas (top-bar), berlaku
di semua halaman. Pilihan bahasa disimpan otomatis di browser pengunjung (lewat
`localStorage`), jadi tetap "diingat" walau pindah halaman.

### Cara kerja & cara edit teksnya

Ada 2 sistem yang saling melengkapi:

**A) Untuk teks yang sudah terpusat** (About Us di `content-about.js`) — setiap teks
sekarang berbentuk:
```js
intro: {
  id: "Teks bahasa Indonesia...",
  en: "English text..."
}
```
Edit kedua baris `id` dan `en` sesuai kebutuhan.

**B) Untuk teks lainnya** (hero, menu, service, portfolio, form, footer, dll) — ditulis
langsung di HTML pakai 2 atribut pada elemen yang sama:
```html
<h2 data-id="Teks Bahasa Indonesia" data-en="English Text">Teks Bahasa Indonesia</h2>
```
- `data-id` = versi Bahasa Indonesia (ditampilkan secara default)
- `data-en` = versi English (ditampilkan saat pengunjung klik tombol "EN")
- Untuk teks yang mengandung tag HTML di dalamnya (misal `<strong>` atau `<span>`),
  tambahkan atribut `data-html` supaya tag-nya tetap dirender, bukan tampil sebagai
  teks mentah
- Untuk placeholder pada kolom form, pakai `data-id-placeholder` dan `data-en-placeholder`

**Yang TIDAK diterjemahkan** (sengaja dibiarkan sama di kedua bahasa karena berupa nama
diri / data teknis): nama perusahaan, alamat, nomor telepon, email, nama contact person,
nama negara/kota (Indonesia, Jakarta, dst).

### Menambah teks baru yang perlu dwibahasa
Kalau menambah konten baru (misal kartu portfolio baru) dan ingin ikut dwibahasa, tinggal
tambahkan `data-id="..."` dan `data-en="..."` pada elemen yang sama, mengikuti pola yang
sudah ada di sekitarnya. Tidak perlu edit file JS apa pun — `js/i18n.js` bekerja otomatis
untuk elemen apa pun ber-atribut ini, di halaman mana pun.

### File terkait
- `js/i18n.js` — mesin saklar bahasa (jangan diedit)
- `js/populate.js` — sudah diperbarui agar mendukung format `{id, en}` dari
  `company-data.js` / `content-*.js`

## 14. Canonical Tag (SEO)

Setiap halaman sekarang punya tag `<link rel="canonical">` di bagian `<head>`, memberi
tahu Google URL "resmi/utama" untuk halaman tersebut — berguna supaya Google tidak
menganggap `triconconsultant.com/service` dan `triconconsultant.com/service.html`
(atau versi dengan/tanpa `www`) sebagai 2 halaman berbeda yang isinya duplikat.

| Halaman | Canonical URL |
|---|---|
| `index.html` | `https://www.triconconsultant.com/` |
| `service.html` | `https://www.triconconsultant.com/service` |
| `om-wind-turbine.html` | `https://www.triconconsultant.com/om-wind-turbine` |
| `portfolio.html` | `https://www.triconconsultant.com/portfolio` |
| `contact.html` | `https://www.triconconsultant.com/contact` |

Kalau suatu saat domain berubah (misal pindah ke tanpa `www`), URL di tag canonical ini
perlu ikut disesuaikan di ke-4 file, sesuaikan dengan URL yang dipakai di Google Search
Console.

## 15. Keamanan: Paksa HTTPS + www

Sekarang `.htaccess` otomatis mengalihkan **semua** variasi alamat ke satu versi resmi:
`https://www.triconconsultant.com` — sesuai dengan yang sudah didaftarkan di canonical
tag dan Google Search Console.

| Diketik pengunjung | Otomatis dialihkan ke |
|---|---|
| `http://triconconsultant.com/...` | `https://www.triconconsultant.com/...` |
| `http://www.triconconsultant.com/...` | `https://www.triconconsultant.com/...` |
| `https://triconconsultant.com/...` | `https://www.triconconsultant.com/...` |

Manfaatnya:
- **Keamanan** — data yang dikirim (misal isian form) selalu terenkripsi, gembok hijau
  selalu muncul di browser
- **SEO** — Google tidak menganggap 4 versi alamat ini sebagai 4 halaman terpisah yang
  isinya "duplikat"; semua kredit/otoritas SEO terkumpul di satu URL resmi

Juga ditambahkan **3 header keamanan ringan** (tidak memengaruhi tampilan sama sekali):
mencegah browser "menebak" tipe file secara salah, mencegah situs lain menyisipkan
website ini ke dalam `<iframe>` mereka (anti clickjacking), dan membatasi info alamat
asal (referrer) yang dikirim ke situs lain saat pengunjung klik keluar.

**Catatan:** kalau di hPanel Hostinger Anda sudah pernah mengaktifkan toggle "Force
HTTPS" bawaan mereka, aturan ini tetap aman dipasang berbarengan (tidak akan bentrok
atau menyebabkan redirect berulang).

## 16. Sitemap.xml & Robots.txt

**`robots.txt`** — mengizinkan **semua** mesin pencari mengakses **seluruh** halaman
(`Allow: /`, tidak ada satu pun yang diblokir), lalu menunjuk lokasi sitemap. Ini
konfigurasi paling aman — tidak akan membuat situs hilang dari pencarian.

**`sitemap.xml`** — daftar 5 halaman utama beserta prioritasnya, membantu Google
menemukan dan mengindeks semua halaman lebih cepat & rapi.

### Cara mengecek robots.txt aman (PENTING dicek setelah upload)
1. Buka `https://www.triconconsultant.com/robots.txt` di browser
2. Harus terlihat isinya persis seperti file aslinya, dengan baris `Allow: /`
   (BUKAN `Disallow: /` — kalau sampai tertulis `Disallow: /` tanpa isi apa pun
   setelahnya, itu artinya SELURUH situs diblokir dari pencarian, harus segera
   diperbaiki)
3. Bisa juga dicek lewat Google Search Console → menu **Settings** → **robots.txt
   Tester** (kalau tersedia di akun Anda) untuk konfirmasi Google membacanya dengan
   benar

### Cara daftarkan sitemap ke Google
1. Buka Google Search Console
2. Menu **Sitemaps** (di sidebar kiri)
3. Masukkan `sitemap.xml`, klik **Submit**
4. Status akan berubah jadi "Success" dalam beberapa saat/hari, menampilkan berapa
   URL yang berhasil ditemukan (harusnya 5)

### Kalau menambah halaman baru nanti
Tambahkan 1 blok `<url>...</url>` baru di `sitemap.xml` untuk halaman tersebut, lalu
submit ulang di Search Console (atau tunggu Google crawl otomatis).

## 17. Project Track Record (143 proyek dari data Excel)

Di halaman Portfolio, di bawah 5 kartu klien utama (yang tetap seperti semula, tidak
diubah), sekarang ada section baru **"Rekam Jejak Proyek"** berisi **143 pengalaman
proyek** yang diambil dari file Excel `PROJECT_EXPERIANCE_TRICON_2026.xlsx` (sheet:
Power Plant, Power T&D, Amdal, Telco, Other).

### Fitur yang tersedia untuk pengunjung
- **Filter kategori** (tab: Semua, Power Plant, Power T&D, Amdal, Telco, Other) —
  masing-masing menampilkan jumlah proyek di dalam kurung
- **Kotak pencarian** — mencari berdasarkan nama proyek, klien, lokasi, atau sektor
- **Muat Lebih Banyak** — daftar dimuat 12 per halaman supaya tidak berat, tombol ini
  menambah 12 lagi setiap diklik
- Tampilan otomatis menyesuaikan HP (1 kolom), tablet (2 kolom), desktop (3 kolom)

### File terkait
- **`js/projects-data.js`** — 🎯 SATU-SATUNYA file yang perlu diedit untuk
  menambah/mengubah/menghapus proyek. Setiap proyek adalah satu blok:
  ```js
  {
    "category": "Power Plant",
    "sector": "Power Plant",
    "project": "Nama Proyek",
    "client": "Nama Klien",
    "year": "2025",
    "location": "Lokasi",
    "scope": "Lingkup pekerjaan"
  },
  ```
  `category` menentukan proyek masuk tab filter yang mana (harus persis salah satu
  dari: `Power Plant`, `Power T&D`, `Amdal`, `Telco`, `Other`). `sector` adalah label
  kecil yang tampil di kartu (boleh lebih spesifik dari category, misal "AMDAL (ESIA),
  LARAP").
- **`js/projects-render.js`** — mesin yang membangun tab, kotak cari, dan kartu-kartu
  secara otomatis dari data di atas. **Tidak perlu diedit.**

### Cara menambah proyek baru
1. Buka `js/projects-data.js`
2. Salin satu blok `{ ... }` yang sudah ada, tempel di posisi manapun dalam array
3. Ganti isinya sesuai data proyek baru, pastikan ada koma `,` di akhir blok sebelumnya
4. Simpan, upload ulang file itu — halaman Portfolio otomatis menampilkan proyek baru,
   ikut ter-filter dan ter-cari dengan benar, tanpa perlu sentuh HTML/CSS sama sekali

## 18. Halaman O&M Service — Turbin Angin (`om-wind-turbine.html`)

Ditambahkan setelah Tricon memperoleh proyek di sektor energi angin. Arah tampilannya
terinspirasi halaman *products-and-services* milik Siemens Gamesa, tapi bagian katalog
produk turbin sengaja **tidak** dibuat (Tricon bukan produsen turbin) — fokusnya langsung
ke lingkup layanan O&M dan portofolio proyek.

| Item | Nilai |
|---|---|
| URL | `https://www.triconconsultant.com/om-wind-turbine` |
| Label menu | **O&M Service** (sama di Bahasa Indonesia maupun English) |
| Posisi menu | Antara "Our Service" dan "Portfolio" |

### Isi halaman (urut dari atas)
1. **Hero** biru: label kecil "Energi Terbarukan" → judul → paragraf → tombol utama
2. **Lingkup Layanan O&M** — 8 kartu ikon, memakai gaya yang sama persis dengan halaman
   Our Service (class `.service-grid` / `.service-mini`). Untuk menambah atau mengurangi
   layanan: salin satu blok `<div class="service-mini">` di dalam `om-wind-turbine.html`,
   ganti ikon SVG dan teks `data-id` / `data-en`-nya.
3. **Portofolio** — dibangun otomatis dari `js/wind-data.js` (lihat di bawah)
4. **CTA band** + footer, sama seperti halaman lain

### Mengelola proyek turbin angin

- **`js/wind-data.js`** — 🎯 **satu-satunya file yang perlu diedit.** Setiap proyek adalah
  satu blok `{ ... }` berisi: `slug` (nama folder foto), `name`, `client`, `clientNote`,
  `logo`, `year`, `status`, `sector`, `location`, `summary`, `description`, `scope`,
  `photos`, dan `website` (opsional). Teks berbentuk `{ id: "...", en: "..." }` wajib
  diisi keduanya supaya saklar bahasa tetap benar.
- **`js/wind-render.js`** — mesin yang membangun kartu & jendela detailnya.
  **Tidak perlu diedit.**

### Tampilan menyesuaikan sendiri (tidak perlu utak-atik CSS)

| Kondisi | Yang terjadi otomatis |
|---|---|
| Baru **1 proyek** | Tampil besar: foto di kiri, keterangan di kanan — halaman tidak terlihat kosong |
| **2 proyek atau lebih** | Berubah jadi grid kartu; tinggi kartu dalam satu baris disamakan |
| Proyek punya **1 foto** | Panah & titik navigasi galeri disembunyikan |
| Proyek punya **2+ foto** | Panah, titik indikator, dan geser (swipe) otomatis aktif |
| Field `website` dihapus | Tombol "Kunjungi Website" otomatis tidak muncul |

Di jendela detail, foto ditampilkan **utuh tanpa dipotong** (`object-fit: contain`) di atas
latar biru — jadi foto potret hasil jepretan HP maupun foto mendatar sama-sama enak dilihat.

### Cara menambah proyek baru
1. Buat folder `frontend/images/portfolio/nama-slug-proyek/` (huruf kecil, spasi diganti `-`)
2. Masukkan foto-fotonya ke situ. Nama file bebas, asal ditulis sama persis di `photos`
3. Buka `js/wind-data.js`, salin satu blok `{ ... }`, tempel di bawahnya (awali koma `,`)
4. Ganti isinya sesuai data proyek baru
5. Upload ulang `js/wind-data.js` + folder fotonya. **Tidak perlu sentuh HTML/CSS.**

### ⚠️ Urutan `<script>` tidak boleh diubah
Di bagian bawah `om-wind-turbine.html`, urutannya harus tetap:
```html
<script src="js/company-data.js"></script>
<script src="js/populate.js"></script>
<script src="js/wind-data.js"></script>
<script src="js/wind-render.js"></script>
<script src="js/i18n.js"></script>
<script src="js/main.js"></script>
```
`wind-render.js` harus berada **sebelum** `i18n.js` (supaya kartu yang dibuat otomatis ikut
diterjemahkan saat tombol ID/EN diklik) dan **sebelum** `main.js` (supaya galeri foto,
tombol tutup modal, dan animasi muncul-saat-scroll ikut aktif di kartu tersebut).

### Proyek yang sudah terdaftar
**Project Sidrap — Crack Repair and Recoating**, klien **PT UPC Sidrap Bayu Energi**
(Barito Renewables / Barito Wind Energy), lokasi Sidenreng Rappang, Sulawesi Selatan,
tahun 2026.

Lingkup pekerjaan sesuai **papan proyek di lokasi**: *Crack Repair (Concrete/Grouting)
and Waterproof Coating on WTG Foundation* — yaitu perbaikan retak dengan metode
concrete/grouting dan pelapisan kedap air pada **pondasi turbin angin**, diawali
persiapan lokasi dan pencatatan kondisi awal (*record of condition*). Papan itu
tertanggal 31 Juli 2026 dengan status pekerjaan "Site Preparation".

Foto: `foto1.jpg` (pekerjaan di pondasi turbin — dipakai sebagai cover) dan `cover.jpg`
(papan selamat datang PLTB Sidrap). **Urutan di `photos` menentukan mana yang jadi cover
— yang pertama selalu jadi cover kartu.**

Catatan: logo yang dipakai adalah logo **UPC Renewables** (disalin dari folder `upc/`,
karena memang perusahaan yang sama).

**Ejaan nama klien: "Energi", bukan "Energy".** Papan lokasi PLTB menulis "PT. UPC Sidrap
Bayu **Energi**", sedangkan papan proyek menulis "**Energy**" — sudah diputuskan memakai
"Energi" di seluruh website. Ejaan ini berlaku juga di `js/projects-data.js` (10 penyebutan
sudah diseragamkan). Kalau nanti menambah proyek untuk klien ini, tulis **Energi**.

---

*Dokumen ini dibuat otomatis berdasarkan seluruh proses pengerjaan website. Simpan
bersama file website untuk referensi di masa depan.*
