// lib/media.ts
// ─────────────────────────────────────────────────────────────────────
// Anatolıa Event — Merkezi Görsel ve Video Yönetimi
// Kullanım: import MEDIA from "@/lib/media"
// ─────────────────────────────────────────────────────────────────────

export const MEDIA = {

  // ── Tüm Fotoğraflar ───────────────────────────────────────────────
  photos: {
    jpeg1:              "/1.jpeg",
    jpeg2:              "/2.jpeg",
    jpeg3:              "/3.jpeg",
    jpeg4:              "/4.jpeg",
    jpeg5:              "/5.jpeg",
    jpeg6:              "/6.jpeg",
    jpeg7:              "/7.jpeg",
    birciftFotoAlbum:   "/birciftinfotografalbumu.JPG",
    ciftFotografi:      "/ciftfotografi.JPG",
    ciftinvarildeki:    "/ciftinvarildekifotografalbumu.jpg",
    evlenmeTeklifi:     "/evlenmeteklifikaranlikkirmizi.jpg",
    kapalıAlan:         "/kapalialandaortam.jpg",
    kina:               "/kina.jpg",
    kina2:              "/kina2.jpg",
    koltuklular:        "/koltukluluksdugun.jpg",
    luksmasaduzen:      "/luksmasaduzen.JPG",
    masaCicekSabah:     "/masaciceksabah.JPG",
    masaDuzeni:         "/masaduzeni.jpg",       // Türkçe karaktersiz versiyon
    masaDuzeniJPG:      "/masaduzeni.JPG",       // Büyük harfli versiyon
    yukarıdanGece:      "/yukaridancekilmisgece.JPG",
  },

  // ── Tüm Videolar ──────────────────────────────────────────────────
  videos: {
    v1:  "/1.mp4",
    v2:  "/2.mp4",
    v3:  "/3.mp4",
    v4:  "/4.mp4",
    v5:  "/5.MP4",
    v6:  "/6.MP4",
    v7:  "/7.MP4",
    v8:  "/8.MP4",
    v9:  "/9.MP4",
    v10: "/10.mp4",
    v11: "/11.mp4",
    v12: "/12.mp4",
    v13: "/13.mp4",
    v14: "/14.mp4",
    v15: "/15.mp4",
    v16: "/16.mp4",
  },

  // ── Ana Sayfa Hero ────────────────────────────────────────────────
  // Hero için video kullanalım — 2.mp4 gece düğün çekimi
  home: {
    heroVideo:   "/10.mp4",   // Masaüstü + Mobil — gece düğün videosu
    heroPoster:  "/anasayfavideo.png",
    heroFallback: "/anasayfavideo.png", // Video yüklenemezse gösterilir
  },

  // ── About Bileşeni ────────────────────────────────────────────────
  about: {
    mainImage: "/luksmasaduzen.JPG",   // Lüks masa düzeni — daha kaliteli
  },

  // ── Hakkımızda Sayfası ────────────────────────────────────────────
  hakkimizda: {
    hero:    "/yukaridancekilmisgece.JPG",
    story1:  "/masaciceksabah.JPG",
    story2:  "/luksmasaduzen.JPG",
    team:    "/ciftfotografi.JPG",
    galeriSerit: [
      "/yukaridancekilmisgece.JPG",
      "/luksmasaduzen.JPG",
      "/masaciceksabah.JPG",
      "/kapalialandaortam.jpg",
      "/koltukluluksdugun.jpg",
      "/birciftinfotografalbumu.JPG",
    ],
  },

  // ── ServicesPreview (Ana Sayfa Akordeon) ──────────────────────────
  // En kaliteli, yeni fotoğraflar kullanılıyor
  servicesPreview: {
    davet:     "/koltukluluksdugun.jpg",          // Lüks düğün salonu genel
    kirDugun:  "/yukaridancekilmisgece.JPG",      // Havadan gece çekimi — wow efekti
    istemeSoz: "/kina.jpg",                       // Kına/söz ortamı samimi
    nisan:     "/kapalialandaortam.jpg",              // Lüks masa düzeni zarif
  },

  // ── Hizmetlerimiz Sayfası ─────────────────────────────────────────
  hizmetler: {
    hero:      "/kina.jpg",
    davet:     "/koltukluluksdugun.jpg",
    kirDugun:  "/yukaridancekilmisgece.JPG",
    istemeSoz: "/kina.jpg",
    nisan:     "/luksmasaduzen.JPG",
  },

  // ── Galeri Sayfası ────────────────────────────────────────────────
  galeri: {
    hero: "/masaduzeni.JPG",
    staticGrid: [
      "/yukaridancekilmisgece.JPG",
      "/luksmasaduzen.JPG",
      "/masaciceksabah.JPG",
      "/kapalialandaortam.jpg",
      "/koltukluluksdugun.jpg",
      "/birciftinfotografalbumu.JPG",
      "/ciftfotografi.JPG",
      "/kina.jpg",
      "/kina2.jpg",
      "/ciftinvarildekifotografalbumu.jpg",
      "/evlenmeteklifikaranlikkirmizi.jpg",
      "/masaduzeni.JPG",
    ],
  },

  // ── Menüler Sayfası ───────────────────────────────────────────────
  menuler: {
    hero:         "/luksmasaduzen.JPG",
    microWedding: "/koltukluluksdugun.jpg",
  },

  // ── İletişim Sayfası ──────────────────────────────────────────────
  iletisim: {
    hero: "/kapalialandaortam.jpg",
  },

  // ── SSS Sayfası ───────────────────────────────────────────────────
  sss: {
    hero: "/masaciceksabah.JPG",
  },

} as const;

export default MEDIA;