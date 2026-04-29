/* ================================================================
   galeri.js  —  Kirkyama Modal Galeri Motoru  (v4)

   NASIL ÇALIŞIR:
   Sayfadaki herhangi bir HTML öğesine
     data-galeri-ac="filateli"
   veya
     data-galeri-ac="fotografcilik"
   özniteliği eklemek, o öğeyi galeri tetikleyicisi yapar.
   Tıklandığında ilgili galeri modalı açılır.

   Ek olarak .gallery-header varsa oraya da buton enjekte eder
   (geriye dönük uyumluluk).

   Dış bağımlılık: 0  |  Harici kütüphane: yok
================================================================ */
(function () {
  'use strict';

  /* ── 0. AYARLAR ─────────────────────────────────────────── */
  var SAYFA_BOYUTU = 12;

  /* ── 1. VERİ KONTROLÜ ───────────────────────────────────── */
  if (!Array.isArray(window.GK_GALERILER) || window.GK_GALERILER.length === 0) {
    console.warn('galeri.js: window.GK_GALERILER dizisi bulunamadı.');
    return;
  }

  var GALERILER    = window.GK_GALERILER;
  var aktifGaleri  = null;
  var aktifIndex   = 0;
  var yuklenmisSay = 0;
  var touchBasX    = null;

  /* ── 2. MODAL + LİGHTBOX HTML ENJEKTE ET ───────────────── */
  var sarap = document.createElement('div');
  sarap.innerHTML = [
    '<div class="gk-modal" id="gk-modal" role="dialog" aria-modal="true" aria-label="Galeri">',
      '<div class="gk-modal-perde" id="gk-perde"></div>',
      '<div class="gk-modal-pencere">',
        '<header class="gk-modal-header">',
          '<div class="gk-modal-header-bilgi">',
            '<h2 class="gk-modal-baslik"  id="gk-modal-baslik"></h2>',
            '<span class="gk-modal-altbaslik" id="gk-modal-altbaslik"></span>',
            '<div class="gk-ilerleme-satin">',
              '<div class="gk-ilerleme-bar" id="gk-ilerleme-bar">',
                '<div class="gk-ilerleme-dolu" id="gk-ilerleme-dolu"></div>',
              '</div>',
              '<span class="gk-modal-sayac-badge" id="gk-modal-sayac-badge"></span>',
            '</div>',
          '</div>',
          '<button class="gk-modal-kapat" id="gk-modal-kapat" aria-label="Kapat">✕ KAPAT [ESC]</button>',
        '</header>',
        '<div class="gk-modal-govde" id="gk-modal-govde">',
          '<div class="gk-izgara" id="gk-izgara"></div>',
          '<div class="gk-daha-fazla-alan" id="gk-daha-fazla-alan">',
            '<button class="gk-daha-fazla-btn" id="gk-daha-fazla-btn">',
              '<span id="gk-df-metin">DAHA FAZLA YÜKLE</span>',
              '<span class="gk-df-sayac" id="gk-df-sayac"></span>',
            '</button>',
          '</div>',
        '</div>',
      '</div>',
    '</div>',

    '<div class="gk-lightbox" id="gk-lightbox" role="dialog" aria-modal="true" aria-label="Büyük görünüm">',
      '<div class="gk-lb-topbar">',
        '<span class="gk-lb-sayac" id="gk-lb-sayac"></span>',
        '<button class="gk-lb-kapat" id="gk-lb-kapat" aria-label="Kapat">&times;</button>',
      '</div>',
      '<button class="gk-lb-ok gk-sol" id="gk-lb-onceki" aria-label="Önceki">&#8249;</button>',
      '<img src="" alt="Büyük görünüm" class="gk-lb-resim" id="gk-lb-resim" />',
      '<button class="gk-lb-ok gk-sag" id="gk-lb-sonraki" aria-label="Sonraki">&#8250;</button>',
      '<div class="gk-lb-altbar">',
        '<span>← → GEZİN</span>',
        '<span>ESC KAPAT</span>',
        '<span>DIŞARI TIKLA KAPAT</span>',
      '</div>',
    '</div>'
  ].join('');

  document.body.appendChild(sarap);

  /* DOM Referansları */
  var modal        = document.getElementById('gk-modal');
  var perde        = document.getElementById('gk-perde');
  var modalBaslik  = document.getElementById('gk-modal-baslik');
  var modalAlt     = document.getElementById('gk-modal-altbaslik');
  var modalSayac   = document.getElementById('gk-modal-sayac-badge');
  var modalKapat   = document.getElementById('gk-modal-kapat');
  var izgara       = document.getElementById('gk-izgara');
  var modalGovde   = document.getElementById('gk-modal-govde');
  var dfAlan       = document.getElementById('gk-daha-fazla-alan');
  var dfBtn        = document.getElementById('gk-daha-fazla-btn');
  var dfMetin      = document.getElementById('gk-df-metin');
  var dfSayac      = document.getElementById('gk-df-sayac');
  var ilerlemeDolu = document.getElementById('gk-ilerleme-dolu');
  var lightbox     = document.getElementById('gk-lightbox');
  var lbSayac      = document.getElementById('gk-lb-sayac');
  var lbKapat      = document.getElementById('gk-lb-kapat');
  var lbOnceki     = document.getElementById('gk-lb-onceki');
  var lbSonraki    = document.getElementById('gk-lb-sonraki');
  var lbResim      = document.getElementById('gk-lb-resim');

  /* ── 3. ID → GALERİ NESNESI HARITASI ───────────────────────
     Galeri id'siyle ("filateli", "fotografcilik" vb.)
     ilgili galeri nesnesini hızlıca bulmak için.
  ──────────────────────────────────────────────────────────── */
  var galeriMap = {};
  GALERILER.forEach(function (g) {
    galeriMap[g.id] = g;
  });

  /* ── 4a. data-galeri-ac ÖZNİTELİĞİ TARAMASI ────────────────
     Sayfadaki her [data-galeri-ac] öğesini bul ve
     tıklanabilir tetikleyici olarak kaydet.
     Bu tarama DOM hazır olduktan sonra çalışır.
  ──────────────────────────────────────────────────────────── */
  function tetikleyicileriKur() {
    var tetikleyiciler = document.querySelectorAll('[data-galeri-ac]');

    tetikleyiciler.forEach(function (el) {
      var gid = el.getAttribute('data-galeri-ac');
      var g   = galeriMap[gid];

      if (!g) {
        console.warn('galeri.js: "' + gid + '" id\'li galeri bulunamadı.');
        return;
      }

      /* Klavye erişilebilirliği */
      if (!el.getAttribute('tabindex')) el.setAttribute('tabindex', '0');
      if (!el.getAttribute('role'))     el.setAttribute('role', 'button');

      /* Nabız noktası enjekte et — sağ üst köşe */
      var nokta = document.createElement('span');
      nokta.className = 'gk-nabiz-nokta';
      nokta.setAttribute('aria-hidden', 'true');
      el.appendChild(nokta);

      el.addEventListener('click', function () { modalAc(g); });
      el.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          modalAc(g);
        }
      });
    });

    if (tetikleyiciler.length > 0) {
      console.info('galeri.js: ' + tetikleyiciler.length + ' tetikleyici bağlandı.');
    }
  }

  /* ── 4b. .gallery-header ENJEKTE (geriye dönük uyumluluk) ──
     Eski yöntem: .gallery-header sınıflı element varsa
     oraya da buton enjekte et.
  ──────────────────────────────────────────────────────────── */
  function headerButonlariKur() {
    var header = document.querySelector('.gallery-header');
    if (!header) return;

    var butonSarap = document.createElement('div');
    butonSarap.style.cssText = 'display:flex;align-items:center;gap:8px;flex-wrap:wrap;';

    GALERILER.forEach(function (g) {
      var btn = document.createElement('button');
      btn.className   = 'gk-ac-btn';
      btn.textContent = g.butonEtiket || g.baslik;
      btn.setAttribute('aria-label', g.baslik + ' galerisini aç');
      btn.addEventListener('click', function () { modalAc(g); });
      butonSarap.appendChild(btn);
    });

    header.insertBefore(butonSarap, header.firstChild);
  }

  /* DOM hazır olduktan sonra her iki kurulum da çalışsın */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      tetikleyicileriKur();
      headerButonlariKur();
    });
  } else {
    tetikleyicileriKur();
    headerButonlariKur();
  }

  /* ── 5. SAYFALAMA YARDIMCILARI ──────────────────────────── */
  function kartEkle(i) {
    var resimler = aktifGaleri.resimler;
    var kart = document.createElement('div');
    kart.className = 'gk-kart gk-kart-giris';
    kart.setAttribute('data-sira', (i + 1) + ' / ' + resimler.length);
    kart.setAttribute('role', 'button');
    kart.setAttribute('tabindex', '0');
    kart.setAttribute('aria-label', (i + 1) + '. fotoğrafı büyüt');
    kart.style.animationDelay = Math.min((i % SAYFA_BOYUTU) * 30, 300) + 'ms';

    var img = document.createElement('img');
    img.className = 'gk-kart-img';
    img.src       = resimler[i];
    img.alt       = aktifGaleri.baslik + ' — ' + (i + 1) + '. fotoğraf';
    img.loading   = 'lazy';

    kart.appendChild(img);
    izgara.appendChild(kart);

    (function (idx) {
      kart.addEventListener('click', function () { lightboxAc(idx); });
      kart.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); lightboxAc(idx); }
      });
    })(i);
  }

  function ilerlemeGuncelle() {
    var toplam = aktifGaleri ? aktifGaleri.resimler.length : 0;
    var yuzde  = toplam ? (yuklenmisSay / toplam) * 100 : 0;
    ilerlemeDolu.style.width = yuzde + '%';
    modalSayac.textContent   = yuklenmisSay + ' / ' + toplam + ' FOTOĞRAF GÖSTERİLİYOR';
  }

  function dfDurumGuncelle() {
    var toplam = aktifGaleri ? aktifGaleri.resimler.length : 0;
    var kalan  = toplam - yuklenmisSay;
    if (kalan <= 0) {
      dfAlan.style.display = 'none';
    } else {
      dfAlan.style.display = 'flex';
      dfSayac.textContent  = '(+' + Math.min(kalan, SAYFA_BOYUTU) + ' / ' + kalan + ' kaldı)';
    }
  }

  /* ── 6. MODAL FONKSİYONLARI ─────────────────────────────── */
  function modalAc(galeri) {
    aktifGaleri  = galeri;
    yuklenmisSay = 0;
    var resimler = galeri.resimler || [];

    modalBaslik.textContent = galeri.baslik    || '';
    modalAlt.textContent    = galeri.altBaslik || '';
    izgara.innerHTML        = '';
    ilerlemeDolu.style.width = '0%';
    modalGovde.scrollTop    = 0;

    if (resimler.length === 0) {
      izgara.innerHTML =
        '<div class="gk-bos">' +
          '<span class="gk-bos-kod">STATUS: NO_IMAGES_FOUND</span>' +
          '<p class="gk-bos-metin">Henüz resim eklenmemiş.<br>' +
          'İlgili data dosyasındaki <em>resimler</em> dizisini doldurun.</p>' +
        '</div>';
      dfAlan.style.display = 'none';
    } else {
      var ilkGrup = Math.min(SAYFA_BOYUTU, resimler.length);
      for (var i = 0; i < ilkGrup; i++) kartEkle(i);
      yuklenmisSay = ilkGrup;
      ilerlemeGuncelle();
      dfDurumGuncelle();
    }

    modal.classList.add('gk-acik');
    document.body.style.overflow = 'hidden';
    modalKapat.focus();
  }

  function modalKapatFn() {
    modal.classList.remove('gk-acik');
    document.body.style.overflow = '';
    setTimeout(function () {
      izgara.innerHTML         = '';
      aktifGaleri              = null;
      yuklenmisSay             = 0;
      ilerlemeDolu.style.width = '0%';
    }, 350);
  }

  dfBtn.addEventListener('click', function () {
    if (!aktifGaleri) return;
    var resimler = aktifGaleri.resimler;
    var bitis    = Math.min(yuklenmisSay + SAYFA_BOYUTU, resimler.length);
    dfMetin.textContent = 'YÜKLENİYOR…';
    dfBtn.disabled      = true;
    setTimeout(function () {
      for (var i = yuklenmisSay; i < bitis; i++) kartEkle(i);
      yuklenmisSay = bitis;
      ilerlemeGuncelle();
      dfDurumGuncelle();
      dfMetin.textContent = 'DAHA FAZLA YÜKLE';
      dfBtn.disabled      = false;
      var tumKartlar = izgara.querySelectorAll('.gk-kart');
      var ilkYeni    = tumKartlar[yuklenmisSay - SAYFA_BOYUTU];
      if (ilkYeni) ilkYeni.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  });

  /* ── 7. LİGHTBOX FONKSİYONLARI ─────────────────────────── */
  function lightboxAc(index) {
    aktifIndex = Math.max(0, Math.min(index, aktifGaleri.resimler.length - 1));
    resimGoster(aktifIndex, false);
    lightbox.classList.add('gk-acik');
    lbKapat.focus();
  }

  function lightboxKapatFn() {
    lightbox.classList.remove('gk-acik');
    setTimeout(function () { lbResim.src = ''; }, 300);
  }

  function resimGoster(index, animasyonlu) {
    if (animasyonlu === undefined) animasyonlu = true;
    aktifIndex   = index;
    var resimler = aktifGaleri ? aktifGaleri.resimler : [];

    if (animasyonlu) {
      lbResim.classList.add('gk-gecis');
      setTimeout(function () {
        lbResim.src = resimler[aktifIndex] || '';
        lbResim.classList.remove('gk-gecis');
      }, 210);
    } else {
      lbResim.src = resimler[aktifIndex] || '';
    }

    lbSayac.textContent     = (aktifIndex + 1) + ' / ' + resimler.length;
    lbOnceki.style.opacity  = aktifIndex === 0 ? '0.2' : '1';
    lbSonraki.style.opacity = aktifIndex === resimler.length - 1 ? '0.2' : '1';
  }

  function sonraki() { if (aktifGaleri && aktifIndex < aktifGaleri.resimler.length - 1) resimGoster(aktifIndex + 1); }
  function onceki()  { if (aktifGaleri && aktifIndex > 0) resimGoster(aktifIndex - 1); }

  /* ── 8. EVENT LİSTENER'LAR ──────────────────────────────── */
  modalKapat.addEventListener('click', modalKapatFn);
  perde.addEventListener('click', modalKapatFn);
  lbKapat.addEventListener('click', lightboxKapatFn);
  lbOnceki.addEventListener('click', onceki);
  lbSonraki.addEventListener('click', sonraki);

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) lightboxKapatFn();
  });

  document.addEventListener('keydown', function (e) {
    var lbAcik    = lightbox.classList.contains('gk-acik');
    var modalAcik = modal.classList.contains('gk-acik');
    if (lbAcik) {
      if (e.key === 'Escape')     { lightboxKapatFn(); return; }
      if (e.key === 'ArrowRight') { sonraki();         return; }
      if (e.key === 'ArrowLeft')  { onceki();          return; }
    } else if (modalAcik) {
      if (e.key === 'Escape') modalKapatFn();
    }
  });

  lightbox.addEventListener('touchstart', function (e) {
    touchBasX = e.changedTouches[0].clientX;
  }, { passive: true });

  lightbox.addEventListener('touchend', function (e) {
    if (touchBasX === null) return;
    var fark = e.changedTouches[0].clientX - touchBasX;
    if (fark >  50) onceki();
    if (fark < -50) sonraki();
    touchBasX = null;
  }, { passive: true });

})();