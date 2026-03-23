import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dugun Menuler - Anatolia Event Kemerburgaz",
  description: "Kemerburgaz kir dugunu catering ve menu secenekleri.",
  alternates: {
    canonical: "/menuler", 
  },
};
export default function MenulerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}