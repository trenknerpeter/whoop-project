import type { Metadata } from "next";
import { ArticleShell } from "@/components/ArticleShell";
import { CompareTable } from "@/components/CompareTable";
import { Faq, type QA } from "@/components/Faq";
import { AsideNote } from "@/components/Note";
import { PhotoFigure } from "@/components/PhotoFigure";
import { FitbitMastheadBg } from "@/components/FitbitMastheadBg";
import { JsonLd, articleLd, faqLd } from "@/lib/jsonld";
import { getArticle } from "@/lib/nav";

const slug = "whoop-vs-fitbit";
const meta = getArticle(slug)!;
const title = "Whoop vs Fitbit Air: casual náramek vs data do hloubky";
const description =
  "Google Fitbit Air je taky náramek bez displeje — jen mnohem casual. Komfort, výdrž baterie, přesnost tepu a spánku, tlačení AI kouče a reálná cena v Kč. Nosil jsem ho vedle Whoopu 5.0.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `/${slug}` },
  openGraph: { title, description, url: `/${slug}` },
};

const faq: QA[] = [
  {
    q: "Kolik stojí Fitbit Air v ČR?",
    a: "Samotný náramek pořídíš zhruba za 2 500 Kč (kolem 100 €) a platíš jednou. AI kouč a hlubší rozbory ale jedou přes předplatné Premium za 2 999 Kč ročně. „Bez předplatného“ tak platí jen pro základní čísla.",
  },
  {
    q: "Je Fitbit Air náramek bez displeje jako Whoop?",
    a: "Ano. Je to látkový pásek se senzorem, žádný displej — filozofií blízko Whoopu i Amazfit Helio. Rozdíl je v zaměření: Fitbit Air je casual a lifestyle, míří na běžný přehled, ne na data do hloubky.",
  },
  {
    q: "Jak přesně měří tep a spánek?",
    a: "Spánek mi seděl dobře a čísla byla velmi podobná tomu, co mi dával Amazfit Helio. Tep mě ale nepřesvědčil — u tréninků jsem viděl odchylky a na vážný intervalový nebo silový trénink bych na něj nespoléhal.",
  },
  {
    q: "Vyplatí se Premium za 2 999 Kč ročně?",
    a: "Dostaneš hlavně AI kouče a chytřejší insighty. Bez Premium máš odhadem 70–80 % funkcí. Za „jen“ AI kouče je to dost peněz — záleží, jestli ti jeho rady reálně změní chování. Whoop má kouče i biologický věk v ceně členství.",
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
        title="Whoop vs Fitbit Air: nejsou náramky jako náramky"
        standfirst="Google vydal vlastní náramek bez displeje, Fitbit Air. Stejná forma jako Whoop, jen mnohem casual: nejpohodlnější kus, co jsem nosil, ale mělčí data a AI kouč až za předplatné. Nosil jsem ho pár týdnů vedle Whoopu 5.0."
        updated={meta.updated}
        source="compare-fitbit"
        mastheadBg={<FitbitMastheadBg />}
      >
        <p>
          Fitbit jsem měl v hlavě zaškatulkovaný jako hodinky s displejem,
          proto mě Fitbit Air překvapil. Google s ním vlezl přesně do
          kategorie, kterou vymyslel Whoop: <strong>náramek bez displeje</strong>,
          látkový pásek, senzor na spodní straně a všechno se čte až v aplikaci.
          Stejný koncept jako Whoop nebo Amazfit Helio, jen za jednorázových
          zhruba 100 €.
        </p>
        <p>
          Nosil jsem ho pár týdnů vedle Whoopu 5.0, takže tohle není z tabulek
          výrobce. Nejdřív dobrá zpráva: <strong>komfort je špička</strong>.
        </p>

        <PhotoFigure
          images={[
            {
              src: "/images/fitbit1.jpg",
              alt: "Rozbalený Google Fitbit Air — krabička, látkový náramek a nabíjecí kabel",
            },
            {
              src: "/images/fitbit-wrist.jpg",
              alt: "Fitbit Air na zápěstí vedle krabičky a nabíječky",
            },
          ]}
          caption="Google Fitbit Air: látkový náramek bez displeje, senzorový modul a magnetická nabíječka. Stejná filozofie jako Whoop — všechno se odehrává až v appce."
        />

        <AsideNote title="TL;DR verdikt">
          Fitbit Air je nejpohodlnější a nejvíc „casual“ ze všech náramků bez
          displeje — malý, lehoučký, ideál pro lifestyle uživatele, co chce
          jemný přehled, ne datovou laboratoř. Slabší je ale v tom, na čem
          záleží: tep mi nepřišel přesný, sporty měří jen základ a skutečné
          insighty schová za Premium za 2 999 Kč ročně, což je za „jen“ AI kouče
          dost. Když chceš data do hloubky a rady, kterým věříš, pořád vede
          Whoop.
        </AsideNote>

        <h2>Nejpohodlnější kus z celé kategorie</h2>
        <p>
          Tohle je jednoznačné plus. Fitbit Air je{" "}
          <strong>opravdu malý a lehký</strong> — na ruce ho po pár minutách
          přestaneš vnímat, ve spánku i při sportu. Whoop 5.0 taky není žádná
          cihla, ale senzorový modul Fitbitu je subtilnější a látkový pásek sedí
          mírně líp. Když ti vadí cokoli na zápěstí, tady se ti bude nosit
          nejlíp z celé trojice.
        </p>

        <h2>Rychlé srovnání</h2>
        <CompareTable
          headA="Fitbit Air"
          headB="Whoop 5.0"
          rows={[
            {
              label: "Displej na zápěstí",
              a: { text: "Nemá" },
              b: { text: "Nemá" },
            },
            {
              label: "Komfort a hmotnost",
              a: { text: "Nejlehčí", tone: "recovery" },
              b: { text: "Lehký" },
            },
            {
              label: "Výdrž baterie",
              a: { text: "5–7 dní", tone: "warn" },
              b: { text: "10–14 dní", tone: "recovery" },
            },
            {
              label: "Přesnost tepu",
              a: { text: "Průměrná", tone: "warn" },
              b: { text: "Velmi dobrá", tone: "recovery" },
            },
            {
              label: "Přesnost spánku",
              a: { text: "Dobrá", tone: "recovery" },
              b: { text: "Velmi dobrá", tone: "recovery" },
            },
            {
              label: "Sporty do hloubky",
              a: { text: "Jen základ", tone: "warn" },
              b: { text: "Slušná + AI kouč", tone: "recovery" },
            },
            {
              label: "Zaměření",
              a: { text: "Casual / lifestyle" },
              b: { text: "Regenerace do hloubky", tone: "recovery" },
            },
            {
              label: "AI kouč a insighty",
              a: { text: "Až za Premium", tone: "warn" },
              b: { text: "V ceně členství", tone: "recovery" },
            },
          ]}
        />

        <h2>Baterie: 5–7 dní, znatelně míň</h2>
        <p>
          Tady Fitbit Air ztrácí. Reálně jsem se dostal na{" "}
          <strong>5 až 7 dní</strong> na nabití — použitelné, ale znatelně míň
          než Whoop (10–14 dní) i Helio (9–10 dní). U náramku, který má hlavní
          smysl v tom, že ho nosíš nonstop a i ve spánku, je každé nabíjení
          navíc otravné. Není to dealbreaker, ale je to o třídu horší než
          konkurence.
        </p>

        <h2>Přesnost: tep mě nepřesvědčil, spánek jo</h2>
        <p>
          Rozdělil bych to na dvě části.{" "}
          <strong>Tep mi nepřišel super přesný</strong> — u tréninků jsem viděl
          odchylky a hodnoty, které mi neseděly s tím, co jsem cítil. Na běžný
          denní přehled to stačí, ale na vážnější intervalový nebo silový
          trénink bych na něj nespoléhal. Pro srovnání: u Helia i Whoopu mi tep
          seděl výrazně líp.
        </p>
        <p>
          <strong>Spánek naopak potěšil.</strong> Fáze i celková doba mi dávaly
          smysl a čísla byla{" "}
          <strong>velmi podobná tomu, co mi ukazoval Amazfit Helio</strong> —
          což beru jako dobré vysvědčení. Když je pro tebe hlavní metrika spánek
          a klid, Fitbit Air tuhle část zvládá slušně.
        </p>
        <PhotoFigure
          images={[
            {
              src: "/images/fitbit-sensor.jpg",
              alt: "Spodní strana Fitbit Air se senzorovým modulem a optickými snímači",
            },
          ]}
          caption="Senzorový modul na spodní straně. Optické měření zvládá spánek dobře, u tepu při zátěži jsem ale narazil na odchylky."
        />

        <h2>AI kouč všude — až moc</h2>
        <p>
          Něco, co nešlo přehlédnout: Fitbit Air <strong>hodně tlačí AI kouče</strong>.
          Je na úvodní obrazovce appky, vyskakuje v kartách, láká tě na „Ask
          Coach“ prakticky na každém kroku. Chápu záměr — je to hlavní
          prodejní argument Premium — ale mně to přišlo{" "}
          <strong>až moc dotěrné</strong>. Chci si otevřít appku, mrknout na
          čísla a jít dál, ne pořád odklikávat pobídky k pokecu s koučem.
        </p>
        <PhotoFigure
          images={[
            {
              src: "/images/Fitbit-app.jpg",
              alt: "Domovská obrazovka Fitbit appky: Readiness skóre, spánek, kroky, kardio a tlačítko Ask Coach",
            },
          ]}
          caption="Domovská obrazovka: Readiness skóre, spánek, kardio, kroky — a všudypřítomné „Ask Coach“. Nahoře i cedulka Premium, protože ty chytřejší věci jsou placené."
        />
        <p>
          Whoop má kouče taky, ale je vevnitř: zeptáš se, když chceš, a dostaneš
          odpověď navázanou na svoje data. Nemám pocit, že by po mně skákal.
        </p>

        <h2>Casual first: skvělé pro lifestyle, málo do hloubky</h2>
        <p>
          Tohle je jádro celé identity Fitbit Airu.{" "}
          <strong>Působí mnohem víc casual</strong> než Whoop nebo Helio — je to
          náramek pro člověka, co chce zdravější rutinu, jemné popíchnutí a
          přehledné skóre, ne surová data k rozboru. Pro lifestyle uživatele je
          to sympatická, přístupná volba.
        </p>
        <p>
          Zpětná strana mince: <strong>chybí hloubka</strong>. Kde ti Whoop
          rozebere zátěž (Strain), regeneraci a{" "}
          <a href="/whoop-age">biologický věk</a> a Helio nasype
          detaily z tréninku, tam Fitbit Air zůstává u povrchu. Dostaneš hezký
          přehled, ale ne úroveň dat, podle které bys ladil formu.
        </p>

        <h2>Sporty jen na základ</h2>
        <p>
          Sportovní tracking je slabší, než jsem čekal. U běhu ti dá{" "}
          <strong>základ</strong> — tep, čas, kalorie — ale{" "}
          <strong>hlubší insighty chybí</strong>. Žádná kadence, délka kroku
          ani rozbor, který by běžci reálně pomohl. Helio mě přesně tímhle
          bavil (u běhu kadence a délka kroku, u tenisu i počítání úderů) a
          Whoop zase přidá zátěž, tepové zóny a větu od kouče. Fitbit Air je
          proti nim v tomhle chudší — na příležitostný sport fajn, na trénink s
          ambicí ne.
        </p>

        <h2>Kolik to reálně stojí</h2>
        <p>
          Cena je našoško sympatická: samotný náramek pořídíš zhruba za{" "}
          <strong>100 € (kolem 2 500 Kč) a platíš jednou</strong>. Za to podle
          mě dostaneš odhadem 70–80 % toho, co náramek umí — základní čísla o
          tepu, spánku, aktivitě a Readiness. Háček je v tom zbytku: AI kouč a
          chytřejší insighty jsou <strong>až za Premium, které stojí 2 999 Kč
          ročně</strong>. A to je za „jen“ AI kouče docela dost.
        </p>
        <CompareTable
          headA="Fitbit Air"
          headB="Whoop 5.0"
          rows={[
            {
              label: "Pořízení",
              a: { text: "~2 500 Kč jednou", tone: "recovery" },
              b: { text: "0 (v ceně členství)" },
            },
            {
              label: "Předplatné",
              a: { text: "Premium ~2 999 Kč/rok (volitelné)", tone: "warn" },
              b: { text: "od ~199 €/rok", tone: "warn" },
            },
            {
              label: "3 roky bez AI",
              a: { text: "~2 500 Kč", tone: "recovery" },
              b: { text: "~15 000 Kč", tone: "warn" },
            },
            {
              label: "3 roky s AI koučem",
              a: { text: "~11 500 Kč", tone: "warn" },
              b: { text: "~15 000 Kč (kouč v ceně)", tone: "warn" },
            },
          ]}
        />
        <p>
          Když ti stačí základní přehled, je Fitbit Air výrazně levnější a rozdíl
          proti Whoopu obrovský. Jakmile ale chceš to, kvůli čemu si podobný
          náramek většina lidí pořizuje — rady a interpretaci — rozdíl se smrskne
          a musíš si připlácet každý rok.
        </p>

        <h2>Kdy Fitbit Air a kdy Whoop</h2>
        <p>
          Fitbit Air si vezmi, když chceš{" "}
          <strong>nejpohodlnější, casual náramek</strong> na denní přehled o
          spánku a aktivitě, líbí se ti ekosystém Googlu a jednorázová cena — a
          nevadí ti mělčí data ani dotěrný kouč. Pro lifestyle uživatele je to
          fajn vstupenka do světa náramků bez displeje.
        </p>
        <p>
          Whoop dává smysl, když ti jde o{" "}
          <strong>zdraví, regeneraci a data do hloubky</strong> a chceš, aby ti
          někdo čísla přeložil do „co teď“ — přesnější tep, rozbor zátěže,
          biologický věk a kouč v ceně. Jak to vidím po delším nošení, píšu v{" "}
          <a href="/whoop-recenze">recenzi Whoop 5.0</a>; kdo řeší spíš
          jednorázovou cenu bez předplatného, tomu doporučím mrknout i na{" "}
          <a href="/whoop-vs-helio">srovnání s Amazfit Helio Strap</a>. A jestli
          tě Whoop láká, <a href="/whoop-zdarma">první měsíc máš přes můj odkaz
          zdarma</a> — porovnáš si to sám a zadarmo.
        </p>

        <h2>Časté otázky</h2>
        <Faq items={faq} />
      </ArticleShell>
    </>
  );
}
