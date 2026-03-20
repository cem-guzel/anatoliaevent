import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Iletisim ve Rezervasyon - Anatolia Event Kemerburgaz",
  description: "Kemerburgaz kir dugunu mekanımız icin rezervasyon ve bilgi almak uzere bizimle iletisime gecin.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}