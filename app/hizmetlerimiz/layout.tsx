import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dugun Hizmetleri Kemerburgaz - Anatolia Event",
  description: "Kemerburgaz'da kir dugunu organizasyonu, catering, dekorasyon ve daha fazlasi. Anatolia Event'in eksiksiz dugun hizmetlerini kesfedin.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}