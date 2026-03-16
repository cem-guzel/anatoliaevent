"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import PageHero from "../../components/PageHero";
import { ArrowRight, Sparkles } from "lucide-react";
import MEDIA from "@/lib/media";

// ─── Veri ─────────────────────────────────────────────────────────────

const servicesList = [
  {
    id: "01",
    title: "Davet & Organizasyon",
    subtitle: "Size Özel Kutlamalar",
    description:
      "Baby shower, doğum günü, mezuniyet veya kurumsal yemekler... Hangi etkinliği kutluyor olursanız olun, doğa ile iç içe prestijli bir deneyim sunmak için tüm detayları biz düşünüyoruz.",
    features: [
      "Amaca Uygun Dekorasyon",
      "Premium İkramlar",
      "Profesyonel Karşılama",
      "Esnek Kapasite Seçenekleri",
    ],
    image: MEDIA.hizmetler.davet,
  },
  {
    id: "02",
    title: "Kır Düğünü",
    subtitle: "Masal Gibi Bir Gün",
    description:
      "Asırlık ağaçların gölgesinde, doğanın kalbinde bir masal... Geleneksel kır düğünü algısını lüks detaylar, size özel tasarlanmış menüler ve benzersiz bir atmosferle yeniden tanımlıyoruz.",
    features: [
      "Kişiselleştirilmiş Menü Tadımı",
      "Özel Karşılama Kokteyli",
      "Profesyonel Ses ve Işık",
      "Gelin & Damat Hazırlık Odası",
    ],
    image: MEDIA.hizmetler.kirDugun,
  },
  {
    id: "03",
    title: "İsteme & Söz",
    subtitle: "Geleneksel ve Samimi",
    description:
      "Geleneklerimizin en güzel yansıması... Sadece en yakınlarınızla bir arada olacağınız, samimi, sıcak ama lüksünden hiçbir şey kaybetmeyen butik söz ve isteme organizasyonları.",
    features: [
      "Butik Oturma Düzeni",
      "Özel Türk Kahvesi Sunumu",
      "Arka Fon ve Çiçek Süsleme",
      "Karşılama Ekibi",
    ],
    image: MEDIA.hizmetler.istemeSoz,
  },
  {
    id: "04",
    title: "Nişan",
    subtitle: "Zarif Bir Başlangıç",
    description:
      "Evliliğe atılan ilk büyük adım. Ailelerin bir araya geldiği bu özel günü, kusursuz masa düzenleri, romantik aydınlatmalar ve zarif bir atmosfer ile taçlandırıyoruz.",
    features: [
      "Konsept Tasarımı",
      "Özel Fotoğraf Çekim Alanları",
      "Zarif Masa Süslemeleri",
      "DJ ve Müzik Organizasyonu",
    ],
    image: MEDIA.hizmetler.nisan,
  },
];

const extraEvents = [
  { title: "Evlilik Teklifi", desc: "Ağaçların altında, ışıkların arasında — o anı unutulmaz kılıyoruz." },
  { title: "Yıldönümü", desc: "Yıllar geçse de o ilk günün heyecanını yeniden yaşatıyoruz." },
  { title: "Mezuniyet", desc: "Emeklerinizin meyvesini doğanın kalbinde kutlayın." },
  { title: "Kahvaltı Organizasyonu", desc: "Sabahın ferahlığında, yeşillikler arasında başlayan özel bir gün." },
  { title: "Doğum Günü", desc: "Her yaşa özel, tamamen size ait bir kutlama atmosferi." },
  { title: "Workshop & Lansman", desc: "Kurumsal etkinlikleriniz için ilham veren doğal bir sahne." },
];

// ─── Servis Kartı ─────────────────────────────────────────────────────

