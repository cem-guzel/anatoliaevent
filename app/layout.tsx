import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import FloatingElements from "../components/FloatingElements";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Kır Düğünü Kemerburgaz İstanbul | Anatolia Event – Kır Düğünü Mekanı",
    template: "%s | Anatolia Event",
  },
  description:
    "Kemerburgaz İstanbul'da doğayla iç içe kır düğünü mekanı. 1300 kişilik kapasite, muhteşem bahçe ve profesyonel organizasyon. Hayalinizdeki düğün Anatolia Event'te.",
  keywords: [
    "kır düğünü kemerburgaz",
    "düğün salonu kemerburgaz",
    "kır düğünü istanbul",
    "düğün mekanı kemerburgaz",
    "kemerburgaz düğün",
    "anatolia event",
    "kır düğünü mekanı istanbul",
  ],
  openGraph: {
    title: "Kır Düğünü Kemerburgaz İstanbul | Anatolia Event",
    description:
      "Kemerburgaz'da doğayla iç içe kır düğünü mekanı. 1300 kişilik kapasite ile hayalinizdeki düğün.",
    url: "https://kırdüğünü.com.tr",
    siteName: "Anatolia Event",
    locale: "tr_TR",
    type: "website",
  },
  verification: {
    google: "LBQrd9SrZw3GJlnD3kdUzJXypI27VnugTcyUcvqruW4",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EventVenue",
  "name": "Anatolia Event",
  "description": "Kemerburgaz İstanbul'da doğayla iç içe lüks kır düğünü ve organizasyon mekanı. 1300 kişilik kapasite.",
  "url": "https://kırdüğünü.com.tr",
  "telephone": "+905333058997",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mithatpaşa, Kumsu Sk. no:55",
    "addressLocality": "Kemerburgaz",
    "addressRegion": "İstanbul",
    "postalCode": "34075",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 41.1794,
    "longitude": 28.8744
  },
  "maximumAttendeeCapacity": 1300,
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "09:00",
      "closes": "19:00"
    }
  ],
  "areaServed": [
    { "@type": "City", "name": "Kemerburgaz" },
    { "@type": "City", "name": "İstanbul" }
  ],
  "priceRange": "₺₺₺"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Footer />
        <FloatingElements />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}