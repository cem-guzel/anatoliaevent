"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="py-32 bg-stone-100 text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-3xl mx-auto flex flex-col items-center"
      >
        <h2 className="text-3xl md:text-5xl font-extralight tracking-[0.1em] text-stone-800 uppercase mb-8 leading-tight">
          Hayalinizdeki Günü <br /> Birlikte Planlayalım
        </h2>
        <div className="w-16 h-[1px] bg-stone-300 mb-10"></div>
        <p className="text-stone-500 font-light tracking-wide mb-12 max-w-lg">
          Detayları konuşmak, mekanı keşfetmek ve size özel tekliflerimizi öğrenmek için bizimle iletişime geçin.
        </p>
        <Link 
          href="/iletisim" 
          className="bg-stone-900 text-white px-12 py-5 text-xs font-light tracking-[0.25em] uppercase hover:bg-stone-800 transition-colors duration-500 shadow-xl"
        >
          İletişime Geç
        </Link>
      </motion.div>
    </section>
  );
}