"use client";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import About from "../components/About";
import ServicesPreview from "../components/ServicesPreview"; // Ekledik
import Cta from "../components/Cta"; // Ekledik

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Bölümü */}
        <div className="relative h-[100vh] w-full flex flex-col items-center justify-center text-center px-4 bg-stone-950 overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=3270&auto=format&fit=crop')" }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

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
              Doğanın Kalbinde, Kusursuz Başlangıçlar
            </motion.p>
          </div>
        </div>

        {/* Bölümler Sırasıyla Geliyor */}
        <About />
        <ServicesPreview />
        <Cta />
      </main>
    </>
  );
}