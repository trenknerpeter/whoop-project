import type { Metadata } from "next";
import { ArticleShell } from "@/components/ArticleShell";
import { AsideNote, TodoNote } from "@/components/Note";
import { JsonLd, articleLd } from "@/lib/jsonld";
import { getArticle } from "@/lib/nav";

const slug = "jak-funguje-recovery";
const meta = getArticle(slug)!;
const title = "Co znamená Recovery skóre u Whoopu";
const description =
  "HRV, klidový tep a spánek přeložené do jednoho procenta. Jak Recovery skóre Whoop počítá, jak ho číst a čemu u něj nevěřit.";

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
        kicker="Vysvětlení"
        title="Co znamená Recovery skóre — a čemu nevěřit"
        standfirst="Jedno procento ráno, které rozhodne, jestli máš makat nebo odpočívat. Odkud se bere a kdy ho brát s rezervou."
        updated={meta.updated}
        source="recovery"
      >
        <p>
          Recovery skóre je vlajková funkce Whoopu — číslo od 0 do 100 %, které
          ti ráno řekne, jak dobře je tvoje tělo připravené na zátěž. Zelená
          znamená „jeď", žlutá „opatrně", červená „dnes odpočívej". Za tou
          jednoduchostí je ale pár veličin, které stojí za pochopení.
        </p>

        <h2>Z čeho se skóre počítá</h2>
        <ul>
          <li>
            <strong>HRV (variabilita tepu)</strong> — hlavní vstup. Vyšší
            variabilita obvykle znamená lepší regeneraci.
          </li>
          <li>
            <strong>Klidový tep</strong> — když je ráno vyšší než obvykle, tělo
            s něčím bojuje.
          </li>
          <li>
            <strong>Spánek</strong> — kolik a jak kvalitně jsi spal.
          </li>
          <li>
            <strong>Dechová frekvence</strong> — pomáhá odhalit nemoc nebo
            přetížení dřív, než to sám ucítíš.
          </li>
        </ul>

        <AsideNote title="Nejdůležitější slovo: baseline">
          Whoop neporovnává tvoje čísla s populací, ale sám se sebou. Prvních pár
          týdnů se učí tvůj normál, takže skóre na začátku ber s rezervou —
          nabírá teprve data.
        </AsideNote>

        <h2>Čemu nevěřit</h2>
        <p>
          Recovery skóre je skvělý trend, ne absolutní pravda. Jeden červený den
          po náročném tréninku je normální. Špatné je až to, když ti skóre
          padá dlouhodobě. A pozor — dá se „ošálit": klidný den u počítače ti
          skóre zvedne, i když třeba nabíráš nemoc. Vždycky poslouchej i tělo,
          ne jen appku.
        </p>

        <TodoNote>
          Přidej screenshot svého Recovery grafu za pár týdnů a jeden konkrétní
          příběh: den, kdy ti skóre správně (nebo špatně) předpovědělo, jak se
          budeš cítit.
        </TodoNote>

        <h2>Proč je to užitečné</h2>
        <p>
          Pro mě je Recovery hlavní důvod, proč Whoop vůbec nosím — víc v{" "}
          <a href="/whoop-recenze">recenzi Whoop 5.0</a>. Jestli tě to
          láká vyzkoušet, <a href="/whoop-zdarma">první měsíc máš zdarma</a>.
        </p>
      </ArticleShell>
    </>
  );
}
