"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MEDIA from "@/lib/media";

const services = [
  {
    id: 1,
    title: "Davet & Organizasyon",
    desc: "Doğum günlerinden kurumsal yemeklere kadar sevdiklerinizle bir arada olacağınız şık buluşmalar.",
    image: MEDIA.servicesPreview.davet,
  },
  {
    id: 2,
    title: "Kır Düğünü",
    desc: "Yeşillikler içinde, en ince detayına kadar düşünülmüş, samimi ve masal gibi bir gece.",
    image: MEDIA.servicesPreview.kirDugun,
  },
  {
    id: 3,
    title: "İsteme & Söz",
    desc: "Ailenizle baş başa, sıcak, geleneksel ve tamamen size özel hazırlanan ilk adım.",
    image: MEDIA.servicesPreview.istemeSoz,
  },
  {
    id: 4,
    title: "Nişan",
    desc: "Evliliğe giden yolda, en yakınlarınızla doyasıya eğleneceğiniz zarif bir kutlama.",
    image: MEDIA.servicesPreview.nisan,
  },
];

export default function ServicesPreview() {
  const [activeId, setActiveId] = useState(2);

  return (
    <section className="pt-12 md:pt-16 pb-24 md:pb-32 bg-[#fcfbf9] text-stone-900">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">

        {/* Üst Başlık */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-left"
          >
            <span className="text-[10px] md:text-xs font-medium tracking-[0.3em] text-stone-400 uppercase mb-4 block">
              Neler Yapıyoruz?
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-stone-800 leading-tight">
              Birlikte <br className="hidden md:block" />
              <span className="italic text-stone-500">Planlayalım.</span>
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
              href="/hizmetlerimiz"
              className="group flex items-center gap-4 text-xs tracking-[0.2em] text-stone-800 uppercase hover:text-stone-500 transition-colors duration-300 pb-2 border-b border-stone-800 hover:border-stone-500"
            >
              <span>Tüm Detayları Görün</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" strokeWidth={1.5} />
            </Link>
          </motion.div>
        </div>

        {/* Akordeon Galeri */}
        <div className="flex flex-col md:flex-row w-full h-[700px] md:h-[600px] lg:h-[700px] gap-2 md:gap-4">
          {services.map((service) => {
            const isActive = activeId === service.id;

            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setActiveId(service.id)}
                onClick={() => setActiveId(service.id)}
                animate={{ flex: isActive ? 4 : 1 }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                style={{ WebkitTransform: "translateZ(0)", willChange: "flex" }}
                className={`relative overflow-hidden rounded-2xl md:rounded-[40px] cursor-pointer group ${isActive ? "shadow-2xl" : "shadow-md"}`}
              >
                {/* Arka Plan Görseli */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <motion.div
                  animate={{ opacity: isActive ? 0.55 : 0.4 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-stone-950"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* İçerik */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-4 mb-2">
                    <div className={`w-8 h-[1px] bg-white transition-all duration-500 ${isActive ? "opacity-100" : "opacity-0 w-0"}`} />
                    <h3
                      className={`text-white uppercase transition-all duration-500 font-light tracking-widest ${
                        isActive
                          ? "text-2xl md:text-3xl"
                          : "text-sm md:text-lg origin-left transform md:-rotate-90 md:translate-y-[-100px] md:translate-x-4 whitespace-nowrap"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="text-stone-300 font-light text-sm md:text-base leading-relaxed mb-6 mt-4 max-w-md">
                          {service.desc}
                        </p>
                        <Link
                          href="/hizmetlerimiz"
                          className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/50 text-white hover:bg-white hover:text-stone-900 transition-colors duration-500"
                        >
                          <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobil Alt Buton */}
        <div className="mt-12 flex justify-center md:hidden">
          <Link
            href="/hizmetlerimiz"
            className="group flex items-center gap-4 text-xs tracking-[0.2em] text-stone-800 uppercase hover:text-stone-500 transition-colors duration-300 pb-2 border-b border-stone-800 hover:border-stone-500"
          >
            <span>Tüm Detayları Görün</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" strokeWidth={1.5} />
          </Link>
        </div>

      </div>
    </section>
  );
}