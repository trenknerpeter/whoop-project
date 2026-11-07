import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { articles, dealSlug } from "@/lib/nav";
import { LANGS, localePath } from "@/lib/i18n";

// One entry per language per page, each carrying hreflang alternates so
// search engines pair the Czech and English versions.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: {
    slug: string;
    lastModified: Date;
    changeFrequency: "weekly" | "monthly";
    priority: number;
  }[] = [
    { slug: "", lastModified: now, changeFrequency: "weekly", priority: 1 },
    { slug: dealSlug, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...articles
      .filter((a) => a.published)
      .map((a) => ({
        slug: a.slug,
        lastModified: new Date(a.updated),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      })),
  ];

  return pages.flatMap((p) =>
    LANGS.map((lang) => ({
      url: `${site.url}${localePath(lang, p.slug)}`,
      lastModified: p.lastModified,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
      alternates: {
        languages: Object.fromEntries(
          LANGS.map((l) => [l, `${site.url}${localePath(l, p.slug)}`]),
        ),
      },
    })),
  );
}
