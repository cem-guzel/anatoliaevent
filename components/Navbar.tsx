"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Yeni eklendi: Sayfa yolunu bulmak için
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "Hizmetlerimiz", href: "/hizmetlerimiz" },
  { name: "Galeri", href: "/galeri" },
  { name: "İletişim", href: "/iletisim" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // Şu an bulunduğumuz sayfayı dinler

  // Sayfa aşağı kaydıkça Navbar'ın arka planını cam efektiyle doldurmak için
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menü açıldığında arkadaki sayfanın kaymasını engelle
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  // LOGOYA TIKLANMA OLAYI
  const handleLogoClick = (e: React.MouseEvent) => {
    // Eğer zaten Ana Sayfadaysak (pathname === "/")
    if (pathname === "/") {
      e.preventDefault(); // Sayfa yenilemesini engelle
      window.scrollTo({ top: 0, behavior: "smooth" }); // Yumuşakça en üste kaydır
    }
  };

  return (
    <>
      {/* --- ANA NAVBAR (Masaüstü ve Mobil Görünüm) --- */}
      <nav 
        className={`fixed w-full z-[100] transition-all duration-700 ${
          scrolled ? "bg-stone-950/80 backdrop-blur-xl py-4 shadow-2xl border-b border-white/5" : "bg-transparent py-8"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo */}
          <Link 
            href="/" 
            onClick={handleLogoClick}
            className="text-2xl md:text-3xl font-extralight tracking-[0.2em] uppercase text-white hover:opacity-70 transition-opacity cursor-pointer"
          >
            Anatolıa
          </Link>

          {/* Masaüstü Menü (Mobilde Gizli) */}
          <div className="hidden md:flex gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-xs font-light tracking-[0.2em] uppercase text-stone-300 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobil Menü Açma Butonu (Sadece Mobilde Görünür) */}
          <button 
            onClick={() => setIsOpen(true)} 
            className="md:hidden text-white hover:text-stone-300 transition-colors"
            aria-label="Menüyü Aç"
          >
            <Menu strokeWidth={1} className="w-10 h-10" />
          </button>
        </div>
      </nav>

      {/* --- MOBİL TAM EKRAN MENÜ --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%", transition: { delay: 0.4, duration: 0.5 } }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} 
            className="fixed inset-0 bg-stone-950 z-[120] flex flex-col justify-between px-6 py-8 md:hidden overflow-hidden"
          >
            {/* Üst Kısım: Logo ve Kapat Butonu */}
            <div className="flex justify-between items-center relative z-10">
              <Link 
                href="/" 
                onClick={(e) => {
                  closeMenu();
                  handleLogoClick(e);
                }} 
                className="text-2xl font-extralight tracking-[0.2em] uppercase text-white cursor-pointer"
              >
                Anatolıa
              </Link>
              <button 
                onClick={closeMenu} 
                className="text-white hover:text-stone-400 transition-colors bg-white/5 rounded-full p-2"
                aria-label="Menüyü Kapat"
              >
                <X strokeWidth={1} className="w-8 h-8" />
              </button>
            </div>

            {/* Orta Kısım: Dev Linkler */}
            <div className="flex flex-col gap-6 mt-16 relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.5, ease: "easeOut" }}
                >
                  <Link 
                    href={link.href} 
                    onClick={closeMenu} 
                    className="text-4xl sm:text-5xl font-extralight tracking-[0.1em] uppercase text-stone-200 hover:text-white transition-colors block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Arka Plana Eklenen Zarif Filigran Metin */}
            <span className="absolute top-1/2 -translate-y-1/2 -right-10 text-[10rem] font-serif font-bold text-white/[0.02] tracking-tighter select-none pointer-events-none rotate-90 origin-center">
              EVENT
            </span>

            {/* Alt Kısım: İletişim Bilgileri */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-auto pt-8 border-t border-white/10 flex flex-col gap-4 relative z-10"
            >
              <span className="text-[10px] font-semibold tracking-[0.3em] text-stone-500 uppercase mb-2">
                Bize Ulaşın
              </span>
              <a href="tel:+905333058997" className="text-stone-300 font-light text-sm tracking-wide hover:text-white transition-colors">
                +90 533 305 89 97
              </a>
              <a href="mailto:anatoliaevent@gmail.com" className="text-stone-300 font-light text-sm tracking-wide hover:text-white transition-colors">
                anatoliaevent@gmail.com
              </a>
              <div className="flex gap-6 mt-2">
                 <a href="https://www.instagram.com/anatoliaeventkirdugunu/" target="_blank" rel="noopener noreferrer" className="text-xs font-light tracking-[0.2em] uppercase text-stone-400 hover:text-white transition-colors">
                  Instagram
                 </a>
                 <a href="https://wa.me/905333058997" target="_blank" rel="noopener noreferrer" className="text-xs font-light tracking-[0.2em] uppercase text-stone-400 hover:text-white transition-colors">
                  WhatsApp
                 </a>
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}