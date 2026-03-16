"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import PageHero from "../../components/PageHero";
import MEDIA from "@/lib/media";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play, Loader2, ZoomIn } from "lucide-react";
import Navbar from "../../components/Navbar";
import Cta from "../../components/Cta";

type GalleryItem = {
  id: string;
  publicId: string;
  url: string;
  altText: string | null;
  resourceType: string;
  createdAt: string;
};

// ─── Paralaks Hero ────────────────────────────────────────────────────
// ─── Grid Item ────────────────────────────────────────────────────────
function GridItem({
  item,
  index,
  onClick,
  size,
}: {
  item: GalleryItem;
  index: number;
  onClick: () => void;
  size: "normal" | "tall" | "wide";
}) {
  const isVideo = item.resourceType === "video";

  const sizeClass =
    size === "tall"
      ? "row-span-2"
      : size === "wide"
      ? "col-span-2"
      : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay: (index % 9) * 0.06, ease: "easeOut" }}
      onClick={onClick}
      className={`${sizeClass} relative overflow-hidden cursor-pointer group bg-stone-200`}
      style={{ minHeight: size === "tall" ? "480px" : "240px" }}
    >
      {isVideo ? (
        <video
          src={item.url}
          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-[1.04] transition-transform duration-[2s] ease-out"
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <img
          src={item.url}
          alt={item.altText || "Anatolia Event"}
          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-[1.04] transition-transform duration-[2s] ease-out"
          loading="lazy"
        />
      )}

      {/* Renk bozulması olmayan saf siyah overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-700 z-10" />

      {/* Video etiketi */}
      {isVideo && (
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5">
          <Play className="w-3 h-3 text-white fill-white" />
          <span className="text-[9px] tracking-[0.2em] text-white uppercase">Video</span>
        </div>
      )}

      {/* Hover overlay içeriği */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <motion.div
          initial={false}
          className="w-14 h-14 rounded-full border border-white/60 flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
        >
          {isVideo
            ? <Play className="w-5 h-5 text-white fill-white ml-0.5" />
            : <ZoomIn className="w-5 h-5 text-white" strokeWidth={1.5} />
          }
        </motion.div>
      </div>

      {/* Altta zarif gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}

// ─── Lightbox ─────────────────────────────────────────────────────────
function Lightbox({
  items,
  index,
  onClose,
  onNext,
  onPrev,
}: {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  const item = items[index];
  const isVideo = item.resourceType === "video";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/97 backdrop-blur-2xl"
      onClick={onClose}
    >
      {/* Kapat */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-all duration-300"
      >
        <X strokeWidth={1} className="w-6 h-6" />
      </button>

      {/* Sayaç */}
      <div className="absolute top-7 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.35em] text-white/30 uppercase z-50">
        {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
      </div>

      {/* Sol Ok */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 md:left-8 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 hover:border-white/40 flex items-center justify-center text-white/40 hover:text-white transition-all duration-300"
      >
        <ChevronLeft strokeWidth={1} className="w-7 h-7" />
      </button>

      {/* İçerik */}
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.35 }}
        className="w-full h-full flex items-center justify-center p-16 md:p-24"
        onClick={(e) => e.stopPropagation()}
      >
        {isVideo ? (
          <video
            src={item.url}
            className="max-w-full max-h-full object-contain shadow-2xl"
            controls
            autoPlay
            playsInline
          />
        ) : (
          <img
            src={item.url}
            alt={item.altText || "Galeri Görseli"}
            className="max-w-full max-h-full object-contain shadow-2xl"
          />
        )}
      </motion.div>

      {/* Sağ Ok */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 md:right-8 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 hover:border-white/40 flex items-center justify-center text-white/40 hover:text-white transition-all duration-300"
      >
        <ChevronRight strokeWidth={1} className="w-7 h-7" />
      </button>

      {/* Alt thumbnail şeridi */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-50 max-w-[90vw] overflow-x-auto px-4">
        {items.map((thumb, i) => (
          <button
            key={thumb.id}
            onClick={(e) => { e.stopPropagation(); /* set index */ }}
            className={`flex-shrink-0 w-10 h-10 overflow-hidden border transition-all duration-300 ${
              i === index ? "border-white/70 opacity-100" : "border-white/10 opacity-40 hover:opacity-70"
            }`}
          >
            {thumb.resourceType === "video" ? (
              <div className="w-full h-full bg-stone-800 flex items-center justify-center">
                <Play className="w-3 h-3 text-white/60 fill-white/60" />
              </div>
            ) : (
              <img src={thumb.url} alt="" className="w-full h-full object-cover" />
            )}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

// ─── Sayfa ────────────────────────────────────────────────────────────
export default function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(12);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/gallery");
        const data = await res.json();
        setItems(data);
      } catch (err) {
        console.error("Galeri yüklenemedi:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, []);

  const openLightbox = (i: number) => {
    setLightboxIndex(i);
    document.body.style.overflow = "hidden";
  };
  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = "unset";
  };
  const showNext = useCallback(() => {
    setLightboxIndex((p) => (p === null ? 0 : p === items.length - 1 ? 0 : p + 1));
  }, [items.length]);
  const showPrev = useCallback(() => {
    setLightboxIndex((p) => (p === null ? 0 : p === 0 ? items.length - 1 : p - 1));
  }, [items.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, showNext, showPrev]);

  // Grid için boyut dağılımı — her 6'lı blokta pattern tekrarlanır
  const getSizePattern = (index: number): "normal" | "tall" | "wide" => {
    const pattern: Array<"normal" | "tall" | "wide"> = [
      "tall", "normal", "normal",
      "normal", "normal", "wide",
    ];
    return pattern[index % pattern.length];
  };

  const visibleItems = items.slice(0, visibleCount);

  return (
    <>
      <Navbar />
      <main className="bg-stone-50 min-h-screen font-light text-stone-900">

        <PageHero
          eyebrow="Anatolia Moments"
          title="Galeri"
          subtitle="Her kare bir hikaye, her an bir hatıra"
          image={MEDIA.galeri.hero}
          tags={[
            { label: "İçerik", value: "Fotoğraf & Video" },
            { label: "Mekan", value: "Kemerburgaz" },
          ]}
          sideText="Anatolia Event — Gallery"
          height="75vh"
        />

        {/* ── Giriş Metni ── */}
        <div className="container mx-auto px-6 md:px-12 pt-24 pb-16">
          <div className="max-w-2xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-[10px] tracking-[0.4em] text-stone-400 uppercase block mb-5"
            >
              Koleksiyonumuz
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-3xl md:text-4xl font-extralight tracking-tight text-stone-800 mb-6 leading-tight"
            >
              Unutulmaz <span className="italic text-stone-500">Kareler.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-stone-400 font-light text-sm leading-relaxed tracking-wide"
            >
              Göz alıcı masa düzenleri, samimi anlar ve doğanın kalbinde gerçekleşen büyülü kutlamalar. Anatolia Event&apos;in kusursuz atmosferini yansıtan anlara göz atın.
            </motion.p>
          </div>
        </div>

        {/* ── Galeri Grid ── */}
        <div className="container mx-auto px-4 md:px-8 pb-24 md:pb-32">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-32 text-stone-300">
              <Loader2 className="w-8 h-8 animate-spin mb-5" strokeWidth={1} />
              <p className="text-[10px] uppercase tracking-[0.35em]">Koleksiyon Yükleniyor</p>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center text-stone-300 py-32">
              <p className="text-[10px] uppercase tracking-[0.35em]">Galeriye henüz içerik eklenmedi.</p>
            </div>
          ) : (
            <>
              {/* Dinamik Grid */}
              <div
                className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
                style={{ gridAutoRows: "240px" }}
              >
                {visibleItems.map((item, index) => (
                  <GridItem
                    key={item.id}
                    item={item}
                    index={index}
                    onClick={() => openLightbox(index)}
                    size={getSizePattern(index)}
                  />
                ))}
              </div>

              {/* Daha Fazla Yükle */}
              {visibleCount < items.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mt-20 flex flex-col items-center gap-4"
                >
                  <button
                    onClick={() => setVisibleCount((p) => Math.min(p + 9, items.length))}
                    className="group flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase text-stone-500 hover:text-stone-900 pb-2 border-b border-stone-300 hover:border-stone-900 transition-all duration-500"
                  >
                    <span>Daha Fazla Görüntüle</span>
                    <span className="text-stone-300 group-hover:text-stone-600 transition-colors">
                      ({items.length - visibleCount} kare daha)
                    </span>
                  </button>
                </motion.div>
              )}
            </>
          )}
        </div>

        <Cta />
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && items.length > 0 && (
          <Lightbox
            items={items}
            index={lightboxIndex}
            onClose={closeLightbox}
            onNext={showNext}
            onPrev={showPrev}
          />
        )}
      </AnimatePresence>
    </>
  );
}