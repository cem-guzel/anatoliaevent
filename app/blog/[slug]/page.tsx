import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import ArticleBody from "@/components/blog/ArticleBody";
import ArticleView from "@/components/blog/ArticleView";
import PostCard from "@/components/blog/PostCard";
import {
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
  getNextPost,
  formatDate,
  slugifyHeading,
} from "@/lib/blog";

const SITE = "https://xn--krdn-2raab1zsf.com.tr";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Yazı bulunamadı" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: "article",
      locale: "tr_TR",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [post.author],
      images: [{ url: post.coverImage, alt: post.coverAlt }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const [related, next] = await Promise.all([getRelatedPosts(slug, 4), getNextPost(slug)]);
  const more = related.filter((p) => p.slug !== next?.slug).slice(0, 3);

  const headings = post.content
    .filter((b) => b.type === "h2")
    .map((b) => ({ id: slugifyHeading(b.text), text: b.text }));

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      image: post.coverImage.startsWith("http") ? post.coverImage : `${SITE}${post.coverImage}`,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt ?? post.publishedAt,
      author: { "@type": "Organization", name: post.author, url: SITE },
      publisher: {
        "@type": "Organization",
        name: "Anatolia Event",
        url: SITE,
        logo: { "@type": "ImageObject", url: `${SITE}/logo.png` },
      },
      mainEntityOfPage: `${SITE}/blog/${post.slug}`,
      articleSection: post.category,
      inLanguage: "tr-TR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: `${SITE}/blog/${post.slug}` },
      ],
    },
  ];

  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      {/* ─── KAPAK ─── */}
      <header className="relative h-[88svh] min-h-[560px] bg-stone-950 text-white overflow-hidden">
        <Image src={post.coverImage} alt={post.coverAlt} fill priority sizes="100vw" className="object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/10 to-stone-950/90" aria-hidden />

        <div className="relative h-full container mx-auto px-6 md:px-12 flex flex-col justify-end pb-14 md:pb-20">
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 self-start text-[10px] tracking-[0.3em] uppercase text-white/70 hover:text-white transition-colors duration-700 mb-10"
          >
            <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
            Blog
          </Link>

          <div className="flex items-center gap-4 text-[10px] tracking-[0.25em] uppercase text-white/70">
            <span className="text-white">{post.category}</span>
            <span className="h-px w-6 bg-white/30" aria-hidden />
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span className="h-px w-6 bg-white/30" aria-hidden />
            <span>{post.readingMinutes} dk okuma</span>
          </div>

          <h1 className="font-editorial font-light text-[2.75rem] sm:text-6xl md:text-7xl xl:text-[5.75rem] leading-[1] mt-6 max-w-5xl text-balance">
            {post.title}
          </h1>

          <p className="mt-6 text-white/75 font-light text-base md:text-lg leading-relaxed max-w-2xl">{post.excerpt}</p>
        </div>
      </header>

      {/* ─── YAZI ─── */}
      <ArticleView title={post.title} path={`/blog/${post.slug}`} headings={headings} sidebarPosts={related.slice(0, 3)}>
        <ArticleBody blocks={post.content} />

        {/* Yazı sonu davet */}
        <div className="mt-20 bg-stone-50 border border-stone-200 p-8 md:p-10">
          <p className="font-editorial font-light text-3xl md:text-[2.1rem] leading-[1.15] text-stone-900">
            Bu hikâyeyi kendi düğününüzde yaşamak ister misiniz?
          </p>
          <p className="mt-3 text-stone-500 font-light text-[15px] leading-relaxed">
            Bahçemizi yerinde görmek ve tarihinizi konuşmak için bize ulaşın.
          </p>
          <Link
            href="/iletisim"
            className="mt-7 inline-block px-7 py-3 text-[10px] tracking-[0.25em] uppercase bg-stone-900 text-white hover:bg-stone-700 transition-colors duration-500"
          >
            Ziyaret planlayın
          </Link>
        </div>
      </ArticleView>

      {/* ─── SIRADAKİ HİKÂYE ─── */}
      {next && (
        <Link href={`/blog/${next.slug}`} className="group relative block bg-stone-950 text-white overflow-hidden">
          <Image
            src={next.coverImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-40 transition-all duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-55 group-hover:scale-[1.03]"
          />
          <div className="relative container mx-auto px-6 md:px-12 py-28 md:py-40 text-center">
            <p className="text-[10px] tracking-[0.35em] uppercase text-white/60">Sıradaki hikâye</p>
            <p className="font-editorial font-light italic text-4xl sm:text-5xl md:text-7xl leading-[1.05] mt-6 max-w-4xl mx-auto text-balance">
              {next.title}
            </p>
            <span className="mt-10 inline-flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase">
              <span className="h-px w-10 bg-white transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-16" aria-hidden />
              Okumaya devam et
            </span>
          </div>
        </Link>
      )}

      {/* ─── DAHA FAZLA ─── */}
      {more.length > 0 && (
        <section className="bg-stone-50 py-20 md:py-28">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex items-end justify-between border-b border-stone-200 pb-8 mb-14">
              <h2 className="font-editorial font-light text-4xl md:text-5xl text-stone-900">Bunları da sevebilirsiniz</h2>
              <Link
                href="/blog"
                className="hidden sm:inline text-[10px] tracking-[0.25em] uppercase text-stone-500 hover:text-stone-900 transition-colors duration-700"
              >
                Tüm yazılar
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-16">
              {more.map((p) => (
                <PostCard key={p.slug} post={p} variant="small" />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
