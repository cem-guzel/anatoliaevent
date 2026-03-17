"use client";

import { useRef } from "react";
import PageHero from "../../components/PageHero";
import MEDIA from "@/lib/media";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, MessageCircle, ExternalLink, Clock, CheckCircle } from "lucide-react";
import Navbar from "../../components/Navbar";

// ─── İletişim Kartı ───────────────────────────────────────────────────
function ContactCard({
  href,
  icon: Icon,
  label,
  value,
  external = false,
  delay = 0,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
  value: string;
  external?: boolean;
  delay?: number;
}) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      // Mobilde daha belirgin bir içe çökme (buton basılma) hissi
      whileTap={{ scale: 0.92 }} 
      // active: sınıfları mobilde dokunulduğu an siyah arka plana geçmesini sağlar
      className="group bg-white border border-stone-100 p-10 flex flex-col items-center justify-center text-center hover:bg-stone-900 hover:border-stone-900 active:bg-stone-900 active:border-stone-900 transition-all duration-300 cursor-pointer"
    >
      <div className="w-12 h-12 rounded-full border border-stone-200 group-hover:border-white/20 group-active:border-white/20 flex items-center justify-center mb-6 transition-colors duration-300">
        <Icon strokeWidth={1.5} className="w-5 h-5 text-stone-400 group-hover:text-white group-active:text-white transition-colors duration-300" />
      </div>
      <span className="text-[9px] tracking-[0.35em] text-stone-400 group-hover:text-white/50 group-active:text-white/50 uppercase mb-3 transition-colors duration-300">
        {label}
      </span>
      <span className="text-base md:text-lg font-light tracking-wide text-stone-800 group-hover:text-white group-active:text-white transition-colors duration-300 leading-snug">
        {value}
      </span>
    </motion.a>
  );
}

// ─── Güven Rozeti ─────────────────────────────────────────────────────
const trustItems = [
  { icon: CheckCircle, text: "Tanışma ve Mekan Turu" },
  { icon: CheckCircle, text: "Kişiye Özel Teklif" },
  { icon: CheckCircle, text: "4 Mevsim Açık" },
  { icon: CheckCircle, text: "200+ Mutlu Çift" },
];

