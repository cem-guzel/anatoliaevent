"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import PageHero from "../../components/PageHero";
import { Plus, Minus, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import MEDIA from "@/lib/media";

// ─── Veri ─────────────────────────────────────────────────────────────
const categories = [
  {
    id: "mekan",
    label: "Mekan & Kapasite",
    questions: [
      {
        q: "Anatolia Event nerede bulunuyor?",
        a: "İstanbul Avrupa Yakası'nın en gözde lokasyonlarından Eyüpsultan Kemerburgaz'da yer alıyoruz. Şehrin gürültüsünden uzak, asırlık ağaçlarla çevrili bu eşsiz doğal alanda etkinliğinizi gerçekleştirebilirsiniz.",
      },
      {
        q: "Kaç kişilik etkinlikler düzenleyebiliyorsunuz?",
        a: "Alanımız 50 kişilik samimi bir aile buluşmasından 500+ kişilik büyük kır düğününe kadar her ölçekte esnek kapasite sunmaktadır. Misafir sayınıza göre en uygun düzeni birlikte belirleriz.",
      },
      {
        q: "Mekan hem açık hem kapalı mı?",
        a: "Evet. Kemerburgaz'ın doğasıyla bütünleşik açık hava alanımızın yanı sıra, özel mimari çatı sistemimiz sayesinde ani hava değişimlerine karşı korumalı bir ortam sunuyoruz. Böylece etkinliğiniz hiçbir koşulda aksamaz.",
      },
      {
        q: "Otopark imkânı var mı?",
        a: "Evet, geniş ve güvenli otopark alanımız misafirlerinizin araçları için hazırdır. Özel etkinliklerde isterseniz valet hizmeti de organizasyonunuza dahil edilebilir.",
      },
      {
        q: "Engelli misafirler için erişim kolaylığı var mı?",
        a: "Mekanımız engelli erişimine uygun olarak tasarlanmıştır. Rampalı geçişler ve özel alanlar, tüm misafirlerinizin rahat hareket etmesini sağlar.",
      },
    ],
  },
  {
    id: "dugun",
    label: "Düğün & Organizasyon",
    questions: [
      {
        q: "Düğün tarihi rezervasyonu ne zaman yapılmalı?",
        a: "Özellikle ilkbahar ve yaz sezonunda popüler tarihler çok erken dolmaktadır. Hayalinizdeki tarihi güvence altına almak için en az 6–12 ay öncesinden iletişime geçmenizi öneriyoruz. Erken rezervasyonlarda özel avantajlarımızdan yararlanabilirsiniz.",
      },
      {
        q: "Aynı gün birden fazla etkinlik oluyor mu?",
        a: "Hayır. Mekanımızda aynı anda yalnızca tek bir etkinlik gerçekleştirilir. Bu sayede tüm ekibimizin ilgisi ve enerjisi tamamen sizin için olur. O gün yalnızca sizsiniz.",
      },
      {
        q: "Kendi organizasyon firmasını ve fotoğrafçısını getirebilir miyim?",
        a: "Evet, anlaşmalı olduğunuz organizasyon firması, fotoğrafçı ve kameraman ekibinizi getirebilirsiniz. İstek üzerine güvendiğimiz tedarikçi firmalarımızı da sizinle paylaşabiliriz.",
      },
      {
        q: "Gelin ve damat için hazırlık odası var mı?",
        a: "Evet. Özel olarak düzenlenmiş, aynalı ve aydınlık gelin hazırlık odamız ve damat odamız mevcuttur. Gelinliğinizi giymekten son rötuşa kadar tüm hazırlıklarınızı konforlu bir şekilde yapabilirsiniz.",
      },
      {
        q: "Düğün saati ve bitiş saati nasıl belirleniyor?",
        a: "Etkinlik başlangıç ve bitiş saatleri sizin tercihlerinize ve yerel yönetmeliklerine göre belirlenir. Standart paketlerimiz gece 23:00'a kadar müzik ve eğlence imkânı sunmaktadır. Uzatma talepleri önceden görüşülerek değerlendirilebilir.",
      },
    ],
  },
  {
    id: "yemek",
    label: "Yemek & Menü",
    questions: [
      {
        q: "Yemek hizmetini siz mi sağlıyorsunuz?",
        a: "Evet, deneyimli mutfak ekibimiz ve güvenilir catering ortaklarımızla yemek hizmetini biz organize ediyoruz. İsterseniz kendi anlaşmalı catering firmanızı da getirebilirsiniz.",
      },
      {
        q: "Menü tadımı yapabilir miyiz?",
        a: "Kesinlikle. Düğününüzden önce menü tadım randevusu ayarlayarak yemekleri bizimle birlikte deneyimleyebilir, kişisel tercihlerinize göre menünüzü özelleştirebilirsiniz.",
      },
      {
        q: "Vejetaryen veya özel diyet menüsü sunuluyor mu?",
        a: "Evet. Vejetaryen, vegan, glütensiz veya alerjiye duyarlı menü seçeneklerimiz bulunmaktadır. Misafirlerinizin özel beslenme ihtiyaçlarını önceden bildirmeniz yeterlidir.",
      },
      {
        q: "Düğün pastası hizmetiniz var mı?",
        a: "Anlaşmalı pasta ustalarımızla konseptinize uygun özel tasarım düğün pastanızı hazırlayabiliriz. Dilerseniz kendi pastanızı dışarıdan getirmeniz de mümkündür.",
      },
    ],
  },
  {
    id: "dekor",
    label: "Dekorasyon & Konsept",
    questions: [
      {
        q: "Dekorasyon seçenekleri nelerdir?",
        a: "Rustik kır estetiğinden modern minimalist tasarıma, çiçek ağırlıklı romantik konseptlerden bohem doğa temalarına kadar geniş bir dekorasyon portföyümüz bulunmaktadır. Tercihlerinize göre tamamen kişiselleştirilmiş bir konsept hazırlarız.",
      },
      {
        q: "Taze çiçek kullanıyor musunuz?",
        a: "Evet. Masa süslemelerinden gelin masasına, giriş kapısından fotoğraf köşelerine kadar taze mevsim çiçekleri kullanıyoruz. Çiçek renkleri ve türleri tamamen size özel seçilir.",
      },
      {
        q: "Kendi dekor malzemelerimi veya temanı getirebilir miyim?",
        a: "Evet, kişisel dekor öğelerinizi ve temanıza ait materyalleri getirebilirsiniz. Ekibimiz, getirdiğiniz unsurları mekânın genel estetiğiyle uyumlu şekilde yerleştirmenize yardımcı olur.",
      },
    ],
  },
  {
    id: "genel",
    label: "Genel & Rezervasyon",
    questions: [
      {
        q: "İlk görüşme ücretli mi?",
        a: "Hayır, kesinlikle değil. İlk görüşme ve mekan turu tamamen ücretsizdir. Sizi tanımak, hayallerinizi dinlemek ve size en uygun paketi sunmak için buradayız.",
      },
      {
        q: "Fiyatlara KDV dahil mi?",
        a: "Hayır, fiyatlarımıza KDV dahil değildir. Teklif aşamasında net tutarı ve KDV'li toplamı birlikte size sunuyoruz; sürpriz bir maliyet olmaz.",
      },
      {
        q: "Nakit ödeme avantajı var mı?",
        a: "Evet! Nakit ödemelerde toplam fiyat üzerinden %5 ekstra indirim uygulanmaktadır. Ödeme yönteminizi rezervasyon görüşmesinde belirliyoruz.",
      },
      {
        q: "Kapora ne kadar ve ne zaman alınıyor?",
        a: "Sözleşme imzalanırken toplam fiyat üzerinden %50 oranında kapora alınmaktadır. Kalan tutar etkinlik öncesinde belirlenen tarihe kadar tamamlanır.",
      },
      {
        q: "Hava yağmurlu olursa ne olur?",
        a: "Açılır kapanır pergole sistemimiz sayesinde olası yağmur durumlarında mekanımız tamamen korunaklı hale gelir. Doğanın ortasında olmanın keyfini, hava koşullarından bağımsız yaşarsınız.",
      },
      {
        q: "Sözleşme sonrası değişiklik yapabilir miyim?",
        a: "Sözleşme sonrasında yapılacak tüm değişiklikler (menü, kişi sayısı vb.) güncel fiyatlar üzerinden sözleşmeye tekrar yansıtılır. Bu nedenle tüm detayları önceden birlikte netleştiriyoruz.",
      },
      {
        q: "Fotoğraf ve video çekimi dahil mi?",
        a: "Hayır, fotoğraf ve video çekimleri anlaşmalı ekibimiz tarafından gerçekleştirilmekte olup sözleşme fiyatlarına dahil değildir. Talep etmeniz halinde güvendiğimiz fotoğrafçı ekiplerini sizinle paylaşabiliriz.",
      },
    ],
  },
];

// ─── Accordion Item ───────────────────────────────────────────────────
function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      className={`border-b border-stone-200 last:border-b-0 transition-colors duration-300 ${isOpen ? "bg-white" : "bg-transparent hover:bg-stone-50"}`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-6 py-7 px-6 md:px-8 text-left group"
      >
        {/* Numara */}
        <span className="text-[10px] tracking-[0.3em] text-stone-300 mt-1 flex-shrink-0 w-6">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Soru */}
        <span className={`flex-1 text-sm md:text-base font-light tracking-wide transition-colors duration-300 ${isOpen ? "text-stone-900" : "text-stone-600 group-hover:text-stone-900"}`}>
          {question}
        </span>

        {/* İkon */}
        <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${isOpen ? "bg-stone-900 border-stone-900" : "border-stone-300 group-hover:border-stone-600"}`}>
          {isOpen
            ? <Minus className="w-3.5 h-3.5 text-white" strokeWidth={2} />
            : <Plus className="w-3.5 h-3.5 text-stone-500" strokeWidth={2} />
          }
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-7 pl-[3.5rem] md:pl-[3.5rem]">
              <p className="text-stone-500 font-light text-sm leading-relaxed tracking-wide border-l-2 border-stone-200 pl-5">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Ana Sayfa ────────────────────────────────────────────────────────
export default function SSSPage() {
  const [activeCategory, setActiveCategory] = useState("mekan");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const activeQuestions = categories.find((c) => c.id === activeCategory)?.questions || [];

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setOpenIndex(0);
  };

  return (
    <>
      <Navbar />
      <main className="bg-stone-50 min-h-screen text-stone-900 font-light">

        <PageHero
          eyebrow="Merak Ettikleriniz"
          title="S.S.S"
          subtitle="Aklınızdaki tüm soruların cevabı"
          image={MEDIA.sss.hero}
          sideText="Sıkça Sorulan Sorular"
          height="75vh"
        />

        {/* ── Giriş Metni ── */}
        <section className="py-20 md:py-28 container mx-auto px-6 md:px-12 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] tracking-[0.4em] text-stone-400 uppercase block mb-5">
              Sıkça Sorulan Sorular
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight text-stone-800 leading-tight mb-7">
              Her sorunuzun <br />
              <span className="italic text-stone-500">cevabı burada.</span>
            </h2>
            <p className="text-stone-400 text-sm font-light leading-relaxed max-w-xl mx-auto">
              Etkinliğinizi planlarken aklınıza takılan her şeyi derledik. Cevabını bulamazsanız bizi aramaktan çekinmeyin — sizi dinlemek için buradayız.
            </p>
          </motion.div>
        </section>

        {/* ── Kategori + Accordion ── */}
        <section className="pb-24 md:pb-36 container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

            {/* Sol: Sabit Kategori Menüsü */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full lg:w-72 flex-shrink-0"
            >
              <div className="lg:sticky lg:top-32 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                <span className="hidden lg:block text-[9px] tracking-[0.4em] text-stone-400 uppercase mb-4 px-4">
                  Kategoriler
                </span>
                {categories.map((cat, i) => (
                  <motion.button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className={`flex-shrink-0 text-left px-5 py-3.5 text-xs tracking-[0.2em] uppercase transition-all duration-300 border ${
                      activeCategory === cat.id
                        ? "bg-stone-900 text-white border-stone-900"
                        : "bg-white text-stone-500 border-stone-200 hover:border-stone-400 hover:text-stone-900"
                    }`}
                  >
                    {cat.label}
                  </motion.button>
                ))}

                {/* Yardım kutusu — sadece masaüstünde */}
                <div className="hidden lg:flex flex-col gap-4 mt-8 bg-stone-900 text-white p-6">
                  <span className="text-[9px] tracking-[0.35em] uppercase text-stone-400">
                    Cevabı bulamadınız mı?
                  </span>
                  <p className="text-stone-300 text-xs font-light leading-relaxed">
                    Merak ettiğiniz her şeyi sormaktan çekinmeyin.
                  </p>
                  <div className="flex flex-col gap-2 mt-2">
                    <a
                      href="tel:+905333058997"
                      className="group flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-stone-400 hover:text-white transition-colors duration-300"
                    >
                      <Phone className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={1.5} />
                      <span>Bizi Arayın</span>
                    </a>
                    <a
                      href="https://wa.me/905333058997"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-stone-400 hover:text-white transition-colors duration-300"
                    >
                      <MessageCircle className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={1.5} />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sağ: Accordion */}
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white border border-stone-200 divide-y divide-stone-100 shadow-sm"
                >
                  {activeQuestions.map((item, i) => (
                    <AccordionItem
                      key={i}
                      question={item.q}
                      answer={item.a}
                      isOpen={openIndex === i}
                      onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                      index={i}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Toplam soru sayısı */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mt-6 text-right text-[10px] tracking-[0.25em] text-stone-400 uppercase"
              >
                {activeQuestions.length} soru · {categories.find(c => c.id === activeCategory)?.label}
              </motion.p>
            </div>
          </div>
        </section>

        {/* ── Alt CTA Bölümü ── */}
        <section className="py-24 bg-stone-900 text-white overflow-hidden relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-stone-700/15 rounded-full blur-[100px]" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1 }}
            className="container mx-auto px-6 md:px-12 max-w-4xl text-center relative z-10"
          >
            <span className="text-[10px] tracking-[0.4em] text-stone-500 uppercase block mb-6">
              Hâlâ Sorunuz mu Var?
            </span>
            <h2 className="text-3xl md:text-5xl font-extralight tracking-tight leading-tight mb-6">
              Sizi bizzat ağırlamak <br />
              <span className="italic text-stone-400">isteriz.</span>
            </h2>
            <div className="w-12 h-[1px] bg-stone-700 mx-auto mb-8" />
            <p className="text-stone-500 text-sm font-light leading-relaxed mb-12 max-w-md mx-auto">
              Mekanı görmek, ekibimizle tanışmak ve tüm sorularınızı yüz yüze sormak için randevu alın. İlk görüşme tamamen ücretsizdir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="group inline-flex items-center justify-center gap-3 bg-white text-stone-900 px-10 py-4 text-[10px] tracking-[0.3em] uppercase hover:bg-stone-200 transition-colors duration-500"
              >
                İletişime Geç
              </Link>
              <a
                href="https://wa.me/905333058997"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-white/20 text-white px-10 py-4 text-[10px] tracking-[0.3em] uppercase hover:border-white/60 transition-colors duration-500"
              >
                <MessageCircle className="w-3.5 h-3.5" strokeWidth={1.5} />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </section>

      </main>
    </>
  );
}