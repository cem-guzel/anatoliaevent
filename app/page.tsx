"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/Navbar";
import About from "../components/About";
import ServicesPreview from "../components/ServicesPreview";
import WhyUs from "../components/WhyUs";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Cta from "../components/Cta";
import { MapPin, Users, Award } from "lucide-react";
import MEDIA from "@/lib/media";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* ─── HERO ─── */}
        <div className="relative h-[100vh] w-full flex flex-col items-center justify-center text-center px-4 bg-stone-950 overflow-hidden">

          {/* Video — hem masaüstü hem mobil */}
          <motion.video
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="absolute inset-0 z-0 w-full h-full object-cover"
            src={MEDIA.home.heroVideo}
            autoPlay
            loop
            muted
            playsInline
            poster={MEDIA.home.heroVideo}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/65 z-0" />

          {/* Merkez İçerik */}
          <div className="relative z-10 flex flex-col items-center mt-16">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-[10px] tracking-[0.35em] text-white/50 uppercase mb-6 block"
            >
              Kemerburgaz · İstanbul
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-[0.15em] text-white uppercase mb-6"
            >
              Anatolıa Event
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="w-24 h-[1px] bg-white/60 mb-8 origin-center"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
              className="text-xs md:text-sm font-light tracking-[0.2em] text-stone-200 uppercase max-w-2xl mb-12"
            >
              Doğanın Kalbinde, En Güzel Hikayeniz Burada Başlıyor
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 items-center"
            >
              <Link
                href="/iletisim"
                className="group relative px-10 py-4 bg-white text-stone-900 text-xs tracking-[0.25em] uppercase hover:bg-transparent hover:text-white border border-white transition-all duration-500"
              >
                İletişime Geç
              </Link>
              <Link
                href="/galeri"
                className="px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white text-xs tracking-[0.25em] uppercase hover:bg-white/20 transition-all duration-500"
              >
                Galeriyi Gör
              </Link>
            </motion.div>
          </div>

          {/* Yüzen Bilgi Kartları */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 1.5 }}
            className="hidden lg:flex absolute bottom-36 left-20 items-center gap-4 bg-white/8 backdrop-blur-md border border-white/10 px-6 py-4 rounded-2xl z-10"
          >
            <Users className="text-white/80 w-6 h-6" strokeWidth={1.5} />
            <div className="flex flex-col text-left">
              <span className="text-white text-sm font-medium tracking-wider">1.300 Misafir</span>
              <span className="text-white/50 text-[10px] tracking-widest uppercase">Kapasite</span>
            </div>
          </motion.div>

       

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 1.7 }}
            className="hidden lg:flex absolute bottom-36 right-20 items-center gap-4 bg-white/8 backdrop-blur-md border border-white/10 px-6 py-4 rounded-2xl z-10"
          >
            <MapPin className="text-white/80 w-6 h-6" strokeWidth={1.5} />
            <div className="flex flex-col text-left">
              <span className="text-white text-sm font-medium tracking-wider">Kemerburgaz</span>
              <span className="text-white/50 text-[10px] tracking-widest uppercase">Lokasyon</span>
            </div>
          </motion.div>

          {/* Aşağı kaydır */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
          >
            <span className="text-[10px] text-white/40 tracking-[0.3em] uppercase">Keşfet</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-[1px] h-12 bg-gradient-to-b from-white/70 to-transparent"
            />
          </motion.div>

          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-stone-50 to-transparent z-10 pointer-events-none" />
        </div>

        {/* Alt Bölümler */}
        <About />
        <WhyUs />
        <ServicesPreview />
        <Gallery />
        <Testimonials />
        <Cta />
      </main>
    </>
  );
}