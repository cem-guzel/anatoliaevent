"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Soner AKKUŞ",
    date: "5 ay önce",
    text: "Hayatımızın en özel gününü Anatolia Event’te gerçekleştirdik ve iyi ki de öyle yapmışız. Kır düğünü konsepti, doğallığı ve zarafetiyle hayal ettiğimizden bile daha güzeldi. Mekânın ambiyansı masalsı, organizasyon ise kusursuzdu. Özellikle işletmecisi Merve Hanım’a ayrı bir teşekkür borçluyuz. Detaylara gösterdiği özen, samimiyeti ve profesyonelliği sayesinde hiçbir şeye stres olmadan sadece anın tadını çıkardık."
  },
  {
    id: 2,
    name: "Şule Sayır",
    date: "8 ay önce",
    text: "Başta Merve Hanım ve ailesi olmak üzere tüm ekibine sonsuz teşekkür ederim 🤍 Göktürk-Kemerburgaz çevresi içerisinde nişan, kına, düğün hepsinde tek tercihim Anatolia Event oldu. Her konuda çok ilgili böylesine stresli zamanlarınızda her şeyin iyi gitmesi adına gönül rahatlığıyla tercih edebilirsiniz ✨"
  },
  {
    id: 3,
    name: "Irem Ozadak",
    date: "1 yıl önce",
    text: "Düğünümüzü Anatolia Event'te yapmayı iyi ki tercih etmişiz dedik. Her detay istediğimiz gibi oldu, Merve Hanım, ailesi ve tüm ekibi çok içten çok yardımsever. Düşünen herkese gönülden tavsiyemizdir, herkes bayıldı. İyi ki varsınız ve iyi ki sizlerle tanıştık."
  },
  {
    id: 4,
    name: "Büşra Tufan",
    date: "3 yıl önce",
    text: "Hayalimdeki o düğünü gerçekleştiren, her detayında ayrı emeği olan Merve Hanım'a minnet borçluyum! Sabırla, içtenlikle tüm isteklerimi dinleyip güzel bir önizleme çalışması yaptı ve işini bu kadar severek yapması beni daha çok heyecanlandırdı 😍 İyi ki Anatolia Event'de yaptım düğünümü."
  },
  {
    id: 5,
    name: "Yunus Demircioğlu",
    date: "3 ay önce",
    text: "Eşim ve ben bir aile oluşumuza tanıklık eden ve bunu organize eden tüm ekibe çok teşekkür ederiz. En başından sonuna kadar memnun kalmadığımız hiçbir şey olmadı. Teşekkür ediyoruz."
  },
  {
    id: 6,
    name: "Özlem Can",
    date: "2 yıl önce",
    text: "Kına gecemi burada yaptım. Her şey tam istediğim gibiydi hatta istediğimden daha da güzeldi. Merve hanım her konuda çok yardımcı oldu dünya tatlısı birisi gerçekten. Kına boyunca her zaman yanımda olup her türlü süreci mükemmel bir şekilde yönetti."
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextReview = useCallback(() => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  }, []);

  const prevReview = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(nextReview, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextReview]);

  return (
    <section 
      className="py-24 md:py-32 bg-stone-900 text-stone-50 overflow-hidden relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-stone-800/30 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-16 md:mb-24">
          <span className="text-xs font-light tracking-[0.3em] text-stone-400 uppercase mb-4 block">Gerçek Hikayeler</span>
          <h2 className="text-3xl md:text-5xl font-light tracking-[0.05em] text-white">
            Misafirlerimizin Gözünden
          </h2>
        </div>

        {/* YENİ: Kutuya sabit bir yükseklik verildi (min-h-[400px] mobilde, md:min-h-[300px] masaüstünde). Böylece zıplama olmaz. */}
        <div className="relative max-w-4xl mx-auto flex items-center justify-center min-h-[400px] md:min-h-[300px]">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-center px-4 md:px-16 absolute inset-0 flex flex-col justify-center"
            >
              <Quote className="w-12 h-12 md:w-16 md:h-16 mx-auto text-stone-700 mb-6 opacity-50 transform rotate-180" />
              
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500/80 text-yellow-500/80" />
                ))}
              </div>

              <p className="text-lg md:text-2xl font-light leading-relaxed tracking-wide text-stone-200 mb-8 italic">
                &ldquo;{reviews[currentIndex].text}&rdquo;
              </p>

              <div className="flex flex-col items-center gap-2 mt-auto">
                <span className="text-sm md:text-base font-medium tracking-widest uppercase text-white">
                  {reviews[currentIndex].name}
                </span>
                <span className="text-xs font-light tracking-[0.2em] uppercase text-stone-500">
                  {reviews[currentIndex].date}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          <button 
            onClick={prevReview}
            className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 p-3 text-stone-500 hover:text-white transition-colors z-20"
            aria-label="Önceki Yorum"
          >
            <ChevronLeft strokeWidth={1} className="w-10 h-10 md:w-14 md:h-14" />
          </button>
          
          <button 
            onClick={nextReview}
            className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 p-3 text-stone-500 hover:text-white transition-colors z-20"
            aria-label="Sonraki Yorum"
          >
            <ChevronRight strokeWidth={1} className="w-10 h-10 md:w-14 md:h-14" />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-16 relative z-20">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1 rounded-full transition-all duration-500 ${
                currentIndex === idx ? "w-8 bg-white" : "w-2 bg-stone-700 hover:bg-stone-500"
              }`}
              aria-label={`${idx + 1}. yoruma git`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}