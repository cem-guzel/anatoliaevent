"use client";

import { useRef, useState } from "react";
import PageHero from "../../components/PageHero";
import MEDIA from "@/lib/media";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Check, Plus, ChevronDown, Info } from "lucide-react";
import Link from "next/link";
import Navbar from "../../components/Navbar";

// ─── VERİ ─────────────────────────────────────────────────────────────

const menus = [
  {
    id: "kokteyl",
    tag: "Başlangıç",
    title: "Kokteyl Menü",
    badge: null,
    starters: [
      "Bistrolarda Dip Soslar ile Sebze Buketi",
      "Karışık Kuruyemiş",
    ],
    mains: [
      "Çiğ Köfte",
      "Su Böreği",
      "Mini Pizza",
      "Frambuazlı veya Çikolatalı Dilim Pasta",
      "Soft İçecek",
    ],
    note: "Minimum 250 kişi için geçerlidir.",
    highlight: false,
  },
  {
    id: "ordovr",
    tag: "Klasik",
    title: "Ordövr Menü",
    badge: null,
    starters: [
      "Bistrolarda Dip Soslar ile Sebze Buketi",
      "Karışık Kuruyemiş",
    ],
    mains: [
      "Çiğ Köfte",
      "Su Böreği",
      "Zeytinyağlı Yaprak Sarma",
      "Amerikan Salatası",
      "Havuç Tarator",
      "Dilim Domates",
      "Dilim Salatalık",
      "Frambuazlı veya Çikolatalı Dilim Pasta",
      "Soft İçecek",
    ],
    note: "Minimum 250 kişi için geçerlidir.",
    highlight: false,
  },
  {
    id: "tavuk-tabak",
    tag: "Popüler",
    title: "Tavuk Tabak Menü",
    badge: "Çok Tercih Edilen",
    starters: [
      "Bistrolarda Dip Soslar ile Sebze Buketi",
      "Karışık Kuruyemiş",
    ],
    mains: [
      "Özel Soslu Tavuk Pirzola",
      "Tereyağlı Pirinç Pilavı",
      "Özel Baharatlı Patates Kızartması",
      "Domates-Salatalık Söğüş",
      "Frambuazlı veya Çikolatalı Dilim Pasta",
      "Soft İçecek",
    ],
    note: "Minimum 250 kişi için geçerlidir.",
    highlight: true,
  },
  {
    id: "et-tabak",
    tag: "Premium",
    title: "Et Tabak Menü",
    badge: null,
    starters: [
      "Bistrolarda Dip Soslar ile Sebze Buketi",
      "Karışık Kuruyemiş",
    ],
    mains: [
      "Sebzeli Baharatlı Et Sote",
      "Tereyağlı Pirinç Pilavı",
      "Özel Baharatlı Patates Kızartması",
      "Domates-Salatalık Söğüş",
      "Frambuazlı ya da Çikolatalı Dilim Pasta",
      "Soft İçecek",
    ],
    note: "Minimum 250 kişi için geçerlidir.",
    highlight: false,
  },
  {
    id: "tavuk-set",
    tag: "Set Menü",
    title: "Tavuk Set Menü",
    badge: null,
    starters: [
      "Bistrolarda Dip Soslar ile Sebze Buketi",
      "Karışık Kuruyemiş",
    ],
    starterPlate: [
      "Dilim Su Böreği",
      "Antakya Usulü Ezme",
      "Kaşar Peyniri",
      "Haydari",
    ],
    mains: [
      "Özel Soslu Tavuk Pirzola",
      "Tereyağlı Pirinç Pilavı",
      "Özel Baharatlı Elma Dilim Patates Kızartması",
      "Domates-Salatalık Söğüş",
      "Frambuazlı ya da Çikolatalı Dilim Pasta",
      "Soft İçecek",
    ],
    note: "Minimum 250 kişi için geçerlidir.",
    highlight: false,
  },
  {
    id: "et-set",
    tag: "Premium Set",
    title: "Et Set Menü",
    badge: "En Kapsamlı",
    starters: [
      "Bistrolarda Dip Soslar ile Sebze Buketi",
      "Karışık Kuruyemiş",
    ],
    starterPlate: [
      "Dilim Su Böreği",
      "Antakya Usulü Ezme",
      "Kaşar Peyniri",
      "Haydari",
    ],
    mains: [
      "Sebzeli Baharatlı Et Sote",
      "Tereyağlı Pirinç Pilavı",
      "Özel Baharatlı Patates Kızartması",
      "Domates-Salatalık Söğüş",
      "Frambuazlı ya da Çikolatalı Dilim Pasta",
      "Soft İçecek",
    ],
    note: "Minimum 250 kişi için geçerlidir.",
    highlight: false,
  },
];

