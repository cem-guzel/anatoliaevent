// app/hizmetlerimiz/layout.tsx
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Düğün Hizmetleri Kemerburgaz – Anatolia Event",
  description: "Kemerburgaz'da kır düğünü organizasyonu, catering, dekorasyon ve daha fazlası. Anatolia Event'in eksiksiz düğün hizmetlerini keşfedin.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}