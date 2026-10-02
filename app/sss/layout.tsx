import type { Metadata } from "next";

// Başlığın sonuna " | Anatolia Event" ana layout'taki şablondan otomatik eklenir.
export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular – Kapasite, Fiyat ve Rezervasyon",
  description:
    "Kapasite, yağmur planı, menü tadımı, kapora, ödeme ve rezervasyon hakkında merak edilenler. Kemerburgaz kır düğünü mekanı Anatolia Event.",
  alternates: {
    canonical: "/sss",
  },
  openGraph: {
    title: "Sıkça Sorulan Sorular – Kapasite, Fiyat ve Rezervasyon | Anatolia Event",
    description:
      "Kapasite, yağmur planı, menü tadımı, kapora, ödeme ve rezervasyon hakkında merak edilenler. Kemerburgaz kır düğünü mekanı Anatolia Event.",
    url: "/sss",
    siteName: "Anatolia Event",
    locale: "tr_TR",
    type: "website",
  },
};

export default function SssLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
