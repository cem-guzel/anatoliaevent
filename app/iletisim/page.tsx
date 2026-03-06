"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, MessageCircle } from "lucide-react";
import Navbar from "../../components/Navbar"; 

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-stone-50 min-h-screen text-stone-900 font-light selection:bg-stone-900 selection:text-white">
        
        {/* --- HERO BÖLÜMÜ (Sinematik Minimalist Giriş) --- */}
        <section className="relative h-[60vh] md:h-[70vh] w-full flex flex-col items-center justify-center text-center px-4 bg-stone-950 overflow-hidden">
          <motion.div
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat grayscale"
            // İstersen buraya kendi fotoğrafını koyabilirsin: src="/iletisim-hero.jpg"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=3270&auto=format&fit=crop')" }} 
          ></motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-transparent to-transparent opacity-100 z-0 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center mt-20">
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-white/60 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-6"
            >
              Bağlantı Kurun
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-[0.1em] text-white uppercase mb-6"
            >
              İletişim
            </motion.h1>
          </div>
        </section>

        {/* --- DİKEY VE ASİL İLETİŞİM ALANI --- */}
        <div className="container mx-auto px-6 md:px-12 py-24 md:py-32">
          
          <div className="max-w-4xl mx-auto flex flex-col gap-24 md:gap-32">
            
            {/* 1. Üst Kısım: Manifesto ve Adres */}
            <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
              <motion.div 
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
                className="w-full md:w-1/2"
              >
                <h2 className="text-3xl md:text-4xl font-light tracking-[0.1em] text-stone-800 leading-tight mb-8">
                  Hikayenizi <br /> Birlikte Yazalım.
                </h2>
                <div className="w-12 h-[1px] bg-stone-300 mb-8"></div>
                <p className="text-stone-500 font-light leading-relaxed text-sm md:text-base tracking-wide">
                  Hayalinizdeki o kusursuz etkinliği planlamak, detayları konuşmak ve Anatolia Event&apos;in benzersiz atmosferini yakından hissetmek için sizi kahveye bekliyoruz. 
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}
                className="w-full md:w-1/2 flex flex-col gap-6 pt-2"
              >
                <span className="text-xs font-semibold tracking-[0.3em] text-stone-900 uppercase">Adres</span>
                <p className="text-stone-500 font-light text-base md:text-lg tracking-wide leading-relaxed">
                  Mithatpaşa, Kumsu Sk. No:55<br/>34075 Eyüpsultan / İstanbul
                </p>
                <a 
                  href="https://www.google.com/maps/place/Anatolia+Event/@41.1516448,28.9013613,17z/data=!3m1!4b1!4m6!3m5!1s0x14cab3b2c8e128df:0xf30c993d3db4d025!8m2!3d41.1516449!4d28.9062322!16s%2Fg%2F11dx8kj8ck?entry=ttu&g_ep=EgoyMDI2MDMwMi4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase text-stone-900 mt-4"
                >
                  <MapPin className="w-4 h-4 group-hover:text-stone-500 transition-colors" />
                  <span className="border-b border-stone-900 group-hover:border-stone-500 group-hover:text-stone-500 transition-colors pb-1">Haritada Aç</span>
                </a>
              </motion.div>
            </div>

            {/* 2. Orta Kısım: Devasa Tıklanabilir Kanallar */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 border border-stone-200"
            >
              
              {/* Telefon */}
              <a href="tel:+905333058997" className="group bg-stone-50 p-12 flex flex-col items-center justify-center text-center hover:bg-stone-900 transition-colors duration-500">
                <Phone strokeWidth={1} className="w-8 h-8 text-stone-400 group-hover:text-white transition-colors duration-500 mb-6" />
                <span className="text-[10px] md:text-xs font-semibold tracking-[0.3em] text-stone-400 uppercase mb-3">Telefon</span>
                <span className="text-xl md:text-2xl font-light tracking-widest text-stone-900 group-hover:text-white transition-colors duration-500">0533 305 89 97</span>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/905333058997" target="_blank" rel="noopener noreferrer" className="group bg-stone-50 p-12 flex flex-col items-center justify-center text-center hover:bg-stone-900 transition-colors duration-500">
                <MessageCircle strokeWidth={1} className="w-8 h-8 text-stone-400 group-hover:text-white transition-colors duration-500 mb-6" />
                <span className="text-[10px] md:text-xs font-semibold tracking-[0.3em] text-stone-400 uppercase group-hover:text-white/70 transition-colors duration-500 mb-3">WhatsApp</span>
                <span className="text-xl md:text-2xl font-light tracking-widest text-stone-900 group-hover:text-white transition-colors duration-500">Hızlı İletişim</span>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/anatoliaeventkirdugunu/" target="_blank" rel="noopener noreferrer" className="group bg-stone-50 p-12 flex flex-col items-center justify-center text-center hover:bg-stone-900 transition-colors duration-500">
                <Instagram strokeWidth={1} className="w-8 h-8 text-stone-400 group-hover:text-white transition-colors duration-500 mb-6" />
                <span className="text-[10px] md:text-xs font-semibold tracking-[0.3em] text-stone-400 uppercase mb-3">Instagram</span>
                <span className="text-xl md:text-2xl font-light tracking-widest text-stone-900 group-hover:text-white transition-colors duration-500">@anatoliaevent</span>
              </a>

              {/* E-Posta */}
              <a href="mailto:anatoliaevent@gmail.com" className="group bg-stone-50 p-12 flex flex-col items-center justify-center text-center hover:bg-stone-900 transition-colors duration-500">
                <Mail strokeWidth={1} className="w-8 h-8 text-stone-400 group-hover:text-white transition-colors duration-500 mb-6" />
                <span className="text-[10px] md:text-xs font-semibold tracking-[0.3em] text-stone-400 uppercase mb-3">E-Posta</span>
                <span className="text-xl md:text-2xl font-light tracking-widest text-stone-900 group-hover:text-white transition-colors duration-500">anatoliaevent@gmail.com</span>
              </a>

            </motion.div>

          </div>
        </div>

      </main>
    </>
  );
}