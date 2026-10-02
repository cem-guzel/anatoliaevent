import type { Metadata } from "next";

// Başlığın sonuna " | Anatolia Event" ana layout'taki şablondan otomatik eklenir.
export const metadata: Metadata = {
  title: "Hizmetlerimiz – Kır Düğünü, Nişan, Söz ve Özel Davetler",
  description:
    "Kemerburgaz'da kır düğünü, nişan, isteme ve söz, evlilik teklifi, doğum günü ve kurumsal etkinlikler. Dekorasyon, menü ve organizasyon tek elden.",
  alternates: {
    canonical: "/hizmetlerimiz",
  },
  openGraph: {
    title: "Hizmetlerimiz – Kır Düğünü, Nişan, Söz ve Özel Davetler | Anatolia Event",
    description:
      "Kemerburgaz'da kır düğünü, nişan, isteme ve söz, evlilik teklifi, doğum günü ve kurumsal etkinlikler. Dekorasyon, menü ve organizasyon tek elden.",
    url: "/hizmetlerimiz",
    siteName: "Anatolia Event",
    locale: "tr_TR",
    type: "website",
  },
};

export default function HizmetlerimizLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
