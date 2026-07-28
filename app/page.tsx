import Link from "next/link";
import { articles, dealSlug } from "@/lib/nav";
import { site } from "@/lib/site";
import { JsonLd } from "@/lib/jsonld";
import { HomeHeroVisual } from "@/components/HomeHeroVisual";

const siteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  inLanguage: "cs-CZ",
  description: site.description,
  publisher: { "@type": "Person", name: site.author },
};

// Real numbers off Peter's own Whoop, shown as proof rather than marketing.
const chips = [
  { label: "Spánek 95 %", dot: "bg-green" },
  { label: "Zátěž 13.7", dot: "bg-blue" },
  { label: "Klidový tep 51", dot: "bg-on-dark-soft" },
];

export default function Home() {
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
        <HomeHeroVisual />

        <div className="mx-auto max-w-5xl px-5">
          <div className="relative z-10 flex flex-col justify-center gap-[22px] py-16 lg:min-h-[max(620px,68vh)] lg:max-w-[31rem] lg:py-20">
            <p
              className="animate-rise font-display text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-blue"
              style={{ animationDelay: "0s" }}
            >
              Osobní deník
            </p>
            <h1
              className="animate-rise font-display text-[clamp(2.125rem,5.6vw,4.25rem)] font-bold leading-[1.04] tracking-[-0.02em] text-balance text-on-dark"
              style={{ animationDelay: "0.1s" }}
            >
              Tělo mluví.
              <br />
              Whoop překládá.
            </h1>
            <p
              className="animate-rise max-w-[46ch] text-[1.0625rem] leading-relaxed text-pretty text-on-dark-soft"
              style={{ animationDelay: "0.2s" }}
            >
              Nosím Whoop 5.0 každý den — spánek, regenerace, zátěž. Píšu si
              sem, co mi reálně dává, bez marketingových keců.
            </p>
            <div className="mt-1 flex flex-wrap gap-2.5">
              {chips.map((chip, i) => (
                <span
                  key={chip.label}
                  className="animate-rise inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.06] px-4 py-2.5 text-sm font-medium text-on-dark backdrop-blur-[8px]"
                  style={{ animationDelay: `${0.35 + i * 0.15}s` }}
                >
                  <span
                    className={`h-[7px] w-[7px] shrink-0 rounded-full ${chip.dot}`}
                    aria-hidden
                  />
                  {chip.label}
                </span>
              ))}
            </div>
            <div
              className="animate-rise mt-3.5 flex flex-wrap items-center gap-3.5"
              style={{ animationDelay: "0.8s" }}
            >
              <a
                href="/go?src=hero"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-green px-[30px] py-4 font-display text-base font-semibold text-green-ink shadow-[0_10px_30px_-8px_rgba(25,217,146,0.55)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-8px_rgba(25,217,146,0.65)]"
              >
                Aktivovat měsíc zdarma
                <span aria-hidden>→</span>
              </a>
              <Link
                href={`/${dealSlug}`}
                className="inline-flex items-center rounded-full border border-white/[0.22] px-[26px] py-[15px] text-[0.9375rem] font-medium text-[#e8ebee] transition-colors hover:border-white/50 hover:text-on-dark"
              >
                Jak získat měsíc zdarma
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 pb-14">
        {/* Article listing */}
        <section className="mt-6 grid gap-x-9 gap-y-8 rounded-3xl bg-surface px-7 py-9 shadow-widget sm:grid-cols-2 sm:px-10">
          {articles
            .filter((a) => a.published)
            .map((a) => (
              <Link key={a.slug} href={`/${a.slug}`} className="group block">
                <p className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-blue-deep">
                  {a.kicker}
                </p>
                <h2 className="mt-2 font-display text-[1.2rem] font-semibold leading-snug text-ink transition-colors group-hover:text-green-deep">
                  {a.title}
                </h2>
                <p className="mt-2 text-[0.925rem] leading-relaxed text-ink-muted">
                  {a.excerpt}
                </p>
              </Link>
            ))}
        </section>

        {/* Why this blog */}
        <section className="mt-6 rounded-3xl bg-surface px-7 py-9 shadow-widget sm:px-10">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Proč tenhle blog
          </h2>
          <p className="mt-3 max-w-[62ch] leading-relaxed text-prose">
            Recenze náramků na internetu skoro vždycky píše někdo, kdo daný kus
            nosil týden a pak ho vrátil. Já je nosím měsíce a srovnávám je mezi
            sebou na jednom zápěstí. Když ti přes moje odkazy vyjde měsíc Whoopu
            zdarma, mám z toho radost — a měsíc kreditu. — {site.author}
          </p>
        </section>
      </div>
    </>
  );
}
