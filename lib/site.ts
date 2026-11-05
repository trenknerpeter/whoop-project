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

// Peter's Whoop affiliate link (Whoop affiliate program). All CTAs route through
// /go, which redirects here — this is the only place the link lives.
export const WHOOP_AFFILIATE_URL = "https://join.whoop.com/WhoopJournal";

// Human-readable label for the deal, kept in one place so wording stays consistent.
export const REFERRAL_DEAL = {
  headline: "Získej první měsíc Whoop zdarma",
  sub: "Přes můj odkaz dostaneš první měsíc členství zdarma. Já od Whoopu dostanu provizi z affiliate programu a tebe to nestojí nic navíc.",
  button: "Aktivovat měsíc zdarma",
} as const;
