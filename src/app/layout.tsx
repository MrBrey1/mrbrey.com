import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mrbrey.com"),
  title: {
    default: "Mr Brey | Música Urbana Cinematográfica",
    template: "%s | Mr Brey",
  },
  description:
    "Mr Brey transforma emociones reales en música urbana, cinematográfica y honesta. R&B latino, pop emocional, rap consciente y vibras espirituales.",
  keywords: [
    "Mr Brey",
    "música urbana",
    "R&B latino",
    "pop emocional",
    "rap consciente",
    "trap caribeño",
    "afrobeat",
    "música romántica",
    "sanación interior",
  ],
  openGraph: {
    title: "Mr Brey | Música Urbana Cinematográfica",
    description:
      "Música profunda, honesta y cinematográfica para quienes han amado, sufrido y renacido.",
    url: "https://www.mrbrey.com",
    siteName: "Mr Brey",
    images: [
      {
        url: "/images/mr-brey-banner.png",
        width: 1920,
        height: 768,
        alt: "Mr Brey",
      },
    ],
    locale: "es_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mr Brey | Música Urbana Cinematográfica",
    description:
      "Música urbana, emocional y cinematográfica con alma caribeña.",
    images: ["/images/mr-brey-banner.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}