function ServiceCard({
  service,
  index,
}: {
  service: (typeof servicesList)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
      className="w-full max-w-6xl mx-auto"
    >
      <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-0 group`}>

        {/* Görsel */}
        <div className="w-full lg:w-[45%] h-64 md:h-80 lg:h-[480px] overflow-hidden relative flex-shrink-0">
          <motion.img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <div className="absolute top-6 left-6 text-white/20 text-7xl font-extralight leading-none select-none">
            {service.id}
          </div>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-700" />
        </div>

        {/* İçerik */}
        <div className={`w-full lg:w-[55%] bg-stone-950 p-10 md:p-14 lg:p-16 flex flex-col justify-center border border-white/5 ${isEven ? "border-l-0" : "border-r-0"}`}>
          <span className="text-[9px] tracking-[0.4em] text-stone-500 uppercase mb-5 block">
            {service.subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-white tracking-tight leading-[1.05] mb-6">
            {service.title}
          </h2>
          <div className="w-10 h-[1px] bg-stone-700 group-hover:w-20 group-hover:bg-stone-400 transition-all duration-700 mb-8" />
          <p className="text-stone-400 text-sm md:text-base font-light leading-relaxed mb-10">
            {service.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 border-t border-white/5 pt-8">
            {service.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex items-center gap-3 text-stone-500 hover:text-stone-300 transition-colors duration-300"
              >
                <div className="w-1 h-1 rounded-full bg-stone-600 flex-shrink-0" />
                <span className="text-[11px] tracking-[0.2em] uppercase">{feature}</span>
              </motion.div>
            ))}
          </div>

          <Link
            href="/iletisim"
            className="group/btn inline-flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase text-white pb-2 border-b border-white/20 hover:border-white transition-colors duration-500 w-fit"
          >
            <span>Bilgi Al</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1.5 transition-transform duration-300" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Ana Bileşen ──────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-stone-950">
      <Navbar />

      {/* Hero */}
      <PageHero
        eyebrow="Anatolia İmza Konseptleri"
        title="Hizmetlerimiz"
        subtitle="Her an için bir deneyim"
        image={MEDIA.hizmetler.hero}
        tags={[
          { label: "Alan", value: "Kemerburgaz" },
          { label: "Kapasite", value: "1.300 Kişi" },
        ]}
        sideText="Anatolia Event — Services"
        height="75vh"
      />

      {/* Hizmet Kartları */}
      <section className="py-20 md:py-28 px-4 md:px-8 flex flex-col items-center gap-6 md:gap-8">
        {servicesList.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </section>

      {/* Kapasite Şeridi */}
      <section className="px-4 md:px-8 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-800">
          {[
            { value: "1.300", label: "Açık Alan Kapasitesi" },
            { value: "350", label: "Kapalı Alan Kapasitesi" },
            { value: "4 Mevsim", label: "Pergole Sistemi" },
            { value: "2021'den", label: "Beri Hizmetinizdeyiz" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-stone-900 px-8 py-8 flex flex-col gap-2 text-center"
            >
              <span className="text-2xl md:text-3xl font-extralight text-white tracking-tight">{stat.value}</span>
              <span className="text-[9px] tracking-[0.3em] text-stone-500 uppercase">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Diğer Organizasyonlar */}
      <section className="py-24 md:py-32 px-4 md:px-8 bg-stone-950 border-t border-white/5">
        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-stone-500" strokeWidth={1.5} />
                <span className="text-[9px] tracking-[0.45em] text-stone-500 uppercase">Her Anınız İçin</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-white tracking-tight leading-tight">
                Daha Fazlası <br />
                <span className="italic text-stone-400">için de buradayız.</span>
              </h2>
            </div>
            <p className="hidden md:block max-w-xs text-stone-600 text-sm font-light leading-relaxed text-right">
              Ana hizmetlerimizin ötesinde, hayatınızın her özel anını kutlamak için buradayız.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-800">
            {extraEvents.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="bg-stone-900 p-8 md:p-10 group hover:bg-stone-800/80 transition-colors duration-500"
              >
                <span className="text-[9px] tracking-[0.4em] text-stone-700 uppercase block mb-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg md:text-xl font-extralight text-white tracking-wide mb-3 group-hover:text-stone-200 transition-colors duration-300">
                  {event.title}
                </h3>
                <div className="w-6 h-[1px] bg-stone-700 group-hover:w-12 group-hover:bg-stone-500 transition-all duration-500 mb-5" />
                <p className="text-stone-600 text-sm font-light leading-relaxed group-hover:text-stone-400 transition-colors duration-500">
                  {event.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-8 text-center text-[10px] tracking-[0.3em] text-stone-600 uppercase"
          >
            Listede görmediğiniz bir etkinlik mi var? Bizi arayın — çözüm üretiriz.
          </motion.p>
        </div>
      </section>

      {/* Alt CTA */}
      <section className="py-32 text-center px-6 bg-stone-950 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-stone-800/20 rounded-full blur-[100px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-col items-center"
        >
          <span className="text-[10px] tracking-[0.4em] text-stone-500 uppercase mb-8 block">
            Bir Adım Uzağınızdayız
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extralight text-white tracking-tight mb-6 leading-tight">
            Hayalinizdeki Günü <br />
            <span className="italic text-stone-400">Birlikte Kuralım.</span>
          </h2>
          <div className="w-12 h-[1px] bg-stone-700 mb-10" />
          <p className="text-stone-500 text-sm font-light leading-relaxed mb-12 max-w-md">
            İlk görüşme tamamen ücretsiz. Bizi arayın, mekanı görün, hayalinizi anlatın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/iletisim"
              className="group inline-flex items-center gap-3 bg-white text-stone-900 px-10 py-4 text-[10px] tracking-[0.3em] uppercase hover:bg-stone-200 transition-colors duration-500 font-medium"
            >
              İletişime Geç
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2} />
            </Link>
            <Link
              href="/galeri"
              className="inline-flex items-center gap-3 border border-white/20 text-white px-10 py-4 text-[10px] tracking-[0.3em] uppercase hover:border-white/60 transition-colors duration-500"
            >
              Galeriyi Gör
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}