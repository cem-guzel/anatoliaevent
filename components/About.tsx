"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Wine, CalendarHeart, GlassWater, Flower2, Heart } from "lucide-react";
import MEDIA from "@/lib/media";

export default function About() {
  return (
    <section id="hakkimizda" className="pt-24 md:pt-48 pb-12 md:pb-16 bg-[#fcfbf9] text-stone-900 overflow-hidden relative">

      <div className="absolute top-0 right-0 w-[500px] h-[500px] border border-stone-200 rounded-full opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-24 items-center">

          {/* Sol: Metin */}
          <div className="w-full lg:w-[55%] flex flex-col relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span className="text-[10px] md:text-xs font-medium tracking-[0.2em] text-stone-500 uppercase mb-8 block border-b border-stone-200 pb-4 inline-block pr-12">
                Anatolıa Event Düğün & Etkinlik & Organizasyon
              </span>

              <h2 className="text-4xl md:text-5xl lg:text-[64px] font-extralight tracking-tight text-stone-800 leading-[1.05] mb-12">
                Sizin hikayeniz, <br />
                <span className="italic text-stone-500">bizim sahnemiz.</span>
              </h2>

              <div className="text-stone-500 font-light leading-relaxed mb-16 text-sm md:text-base tracking-wide lg:pr-12">
                <p className="mb-6">
                  <span className="font-medium text-stone-800">Anatolia Event;</span> Kemerburgaz&apos;ın en özel doğal alanlarından birinde, asırlık ağaçların gölgesinde sevdiklerinizle paylaştığınız o en özel anları unutulmaz birer anıya dönüştürüyor.
                </p>
                <p>
                  Sadece şık bir mekan değil; ruhu olan, kendinizi ait hissedeceğiniz samimi ve kusursuz bir atmosfer sunuyoruz. Bizim için her kutlama, özenle yazılması gereken yeni bir hikaye demek.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 mb-12"
            >
              {[
                { icon: Wine, label: "Davet & Org." },
                { icon: Flower2, label: "Kır Düğünü" },
                { icon: CalendarHeart, label: "İsteme & Söz" },
                { icon: GlassWater, label: "Nişan" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-4 group border-b border-stone-100 pb-4">
                  <Icon className="w-5 h-5 text-stone-400 group-hover:text-stone-700 transition-colors" strokeWidth={1.5} />
                  <span className="text-stone-800 text-xs tracking-widest uppercase font-medium">{label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
              <Link href="/hakkimizda" className="group inline-flex items-center gap-4 text-[10px] tracking-[0.3em] text-stone-800 uppercase hover:text-stone-500 transition-colors duration-300 pb-2 border-b border-stone-800 hover:border-stone-500">
                <span>Hikayemizi Keşfedin</span>
                <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Link>
            </motion.div>
          </div>

          {/* Sağ: Görsel */}
          <div className="w-full lg:w-[45%] relative h-[450px] sm:h-[500px] md:h-[750px] flex justify-center mt-6 lg:mt-0">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-full h-full rounded-t-[150px] md:rounded-t-[200px] overflow-hidden shadow-2xl z-10"
            >
              <img
                src={MEDIA.about.mainImage}
                alt="Anatolıa Event Ana Görsel"
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-[4s] ease-out"
              />
            </motion.div>

            {/* Dönen mühür */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute left-4 top-4 md:left-[-60px] md:top-[15%] z-30 flex items-center justify-center w-24 h-24 md:w-40 md:h-40 rounded-full bg-[#fcfbf9]/90 md:bg-[#fcfbf9] backdrop-blur-sm shadow-xl border border-stone-100"
            >
              <Heart className="absolute w-4 h-4 md:w-6 md:h-6 text-stone-300" strokeWidth={1} />
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                className="w-full h-full"
                viewBox="0 0 100 100"
              >
                <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                <text className="text-[10px] md:text-[9.5px] font-medium tracking-[0.25em] fill-stone-700 uppercase">
                  <textPath href="#circlePath" startOffset="0%">
                    Kır Düğünü  • Anatolıa Event
                  </textPath>
                </text>
              </motion.svg>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}