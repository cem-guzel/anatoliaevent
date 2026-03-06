"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/905333058997"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      /* Yeşil yerine lüks siyah/koyu taş rengi (bg-stone-900) kullanıyoruz */
      className="fixed bottom-8 right-8 z-[100] bg-stone-900 text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-stone-800 transition-colors duration-300 group"
      aria-label="WhatsApp ile İletişime Geçin"
    >
      <MessageCircle strokeWidth={1.5} className="w-7 h-7 group-hover:animate-pulse" />
    </motion.a>
  );
}