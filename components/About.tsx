"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="hakkimizda" className="py-24 md:py-32 bg-stone-50 text-stone-900 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* --- YENİ MODERN BLOK: Yan Yana Temiz Tasarım --- */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Sol Taraf: Metin ve 4 Temel Hizmet */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <span className="text-xs font-light tracking-[0.3em] text-stone-400 uppercase mb-4">Anatolia Event</span>
            <h2 className="text-3xl md:text-5xl font-light tracking-[0.1em] text-stone-800 leading-tight mb-8 uppercase">
              Doğanın Kalbinde, <br /> Kusursuz Anlar.
            </h2>
            <div className="w-12 h-[1px] bg-stone-300 mb-8"></div>
            
            <p className="text-stone-500 font-light leading-relaxed mb-8 text-sm md:text-base tracking-wide">
              Sıradanlığa meydan okuyan çiftler için tasarlandı. Yeşilin her tonunu barındıran asırlık ağaçların gölgesinde; sadece bir mekan değil, kusursuz bir deneyim sunuyoruz. Lüks ve doğallığın ince çizgisinde, size özel bir hikaye yazıyoruz.
            </p>

            {/* 4 Ana Hizmet Vurgusu */}
            <div className="grid grid-cols-2 gap-6 mt-4">
              <div className="flex flex-col gap-2">
                <span className="text-stone-800 text-sm tracking-widest uppercase font-medium">Kır Düğünü</span>
                <span className="text-stone-400 text-xs font-light">Unutulmaz evetler</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-stone-800 text-sm tracking-widest uppercase font-medium">Nişan</span>
                <span className="text-stone-400 text-xs font-light">İlk büyük adım</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-stone-800 text-sm tracking-widest uppercase font-medium">İsteme & Söz</span>
                <span className="text-stone-400 text-xs font-light">Samimi ve geleneksel</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-stone-800 text-sm tracking-widest uppercase font-medium">Davet & Organizasyon</span>
                <span className="text-stone-400 text-xs font-light">Kusursuz etkinlikler</span>
              </div>
            </div>
          </motion.div>

          {/* Sağ Taraf: Tek, Büyük, Asil Görsel (Karmaşa Yok) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-1/2 h-[600px] md:h-[800px] relative rounded-t-full overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=3270&auto=format&fit=crop" 
              alt="Anatolia Event Atmosferi" 
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-1000" 
            />
            {/* Zarif İç Gölge */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}