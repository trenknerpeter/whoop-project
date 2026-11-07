import { site } from "./site";
import { localePath, UI, type Lang } from "./i18n";

// Small helpers that return JSON-LD objects. Render with:
//   <script type="application/ld+json"
//     dangerouslySetInnerHTML={{ __html: JSON.stringify(x) }} />

export function articleLd(opts: {
  slug: string;
  title: string;
  description: string;
  updated: string;
  lang?: Lang;
}) {
  const lang = opts.lang ?? "cs";
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    inLanguage: UI[lang].inLanguage,
    dateModified: opts.updated,
    // `slug` is always the Czech slug; localePath maps it for English.
    mainEntityOfPage: `${site.url}${localePath(lang, opts.slug)}`,
    author: { "@type": "Person", name: site.author },
    publisher: { "@type": "Person", name: site.author },
  };
}

export function faqLd(qa: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
