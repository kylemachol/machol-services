import type { Metadata, Viewport } from "next";
import { Outfit, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-source-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://macholservices.com"),
  title: "Machol Services | Handyman in Canton, GA | Home Improvements",
  description:
    "Local Canton, GA handyman services - ceiling fans, garage doors, air conditioning filters, bathroom repairs, and more. We leave your house cleaner than when we started.",
  openGraph: {
    title: "Machol Services | Handyman in Canton, GA",
    description:
      "Your trusted neighborhood handyman for light to medium home projects. Ceiling fans, garage doors, bathroom repairs & more.",
    url: "https://macholservices.com",
    siteName: "Machol Services",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Machol Services | Handyman in Canton, GA",
    description:
      "Your trusted neighborhood handyman for light to medium home projects. Ceiling fans, garage doors, bathroom repairs & more.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://macholservices.com",
  },
};

// JSON-LD Structured Data for LocalBusiness
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Machol Services",
  description:
    "Local Canton, GA handyman services for ceiling fans, garage doors, bathroom repairs, and more.",
  url: "https://macholservices.com",
  telephone: "404-597-4945",
  email: "macholservices@yahoo.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Canton",
    addressRegion: "GA",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.2368,
    longitude: -84.4908,
  },
  areaServed: [
    "Canton, GA",
    "Riverstone, GA",
    "Hickory Flat, GA",
    "Bridgemill, GA",
    "Sixes, GA",
    "Ball Ground, GA",
    "Woodstock, GA",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "15:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "100",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className={`${outfit.variable} ${sourceSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
