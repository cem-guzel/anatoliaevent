import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dugun Galerisi - Anatolia Event Kemerburgaz",
  description: "Kemerburgaz kir dugunu fotograflari.",
  alternates: {
    canonical: "/galeri", 
  },
};
export default function GaleriLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}