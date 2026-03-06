"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Kır Düğünü",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=3270&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Nişan",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=3269&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "İsteme & Söz",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=3269&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Davet & Organizasyon",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=3269&auto=format&fit=crop",
  }
];

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-white text-stone-900">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <span className="text-xs font-light tracking-[0.3em] text-stone-400 uppercase mb-4 block">Ayrıcalıklarımız</span>
          <h2 className="text-3xl md:text-4xl font-light tracking-[0.1em] text-stone-800 uppercase">
            Sınırsız Hizmetler
          </h2>
        </div>

        {/* 4'lü Grid Sistemi (PC'de 4 yan yana, Tablette 2x2, Mobilde alt alta) */}
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
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 transition-colors duration-500 group-hover:bg-black/50"></div>
                
                <div className="absolute bottom-8 left-0 w-full text-center transition-opacity duration-500 group-hover:opacity-0">
                  <h3 className="text-white text-lg font-light tracking-widest uppercase">{service.title}</h3>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="text-white text-xs font-light tracking-[0.3em] uppercase border border-white/50 px-8 py-3 backdrop-blur-sm rounded-full">
                    Görüntüle
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
              Tüm Detayları Keşfedin 
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