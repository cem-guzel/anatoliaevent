// app/iletisim/layout.tsx
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "İletişim ve Rezervasyon – Anatolia Event Kemerburgaz",
  description: "Kemerburgaz kır düğünü mekanımız için rezervasyon ve bilgi almak üzere bizimle iletişime geçin. Adres: Mithatpaşa, Kumsu Sk. no:55, Kemerburgaz / İstanbul.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}