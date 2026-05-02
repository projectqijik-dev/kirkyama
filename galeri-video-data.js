/* ================================================================
   galeri-video-data.js  —  Video Galerisi Veri Dosyası

   YAPMANIZ GEREKEN TEK ŞEY:
   Aşağıdaki "videolar" dizisindeki örnek satırları silip
   kendi YouTube ve Vimeo linklerinizi yazmanızdır.

   Her video şu formatta bir nesne:
   {
     baslik : "Videonun Başlığı",
     url    : "https://www.youtube.com/watch?v=XXXX",
     sure   : "12:34"   ← isteğe bağlı, boş bırakabilirsiniz
   }

   DESTEKLENEN URL FORMATLARI:
   YouTube : https://www.youtube.com/watch?v=VIDEO_ID
             https://youtu.be/VIDEO_ID
             https://www.youtube.com/shorts/VIDEO_ID
   Vimeo   : https://vimeo.com/VIDEO_ID
             https://vimeo.com/video/VIDEO_ID
================================================================ */

window.GK_GALERILER = window.GK_GALERILER || [];

window.GK_GALERILER.push({

  /* Galeri kimliği — data-galeri-ac="video" ile eşleşmeli */
  id : "video",

  /* Galeri türü — mutlaka "video" olmalı */
  tip: "video",

  /* Header'daki tetikleyici buton etiketi */
  butonEtiket: "▶ VİDEO ARŞİVİ",

  /* Modal başlık ve alt başlık */
  baslik   : "VİDEO ARŞİVİ",
  altBaslik: "ARŞİV_E  //  YOUTUBE & VİMEO  //  BELGESEL & ANLATIM",

  /* ──────────────────────────────────────────────────────
     VİDEOLARINIZI BURAYA EKLEYİN
     baslik : Galeride görünecek şık başlık
     url    : YouTube veya Vimeo linki
     sure   : Videonun süresi (isteğe bağlı, ör: "8:42")
  ────────────────────────────────────────────────────── */
  videolar: [

    // ── BURAYA LİNKLERİNİZİ YAPIŞTIRIN ──
    // Hazır olduğunuzda aşağıdaki örnek satırları silin:

    {
      baslik: "Ara Güler, Soru-Yorum (CNN TÜRK 2013)",
      url   : "https://vimeo.com/1188688617",
      sure  : "1s. 41dk."
    },
	{
      baslik: "What is the definition of life? (Star Trek Next Generation S06E09)",
      url   : "https://vimeo.com/231944453",
      sure  : "02:30"
    },
	{
      baslik: "King Lear and Glouceater Scene",
      url   : "https://youtu.be/XJHLYSEDf3c",
      sure  : "1:41"
    },
	{
      baslik: "Dear Doctor (Star Trek Enterprise S1E13)",
      url   : "https://vimeo.com/1188687325",
      sure  : "03:19"
    },
    {
      baslik: "Noche Blanche Psikanaliz",
      url   : "https://vimeo.com/1188687352",
      sure  : "02:07"
    },   
    {
      baslik: "Isaac Asimov talks about Star Trek",
      url   : "https://vimeo.com/496517388",
      sure  : "5:30"
    },	
	{
      baslik: "Van Gogh Stary Night (Doctor Who S5E10)",
      url   : "https://vimeo.com/232491639",
      sure  : "01:30"
    },
    {
      baslik: "Erkan Oğur, İsmail Hakkı Demircioğlu Bugün Ben Bir Güzel Gördüm (26 December 2014 Batman Concert)",
      url   : "https://vimeo.com/115452780",
      sure  : "03:51"
    },
			    {
      baslik: "Erkan Oğur ve İsmail Hakkı Demircioğlu - Dursun Kaptan (26 December 2014 Batman Concert)",
      url   : "https://vimeo.com/130425731",
      sure  : "03:23"
    },
	{
      baslik: "Ezginin Gunlugu / Gemi (4 April 2013 Batman Concert)",
      url   : "https://vimeo.com/63380767",
      sure  : "02:45"
    },
	{
      baslik: "King Lear and Glouceater Scene",
      url   : "https://vimeo.com/1188687327",
      sure  : "00:33"
    },

  ]

}); //
