"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, MessageCircle, ExternalLink } from "lucide-react";
import Navbar from "../../components/Navbar"; 

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-stone-50 min-h-screen text-stone-900 font-light selection:bg-stone-900 selection:text-white">
        
        {/* --- HERO BÖLÜMÜ --- */}
        <section className="relative h-[60vh] md:h-[70vh] w-full flex flex-col items-center justify-center text-center px-4 bg-stone-950 overflow-hidden">
          <motion.div
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat grayscale"
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

        <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-4xl mx-auto flex flex-col gap-20">
            
            {/* 1. KISIM: HİKAYE (En Üstte) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 1 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-light tracking-[0.1em] text-stone-800 leading-tight mb-6">
                Hikayenizi Birlikte Yazalım.
              </h2>
              <div className="w-12 h-[1px] bg-stone-300 mx-auto mb-6"></div>
              <p className="text-stone-500 font-light leading-relaxed text-sm md:text-base tracking-wide max-w-2xl mx-auto">
                Hayalinizdeki o kusursuz etkinliği planlamak, detayları konuşmak ve Anatolia Event&apos;in benzersiz atmosferini yakından hissetmek için sizi kahveye bekliyoruz. 
              </p>
            </motion.div>

            {/* 2. KISIM: İLETİŞİM KUTULARI (Ortada) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 1, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 border border-stone-200 shadow-sm"
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
                <span className="text-xl md:text-2xl font-light tracking-widest text-stone-900 group-hover:text-white transition-colors duration-500">@anatoliaeventkirdugunu</span>
              </a>

              {/* E-Posta */}
              <a href="mailto:anatoliaevent@gmail.com" className="group bg-stone-50 p-12 flex flex-col items-center justify-center text-center hover:bg-stone-900 transition-colors duration-500">
                <Mail strokeWidth={1} className="w-8 h-8 text-stone-400 group-hover:text-white transition-colors duration-500 mb-6" />
                <span className="text-[10px] md:text-xs font-semibold tracking-[0.3em] text-stone-400 uppercase mb-3">E-Posta</span>
                <span className="text-xl md:text-2xl font-light tracking-widest text-stone-900 group-hover:text-white transition-colors duration-500">anatoliaevent@gmail.com</span>
              </a>
            </motion.div>

            {/* 3. KISIM: ADRES VE MİNİMAL HARİTA (En Altta) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-col md:flex-row gap-12 md:gap-16 items-center bg-white p-8 md:p-12 border border-stone-200 shadow-sm"
            >
              {/* Adres Yazısı */}
              <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-xs font-semibold tracking-[0.3em] text-stone-900 uppercase mb-4">
                  Adres Bilgisi
                </span>
                <p className="text-stone-600 font-light text-sm md:text-base tracking-wide leading-relaxed mb-6">
                  Mithatpaşa, Kumsu Sk. No:55<br/>34075 Eyüpsultan / İstanbul
                </p>
                {/* YENİ: Doğrudan İşletmeyi (Anatolia Event) Açan Link */}
                <a 
                  href="https://www.google.com/maps/place/?q=place_id:ChIJ3yjhyLKzyhQRJdC0PT2ZDPM" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase text-stone-900 group"
                >
                  <MapPin className="w-4 h-4 group-hover:text-stone-500 transition-colors" />
                  <span className="border-b border-stone-900 group-hover:border-stone-500 group-hover:text-stone-500 transition-colors pb-1">
                    Yol Tarifi Al
                  </span>
                  <ExternalLink className="w-3 h-3 text-stone-400 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Minimal Harita */}
              <div className="w-full md:w-2/3 h-64 md:h-80 relative group overflow-hidden border border-stone-200">
                {/* YENİ: İşletme ismine odaklanmış ve çökmeyen Google Haritası İframe Kodu */}
                <iframe 
                  src="https://maps.google.com/maps?q=Anatolia+Event,+Mithatpa%C5%9Fa,+Kumsu+Sk.+no:55,+34075+Ey%C3%BCpsultan/%C4%B0stanbul&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                  className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-1000" 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Anatolia Event Konum"
                ></iframe>
                
                {/* Üzerine gelince karartan çok ince bir tül */}
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500 pointer-events-none"></div>
              </div>
            </motion.div>

          </div>
        </div>

      </main>
    </>
  );
}