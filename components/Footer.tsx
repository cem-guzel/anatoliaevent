"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-50 bg-white text-stone-500 py-16 md:py-24 border-t border-stone-200">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          
          {/* 1. Sütun: Marka */}
          <div className="flex flex-col">
            <h4 className="text-2xl font-extralight tracking-[0.2em] text-stone-900 uppercase mb-6">
              Anatolıa Event
            </h4>
            <p className="text-sm font-light tracking-wide leading-relaxed max-w-xs">
              Doğanın kalbinde, lüks ve zarafetin buluştuğu noktada kusursuz başlangıçlar.
            </p>
          </div>

          {/* 2. Sütun: Hızlı Bağlantılar */}
          <div className="flex flex-col md:items-center">
            <div>
              <h5 className="text-xs font-semibold tracking-[0.2em] text-stone-900 uppercase mb-6">Keşfet</h5>
              <ul className="flex flex-col gap-4 text-sm font-light tracking-widest uppercase">
                <li><Link href="/#hakkimizda" className="hover:text-stone-900 transition-colors duration-300">Hakkımızda</Link></li>
                <li><Link href="/hizmetlerimiz" className="hover:text-stone-900 transition-colors duration-300">Hizmetlerimiz</Link></li>
                <li><Link href="/galeri" className="hover:text-stone-900 transition-colors duration-300">Galeri</Link></li>
              </ul>
            </div>
          </div>

          {/* 3. Sütun: İletişim */}
          <div className="flex flex-col md:items-end">
            <div>
              <h5 className="text-xs font-semibold tracking-[0.2em] text-stone-900 uppercase mb-6">İletişim</h5>
              <ul className="flex flex-col gap-4 text-sm font-light tracking-wide">
                <li>
                  <a href="tel:+905333058997" className="hover:text-stone-900 transition-colors duration-300 cursor-pointer">
                    0533 305 89 97
                  </a>
                </li>
                <li>
                  <a href="mailto:anatoliaevent@gmail.com" className="hover:text-stone-900 transition-colors duration-300 cursor-pointer">
                    anatoliaevent@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://maps.app.goo.gl/YourGoogleMapsLinkHere" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors duration-300 cursor-pointer">
                    Mithatpaşa, Kumsu Sk. No:55<br/>34075 Eyüpsultan/İstanbul
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Alt Çizgi ve Telif Hakkı (BURASI GÜNCELLENDİ) */}
        <div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row items-center justify-between text-xs font-light tracking-widest uppercase">
          <p>© {new Date().getFullYear()} Anatolıa Event. Tüm Hakları Saklıdır.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="https://www.instagram.com/anatoliaeventkirdugunu/" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors duration-300 cursor-pointer">
              Instagram
            </a>
            <a href="https://wa.me/905333058997" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors duration-300 cursor-pointer">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}