// ─── Ana Sayfa ────────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-stone-50 min-h-screen text-stone-900 font-light selection:bg-stone-900 selection:text-white">

        <PageHero
          eyebrow="Bağlantı Kurun"
          title="İletişim"
          subtitle="Hayalinizdeki günü birlikte planlayalım"
          image={MEDIA.iletisim.hero}
          tags={[
            { label: "Telefon", value: "0533 305 89 97" },
            { label: "Konum", value: "Kemerburgaz" },
          ]}
          sideText="Anatolıa Event — Contact"
          height="75vh"
        />

        <div className="container mx-auto px-6 md:px-12 py-20 md:py-32">
          <div className="max-w-5xl mx-auto flex flex-col gap-24">

            {/* ── 1. EDİTORYAL BAŞLIK ── */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex flex-col md:flex-row gap-10 md:gap-20 items-end"
            >
              <div className="flex-1">
                <span className="text-[10px] tracking-[0.4em] text-stone-400 uppercase block mb-5">
                  Haydi Başlayalım
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-[56px] font-extralight tracking-tight text-stone-800 leading-[1.05]">
                  Hikayenizi <br />
                  <span className="italic text-stone-500">birlikte yazalım.</span>
                </h2>
              </div>
              <div className="flex-1 md:pb-2">
                <p className="text-stone-400 font-light text-sm leading-relaxed tracking-wide border-l border-stone-200 pl-6">
                  Hayalinizdeki etkinliği planlamak, detayları konuşmak ve Anatolıa Event&apos;in benzersiz atmosferini yakından hissetmek için bize ulaşın. Sizi mekanımızda ağırlamaktan ve hikayenizi dinlemekten mutluluk duyarız.
                </p>
              </div>
            </motion.div>

            {/* ── 2. İLETİŞİM KARTLARI ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-100 border border-stone-100 overflow-hidden shadow-sm">
              <ContactCard
                href="tel:+905333058997"
                icon={Phone}
                label="Telefon"
                value="0533 305 89 97"
                delay={0}
              />
              <ContactCard
                href="https://wa.me/905333058997"
                icon={MessageCircle}
                label="WhatsApp"
                value="Hızlı Mesaj Gönder"
                external
                delay={0.08}
              />
              <ContactCard
                href="https://www.instagram.com/anatoliaeventkirdugunu/"
                icon={Instagram}
                label="Instagram"
                value="@anatoliaeventkirdugunu"
                external
                delay={0.16}
              />
              <ContactCard
                href="mailto:anatoliaevent@gmail.com"
                icon={Mail}
                label="E-Posta"
                value="anatoliaevent@gmail.com"
                delay={0.24}
              />
            </div>

            {/* ── 3. GÜVEN ŞERİDİ ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-200 border border-stone-200 overflow-hidden"
            >
              {trustItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="bg-white px-6 py-7 flex items-center gap-3"
                  >
                    <Icon className="w-4 h-4 text-stone-400 flex-shrink-0" strokeWidth={1.5} />
                    <span className="text-[10px] tracking-[0.2em] text-stone-600 uppercase">{item.text}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* ── 4. ADRES + SAAT + HARİTA ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex flex-col lg:flex-row gap-0 border border-stone-200 overflow-hidden shadow-sm"
            >
              {/* Sol: Adres & Saat */}
              <div className="w-full lg:w-[35%] bg-stone-900 text-white p-10 md:p-12 flex flex-col gap-10">

                {/* Adres */}
                <div>
                  <span className="text-[9px] tracking-[0.4em] text-stone-500 uppercase block mb-4">Adres</span>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-stone-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <p className="text-stone-300 font-light text-sm leading-relaxed">
                      Mithatpaşa, Kumsu Sk. No:55<br />
                      34075 Eyüpsultan / İstanbul
                    </p>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/ARbPTrvs53ywHQUQ6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 mt-5 text-[9px] tracking-[0.3em] uppercase text-stone-500 hover:text-white transition-colors duration-300"
                  >
                    <span className="border-b border-stone-700 group-hover:border-white pb-0.5 transition-colors duration-300">
                      Yol Tarifi Al
                    </span>
                    <ExternalLink className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform duration-300" />
                  </a>
                </div>

                <div className="w-full h-[1px] bg-stone-800" />

                {/* Çalışma Saatleri */}
                <div>
                  <span className="text-[9px] tracking-[0.4em] text-stone-500 uppercase block mb-4">Çalışma Saatleri</span>
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-stone-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <div className="flex flex-col gap-2">
                      {[
                        { days: "Pazartesi – Cuma", hours: "09:00 – 19:00" },
                        { days: "Cumartesi", hours: "10:00 – 17:00" },
                        { days: "Pazar", hours: "Randevuya Göre" },
                      ].map((row) => (
                        <div key={row.days} className="flex justify-between gap-6">
                          <span className="text-stone-400 text-xs font-light">{row.days}</span>
                          <span className="text-stone-300 text-xs font-light flex-shrink-0">{row.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-stone-800" />

                {/* Sosyal */}
                <div>
                  <span className="text-[9px] tracking-[0.4em] text-stone-500 uppercase block mb-4">Sosyal Medya</span>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/anatoliaeventkirdugunu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full border border-stone-700 hover:border-white flex items-center justify-center text-stone-500 hover:text-white transition-all duration-300"
                    >
                      <Instagram className="w-4 h-4" strokeWidth={1.5} />
                    </a>
                    <a
                      href="https://wa.me/905333058997"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full border border-stone-700 hover:border-white flex items-center justify-center text-stone-500 hover:text-white transition-all duration-300"
                    >
                      <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Sağ: Harita */}
              <div className="w-full lg:w-[65%] h-64 md:h-80 lg:h-auto relative group overflow-hidden min-h-[320px]">
                <iframe
                  src="https://maps.google.com/maps?q=Anatolia+Event,+Mithatpa%C5%9Fa,+Kumsu+Sk.+no:55,+34075+Ey%C3%BCpsultan/%C4%B0stanbul&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-1000"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Anatolıa Event Konum"
                />
                <div className="absolute inset-0 pointer-events-none border border-stone-200" />
              </div>
            </motion.div>

          </div>
        </div>

      </main>
    </>
  );
}
