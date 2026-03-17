"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Cta() {
  return (
    <section className="py-24 md:py-32 bg-stone-100 overflow-hidden relative">
      
      {/* Hafif doku deseni */}
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #d6d3d1 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">

          {/* ─ Sol: Yazı + Buton ─ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 flex flex-col items-start text-left"
          >
            <span className="text-[10px] tracking-[0.35em] text-stone-400 uppercase mb-6 block">
              İletişim
            </span>

            <h2 className="text-3xl md:text-5xl lg:text-[56px] font-extralight tracking-tight text-stone-800 leading-[1.05] mb-8">
              Hayalinizdeki Günü <br />
              <span className="italic text-stone-500">Birlikte Planlayalım</span>
            </h2>

            <div className="w-14 h-[1px] bg-stone-300 mb-8" />

            <p className="text-stone-500 font-light tracking-wide mb-10 max-w-lg leading-relaxed text-sm md:text-base">
              Mekanı keşfetmek, detayları konuşmak ve size özel tekliflerimizi öğrenmek için hemen ulaşın. Aklınızdaki tüm detayları netleştirmek için sizi Kemerburgaz&apos;a bekliyoruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/iletisim"
                className="bg-stone-900 text-white px-10 py-4 text-xs font-light tracking-[0.25em] uppercase hover:bg-stone-800 transition-colors duration-500 shadow-xl"
              >
                İletişime Geç
              </Link>
              <Link
                href="/hakkimizda"
                className="px-10 py-4 text-xs font-light tracking-[0.25em] uppercase text-stone-700 border border-stone-300 hover:border-stone-700 transition-colors duration-500"
              >
                Bizi Tanıyın
              </Link>
            </div>
          </motion.div>

          {/* ─ Sağ: Lokasyon Kartı ─ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex-1 w-full"
          >
            <div className="bg-white shadow-2xl shadow-stone-200 overflow-hidden">

              {/* Harita Görsel Alanı - Tıklanabilir Link Haline Getirildi */}
              <a 
                href="https://www.google.com/maps/place/Anatolia+Event/@41.1516449,28.9036573,17z/data=!3m1!4b1!4m6!3m5!1s0x14cab3b2c8e128df:0xf30c993d3db4d025!8m2!3d41.1516449!4d28.9062322!16s%2Fg%2F11dx8kj8ck?hl=tr&entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-56 bg-stone-100 relative overflow-hidden group cursor-pointer"
              >
                <iframe
                  title="Anatolıa Event Konum"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.9!2d28.9147!3d41.1674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDEwJzAyLjYiTiAyOMKwNTQnNTIuOSJF!5e0!3m2!1str!2str!4v1000000000000"
                  /* pointer-events-none eklendi ki tıklamaları iframe yutmasın, a etiketi çalışsın */
                  className="w-full h-full border-0 grayscale pointer-events-none transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  allowFullScreen
                />
                {/* Harita üstü pin overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-stone-900 text-white px-4 py-2 text-xs tracking-widest uppercase flex items-center gap-2 shadow-lg transition-transform duration-500 group-hover:-translate-y-1">
                    <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
                    Anatolıa Event
                  </div>
                </div>
              </a>

              {/* Kart Bilgi Alanı */}
              <div className="p-8 flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-stone-500" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] text-stone-400 uppercase mb-1">Adres</p>
                    <p className="text-stone-700 text-sm font-light leading-relaxed">
                    Mithatpaşa, Kumsu Sk. no:55 <br /> 34075 Eyüpsultan/İstanbul, Türkiye
                    </p>
                  </div>
                </div>

                <div className="h-[1px] bg-stone-100" />

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-3.5 h-3.5 text-stone-500" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] text-stone-400 uppercase mb-1">Telefon</p>
                    <a href="tel:+905333058997" className="text-stone-700 text-sm font-light hover:text-stone-900 transition-colors">
                      +90 533 305 89 97
                    </a>
                  </div>
                </div>

                <div className="h-[1px] bg-stone-100" />

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-stone-500" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] text-stone-400 uppercase mb-1">Çalışma Saatleri</p>
                    <p className="text-stone-700 text-sm font-light">Pazartesi – Cumartesi, 09:00 – 19:00 <br /> Cumartesi
                    10:00 – 17:00</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}