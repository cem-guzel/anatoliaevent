"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { BlogPostWithMeta } from "@/lib/blog/types";
import { formatDate } from "@/lib/blog/format";

const EASE = [0.22, 1, 0.36, 1] as const;

function Meta({ post }: { post: BlogPostWithMeta }) {
  return (
    <div className="flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-stone-400">
      <span className="text-stone-600">{post.category}</span>
      <span className="h-px w-5 bg-stone-300" aria-hidden />
      <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
    </div>
  );
}

function ReadMore({ minutes }: { minutes: number }) {
  return (
    <span className="inline-flex items-center gap-4 text-[10px] tracking-[0.25em] uppercase text-stone-800">
      <span className="h-px w-8 bg-stone-800 transition-all duration-700 group-hover:w-14" aria-hidden />
      Devamını oku
      <span className="text-stone-400 normal-case tracking-[0.1em] text-[11px]">{minutes} dk</span>
    </span>
  );
}

export default function BlogIndex({ posts }: { posts: BlogPostWithMeta[] }) {
  const [category, setCategory] = useState("Tümü");

  const featured = useMemo(() => posts.find((p) => p.featured) ?? posts[0], [posts]);
  const categories = useMemo(() => ["Tümü", ...Array.from(new Set(posts.map((p) => p.category)))], [posts]);

  const list = useMemo(() => {
    if (category === "Tümü") return posts.filter((p) => p.slug !== featured?.slug);
    return posts.filter((p) => p.category === category);
  }, [posts, category, featured]);

  // 2 veya 4 yazıda ikili, diğer durumlarda üçlü ızgara (son satırda tek kart kalmasın)
  const twoCol = list.length === 2 || list.length === 4;

  if (!featured) {
    return (
      <section className="py-32 text-center text-stone-400 text-sm font-light tracking-wide">
        İlk yazımız çok yakında burada.
      </section>
    );
  }

  return (
    <>
      {/* ── Giriş ── */}
      <section className="py-20 md:py-24 container mx-auto px-6 md:px-12 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-[10px] tracking-[0.4em] text-stone-400 uppercase block mb-5">Anatolıa Notları</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight text-stone-800 leading-tight mb-7">
            Bahçemizden <br />
            <span className="italic text-stone-500">hikâyeler.</span>
          </h2>
          <p className="text-stone-400 text-sm font-light leading-relaxed max-w-xl mx-auto">
            Tarih seçiminden dekorasyona, fotoğraftan misafir ağırlamaya kadar kır düğünü hazırlığında
            işinize yarayacak notları sizin için yazıyoruz.
          </p>
        </motion.div>
      </section>

      {/* ── Öne çıkan yazı ── */}
      <section className="pb-20 md:pb-28 container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1, ease: EASE }}
        >
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-12 bg-white shadow-2xl shadow-stone-200/70 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-800"
          >
            <div className="relative lg:col-span-7 aspect-[4/3] lg:aspect-auto lg:min-h-[34rem] overflow-hidden bg-stone-200">
              <Image
                src={featured.coverImage}
                alt={featured.coverAlt}
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              />
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center p-8 md:p-12 lg:p-14">
              <span className="text-[10px] tracking-[0.4em] text-stone-400 uppercase block mb-8">Öne çıkan yazı</span>
              <Meta post={featured} />
              <h3 className="mt-5 text-3xl md:text-4xl lg:text-[2.75rem] font-extralight tracking-tight text-stone-800 leading-[1.12]">
                {featured.title}
              </h3>
              <div className="w-14 h-px bg-stone-300 my-7" />
              <p className="text-stone-500 text-sm md:text-[15px] font-light leading-relaxed">{featured.excerpt}</p>
              <div className="mt-10">
                <ReadMore minutes={featured.readingMinutes} />
              </div>
            </div>
          </Link>
        </motion.div>
      </section>

      {/* ── Tüm yazılar ── */}
      <section className="pb-24 md:pb-32 container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center mb-14 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-stone-800">
            Tüm <span className="italic text-stone-500">yazılar</span>
          </h2>

          <div role="tablist" aria-label="Kategoriler" className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {categories.map((c) => {
              const active = c === category;
              return (
                <button
                  key={c}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setCategory(c)}
                  className={`relative pb-1.5 text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-stone-800 ${
                    active ? "text-stone-900" : "text-stone-400 hover:text-stone-800"
                  }`}
                >
                  {c}
                  {active && (
                    <motion.span
                      layoutId="blog-cat-line"
                      className="absolute left-0 right-0 bottom-0 h-px bg-stone-800"
                      transition={{ duration: 0.5, ease: EASE }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className={`grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-14 ${twoCol ? "lg:gap-x-12 max-w-5xl mx-auto" : "lg:grid-cols-3"}`}
          >
            {list.length === 0 ? (
              <p className="col-span-full text-center text-stone-400 text-sm font-light">
                Bu kategorideki tek yazımız yukarıda öne çıkanlar arasında.
              </p>
            ) : (
              list.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-800 focus-visible:ring-offset-4 focus-visible:ring-offset-stone-50"
                >
                  <div className={`relative overflow-hidden bg-stone-200 ${twoCol ? "aspect-[4/5] lg:aspect-[5/4]" : "aspect-[4/5]"}`}>
                    <Image
                      src={post.coverImage}
                      alt={post.coverAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/10 transition-colors duration-700" />
                  </div>
                  <div className="pt-7 flex flex-col flex-1">
                    <Meta post={post} />
                    <h3 className="mt-4 text-2xl md:text-[1.7rem] font-extralight tracking-tight text-stone-800 leading-[1.2]">
                      {post.title}
                    </h3>
                    <p className="mt-4 text-stone-500 text-sm font-light leading-relaxed line-clamp-2">{post.excerpt}</p>
                    <div className="mt-auto pt-6">
                      <ReadMore minutes={post.readingMinutes} />
                    </div>
                  </div>
                </Link>
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </section>
    </>
  );
}
