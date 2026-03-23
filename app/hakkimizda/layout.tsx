import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Hakkimizda - Anatolia Event Kemerburgaz",
  description: "Kemerburgaz Istanbul kir dugunu mekani.",
  alternates: {
    canonical: "/hakkimizda", 
  },
};
export default function HakkındaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}