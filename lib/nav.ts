// Primary navigation + the canonical list of articles, used by the header,
// homepage listing, and sitemap so they never drift apart.

export type Article = {
  slug: string;
  title: string;
  nav: string;
  kicker: string;
  excerpt: string;
  updated: string; // ISO date, also used in sitemap lastModified
  isWhoop: boolean;
  // Whether the article is live: drives the homepage grid, footer list and
  // sitemap. Drafts stay in the array (so their route + getArticle still work)
  // but are hidden from listings until the content is written.
  published: boolean;
};

export const articles: Article[] = [
  {
    slug: "whoop-recenze",
    title: "Whoop 5.0 recenze: proč jsem se vrátil",
    nav: "Recenze",
    kicker: "Recenze",
    excerpt:
      "Loni jsem ho po měsíci odložil, teď jsem zpátky na Peaku. Přesnost tepu, komfort pásku, výdrž 10 dní a co mi vadí na Coachovi.",
    updated: "2026-07-31",
    isWhoop: true,
    published: true,
  },
  {
    slug: "whoop-vs-helio",
    title: "Whoop vs Amazfit Helio Strap: nosil jsem obojí",
    nav: "Whoop vs Helio",
    kicker: "Srovnání",
    excerpt:
      "Rok s Helio Strapem, pak přechod na Whoop. Skvělá a přesná data vs chytré insighty — a co reálně stojí za ty peníze.",
    updated: "2026-07-25",
    isWhoop: true,
    published: true,
  },
  {
    slug: "whoop-vs-fitbit",
    title: "Whoop vs Fitbit Air: nosil jsem obojí",
    nav: "Whoop vs Fitbit",
    kicker: "Srovnání",
    excerpt:
      "Google Fitbit Air je taky náramek bez displeje — jen mnohem casual. Nejpohodlnější z celé kategorie, ale mělčí data a AI kouč za předplatné.",
    updated: "2026-07-26",
    isWhoop: true,
    published: true,
  },
  {
    slug: "whoop-cena",
    title: "Kolik stojí Whoop v roce 2026",
    nav: "Cena",
    kicker: "Průvodce",
    excerpt:
      "Rozpad ceny předplatného v korunách, jednotlivé plány a jak si měsíce zdarma reálně snížit náklady.",
    updated: "2026-07-15",
    isWhoop: true,
    published: false,
  },
  {
    slug: "jak-funguje-recovery",
    title: "Co znamená Recovery skóre u Whoopu",
    nav: "Recovery skóre",
    kicker: "Vysvětlení",
    excerpt:
      "HRV, klidový tep a spánek přeložené do jednoho procenta. Jak ho číst a čemu nevěřit.",
    updated: "2026-07-12",
    isWhoop: true,
    published: false,
  },
  {
    slug: "zkusenosti",
    title: "Whoop deník: po 1, 3 a 6 měsících",
    nav: "Deník",
    kicker: "Deník",
    excerpt:
      "Průběžné poznámky, jak se moje zkušenost s Whoopem měnila v čase. Aktualizuji každý měsíc.",
    updated: "2026-07-22",
    isWhoop: true,
    published: false,
  },
];

// The money page lives on its own — it's a CTA hub, not a diary entry.
export const dealSlug = "whoop-zdarma";

export type NavItem = {
  label: string;
  href?: string;
  children?: { href: string; label: string }[];
};

// The two comparison articles, shown as a dropdown under "Srovnání".
export const compareNav = [
  { href: "/whoop-vs-helio", label: "Whoop 5.0 vs Helio Strap" },
  { href: "/whoop-vs-fitbit", label: "Whoop 5.0 vs Fitbit Air" },
];

export const primaryNav: NavItem[] = [
  { href: "/whoop-recenze", label: "Recenze" },
  { label: "Srovnání", children: compareNav },
  { href: `/${dealSlug}`, label: "Měsíc zdarma" },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
