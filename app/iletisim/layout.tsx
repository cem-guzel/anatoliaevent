import type { Metadata } from "next";

// Başlığın sonuna " | Anatolia Event" ana layout'taki şablondan otomatik eklenir.
export const metadata: Metadata = {
  title: "İletişim ve Rezervasyon – Mekanı Ziyaret Edin",
  description:
    "Kemerburgaz Mithatpaşa'daki mekanımızı görmek, tarih sormak ve size özel teklif almak için bize ulaşın. Telefon: 0533 305 89 97.",
  alternates: {
    canonical: "/iletisim",
  },
  openGraph: {
    title: "İletişim ve Rezervasyon – Mekanı Ziyaret Edin | Anatolia Event",
    description:
      "Kemerburgaz Mithatpaşa'daki mekanımızı görmek, tarih sormak ve size özel teklif almak için bize ulaşın. Telefon: 0533 305 89 97.",
    url: "/iletisim",
    siteName: "Anatolia Event",
    locale: "tr_TR",
    type: "website",
  },
};

export default function IletisimLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
