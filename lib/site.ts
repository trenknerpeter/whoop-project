// Central config. Fill in the real values before launch (see plan: decisions at build time).

export const site = {
  name: "Whoop deník",
  // TODO(peter): set the real domain once purchased (leaning whoopdenik.cz).
  url: "https://example.com",
  author: "Peter",
  // Short tagline used in header/OG.
  tagline: "Osobní deník o nositelné elektronice",
  description:
    "Osobní zkušenosti s Whoop a dalšími fitness náramky, které jsem nosil. Recenze, srovnání a upřímné tipy — bez marketingových keců.",
  locale: "cs_CZ",
  lang: "cs",
} as const;

// Peter's real Whoop referral link — pull from the app: ☰ → "Get One Month Free".
// TODO(peter): replace with the actual referral URL. All CTAs route through /go, which redirects here.
export const WHOOP_REFERRAL_URL = "https://join.whoop.com/REPLACE_ME";

// Human-readable label for the deal, kept in one place so wording stays consistent.
export const REFERRAL_DEAL = {
  headline: "Získej první měsíc Whoop zdarma",
  sub: "Přes můj referral odkaz dostaneš první měsíc členství zdarma. Já za to dostanu měsíc kreditu — férová výhra pro oba.",
  button: "Aktivovat měsíc zdarma",
} as const;
