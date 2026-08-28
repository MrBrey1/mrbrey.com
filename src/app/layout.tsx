import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mrbrey.com"),
  title: {
    default: "Mr Brey | Música Urbana Cinematográfica",
    template: "%s | Mr Brey",
  },
  description:
    "Sitio oficial de Mr Brey. Música urbana, afrobeat, trap caribeño, R&B latino, videos oficiales, prensa y contacto profesional.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Mr Brey",
    "música urbana",
    "R&B latino",
    "afrobeat",
    "trap caribeño",
    "pop latino",
    "artista dominicano",
    "música romántica",
  ],
  openGraph: {
    title: "Mr Brey | Sitio Oficial",
    description:
      "Música urbana con emoción real, identidad caribeña y una visión cinematográfica.",
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
    title: "Mr Brey | Sitio Oficial",
    description:
      "Música urbana con emoción real, identidad caribeña y una visión cinematográfica.",
    images: ["/images/mr-brey-banner.png"],
  },
};

const artistSchema = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "Mr Brey",
  url: "https://www.mrbrey.com",
  image: "https://www.mrbrey.com/images/mr-brey-portrait.png",
  genre: ["Latin Urban", "R&B", "Afrobeat", "Trap"],
  description:
    "Artista de música urbana con una propuesta que mezcla emoción, identidad caribeña y estética cinematográfica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(artistSchema) }}
        />
      </body>
    </html>
  );
}
