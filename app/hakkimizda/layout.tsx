import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Hakkimizda - Anatolia Event Kemerburgaz Dugun Mekani",
  description: "Anatolia Event olarak Kemerburgaz Istanbul'da 1300 kisilik kapasitemizle hayalinizdeki dugunu gerceklestiriyoruz.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}