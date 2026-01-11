import { MetadataRoute } from "next";

const SITE_URL = "https://mrbrey.com";

const videos = [
  {
    title: "Deambulando",
    url: "https://www.youtube.com/watch?v=_Lr1Vwnv5fM",
    slug: "deambulando",
  },
  {
    title: "Creo mundo con mis versos",
    url: "https://www.youtube.com/watch?v=DK9j0gRpSoY",
    slug: "creo-mundo-con-mis-versos",
  },
  {
    title: "No hay Ayer ni manana",
    url: "https://www.youtube.com/watch?v=nTWWyZJZgZY",
    slug: "no-hay-ayer-ni-manana",
  },
  {
    title: "Al verla a Ella",
    url: "https://www.youtube.com/watch?v=w7w1iQghmCo",
    slug: "al-verla-a-ella",
  },
  {
    title: "Pensando en ti",
    url: "https://www.youtube.com/watch?v=oe3FcO90Siw",
    slug: "pensando-en-ti",
  },
  {
    title: "Sobrenatural",
    url: "https://www.youtube.com/watch?v=BYOLv1vQP0c",
    slug: "sobrenatural",
  },
  {
    title: "No Me Digas que me quieres",
    url: "https://www.youtube.com/watch?v=MatMK_l2lVw",
    slug: "no-me-digas-que-me-quieres",
  },
  {
    title: "Quiere ir de fiesta",
    url: "https://www.youtube.com/watch?v=2watUetASk4",
    slug: "quiere-ir-de-fiesta",
  },
  {
    title: "Alquimista",
    url: "https://www.youtube.com/watch?v=6TYVRVhOexk",
    slug: "alquimista",
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/videos`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const videoRoutes: MetadataRoute.Sitemap = videos.map((v) => ({
    url: `${SITE_URL}/videos/${v.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...videoRoutes];
}
