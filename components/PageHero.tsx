"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  tags?: { label: string; value: string }[];
  sideText?: string;
  /** Yükseklik — default "75vh" (tüm alt sayfalar tutarlı) */
  height?: string;
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  description,
  image,
  tags,
  sideText,
  height = "75vh",
}: PageHeroProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY      = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity  = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const chars = title.split("");

  return (
    <section
      ref={ref}
      className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-stone-950"
      style={{ height }}
    >
      {/* ── Paralaks Arka Plan ── */}
      <motion.div style={{ y: bgY }} className="absolute inset-[-12%] z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
        />
        {/* Saf siyah overlay — renk bozulması yok */}
        <div className="absolute inset-0 bg-black/55" />
        {/* Üst ve alt vinyette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
        {/* Sol vinyette — metin okunabilirliği */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
      </motion.div>

      {/* ── Dekoratif dikey metin (sağda) ── */}
      {sideText && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-4"
        >
          <div className="w-[1px] h-16 bg-white/15" />
          <span
            className="text-[9px] tracking-[0.45em] text-white/25 uppercase"
            style={{ writingMode: "vertical-rl" }}
          >
            {sideText}
          </span>
          <div className="w-[1px] h-16 bg-white/15" />
        </motion.div>
      )}

      {/* ── Merkez İçerik ── */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 flex flex-col items-center text-center px-6 mt-16 w-full max-w-6xl mx-auto"
      >
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="text-[9px] md:text-[10px] tracking-[0.55em] text-white/30 uppercase mb-8 block"
          >
            {eyebrow}
          </motion.span>
        )}

        {/* Karakter bazlı stagger başlık */}
        <h1 className="overflow-hidden mb-4">
          <span className="flex flex-wrap justify-center">
            {chars.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + i * 0.035,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`text-[clamp(1.5rem,7.5vw,3rem)] md:text-6xl lg:text-8xl font-extralight tracking-[0.1em] text-white uppercase leading-none ${
                  char === " " ? "mr-4" : ""
                }`}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
        </h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.3 + chars.length * 0.035 + 0.1,
            }}
            className="text-2xl md:text-4xl lg:text-5xl font-extralight italic text-white/40 tracking-tight mb-8 -mt-2"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{
            duration: 1.4,
            delay: 0.3 + chars.length * 0.035 + 0.3,
          }}
          className="w-20 h-[1px] bg-white/25 origin-center mb-6"
        />

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.3 + chars.length * 0.035 + 0.5,
            }}
            className="text-stone-300/60 text-xs md:text-sm font-light tracking-[0.2em] max-w-md leading-relaxed uppercase"
          >
            {description}
          </motion.p>
        )}
      </motion.div>

      {/* ── Sol alt etiketler ── */}
      {tags && tags.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute bottom-14 left-8 md:left-12 z-20 hidden md:flex flex-col gap-4"
        >
          {tags.map((tag) => (
            <div key={tag.label} className="flex flex-col gap-0.5">
              <span className="text-[8px] tracking-[0.4em] text-white/25 uppercase">
                {tag.label}
              </span>
              <span className="text-[11px] tracking-[0.25em] text-white/60 uppercase font-light">
                {tag.value}
              </span>
            </div>
          ))}
        </motion.div>
      )}

      {/* ── Aşağı kaydır indikatörü ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <motion.div
          animate={{ y: [0, 9, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>

      {/* ── Alt keskin kenar (blur yok, temiz) ── */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-stone-950 z-10" />
    </section>
  );
}