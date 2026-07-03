"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { useChat } from "@ai-sdk/react";

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <>
      {/* ─── Sohbet Paneli ─── */}
      <AnimatePresence>
        {isOpen && (
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
            {/* Header */}
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
                onClick={() => setIsOpen(false)}
                aria-label="Sohbeti kapat"
                className="w-8 h-8 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <X className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>

            {/* Mesajlar */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scrollbar-thin scrollbar-thumb-white/10"
            >
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

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 px-4 py-3 border-t border-white/10"
            >
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

      {/* ─── Açma/Kapama Butonu ─── */}
      <motion.button
        onClick={() => setIsOpen((v) => !v)}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label={isOpen ? "Sohbeti kapat" : "Sohbeti aç"}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] w-[56px] h-[56px] rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(201,161,95,0.35)]"
        style={{ background: "#c9a15f" }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-5 h-5 text-black" strokeWidth={1.5} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-5 h-5 text-black" strokeWidth={1.5} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}