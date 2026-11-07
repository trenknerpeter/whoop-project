// Two-language setup. Czech is the default and keeps the original, unprefixed
// URLs (/whoop-recenze); English lives under /en with its own slugs
// (/en/whoop-review). SLUG_MAP is the single place that pairs the two, used by
// the language switch, hreflang alternates and the sitemap.

export type Lang = "cs" | "en";
export const LANGS: Lang[] = ["cs", "en"];
export const DEFAULT_LANG: Lang = "cs";

// cs slug → en slug. Every Czech page with an English twin is listed here.
export const SLUG_MAP: Record<string, string> = {
  "whoop-recenze": "whoop-review",
  "whoop-vs-helio": "whoop-vs-helio",
  "whoop-vs-fitbit": "whoop-vs-fitbit",
  "whoop-cena": "whoop-price",
  "jak-funguje-recovery": "how-whoop-recovery-works",
  "whoop-age": "whoop-age",
  "whoop-100-dni": "whoop-100-days",
  zkusenosti: "whoop-diary",
  "whoop-zdarma": "whoop-free-month",
};

const EN_TO_CS: Record<string, string> = Object.fromEntries(
  Object.entries(SLUG_MAP).map(([cs, en]) => [en, cs]),
);

// Site-relative path for a page, given its Czech slug ("" = homepage).
export function localePath(lang: Lang, csSlug: string): string {
  if (lang === "cs") return csSlug ? `/${csSlug}` : "/";
  return csSlug ? `/en/${SLUG_MAP[csSlug] ?? csSlug}` : "/en";
}

// The same page in the other language, from any pathname. Falls back to the
// other language's homepage for paths without a twin.
export function switchPath(pathname: string, to: Lang): string {
  const isEn = pathname === "/en" || pathname.startsWith("/en/");
  const slug = (isEn ? pathname.slice(3) : pathname).replace(/^\/+|\/+$/g, "");
  const csSlug = isEn ? (slug ? EN_TO_CS[slug] : "") : slug;
  if (csSlug === undefined) return localePath(to, "");
  if (csSlug && !SLUG_MAP[csSlug]) return localePath(to, "");
  return localePath(to, csSlug);
}

// Metadata `alternates` for a page: canonical in its own language plus
// hreflang links to both versions (x-default → Czech, the site default).
export function alternates(lang: Lang, csSlug: string) {
  return {
    canonical: localePath(lang, csSlug),
    languages: {
      cs: localePath("cs", csSlug),
      en: localePath("en", csSlug),
      "x-default": localePath("cs", csSlug),
    },
  };
}

// Small UI strings that live in shared components.
export const UI = {
  cs: {
    updated: "Aktualizováno",
    back: "← Zpět na všechny články",
    ctaFootnote: "Otevře oficiální registraci WHOOP. Je to můj affiliate odkaz.",
    articles: "Články",
    freeMonth: "Měsíc zdarma",
    disclaimer1:
      "Toto je neoficiální osobní blog. Nejsem zaměstnancem společnosti WHOOP, Inc. ani dalších zmíněných značek; s WHOOP mě spojuje jen jejich affiliate program. „WHOOP\" a další názvy jsou ochranné známky příslušných vlastníků.",
    disclaimer2:
      "Odkazy na Whoop jsou affiliate odkazy. Když je použiješ, dostaneš první měsíc zdarma a já od Whoopu provizi. Nic navíc tě to nestojí.",
    todo: "⚠ Doplnit:",
    sleep: "Spánek",
    strain: "Zátěž",
    langLabel: "Jazyk",
    dateLocale: "cs-CZ",
    inLanguage: "cs-CZ",
  },
  en: {
    updated: "Updated",
    back: "← Back to all articles",
    ctaFootnote: "Opens the official WHOOP sign-up. It's my affiliate link.",
    articles: "Articles",
    freeMonth: "Free month",
    disclaimer1:
      "This is an unofficial personal blog. I'm not employed by WHOOP, Inc. or any other brand mentioned here; my only link to WHOOP is their affiliate program. \"WHOOP\" and other names are trademarks of their respective owners.",
    disclaimer2:
      "Links to Whoop are affiliate links. If you use them, you get your first month free and I get a commission from Whoop. It costs you nothing extra.",
    todo: "⚠ To fill in:",
    sleep: "Sleep",
    strain: "Strain",
    langLabel: "Language",
    dateLocale: "en-US",
    inLanguage: "en-US",
  },
} as const;
