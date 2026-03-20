import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dugun Menuler - Anatolia Event Kemerburgaz",
  description: "Kemerburgaz kir dugunu mekanımızdaki catering ve menu seceneklerini inceleyin.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}