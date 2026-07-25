import type { Metadata } from "next";
import { ArticleShell } from "@/components/ArticleShell";
import { CompareTable } from "@/components/CompareTable";
import { TodoNote } from "@/components/Note";
import { JsonLd, articleLd } from "@/lib/jsonld";
import { getArticle } from "@/lib/nav";

const slug = "whoop-vs-helio";
const meta = getArticle(slug)!;
const title = "Whoop vs Helio Strap: nosil jsem obojí";
const description =
  "Whoop s předplatným proti Helio Strapu bez měsíčních poplatků. Srovnání přesnosti, appky, výdrže a ceny od někoho, kdo měl na ruce oba.";

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
        title="Whoop vs Helio Strap: souboj náramků bez displeje"
        standfirst="Oba slibují to samé — měření regenerace bez displeje na zápěstí. Zásadní rozdíl je v obchodním modelu: Whoop chce předplatné, Helio ne."
        updated={meta.updated}
        source="compare-helio"
      >
        <p>
          Helio Strap je nejčastější alternativa, na kterou lidi u Whoopu
          narazí — protože řeší jeho největší bolístku, tedy měsíční
          předplatné. Měl jsem na zápěstí oba, tak srovnávám z vlastní ruky, ne
          z tabulek výrobce.
        </p>

        <TodoNote>
          Zkontroluj a doplň reálná data: jak moc se lišilo naměřené Recovery /
          tep mezi Whoopem a Heliem u tebe, a přidej foto obou náramků vedle
          sebe. To je přesně to, co u tohoto srovnání nikdo jiný nemá.
        </TodoNote>

        <h2>Hlavní rozdíly na první pohled</h2>
        <CompareTable
          headA="Whoop 5.0"
          headB="Helio Strap"
          rows={[
            {
              label: "Model placení",
              a: { text: "Předplatné", tone: "warn" },
              b: { text: "Bez poplatků", tone: "recovery" },
            },
            {
              label: "Regenerace / Recovery",
              a: { text: "Propracované", tone: "recovery" },
              b: { text: "Základní" },
            },
            {
              label: "Přesnost tepu",
              a: { text: "Velmi dobrá" },
              b: { text: "Dobrá" },
            },
            {
              label: "Výdrž baterie",
              a: { text: "4–5 dní" },
              b: { text: "delší" },
            },
            {
              label: "Ekosystém a appka",
              a: { text: "Vyspělejší", tone: "recovery" },
              b: { text: "Jednodušší" },
            },
          ]}
        />
        <TodoNote>
          Čísla v tabulce jsou orientační — projdi je a uprav podle svojí reálné
          zkušenosti a aktuálních specifikací Helia (výdrž, přesnost).
        </TodoNote>

        <h2>Kde vyhrává Helio</h2>
        <p>
          Jednoznačně cenou. Zaplatíš jednou a měsíčně už nic — což za pár let
          nošení dělá velký rozdíl oproti Whoopu. Pro někoho, kdo chce základní
          přehled o spánku a tepu bez závazku, je to rozumná volba.
        </p>

        <h2>Kde vyhrává Whoop</h2>
        <p>
          Data a jejich interpretace. Whoop ti neukáže jen čísla, ale řekne, co
          s nimi. Recovery skóre, přehled zátěže i analýza spánku jsou o třídu
          dál. Jestli tě zajímá regenerace do hloubky, Whoop je pořád měřítko —
          víc v mojí <a href="/whoop-recenze">recenzi Whoopu</a>.
        </p>

        <h2>Co bych vybral</h2>
        <p>
          Když řešíš hlavně rozpočet a stačí ti přehled, ber Helio. Když chceš
          nejlepší data a nevadí ti platit, ber Whoop — a{" "}
          <a href="/whoop-zdarma">první měsíc máš přes můj odkaz zdarma</a>, takže
          si ho můžeš v klidu osahat, než se rozhodneš.
        </p>
      </ArticleShell>
    </>
  );
}
