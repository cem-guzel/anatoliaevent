"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Davet & Organizasyon",
    desc: "Doğum günlerinden kurumsal yemeklere kadar sevdiklerinizle bir arada olacağınız şık buluşmalar.",
    image: "1.jpeg",
  },
  {
    id: 2,
    title: "Kır Düğünü",
    desc: "Yeşillikler içinde, en ince detayına kadar düşünülmüş, samimi ve masal gibi bir gece.",
    image: "6.jpeg",
  },
  {
    id: 3,
    title: "İsteme & Söz",
    desc: "Ailenizle baş başa, sıcak, geleneksel ve tamamen size özel hazırlanan ilk adım.",
    image: "3.jpeg",
  },
  {
    id: 4,
    title: "Nişan",
    desc: "Evliliğe giden yolda, en yakınlarınızla doyasıya eğleneceğiniz zarif bir kutlama.",
    image: "4.jpeg",
  }
];

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-white text-stone-900">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <span className="text-xs font-light tracking-[0.3em] text-stone-400 uppercase mb-4 block">Neler Yapıyoruz?</span>
          <h2 className="text-3xl md:text-4xl font-light tracking-[0.05em] text-stone-800">
            Birlikte Planlayalım
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
            >
              <Link href="/hizmetlerimiz" className="group relative block h-[450px] w-full overflow-hidden cursor-pointer rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-500">
                
                {/* Arka Plan Görseli */}
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Karartma Efekti: Mobilde hep koyu, PC'de üzerine gelince koyulaşır */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 md:opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Kart İçeriği (Yazılar ve Buton) */}
                <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end transform transition-transform duration-500 translate-y-0 md:translate-y-12 group-hover:translate-y-0">
                  <h3 className="text-white text-xl font-light tracking-widest uppercase mb-3">{service.title}</h3>
                  
                  {/* Açıklama: Mobilde hep görünür (opacity-100), PC'de gizli (md:opacity-0) ve hover ile gelir */}
                  <p className="text-stone-300 text-sm font-light leading-relaxed opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-6 line-clamp-3">
                    {service.desc}
                  </p>
                  
                  {/* Buton: Mobilde hep görünür, PC'de hover ile gelir */}
                  <span className="inline-block border border-white/50 text-white text-[10px] md:text-xs tracking-[0.2em] uppercase px-6 py-2 rounded-full w-max opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    İncele
                  </span>
                </div>

              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center"
        >
          <Link 
            href="/hizmetlerimiz" 
            className="group flex items-center gap-4 text-xs font-light tracking-[0.2em] text-stone-500 uppercase hover:text-stone-900 transition-colors duration-300"
          >
            <span className="border-b border-transparent group-hover:border-stone-900 transition-colors duration-300 pb-1">
              Tüm Detayları Görün
            </span>
            <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}