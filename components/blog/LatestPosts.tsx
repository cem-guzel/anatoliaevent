"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { BlogPostWithMeta } from "@/lib/blog/types";
import { formatDate } from "@/lib/blog/format";

// Ana sayfadaki "Blogdan son yazılar" bölümü
export default function LatestPosts({ posts }: { posts: BlogPostWithMeta[] }) {
  if (!posts.length) return null;

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 md:mb-16"
        >
          <div>
            <span className="text-[10px] tracking-[0.4em] text-stone-400 uppercase block mb-5">Blog</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight text-stone-800 leading-tight">
              Bahçemizden <span className="italic text-stone-500">notlar.</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-4 text-[10px] tracking-[0.25em] uppercase text-stone-800 self-start md:self-auto"
          >
            <span className="h-px w-8 bg-stone-800 transition-all duration-700 group-hover:w-14" aria-hidden />
            Tüm yazılar
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-14">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-800 focus-visible:ring-offset-4"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
                  <Image
                    src={post.coverImage}
                    alt={post.coverAlt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                  />
                </div>
                <div className="pt-7 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-stone-400">
                    <span className="text-stone-600">{post.category}</span>
                    <span className="h-px w-5 bg-stone-300" aria-hidden />
                    <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                  </div>
                  <h3 className="mt-4 text-2xl font-extralight tracking-tight text-stone-800 leading-[1.2]">
                    {post.title}
                  </h3>
                  <p className="mt-4 text-stone-500 text-sm font-light leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <span className="mt-auto pt-6 inline-flex items-center gap-4 text-[10px] tracking-[0.25em] uppercase text-stone-800">
                    <span className="h-px w-8 bg-stone-800 transition-all duration-700 group-hover:w-14" aria-hidden />
                    Devamını oku
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
