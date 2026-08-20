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
    slug: "whoop-age",
    title: "WHOOP Age: tři týdny s biologickým věkem",
    nav: "WHOOP Age",
    kicker: "Vysvětlení",
    excerpt:
      "Po 21 nocích mi Whoop spočítal biologický věk 26,9 proti kalendářním 34,7. Devět metrik, které ten věk snižují, a jedna, co mi ho naopak zvyšuje.",
    updated: "2026-08-19",
    isWhoop: true,
    published: true,
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

// Fixed display order for article categories, shared by the header nav and
// the homepage listing so the two never drift into a different grouping. A
// kicker not listed here (typo, or a new category not yet wired in) is
// dropped rather than silently misplaced — add it here first.
export const KICKER_ORDER = ["Recenze", "Vysvětlení", "Srovnání", "Průvodce", "Deník"];

// Reader-facing name for a category, where it differs from the `kicker` key.
// The kicker stays the stable identifier (it's what each article declares);
// this is only the wording shown in the nav and the homepage headings.
export const KICKER_LABEL: Record<string, string> = {
  Vysvětlení: "Život s Whoop",
};

export function kickerLabel(kicker: string): string {
  return KICKER_LABEL[kicker] ?? kicker;
}

export function publishedByKicker(kicker: string): Article[] {
  return articles
    .filter((a) => a.published && a.kicker === kicker)
    .sort((a, b) => b.updated.localeCompare(a.updated));
}

// Every published kicker with its articles, in KICKER_ORDER — the single
// source both the homepage grid and the header dropdowns read from.
export function publishedGroups(): {
  kicker: string;
  label: string;
  items: Article[];
}[] {
  return KICKER_ORDER.map((kicker) => ({
    kicker,
    label: kickerLabel(kicker),
    items: publishedByKicker(kicker),
  })).filter((g) => g.items.length > 0);
}

export type NavItem = {
  label: string;
  href?: string;
  children?: { href: string; label: string }[];
};

// A category with one article becomes a plain link; two or more become a
// dropdown. New articles slot in automatically — no header edit needed.
export const primaryNav: NavItem[] = [
  ...publishedGroups().map(({ label, items }): NavItem =>
    items.length === 1
      ? { href: `/${items[0].slug}`, label }
      : { label, children: items.map((a) => ({ href: `/${a.slug}`, label: a.nav })) },
  ),
  { href: `/${dealSlug}`, label: "Měsíc zdarma" },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
