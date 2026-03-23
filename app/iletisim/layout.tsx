import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Iletisim - Anatolia Event Kemerburgaz",
  description: "Kemerburgaz kir dugunu rezervasyon ve iletisim.",
  alternates: {
    canonical: "/iletisim", 
  },
};
export default function IletisimLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}