import Link from "next/link";
import { publishedGroups, dealSlug, localized } from "@/lib/nav";
import { localePath, UI, type Lang } from "@/lib/i18n";
import { DEAL, SITE_TEXT } from "@/lib/site";
import { site } from "@/lib/site";
import { JsonLd } from "@/lib/jsonld";
import { HomeHeroVisual } from "@/components/HomeHeroVisual";

const COPY = {
  cs: {
    eyebrow: "Osobní deník",
    h1a: "Tělo mluví.",
    h1b: "Whoop překládá.",
    lead: "Nosím ho každý den a zapisuju, co mi reálně změnil — spánek, tréninky, energii.",
    howTo: "Jak získat měsíc zdarma",
    whyTitle: "Proč tenhle blog",
    why: "Recenze náramků na internetu skoro vždycky píše někdo, kdo daný kus nosil týden a pak ho vrátil. Já je nosím měsíce a srovnávám je mezi sebou na jednom zápěstí. Když ti přes moje odkazy vyjde měsíc Whoopu zdarma, mám z toho radost a od Whoopu provizi.",
  },
  en: {
    eyebrow: "A personal journal",
    h1a: "Your body talks.",
    h1b: "Whoop translates.",
    lead: "I wear it every day and write down what it has actually changed for me — sleep, training, energy.",
    howTo: "How to get a free month",
    whyTitle: "Why this blog",
    why: "Wearable reviews online are almost always written by someone who wore the thing for a week and sent it back. I wear them for months and compare them against each other on the same wrist. If my links get you a free month of Whoop, I'm glad, and I get a commission from Whoop.",
  },
} as const;

export function HomePage({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  const siteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: `${site.url}${localePath(lang, "")}`,
    inLanguage: UI[lang].inLanguage,
    description: SITE_TEXT[lang].description,
    publisher: { "@type": "Person", name: site.author },
  };
  return (
    <>
      <JsonLd data={siteLd} />

      {/*
        Full-bleed hero. The anthracite runs edge to edge, but the copy sits in
        the same `max-w-5xl px-5` container as the header so the two align
        exactly (a vw-based calc would drift by the scrollbar width). The band
        visual is absolutely positioned instead, so it can bleed off the right
        edge without the copy ever running underneath it.
      */}
      <section className="animate-rise relative overflow-hidden bg-anthracite">
        {/* Band visual — positions itself across the hero and bleeds off the
            right edge. Hidden below lg, where the copy carries the hero alone. */}
        <HomeHeroVisual lang={lang} />

        <div className="mx-auto max-w-7xl px-5">
          <div className="relative z-10 flex flex-col justify-center gap-[22px] py-16 lg:min-h-[max(620px,68vh)] lg:max-w-[32rem] lg:py-20 xl:max-w-[40rem]">
            <p
              className="animate-rise font-display text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-blue"
              style={{ animationDelay: "0s" }}
            >
              {c.eyebrow}
            </p>
            <h1
              className="animate-rise font-display text-[clamp(2.125rem,5.6vw,4.25rem)] font-bold leading-[1.04] tracking-[-0.02em] text-balance text-on-dark"
              style={{ animationDelay: "0.1s" }}
            >
              {c.h1a}
              <br />
              {c.h1b}
            </h1>
            <p
              className="animate-rise max-w-[46ch] text-[1.0625rem] leading-relaxed text-pretty text-on-dark-soft"
              style={{ animationDelay: "0.2s" }}
            >
              {c.lead}
            </p>
            <div
              className="animate-rise mt-3.5 flex flex-wrap items-center gap-3.5 sm:flex-nowrap"
              style={{ animationDelay: "0.35s" }}
            >
              <a
                href={`/go?src=${lang === "en" ? "en-" : ""}hero`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-green px-[30px] py-4 font-display text-base font-semibold text-green-ink shadow-[0_10px_30px_-8px_rgba(25,217,146,0.55)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-8px_rgba(25,217,146,0.65)]"
              >
                {DEAL[lang].button}
                <span aria-hidden>→</span>
              </a>
              <Link
                href={localePath(lang, dealSlug)}
                className="inline-flex items-center rounded-full border border-white/[0.22] px-[26px] py-[15px] text-[0.9375rem] font-medium text-[#e8ebee] transition-colors hover:border-white/50 hover:text-on-dark"
              >
                {c.howTo}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 pb-14">
        {/* Article listing, one card per kicker (Recenze, Srovnání, …) so the
            grid doesn't turn into an undifferentiated pile as more articles
            land — a review and a comparison read very differently, and
            should look it before you even click through. */}
        {publishedGroups(lang).map(({ kicker, label, items }) => (
          <section
            key={kicker}
            className="mt-6 rounded-3xl bg-surface px-7 py-9 shadow-widget sm:px-10"
          >
            <h2 className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-blue-deep">
              {label}
            </h2>
            <div className="mt-4 grid gap-x-9 gap-y-8 sm:grid-cols-2">
              {items.map((a) => {
                const l = localized(a, lang);
                return (
                  <Link key={a.slug} href={l.href} className="group block">
                    <h3 className="font-display text-[1.2rem] font-semibold leading-snug text-ink transition-colors group-hover:text-green-deep">
                      {l.title}
                    </h3>
                    <p className="mt-2 text-[0.925rem] leading-relaxed text-ink-muted">
                      {l.excerpt}
                    </p>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}

        {/* Why this blog */}
        <section className="mt-6 rounded-3xl bg-surface px-7 py-9 shadow-widget sm:px-10">
          <h2 className="font-display text-2xl font-semibold text-ink">
            {c.whyTitle}
          </h2>
          <p className="mt-3 max-w-[62ch] leading-relaxed text-prose">
            {c.why} — {site.author}
          </p>
        </section>
      </div>
    </>
  );
}
