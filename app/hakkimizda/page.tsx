"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Cta from "../../components/Cta";
import PageHero from "../../components/PageHero";
import { Umbrella, Wind, Flower2, Users, ChevronRight } from "lucide-react";
import Link from "next/link";
import MEDIA from "@/lib/media";

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800, step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [isInView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const features = [
  { icon: Umbrella, title: "Özel Mimari Çatı", desc: "Yağmur, rüzgar ya da güneş — açılır kapanır pergole sistemimizle hava asla bir engel değil. Dört mevsim güvencesi.", tag: "4 Mevsim Güvencesi" },
  { icon: Wind, title: "Açık Hava Ferahlığı", desc: "Asırlık ağaçların gölgesi, taze hava ve yeşilin sonsuz tonları. Kapalı salon havasını unutun — burada nefes alıyorsunuz.", tag: "Doğayla İç İçe" },
  { icon: Flower2, title: "Taze Çiçek & Dekor", desc: "Her etkinlik için taze çiçekler, özenle seçilmiş masa düzenleri ve konseptinize uygun dekorasyon. Tasarım tamamen size özel.", tag: "Kişiye Özel Tasarım" },
  { icon: Users, title: "Geniş Kapasite", desc: "1.300 kişilik açık alanımız ve 350 kişilik kapalı mekanımızla her ölçekte etkinliğe uygun konfigürasyon sunuyoruz.", tag: "1.300 + 350 Kişi" },
];

const steps = [
  { num: "01", title: "İlk Görüşme", desc: "Bizi arayın veya formu doldurun. Ekibimiz sizi tanıyalım diye kişisel bir görüşme ayarlıyor." },
  { num: "02", title: "Mekan Turu", desc: "Mekanı canlı görün, alan konfigürasyonlarını keşfedin, sorularınızın hepsini sorun." },
  { num: "03", title: "Konsept & Teklif", desc: "Hayalinizdeki günü birlikte kağıda dökün. Size özel bir konsept ve net bir teklif hazırlıyoruz." },
  { num: "04", title: "Günün Tadını Çıkarın", desc: "Geri kalanı bize bırakın. Siz sadece o anı yaşayın — her detay emin ellerde." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-stone-50 min-h-screen text-stone-900 font-light overflow-x-hidden">

        <PageHero
          eyebrow="Kemerburgaz · İstanbul"
          title="Hakkımızda"
          subtitle="Doğanın zarafetiyle buluşan bir hikaye"
          image={MEDIA.hakkimizda.hero}
          tags={[
            { label: "Kuruluş", value: "2021" },
            { label: "Kapasite", value: "1.300 Kişi" },
          ]}
          sideText="Anatolıa Event — Since 2021"
        />

        {/* Manifesto */}
        <section className="py-28 md:py-44 container mx-auto px-6 md:px-12 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1.2 }} className="text-center">
            <div className="text-6xl text-stone-200 font-serif leading-none mb-6 select-none">&ldquo;</div>
            <p className="text-xl md:text-3xl lg:text-4xl font-extralight leading-relaxed md:leading-snug tracking-wide text-stone-700">
              Sıradan bir mekan değil; hayatınızın en değerli anlarına{" "}
              <span className="italic text-stone-500">ev sahipliği yapacak</span>{" "}
              kusursuz bir sahne tasarlamak istedik. Ağaçların gölgesinde, lüks ve doğallığın o ince çizgisinde yürüyoruz.
            </p>
            <div className="w-px h-20 bg-stone-300 mx-auto mt-16" />
          </motion.div>
        </section>

        {/* Hikaye + Görsel */}
        <section className="py-16 md:py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-28 items-center">
              <div className="w-full lg:w-[48%] relative h-[420px] md:h-[600px] flex-shrink-0">
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="absolute top-0 left-0 w-[72%] h-[75%] overflow-hidden shadow-2xl rounded-tr-[80px]">
                  <img src={MEDIA.hakkimizda.story1} alt="Anatolıa Event Bahçe" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-[4s]" />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.25 }} className="absolute bottom-0 right-0 w-[55%] h-[50%] overflow-hidden shadow-2xl border-4 border-white rounded-bl-[60px]">
                  <img src={MEDIA.hakkimizda.story2} alt="Düğün Detay" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-[4s]" />
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5, type: "spring" }} className="absolute bottom-[46%] left-[58%] z-20 bg-stone-900 text-white px-5 py-3 shadow-xl">
                  <div className="text-[9px] tracking-[0.3em] uppercase text-stone-400 mb-1">Kuruluş</div>
                  <div className="text-xl font-extralight tracking-wider">2021</div>
                </motion.div>
              </div>

              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1.1 }} className="w-full lg:w-[52%] flex flex-col">
                <span className="text-[10px] tracking-[0.35em] text-stone-400 uppercase mb-5 block border-b border-stone-100 pb-4 inline-block pr-10">Biz Kimiz?</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight text-stone-800 leading-[1.1] mb-8">
                  Detaylardaki <br /><span className="italic text-stone-500">imza dokunuşlar.</span>
                </h2>
                <div className="space-y-5 text-stone-500 font-light leading-relaxed text-sm md:text-base tracking-wide mb-10">
                  <p>
                    <span className="font-medium text-stone-800">Anatolia Event;</span> İstanbul Avrupa Yakası&apos;nın en gözde lokasyonlarından Eyüpsultan Kemerburgaz&apos;da, 2021&apos;den bu yana her türlü etkinliğe uygun bir ortam sunmaktadır. 1.300 kişilik geniş açık alanımız ve 350 kişilik şık kapalı mekanımızla her ölçekte organizasyon için hazırız.
                  </p>
                  <p className="border-l-2 border-stone-200 pl-5 text-stone-600">
                    Olası yağmur durumları için açılır kapanır pergole sistemimiz ile hava koşulları hiçbir zaman bir engel değildir. Alanımızın etrafı ağaçlarla kaplı olduğundan misafirlerinizi sadece size özel bu alanda şehrin karmaşasından uzak bir noktada ağırlayabilirsiniz.
                  </p>
                  <p>
                    Söz, nişan ve kurumsal organizasyonlarınızda; masalardaki taze çiçeklerin kokusundan geceye eşlik eden müziğin frekansına kadar hiçbir detayı şansa bırakmıyoruz.
                  </p>
                </div>
                <Link href="/iletisim" className="group inline-flex items-center gap-4 text-[10px] tracking-[0.3em] text-stone-800 uppercase hover:text-stone-500 transition-colors duration-300 pb-2 border-b border-stone-800 hover:border-stone-500 w-fit">
                  <span>Bizimle Tanışın</span>
                  <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2} />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* İstatistikler */}
        <section className="py-20 bg-stone-900 text-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-800 text-center">
              {[
                { target: 200, suffix: "+", label: "Başarılı Etkinlik" },
                { target: 1300, suffix: "", label: "Açık Alan Kapasitesi" },
                { target: 350, suffix: "", label: "Kapalı Alan Kapasitesi" },
                { target: 4, suffix: "", label: "İmza Konsept" },
              ].map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }} className="py-10 px-4 flex flex-col items-center">
                  <div className="text-4xl md:text-5xl font-extralight mb-3 tabular-nums">
                    <AnimatedNumber target={stat.target} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] tracking-[0.3em] text-stone-500 uppercase">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mekan Özellikleri */}
        <section className="py-28 md:py-36 bg-[#fcfbf9]">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
                <span className="text-[10px] tracking-[0.35em] text-stone-400 uppercase mb-4 block">Mekânımız</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-stone-800 leading-tight">
                  Her Detay <br /><span className="italic text-stone-500">Düşünüldü.</span>
                </h2>
              </motion.div>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }} className="hidden md:block max-w-xs text-stone-400 text-sm font-light leading-relaxed text-right">
                Kemerburgaz&apos;ın kalbinde, doğayla tasarımın buluştuğu eşsiz bir mekan.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, delay: i * 0.1 }} className="group flex gap-6 p-8 bg-white border border-stone-100 hover:border-stone-300 hover:shadow-lg transition-all duration-500">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-stone-200 group-hover:border-stone-500 flex items-center justify-center transition-all duration-500 mt-1">
                      <Icon className="w-5 h-5 text-stone-400 group-hover:text-stone-700 transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-[9px] tracking-[0.3em] text-stone-400 uppercase">{f.tag}</span>
                      <h3 className="text-lg font-light text-stone-800 tracking-wide">{f.title}</h3>
                      <div className="w-8 h-[1px] bg-stone-200 group-hover:w-14 group-hover:bg-stone-400 transition-all duration-500" />
                      <p className="text-stone-500 text-sm font-light leading-relaxed mt-1">{f.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Ekip Bölümü */}
        <section className="py-28 md:py-36 bg-white overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-28 items-center">
              <div className="w-full lg:w-[42%] relative h-[420px] md:h-[580px] flex-shrink-0">
                <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="w-full h-full overflow-hidden rounded-bl-[100px] shadow-2xl">
                  <img src={MEDIA.hakkimizda.team} alt="Anatolıa Event Ekibi" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-[4s]" />
                  <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                    <div className="bg-white/95 backdrop-blur-sm px-7 py-4 shadow-xl flex flex-col items-center">
                      <span className="text-stone-800 text-sm font-light tracking-[0.2em] uppercase">Anatolıa Event</span>
                      <span className="text-[9px] tracking-[0.3em] text-stone-400 uppercase mt-1">Kurucu & Organizasyon Ekibi</span>
                    </div>
                  </div>
                </motion.div>
              </div>
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1.1 }} className="w-full lg:w-[58%] flex flex-col">
                <span className="text-[10px] tracking-[0.35em] text-stone-400 uppercase mb-5 block border-b border-stone-100 pb-4 inline-block pr-10">Ekibimiz</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight text-stone-800 leading-[1.1] mb-8">
                  Arkasında bir <br /><span className="italic text-stone-500">yürek var.</span>
                </h2>
                <div className="space-y-5 text-stone-500 font-light leading-relaxed text-sm md:text-base tracking-wide mb-8">
                  <p>Anatolia Event ekibi, etkinlik organizasyonuna olan tutkusunu on yılı aşkın süredir her çiftin gözlerindeki ışıkta yaşatıyor.</p>
                  <p>&ldquo;Her düğün bizim için ayrı bir sorumluluk. O gün sadece bir etkinlik değil; iki insanın birlikte yazacağı en güzel cümlenin ilk harfi.&rdquo;</p>
                  <p>İlk görüşmeden son dansa kadar her detayı bizzat takip eden, tüm istekleri içselleştiren ve misafirlerini aile sıcaklığıyla ağırlayan ekibimiz; yüzlerce çiftin &ldquo;İyi ki sizinle tanıştık&rdquo; dediği isimdir.</p>
                </div>
                {/* Gerçek müşteri yorumundan alıntı — isim burada kalıyor */}
                <div className="bg-stone-50 border-l-2 border-stone-300 px-6 py-5 mb-8">
                  <p className="text-stone-600 text-sm font-light italic leading-relaxed mb-3">
                    &ldquo;Tüm ekibin sabırla, içtenlikle tüm isteklerimizi dinleyip güzel bir önizleme çalışması yaptığını görünce heyecanım ikiye katlandı.&rdquo;
                  </p>
                  <span className="text-[9px] tracking-[0.3em] text-stone-400 uppercase">— Büşra Tufan, Gelin</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Süreç */}
        <section className="py-28 md:py-36 bg-stone-900 text-white overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
                <span className="text-[10px] tracking-[0.35em] text-stone-400 uppercase mb-4 block">Süreç</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight leading-tight">
                  Nasıl <br /><span className="italic text-stone-400">Çalışıyoruz?</span>
                </h2>
              </motion.div>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }} className="hidden md:block max-w-xs text-stone-500 text-sm font-light leading-relaxed text-right">
                Dört adımda hayalinizdeki güne giden yolculuk.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-800">
              {steps.map((step, i) => (
                <motion.div key={step.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, delay: i * 0.12 }} className="bg-stone-900 p-10 flex flex-col gap-5 group hover:bg-stone-800/80 transition-colors duration-500">
                  <span className="text-4xl font-extralight text-stone-700 group-hover:text-stone-400 transition-colors duration-500">{step.num}</span>
                  <div className="w-8 h-[1px] bg-stone-700 group-hover:w-16 group-hover:bg-stone-400 transition-all duration-500" />
                  <h3 className="text-base font-light tracking-widest uppercase text-white">{step.title}</h3>
                  <p className="text-stone-500 text-sm font-light leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-px bg-stone-800 px-10 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-stone-400 text-sm font-light tracking-wide">İlk görüşme tamamen ücretsiz. Hemen başlayalım.</p>
              <Link href="/iletisim" className="group flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-white border border-white/20 hover:border-white px-8 py-3 transition-colors duration-500">
                <span>Randevu Al</span>
                <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Görsel Bant */}
        <section className="py-20 bg-[#fcfbf9] overflow-hidden">
          <div className="container mx-auto px-6 md:px-12 mb-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="flex items-center justify-between">
              <div>
                <span className="text-[10px] tracking-[0.35em] text-stone-400 uppercase mb-3 block">Mekan</span>
                <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 tracking-tight">Bir Bakışta <span className="italic text-stone-500">Anatolia.</span></h2>
              </div>
              <Link href="/galeri" className="hidden md:flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-stone-500 hover:text-stone-900 pb-1 border-b border-stone-300 hover:border-stone-900 transition-colors duration-300">
                Tüm Galeri <ChevronRight className="w-3.5 h-3.5" strokeWidth={2} />
              </Link>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="flex gap-4 overflow-x-auto px-6 md:px-12 pb-4" style={{ scrollbarWidth: "none" }}>
            {MEDIA.hakkimizda.galeriSerit.map((src, i) => (
              <div key={i} className="flex-shrink-0 w-64 md:w-80 h-56 md:h-72 overflow-hidden group relative">
                <img src={src} alt={`Anatolıa Event ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s] ease-out" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500" />
              </div>
            ))}
          </motion.div>
        </section>

        <Cta />
      </main>
    </>
  );
}