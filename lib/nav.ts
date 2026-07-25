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
};

export const articles: Article[] = [
  {
    slug: "whoop-recenze",
    title: "Whoop 5.0 recenze: 6 týdnů na zápěstí",
    nav: "Recenze",
    kicker: "Recenze",
    excerpt:
      "Náramek bez displeje za předplatné. Dává to smysl? Moje upřímná zkušenost po šesti týdnech nošení.",
    updated: "2026-07-20",
    isWhoop: true,
  },
  {
    slug: "whoop-vs-fitbit",
    title: "Whoop vs Fitbit: nosil jsem obojí",
    nav: "Whoop vs Fitbit",
    kicker: "Srovnání",
    excerpt:
      "Dvě úplně jiné filozofie měření. Kde Fitbit vyhrává a kdy má smysl připlatit si za Whoop.",
    updated: "2026-07-18",
    isWhoop: true,
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
  },
];

// The money page lives on its own — it's a CTA hub, not a diary entry.
export const dealSlug = "whoop-zdarma";

export const primaryNav = [
  { href: "/whoop-recenze", label: "Recenze" },
  { href: "/whoop-vs-helio", label: "Srovnání" },
  { href: "/whoop-cena", label: "Cena" },
  { href: "/zkusenosti", label: "Deník" },
  { href: `/${dealSlug}`, label: "Měsíc zdarma" },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
