import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dugun Hizmetleri - Anatolia Event Kemerburgaz",
  description: "Kemerburgaz kir dugunu organizasyon hizmetleri.",
  alternates: {
    canonical: "/hizmetlerimiz", 
  },
};
export default function HizmetlerimizLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}