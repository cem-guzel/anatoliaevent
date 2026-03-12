"use client";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import About from "../components/About";
import ServicesPreview from "../components/ServicesPreview"; 
import Testimonials from "../components/Testimonials";
import Cta from "../components/Cta"; 

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Bölümü */}
        <div className="relative h-[100vh] w-full flex flex-col items-center justify-center text-center px-4 bg-stone-950 overflow-hidden">
          
          {/* --- VİDEO ARKA PLAN EKLENDİ --- */}
          {/* 1. MASAÜSTÜ İÇİN YATAY VİDEO (Sadece PC ve Tablette çalışır) */}
          <motion.video
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="hidden md:block absolute inset-0 z-0 w-full h-full object-cover"
            src="/1.mp4" /* Geniş ekranlar için yatay video adın */
            autoPlay loop muted playsInline
          />

          {/* 2. MOBİL İÇİN DİKEY VİDEO (Sadece Telefonlarda çalışır) */}
          <motion.video
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="block md:hidden absolute inset-0 z-0 w-full h-full object-cover"
            src="/1.mp4" /* Telefonlar için dikey video adın (Örn: 1.mp4) */
            autoPlay loop muted playsInline
          />
          
          {/* Üzerindeki Karartma Efekti (Yazıların okunması için) */}
          <div className="absolute inset-0 bg-black/40 z-0"></div>

          <div className="relative z-10 flex flex-col items-center mt-20">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-[0.15em] text-white uppercase mb-6"
            >
              Anatolia Event
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="w-20 h-[1px] bg-white/50 mb-8"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
              className="text-xs md:text-sm lg:text-base font-light tracking-[0.2em] text-stone-200 uppercase max-w-xl"
            >
              En güzel hikayeniz burada başlıyor
            </motion.p>
          </div>
        </div>

        {/* Bölümler Sırasıyla Geliyor */}
        <About />
        <ServicesPreview />
        <Testimonials />
        <Cta />
      </main>
    </>
  );
}