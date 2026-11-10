import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://spukerrs.vercel.app",
      lastModified: "2026-11-10",
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://spukerrs.vercel.app/cv/cv-shair-cuello.pdf",
      lastModified: "2026-11-10",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
