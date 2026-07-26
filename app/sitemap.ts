import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { articles, dealSlug } from "@/lib/nav";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: `${site.url}/${dealSlug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  for (const a of articles.filter((a) => a.published)) {
    routes.push({
      url: `${site.url}/${a.slug}`,
      lastModified: new Date(a.updated),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  return routes;
}
