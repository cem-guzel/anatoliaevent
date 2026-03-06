"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Lock, LogOut, UploadCloud, Image as ImageIcon, Trash2, Home, Loader2 } from "lucide-react";
import { CldUploadWidget } from "next-cloudinary";
import Link from "next/link";

// Veritabanından gelecek fotoğrafın TypeScript tipi
type GalleryImage = {
  id: string;
  publicId: string;
  url: string;
  createdAt: string;
};

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Oturum Kontrolü
  useEffect(() => {
    const authStatus = localStorage.getItem("anatolia_admin_auth");
    if (authStatus === "true") {
      setTimeout(() => setIsAuthenticated(true), 0);
    }
  }, []);

  // Fotoğrafları Veritabanından Çekme
  const fetchImages = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/gallery");
      const data = await res.json();
      setImages(data);
    } catch (error) {
      console.error("Fotoğraflar yüklenemedi", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Kullanıcı giriş yaptıysa fotoğrafları getir
  useEffect(() => {
    if (isAuthenticated) {
      fetchImages();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const correctPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;
    if (password === correctPassword) {
      localStorage.setItem("anatolia_admin_auth", "true");
      setIsAuthenticated(true);
    } else {
      alert("Hatalı Şifre!");
      setPassword("");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("anatolia_admin_auth");
    setIsAuthenticated(false);
  };

  // Yükleme Başarılı Olunca Veritabanına Kaydet
  const handleUploadSuccess = async (result: unknown) => {
    // any hatasından kurtulmak için güvenli tip kontrolü
    const res = result as { info: { public_id: string, secure_url: string } };
    
    if (res.info && typeof res.info === "object" && res.info.public_id) {
      try {
        // API'mize fotoğraf verilerini yolluyoruz
        await fetch("/api/gallery", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            publicId: res.info.public_id,
            url: res.info.secure_url,
          }),
        });
        
        // Kayıt başarılı olunca listeyi yenile
        fetchImages();
      } catch (error) {
        alert("Fotoğraf buluta yüklendi ancak veritabanına kaydedilemedi.");
      }
    }
  };

  // Fotoğraf Silme İşlemi
  const handleDelete = async (id: string) => {
    if (confirm("Bu fotoğrafı galeriden silmek istediğinize emin misiniz?")) {
      try {
        await fetch(`/api/gallery?id=${id}`, { method: "DELETE" });
        fetchImages(); // Listeyi yenile
      } catch (error) {
        alert("Silme işlemi başarısız oldu.");
      }
    }
  };

  // 1. EKRAN: GİRİŞ EKRANI
  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-stone-950 flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 w-full max-w-md bg-stone-900/50 backdrop-blur-xl p-10 md:p-14 rounded-3xl border border-white/10 shadow-2xl text-center"
        >
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/10">
            <Lock strokeWidth={1} className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-extralight tracking-[0.2em] text-white uppercase mb-2">Yönetim</h1>
          <p className="text-xs font-light tracking-widest text-stone-400 uppercase mb-10">Sadece Yetkili Erişim</p>
          <form onSubmit={handleLogin} className="flex flex-col gap-6">
            <input 
              type="password" 
              placeholder="Erişim Şifresi" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border-b border-stone-600 py-3 text-center text-lg font-light text-white placeholder-stone-600 focus:outline-none focus:border-white transition-colors tracking-widest"
              autoFocus
            />
            <button type="submit" className="mt-4 w-full bg-white text-stone-950 hover:bg-stone-200 transition-colors duration-500 rounded-full h-14 text-xs tracking-[0.25em] uppercase font-semibold">
              Giriş Yap
            </button>
          </form>
          <div className="mt-8 pt-6 border-t border-white/10">
            <Link href="/" className="text-[10px] text-stone-500 hover:text-white uppercase tracking-widest transition-colors">&larr; Siteye Dön</Link>
          </div>
        </motion.div>
      </main>
    );
  }

  // 2. EKRAN: KONTROL PANELİ
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 font-light">
      <header className="bg-white border-b border-stone-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 bg-stone-100 rounded-full hover:bg-stone-200 transition-colors" title="Siteye Git">
              <Home strokeWidth={1.5} className="w-5 h-5 text-stone-600" />
            </Link>
            <h1 className="text-xl font-extralight tracking-[0.2em] uppercase">
              Anatolia <span className="font-semibold text-stone-400">Panel</span>
            </h1>
          </div>
          <button onClick={handleLogout} className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-stone-500 hover:text-red-500 transition-colors">
            <span>Çıkış Yap</span>
            <LogOut strokeWidth={1.5} className="w-4 h-4" />
          </button>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-light tracking-[0.1em] uppercase mb-2">Galeri Yönetimi</h2>
            <p className="text-stone-500 text-sm tracking-wide">Sitenizde görünen tüm fotoğrafları buradan ekleyip kaldırabilirsiniz.</p>
          </div>
          
          <CldUploadWidget 
            uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET} 
            onSuccess={handleUploadSuccess}
            options={{ maxFiles: 10, clientAllowedFormats: ["jpeg", "png", "jpg", "webp"] }}
          >
            {({ open }) => (
              <button onClick={() => open()} className="bg-stone-900 text-white hover:bg-stone-800 transition-colors duration-500 rounded-full h-14 px-8 text-xs tracking-[0.2em] uppercase font-semibold flex items-center gap-3 shadow-xl">
                <UploadCloud strokeWidth={1.5} className="w-5 h-5" />
                Yeni Fotoğraf Yükle
              </button>
            )}
          </CldUploadWidget>
        </div>

        {/* FOTOĞRAF LİSTESİ VEYA YÜKLENİYOR EKRANI */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-32 text-stone-400">
            <Loader2 className="w-10 h-10 animate-spin mb-4" />
            <p className="text-sm uppercase tracking-widest font-light">Fotoğraflar Yükleniyor...</p>
          </div>
        ) : images.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((img) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                key={img.id} 
                className="relative group bg-stone-200 rounded-2xl overflow-hidden aspect-[4/5] shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <img src={img.url} alt="Galeri" className="w-full h-full object-cover" />
                
                {/* Sil Butonu (Hover Olunca Çıkar) */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button 
                    onClick={() => handleDelete(img.id)}
                    className="bg-red-500 text-white p-4 rounded-full hover:bg-red-600 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
                    title="Fotoğrafı Sil"
                  >
                    <Trash2 strokeWidth={1.5} className="w-6 h-6" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-[2rem] border border-stone-200 p-10 md:p-16 text-center shadow-sm flex flex-col items-center justify-center min-h-[400px]">
            <div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center mb-6">
              <ImageIcon strokeWidth={1} className="w-10 h-10 text-stone-300" />
            </div>
            <h3 className="text-xl font-light tracking-[0.1em] uppercase mb-2">Henüz Fotoğraf Yok</h3>
            <p className="text-stone-500 text-sm tracking-wide max-w-md mx-auto">
              Sağ üstteki &quot;Yeni Fotoğraf Yükle&quot; butonuna tıklayarak ilk içeriğinizi yükleyin.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}