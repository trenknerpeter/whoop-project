import type { Metadata } from "next";
import { AgeMastheadBg } from "@/components/AgeMastheadBg";
import { ArticleShell } from "@/components/ArticleShell";
import { Faq, type QA } from "@/components/Faq";
import { PhotoFigure } from "@/components/PhotoFigure";
import { JsonLd, articleLd, faqLd } from "@/lib/jsonld";
import { getArticle } from "@/lib/nav";

const slug = "whoop-age";
const meta = getArticle(slug)!;
const title = "WHOOP Age: co mi ukázal biologický věk po 21 dnech";
const description =
  "Whoop mi po 21 nocích spočítal biologický věk 26,9 proti kalendářním 34,7. Devět metrik, které to číslo skládají, a které ho reálně snižují nebo zvyšují.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `/${slug}` },
  openGraph: { title, description, url: `/${slug}` },
};

const faq: QA[] = [
  {
    q: "Co je WHOOP Age?",
    a: "Odhad fyziologického věku, který appka počítá z devíti metrik napříč spánkem, aktivitou a fitness a porovnává je s odbornými doporučeními pro zdraví. Může vyjít nad i pod kalendářní věk.",
  },
  {
    q: "Čím se liší od Pace of Aging?",
    a: "WHOOP Age vychází z dat za posledních až šest měsíců a mění se pomalu. Pace of Aging se přepočítává každý týden a ukazuje, jakým směrem se WHOOP Age zrovna posouvá.",
  },
  {
    q: "Kdy Whoop biologický věk spočítá?",
    a: "WHOOP Age je součástí tieru Peak a appka ho odemkne po 21 zaznamenaných nocích.",
  },
  {
    q: "Jak snížit biologický věk podle Whoopu?",
    a: "Appka u každé z devíti metrik ukáže, kolik let k věku přidává nebo z něj ubírá, takže je vidět, kde je pákový bod. U mě věk nejvíc snižuje VO2 max (56 ml/kg/min, −3,9 roku) a konzistence spánku (91 %, −2,8 roku); jediná metrika, která mi ho zvyšuje, je silová aktivita na nule (+1,5 roku). Podle Whoopu má z devíti metrik největší váhu VO2 max.",
  },
  {
    q: "Je to číslo přesné?",
    a: "Model sčítá vliv jednotlivých metrik, ale nezachycuje, jak se navzájem ovlivňují, nepočítá s dietou ani stresem a hlásí přesné číslo let bez rozpětí nejistoty. Beru ho proto jako orientační odhad, ne jako lékařskou diagnózu.",
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
        title="WHOOP Age: tři týdny s biologickým věkem"
        standfirst="Appka mi po 21 dnech ukázala WHOOP Age 26,9 proti kalendářním 34,7, tedy 7,8 roku mladší. Letos mi bude 35 a loni jsem se stal otcem; zůstat zdravý a fit na další desítky let mi teď záleží víc než kdy dřív."
        updated={meta.updated}
        source="healthspan"
        mastheadBg={<AgeMastheadBg />}
      >
        <h2>Proč jsem kvůli tomuhle Whoop koupil</h2>
        <p>
          Stárnu stejně jako každý, ale uvnitř chci fungovat podobně jako
          v mladším věku. Otcovství tohle přitlačilo: zdraví a fyzická
          kondice na roky dopředu přestaly být abstraktní plán a staly se
          něčím, co řeším teď. Když jsem viděl, že se tohle dá aspoň
          orientačně měřit, byl to jeden z hlavních důvodů, proč jsem si
          Whoop pořídil.
        </p>

        <h2>Co je WHOOP Age a jak počítá biologický věk</h2>
        <p>
          Healthspan je sekce v appce, která počítá dvě čísla. WHOOP Age je
          Whoopův odhad biologického věku a může vyjít nad i pod tvůj
          kalendářní věk; mění se pomalu, protože vychází z dat za posledních
          až šest měsíců. Pace of Aging je vedle toho týdenní ukazatel směru:
          jak rychle se ten biologický věk zrovna teď mění, něco jako
          tachometr místo staré fotky.
        </p>
        <p>
          Obě čísla staví na devíti metrikách: konzistenci a délce spánku,
          krocích, čase v tepových zónách 1–3 a 4–5, době silové aktivity,
          VO2 max, klidovém tepu a podílu svalové hmoty. U každé z nich má
          Whoop referenční hodnotu odvozenou z odborných doporučení pro
          zdraví, ne z průměru vlastních uživatelů; nad ní metrika věk
          snižuje, pod ní ho zvyšuje. Appka WHOOP Age odemkne po 21
          zaznamenaných nocích.
        </p>

        <h2>Co mi appka po 21 dnech ukázala</h2>
        <p>
          Karta Health mi ukázala 26,9. Vedle ní appka rovnou počítá rozdíl
          proti mému kalendářnímu věku: 7,8 roku mladší. Nikde u toho nebylo
          upozornění, že jde o předběžný odhad; jediné, co appka hlásí, je
          datum dalšího přepočtu (u mě za 4 dny), takže se WHOOP Age zjevně
          aktualizuje týdně, ne až po půl roce.
        </p>
        <p>
          Vedle toho běží druhé číslo, Pace of Aging: 1,0x, beze změny proti
          minulému týdnu. Appka k tomu napsala vlastní shrnutí, „Solid
          Progress": WHOOP Age se mezitýdně zlepšil o 0,3 roku a hlavní
          pákou byl nárůst času v tepových zónách 1 až 3.
        </p>
        <PhotoFigure
          images={[
            {
              src: "/images/whoop-age-overview.jpg",
              alt: "Karta Health: WHOOP Age 26,9, 7,8 years younger, Pace of Aging 1,0x",
            },
            {
              src: "/images/whoop-age-detail.jpg",
              alt: "Detail Healthspan s týdenním shrnutím Solid Progress a datem dalšího přepočtu",
            },
          ]}
          caption="WHOOP Age 26,9 proti kalendářním 34,7 a týdenní shrnutí Solid Progress, které appka napsala sama."
        />

        <h2>Jak přesný ten biologický věk je</h2>
        <p>
          Vím, že to číslo není úplně přesné. Model sčítá vliv jednotlivých
          metrik, ale nezachycuje, jak se navzájem ovlivňují, a hlásí přesné
          číslo let bez rozpětí nejistoty, přestože podkladové poměry rizika
          z výzkumu nejistotu mají. Taky nepočítá s dietou ani emočním
          stresem.
        </p>
        <p>
          I tak mi to číslo dává smysl jako orientační odhad. Řekne mi, že
          dělám něco správně: 26,9 proti kalendářním 34,7 je pro mě signál,
          že moje tělo je biologicky mladší, i kdyby to číslo samo o sobě
          nebylo lékařská diagnóza.
        </p>

        <h2>Co biologický věk snižuje a co ho zvyšuje</h2>
        <p>
          Tohle je pro mě z celé funkce nejdůležitější: appka neukáže jen
          číslo, ale i to, které ze zmíněných devíti vstupů biologický věk
          snižují a které ho zvyšují.
        </p>
        <p>
          VO2 max je ze všech devíti metrik nejsilnějším prediktorem celkové
          úmrtnosti a má v modelu největší váhu; u mě je to taky vidět. Moje
          čísla appka rozepisuje takhle: VO2 max 56 ml/kg/min táhne věk dolů
          o 3,9 roku, konzistence spánku 91 % o 2,8 roku, klidový tep 51 bpm
          o 1,1 roku, čas v tepových zónách 1 až 3 (3:08 h týdně) o 0,7 roku,
          kroky (11 628) o 0,6 roku a délka spánku (7:43 h) o 0,2 roku.
          Jediná metrika, co mi věk zvyšuje, je silová aktivita: 0:00 h za
          týden mi přidává 1,5 roku. Sečteno je to přesně těch 7,8 roku,
          o která appka tvrdí, že jsem mladší.
        </p>
        <p>
          Konzistence spánku přitom neznamená jen kolik hodin spím, ale jak
          pravidelně chodím spát a vstávám; nad určitou hranicí spánku
          záleží pravidelnost víc než jeho délka. Vidět, že tahle metrika mi
          samotná ubírá skoro tři roky, je přesně ten typ důkazu, díky
          kterému chci v rutině pokračovat.
        </p>
        <PhotoFigure
          images={[
            {
              src: "/images/whoop-age-sleep-strain.jpg",
              alt: "Sleep Consistency 91 % (−2,8 roku), Hours of Sleep 7:43 h (−0,2 roku), zóny 1–3 a 4–5",
            },
            {
              src: "/images/whoop-age-fitness.jpg",
              alt: "Strength Activity Time 0:00 h (+1,5 roku), Steps 11 628, VO2 Max 56, RHR 51 bpm",
            },
          ]}
          caption="Rozpad podle metrik: u každé appka rovnou ukáže, kolik let k WHOOP Age přidává nebo ubírá."
        />

        <h2>Silový trénink podle jedné čáry</h2>
        <p>
          U každé metriky appka kreslí vodorovnou linku od nejhorší hodnoty
          po nejlepší a na ní puntíkem ukáže, kde zrovna jsem. U silové
          aktivity jede škála od 0 do 2 hodin týdně a můj puntík sedí úplně
          vlevo, na nule; to je ta jediná metrika, která mi WHOOP Age
          zvyšuje, o 1,5 roku. Nemusím si nic domýšlet: stačí ten puntík
          posunout doprava, a přesně proto si teď dávám za cíl aspoň jeden
          silový trénink týdně.
        </p>
        <PhotoFigure
          aspect="wide"
          images={[
            {
              src: "/images/whoop-age-strength-crop.jpg",
              alt: "Strength Activity Time: puntík na 0:00 h ze škály 0 až 2 hodiny, +1,5 roku",
            },
          ]}
          caption="Škála jde od 0 do 2 hodin týdně. Můj puntík sedí úplně vlevo."
        />

        <h2>Trendová čára pro dlouhý běh</h2>
        <p>
          Appka má i graf WHOOP Age Trend, kde proti sobě jedou dvě linky,
          moje WHOOP Age a kalendářní věk. U mě zatím kreslí čtyři týdny
          zpátky, od 19. července do 16. srpna, a obě linky jsou ploché,
          26,9 proti 34,7, protože tak čerstvá data ještě nemají kam
          kolísat. Stejně plochý je i graf Pace of Aging Trend na 1,0x.
          Zatím z toho čtu hlavně to, že je ta časová osa připravená;
          užitečná bude, až na ní bude víc než jeden bod.
        </p>
        <PhotoFigure
          images={[
            {
              src: "/images/whoop-age-trend.jpg",
              alt: "WHOOP Age Trend a Pace of Aging Trend: obě linky zatím ploché na 26,9 a 1,0x",
            },
          ]}
          caption="WHOOP Age Trend od 19. července do 16. srpna: obě linky zatím ploché, protože data jsou čerstvá."
        />

        <h2>Riziko opačným směrem</h2>
        <p>
          Se svým výsledkem jsem spokojený, a přesně proto mi ta jedna
          metrika, co mě táhne nahoru (silová aktivita na nule, plus 1,5
          roku), dává hlavně chuť s tím něco udělat. Umím si ale představit
          i opačnou situaci: kdybych měl starší většinu grafů, a přitom měl
          pocit, že dělám všechno správně, čekal bych spíš depresi než
          motivaci.
        </p>
        <p>
          Přesně proto mi dává smysl, že appka vždycky vedle výsledku
          ukazuje i to, co ho způsobilo. Ve vlastním interním průzkumu
          Whoopu měli uživatelé, kteří se sami ohodnotili jako „ve špatném
          zdraví", WHOOP Age v průměru zhruba o 5 let vyšší než kalendářní
          věk, a ti v „výborném zdraví" zhruba o 5 let nižší; číslo samo
          o sobě tedy dokáže motivovat i sebrat chuť, podle toho, na které
          straně vyjde.
        </p>
        <p>
          Úvodní dojmy z Whoopu mám v <a href="/whoop-recenze">recenzi</a>,
          rozpad ceny v samostatném článku o tom,{" "}
          <a href="/whoop-cena">kolik Whoop stojí</a>. Jestli to chceš
          zkusit sám, <a href="/whoop-zdarma">první měsíc zdarma</a> máš
          přes odkaz tam.
        </p>

        <h2>Časté otázky</h2>
        <Faq items={faq} />
      </ArticleShell>
    </>
  );
}
