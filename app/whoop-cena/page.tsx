import type { Metadata } from "next";
import { ArticleShell } from "@/components/ArticleShell";
import { CompareTable } from "@/components/CompareTable";
import { AsideNote, TodoNote } from "@/components/Note";
import { JsonLd, articleLd } from "@/lib/jsonld";
import { getArticle } from "@/lib/nav";

const slug = "whoop-cena";
const meta = getArticle(slug)!;
const title = "Kolik stojí Whoop v roce 2026 (v Kč)";
const description =
  "Přehled ceny členství Whoop v korunách — měsíční vs roční plán, co je v ceně a jak si náklady snížit měsícem zdarma.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `/${slug}` },
  openGraph: { title, description, url: `/${slug}` },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={articleLd({ slug, title, description, updated: meta.updated })}
      />
      <ArticleShell
        kicker="Průvodce"
        title="Kolik Whoop reálně stojí"
        standfirst="Whoop se neplatí jako hodinky — kupuješ si členství, ne krabičku. Rozebral jsem, co to znamená pro tvoji peněženku."
        updated={meta.updated}
        source="pricing"
      >
        <p>
          Nejčastější zmatek u Whoopu: nekupuješ náramek, platíš{" "}
          <strong>členství</strong> a hardware dostaneš v ceně. Díky tomu je
          vstupní cena nízká, ale platíš dál každý rok. Pojďme na čísla.
        </p>

        <TodoNote>
          Doplň aktuální ceny v Kč přímo z whoop.com pro český/evropský trh —
          měsíční i roční plán. Ceny se mění, proto tu nechávám orientační
          rozpětí, které je potřeba potvrdit.
        </TodoNote>

        <h2>Plány členství</h2>
        <CompareTable
          headA="Měsíční členství"
          headB="Roční členství"
          rows={[
            {
              label: "Platba",
              a: { text: "Každý měsíc" },
              b: { text: "Jednou ročně" },
            },
            {
              label: "Cena za měsíc",
              a: { text: "Vyšší", tone: "warn" },
              b: { text: "Nižší", tone: "recovery" },
            },
            {
              label: "Závazek",
              a: { text: "Krátký", tone: "recovery" },
              b: { text: "Rok" },
            },
            {
              label: "Náramek v ceně",
              a: { text: "Ano", tone: "recovery" },
              b: { text: "Ano", tone: "recovery" },
            },
          ]}
        />

        <AsideNote title="Jak si cenu reálně snížit">
          První měsíc jde získat zdarma přes referral odkaz — to je legální a
          oficiální cesta, jak náklady snížit hned na startu. Detaily mám na
          stránce <a href="/whoop-zdarma">Whoop na měsíc zdarma</a>.
        </AsideNote>

        <h2>Co je a není v ceně</h2>
        <ul>
          <li>Náramek Whoop 5.0 a dobíjecí powerbanka jsou součástí členství.</li>
          <li>Základní pásek je v ceně; barevné a kožené řemínky se doplácí.</li>
          <li>Veškeré funkce v appce (Recovery, spánek, Strain) jsou v členství bez příplatku.</li>
        </ul>

        <h2>Vyplatí se to?</h2>
        <p>
          To záleží, jak moc data využiješ. Můj názor i s tím,
          komu bych Whoop nedoporučil, je v{" "}
          <a href="/whoop-recenze">recenzi Whoopu</a>. A pokud hledáš variantu
          bez měsíčních poplatků, porovnal jsem Whoop s{" "}
          <a href="/whoop-vs-helio">Helio Strapem</a>.
        </p>
      </ArticleShell>
    </>
  );
}