const includedServices = [
  "180 cm yuvarlak organizasyon masaları",
  "2 adet rezerve edilmiş aile masası",
  "Beyaz Tiffany sandalyeler",
  "Şeffaf boncuk supla",
  "Masa örtüsü, masa ortası çiçek dekorları",
  "Yürüyüş yolu süslemesi",
  "Nikah kürsüsü",
  "Gelin-Damat köşesi",
  "Arka fon taglar",
  "Volkan eşliğinde çıkış",
  "Ses-Işık sistemleri",
  "DJ performansı",
  "Özel gelin-damat hazırlık odası",
  "Organizasyon başından sonuna kadar profesyonel organizasyon planlayıcı",
  "Kadın-Erkek WC ve Kadın-Erkek Mescit",
];

const extraServices = [
  "Fotoğraf-Video Çekimi",
  "Otopark Vale Hizmeti",
  "VIP Hazırlık Odası",
  "Sahne, Podyum",
  "Kumaş Kaplama, Ekstra Işık ve Dekor Seçenekleri",
  "Menü Kartı",
  "Davetiye Seçenekleri",
  "Hediyelik Seçenekleri",
  "Kumaş Peçete Seçenekleri",
];

const infoItems = [
  "Açık alanımız 1.300 kişiye kadar, kapalı alanımız 350 kişiye kadar hizmet vermektedir.",
  "Olası olumsuz hava koşulları için açılır kapanır pergole sistemimiz mevcuttur.",
  "Sözleşme ile birlikte toplam tutar üzerinden %50 kapora alınır.",
  "Sözleşme sonrası yapılacak tüm değişiklikler (menü, kişi sayısı vb.) güncellenerek sözleşmeye yansıtılır.",
  "Fotoğraf ve video çekimleri anlaşmalı ekibimiz tarafından gerçekleşmektedir; sözleşmelere dahil değildir.",
];

