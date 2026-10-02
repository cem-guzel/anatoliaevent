import { posts } from "./posts";
import MEDIA from "@/lib/media";
import type { BlogPost, BlogPostWithMeta } from "./types";

export type { BlogBlock, BlogPost, BlogPostWithMeta } from "./types";
export { formatDate, formatMonthYear, slugifyHeading, stripInline } from "./format";
import { stripInline } from "./format";

// ─────────────────────────────────────────────────────────────
// VERİ KATMANI (yalnızca sunucuda çalışır)
// NOT: Burada dosya sistemi (fs) KULLANILMAMALI. Kullanılırsa Vercel
// public klasörünün tamamını (videolar dahil) sunucu paketine ekler.
// Sayfalar yazılara SADECE bu fonksiyonlarla ulaşır.
// Admin paneline geçtiğimizde yalnızca loadPosts() içini
// Prisma sorgusuyla değiştireceğiz; sayfalara dokunmayacağız.
// ─────────────────────────────────────────────────────────────

async function loadPosts(): Promise<BlogPost[]> {
  return posts;
}

// Bir yazının görsel yolu boş ya da geçersizse, kırık görsel göstermek
// yerine sitenin kendi fotoğraflarından biri kullanılır.
const FALLBACK_IMAGES: string[] = [
  MEDIA.photos.luksmasaduzen,
  MEDIA.photos.yukarıdanGece,
  MEDIA.photos.masaCicekSabah,
  MEDIA.photos.koltuklular,
  MEDIA.photos.kapalıAlan,
  MEDIA.photos.birciftFotoAlbum,
  MEDIA.photos.ciftFotografi,
  MEDIA.photos.kina,
];

/**
 * Yanlış yazılmış görsel yollarını düzeltir:
 *   "blog/a.jpg"         → "/blog/a.jpg"
 *   "public/blog/a.jpg"  → "/blog/a.jpg"
 *   "blog\\a.jpg"        → "/blog/a.jpg"
 *   "res.cloudinary.com/..." → "https://res.cloudinary.com/..."
 * Düzeltilemeyen yollar için "" döner (yedek görsel kullanılır).
 */
function normalizeSrc(raw: string | undefined | null): string {
  let src = (raw ?? "").trim().replace(/\\/g, "/");
  if (!src) return "";
  if (/^https?:\/\//i.test(src)) return src;
  if (src.startsWith("//")) return "https:" + src;
  if (/^[a-z]:\//i.test(src)) return ""; // bilgisayardaki dosya yolu (C:/...) kullanılamaz
  if (/^(www\.|res\.cloudinary\.com)/i.test(src)) return "https://" + src;
  src = src.replace(/^\.?\/?(public\/)?/i, "/");
  return src;
}

// En az kullanılan yedek görseli seçer ki aynı görsel yan yana tekrar etmesin
function pickFallback(usage: Map<string, number>): string {
  const pick = FALLBACK_IMAGES.reduce((x, y) => ((usage.get(y) ?? 0) < (usage.get(x) ?? 0) ? y : x));
  usage.set(pick, (usage.get(pick) ?? 0) + 1);
  return pick;
}

function countWords(post: BlogPost): number {
  const text = post.content
    .map((b) => {
      if (b.type === "list") return b.items.join(" ");
      if (b.type === "image") return b.caption ?? "";
      return b.text;
    })
    .join(" ");
  return stripInline(text).split(/\s+/).filter(Boolean).length;
}

function withMeta(post: BlogPost, usage: Map<string, number>): BlogPostWithMeta {
  const cover = normalizeSrc(post.coverImage) || pickFallback(usage);
  return {
    ...post,
    coverImage: cover,
    content: post.content.map((b) =>
      b.type === "image" ? { ...b, src: normalizeSrc(b.src) || pickFallback(usage) } : b
    ),
    readingMinutes: Math.max(1, Math.ceil(countWords(post) / 200)),
  };
}

export async function getAllPosts(): Promise<BlogPostWithMeta[]> {
  const all = [...(await loadPosts())].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  const usage = new Map<string, number>();
  all.forEach((p) => {
    const c = normalizeSrc(p.coverImage);
    if (c) usage.set(c, (usage.get(c) ?? 0) + 1);
  });
  return all.map((p) => withMeta(p, usage));
}

export async function getLatestPosts(limit = 3): Promise<BlogPostWithMeta[]> {
  return (await getAllPosts()).slice(0, limit);
}

export async function getPostBySlug(slug: string): Promise<BlogPostWithMeta | null> {
  const all = await getAllPosts();
  return all.find((p) => p.slug === slug) ?? null;
}

/** Aynı kategoridekiler önce, sonra en yeniler. */
export async function getRelatedPosts(slug: string, limit = 3): Promise<BlogPostWithMeta[]> {
  const all = await getAllPosts();
  const current = all.find((p) => p.slug === slug);
  const others = all.filter((p) => p.slug !== slug);
  if (!current) return others.slice(0, limit);
  const same = others.filter((p) => p.category === current.category);
  const rest = others.filter((p) => p.category !== current.category);
  return [...same, ...rest].slice(0, limit);
}

/** Okuma sırasındaki bir sonraki yazı (en eskiden sonra başa döner). */
export async function getNextPost(slug: string): Promise<BlogPostWithMeta | null> {
  const all = await getAllPosts();
  if (all.length < 2) return null;
  const i = all.findIndex((p) => p.slug === slug);
  return all[(i + 1) % all.length];
}