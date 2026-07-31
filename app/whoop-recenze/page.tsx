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
  "Přesnost tepu, komfort pásku, výdrž 10 dní a jestli roční členství dává smysl oproti jednorázové koupi jako Helio Strap nebo Fitbit Air — úvodní recenze po návratu na tier Peak.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `/${slug}` },
  openGraph: { title, description, url: `/${slug}` },
};

const faq: QA[] = [
  {
    q: "Je Whoop 5.0 přesný?",
    a: "U klidového tepu, spánku a dýchání patří k nejpřesnějším na trhu. Tester the5krunner naměřil korelaci 0,98 s hrudním pásem u běhu, kola i plavání a The Quantified Scientist srovnává wearables proti EKG a laboratornímu spánku, kde Whoop patří k nejlepším. Slabší je při silovém tréninku a HIIT, kdy optický senzor na zápěstí měří tep hůř; vážní sportovci ho proto nosí na bicepsu. Sám jsem dvě zařízení nikdy nenosil zároveň, ale proti Apple Watch, Helio Strapu i Fitbit Air mi při běžném nošení a běhu dává skoro stejná čísla.",
  },
  {
    q: "Vyplatí se Whoop bez displeje?",
    a: "Displej Whoop nemá záměrně — neřeší přehled na zápěstí, ale regeneraci a spánek, a to je jiný účel než u chytrých hodinek. Data se čtou ráno v telefonu. Mně zvykání odpadlo, protože jsem rok před Whoopem nosil Helio Strap, který displej taky nemá. Komu jde právě o čas a notifikace na ruce, tomu tenhle nástroj nic z toho nenahradí.",
  },
  {
    q: "Kolik stojí Whoop v roce 2026?",
    a: "Platí se členství, zařízení je v ceně. One €199 za rok, Peak (s Healthspanem a Stress Monitorem) €264 za rok, Life s EKG a odhadem tlaku €399 za rok. Členství je roční; měsíční platba se otevírá až po odslouženém dvanáctiměsíčním období.",
  },
  {
    q: "Jak dlouho vydrží baterie a jak se nabíjí?",
    a: "Výrobce udává 14+ dní, mně vydrží 10 dní při nošení 24/7 a pravidelném sportu. Peak a Life se dobíjejí bezdrátovým PowerPackem, který se přisune na náramek za nošení, takže se náramek sundávat nemusí a v datech nevznikají mezery. One se dodává s drátovou nabíječkou, u něj to takhle nefunguje.",
  },
  {
    q: "Kdy Whoop spočítá biologický věk?",
    a: "WHOOP Age je součástí tieru Peak a aplikace ho odemkne po 21 zaznamenaných nocích.",
  },
  {
    q: "Pro koho Whoop je a pro koho ne?",
    a: "Sedne tomu, kdo chce sledovat spánek, regeneraci a zátěž a řídit se čísly. Nedává smysl, když chceš hodinky, na které se dá kouknout jedním pohledem, nebo když víš, že tě denní skóre bude spíš stresovat.",
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
        standfirst="Loni jsem Whoop po měsíci odložil jako drahou hračku. Teď ho mám zpátky, na tieru Peak. Tohle jsou dojmy z prvních týdnů; dlouhodobá data si zapisuju do deníku."
        updated={meta.updated}
        source="review"
      >
        <h2>Co Whoop měří</h2>
        <p>
          Whoop nemá displej. Na zápěstí neukáže čas ani kroky a čte se až
          v aplikaci, ráno. Místo ciferníků řeší tři čísla: kolik toho tělo
          zvládlo (Strain), jak se zregenerovalo (Recovery) a jak jsi spal.
        </p>
        <p>
          Loni jsem v tom hodnotu neviděl. Teď po něm chci dvě věci: spánek
          a regeneraci.
        </p>
        <PhotoFigure
          images={[
            {
              src: "/images/whoop-app-home.jpg",
              alt: "Domovská obrazovka Whoop appky: Sleep 95 %, Recovery 36 %, Strain 5.0",
            },
          ]}
          caption="Tři čísla na jedné obrazovce: spánek 95 %, Recovery 36 %, Strain 5.0. Pod nimi věta, proč je Recovery toho dne nižší."
        />

        <h2>Přesnost tepu</h2>
        <p>
          Dvě zařízení jsem nikdy nenosil zároveň, takže žádné měření proti
          měření nemám. Mám za sebou řadu: roky Apple Watch, pak rok Helio
          Strap, pak pár týdnů Fitbit Air vedle Whoopu. Při běžném nošení a při
          běhu mi Whoop dává skoro stejná čísla jako předchozí náramky.
        </p>
        <p>
          Nezávislá měření jdou stejným směrem. Tester{" "}
          <a
            href="https://the5krunner.com/2025/10/31/2026-whoop-5-0-mg-review-discount-accuracy-strain-recovery-athletes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            the5krunner
          </a>{" "}
          naměřil korelaci 0,98 s hrudním pásem u běhu, kola i plavání.
          The Quantified Scientist srovnává wearables proti EKG a laboratornímu
          měření spánku a Whoop u něj patří k nejlepším v tepu i spánkových
          fázích. Slabší je to u činek a HIIT, kdy optický senzor na zápěstí tep
          podhodnocuje; kdo podle tepu řídí silový trénink, nosí Whoop na
          bicepsu.
        </p>
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
          caption="Čísla, ze kterých Recovery vzniká: HRV 18, klidový tep 51, dýchání 17,4 a rozpad spánku."
        />
        <AsideNote title="Kde hledat tvrdá data o přesnosti">
          <a
            href="https://www.quantified.reviews/reviews/devicesiusemyself"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Quantified Scientist
          </a>{" "}
          porovnává wearables proti EKG a laboratornímu spánkovému měření (PSG).
          Je to jediný zdroj, který u téhle kategorie měří proti referenci, ne
          proti jinému náramku.
        </AsideNote>

        <h2>Jak sedí na ruce</h2>
        <p>
          Nosím ho 24/7. Úpletový SuperKnit pásek je proti Helio Strapu výrazně
          příjemnější. Fitbit Air byl taky pohodlný, ale na Whoopu oceňuju něco
          jiného: zapínání. Pásek nikde na druhé straně netrčí, nemůže se sám
          odepnout, a náramek proto působí tenčeji než Fitbit i Helio.
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
          caption="Grafitový SuperKnit pásek Peaku. Konec pásku nikde nepřečnívá, takže se náramek nemá o co zachytit."
        />

        <h2>Dobíjení</h2>
        <p>
          Dobíjení za nošení má Peak a Life, ne základní One. V ceníku se to dá
          snadno přehlédnout. Peak a Life dostávají bezdrátový PowerPack, který
          se přisune na náramek a dobíjí ho na ruce, takže se náramek sundávat
          nemusí. One se dodává se základní drátovou nabíječkou.
        </p>
        <p>
          Výrobce udává výdrž 14+ dní. Mně vydrží 10 dní při nošení 24/7
          a pravidelném sportu. Že se dobíjí na ruce, znamená, že nepřijdu
          o žádná data.
        </p>

        <h2>Aplikace</h2>
        <p>
          Aplikace čísla nejen ukáže, ale přidá k nim větu, co znamenají. Journal
          funguje tak, že si zapisuješ chování (alkohol, stres, doplňky) a Whoop
          pak ukáže, co ti Recovery a HRV táhne nahoru nebo dolů. Stress Monitor
          a Health Monitor jsou součástí Peaku a Life, na One nejsou.
        </p>
        <p>
          S Coachem si píšu pravidelně. Dává tipy a rady a vysvětluje jednotlivá
          skóre a metriky, takže se nemusím doptávat jinde, co které číslo
          znamená.
        </p>
        <p>
          WHOOP Age (Healthspan) je taky na Peaku. Aplikace ho odemkne po 21
          zaznamenaných nocích.
        </p>
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
          caption="Strain 13.7 s rozpadem do tepových zón a týdenní trend zátěže. K číslu vždy jedna věta, co znamenalo."
        />

        <h2>Cena</h2>
        <p>
          Whoop hardware neprodává. Platí se členství a zařízení je v ceně:{" "}
          <strong>One €199 za rok</strong>, <strong>Peak €264 za rok</strong>,{" "}
          <strong>Life €399 za rok</strong>. Life přitom jede na zařízení WHOOP
          MG, ne na 5.0. Na zařízení je celoživotní záruka.
        </p>
        <p>
          Jedna věc, kterou jsem tady měl doteď špatně:{" "}
          <strong>Whoop se neplatí po měsících.</strong> Členství je roční.
          Měsíční platba není běžná varianta při registraci a otevírá se až po
          odslouženém dvanáctiměsíčním období. Není to tedy drobná částka každý
          měsíc, ale jedna roční platba dopředu.
        </p>
        <CompareTable
          headA="Whoop One"
          headB="Whoop Peak"
          rows={[
            {
              label: "Cena za rok",
              a: { text: "€199", tone: "recovery" },
              b: { text: "€264", tone: "warn" },
            },
            {
              label: "Zařízení",
              a: { text: "WHOOP 5.0" },
              b: { text: "WHOOP 5.0" },
            },
            {
              label: "Nabíjení",
              a: { text: "drátová nabíječka", tone: "warn" },
              b: { text: "dobíjení za nošení", tone: "recovery" },
            },
            {
              label: "Recovery, Strain, spánek",
              a: { text: "ano", tone: "recovery" },
              b: { text: "ano", tone: "recovery" },
            },
            {
              label: "WHOOP Coach",
              a: { text: "ano", tone: "recovery" },
              b: { text: "ano", tone: "recovery" },
            },
            {
              label: "Healthspan (WHOOP Age)",
              a: { text: "ne", tone: "warn" },
              b: { text: "po 21 nocích", tone: "recovery" },
            },
            {
              label: "Stress a Health Monitor",
              a: { text: "ne", tone: "warn" },
              b: { text: "ano", tone: "recovery" },
            },
          ]}
        />
        <p>
          Kompletní rozpad v korunách a jednotlivé plány mám v článku{" "}
          <a href="/whoop-cena">kolik stojí Whoop</a>.
        </p>

        <h2>Co mi na tom vadí</h2>
        <ul>
          <li>
            <strong>Platí se dál a pořád.</strong> Žádná jednorázová koupě. Když
            přestaneš platit, přestaneš měřit.
          </li>
          <li>
            <strong>Roztržený chat s Coachem.</strong> Coach se dá otevřít
            z několika míst v aplikaci a nemám pocit, že si mezi sebou drží
            kontext. Když něco řeším a za hodinu otevřu chat odjinud, začínám
            nanovo. Chtěl bych jeden chat, který ví, co už jsme probrali.
          </li>
          <li>
            <strong>Tep u silového tréninku.</strong> Optický senzor na zápěstí
            při činkách a HIIT podhodnocuje, a s ním i Strain. Řešením je nosit
            náramek na bicepsu.
          </li>
          <li>
            <strong>Denní skóre umí zatížit hlavu.</strong> Ranní číslo se dá
            čekat i vyhlížet a u někoho to nadělá víc škody než užitku.
          </li>
          <li>
            <strong>Reputační šrám.</strong> Při startu 5.0 Whoop couvl ze
            slíbených bezplatných upgradů a schytal za to vlnu kritiky. Nakonec
            to částečně napravil.
          </li>
        </ul>

        <h2>Vyplatí se ten příplatek za členství?</h2>
        <p>
          Tohle je pro mě ta skutečná otázka, ne displej. Že je Whoop dražší
          než Helio Strap nebo Fitbit Air, jsem věděl dopředu — oba se koupí
          jednou a tím to končí. Řešil jsem, jestli členství oproti nim něco
          skutečně přidává za tu opakovanou platbu navíc.
        </p>
        <p>
          Po testování obou jsem došel k závěru, že ano. Rozdíl není v tom, co
          náramek naměří; tam si jsou blízké. Je v tom, co Whoop s těmi čísly
          udělá. Insighty a Coach mi dávají oporu, kterou jsem u
          jednorázově koupených náramků neměl, a beru teď Whoop jako nástroj,
          kterému věřím při zlepšování zdraví a dlouhověkosti, ne jako další
          gadget na zápěstí.
        </p>
        <p>Zaplatí se to roční platbou — jednorázová koupě to není a nikdy nebude.</p>
        <p>
          Rozpad ceny v korunách mám v samostatném článku,{" "}
          <a href="/whoop-vs-helio">srovnání s Helio Strapem</a> taky. Jestli to
          chceš zkusit sám, přes můj odkaz máš{" "}
          <a href="/whoop-zdarma">první měsíc zdarma</a>.
        </p>

        <h2>Časté otázky</h2>
        <Faq items={faq} />
      </ArticleShell>
    </>
  );
}
