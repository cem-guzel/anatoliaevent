import Image from "next/image";
import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import type { BlogBlock } from "@/lib/blog/types";
import { slugifyHeading } from "@/lib/blog/format";

const LINK_CLASS =
  "text-stone-900 underline decoration-stone-300 underline-offset-[5px] decoration-1 hover:decoration-stone-900 transition-colors duration-700";

/** Metindeki [bağlantı](/adres) ve **kalın** işaretlerini bileşenlere çevirir. */
function Inline({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1] && m[2]) {
      const href = m[2];
      parts.push(
        href.startsWith("/") ? (
          <Link key={k++} href={href} className={LINK_CLASS}>
            {m[1]}
          </Link>
        ) : (
          <a key={k++} href={href} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
            {m[1]}
          </a>
        )
      );
    } else if (m[3]) {
      parts.push(
        <strong key={k++} className="font-normal text-stone-900">
          {m[3]}
        </strong>
      );
    }
    last = re.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts.map((p, i) => <Fragment key={i}>{p}</Fragment>)}</>;
}

export default function ArticleBody({ blocks }: { blocks: BlogBlock[] }) {
  let firstParagraphDone = false;

  return (
    <div className="article-body">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p": {
            const isFirst = !firstParagraphDone;
            firstParagraphDone = true;
            return (
              <p key={i} className={isFirst ? "drop-cap" : undefined}>
                <Inline text={block.text} />
              </p>
            );
          }

          case "h2":
            return (
              <h2
                key={i}
                id={slugifyHeading(block.text)}
                className="font-editorial font-normal text-[2rem] md:text-[2.4rem] leading-[1.1] text-stone-900 mt-16 mb-6"
              >
                {block.text}
              </h2>
            );

          case "quote":
            return (
              <figure key={i} className="my-14 md:my-16 border-y border-stone-200 py-10 md:py-12 text-center">
                <blockquote className="font-editorial italic font-light text-[1.9rem] md:text-[2.6rem] leading-[1.15] text-stone-900 text-balance">
                  {block.text}
                </blockquote>
                {block.cite && (
                  <figcaption className="mt-5 text-[10px] tracking-[0.3em] uppercase text-stone-500">
                    {block.cite}
                  </figcaption>
                )}
              </figure>
            );

          case "list": {
            const Tag = block.ordered ? "ol" : "ul";
            return (
              <Tag key={i} className="my-8 space-y-4">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-5">
                    <span
                      aria-hidden
                      className={`shrink-0 font-editorial text-stone-400 ${
                        block.ordered ? "text-2xl leading-[1.3] w-5" : "mt-[0.9em] h-px w-5 bg-stone-400"
                      }`}
                    >
                      {block.ordered ? j + 1 : null}
                    </span>
                    <span>
                      <Inline text={item} />
                    </span>
                  </li>
                ))}
              </Tag>
            );
          }

          case "image":
            return (
              <figure key={i} className="my-14 md:my-16">
                <div className="relative aspect-[3/2] overflow-hidden bg-stone-200">
                  <Image src={block.src} alt={block.alt} fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" />
                </div>
                {block.caption && (
                  <figcaption className="mt-4 text-sm font-light text-stone-500 leading-relaxed">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
