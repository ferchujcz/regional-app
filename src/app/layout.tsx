import type { Metadata } from "next";
import { Playfair_Display, Inter, Caveat } from "next/font/google";
import Navbar from "@/components/Navbar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
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

export const metadata: Metadata = {
  title: "Regional | Alfajores Artesanales de Oberá, Misiones",
  description:
    "Alfajores premium de fécula de mandioca y yerba mate, mermelada de rosella y miel pura. Sabores auténticos desde Oberá, Misiones, Argentina.",
  keywords: [
    "alfajores artesanales",
    "fécula de mandioca",
    "yerba mate",
    "Oberá",
    "Misiones",
    "Argentina",
    "productos regionales",
    "mermelada de rosella",
    "miel pura",
    "Regional",
  ],
  openGraph: {
    title: "Regional | Alfajores Artesanales de Oberá, Misiones",
    description:
      "Sabores auténticos desde la tierra colorada. Alfajores artesanales premium, mermelada de rosella y miel pura.",
    url: "https://regionalalfajores.com.ar",
    siteName: "Regional",
    images: [
      {
        url: "/img_alf/caja.jpg",
        width: 1200,
        height: 630,
        alt: "Regional — Alfajores Premium de Misiones",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/img_alf/logoalf.png" />
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
