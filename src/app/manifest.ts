import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mr Brey | Sitio Oficial",
    short_name: "Mr Brey",
    description:
      "Música, videos, press kit y enlaces oficiales de Mr Brey.",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#050505",
    lang: "es",
  };
}
