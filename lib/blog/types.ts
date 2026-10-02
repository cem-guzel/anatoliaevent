// ─────────────────────────────────────────────────────────────
// BLOG VERİ TİPLERİ
// İleride admin paneline bağlarken Prisma modeli de bu yapıya
// birebir uyacak şekilde kurulacak (content alanı JSON olarak tutulur).
// ─────────────────────────────────────────────────────────────

// Metin içinde kullanılabilen biçimler:
//   [bağlantı metni](/menuler)  → site içi ya da dış bağlantı
//   **kalın metin**             → kalın yazı
export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "image"; src: string; alt: string; caption?: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  coverImage: string;
  coverAlt: string;
  author: string;
  publishedAt: string; // ISO tarih: "2026-09-28"
  updatedAt?: string; // Yazıyı sonradan güncellerseniz buraya yeni tarihi yazın
  featured?: boolean;
  content: BlogBlock[];
};

export type BlogPostWithMeta = BlogPost & {
  readingMinutes: number;
};
