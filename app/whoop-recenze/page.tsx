import type { Metadata } from "next";
import { ArticleShell } from "@/components/ArticleShell";
import { CompareTable } from "@/components/CompareTable";
import { Faq, type QA } from "@/components/Faq";
import { AsideNote } from "@/components/Note";
import { PhotoFigure } from "@/components/PhotoFigure";
import { JsonLd, articleLd, faqLd } from "@/lib/jsonld";
import { getArticle } from "@/lib/nav";

const slug = "whoop-recenze";
const meta = getArticle(slug)!;
const title = "Whoop 5.0 recenze: proč jsem se k němu vrátil";
const description =
  "Náramek bez displeje za měsíční předplatné. Přesnost tepu a spánku, jak sedí na ruce, dobíjení za nošení, appka a biologický věk — úvodní recenze po návratu na tier Peak.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `/${slug}` },
  openGraph: { title, description, url: `/${slug}` },
};

const faq: QA[] = [
  {
    q: "Je Whoop 5.0 přesný?",
    a: "U klidového tepu, spánku (délky) a dýchání patří k nejpřesnějším na trhu — potvrzují to i nezávislé testy The Quantified Scientist a recenzované studie. Slabší je při silovém tréninku a HIIT, kdy optický senzor na zápěstí měří tep hůř; vážní sportovci ho proto nosí na bicepsu. Mně tep na kardiu i v klidu seděl naprosto přesně.",
  },
  {
    q: "Vyplatí se Whoop bez displeje?",
    a: "Chybějící displej je záměr — nekoukáš na zápěstí, ráno se podíváš do appky. Když chceš čas, notifikace nebo mapu z běhu na ruce, kup si chytré hodinky. Whoop je pro lidi, kterým jde o regeneraci, spánek a dlouhodobé zdraví, a nevadí jim data číst v telefonu.",
  },
  {
    q: "Kolik stojí Whoop v roce 2026?",
    a: "Platíš členství, ne hardware — náramek je v ceně. Základní tier Whoop One startuje na 199 €/rok, Peak (s biologickým věkem a Stress Monitorem) vyjde na 264 €/rok a nejvyšší Life s EKG a odhadem tlaku na 399 €/rok. Kompletní rozpad v korunách mám v článku kolik stojí Whoop.",
  },
  {
    q: "Jak dlouho vydrží baterie a jak se nabíjí?",
    a: "Whoop udává až 14 dní, recenzenti reálně naměřili spíš 16–18 dní. Nabíjí se přisunutým bezdrátovým powerbankem přímo za nošení, takže náramek nikdy nesundáš — u zařízení, co měří spánek 24/7, je to zásadní.",
  },
  {
    q: "Pro koho je Whoop a pro koho ne?",
    a: "Sedne sportovcům, biohackerům a všem, kdo chtějí optimalizovat výkon, spánek a dlouhověkost a rádi se řídí daty. Nedává smysl, když chceš glanceable chytré hodinky, jsi na začátku a nechceš platit měsíčně, nebo víš, že tě denní skóre bude spíš stresovat.",
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
        kicker="Recenze"
        title="Whoop 5.0: proč jsem se k němu vrátil"
        standfirst="Náramek, který nic neukazuje a k tomu si za něj platíš každý měsíc. Loni jsem ho měl měsíc a odložil. Teď jsem zpátky — na tieru Peak — a tohle je moje úvodní recenze, než naskočí dlouhodobá data."
        updated={meta.updated}
        source="review"
      >
        <p>
          Whoop je zvláštní produkt. Nemá displej, neukáže ti čas ani počet
          kroků na zápěstí a celé to stojí na předplatném — samotný náramek
          dostaneš „zdarma" v ceně členství. První reakce většiny lidí je stejná
          jako moje kdysi byla: <strong>proč bych za tohle platil?</strong> Loni
          jsem ho měl něco přes měsíc, přišlo mi to jako drahá hračka a vrátil
          jsem se k jinému trackeru.
        </p>
        <p>
          Teď jsem zpátky, tentokrát na vyšším tieru <strong>Peak</strong> — a s
          jiným záměrem. Neberu ho jako hodinky, ale jako nástroj na optimalizaci
          výkonu, spánku a zdraví. Tohle je proto <strong>úvodní recenze</strong>:
          moje první dojmy z návratu propojené s tím, na čem se shodují nezávislé
          testy a recenze. Dlouhodobé „po měsíci, po třech" si píšu průběžně do{" "}
          <a href="/zkusenosti">deníku</a>.
        </p>

        <AsideNote title="TL;DR verdikt">
          Whoop není chytrý náramek — je to 24/7 kouč regenerace a spánku pro
          lidi, kterým jde o výkon a zdraví. Přesnost tepu, spánku a dýchání je
          špičková, appka je roky před konkurencí a dobíjení za nošení je paráda.
          Zaplatíš za to měsíčním předplatným a chybějícím displejem. Když chceš
          jen glanceable hodinky nebo tě děsí denní skóre, není pro tebe. Když
          chceš svoje tělo <strong>řídit podle dat</strong>, těžko hledáš lepší.
        </AsideNote>

        <h2>Co Whoop dělá jinak</h2>
        <p>
          Místo notifikací a ciferníků řeší Whoop tři věci: kolik toho tvoje
          tělo zvládne (Strain), jak dobře se zregeneruje (Recovery) a jak spíš.
          Žádný displej je vlastně záměr — nekoukáš na zápěstí, koukáš ráno do
          appky. Je to úplně jiná filozofie než u hodinek: nejde o data
          v reálném čase, ale o klidné ranní vyhodnocení, jak na tom jsi a co
          s tím dělat.
        </p>
        <PhotoFigure
          images={[
            {
              src: "/images/whoop-app-home.jpg",
              alt: "Domovská obrazovka Whoop appky: Sleep 95 %, Recovery 36 %, Strain 5.0",
            },
          ]}
          caption="Celá filozofie na jedné obrazovce: tři signály — spánek, regenerace, zátěž — plus krátké vysvětlení, proč mám dnešní Recovery nižší."
        />

        <h2>Přesnost: tohle je jeho doména</h2>
        <p>
          Tady pro mě Whoop pokaždé vyhrává. Tep v klidu i na kardiu měří tak
          přesně, že jsem ho ani jednou nepřistihl mimo — a nejsem sám.
          Recenzovaná studie porovnávala Whoop proti EKG a našla odchylku tepu
          pod půl procenta a shodu „téměř dokonalou". Nezávislý tester{" "}
          <a
            href="https://the5krunner.com/2025/10/31/2026-whoop-5-0-mg-review-discount-accuracy-strain-recovery-athletes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            the5krunner
          </a>{" "}
          naměřil 0,98 korelaci s hrudním pásem napříč během, kolem i plaváním.
          Slabina přichází až u silového tréninku a HIIT, kde optický senzor na
          zápěstí tep podhodnocuje — vážní sportovci proto Whoop nosí na bicepsu.
        </p>
        <CompareTable
          headA="Nezávislé testy"
          headB="Moje zkušenost"
          rows={[
            {
              label: "Klidový tep",
              a: { text: "Špičková", tone: "recovery" },
              b: { text: "Sedí přesně", tone: "recovery" },
            },
            {
              label: "Tep na kardiu",
              a: { text: "Velmi dobrá", tone: "recovery" },
              b: { text: "Bez chyby", tone: "recovery" },
            },
            {
              label: "Tep při silovém / HIIT",
              a: { text: "Slabší na zápěstí", tone: "warn" },
              b: { text: "Zatím neřeším" },
            },
            {
              label: "Spánek (délka)",
              a: { text: "Silná stránka", tone: "recovery" },
              b: { text: "Věřím mu", tone: "recovery" },
            },
            {
              label: "Spánkové fáze",
              a: { text: "Sporné (jako všude)" },
              b: { text: "Dobré na to, co to je" },
            },
            {
              label: "Dýchání",
              a: { text: "Do jednoho dechu", tone: "recovery" },
              b: { text: "—" },
            },
          ]}
        />
        <PhotoFigure
          images={[
            {
              src: "/images/whoop-app-recovery.jpg",
              alt: "Detail Recovery: HRV 18, klidový tep 51, dýchání 17,4, spánek 95 %",
            },
            {
              src: "/images/whoop-app-sleep.jpg",
              alt: "Detail spánku: 95 % výkon, konzistence, efektivita, spánkový stres",
            },
          ]}
          caption="Čísla, z kterých Recovery vzniká: HRV, klidový tep, dýchání a rozpad spánku. Přesně tyhle metriky nezávislé testy hodnotí jako nejpřesnější."
        />
        <AsideNote title="Chceš tvrdá data o přesnosti?">
          Nejpoctivější nezávislé testy nosí{" "}
          <a
            href="https://www.quantified.reviews/reviews/devicesiusemyself"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Quantified Scientist
          </a>{" "}
          — porovnává wearables proti EKG a laboratornímu spánkovému měření
          (PSG). Whoop u něj patří ke špičce v tepu i spánkových fázích. Moje
          zkušenost s tepem s jeho závěry sedí.
        </AsideNote>

        <h2>Jak vypadá a jak sedí na ruce</h2>
        <p>
          Tohle nečekaně řeším — a Whoop je podle mě nejhezčí tracker na trhu.
          Žádný jiný se tomu nepřibližuje: je to čistý senzor v látkovém pásku,
          bez displeje, bez rušení. Pátá generace je navíc zhruba o 7 % menší a
          lehčí než 4.0. Proti Helio Strapu je decentnější, proti Fitbitu o něco
          větší — pořád ale extrémně sleek. A ten <strong>grafitový úpletový
          pásek</strong> (u Peaku SuperKnit) je tak pohodlný, že je radost ho
          nosit i ve spánku. Prostě na něj zapomeneš.
        </p>
        <PhotoFigure
          images={[
            {
              src: "/images/whoop-wrist.jpg",
              alt: "Whoop 5.0 na zápěstí — grafitový úpletový pásek a kovová spona s logem",
            },
            {
              src: "/images/whoop-strap.jpg",
              alt: "Whoop 5.0 zblízka — samotný senzor v grafitovém SuperKnit pásku",
            },
          ]}
          caption="Grafitový SuperKnit pásek Peaku — bez displeje, jen senzor a úplet. Na ruce ho po chvíli přestaneš vnímat."
        />

        <h2>Dobíjení na zápěstí: malý detail, velký rozdíl</h2>
        <p>
          U zařízení, které měří spánek a regeneraci 24/7, je každá minuta
          sundané ruky ztráta dat. Whoop to řeší elegantně: baterie se dobíjí{" "}
          <strong>přisunutým bezdrátovým powerbankem přímo za nošení</strong> —
          náramek nikdy nemusíš sundat. Samotná výdrž je nejlepší v kategorii:
          Whoop udává až 14 dní, recenzenti reálně naměřili spíš 16–18 dní a
          powerbank sám drží náboj na několik dobití. Nabíjení bez rituálů, bez
          děr v datech.
        </p>

        <h2>Software a insighty: tady je pár let náskok znát</h2>
        <p>
          Hardware zvládne kdekdo, appka ne. Whoop je na trhu roky a je to
          poznat — aplikace je vypilovaná, rychlá a hlavně ti čísla{" "}
          <strong>přeloží do doporučení</strong>. Konkurence (Helio, nováčci)
          teprve dohání, a to hlavně softwarově. Co mě baví nejvíc:
        </p>
        <ul>
          <li>
            <strong>WHOOP Coach.</strong> AI kouč přímo v appce — zeptáš se a
            dostaneš odpověď navázanou na tvoje data a sportovní vědu. Od roku
            2025 si navíc pamatuje kontext v čase.
          </li>
          <li>
            <strong>Journal a behaviors.</strong> Zapíšeš si chování (alkohol,
            stres, doplňky…) a Whoop ti ukáže, co reálně tahá tvoje Recovery a
            HRV nahoru nebo dolů. Tuhle zpětnou vazbu jinde nedostaneš.
          </li>
          <li>
            <strong>Biologický věk (WHOOP Age).</strong> Feature, který mě láká
            asi nejvíc — Whoop z půl roku dat spočítá „fyziologický věk" a tempo
            stárnutí. Je součástí tieru Peak, takže se k němu konečně dostanu.
          </li>
          <li>
            <strong>Stress Monitor a Health Monitor.</strong> Průběžný stres i
            přehled klidového tepu, HRV, dýchání a kožní teploty na jednom místě.
          </li>
        </ul>
        <PhotoFigure
          images={[
            {
              src: "/images/whoop-app-strain.jpg",
              alt: "Detail Strain 13.7 s tepovými zónami, kroky a větou od kouče",
            },
            {
              src: "/images/whoop-app-trends.jpg",
              alt: "Denní aktivity (cycling) a týdenní trend zátěže Strain",
            },
          ]}
          caption="Vedle čísel (Strain, tepové zóny, aktivity) přidá Whoop i větu, co znamenají, a týdenní trendy. Přesně ten kontext, který samotná data nedají."
        />

        <h2>Předplatné a cena</h2>
        <p>
          Jádro každé námitky. Whoop hardware neprodává — platíš členství a
          náramek je v ceně. Základní <strong>Whoop One</strong> startuje na
          199 €/rok, <strong>Peak</strong> (na kterém jsem já) přidává
          biologický věk a Stress Monitor za 264 €/rok a nejvyšší{" "}
          <strong>Life</strong> s EKG a odhadem krevního tlaku vyjde na
          399 €/rok. Za tři čtyři roky se dostaneš na cenu prémiových hodinek —
          jen ti na konci nezůstane hardware.
        </p>
        <CompareTable
          headA="Whoop One"
          headB="Whoop Peak"
          rows={[
            {
              label: "Cena / rok",
              a: { text: "199 €", tone: "recovery" },
              b: { text: "264 €", tone: "warn" },
            },
            {
              label: "Recovery, Strain, spánek",
              a: { text: "Ano", tone: "recovery" },
              b: { text: "Ano", tone: "recovery" },
            },
            {
              label: "WHOOP Coach (AI)",
              a: { text: "Ano", tone: "recovery" },
              b: { text: "Ano", tone: "recovery" },
            },
            {
              label: "Biologický věk",
              a: { text: "Ne", tone: "warn" },
              b: { text: "Ano", tone: "recovery" },
            },
            {
              label: "Stress Monitor",
              a: { text: "Ne", tone: "warn" },
              b: { text: "Ano", tone: "recovery" },
            },
          ]}
        />
        <p>
          Kompletní rozpad v korunách, jednotlivé plány a jak si cenu srazit
          měsíci zdarma mám v článku{" "}
          <a href="/whoop-cena">kolik stojí Whoop</a>.
        </p>

        <h2>Co mi vadí a komu ho nedoporučím</h2>
        <p>
          Ať to nevyzní jako reklama — Whoop má reálné mínusy a je fér je
          pojmenovat:
        </p>
        <ul>
          <li>
            <strong>Předplatné napořád.</strong> Žádná jednorázová koupě.
            Přestaneš platit, přestaneš měřit. Dlouhodobě je to drahé.
          </li>
          <li>
            <strong>Žádný displej.</strong> Na čas nebo notifikaci vždycky
            saháš po telefonu. Pro někoho dealbreaker.
          </li>
          <li>
            <strong>Přesnost u silového tréninku.</strong> Na zápěstí tep při
            HIIT a činkách kolísá — a tím pádem i Strain. Řešení je nosit ho na
            bicepsu, což ne každý chce.
          </li>
          <li>
            <strong>Riziko přeoptimalizace.</strong> Denní skóre umí spustit
            úzkost („proč mám dneska 30 %?"). Když víš, že se v datech ztrácíš,
            zvaž, jestli to chceš na zápěstí 24/7.
          </li>
          <li>
            <strong>Reputační šrám.</strong> Při startu 5.0 Whoop couvl ze
            slíbených bezplatných upgradů a schytal pořádnou vlnu kritiky —
            nakonec to částečně napravil, ale chuť to zanechalo.
          </li>
        </ul>

        <h2>Verdikt: komu se vyplatí</h2>
        <p>
          Po návratu mi dává Whoop smysl přesně tam, kde loni ne — beru ho jako
          nástroj na <strong>výkon, zdraví a dlouhověkost</strong>, ne jako
          gadget. Přesnost tepu a spánku je špičková, appka roky před
          konkurencí, dobíjení za nošení paráda a biologický věk přesně ten typ
          insightu, kvůli kterému to má cenu. Zaplatíš za to předplatným a
          displejem, který nikdy nebude.
        </p>
        <p>
          Než se rozhodneš, projdi si{" "}
          <a href="/whoop-cena">kolik Whoop reálně stojí</a>, a jestli zvažuješ
          alternativu bez předplatného, přečti si{" "}
          <a href="/whoop-vs-helio">srovnání s Helio Strapem</a>. A pokud to
          chceš rovnou zkusit, první měsíc máš{" "}
          <a href="/whoop-zdarma">přes můj odkaz zdarma</a>.
        </p>

        <h2>Časté otázky</h2>
        <Faq items={faq} />
      </ArticleShell>
    </>
  );
}
