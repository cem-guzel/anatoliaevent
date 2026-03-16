"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MEDIA from "@/lib/media";

// Masonry grid için boyut pattern
type PhotoSize = "tall" | "normal" | "wide";

const photos: { src: string; alt: string; size: PhotoSize }[] = [
  { src: MEDIA.galeri.staticGrid[0],  alt: "Gece Işıklandırma",     size: "tall" },
  { src: MEDIA.galeri.staticGrid[1],  alt: "Tören Alanı",           size: "normal" },
  { src: MEDIA.galeri.staticGrid[2],  alt: "Nikah Anı",             size: "normal" },
  { src: MEDIA.galeri.staticGrid[3],  alt: "Genel Alan",            size: "wide" },
  { src: MEDIA.galeri.staticGrid[4],  alt: "Akşam Sahne",           size: "tall" },
  { src: MEDIA.galeri.staticGrid[5],  alt: "Masa Detay",            size: "normal" },
];

export default function Gallery() {
  return (
    <section className="py-24 md:py-32 bg-[#fcfbf9] text-stone-900 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">

        <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] tracking-[0.35em] text-stone-400 uppercase mb-4 block">Kareler</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight leading-tight text-stone-800">
              Her An Bir <br />
              <span className="italic text-stone-500">Hatıra.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden md:block"
          >
            <Link
              href="/galeri"
              className="group flex items-center gap-4 text-xs tracking-[0.2em] text-stone-800 uppercase hover:text-stone-500 transition-colors duration-300 pb-2 border-b border-stone-800 hover:border-stone-500"
            >
              <span>Tüm Galeri</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" strokeWidth={1.5} />
            </Link>
          </motion.div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[220px]">

          {/* tall */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8, delay: 0 }} className="row-span-2 overflow-hidden group relative">
            <img src={photos[0].src} alt={photos[0].alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s] ease-out" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8, delay: 0.1 }} className="overflow-hidden group relative">
            <img src={photos[1].src} alt={photos[1].alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s] ease-out" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8, delay: 0.15 }} className="overflow-hidden group relative hidden md:block">
            <img src={photos[2].src} alt={photos[2].alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s] ease-out" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
          </motion.div>

          {/* tall sağ */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8, delay: 0.2 }} className="row-span-2 overflow-hidden group relative hidden lg:block">
            <img src={photos[4].src} alt={photos[4].alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s] ease-out" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
          </motion.div>

          {/* wide */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8, delay: 0.25 }} className="col-span-2 overflow-hidden group relative hidden md:block">
            <img src={photos[3].src} alt={photos[3].alt} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-[3s] ease-out" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8, delay: 0.05 }} className="overflow-hidden group relative">
            <img src={photos[5].src} alt={photos[5].alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s] ease-out" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
          </motion.div>

        </div>

        {/* Mobil Buton */}
        <div className="mt-10 flex justify-center md:hidden">
          <Link href="/galeri" className="group flex items-center gap-4 text-xs tracking-[0.2em] text-stone-800 uppercase pb-2 border-b border-stone-800">
            <span>Tüm Galeri</span>
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>

      </div>
    </section>
  );
}