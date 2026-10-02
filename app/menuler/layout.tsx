import type { Metadata } from "next";

// Başlığın sonuna " | Anatolia Event" ana layout'taki şablondan otomatik eklenir.
export const metadata: Metadata = {
  title: "Düğün Menüleri – Kokteylden Set Menüye 6 Seçenek",
  description:
    "Kokteyl, ordövr, tavuk ve et tabak, tavuk ve et set menüler ile 200 kişiye kadar Micro Wedding paketi. Menü içerikleri ve pakete dahil hizmetler.",
  alternates: {
    canonical: "/menuler",
  },
  openGraph: {
    title: "Düğün Menüleri – Kokteylden Set Menüye 6 Seçenek | Anatolia Event",
    description:
      "Kokteyl, ordövr, tavuk ve et tabak, tavuk ve et set menüler ile 200 kişiye kadar Micro Wedding paketi. Menü içerikleri ve pakete dahil hizmetler.",
    url: "/menuler",
    siteName: "Anatolia Event",
    locale: "tr_TR",
    type: "website",
  },
};

export default function MenulerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
