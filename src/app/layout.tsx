import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, Caveat } from "next/font/google";
import Navbar from "@/components/Navbar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import JsonLd from "@/components/JsonLd";
import { BUSINESS, DEFAULT_DESCRIPTION, PRIMARY_KEYWORDS, SITE_NAME, SITE_URL } from "@/lib/seo";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const DEFAULT_TITLE = "Alfajores Artesanales en Oberá, Misiones | Regional Alfajores";

export const viewport: Viewport = {
  themeColor: "#5A0C0E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Regional Alfajores Oberá",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: PRIMARY_KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "food",
  alternates: {
    canonical: "/",
    languages: { "es-AR": "/" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: BUSINESS.logo,
    apple: BUSINESS.logo,
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description:
      "Alfajor artesanal de Oberá, Misiones: fécula de mandioca, yerba mate, dulce de leche y miel pura. Sabores auténticos de la tierra colorada con envíos a toda Argentina.",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: BUSINESS.image,
        width: 1200,
        height: 630,
        alt: "Caja de alfajores artesanales Regional de Oberá, Misiones",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [BUSINESS.image],
  },
  other: {
    // Local / geographic SEO signals
    "geo.region": BUSINESS.regionCode,
    "geo.placename": `${BUSINESS.city}, ${BUSINESS.region}, ${BUSINESS.countryName}`,
    "geo.position": `${BUSINESS.lat};${BUSINESS.lng}`,
    ICBM: `${BUSINESS.lat}, ${BUSINESS.lng}`,
    "content-language": "es-AR",
    distribution: "global",
    coverage: "Argentina",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${playfair.variable} ${caveat.variable} antialiased bg-crema text-marron selection:bg-vino selection:text-white`}
      >
        <Navbar />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
