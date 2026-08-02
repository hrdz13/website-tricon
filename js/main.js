// ===== Mobile nav toggle =====
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }

  // ===== Contact form -> WhatsApp =====
  // Nomor WA diambil otomatis dari js/company-data.js (phone.officeRaw)
  // Edit nomornya di company-data.js, bukan di sini.
  var WA_NUMBER = (window.TRICON_DATA && window.TRICON_DATA.phone.officeRaw) || '6281389908113';

  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      var phone = document.getElementById('phone').value.trim();
      var message = document.getElementById('req_message').value.trim();

      var text =
        'Halo Tricon, saya ingin menghubungi Anda.%0A%0A' +
        'Nama: ' + encodeURIComponent(name) + '%0A' +
        'Email: ' + encodeURIComponent(email) + '%0A' +
        'Telepon: ' + encodeURIComponent(phone) + '%0A' +
        'Pesan: ' + encodeURIComponent(message);

      var url = 'https://wa.me/' + WA_NUMBER + '?text=' + text;
      window.open(url, '_blank');
    });
  }

  // ===== Animasi muncul saat discroll (dipakai kartu portfolio, dll) =====
  // Otomatis berlaku untuk elemen apapun ber-class "reveal" — kartu baru yang
  // Anda tambahkan nanti (copy-paste) otomatis ikut animasi ini, tanpa edit JS.
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      revealEls.forEach(function (el) { io.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    }
  }

  // ===== Modal detail portfolio: klik area luar (backdrop) untuk menutup =====
  document.querySelectorAll('dialog.pf-modal').forEach(function (dialog) {
    dialog.addEventListener('click', function (e) {
      if (e.target === dialog) dialog.close();
    });
  });

  // ===== Galeri foto portfolio: swipe ATAU klik kiri/kanan langsung di foto =====
  document.querySelectorAll('.pf-modal-head .pf-gallery').forEach(function (gallery) {
    var imgs = Array.prototype.slice.call(gallery.querySelectorAll('img'));
    if (imgs.length < 2) return; // cukup 1 foto, tidak perlu kontrol navigasi

    // Bungkus tiap foto jadi "slide" + area tap kiri/kanan tepat di atas foto
    // (dibungkus lewat JS supaya swipe sentuh tetap jalan normal, karena
    // area tap ini jadi anak dari elemen yang bisa di-scroll, bukan elemen
    // terpisah yang malah menghalangi gesture geser).
    imgs.forEach(function (img, i) {
      var slide = document.createElement('div');
      slide.className = 'pf-slide';
      img.parentNode.insertBefore(slide, img);
      slide.appendChild(img);

      var tap = document.createElement('button');
      tap.type = 'button';
      tap.className = 'pf-slide-tap';
      tap.setAttribute('aria-label', 'Ganti foto dokumentasi');
      tap.innerHTML =
        '<span class="pf-slide-arrow left"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M15 6l-6 6 6 6"/></svg></span>' +
        '<span class="pf-slide-arrow right"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M9 6l6 6-6 6"/></svg></span>';
      slide.appendChild(tap);

      tap.addEventListener('click', function (e) {
        var rect = tap.getBoundingClientRect();
        var clickX = e.clientX - rect.left;
        goTo(currentIndex() + (clickX > rect.width / 2 ? 1 : -1));
      });
    });

    // Titik indikator posisi foto
    var dots = document.createElement('div');
    dots.className = 'pf-dots';
    imgs.forEach(function (_, i) {
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.setAttribute('aria-label', 'Ke foto ' + (i + 1));
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', function () { goTo(i); });
      dots.appendChild(dot);
    });
    gallery.closest('.pf-modal-head').appendChild(dots);

    function currentIndex() {
      return Math.round(gallery.scrollLeft / gallery.clientWidth) || 0;
    }
    function goTo(i) {
      var max = imgs.length - 1;
      if (i < 0) i = max;
      if (i > max) i = 0;
      gallery.scrollTo({ left: i * gallery.clientWidth, behavior: 'smooth' });
    }
    function updateDots() {
      var idx = currentIndex();
      dots.querySelectorAll('button').forEach(function (d, i) {
        d.classList.toggle('active', i === idx);
      });
    }

    var scrollTimer;
    gallery.addEventListener('scroll', function () {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(updateDots, 80);
    });

    // Reset ke foto pertama tiap kali modal ditutup, supaya rapi saat dibuka lagi
    var dialog = gallery.closest('dialog');
    if (dialog) {
      dialog.addEventListener('close', function () {
        gallery.scrollLeft = 0;
        updateDots();
      });
    }
  });

  // ===== Back to Top =====
  var backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) backToTop.classList.add('show');
      else backToTop.classList.remove('show');
    });
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
