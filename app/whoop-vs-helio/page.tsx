import type { Metadata } from "next";
import { ArticleShell } from "@/components/ArticleShell";
import { CompareTable } from "@/components/CompareTable";
import { Faq, type QA } from "@/components/Faq";
import { AsideNote } from "@/components/Note";
import { PhotoFigure } from "@/components/PhotoFigure";
import { JsonLd, articleLd, faqLd } from "@/lib/jsonld";
import { getArticle } from "@/lib/nav";

const slug = "whoop-vs-helio";
const meta = getArticle(slug)!;
const title = "Whoop vs Amazfit Helio Strap: nosil jsem obojí";
const description =
  "Rok s Amazfit Helio Strap, pak přechod na Whoop 5.0. Přesnost, BioCharge vs Recovery, hloubka dat vs chytré insighty a reálné náklady v Kč — z vlastního zápěstí.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `/${slug}` },
  openGraph: { title, description, url: `/${slug}` },
};

const faq: QA[] = [
  {
    q: "Kolik stojí Amazfit Helio Strap v ČR?",
    a: "Aktuálně kolem 2 499 Kč (např. Decathlon). Já ho pořizoval zhruba za 100 €. Platíš jednou, žádné měsíční poplatky za základní funkce.",
  },
  {
    q: "Je Helio Strap opravdu bez předplatného?",
    a: "Základní měření a data ano — zaplatíš jednou a máš je napořád. Ale AI koučink a chytřejší rozbory jedou přes prémiové předplatné Zepp Aura. Takže „bez předplatného“ platí pro čísla, ne pro insighty.",
  },
  {
    q: "Co je BioCharge a funguje?",
    a: "Amazfit obdoba Recovery — jedno číslo o energii, které přes den klesá a doplňuje se spánkem (jako Body Battery od Garminu). Mně osobně nikdy nesedlo natolik, abych podle něj plánoval. Whoop Recovery je ranní verdikt z HRV, klidového tepu a spánku a věřím mu víc.",
  },
  {
    q: "Proč jsem nakonec přešel na Whoop?",
    a: "Helio dává skvělá a přesná data, ale neřekne ti, co s nimi. Whoop čísla přeloží do doporučení — má integrovaného AI kouče, vyladěnou appku a věci jako biologický věk. Když ti jde o zdraví a dlouhověkost, ta interpretace za ten příplatek stojí.",
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
        title="Whoop vs Amazfit Helio Strap: nejsou data jako data"
        standfirst="Stejný koncept — žádný displej, měření 24/7, ranní číslo v appce. Úplně jiný obchodní model: Whoop chce předplatné, Helio jednu platbu. Helio jsem nosil přes rok, tohle je upřímné srovnání."
        updated={meta.updated}
        source="compare-helio"
      >
        <p>
          Amazfit Helio Strap přišel v létě 2025 s jasnou ambicí: být „Whoop
          killer". Vzal koncept náramku bez displeje a škrtl to, co lidem na
          Whoopu vadí nejvíc — <strong>měsíční předplatné</strong>. Za
          jednorázovou cenu slibuje 24/7 měření tepu, spánku, zátěže i
          regenerace v aplikaci Zepp, bez dalších plateb.
        </p>
        <p>
          Já jsem Helio Strap nosil přes rok — pořídil jsem ho zhruba za 100 €,
          nosil nonstop a logoval s ním sporty. Pak jsem přešel na Whoop 5.0.
          Tohle srovnání tedy není z tabulek výrobců; oba náramky znám z
          vlastního zápěstí a k Heliu jsem měl upřímně blízko.
        </p>

        <PhotoFigure
          images={[
            {
              src: "/images/helio-strap.png",
              alt: "Amazfit Helio Strap — látkový náramek bez displeje",
            },
          ]}
          caption="Amazfit Helio Strap — žádný displej, jen látkový pásek a senzor. Stejná filozofie jako Whoop."
        />

        <AsideNote title="TL;DR verdikt">
          Helio Strap je skvělý poměr cena/výkon — přesný, s neuvěřitelně
          hlubokými daty z tréninků, a bez předplatného. Jeho slabina není v
          číslech, ale v tom, že ti neřekne, co ta čísla znamenají. A přesně
          tam má Whoop navrch: mění data v doporučení. Otázka nezní „který
          měří líp", ale „chci jen čísla, nebo i to, co s nimi dělat?".
        </AsideNote>

        <h2>Kolik to reálně stojí</h2>
        <p>
          Jádro celého srovnání. Helio Strap koupíš jednou a tím to končí —
          dnes ho pořídíš kolem 2 499 Kč (třeba v Decathlonu). Whoop hardware
          neprodává: platíš členství (náramek je v ceně), které startuje
          zhruba na 199 € ročně za základní tier Whoop One; vyšší tiery Peak a
          Life jsou dražší. Za tři roky nošení je rozdíl obrovský:
        </p>
        <CompareTable
          headA="Amazfit Helio Strap"
          headB="Whoop 5.0"
          rows={[
            {
              label: "Pořízení",
              a: { text: "~2 499 Kč jednou", tone: "recovery" },
              b: { text: "0 (v ceně členství)" },
            },
            {
              label: "Roční platba",
              a: { text: "0 Kč", tone: "recovery" },
              b: { text: "od ~199 €/rok", tone: "warn" },
            },
            {
              label: "Náklady za 3 roky",
              a: { text: "~2 500 Kč", tone: "recovery" },
              b: { text: "~15 000 Kč", tone: "warn" },
            },
          ]}
        />
        <p>
          Za cenu jednoho Helio Strapu tak máš zhruba půl roku Whoopu. To je
          argument, který nejde přejít — a rok jsem díky němu Whoop odkládal.
        </p>

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
              a: { text: "9–10 dní", tone: "recovery" },
              b: { text: "10–14 dní", tone: "recovery" },
            },
            {
              label: "Přesnost tepu",
              a: { text: "Velmi dobrá", tone: "recovery" },
              b: { text: "Velmi dobrá", tone: "recovery" },
            },
            {
              label: "Hloubka dat z tréninku",
              a: { text: "Špičková", tone: "recovery" },
              b: { text: "Slušná" },
            },
            {
              label: "Insighty a doporučení",
              a: { text: "Skoro žádné", tone: "warn" },
              b: { text: "AI kouč", tone: "recovery" },
            },
            {
              label: "Aplikace",
              a: { text: "Zepp — pomalejší sync" },
              b: { text: "Vyladěná", tone: "recovery" },
            },
          ]}
        />

        <h2>V čem je Helio Strap vážně dobrý</h2>
        <p>
          Ať to nevyzní, že Helio jen prohrává — rok jsem ho nosil rád a v pár
          věcech mě upřímně bavil víc, než jsem čekal.
        </p>
        <ul>
          <li>
            <strong>Přesnost tepu.</strong> Tady klobouk dolů — ani jednou
            jsem ho nepřistihl, že by měřil vedle. Naprosto spolehlivé.
          </li>
          <li>
            <strong>Hloubka dat z tréninku.</strong> Tohle mě bavilo nejvíc.
            U běhu jsem viděl délku kroku i kadenci — průměrnou i maximální —
            a fakt jsem to používal. U tenisu to zašlo ještě dál: počítalo to
            údery a rozeznávalo forhend od bekhendu. To je detail, kterým se
            Whoop nechlubí.
          </li>
          <li>
            <strong>Baterie.</strong> Reálně 9–10 dní, i když jsem 3–5× týdně
            logoval sport a nosil ho nonstop. Nabíjení bez rituálů.
          </li>
          <li>
            <strong>Cena.</strong> Za ty peníze prostě není v kategorii nic
            lepšího.
          </li>
        </ul>
        <PhotoFigure
          images={[
            {
              src: "/images/helio-running-detail.jpg",
              alt: "Detail běžeckého tréninku ze Zepp appky: kadence, délka kroku, kroky",
            },
          ]}
          caption="Detail běhu ze Zepp: průměrná i maximální kadence, délka kroku, kroky, převýšení. Takhle hluboko jde Helio u každého tréninku."
        />

        <h2>BioCharge: zajímavý nápad, který mě nepřesvědčil</h2>
        <p>
          BioCharge je Amazfit odpověď na Whoop Recovery — jedno číslo, kolik
          máš „nabito". Filozoficky je ale jinde: funguje jako palivoměr.
          Ráno se naplní, přes den klesá a dobije se až spánkem (stejný
          princip jako Body Battery od Garminu). Whoop Recovery se naopak
          spočítá jednou ráno z HRV, klidového tepu a spánku a přes den se
          nemění.
        </p>
        <p>
          A tady je můj problém: nikdy mi to nesedlo natolik, abych podle toho
          něco dělal. Skoro každé ráno jsem začínal kolem 80 a pak už to
          nesledoval — protože je jasné, že po sportu to spadne a večer jsem
          na dvaceti nebo třiceti. Byl i týden, kdy jsem se ráno budil
          konstantně kolem 30 a vůbec jsem nechápal proč — stejná rutina,
          stejný spánek, a appka mi k tomu neřekla nic. To je celá slabina v
          kostce: <strong>dostal jsem číslo, ale ne důvod ani radu.</strong>
        </p>
        <h2>Kde má Whoop navrch: od čísel k tomu, co s nimi</h2>
        <p>
          Tohle je pro mě celý důvod přechodu. Helio je hluboká, přesná
          databáze o mém těle — ale je to jen databáze. Nadělí ti čísla a dál
          je to na tobě. Whoop čísla čte za tebe a řekne, co je důležité a co
          s tím dělat, abys to udržel nebo zlepšil.
        </p>
        <PhotoFigure
          images={[
            {
              src: "/images/whoop-running-1.jpg",
              alt: "Whoop běh: trasa, tempo a zpráva od AI kouče",
            },
            {
              src: "/images/whoop-running-2.jpg",
              alt: "Whoop běh: zátěž (Strain) a tepové zóny",
            },
          ]}
          caption="Whoop u stejného typu běhu: vedle čísel (Strain, tepové zóny) přidá i větu od AI kouče — „that 26-minute hill run had some real bite to it“. Přesně ten kontext, který Heliu chybí."
        />
        <ul>
          <li>
            <strong>Integrovaný AI kouč.</strong> Whoop má chytrého kouče
            přímo v appce — zeptáš se a dostaneš odpověď navázanou na tvoje
            data. Helio nabízí něco podobného jen přes prémiové předplatné
            Zepp Aura, takže „bez předplatného" u něj platí pro čísla, ne pro
            insighty.
          </li>
          <li>
            <strong>Vyladěná aplikace.</strong> Whoop appka je znatelně
            rychlejší a plynulejší. Zepp funguje, ale synchronizace a
            načítání dat jsou pomalejší a méně uhlazené.
          </li>
          <li>
            <strong>Biologický věk.</strong> V tieru Peak Whoop počítá
            biologický věk — číslo, které mě upřímně láká zjistit a které
            Helio nemá.
          </li>
          <li>
            <strong>Komunita a rozšířenost.</strong> Vidět sportovce, které
            sleduju, s Whoopem a sdílet stejná data mi dává referenci, kde
            vlastně jsem. Helio tuhle síť nemá.
          </li>
        </ul>

        <AsideNote title="Chceš tvrdá data o přesnosti?">
          Nejpoctivější nezávislý test Helio Strapu natočil The Quantified
          Scientist —{" "}
          <a
            href="https://www.youtube.com/watch?v=qVVQd9Lg79s"
            target="_blank"
            rel="noopener noreferrer"
          >
            šestiměsíční vědecká recenze
          </a>{" "}
          se srovnáním proti hrudnímu pásu a EEG čelence. Skvělé, pokud tě
          zajímá přesnost do detailu — moje zkušenost s tepem sedí s jeho
          závěry.
        </AsideNote>

        <h2>Ještě jedna výhoda předplatného, o které se moc nemluví</h2>
        <p>
          Zní to protichůdně, ale členství má i příjemnou stránku. Neřešíš
          záruku ani servis — je to průběžné. A když vyjde nový model náramku,
          dostaneš ho v rámci předplatného, nekupuješ hardware znovu. U Helia
          zaplatíš jednou, ale tím to i končí; když se za dva roky objeví
          lepší verze, kupuješ celý nový kus.
        </p>

        <h2>Co bych koupil dnes</h2>
        <p>
          Když chceš <strong>přesná, syrová a hluboká data</strong> za skvělou
          cenu a insighty si poskládáš sám, Helio Strap je jednička ve své
          třídě — a rok mi dělal radost. Když ti ale jde o{" "}
          <strong>zdraví, dlouhověkost a wellbeing</strong> a chceš, aby ti
          někdo ta čísla přeložil do „co teď", je Whoop i přes cenu nejlepší
          volba — a{" "}
          <a href="/whoop-zdarma">první měsíc máš přes můj odkaz zdarma</a>,
          takže si to porovnáš sám a zadarmo.
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
