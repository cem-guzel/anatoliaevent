"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";
import { Instagram } from "lucide-react";

export default function FloatingElements() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

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

      {/* ─── SAĞ: Instagram ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center mix-blend-difference"
      >
        <a
          href="https://instagram.com/anatoliaeventkirdugunu"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram'da takip et"
          className="group flex flex-col items-center cursor-pointer text-white/60 hover:text-white transition-colors duration-500"
        >
          <div className="w-[1px] h-10 mb-4 group-hover:h-16 bg-white/30 group-hover:bg-white transition-all duration-500 ease-out" />

          <span
            className="text-[10px] tracking-[0.4em] uppercase font-light"
            style={{ writingMode: "vertical-rl" }}
          >
            Instagram&apos;da Keşfedin
          </span>

          <div className="w-8 h-8 mt-4 rounded-full border border-white/30 group-hover:scale-110 group-hover:border-white transition-all duration-700 flex items-center justify-center">
            <Instagram className="w-3.5 h-3.5 text-white/50 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
          </div>
        </a>
      </motion.div>
    </>
  );
}