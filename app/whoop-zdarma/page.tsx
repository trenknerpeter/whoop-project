import type { Metadata } from "next";
import { ArticleShell } from "@/components/ArticleShell";
import { Faq, type QA } from "@/components/Faq";
import { AsideNote } from "@/components/Note";
import { JsonLd, faqLd, articleLd } from "@/lib/jsonld";

const slug = "whoop-zdarma";
const title = "Whoop na měsíc zdarma: jak na to (2026)";
const description =
  "Přes můj odkaz dostaneš první měsíc členství Whoop zdarma. Vysvětluju, jak to funguje, co za tím je a jaké jsou podmínky.";
const updated = "2026-11-05";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `/${slug}` },
  openGraph: { title, description, url: `/${slug}` },
};

const faq: QA[] = [
  {
    q: "Je měsíc zdarma opravdu zdarma?",
    a: "Ano. Když se zaregistruješ přes můj odkaz, Whoop ti odpustí první měsíc členství. Neplatíš nic navíc a odkaz cenu nezdražuje.",
  },
  {
    q: "Co z toho mám já jako majitel blogu?",
    a: "Jsem v affiliate programu Whoopu, takže když se přes můj odkaz zaregistruješ, Whoop mi zaplatí provizi. Tvoje cena se tím nemění.",
  },
  {
    q: "Musím kvůli tomu platit celý rok dopředu?",
    a: "Ne nutně. Whoop nabízí měsíční i roční členství. První měsíc zdarma platí bez ohledu na to, který plán zvolíš. Detailní rozpad ceny mám na samostatné stránce.",
  },
  {
    q: "Můžu odkaz použít, když už Whoop mám?",
    a: "Měsíc zdarma je pro nové členy. Pokud už aktivní členství máš, nevztahuje se na tebe."
  },
];

export default function Page() {
  return (
    <>
      <JsonLd data={articleLd({ slug, title, description, updated })} />
      <JsonLd data={faqLd(faq)} />
      <ArticleShell
        kicker="Měsíc zdarma"
        title="Whoop na měsíc zdarma — a bez háčků"
        standfirst="Nejčastější důvod, proč lidi hledají slevu nebo promo kód na Whoop. Vysvětlím, jak to reálně funguje, ať víš, do čeho jdeš."
        updated={updated}
        heroCta
        source="money-page"
      >
        <p>
          Whoop nefunguje na obecné slevové kódy jako e-shop — nehledej tedy nic
          jako „SLEVA20", to by nikam nevedlo. Místo toho má{" "}
          <strong>affiliate program</strong>: kdo se zaregistruje přes odkaz
          partnera, má první měsíc členství zdarma. Já v programu jsem a
          tlačítka na tomhle webu vedou na můj odkaz.
        </p>

        <h2>Jak to funguje krok za krokem</h2>
        <ul>
          <li>Klikneš na tlačítko níž a otevře se ti oficiální registrace Whoopu.</li>
          <li>Vybereš si členství a dokončíš registraci — <strong>první měsíc máš zdarma</strong>.</li>
          <li>Náramek Whoop 5.0 je v ceně členství, nekupuješ ho zvlášť.</li>
          <li>Já od Whoopu dostanu provizi z affiliate programu. Tvoje cena se tím nemění.</li>
        </ul>

        <AsideNote title="Proč tomu věřit">
          Nejsem anonymní kupónový web. Whoop 5.0 reálně nosím a píšu o něm celý
          tenhle blog — recenzi, srovnání i cenu najdeš v menu. Odkaz mi přidělil
          Whoop v rámci affiliate programu a vede na jejich oficiální registraci.
        </AsideNote>

        <h2>Co je dobré vědět předem</h2>
        <p>
          Whoop je předplatné, ne jednorázový nákup. První měsíc zdarma je fajn
          na vyzkoušení, ale ať víš — po něm už se platí. Než se rozhodneš,
          projdi si můj{" "}
          <a href="/whoop-cena">rozpad ceny v korunách</a> a hlavně{" "}
          <a href="/whoop-recenze">recenzi Whoop 5.0</a>, kde píšu i to,
          komu Whoop nedoporučuju.
        </p>

        <h2>Časté otázky</h2>
        <Faq items={faq} />
      </ArticleShell>
    </>
  );
}
