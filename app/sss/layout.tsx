import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sikca Sorulan Sorular - Anatolia Event Kemerburgaz Dugun",
  description: "Kemerburgaz kir dugunu mekanımız hakkında merak edilenler. Kapasite, fiyat, rezervasyon ve daha fazlası.",
  alternates: {
    canonical: "/sss", 
  },
};
export default function SssLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}