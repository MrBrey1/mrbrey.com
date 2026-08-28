import type { Metadata, Viewport } from "next";
import {
  focusSingle,
  siteUrl,
  socialLinks,
  spotifyArtistUrl,
} from "@/data/media";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mr Brey | Sitio Oficial",
    template: "%s | Mr Brey",
  },
  description:
    "Sitio oficial de Mr Brey, artista independiente de Latin Urban basado en New Jersey. Música, Se Me Pega, videos oficiales, press kit y contacto profesional.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Mr Brey",
    "Se Me Pega",
    "Latin Urban",
    "Afro Reggaeton",
    "Latin Trap",
    "R&B latino",
    "trap reggaeton",
    "música urbana",
    "artista independiente",
  ],
  authors: [{ name: "Mr Brey", url: siteUrl }],
  creator: "Mr Brey",
  publisher: "Mr Brey",
  manifest: "/manifest.webmanifest",
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
  openGraph: {
    title: "Mr Brey | Sitio Oficial",
    description:
      "Música urbana con emoción real, identidad caribeña y una visión cinematográfica.",
    url: siteUrl,
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

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

const artistId = `${siteUrl}/#artist`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": artistId,
      name: "Mr Brey",
      url: siteUrl,
      image: `${siteUrl}/images/mr-brey-portrait.png`,
      jobTitle: "Recording Artist & Songwriter",
      description:
        "Independent Latin Urban artist based in New Jersey, developing a modern sound built around melody, atmosphere, Caribbean rhythm and contemporary urban production.",
      sameAs: [...socialLinks.map((link) => link.href), spotifyArtistUrl],
    },
    {
      "@type": "MusicRecording",
      "@id": `${siteUrl}/#se-me-pega`,
      name: focusSingle.title,
      byArtist: { "@id": artistId },
      duration: "PT2M52S",
      genre: ["Latin Urban", "Hip-Hop", "Trap-Reggaeton"],
      isrcCode: focusSingle.isrc,
      url: focusSingle.spotifyUrl,
      inLanguage: "es",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Mr Brey",
      inLanguage: "es",
      about: { "@id": artistId },
    },
  ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
