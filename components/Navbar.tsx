"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "Hizmetlerimiz", href: "/hizmetlerimiz" },
  { name: "Menülerimiz", href: "/menuler" },
  { name: "Galeri", href: "/galeri" },
  { name: "S.S.S", href: "/sss" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* ─── ANA NAVBAR ─── */}
      <nav
        className={`fixed w-full z-[100] transition-all duration-700 ${
          scrolled
            ? "bg-stone-950/85 backdrop-blur-xl py-4 shadow-2xl border-b border-white/5"
            : "bg-transparent py-7"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">

          {/* Logo */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className="flex flex-col leading-none group cursor-pointer"
          >
            <span className="text-xl md:text-2xl font-extralight tracking-[0.25em] uppercase text-white group-hover:opacity-70 transition-opacity duration-500">
              Anatolıa
            </span>
            <span className="text-[8px] tracking-[0.45em] text-white/40 uppercase group-hover:text-white/60 transition-colors duration-500 mt-0.5 ml-0.5">
              Event
            </span>
          </Link>

          {/* Masaüstü Menü */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-[10px] font-light tracking-[0.25em] uppercase transition-colors duration-300 pb-1 group ${
                  isActive(link.href)
                    ? "text-white"
                    : "text-stone-400 hover:text-white"
                }`}
              >
                {link.name}
                {/* Aktif sayfa alt çizgisi */}
                <span
                  className={`absolute bottom-0 left-0 h-[1px] bg-white transition-all duration-500 ${
                    isActive(link.href)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}

            {/* Masaüstü CTA Butonu */}
            <Link
              href="/iletisim"
              className={`ml-2 px-6 py-2.5 text-[10px] tracking-[0.25em] uppercase border transition-all duration-500 ${
                isActive("/iletisim")
                  ? "bg-white text-stone-900 border-white"
                  : "border-white/30 text-white hover:bg-white hover:text-stone-900"
              }`}
            >
              İletişim
            </Link>
          </div>

          {/* Mobil Sağ Taraf: Telefon + Hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="tel:+905333058997"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/50 transition-all duration-300"
              aria-label="Ara"
            >
              <Phone className="w-3.5 h-3.5" strokeWidth={1.5} />
            </a>
            <button
              onClick={() => setIsOpen(true)}
              className="text-white hover:text-stone-300 transition-colors"
              aria-label="Menüyü Aç"
            >
              <Menu strokeWidth={1} className="w-9 h-9" />
            </button>
          </div>
        </div>
      </nav>

      {/* ─── MOBİL TAM EKRAN MENÜ ─── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{
              opacity: 0,
              clipPath: "inset(0 0 100% 0)",
              transition: { delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-stone-950 z-[120] flex flex-col md:hidden"
          >
            {/* Üst: Logo + Kapat (Burası sabit kalacak) */}
            <div className="flex justify-between items-center relative z-10 px-6 pt-8 pb-4 shrink-0">
              <Link
                href="/"
                onClick={(e) => { closeMenu(); handleLogoClick(e); }}
                className="flex flex-col leading-none"
              >
                <span className="text-xl font-extralight tracking-[0.25em] uppercase text-white">
                  Anatolıa
                </span>
                <span className="text-[8px] tracking-[0.45em] text-white/40 uppercase mt-0.5 ml-0.5">
                  Event
                </span>
              </Link>
              <button
                onClick={closeMenu}
                className="text-white hover:text-stone-400 transition-colors bg-white/5 rounded-full p-2"
                aria-label="Menüyü Kapat"
              >
                <X strokeWidth={1} className="w-7 h-7" />
              </button>
            </div>

            {/* Orta ve Alt Alan: Kaydırılabilir (Scrollable) Kapsayıcı */}
            <div className="flex-1 overflow-y-auto px-6 pb-8 flex flex-col relative">
              
              {/* Filigran */}
              <span className="absolute top-1/2 -translate-y-1/2 -right-10 text-[10rem] font-serif font-bold text-white/[0.02] tracking-tighter select-none pointer-events-none rotate-90 origin-center z-0">
                EVENT
              </span>

              {/* Orta: Büyük Linkler */}
              <div className="flex flex-col gap-2 mt-4 relative z-10">
                {[...navLinks, { name: "İletişim", href: "/iletisim" }].map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ delay: i * 0.08 + 0.2, duration: 0.5, ease: "easeOut" }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={`flex items-center gap-4 py-4 border-b border-white/5 group transition-colors duration-300 ${
                        isActive(link.href) ? "text-white" : "text-stone-400 hover:text-white"
                      }`}
                    >
                      {/* Aktif göstergesi */}
                      <span
                        className={`w-1 h-1 rounded-full transition-all duration-300 ${
                          isActive(link.href)
                            ? "bg-white scale-100"
                            : "bg-transparent group-hover:bg-white/50 scale-0 group-hover:scale-100"
                        }`}
                      />
                      <span className="text-3xl sm:text-4xl font-extralight tracking-[0.08em] uppercase">
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Alt: İletişim (mt-auto ile içeriğin en altına itilir) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-auto pt-8 border-t border-white/10 relative z-10"
              >
                <span className="text-[9px] font-semibold tracking-[0.35em] text-stone-500 uppercase block mb-4">
                  Bize Ulaşın
                </span>
                <div className="flex flex-col gap-2 mb-5">
                  <a
                    href="tel:+905333058997"
                    className="text-stone-300 font-light text-sm tracking-wide hover:text-white transition-colors"
                  >
                    +90 533 305 89 97
                  </a>
                  <a
                    href="mailto:anatoliaevent@gmail.com"
                    className="text-stone-300 font-light text-sm tracking-wide hover:text-white transition-colors"
                  >
                    anatoliaevent@gmail.com
                  </a>
                </div>
                <div className="flex gap-6">
                  <a
                    href="https://www.instagram.com/anatoliaeventkirdugunu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-light tracking-[0.25em] uppercase text-stone-500 hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://wa.me/905333058997"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-light tracking-[0.25em] uppercase text-stone-500 hover:text-white transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
