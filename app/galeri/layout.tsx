import type { Metadata } from "next";

// Başlığın sonuna " | Anatolia Event" ana layout'taki şablondan otomatik eklenir.
export const metadata: Metadata = {
  title: "Galeri – Kır Düğünü Fotoğrafları ve Videoları",
  description:
    "Anatolia Event'te gerçekleşen kır düğünlerinden fotoğraf ve videolar. Masa düzenleri, dekorasyon detayları ve Kemerburgaz'ın doğasından kareler.",
  alternates: {
    canonical: "/galeri",
  },
  openGraph: {
    title: "Galeri – Kır Düğünü Fotoğrafları ve Videoları | Anatolia Event",
    description:
      "Anatolia Event'te gerçekleşen kır düğünlerinden fotoğraf ve videolar. Masa düzenleri, dekorasyon detayları ve Kemerburgaz'ın doğasından kareler.",
    url: "/galeri",
    siteName: "Anatolia Event",
    locale: "tr_TR",
    type: "website",
  },
};

export default function GaleriLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
