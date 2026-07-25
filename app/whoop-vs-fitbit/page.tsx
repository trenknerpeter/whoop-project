import type { Metadata } from "next";
import { ArticleShell } from "@/components/ArticleShell";
import { CompareTable } from "@/components/CompareTable";
import { TodoNote } from "@/components/Note";
import { JsonLd, articleLd } from "@/lib/jsonld";
import { getArticle } from "@/lib/nav";

const slug = "whoop-vs-fitbit";
const meta = getArticle(slug)!;
const title = "Whoop vs Fitbit: dva úplně jiné světy";
const description =
  "Fitbit jako všestranné hodinky proti Whoopu zaměřenému na regeneraci. Srovnání od někoho, kdo nosil obojí — kdy má smysl který.";

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
        kicker="Srovnání"
        title="Whoop vs Fitbit: nosil jsem obojí"
        standfirst="Porovnávat je skoro nefér — každé cílí na jiného člověka. Přesto je to nejčastější otázka, tak si to rozebereme."
        updated={meta.updated}
        source="compare-fitbit"
      >
        <p>
          Fitbit jsem nosil dřív než Whoop, takže mám docela dobré srovnání.
          Klíčové je pochopit, že to nejsou konkurenti ve stejné disciplíně:
          Fitbit chce být <strong>všestranné chytré hodinky</strong>, Whoop je{" "}
          <strong>specialista na regeneraci</strong> bez displeje.
        </p>

        <TodoNote>
          Doplň, který Fitbit jsi měl (model) a jak dlouho, plus foto obou na
          ruce. Konkrétní osobní zkušenost je důvod, proč tě Google i čtenář
          bude brát vážně.
        </TodoNote>

        <h2>Rychlé srovnání</h2>
        <CompareTable
          headA="Whoop 5.0"
          headB="Fitbit"
          rows={[
            {
              label: "Displej na zápěstí",
              a: { text: "Nemá", tone: "warn" },
              b: { text: "Má", tone: "recovery" },
            },
            {
              label: "Regenerace",
              a: { text: "Hlavní zaměření", tone: "recovery" },
              b: { text: "Doplněk" },
            },
            {
              label: "Notifikace, čas, kroky",
              a: { text: "Ne" },
              b: { text: "Ano", tone: "recovery" },
            },
            {
              label: "Placení",
              a: { text: "Předplatné", tone: "warn" },
              b: { text: "Nákup + volitelné Premium" },
            },
            {
              label: "Přesnost spánku",
              a: { text: "Velmi dobrá", tone: "recovery" },
              b: { text: "Dobrá" },
            },
          ]}
        />
        <TodoNote>
          Uprav řádky podle konkrétního Fitbit modelu, který jsi měl, a podle své
          zkušenosti — hodnoty jsou orientační.
        </TodoNote>

        <h2>Kdy dává smysl Fitbit</h2>
        <p>
          Když chceš jedno zařízení na všechno — čas, notifikace, kroky, tep,
          základní přehled o spánku — a nechceš platit měsíčně. Pro většinu lidí
          je Fitbit praktičtější každodenní volba.
        </p>

        <h2>Kdy má smysl připlatit za Whoop</h2>
        <p>
          Když už tě základní čísla nebaví a chceš rozumět regeneraci: proč jsi
          unavený, jak tě ovlivnil alkohol, jestli máš trénovat naplno nebo
          odpočívat. To Fitbit takhle neumí. Detaily jsou v mojí{" "}
          <a href="/whoop-recenze">recenzi Whoopu</a> a jestli tě láká Whoop bez
          závazku, <a href="/whoop-zdarma">první měsíc máš zdarma</a>.
        </p>
      </ArticleShell>
    </>
  );
}
