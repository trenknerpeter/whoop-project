import type { Metadata } from "next";
import { ArticleShell } from "@/components/ArticleShell";
import { AsideNote, TodoNote } from "@/components/Note";
import { JsonLd, articleLd } from "@/lib/jsonld";
import { getArticle } from "@/lib/nav";

const slug = "whoop-recenze";
const meta = getArticle(slug)!;
const title = "Whoop 5.0 recenze: upřímně po 6 týdnech";
const description =
  "Náramek bez displeje za měsíční předplatné. Recovery, spánek, výdrž baterie i to, komu Whoop nedoporučuju — po šesti týdnech každodenního nošení.";

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
        kicker="Recenze"
        title="Whoop 5.0: recenze po šesti týdnech nošení"
        standfirst="Náramek, který nic neukazuje a k tomu si za něj platíš každý měsíc. Zněl mi to jako nesmysl — pak jsem ho šest týdnů nesundal."
        updated={meta.updated}
        source="review"
      >
        <p>
          Whoop je zvláštní produkt. Nemá displej, neukáže ti čas ani počet
          kroků na zápěstí a celé to stojí na předplatném — samotný náramek
          dostaneš „zdarma" v ceně členství. První reakce většiny lidí je stejná
          jako moje byla: <strong>proč bych za tohle platil?</strong> Po šesti
          týdnech mám odpověď a není jednoznačná.
        </p>

        <TodoNote>
          Doplň konkrétní čísla ze své appky: průměrné Recovery za 6 týdnů,
          nejhorší a nejlepší den, kolik hodin spánku ti to naměřilo. Konkrétní
          data z vlastního zápěstí jsou to, co tuhle recenzi odliší od přepsaných
          PR článků.
        </TodoNote>

        <h2>Co Whoop dělá jinak</h2>
        <p>
          Místo notifikací a ciferníků řeší Whoop tři věci: kolik toho tvoje
          tělo zvládne (Strain), jak dobře se zregeneruje (Recovery) a jak spíš.
          Žádný displej je vlastně záměr — nekoukáš na zápěstí, koukáš ráno do
          appky. Mně to po pár dnech přestalo chybět, ale je to zásadní rozdíl
          oproti hodinkám.
        </p>

        <h2>Recovery skóre: nejužitečnější číslo</h2>
        <p>
          Každé ráno dostaneš jedno procento, které shrne, jak jsi na tom.
          Zní to jako marketingová zkratka, ale v praxi mi to sedělo překvapivě
          přesně — po nočním pití nebo špatném spánku šlo skóre dolů dřív, než
          jsem si únavu sám uvědomil. Jak se to počítá a čemu nevěřit rozebírám
          v článku{" "}
          <a href="/jak-funguje-recovery">co znamená Recovery skóre</a>.
        </p>

        <AsideNote title="Komu bych Whoop nedoporučil">
          Pokud chceš na zápěstí vidět čas, notifikace nebo mapu z běhu, kup si
          chytré hodinky. Whoop je pro lidi, které zajímá regenerace a spánek a
          nevadí jim za to platit měsíčně. Pro příležitostného uživatele je to
          drahá zábava.
        </AsideNote>

        <h2>Výdrž baterie a nošení</h2>
        <p>
          Baterie vydrží zhruba čtyři až pět dní a dobíjí se posuvným
          powerbankem přímo za nošení — náramek nikdy nemusíš sundat, což je u
          zařízení měřícího spánek 24/7 celkem podstatné. Pásek je látkový,
          pohodlný i ve spánku a nedře.
        </p>
        <TodoNote>
          Sem patří tvoje reálná zkušenost s výdrží (kolik dní ti to opravdu
          vydrží) a foto dobíjení / náramku na ruce.
        </TodoNote>

        <h2>Stojí Whoop za ty peníze?</h2>
        <p>
          Pro mě po šesti týdnech ano — ale hlavně kvůli spánku a regeneraci,
          ne kvůl sportu samotnému. Než se rozhodneš, projdi si{" "}
          <a href="/whoop-cena">kolik Whoop reálně stojí</a> a jestli chceš
          alternativu bez předplatného, mrkni na{" "}
          <a href="/whoop-vs-helio">srovnání s Helio Strapem</a>. A pokud to
          chceš rovnou zkusit, první měsíc máš{" "}
          <a href="/whoop-zdarma">přes můj odkaz zdarma</a>.
        </p>
      </ArticleShell>
    </>
  );
}
