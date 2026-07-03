"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Plus } from "lucide-react";
import { useChat } from "@ai-sdk/react";

export default function FloatingActions() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status } = useChat();

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage({ text: input });
    setInput("");
  };

  const isLoading = status === "streaming" || status === "submitted";

  const openChat = () => {
    setMenuOpen(false);
    setChatOpen(true);
  };

  return (
    <>
      {/* ─── Sohbet Paneli ─── */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.65, 0, 0.35, 1] }}
            className="fixed bottom-24 right-6 md:bottom-28 md:right-8 z-[100] w-[90vw] max-w-[380px] h-[70vh] max-h-[560px] rounded-2xl overflow-hidden flex flex-col shadow-2xl border border-white/10"
            style={{
              background: "linear-gradient(180deg, rgba(28,25,20,0.97) 0%, rgba(18,16,13,0.98) 100%)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <div>
                <p className="text-white text-sm font-light tracking-[0.15em] uppercase">
                  Anatolia Event
                </p>
                <p className="text-white/40 text-[11px] mt-0.5">
                  Genellikle birkaç saniye içinde yanıt verir
                </p>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                aria-label="Sohbeti kapat"
                className="w-8 h-8 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <X className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>

            <div ref={scrollRef} className="chat-scroll flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center px-4">
                  <p className="text-white/60 text-sm font-light leading-relaxed">
                    Merhaba! Kır düğünü, kapasite, menü ya da rezervasyon
                    süreci hakkında merak ettiğiniz her şeyi sorabilirsiniz.
                  </p>
                </div>
              )}

              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-[13px] leading-relaxed font-light ${
                      message.role === "user"
                        ? "bg-[#c9a15f] text-black rounded-br-sm"
                        : "bg-white/10 text-white/90 rounded-bl-sm"
                    }`}
                  >
                    {message.parts.map((part, i) =>
                      part.type === "text" ? <span key={i}>{part.text}</span> : null
                    )}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce" />
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="flex items-center gap-2 px-4 py-3 border-t border-white/10">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Bir soru yazın..."
                className="flex-1 bg-white/5 text-white placeholder:text-white/30 text-[13px] font-light rounded-full px-4 py-2.5 outline-none focus:bg-white/10 transition-colors duration-300"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                aria-label="Gönder"
                className="w-9 h-9 rounded-full bg-[#c9a15f] flex items-center justify-center disabled:opacity-30 transition-opacity duration-300 shrink-0"
              >
                <Send className="w-4 h-4 text-black" strokeWidth={1.5} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Mini Menü (WhatsApp + Sohbet seçenekleri) ─── */}
      <AnimatePresence>
        {menuOpen && !chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 md:bottom-28 md:right-8 z-[100] flex flex-col gap-3 items-end"
          >
            {/* WhatsApp seçeneği */}
            <a
              href="https://wa.me/905333058997"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <span className="bg-black/80 text-white text-xs font-light px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                WhatsApp&apos;tan Yazın
              </span>
              <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shrink-0">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" className="text-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
            </a>

            {/* Sohbet seçeneği */}
            <button onClick={openChat} className="flex items-center gap-3 group">
              <span className="bg-black/80 text-white text-xs font-light px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Asistan ile Sohbet Edin
              </span>
              <div className="w-12 h-12 rounded-full bg-[#c9a15f] flex items-center justify-center shadow-lg shrink-0">
                <MessageCircle className="w-5 h-5 text-black" strokeWidth={1.5} />
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Ana Buton ─── */}
      {!chatOpen && (
        <motion.button
          onClick={() => setMenuOpen((v) => !v)}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          aria-label={menuOpen ? "Menüyü kapat" : "Bize ulaşın"}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(201,161,95,0.4)]"
          style={{ background: "#c9a15f" }}
        >
          <motion.div animate={{ rotate: menuOpen ? 135 : 0 }} transition={{ duration: 0.3 }}>
            <Plus className="w-6 h-6 text-black" strokeWidth={1.5} />
          </motion.div>
        </motion.button>
      )}
    </>
  );
}