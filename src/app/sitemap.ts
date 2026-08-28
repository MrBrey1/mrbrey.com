import { MetadataRoute } from "next";
import { siteUrl } from "@/data/media";

const lastMajorUpdate = new Date("2026-08-28T00:00:00-04:00");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: lastMajorUpdate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/videos`,
      lastModified: lastMajorUpdate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/press`,
      lastModified: lastMajorUpdate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
