"use client";

import Link from "next/link";
import { Star } from "lucide-react";
import Navbar from "../../components/Navbar";

// Senin belirlediğin sıralama ve doğal, Türkçe alt başlıklar
const servicesList = [
  {
    id: "01",
    title: "Davet & Organizasyon",
    subtitle: "SİZE ÖZEL KUTLAMALAR",
    description: "Baby shower, doğum günü, mezuniyet veya kurumsal yemekler... Hangi etkinliği kutluyor olursanız olun, doğa ile iç içe prestijli bir deneyim sunmak için tüm detayları biz düşünüyoruz.",
    features: ["Amaca Uygun Dekorasyon", "Premium İkramlar", "Profesyonel Karşılama", "Esnek Kapasite Seçenekleri"],
  },
  {
    id: "02",
    title: "Kır Düğünü",
    subtitle: "MASAL GİBİ BİR GÜN",
    description: "Asırlık ağaçların gölgesinde, doğanın kalbinde bir masal... Geleneksel kır düğünü algısını lüks detaylar, size özel tasarlanmış menüler ve benzersiz bir atmosferle yeniden tanımlıyoruz.",
    features: ["Kişiselleştirilmiş Menü Tadımı", "Özel Karşılama Kokteyli", "Profesyonel Ses ve Işık", "Gelin & Damat Hazırlık Odası"],
  },
  {
    id: "03",
    title: "İsteme & Söz",
    subtitle: "GELENEKSEL VE SAMİMİ",
    description: "Geleneklerimizin en güzel yansıması... Sadece en yakınlarınızla bir arada olacağınız, samimi, sıcak ama lüksünden hiçbir şey kaybetmeyen butik söz ve isteme organizasyonları.",
    features: ["Butik Oturma Düzeni", "Özel Türk Kahvesi Sunumu", "Arka Fon ve Çiçek Süsleme", "Karşılama Ekibi"],
  },
  {
    id: "04",
    title: "Nişan",
    subtitle: "ZARİF BİR BAŞLANGIÇ",
    description: "Evliliğe atılan ilk büyük adım. Ailelerin bir araya geldiği bu özel günü, kusursuz masa düzenleri, romantik aydınlatmalar ve zarif bir atmosfer ile taçlandırıyoruz.",
    features: ["Konsept Tasarımı", "Özel Fotoğraf Çekim Alanları", "Zarif Masa Süslemeleri", "DJ ve Müzik Organizasyonu"],
  }
];

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-black">
      
      <Navbar />

      <div className="fixed inset-0 w-full h-full z-0">
        {/* Arka plan görseli (İstersen burayı da ana sayfadaki gibi bir video ile değiştirebilirsin) */}
        <img 
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=3270&auto=format&fit=crop" 
          alt="Dark Wedding Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90"></div>
      </div>

      <div className="relative z-10">

        <section className="h-screen flex flex-col items-center justify-center text-center px-6 relative">
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <span className="block text-white/70 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase">
                    Anatolia İmza Konseptleri
                </span>
                <h1 className="text-5xl md:text-8xl font-serif text-white font-light leading-none">
                    Anatolia <br/> Hizmetler
                </h1>
                <p className="text-stone-300 max-w-lg mx-auto text-sm md:text-lg font-light leading-relaxed">
                    Sıradan bir mekandan fazlası. <br/>
                    En özel gününüz için tasarlanmış doğal bir lüks.
                </p>
            </div>

            <div className="absolute bottom-[-20px] md:bottom-[-30px] left-0 w-full flex justify-center z-20 mix-blend-overlay">
                <div className="flex flex-col items-center gap-4">
                    <span className="text-[10px] text-white/80 font-bold tracking-[0.4em] uppercase animate-pulse">
                        Keşfet
                    </span>
                    <div className="w-[1px] h-24 bg-gradient-to-b from-white via-white/50 to-transparent"></div>
                </div>
            </div>
        </section>

        <section className="py-24 px-4 md:px-0 flex flex-col items-center gap-24 md:gap-40 pb-40">
            {servicesList.map((service) => (
                <div 
                    key={service.id} 
                    className="w-full max-w-4xl backdrop-blur-md bg-white/5 border border-white/10 p-8 md:p-16 rounded-none md:rounded-sm hover:bg-white/10 transition-all duration-500 group animate-in fade-in duration-700"
                >
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                        
                        <div className="hidden md:block">
                            <span className="text-6xl md:text-8xl font-serif text-white/20 group-hover:text-white/40 transition-colors">
                                {service.id}
                            </span>
                        </div>

                        <div className="flex-1 space-y-6">
                            <span className="md:hidden text-5xl font-serif text-white/20 mb-4 block">
                                {service.id}
                            </span>

                            <div className="space-y-2">
                                <span className="text-[#DCCFCF] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase block">
                                    {service.subtitle}
                                </span>
                                <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
                                    {service.title}
                                </h2>
                            </div>

                            <p className="text-stone-300 text-sm md:text-base leading-relaxed font-light">
                                {service.description}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4 border-t border-white/10">
                                {service.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-stone-400 text-[11px] md:text-sm tracking-wide uppercase">
                                        <div className="w-1 h-1 bg-white rounded-full"></div>
                                        {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="pt-6">
                                <Link 
                                  href="/iletisim"
                                  className="inline-flex items-center justify-center bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 rounded-none h-12 px-8 text-xs tracking-[0.2em] uppercase w-full md:w-auto font-medium"
                                >
                                    İletişime Geç
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            ))}
        </section>

        <section className="py-32 text-center px-6 bg-black relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            <Star className="w-8 h-8 mx-auto mb-8 text-white/30 animate-spin-slow" />
            
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">
                Hazır mısınız?
            </h2>
            
            <div className="flex justify-center gap-6">
                <Link 
                  href="/iletisim"
                  className="inline-flex items-center justify-center bg-transparent border border-white/30 text-white hover:bg-white hover:text-black rounded-none h-14 px-10 text-xs tracking-[0.2em] uppercase transition-all duration-300 font-medium"
                >
                    İletişime Geç
                </Link>
            </div>
        </section>

      </div>
    </main>
  );
}