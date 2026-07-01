import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import FloatingElements from "../components/FloatingElements";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

import { Analytics } from '@vercel/analytics/next';

// DEĞİŞİKLİK: Türkçe karakterlerin düzgün görünmesi için "latin-ext" eklendi
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  // BÜTÜN SAYFALAR İÇİN TEMEL URL (Doğru Punycode ile)
  metadataBase: new URL("https://xn--krdn-2raab1zsf.com.tr"),
  
  // ANASAYFA İÇİN CANONICAL (STANDART) URL
  alternates: {
    canonical: "/",
  },
  
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
    url: "https://xn--krdn-2raab1zsf.com.tr",
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

// DEĞİŞİKLİK BURADA: jsonLd artık bir dizi [ ... ] oldu ve içine WebSite eklendi.
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    "name": "Anatolia Event",
    "description": "Kemerburgaz İstanbul'da doğayla iç içe kır düğünü ve organizasyon mekanı. 1300 kişilik kapasite.",
    "url": "https://xn--krdn-2raab1zsf.com.tr",
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
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Anatolia Event",
    "url": "https://xn--krdn-2raab1zsf.com.tr"
  }
];

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
              <Analytics />

      </body>
    </html>
  );
}