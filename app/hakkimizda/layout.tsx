import type { Metadata } from "next";

// Başlığın sonuna " | Anatolia Event" ana layout'taki şablondan otomatik eklenir.
export const metadata: Metadata = {
  title: "Hakkımızda – Kemerburgaz Kır Düğünü Mekanı",
  description:
    "2021'den bu yana Kemerburgaz'da asırlık ağaçlar arasında kır düğünü ve özel davetler. 1.300 kişilik açık, 350 kişilik kapalı alan ve açılır kapanır pergole.",
  alternates: {
    canonical: "/hakkimizda",
  },
  openGraph: {
    title: "Hakkımızda – Kemerburgaz Kır Düğünü Mekanı | Anatolia Event",
    description:
      "2021'den bu yana Kemerburgaz'da asırlık ağaçlar arasında kır düğünü ve özel davetler. 1.300 kişilik açık, 350 kişilik kapalı alan ve açılır kapanır pergole.",
    url: "/hakkimizda",
    siteName: "Anatolia Event",
    locale: "tr_TR",
    type: "website",
  },
};

export default function HakkimizdaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
