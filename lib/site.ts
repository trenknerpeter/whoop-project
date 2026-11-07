// Central config. Language-specific copy lives in SITE_TEXT / DEAL below.
import type { Lang } from "./i18n";

export const site = {
  name: "Whoop Journal",
  url: "https://whoopjournal.cz",
  author: "Peter",
  // Czech defaults (the site's default language); see SITE_TEXT for English.
  tagline: "Osobní deník o nositelné elektronice",
  description:
    "Osobní zkušenosti s Whoop a dalšími fitness náramky, které jsem nosil. Recenze, srovnání a tipy — bez marketingových keců.",
  locale: "cs_CZ",
  lang: "cs",
} as const;

export const SITE_TEXT: Record<
  Lang,
  { tagline: string; description: string; locale: string }
> = {
  cs: { tagline: site.tagline, description: site.description, locale: site.locale },
  en: {
    tagline: "A personal journal about wearables",
    description:
      "First-hand experience with Whoop and the other fitness bands I've worn. Reviews, comparisons and tips — no marketing fluff.",
    locale: "en_US",
  },
};

// Peter's Whoop affiliate link (Whoop affiliate program). All CTAs route through
// /go, which redirects here — this is the only place the link lives.
export const WHOOP_AFFILIATE_URL = "https://join.whoop.com/WhoopJournal";

// Human-readable label for the deal, kept in one place so wording stays consistent.
export const DEAL: Record<Lang, { headline: string; sub: string; button: string }> = {
  cs: {
    headline: "Získej první měsíc Whoop zdarma",
    sub: "Přes můj odkaz dostaneš první měsíc členství zdarma. Já od Whoopu dostanu provizi z affiliate programu a tebe to nestojí nic navíc.",
    button: "Aktivovat měsíc zdarma",
  },
  en: {
    headline: "Get your first month of Whoop free",
    sub: "Sign up through my link and your first month of membership is free. I get a commission from Whoop's affiliate program, and it costs you nothing extra.",
    button: "Claim your free month",
  },
};

// Back-compat alias for the Czech wording.
export const REFERRAL_DEAL = DEAL.cs;
