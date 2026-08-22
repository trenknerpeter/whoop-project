// Central config. Fill in the real values before launch (see plan: decisions at build time).

export const site = {
  name: "Whoop Journal",
  url: "https://whoopjournal.cz",
  author: "Peter",
  // Short tagline used in header/OG.
  tagline: "Osobní deník o nositelné elektronice",
  description:
    "Osobní zkušenosti s Whoop a dalšími fitness náramky, které jsem nosil. Recenze, srovnání a tipy — bez marketingových keců.",
  locale: "cs_CZ",
  lang: "cs",
} as const;

// Peter's real Whoop referral link + code, from the app's "Get One Month Free" share screen.
// All CTAs route through /go, which redirects here. The raw code is shown as a
// fallback for manual entry (also reads as more authentic than a bare link).
export const WHOOP_REFERRAL_URL = "https://join.whoop.com/FD32FE15";
export const WHOOP_REFERRAL_CODE = "FD32FE15";

// Human-readable label for the deal, kept in one place so wording stays consistent.
export const REFERRAL_DEAL = {
  headline: "Získej první měsíc Whoop zdarma",
  sub: "Přes můj referral odkaz dostaneš první měsíc členství zdarma. Já za to dostanu měsíc kreditu — férová výhra pro oba.",
  button: "Aktivovat měsíc zdarma",
} as const;
