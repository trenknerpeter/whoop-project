import type { Metadata } from "next";
import { ArticleShell } from "@/components/ArticleShell";
import { Faq, type QA } from "@/components/Faq";
import { AsideNote } from "@/components/Note";
import { JsonLd, faqLd, articleLd } from "@/lib/jsonld";
import { WHOOP_REFERRAL_CODE } from "@/lib/site";

const slug = "whoop-zdarma";
const title = "Whoop na měsíc zdarma: jak na to (2026)";
const description =
  "Přes referral odkaz dostaneš první měsíc členství Whoop zdarma. Vysvětluju, jak to funguje, co za tím je a jaké jsou podmínky.";
const updated = "2026-07-21";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `/${slug}` },
  openGraph: { title, description, url: `/${slug}` },
};

const faq: QA[] = [
  {
    q: "Je měsíc zdarma opravdu zdarma?",
    a: "Ano. Když se zaregistruješ přes referral odkaz, Whoop ti odpustí první měsíc členství. Neplatíš nic navíc a odkaz cenu nezdražuje.",
  },
  {
    q: "Co z toho mám já jako majitel blogu?",
    a: "Když u Whoopu zůstaneš i druhý měsíc, dostanu jako člověk, který tě doporučil, jeden měsíc kreditu na své členství. Proto o Whoopu píšu — je to férová výhra pro oba.",
  },
  {
    q: "Musím kvůli tomu platit celý rok dopředu?",
    a: "Ne nutně. Whoop nabízí měsíční i roční členství. První měsíc zdarma platí bez ohledu na to, který plán zvolíš. Detailní rozpad ceny mám na samostatné stránce.",
  },
  {
    q: "Můžu odkaz použít, když už Whoop mám?",
    a: "Referral je určený pro nové členy. Pokud už aktivní členství máš, tenhle měsíc zdarma se na tebe nevztahuje.",
  },
  {
    q: "Musím kliknout na odkaz, nebo stačí jen kód?",
    a: `Stačí i ručně zadaný kód ${WHOOP_REFERRAL_CODE} při registraci — funguje úplně stejně jako odkaz. Kliknutí na tlačítko je jen pohodlnější, protože se kód přiřadí automaticky.`,
  },
];

export default function Page() {
  return (
    <>
      <JsonLd data={articleLd({ slug, title, description, updated })} />
      <JsonLd data={faqLd(faq)} />
      <ArticleShell
        kicker="Měsíc zdarma"
        title="Whoop na měsíc zdarma — a bez háčků"
        standfirst="Nejčastější důvod, proč lidi hledají slevu nebo promo kód na Whoop. Vysvětlím, jak to reálně funguje, ať víš, do čeho jdeš."
        updated={updated}
        heroCta
        source="money-page"
      >
        <p>
          Whoop nefunguje na obecné slevové kódy jako e-shop — nehledej tedy nic
          jako „SLEVA20", to by nikam nevedlo. Místo toho má{" "}
          <strong>referral program</strong>: každý člen dostane svůj osobní kód
          a odkaz, a když se přes něj přihlásí někdo nový, vydělají na tom oba.
        </p>

        <div className="not-prose my-6 flex flex-wrap items-center gap-3 rounded-2xl bg-surface-muted px-5 py-4">
          <span className="text-sm text-ink-muted">Můj osobní referral kód</span>
          <span className="rounded-lg bg-surface px-3 py-1 font-mono text-lg font-semibold tracking-wide text-ink">
            {WHOOP_REFERRAL_CODE}
          </span>
        </div>

        <h2>Jak to funguje krok za krokem</h2>
        <ul>
          <li>Klikneš na moje referral tlačítko níž (nebo ručně zadáš kód {WHOOP_REFERRAL_CODE} při registraci) a otevře se ti oficiální stránka Whoopu.</li>
          <li>Vybereš si členství a dokončíš registraci — <strong>první měsíc máš zdarma</strong>.</li>
          <li>Náramek Whoop 5.0 je v ceně členství, nekupuješ ho zvlášť.</li>
          <li>Já dostanu měsíc kreditu, jakmile u Whoopu zůstaneš přes druhý měsíc.</li>
        </ul>

        <AsideNote title="Proč tomu věřit">
          Nejsem anonymní kupónový web. Whoop 5.0 reálně nosím a píšu o něm celý
          tenhle blog — recenzi, srovnání i cenu najdeš v menu. Odkaz je můj
          osobní a je to přesně ten, který Whoop generuje v appce.
        </AsideNote>

        <h2>Co je dobré vědět předem</h2>
        <p>
          Whoop je předplatné, ne jednorázový nákup. První měsíc zdarma je fajn
          na vyzkoušení, ale ať víš — po něm už se platí. Než se rozhodneš,
          projdi si můj{" "}
          <a href="/whoop-cena">rozpad ceny v korunách</a> a hlavně{" "}
          <a href="/whoop-recenze">recenzi Whoop 5.0</a>, kde píšu i to,
          komu Whoop nedoporučuju.
        </p>

        <h2>Časté otázky</h2>
        <Faq items={faq} />
      </ArticleShell>
    </>
  );
}
