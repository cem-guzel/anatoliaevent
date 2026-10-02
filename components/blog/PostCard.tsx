import Link from "next/link";
import Image from "next/image";
import type { BlogPostWithMeta } from "@/lib/blog/types";
import { formatDate } from "@/lib/blog/format";

type Variant = "large" | "medium" | "small" | "wide";

const imageRatio: Record<Variant, string> = {
  large: "aspect-[4/3]",
  medium: "aspect-[4/5]",
  small: "aspect-[4/5]",
  wide: "aspect-[16/10] md:aspect-auto md:h-full",
};

const titleSize: Record<Variant, string> = {
  large: "text-3xl md:text-[2.6rem]",
  medium: "text-3xl md:text-[2.1rem]",
  small: "text-2xl md:text-[1.75rem]",
  wide: "text-3xl md:text-5xl",
};

export default function PostCard({
  post,
  variant = "small",
  tone = "light",
}: {
  post: BlogPostWithMeta;
  variant?: Variant;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  const wide = variant === "wide";

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group block focus-visible:outline-none ${
        wide ? "md:grid md:grid-cols-12 md:gap-12 md:items-stretch" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden bg-stone-200 ${imageRatio[variant]} ${
          wide ? "md:col-span-7 md:min-h-[26rem]" : ""
        } group-focus-visible:ring-2 group-focus-visible:ring-offset-4 group-focus-visible:ring-stone-900`}
      >
        <Image
          src={post.coverImage}
          alt={post.coverAlt}
          fill
          sizes={wide || variant === "large" ? "(min-width: 768px) 60vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
          className="object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
      </div>

      <div className={`${wide ? "md:col-span-5 flex flex-col justify-center" : ""} pt-6`}>
        <div
          className={`flex items-center gap-4 text-[10px] tracking-[0.25em] uppercase ${
            dark ? "text-stone-400" : "text-stone-500"
          }`}
        >
          <span className={dark ? "text-white" : "text-stone-900"}>{post.category}</span>
          <span className={`h-px w-6 ${dark ? "bg-white/20" : "bg-stone-300"}`} aria-hidden />
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
        </div>

        <h3
          className={`font-editorial font-light leading-[1.08] mt-4 ${titleSize[variant]} ${
            dark ? "text-white" : "text-stone-900"
          }`}
        >
          <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-[length:100%_1px]">
            {post.title}
          </span>
        </h3>

        {(variant === "large" || wide) && (
          <p className={`mt-4 text-[15px] font-light leading-relaxed max-w-xl ${dark ? "text-stone-400" : "text-stone-600"}`}>
            {post.excerpt}
          </p>
        )}

        <p className={`mt-4 text-[11px] font-light tracking-[0.15em] ${dark ? "text-stone-500" : "text-stone-400"}`}>
          {post.readingMinutes} dakikalık okuma
        </p>
      </div>
    </Link>
  );
}
