"use client";

import { motion } from "framer-motion";
import Navbar from "../../components/Navbar"; 
import Cta from "../../components/Cta"; 

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-stone-50 min-h-screen text-stone-900 font-light">
        
        {/* --- HERO BÖLÜMÜ (Şiirsel ve Doğal Giriş) --- */}
        <section className="relative h-[70vh] w-full flex flex-col items-center justify-center text-center px-4 bg-stone-950 overflow-hidden">
          
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('1.jpeg')" }}
          ></motion.div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-stone-950/40 to-stone-950/80 z-0"></div>

          <div className="relative z-10 flex flex-col items-center mt-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-white/60 text-xs font-bold tracking-[0.4em] uppercase mb-4"
            >
              Anatolia Event
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              className="text-3xl md:text-5xl lg:text-6xl font-light tracking-wide text-white mb-6 leading-tight"
            >
              Hakkımızda
            </motion.h1>
          </div>
        </section>

        {/* --- BÖLÜM 1: MANİFESTO (Büyük Tipografi) --- */}
        <section className="py-24 md:py-40 container mx-auto px-6 md:px-12 text-center max-w-5xl">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-4xl lg:text-5xl font-light leading-relaxed md:leading-snug tracking-wide text-stone-800"
          >
            &ldquo;Sıradan bir mekan değil, hayatınızın en değerli anlarına ev sahipliği yapacak kusursuz bir sahne tasarlamak istedik. Ağaçların gölgesinde, lüks ve doğallığın o ince çizgisinde yürüyoruz.&rdquo;
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-px h-24 bg-stone-300 mx-auto mt-16"
          ></motion.div>
        </section>

        {/* --- BÖLÜM 2: FELSEFE (Görsel ve Metin Dengesi) --- */}
        <section className="py-12 md:py-24 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
              
              {/* Sol Taraf: Asimetrik Görsel Düzeni */}
              <div className="w-full lg:w-1/2 relative h-[500px] md:h-[700px]">
                <motion.img 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  src="1.jpeg" 
                  alt="Doğa ve Lüks" 
                  className="w-4/5 h-4/5 object-cover rounded-sm absolute top-0 left-0 shadow-lg"
                />
                <motion.img 
                  initial={{ opacity: 0, y: -40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  src="3.jpeg" 
                  alt="Gece Işıklandırması" 
                  className="w-3/5 h-3/5 object-cover rounded-sm absolute bottom-0 right-0 shadow-2xl border-8 border-white"
                />
              </div>

              {/* Sağ Taraf: Hikaye Metni (Çatı garantisi buraya eklendi) */}
              <motion.div 
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/2 flex flex-col"
              >
                <span className="text-xs font-light tracking-[0.3em] text-stone-400 uppercase mb-4">Mükemmeliyetçilik</span>
                <h3 className="text-3xl md:text-5xl font-light tracking-[0.1em] text-stone-800 leading-tight mb-8 uppercase">
                  Detaylardaki <br /> İmza Dokunuşlar.
                </h3>
                
                <div className="space-y-6 text-stone-500 font-light leading-relaxed text-sm md:text-base tracking-wide">
                  <p>
                    İstanbul Avrupa Yakası&apos;nın en gözde lokasyonlarından Eyüpsultan&apos;da yer alan Anatolia Event&apos;in temelleri; kapalı düğün salonlarının boğucu atmosferinden uzaklaşıp, doğanın ferahlığını lüks davet konforuyla harmanlama fikriyle atıldı.
                  </p>
                  <p className="text-stone-700 font-medium">
                    En çok tercih edilen açık hava kır düğünü mekanları arasında yer almamızın sırrı, özel mimari çatımız sayesinde hava koşullarını asla bir riske dönüştürmememizdir. Doğanın tam kalbinde, dört mevsim güvenli bir deneyim vadediyoruz.
                  </p>
                  <p>
                    Söz, nişan ve kurumsal organizasyonlarınızda; masalardaki taze çiçeklerin kokusundan, geceye eşlik eden müziğin frekansına kadar hiçbir detayı şansa bırakmıyoruz. Siz sadece o özel günün tadını çıkarın, geri kalan kusursuzluğu biz planlayalım.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* --- BÖLÜM 3: MİMARİ VE KAPASİTE --- */}
        <section className="py-24 md:py-40 container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 text-center divide-y md:divide-y-0 md:divide-x divide-stone-200">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="flex flex-col items-center justify-center py-8 md:py-0 w-full"
            >
              <span className="text-5xl md:text-7xl font-extralight text-stone-800 mb-4">4</span>
              <span className="text-xs font-light tracking-[0.3em] text-stone-400 uppercase">İmza Konsept</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center justify-center py-8 md:py-0 w-full"
            >
              <span className="text-5xl md:text-7xl font-extralight text-stone-800 mb-4">5+</span>
              <span className="text-xs font-light tracking-[0.3em] text-stone-400 uppercase">Yıllık Tecrübe</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col items-center justify-center py-8 md:py-0 w-full"
            >
              <span className="text-5xl md:text-7xl font-extralight text-stone-800 mb-4">∞</span>
              <span className="text-xs font-light tracking-[0.3em] text-stone-400 uppercase">Unutulmaz Anı</span>
            </motion.div>

          </div>
        </section>

        <Cta />
      </main>
    </>
  );
}