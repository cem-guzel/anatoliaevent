"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2, Loader2 } from "lucide-react";
import Navbar from "../../components/Navbar"; 
import Cta from "../../components/Cta"; 

type GalleryImage = {
  id: string;
  publicId: string;
  url: string;
  altText: string | null;
  createdAt: string;
};

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(9);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/gallery");
        const data = await res.json();
        setImages(data);
      } catch (error) {
        console.error("Fotoğraflar yüklenemedi:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, []);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const showNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev! + 1));
    }
  }, [lightboxIndex, images.length]);

  const showPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev! - 1));
    }
  }, [lightboxIndex, images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, showNext, showPrev]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, images.length));
  };

  return (
    <>
      <Navbar />
      <main className="bg-stone-50 min-h-screen font-light text-stone-900">
        
        {/* --- HERO BÖLÜMÜ --- */}
        <div className="relative h-[70vh] md:h-[80vh] w-full flex flex-col items-center justify-center text-center px-4 bg-stone-950 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/1.jpeg')` }}
          ></motion.div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-stone-950/20 to-stone-950/80 z-0 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center mt-20">
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-white/60 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-6"
            >
              Anatolia Moments
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-[0.15em] text-white uppercase mb-6"
            >
              Galeri
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="w-16 h-[1px] bg-white/50 mb-8"
            ></motion.div>
          </div>

          {/* Zarif Scroll İndikatörü */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1.2, duration: 1 }} 
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
          >
            <span className="text-[9px] text-white/50 tracking-[0.3em] uppercase">Koleksiyonu İncele</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-white/40 to-transparent"></div>
          </motion.div>
        </div>

        {/* --- İÇERİK BÖLÜMÜ --- */}
        <div className="container mx-auto px-6 md:px-12 py-24 md:py-32 min-h-[50vh] relative z-10">
          
          {/* Koleksiyon Giriş Metni */}
          <div className="max-w-3xl mx-auto text-center mb-20 md:mb-28">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
              className="text-2xl md:text-3xl font-light tracking-[0.1em] text-stone-800 uppercase mb-8"
            >
              Unutulmaz Kareler
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}
              className="text-stone-500 font-light leading-relaxed tracking-wide text-sm md:text-base"
            >
              Göz alıcı masa düzenleri, samimi anlar ve doğanın kalbinde gerçekleşen büyülü kutlamalar...Anatolia Event&apos; in kusursuz atmosferini ve imza dokunuşlarını yansıtan anlarımıza göz atın.
            </motion.p>
          </div>
          
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20 text-stone-400">
              <Loader2 className="w-10 h-10 animate-spin mb-6" strokeWidth={1} />
              <p className="text-xs uppercase tracking-[0.3em] font-light">Koleksiyon Yükleniyor</p>
            </div>
          ) : images.length === 0 ? (
            <div className="text-center text-stone-400 py-20 border border-stone-200 rounded-3xl">
              <p className="text-xs uppercase tracking-[0.3em] font-light">Galeriye henüz fotoğraf eklenmedi.</p>
            </div>
          ) : (
            <>
              {/* Masonry Grid Sistemi */}
              <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                <AnimatePresence>
                  {images.slice(0, visibleCount).map((image, index) => (
                    <motion.div
                      key={image.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.8, delay: index * 0.05, ease: "easeOut" }}
                      className="break-inside-avoid relative group overflow-hidden rounded-sm cursor-pointer bg-stone-100 shadow-sm"
                      onClick={() => openLightbox(index)}
                    >
                      <img
                        src={image.url}
                        alt={image.altText || "Anatolia Event Galeri"}
                        className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
                        loading="lazy"
                      />
                      
                      {/* Yeni, Asil Hover Efekti */}
                      <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-950/20 transition-all duration-700 flex flex-col items-center justify-center">
                        <div className="w-14 h-14 rounded-full border border-white/0 group-hover:border-white/40 backdrop-blur-sm flex items-center justify-center transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                          <Maximize2 className="text-white w-5 h-5" strokeWidth={1} />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Daha Fazla Yükle Butonu */}
              {visibleCount < images.length && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  whileInView={{ opacity: 1 }} 
                  viewport={{ once: true }} 
                  className="mt-28 flex justify-center"
                >
                  <button
                    onClick={handleLoadMore}
                    className="inline-flex items-center justify-center border border-stone-300 bg-transparent text-stone-600 hover:bg-stone-900 hover:text-white transition-colors duration-500 rounded-none h-14 px-12 text-xs tracking-[0.25em] uppercase font-light"
                  >
                    Koleksiyonun Devamı
                  </button>
                </motion.div>
              )}
            </>
          )}

        </div>

        <Cta />
      </main>

      {/* --- SİNEMATİK LIGHTBOX --- */}
      <AnimatePresence>
        {lightboxIndex !== null && images.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-950/95 backdrop-blur-xl"
          >
            <button onClick={closeLightbox} className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-50 p-2">
              <X strokeWidth={1} className="w-10 h-10" />
            </button>

            <button onClick={showPrev} className="absolute left-4 md:left-12 text-white/50 hover:text-white transition-colors z-50 p-2">
              <ChevronLeft strokeWidth={1} className="w-12 h-12 md:w-16 md:h-16" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full flex items-center justify-center p-4 md:p-24"
            >
              <img
                src={images[lightboxIndex].url}
                alt={images[lightboxIndex].altText || "Galeri Görseli"}
                className="max-w-full max-h-full object-contain rounded-md shadow-2xl"
              />
            </motion.div>

            <button onClick={showNext} className="absolute right-4 md:right-12 text-white/50 hover:text-white transition-colors z-50 p-2">
              <ChevronRight strokeWidth={1} className="w-12 h-12 md:w-16 md:h-16" />
            </button>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 font-light tracking-widest text-xs">
              {lightboxIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}