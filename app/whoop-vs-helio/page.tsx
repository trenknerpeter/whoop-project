import type { Metadata } from "next";
import { ArticleShell } from "@/components/ArticleShell";
import { CompareTable } from "@/components/CompareTable";
import { Faq, type QA } from "@/components/Faq";
import { AsideNote, TodoNote } from "@/components/Note";
import { JsonLd, articleLd, faqLd } from "@/lib/jsonld";
import { getArticle } from "@/lib/nav";

const slug = "whoop-vs-helio";
const meta = getArticle(slug)!;
const title = "Whoop vs Amazfit Helio Strap: nosil jsem obojí";
const description =
  "Whoop 5.0 s předplatným proti Amazfit Helio Strap za jednorázovou cenu. Srovnání BioCharge vs Recovery, přesnosti, aplikací i reálných nákladů — od někoho, kdo nosil oba přes rok.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `/${slug}` },
  openGraph: { title, description, url: `/${slug}` },
};

const faq: QA[] = [
  {
    q: "Má Amazfit Helio Strap předplatné?",
    a: "Ne. Zaplatíš jednou a všechny funkce v aplikaci Zepp máš zdarma napořád. To je hlavní rozdíl proti Whoopu, který bez členství nefunguje vůbec.",
  },
  {
    q: "Co je BioCharge?",
    a: "Amazfit obdoba Recovery skóre — jedno číslo o tvé energii. Funguje ale jinak: jako palivoměr přes den klesá a doplňuje se spánkem (stejný princip jako Body Battery od Garminu). Whoop Recovery je naopak ranní verdikt spočítaný jednou denně z HRV, klidového tepu a spánku.",
  },
  {
    q: "Je Helio Strap přesný?",
    a: "Na bicepsu měří tep výborně, na zápěstí slabší — pro běžný přehled to stačí, pro intervaly ho přesuň na paži. Délku spánku měří solidně, fáze (REM, probuzení) odhaduje hůř. Amazfit navíc přesnost průběžně zlepšuje aktualizacemi firmwaru.",
  },
  {
    q: "Vyplatí se připlatit za Whoop?",
    a: "Pokud tě zajímá regenerace do hloubky a chceš data, kterým věříš i s interpretací, ano. Pokud chceš základní přehled bez měsíčních plateb, Helio Strap je nejlepší poměr cena/výkon v kategorii.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={articleLd({ slug, title, description, updated: meta.updated })}
      />
      <JsonLd data={faqLd(faq)} />
      <ArticleShell
        kicker="Srovnání"
        title="Whoop vs Amazfit Helio Strap: souboj náramků bez displeje"
        standfirst="Stejný koncept — žádný displej, měření 24/7, ranní verdikt v appce. Úplně jiný obchodní model: Whoop chce předplatné, Helio jednu platbu. Nosil jsem oba, tohle je upřímné srovnání."
        updated={meta.updated}
        source="compare-helio"
      >
        <p>
          Amazfit Helio Strap přišel v létě 2025 s jasnou ambicí: být „Whoop
          killer". Vzal koncept náramku bez displeje a škrtl to, co lidem na
          Whoopu vadí nejvíc — <strong>měsíční předplatné</strong>. Za
          jednorázovou cenu kolem 99 dolarů slibuje 24/7 měření tepu, spánku,
          zátěže i regenerace v aplikaci Zepp, bez jediné další platby.
        </p>
        <p>
          Já jsem Helio Strap nosil přes rok, než jsem přešel na Whoop 5.0.
          Tohle srovnání tedy není z tabulek výrobců — oba náramky znám z
          vlastního zápěstí.
        </p>

        <TodoNote>
          Doplň 2–3 věty o svém setupu: kdy sis Helio pořídil a proč, a
          kdy/proč jsi přešel na Whoop. Plus foto obou náramků vedle sebe —
          to v českém srovnání nemá nikdo.
        </TodoNote>

        <AsideNote title="TL;DR verdikt">
          Helio Strap je nejlepší poměr cena/výkon mezi náramky bez displeje —
          za zlomek ceny Whoopu dostaneš zhruba 80 % funkcí. Whoop si zbylých
          20 % (interpretace dat, vyladěná appka, Recovery, kterému věříš)
          nechává zaplatit předplatným. Otázka nezní „který je lepší", ale
          jestli ti těch 20 % za ty peníze stojí.
        </AsideNote>

        <h2>Kolik to reálně stojí</h2>
        <p>
          Jádro celého srovnání. Helio Strap koupíš jednou a tím to končí.
          Whoop hardware neprodává — platíš členství (náramek je v ceně),
          které začíná zhruba na 199 dolarech ročně za základní tier Whoop
          One; vyšší tiery Peak a Life jsou dražší. Za tři roky nošení je
          rozdíl několikanásobný:
        </p>
        <CompareTable
          headA="Amazfit Helio Strap"
          headB="Whoop 5.0"
          rows={[
            {
              label: "Pořízení",
              a: { text: "~99 USD jednou", tone: "recovery" },
              b: { text: "0 (v ceně členství)" },
            },
            {
              label: "Roční platba",
              a: { text: "Žádná", tone: "recovery" },
              b: { text: "od ~199 USD", tone: "warn" },
            },
            {
              label: "Náklady za 3 roky",
              a: { text: "~99 USD", tone: "recovery" },
              b: { text: "600+ USD", tone: "warn" },
            },
          ]}
        />
        <TodoNote>
          Doplň reálné české ceny: za kolik jsi koupil Helio (Alza?) a kolik
          reálně platíš za Whoop v Kč. Konkrétní čísla v korunách jsou přesně
          to, co český čtenář hledá — a Google to ocení víc než dolary.
        </TodoNote>

        <h2>Hlavní rozdíly na první pohled</h2>
        <CompareTable
          headA="Amazfit Helio Strap"
          headB="Whoop 5.0"
          rows={[
            {
              label: "Model placení",
              a: { text: "Jednorázově", tone: "recovery" },
              b: { text: "Předplatné", tone: "warn" },
            },
            {
              label: "Výdrž baterie",
              a: { text: "~7–10 dní" },
              b: { text: "~14 dní", tone: "recovery" },
            },
            {
              label: "Regenerace",
              a: { text: "BioCharge" },
              b: { text: "Recovery skóre", tone: "recovery" },
            },
            {
              label: "Aplikace",
              a: { text: "Zepp — mladší, občas bugy" },
              b: { text: "Vyladěná", tone: "recovery" },
            },
            {
              label: "Přesnost tepu",
              a: { text: "Na paži výborná", tone: "recovery" },
              b: { text: "Velmi dobrá", tone: "recovery" },
            },
            {
              label: "Hmotnost",
              a: { text: "~20 g", tone: "recovery" },
              b: { text: "~28 g" },
            },
          ]}
        />

        <h2>BioCharge vs Recovery: stejná otázka, jiná filozofie</h2>
        <p>
          Oba náramky odpovídají na stejnou otázku — „kolik toho dnes mám
          dát?" Ale každý úplně jinak. <strong>Whoop Recovery</strong> je
          ranní verdikt: jednou denně se z HRV, klidového tepu a spánku
          spočítá procento, a to ti přes den nikdo nepřepisuje.{" "}
          <strong>BioCharge</strong> funguje jako palivoměr — ráno se naplní,
          přes den klesá a dobije se zase až spánkem. Stejný princip jako
          Body Battery u Garminu.
        </p>
        <p>
          V praxi je to zásadní rozdíl. Ranní Recovery tě učí plánovat den
          dopředu („dnes červená, trénink posunu"). Klesající BioCharge spíš
          popisuje, co se už stalo. A zatímco za Whoop Recovery stojí roky
          publikované vědy kolem HRV, BioCharge je víc „konstrukt" — hezké
          číslo, u kterého nevíš přesně, co znamená.
        </p>
        <TodoNote>
          Sem tvoje zkušenost: sedělo ti BioCharge? Kdy tě zradilo, kdy
          překvapilo? Ideálně screenshot ze Zepp appky vedle Whoop Recovery
          ze stejného rána.
        </TodoNote>

        <h2>Kde vyhrává Helio Strap</h2>
        <ul>
          <li>
            <strong>Cena.</strong> Za tři roky nošení zaplatíš zlomek ceny
            Whoopu. Tohle nejde okecat.
          </li>
          <li>
            <strong>Žádný závazek.</strong> Kupuješ věc, ne službu. Když
            náramek odložíš do šuplíku, přestáváš platit nulu.
          </li>
          <li>
            <strong>Přesnost na paži.</strong> S páskem na bicepsu měří tep
            výborně — srovnatelně s výrazně dražšími zařízeními.
          </li>
          <li>
            <strong>Baterie bez rituálů.</strong> Týden a víc na jedno nabití
            přes USB-C. Žádná powerbanka na zápěstí.
          </li>
        </ul>

        <h2>Kde vyhrává Whoop</h2>
        <ul>
          <li>
            <strong>Interpretace dat.</strong> Whoop neukazuje jen čísla, ale
            říká, co s nimi. Recovery, Strain a spánkový kouč do sebe
            zapadají — Zepp působí spíš jako sada grafů vedle sebe.
          </li>
          <li>
            <strong>Aplikace.</strong> Zepp je funkční, ale znatelně mladší:
            recenzenti (a moje zkušenost) hlásí bugy v synchronizaci, detekci
            tréninků a nastavení zón. Whoop appka je o generaci dál.
          </li>
          <li>
            <strong>Spánkové fáze.</strong> Délku spánku měří Helio solidně,
            ale REM a probuzení odhaduje hůř. Whoop je konzistentnější.
          </li>
          <li>
            <strong>Ekosystém.</strong> Komunity, týmy, healthspan metriky,
            roky dat a vylepšování. Helio nic podobného zatím nemá.
          </li>
        </ul>
        <TodoNote>
          Doplň konkrétní bugy/otravnosti, které jsi za rok se Zepp appkou
          zažil (a co naopak fungovalo dobře). A zmiň suchý zip — recenze mu
          vyčítají nižší kvalitu, jak dopadl u tebe po roce nošení?
        </TodoNote>

        <AsideNote title="Chceš jít do hloubky?">
          Nejpoctivější nezávislý test přesnosti Helio Strapu natočil The
          Quantified Scientist —{" "}
          <a
            href="https://www.youtube.com/watch?v=qVVQd9Lg79s"
            target="_blank"
            rel="noopener noreferrer"
          >
            šestiměsíční vědecká recenze
          </a>{" "}
          se srovnáním proti hrudnímu pásu a EEG čelence. Doporučuju, pokud tě
          zajímají tvrdá data o přesnosti.
        </AsideNote>

        <h2>Co bych koupil dnes</h2>
        <p>
          Když chceš <strong>zjistit, jestli tě data o regeneraci vůbec
          zajímají</strong>, kup Helio Strap. Za cenu pár měsíců Whoopu máš
          náramek napořád a odpověď zjistíš bez závazku. Když už víš, že
          tenhle typ dat používáš každý den a chceš nejlepší interpretaci na
          trhu, jdi do Whoopu — a{" "}
          <a href="/whoop-zdarma">první měsíc máš přes můj odkaz zdarma</a>,
          takže si srovnání uděláš sám a zadarmo.
        </p>
        <p>
          Moji zkušenost s Whoopem po šesti týdnech najdeš v{" "}
          <a href="/whoop-recenze">recenzi Whoop 5.0</a> a kompletní rozpad
          cen v článku <a href="/whoop-cena">kolik stojí Whoop</a>.
        </p>

        <h2>Časté otázky</h2>
        <Faq items={faq} />
      </ArticleShell>
    </>
  );
}
