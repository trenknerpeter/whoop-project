import type { Metadata } from "next";
import { alternates } from "@/lib/i18n";
import { ArticleShell } from "@/components/ArticleShell";
import { Faq, type QA } from "@/components/Faq";
import { HundredDaysMastheadBg } from "@/components/HundredDaysMastheadBg";
import { PhotoFigure } from "@/components/PhotoFigure";
import { JsonLd, articleLd, faqLd } from "@/lib/jsonld";
import { getArticle } from "@/lib/nav";

const slug = "whoop-100-dni";
const meta = getArticle(slug)!;
const title = "Whoop po 100 dnech: spánek, Recovery, HRV a běh";
const description =
  "Sto dní s Whoopem: spánek na 95 až 100 %, Recovery stažené nízkým HRV, mělká data z běhu a mapování cviků, které mi zvedlo Strain z 9,7 na 14,1.";

export const metadata: Metadata = {
  title,
  description,
  alternates: alternates("cs", slug),
  openGraph: { title, description, url: `/${slug}` },
};

const faq: QA[] = [
  {
    q: "Co nejvíc ovlivňuje Recovery u Whoopu?",
    a: "Whoop přesné váhy nezveřejňuje, ale podle vlastního podcastu má HRV v Recovery větší váhu než spánek. U mě to sedí: se spánkem na 100 % a stálým klidovým tepem mě HRV kolem 30 drží ve žluté a kolem 40 posune do zelené.",
  },
  {
    q: "Proč mám červené Recovery, když se cítím dobře?",
    a: "U mě to v září bylo nízké HRV, týdny kolem 18 až 20, zatímco spánek, dech i klidový tep zůstaly stejné. Pak se samo zvedlo a příčinu jsem nenašel.",
  },
  {
    q: "Ukáže Whoop mezičasy, kadenci a délku kroku z běhu?",
    a: "V detailu běhu ve Whoop appce vidím vzdálenost, průměrné tempo a mapu z telefonu. Mezičasy po kilometrech, kadenci a délku kroku mám až ve Stravě, kam se běh z Whoopu propisuje.",
  },
  {
    q: "Ukazuje Whoop aktivní kalorie?",
    a: "Ne, jen celkový denní výdej. U mě je to v průměru kolem 2 000 kalorií. Místo kalorií proto sleduju týdenní Strain a kroky.",
  },
  {
    q: "Jak funguje mapování cviků u silového tréninku?",
    a: "Ve Strength Traineru k tréninku doplníš cviky, opakování a váhy a Whoop z pohybu náramku dopočítá svalovou zátěž do Strainu. Můj kettlebell trénink šel bez namapování na Strain 9,7, s namapovanými swingy, cleany a kliky na 14,1.",
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
        kicker="Život s Whoop"
        title="O 100 dní později"
        standfirst="Sto dní nosím Whoop skoro bez sundání. Spánek mám na 95 až 100 % a náramek mě drží v rutině. Recovery mi ale kvůli nízkému HRV často ukazovalo červenou, i když jsem se cítil dobře."
        updated={meta.updated}
        source="100-days"
        mastheadBg={<HundredDaysMastheadBg />}
      >
        <h2>Co se změnilo</h2>
        <p>
          Whoop mě drží v kázni. Za každý den, kdy rutinu dodržím, dostanu
          ráno číslo, a to funguje jako odměna. Za sto dní se z toho stal
          seznam, který dodržuju skoro bez přemýšlení: jím zdravě, nepiju
          alkohol, cvičím, chodím spát pořád ve stejnou dobu a vstávám ve
          stejnou dobu nebo dřív. Hlavně ale mnohem víc vnímám, co mi dělá
          dobře a co ne.
        </p>
        <p>
          Že pravidelný spánek hraje v celkovém zdraví velkou roli, asi
          nikoho nepřekvapí; u sebe to teď vidím každé ráno v číslech.
        </p>

        <h2>Spánek</h2>
        <p>
          Spím 7,5 až 8 hodin každou noc, chodím spát ve stejnou dobu a často
          mám špunty v uších. Sleep Performance mám proto většinou mezi 95 a
          100 %, často na 99 nebo 100. Whoop má v appce sekci Community se
          skupinami podle zemí; v té české se v týdenním pořadí spánku
          většinou držím kolem první desítky. Tenhle týden jsem jedenáctý
          s 97 %.
        </p>
        <PhotoFigure
          images={[
            {
              src: "/images/whoop-100-sleep-community.jpg",
              alt: "Community, Weekly Sleep Rank: Czech Republic 11. z 4,9 tisíce, Men 30-40 239. z 249,6 tisíce",
            },
          ]}
          caption="Týdenní pořadí spánku: v české skupině 11. místo z 4 900 lidí."
        />

        <h2>Recovery a HRV</h2>
        <p>
          Dechová frekvence je u mě celých sto dní skoro na stejném čísle, 17
          až 17,5. Klidový tep taky: 48 nebo 49, občas 47 nebo 50. Vyskočí
          jen, když jsem lehce nemocný, nebo když si dám pivo, což se stává
          zřídka. Po pivu nebo po pozdním usínání jdou nahoru dech i klidový
          tep, a to je v datech ráno jasně vidět.
        </p>
        <PhotoFigure
          images={[
            {
              src: "/images/whoop-100-rhr-rr.jpg",
              alt: "Týden 1. až 7. 11.: klidový tep 47 až 49, dechová frekvence 17,2 až 17,6",
            },
          ]}
          caption="Běžný týden: klidový tep 47 až 49, dech 17,2 až 17,6."
        />
        <p>
          S HRV je to složitější. Mám ho celkově nízko, běžně 25 až 31.
          V září spadlo na 18 až 20 a drželo se tam celé týdny. Všechno
          ostatní zůstalo stejné: spánek, dech, klidový tep, rutina. Pak se
          HRV z ničeho nic začalo zvedat a dodnes nevím, co jsem udělal
          jinak. Nic jsem neměnil.
        </p>
        <PhotoFigure
          images={[
            {
              src: "/images/whoop-100-hrv-trend.jpg",
              alt: "HRV za 9. 9. až 8. 10.: průměr 23 ms, o 23 % méně než předchozí měsíc s průměrem 30",
            },
          ]}
          caption="Září až začátek října: průměrné HRV 23 ms proti 30 v předchozím měsíci."
        />
        <p>
          Za tu dobu jsem měl řadu červených dnů, kdy jsem se cítil skvěle a
          dělal všechno jako obvykle. Na vlastních číslech vidím, že Recovery
          u mě táhne hlavně HRV: když ráno ukáže kolem 40, jsem v zelené,
          kolem 30 ve žluté. Whoop přesné váhy vstupů nezveřejňuje, ale sám ve
          svém podcastu říká, že spánek má v Recovery menší váhu než HRV, a
          dechová frekvence skóre upraví jen ve dnech, kdy je zvýšená.
        </p>
        <PhotoFigure
          images={[
            {
              src: "/images/whoop-100-recovery-red.jpg",
              alt: "Pátek 2. 10.: Sleep 99 %, Recovery 28 %, Strain 4,2, spánek 8:11",
            },
          ]}
          caption="2. října: spánek 99 %, Recovery 28 %."
        />
        <p>
          Pro někoho, kdo má HRV nízko nebo mu skáče, je proto těžké dostat
          se do zelené, i když spí na 100 %. Občas mi to číslo přijde přísné.
          Možná se v něm odráží stres, který vědomě necítím, ale ráno se
          necítím tak, jak mi Recovery tvrdí.
        </p>

        <h2>Vězeň vlastních čísel</h2>
        <p>
          S kázní přichází i druhá strana. Náramek měří nonstop, takže se mi
          večer v hlavě rozjede počítání: když si dám pivo, rozhodí mi to
          zítřejší čísla? Když půjdu spát o půl hodiny později, spadne mi
          spánkové skóre? Dá se snadno stát příliš závislým na tom, co appka
          ukáže.
        </p>
        <p>
          Funguje to i opačným směrem. Appku otevírám ráno jako první věc.
          Když vidím 100 % spánku a 90 % Recovery, najednou se cítím dobře,
          i kdybych se probudil jen tak napůl.
        </p>
        <p>
          Nedávno jsem slyšel radu od jednoho člověka, který Whoop taky nosí:
          appku otevírá až večer, po celém dni, nikdy ráno. Já to tak
          nedělám, ráno se pořád dívám hned.
        </p>

        <h2>Běh</h2>
        <p>
          Běhy trackuju přes Whoop a beru s sebou telefon. V appce pak vidím
          vzdálenost, průměrné tempo a mapu trasy, protože GPS bere telefon.
          Chybí mi ale mezičasy po kilometrech, délka kroku a kadence.
          Všechno tohle vidím ve Stravě, se kterou mám Whoop propojený.
          Nechápu, proč to nejde přímo v detailu běhu ve Whoop appce; rád
          bych se do toho ponořil bez přepínání.
        </p>
        <PhotoFigure
          images={[
            {
              src: "/images/whoop-100-run-detail-1.jpg",
              alt: "Whoop, běh 7. 10.: Strain 12,6, 4 549 kroků, průběh tepu a čas v zónách 1 až 5",
            },
            {
              src: "/images/whoop-100-run-detail-2.jpg",
              alt: "Whoop, stejný běh: rozmazaná mapa trasy, 5,27 km, tempo 5:55/km, převýšení 105 m, 401 kalorií, průměrný tep 149",
            },
            {
              src: "/images/whoop-100-run-strava.jpg",
              alt: "Strava, stejný běh: mezičasy po kilometrech od 5:41 do 6:08 a graf tempa",
            },
          ]}
          caption="Stejný běh 7. října: Whoop ukáže tep, zóny a průměrné tempo 5:55/km, mezičasy po kilometrech až Strava."
        />

        <h2>Co funguje</h2>
        <p>
          Nosí se mi tak pohodlně, že ho sundávám jen výjimečně. Baterie
          vydrží kolem deseti dní. Trénink rozpozná sám: nedávno jsem si kopal se synem do míče a appka to zapsala jako fotbal, aniž bych cokoli
          zadával.
        </p>
        <p>
          U kettlebell tréninku můžu k záznamu doplnit konkrétní cviky, u mě
          swingy, cleany a kliky s váhami. Funkce se jmenuje Strength
          Trainer: z pohybu náramku odhadne svalovou zátěž a započítá ji do
          Strainu. Jeden trénink mi bez namapování ukázal Strain 9,7, po doplnění cviků 14,1. Navíc z toho vidím, jestli byl trénink víc
          kardio, nebo víc svalový.
        </p>
        <PhotoFigure
          images={[
            {
              src: "/images/whoop-100-kettlebell.jpg",
              alt: "Kettlebell upper body 27. 10.: Strain 14,1, cardio 22 %, muscular 78 %, 7 cviků, 35 sérií, 7 440 kg, 640 opakování",
            },
          ]}
          caption="Kettlebell trénink s namapovanými cviky: Strain 14,1, z toho 78 % svalová zátěž."
        />
        <p>
          A líbí se mi, jak vypadá: pořád si myslím, že je to nejhezčí
          zařízení na trhu, a rád ho nosím. Po sto dnech je to
          spíš návyk než něco, kde bych se každý týden učil něco nového.
        </p>

        <h2>Kalorie, Strain a kroky</h2>
        <p>
          Na Apple Watch jsem si hlídal aktivní kalorie, cíl byl 800 až 900
          denně. Whoop aktivní kalorie neukazuje vůbec, jen celkový výdej,
          u mě v průměru kolem 2 000 denně, a to číslo mi přijde spíš nižší,
          než na co jsem byl zvyklý z Apple Watch. Kalorie proto přestaly být
          metrika, kterou sleduju.
        </p>
        <p>
          Místo nich hlídám Strain za celý týden. Necvičím každý den, ale
          když jsem zdravý, chci se v průměru dostat na 11. A k tomu kroky,
          v průměru 10 000 denně.
        </p>

        <h2>Po sto dnech</h2>
        <p>
          Whoop si nechávám. Jde mi o to, abych rutinu udržel, a náramek mi
          mezitím přirostl k ruce. Zdraví je pro mě důležité, jen si občas
          musím připomenout, že cílem není hezké číslo ráno v appce.
        </p>
        <p>
          Úvodní dojmy mám v <a href="/whoop-recenze">recenzi</a>, rozpad
          ceny v článku o tom, <a href="/whoop-cena">kolik Whoop stojí</a>.
          Jestli to chceš zkusit sám, přes můj odkaz máš{" "}
          <a href="/whoop-zdarma">první měsíc zdarma</a>.
        </p>

        <h2>Časté otázky</h2>
        <Faq items={faq} />
      </ArticleShell>
    </>
  );
}
