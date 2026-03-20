import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dugun Galerisi - Anatolia Event Kemerburgaz",
  description: "Kemerburgaz kir dugunu mekanımızdan fotografları inceleyin. Anatolia Event'te gerceklesen unutulmaz anlar.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}