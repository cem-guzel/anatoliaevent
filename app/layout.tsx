import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp"; // Yeni butonumuzu içeri aldık

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anatolia Event | Kusursuz Kır Düğünü",
  description: "Doğanın kalbinde, lüks ve zarafetin buluştuğu noktada kusursuz başlangıçlar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
        <FloatingWhatsApp /> {/* Tüm sayfalarda sağ altta süzülmesi için buraya ekledik */}
      </body>
    </html>
  );
}