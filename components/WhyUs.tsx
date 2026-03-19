"use client";
import { motion } from "framer-motion";
import { Leaf, Heart, Clock, Star } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Doğayla İç İçe",
    desc: "Kemerburgaz'ın asırlık ağaçları altında, şehrin gürültüsünden uzak bir ortamda hayalinizdeki anı yaşayın.",
  },
  {
    icon: Heart,
    title: "Kişiye Özel Planlama",
    desc: "Her çift farklıdır.  Anatolia ekibi sadece sizin için tasarlanmış bir deneyim sunar.",
  },
  {
    icon: Clock,
    title: "Başından Sonuna Destek",
    desc: "İlk görüşmeden son dansa kadar yanınızdayız. Siz sadece anın tadını çıkarın.",
  },
  {
    icon: Star,
    title: "Yüzlerce Mutlu Çift",
    desc: "200'den fazla başarılı etkinlikle sektörde kanıtlanmış bir isim. Her yorum, bir güven belgesi.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 md:py-32 bg-stone-900 text-white overflow-hidden relative">

      {/* Arkaplan ışıltı efekti */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-stone-700/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Üst Başlık */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] tracking-[0.35em] text-stone-400 uppercase mb-4 block">
              Farkımız
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight leading-tight">
              Neden <br />
              <span className="italic text-stone-400">Anatolıa Event?</span>
            </h2>
          </motion.div>

          {/* Sağda dekoratif çizgi */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="hidden md:block h-[1px] w-48 bg-stone-700 origin-left mb-3"
          />
        </div>

        {/* Özellik Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-800">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: "easeOut" }}
                className="group bg-stone-900 p-10 flex flex-col gap-6 hover:bg-stone-800/80 transition-colors duration-500 cursor-default"
              >
                {/* İkon */}
                <div className="w-12 h-12 rounded-full border border-stone-700 group-hover:border-stone-500 flex items-center justify-center transition-colors duration-500">
                  <Icon className="w-5 h-5 text-stone-400 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                </div>

                {/* Numara */}
                <span className="text-[10px] tracking-[0.3em] text-stone-600 uppercase">
                  0{i + 1}
                </span>

                {/* Başlık */}
                <h3 className="text-lg font-light tracking-wide text-white">
                  {f.title}
                </h3>

                {/* Ayraç */}
                <div className="w-8 h-[1px] bg-stone-700 group-hover:w-16 group-hover:bg-stone-400 transition-all duration-500" />

                {/* Açıklama */}
                <p className="text-stone-400 text-sm font-light leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Alt İstatistik Şeridi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-px bg-stone-800 grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-700"
        >
          {[
            { value: "200+", label: "Etkinlik" },
            { value: "500+", label: "Misafir Kapasitesi" },
            { value: "4.6★", label: "Google Yorumları" },
            { value: "5+", label: "Yıllık Deneyim" },
          ].map((stat) => (
            <div key={stat.label} className="py-8 px-10 text-center">
              <div className="text-2xl md:text-3xl font-extralight text-white tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-[10px] tracking-[0.25em] text-stone-500 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}