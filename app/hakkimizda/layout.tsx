// app/hakkimizda/layout.tsx
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Hakkımızda – Anatolia Event Kemerburgaz Düğün Mekanı",
  description: "Anatolia Event olarak Kemerburgaz İstanbul'da 1300 kişilik kapasitemiz ve doğayla iç içe atmosferimizle hayalinizdeki kır düğününü gerçeğe dönüştürüyoruz.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}