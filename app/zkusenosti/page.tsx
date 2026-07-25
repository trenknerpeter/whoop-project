import type { Metadata } from "next";
import { ArticleShell } from "@/components/ArticleShell";
import { TodoNote } from "@/components/Note";
import { JsonLd, articleLd } from "@/lib/jsonld";
import { getArticle } from "@/lib/nav";

const slug = "zkusenosti";
const meta = getArticle(slug)!;
const title = "Whoop deník: zkušenosti po 1, 3 a 6 měsících";
const description =
  "Průběžný deník, jak se moje zkušenost s Whoopem měnila v čase — první dojmy, tři měsíce, půl roku. Aktualizuji každý měsíc.";

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
        kicker="Deník"
        title="Whoop deník: jak se to mění v čase"
        standfirst="Recenze zachytí jeden okamžik. Tenhle deník ukazuje, jak nadšení (nebo zklamání) vydrží — přidávám záznam každý měsíc."
        updated={meta.updated}
        source="diary"
      >
        <p>
          Většina recenzí vznikne po týdnu nošení a tím to skončí. Já si sem
          zapisuju, jak se moje zkušenost vyvíjí dál — protože u předplatného je
          nejdůležitější otázka, jestli mě to bude bavit i za půl roku.
        </p>

        <h2>Po prvním týdnu</h2>
        <p>
          První dny jsou o zvykání, že na zápěstí nic nevidíš. Chytal jsem se
          koukat na Whoop jako na hodinky — marně. Za pár dní ten reflex zmizel a
          začal jsem se místo toho těšit na ranní číslo v appce.
        </p>
        <TodoNote>
          Nahraď reálnými dojmy z prvních dní: co tě překvapilo, co štvalo, jaké
          bylo první Recovery skóre.
        </TodoNote>

        <h2>Po prvním měsíci</h2>
        <p>
          Tady se ukázalo, jestli to má cenu. Data začala dávat smysl, protože
          Whoop poznal můj normál. Nejsilnější moment byl, když skóre správně
          předpovědělo den, kdy jsem se cítil rozlámaně.
        </p>
        <TodoNote>
          Doplň konkrétní zážitek z prvního měsíce a ideálně screenshot trendu.
        </TodoNote>

        <h2>Po třech měsících</h2>
        <TodoNote>
          Tuhle sekci vyplň, až tam budeš. Nech ji zatím prázdnou — deník má
          působit živě a rozepsaně, ne dopsaně dopředu.
        </TodoNote>

        <h2>Po půl roce</h2>
        <TodoNote>
          Sem přijde zásadní verdikt: prodlužuju členství, nebo ne? To je přesně
          to, co čtenáři hledají.
        </TodoNote>

        <p>
          Celkové zhodnocení najdeš v{" "}
          <a href="/whoop-recenze">recenzi Whoopu</a>. A jestli chceš deník
          rovnou zkusit napsat vlastní, <a href="/whoop-zdarma">první měsíc máš
          zdarma</a>.
        </p>
      </ArticleShell>
    </>
  );
}
