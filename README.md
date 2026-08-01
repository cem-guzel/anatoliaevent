# Anatolia Event

Bir etkinlik ve düğün mekanı için geliştirilmiş, görsel yönetimi ve yapay zeka destekli müşteri asistanı içeren modern bir tanıtım platformu.

## Özellikler

- **Modern, Duyarlı (Responsive) Tasarım** — tüm cihazlarla tam uyumlu, yüksek performanslı arayüz
- **GSAP Scroll Animasyonları** — kullanıcı deneyimini zenginleştiren özel scroll animasyonları
- **Görsel Yönetimi** — admin paneli üzerinden Cloudinary entegrasyonuyla mekan görsellerinin yüklenmesi ve yönetimi
- **AI Destekli Chatbot** — Groq API ve vector tabanlı (pgvector) embedding altyapısıyla çalışan, işletmenin gerçek verisine dayanarak SSS sorularını yanıtlayan bir asistan
- **Admin Paneli** — içerik ve görsellerin yönetildiği korumalı bir yönetim ekranı

## Teknoloji Yığını

- **Framework:** Next.js, React
- **Veritabanı:** PostgreSQL (pgvector), Prisma ORM
- **AI:** Groq API, self-hosted embedding modeli (RAG mimarisi)
- **Görsel Yönetimi:** Cloudinary
- **Animasyon:** GSAP
- **Deploy:** Vercel

## Kurulum

1. Depoyu klonla:
```bash
   git clone https://github.com/cem-guzel/anatoliaevent.git
   cd anatolia-event
```

2. Bağımlılıkları kur:
```bash
   npm install
```

3. Proje kök dizininde bir `.env` dosyası oluştur ve aşağıdaki değişkenleri tanımla:

DATABASE_URL=
GROQ_API_KEY=
NEXT_PUBLIC_ADMIN_PASSWORD=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=

4. Geliştirme sunucusunu başlat:
```bash
   npm run dev
```

   Uygulama `http://localhost:3000` adresinde çalışmaya başlayacaktır.