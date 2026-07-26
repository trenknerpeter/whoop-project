import Link from "next/link";
import { articles, dealSlug } from "@/lib/nav";
import { site } from "@/lib/site";
import { JsonLd } from "@/lib/jsonld";

const siteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  inLanguage: "cs-CZ",
  description: site.description,
  publisher: { "@type": "Person", name: site.author },
};

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-5 pb-14 pt-2">
      <JsonLd data={siteLd} />

      {/* Hero widget: anthracite intro + article grid */}
      <section className="animate-rise overflow-hidden rounded-3xl bg-surface shadow-widget">
        <div className="bg-anthracite px-7 py-12 sm:px-10 sm:py-14">
          <p className="font-display text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-blue">
            Osobní deník
          </p>
          <h1 className="mt-3 max-w-[22ch] font-display text-[2.1rem] font-semibold leading-[1.06] tracking-[-0.02em] text-on-dark sm:text-[2.75rem]">
            Whoop je prostě to nejlepší, co na trhu je.
          </h1>
          <p className="mt-4 max-w-[48ch] text-[1.05rem] leading-relaxed text-on-dark-soft">
            Fitbit, Helio Strap, teď Whoop 5.0. Píšu si sem, co mi který kus
            reálně dal — bez marketingových keců a bez skóre za deset z deseti u
            všeho.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/whoop-recenze"
              className="rounded-full bg-green px-5 py-2.5 font-display text-sm font-semibold text-green-ink transition-transform hover:-translate-y-0.5"
            >
              Přečíst recenzi Whoopu
            </Link>
            <Link
              href={`/${dealSlug}`}
              className="rounded-full border border-[#4a5058] px-5 py-2.5 text-sm font-medium text-[#c9cdd2] transition-colors hover:border-green hover:text-green"
            >
              Jak získat měsíc zdarma
            </Link>
          </div>
        </div>

        <div className="grid gap-x-9 gap-y-8 px-7 py-9 sm:grid-cols-2 sm:px-10">
          {articles.filter((a) => a.published).map((a) => (
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
        </div>
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
  );
}
