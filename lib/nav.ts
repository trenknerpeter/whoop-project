import { localePath, UI, type Lang } from "./i18n";

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
  // English twin's reader-facing copy (its slug comes from SLUG_MAP).
  en: { title: string; nav: string; excerpt: string };
};

// The article's title/nav/excerpt/href in the requested language.
export function localized(a: Article, lang: Lang) {
  const t = lang === "en" ? a.en : a;
  return {
    title: t.title,
    nav: t.nav,
    excerpt: t.excerpt,
    href: localePath(lang, a.slug),
  };
}

export const articles: Article[] = [
  {
    slug: "whoop-recenze",
    en: {
      title: "Whoop 5.0 review: why I came back",
      nav: "Review",
      excerpt:
        "Last year I put it away after a month; now I'm back on Peak. Heart-rate accuracy, strap comfort, 10-day battery life and what bugs me about Coach.",
    },
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
    en: {
      title: "Whoop vs Amazfit Helio Strap: I wore both",
      nav: "Whoop vs Helio",
      excerpt:
        "A year with the Helio Strap, then the switch to Whoop. Great, accurate data vs smart insights — and what's actually worth the money.",
    },
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
    en: {
      title: "Whoop vs Fitbit Air: I wore both",
      nav: "Whoop vs Fitbit",
      excerpt:
        "Google's Fitbit Air is also a screenless band — just far more casual. The most comfortable in the whole category, but shallower data and an AI coach behind a subscription.",
    },
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
    en: {
      title: "How much Whoop costs in 2026",
      nav: "Price",
      excerpt:
        "A breakdown of the membership price, the individual plans and how free months realistically lower the cost.",
    },
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
    en: {
      title: "What Whoop's Recovery score means",
      nav: "Recovery score",
      excerpt:
        "HRV, resting heart rate and sleep translated into one percentage. How to read it and what not to trust.",
    },
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
    en: {
      title: "WHOOP Age: three weeks with a biological age",
      nav: "WHOOP Age",
      excerpt:
        "After 21 nights Whoop put my biological age at 26.9 against a calendar age of 34.7. Nine metrics that bring that age down, and one that pushes mine up.",
    },
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
    slug: "whoop-100-dni",
    en: {
      title: "100 days later",
      nav: "100 days",
      excerpt:
        "Sleep at 95 to 100%, Recovery often in the red because of low HRV, and shallow running data. What Whoop does well after a hundred days and what I'm missing.",
    },
    title: "O 100 dní později",
    nav: "100 dní",
    kicker: "Vysvětlení",
    excerpt:
      "Spánek na 95 až 100 %, Recovery často v červené kvůli nízkému HRV a mělká data z běhu. Co Whoop po sto dnech dělá dobře a co mi chybí.",
    updated: "2026-11-07",
    isWhoop: true,
    published: true,
  },
  {
    slug: "zkusenosti",
    en: {
      title: "Whoop diary: after 1, 3 and 6 months",
      nav: "Diary",
      excerpt:
        "Running notes on how my experience with Whoop changed over time. Updated every month.",
    },
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
export const KICKER_LABEL: Record<Lang, Record<string, string>> = {
  cs: { Vysvětlení: "Život s Whoop" },
  en: {
    Recenze: "Reviews",
    Vysvětlení: "Living with Whoop",
    Srovnání: "Comparisons",
    Průvodce: "Guides",
    Deník: "Diary",
  },
};

export function kickerLabel(kicker: string, lang: Lang = "cs"): string {
  return KICKER_LABEL[lang][kicker] ?? kicker;
}

export function publishedByKicker(kicker: string): Article[] {
  return articles
    .filter((a) => a.published && a.kicker === kicker)
    .sort((a, b) => b.updated.localeCompare(a.updated));
}

// Every published kicker with its articles, in KICKER_ORDER — the single
// source both the homepage grid and the header dropdowns read from.
export function publishedGroups(lang: Lang = "cs"): {
  kicker: string;
  label: string;
  items: Article[];
}[] {
  return KICKER_ORDER.map((kicker) => ({
    kicker,
    label: kickerLabel(kicker, lang),
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
export function primaryNav(lang: Lang = "cs"): NavItem[] {
  return [
    ...publishedGroups(lang).map(({ label, items }): NavItem =>
      items.length === 1
        ? { href: localized(items[0], lang).href, label }
        : {
            label,
            children: items.map((a) => {
              const l = localized(a, lang);
              return { href: l.href, label: l.nav };
            }),
          },
    ),
    { href: localePath(lang, dealSlug), label: UI[lang].freeMonth },
  ];
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