// ─── Paralaks Hero ────────────────────────────────────────────────────
// ─── Menü Kartı ───────────────────────────────────────────────────────
function MenuCard({ menu, index }: { menu: typeof menus[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1 }}
      className={`relative flex flex-col border transition-all duration-500 ${
        menu.highlight
          ? "bg-stone-900 border-stone-700 text-white"
          : "bg-white border-stone-200 hover:border-stone-400 text-stone-900"
      }`}
    >
      {/* Rozet */}
      {menu.badge && (
        <div className={`absolute -top-3 left-6 px-4 py-1 text-[9px] tracking-[0.3em] uppercase font-medium ${
          menu.highlight ? "bg-white text-stone-900" : "bg-stone-900 text-white"
        }`}>
          {menu.badge}
        </div>
      )}

      <div className="p-8 md:p-10 flex flex-col gap-6 flex-1">
        {/* Üst */}
        <div>
          <span className={`text-[9px] tracking-[0.35em] uppercase block mb-2 ${menu.highlight ? "text-stone-400" : "text-stone-400"}`}>
            {menu.tag}
          </span>
          <h3 className={`text-2xl md:text-3xl font-extralight tracking-tight ${menu.highlight ? "text-white" : "text-stone-800"}`}>
            {menu.title}
          </h3>
          <div className={`w-8 h-[1px] mt-4 ${menu.highlight ? "bg-stone-600" : "bg-stone-200"}`} />
        </div>

        {/* Kokteyl/Ordövr Bölümü */}
        <div>
          <p className={`text-[9px] tracking-[0.3em] uppercase mb-3 ${menu.highlight ? "text-stone-500" : "text-stone-400"}`}>
            Karşılama
          </p>
          <ul className="flex flex-col gap-1.5">
            {menu.starters.map((item) => (
              <li key={item} className={`text-xs font-light flex items-start gap-2 ${menu.highlight ? "text-stone-300" : "text-stone-500"}`}>
                <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${menu.highlight ? "bg-stone-500" : "bg-stone-300"}`} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Başlangıç Tabağı (varsa) */}
        {"starterPlate" in menu && menu.starterPlate && (
          <div>
            <p className={`text-[9px] tracking-[0.3em] uppercase mb-3 ${menu.highlight ? "text-stone-500" : "text-stone-400"}`}>
              Başlangıç Tabağı
            </p>
            <ul className="flex flex-col gap-1.5">
              {menu.starterPlate.map((item) => (
                <li key={item} className={`text-xs font-light flex items-start gap-2 ${menu.highlight ? "text-stone-300" : "text-stone-500"}`}>
                  <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${menu.highlight ? "bg-stone-500" : "bg-stone-300"}`} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Ana Yemek */}
        <div>
          <p className={`text-[9px] tracking-[0.3em] uppercase mb-3 ${menu.highlight ? "text-stone-500" : "text-stone-400"}`}>
            {"starterPlate" in menu && menu.starterPlate ? "Ana Yemek" : "İçerik"}
          </p>
          <ul className="flex flex-col gap-1.5">
            {menu.mains.map((item) => (
              <li key={item} className={`text-xs font-light flex items-start gap-2 ${menu.highlight ? "text-stone-300" : "text-stone-500"}`}>
                <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${menu.highlight ? "bg-stone-500" : "bg-stone-300"}`} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Alt Bilgi & CTA */}
        <div className={`mt-auto pt-6 border-t ${menu.highlight ? "border-stone-700" : "border-stone-100"}`}>
          <p className={`text-[9px] tracking-[0.15em] mb-5 ${menu.highlight ? "text-stone-600" : "text-stone-400"}`}>
            {menu.note}
          </p>
        </div>

        {/* CTA */}
        <Link
          href="/iletisim"
          className={`mt-2 flex items-center justify-center py-3.5 text-[10px] tracking-[0.3em] uppercase transition-all duration-500 ${
            menu.highlight
              ? "bg-white text-stone-900 hover:bg-stone-100"
              : "border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white"
          }`}
        >
          Bu Menüyü Seç
        </Link>
      </div>
    </motion.div>
  );
}

// ─── Ana Sayfa ────────────────────────────────────────────────────────
export default function MenuPage() {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main className="bg-stone-50 min-h-screen text-stone-900 font-light">

        <PageHero
          eyebrow="Lezzet Koleksiyonu"
          title="Menülerimiz"
          subtitle="Her damak zevkine özel lezzetler"
          image={MEDIA.menuler.hero}
          tags={[
            { label: "Min. Kapasite", value: "250 Kişi" },
            { label: "Menü Sayısı", value: "6 Seçenek" },
          ]}
          sideText="Anatolıa Event — Menu"
          height="75vh"
        />

        {/* ── Giriş ── */}
        <section className="py-20 md:py-24 container mx-auto px-6 md:px-12 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] tracking-[0.4em] text-stone-400 uppercase block mb-5">Lezzet Koleksiyonu</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight text-stone-800 leading-tight mb-7">
              Her sofraya özel <br />
              <span className="italic text-stone-500">bir deneyim.</span>
            </h2>
            <p className="text-stone-400 text-sm font-light leading-relaxed max-w-xl mx-auto">
              2021&apos;den bu yana yüzlerce etkinlikte sunduğumuz özenli lezzetlerimizi sizin için derledik.
              Bütçenize ve zevkinize göre en uygun menüyü birlikte seçelim.
            </p>
          </motion.div>
        </section>

        {/* ── Menü Kartları ── */}
        <section className="pb-16 container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menus.map((menu, i) => (
              <MenuCard key={menu.id} menu={menu} index={i} />
            ))}
          </div>
        </section>

        {/* ── Micro Wedding ── */}
        <section className="py-16 container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-stone-900 text-white p-10 md:p-16 relative overflow-hidden"
          >
            {/* Dekoratif arka plan */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-stone-700/20 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

              {/* Sol: Başlık */}
              <div className="lg:w-80 flex-shrink-0">
                <span className="text-[9px] tracking-[0.45em] text-stone-500 uppercase block mb-4">Özel Paket</span>
                <h3 className="text-4xl md:text-5xl font-extralight tracking-tight text-white leading-none mb-5">
                  Micro <br /><span className="italic text-stone-400">Wedding</span>
                </h3>
                <div className="w-10 h-[1px] bg-stone-700 mb-6" />
                <p className="text-stone-400 text-sm font-light leading-relaxed">
                  Sadece en sevdiklerinizle, samimi ve özel bir atmosferde küçük ama unutulmaz bir düğün.
                </p>

                <div className="mt-8 flex flex-col gap-2">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-stone-500">Uygun Saatler</span>
                  <p className="text-stone-300 text-sm font-light">Hafta içi akşam & Haftasonu gündüz</p>
                </div>

                <Link
                  href="/iletisim"
                  className="mt-8 inline-flex items-center justify-center bg-white text-stone-900 px-8 py-3.5 text-[10px] tracking-[0.3em] uppercase hover:bg-stone-200 transition-colors duration-500"
                >
                  Rezervasyon Yap
                </Link>
              </div>

              {/* Sağ: Paket İçeriği */}
              <div className="flex-1">
                <p className="text-[9px] tracking-[0.35em] text-stone-500 uppercase mb-6">Pakete Dahil</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Kilise düzeni sandalye dizimi ile nikah seremonisi",
                    "Aile masaları",
                    "Bistro masalar",
                    "Dip soslar ile sebze buketi",
                    "Kuruyemiş ikramı",
                    "Soft içecek ikramı",
                    "DJ performansı",
                    "Maksimum 200 kişi kapasitesi",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check className="w-3.5 h-3.5 text-stone-500 flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="text-stone-300 text-xs font-light">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-stone-800 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-stone-600" />
                    <span className="text-stone-500 text-xs">Hafta içi akşam: 19:00–21:00</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-stone-600" />
                    <span className="text-stone-500 text-xs">Haftasonu gündüz: 12:00–14:00</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── Dahil Hizmetler ── */}
        <section className="py-16 container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6">

            {/* Dahil Olanlar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex-1 bg-white border border-stone-200 p-10"
            >
              <span className="text-[9px] tracking-[0.4em] text-stone-400 uppercase block mb-3">Tüm Paketlerde</span>
              <h3 className="text-2xl md:text-3xl font-extralight text-stone-800 tracking-tight mb-8">
                Dahil <span className="italic text-stone-500">Hizmetler</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {includedServices.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.04 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-5 h-5 rounded-full border border-stone-200 group-hover:border-stone-400 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300">
                      <Check className="w-2.5 h-2.5 text-stone-400 group-hover:text-stone-700 transition-colors duration-300" strokeWidth={2.5} />
                    </div>
                    <span className="text-stone-500 text-xs font-light leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* İlave Hizmetler */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.15 }}
              className="lg:w-80 flex-shrink-0 bg-stone-100 border border-stone-200 p-10 flex flex-col"
            >
              <span className="text-[9px] tracking-[0.4em] text-stone-400 uppercase block mb-3">Ekstra</span>
              <h3 className="text-2xl md:text-3xl font-extralight text-stone-800 tracking-tight mb-2">
                İlave <span className="italic text-stone-500">Hizmetler</span>
              </h3>
              <p className="text-[10px] tracking-[0.15em] text-stone-400 mb-8">Ayrıca fiyatlandırılacak</p>
              <ul className="flex flex-col gap-3 flex-1">
                {extraServices.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Plus className="w-3.5 h-3.5 text-stone-400 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-stone-500 text-xs font-light">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/iletisim"
                className="mt-8 flex items-center justify-center border border-stone-900 text-stone-900 py-3.5 text-[10px] tracking-[0.3em] uppercase hover:bg-stone-900 hover:text-white transition-all duration-500"
              >
                Detaylı Bilgi Al
              </Link>
            </motion.div>

          </div>
        </section>

        {/* ── Bilgilendirme Accordion ── */}
        <section className="pb-24 container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="border border-stone-200 bg-white overflow-hidden"
          >
            <button
              onClick={() => setInfoOpen(!infoOpen)}
              className="w-full flex items-center justify-between px-8 py-6 group"
            >
              <div className="flex items-center gap-3">
                <Info className="w-4 h-4 text-stone-400" strokeWidth={1.5} />
                <span className="text-xs tracking-[0.25em] uppercase text-stone-600 group-hover:text-stone-900 transition-colors">
                  Bilgilendirme & Ödeme Koşulları
                </span>
              </div>
              <motion.div
                animate={{ rotate: infoOpen ? 180 : 0 }}
                transition={{ duration: 0.35 }}
              >
                <ChevronDown className="w-4 h-4 text-stone-400" strokeWidth={1.5} />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {infoOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-8 border-t border-stone-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      {infoItems.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.06 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-1 h-1 rounded-full bg-stone-400 flex-shrink-0 mt-2" />
                          <span className="text-stone-500 text-xs font-light leading-relaxed">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* ── Alt CTA ── */}
        <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-stone-700/15 rounded-full blur-[100px]" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1 }}
            className="container mx-auto px-6 md:px-12 max-w-3xl text-center relative z-10"
          >
            <span className="text-[10px] tracking-[0.4em] text-stone-500 uppercase block mb-6">Hemen Başlayalım</span>
            <h2 className="text-3xl md:text-5xl font-extralight tracking-tight leading-tight mb-6">
              Menünüzü birlikte <br />
              <span className="italic text-stone-400">kişiselleştirelim.</span>
            </h2>
            <div className="w-12 h-[1px] bg-stone-700 mx-auto mb-8" />
            <p className="text-stone-500 text-sm font-light leading-relaxed mb-12 max-w-md mx-auto">
              Menü seçiminiz için detaylı bilgi almak ve size özel teklif için hemen iletişime geçin. Size özel seçenekleri bir kahve eşliğinde konuşmak için bekliyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center bg-white text-stone-900 px-10 py-4 text-[10px] tracking-[0.3em] uppercase hover:bg-stone-200 transition-colors duration-500"
              >
                İletişime Geç
              </Link>
              <Link
                href="/hizmetlerimiz"
                className="inline-flex items-center justify-center border border-white/20 text-white px-10 py-4 text-[10px] tracking-[0.3em] uppercase hover:border-white/60 transition-colors duration-500"
              >
                Hizmetlerimize Bak
              </Link>
            </div>
          </motion.div>
        </section>

      </main>
    </>
  );
}