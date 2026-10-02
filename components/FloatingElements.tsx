"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";

export default function FloatingElements() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [igHover, setIgHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);
      setIsVisible(scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    animate(window.scrollY, 0, {
      duration: 1.2,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (latest) => window.scrollTo(0, latest),
    });
  };

  // SVG daire parametreleri
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {/* ─── SOL: Yukarı Kaydır ─── */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center mix-blend-difference"
          >
            <button
              onClick={scrollToTop}
              aria-label="Yukarı kaydır"
              className="group flex flex-col items-center cursor-pointer text-white/60 hover:text-white transition-colors duration-500"
            >
              {/* Progress çemberi */}
              <div className="relative w-8 h-8 mb-4 flex items-center justify-center">
                <svg
                  className="absolute inset-0 w-full h-full -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <circle
                    cx="18" cy="18" r={radius}
                    fill="none"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="18" cy="18" r={radius}
                    fill="none"
                    stroke="rgba(255,255,255,0.9)"
                    strokeWidth="1.5"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    style={{ transition: "stroke-dashoffset 0.1s linear" }}
                  />
                </svg>
                <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition-colors duration-500 relative z-10" />
              </div>

              {/* Dikey yazı */}
              <span
                className="text-[10px] tracking-[0.4em] uppercase font-light"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                Yukarı Kaydır
              </span>

              {/* Alt çizgi */}
              <div className="w-[1px] h-10 mt-4 group-hover:h-16 bg-white/30 group-hover:bg-white transition-all duration-500 ease-out" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── SAĞ: Instagram ───
          Yazı ve çizgi "mix-blend-difference" ile her zeminde okunur kalır.
          Logo ise kendi renklerini koruyabilmesi için ayrı bir katmanda durur
          (blend modu içinde olsaydı renkleri tersine dönerdi). */}
      <motion.a
        href="https://instagram.com/anatoliaeventkirdugunu"
        target="_blank"
        rel="noreferrer"
        aria-hidden
        tabIndex={-1}
        onMouseEnter={() => setIgHover(true)}
        onMouseLeave={() => setIgHover(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="fixed right-6 bottom-[calc(50%+1.75rem)] z-50 hidden lg:flex flex-col items-center w-9 mix-blend-difference cursor-pointer"
      >
        <div
          className={`w-[1px] mb-4 transition-all duration-500 ease-out ${
            igHover ? "h-16 bg-white" : "h-10 bg-white/70"
          }`}
        />
        <span
          className={`text-[10px] tracking-[0.4em] uppercase font-normal transition-colors duration-500 ${
            igHover ? "text-white" : "text-white/90"
          }`}
          style={{ writingMode: "vertical-rl" }}
        >
          Instagram&apos;da Keşfedin
        </span>
      </motion.a>

      <motion.a
        href="https://instagram.com/anatoliaeventkirdugunu"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram'da keşfedin"
        onMouseEnter={() => setIgHover(true)}
        onMouseLeave={() => setIgHover(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex items-center justify-center w-9 h-9"
      >
        <span
          className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-700 ease-out ${
            igHover ? "scale-110 border-stone-400" : "scale-100 border-stone-400/50"
          }`}
        >
          {/* Instagram ikonu — yalnızca çizgisi kendi renk geçişinde */}
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <defs>
              <linearGradient id="ig-grad" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#feda75" />
                <stop offset="25%" stopColor="#fa7e1e" />
                <stop offset="50%" stopColor="#d62976" />
                <stop offset="75%" stopColor="#962fbf" />
                <stop offset="100%" stopColor="#4f5bd5" />
              </linearGradient>
            </defs>
            <g stroke="url(#ig-grad)">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </g>
          </svg>
        </span>
      </motion.a>
    </>
  );
}