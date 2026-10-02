"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Link2, Check } from "lucide-react";
import type { BlogPostWithMeta } from "@/lib/blog/types";

type Heading = { id: string; text: string };

export default function ArticleView({
  title,
  path,
  headings,
  sidebarPosts,
  children,
}: {
  title: string;
  path: string;
  headings: Heading[];
  sidebarPosts: BlogPostWithMeta[];
  children: React.ReactNode;
}) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // İçindekiler: ekranda olan başlığı işaretle
  useEffect(() => {
    if (headings.length === 0) return;
    const els = headings.map((h) => document.getElementById(h.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.origin + path);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* pano erişimi yoksa sessizce geç */
    }
  };

  const shareText = encodeURIComponent(`${title} — `);

  const Share = (
    <div className="flex items-center gap-5 text-[10px] tracking-[0.25em] uppercase text-stone-500">
      <button
        onClick={copyLink}
        className="inline-flex items-center gap-2 whitespace-nowrap uppercase tracking-[0.25em] hover:text-stone-900 transition-colors duration-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-stone-900"
      >
        {copied ? <Check className="w-3.5 h-3.5" strokeWidth={1.5} /> : <Link2 className="w-3.5 h-3.5" strokeWidth={1.5} />}
        {copied ? "Kopyalandı" : "Bağlantıyı kopyala"}
      </button>
      <a
        href={`https://wa.me/?text=${shareText}${encodeURIComponent("https://xn--krdn-2raab1zsf.com.tr" + path)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-stone-900 transition-colors duration-700"
      >
        WhatsApp
      </a>
    </div>
  );

  return (
    <>
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16">
          {/* SOL: İçindekiler + paylaş */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32">
              {headings.length > 0 && (
                <nav aria-label="Bu yazıda">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-stone-900 mb-6">Bu yazıda</p>
                  <ul className="space-y-1 border-l border-stone-200">
                    {headings.map((h) => {
                      const active = h.id === activeId;
                      return (
                        <li key={h.id}>
                          <a
                            href={`#${h.id}`}
                            className={`block -ml-px pl-5 py-2 border-l text-[13px] font-light leading-snug transition-colors duration-700 ${
                              active
                                ? "border-stone-900 text-stone-900"
                                : "border-transparent text-stone-400 hover:text-stone-700"
                            }`}
                          >
                            {h.text}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              )}
              <div className="mt-12 pt-8 border-t border-stone-200">{Share}</div>
            </div>
          </aside>

          {/* ORTA: Yazı */}
          <article className="lg:col-span-8 xl:col-span-6 max-w-[42rem] w-full mx-auto lg:mx-0">
            {children}
            <div className="lg:hidden mt-14 pt-8 border-t border-stone-200">{Share}</div>
          </article>

          {/* SAĞ: Diğer yazılar */}
          {sidebarPosts.length > 0 && (
            <aside className="hidden xl:block xl:col-span-3">
              <div className="sticky top-32">
                <p className="text-[10px] tracking-[0.3em] uppercase text-stone-900 mb-6">Diğer yazılar</p>
                <ul className="space-y-7">
                  {sidebarPosts.map((p) => (
                    <li key={p.slug}>
                      <Link href={`/blog/${p.slug}`} className="group flex gap-4 items-start focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-stone-900">
                        <span className="relative shrink-0 w-20 aspect-[4/5] overflow-hidden bg-stone-200">
                          <Image
                            src={p.coverImage}
                            alt=""
                            fill
                            sizes="80px"
                            className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                          />
                        </span>
                        <span>
                          <span className="block text-[9px] tracking-[0.25em] uppercase text-stone-400">{p.category}</span>
                          <span className="block font-editorial text-xl leading-[1.15] text-stone-800 group-hover:text-stone-500 transition-colors duration-700 mt-1.5">
                            {p.title}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          )}
        </div>
      </div>
    </>
  );
}
