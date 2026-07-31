# Z konceptu na stránku

**Nejdřív podmínka:** dokud je v konceptu jediná značka `[[PETR:`, stránka se
neskládá. Doplní je Petr, ne ty.

```bash
grep -n '\[\[PETR' docs/drafts/<slug>.md   # musí být prázdné
```

Nic z níže uvedeného není potřeba vymýšlet — všechno na webu už existuje a
používá se konzistentně. Vzorem je `app/whoop-recenze/page.tsx`.

## Skelet

Stránka je `app/<slug>/page.tsx`, server komponenta bez `"use client"`.

```tsx
const slug = "whoop-cena";
const meta = getArticle(slug)!;      // z @/lib/nav — padá schválně, když chybí zápis
const title = "…";                    // <title>, jinak než H1
const description = "…";              // meta description, ~150 znaků

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `/${slug}` },
  openGraph: { title, description, url: `/${slug}` },
};
```

`ArticleShell` (`components/ArticleShell.tsx`) obaluje celý text:

| Prop | Co do něj patří |
|---|---|
| `kicker` | `Recenze` / `Srovnání` / `Průvodce` / `Vysvětlení` / `Deník` — shodně s `nav.ts` |
| `title` | H1 v masthead, kratší a jinak formulovaný než `metadata.title` |
| `standfirst` | perex z konceptu, do ~46 znaků na řádek se vejdou tři řádky |
| `updated` | ISO datum, bere se z `meta.updated`; formátuje se samo do `cs-CZ` |
| `source` | klíč pro referral tracking, drží se slugu (`review`, `compare-helio`, `diary`) |
| `heroCta` | `true` jen na konverzních stránkách — CTA nad ohybem |
| `mastheadBg` | volitelná dekorace bez textu (viz `HelioMastheadBg`, `FitbitMastheadBg`) |

## Komponenty v textu

- `CompareTable` — `headA` / `headB` a `rows` s `label`, `a`, `b`. Buňka má `text`
  a volitelný `tone` (`recovery` = dobré, `warn` = pozor). **Text nese měření,
  hodnocení dělá `tone`** — viz tabulka v `hlas.md`.
- `PhotoFigure` — `images` (jedna nebo dvě, každá `src` + povinný `alt`) a `caption`.
  Popisek je próza a platí pro něj stejná pravidla jako pro text.
- `Faq` + typ `QA` — pole `{ q, a }`. Musí jít i do `faqLd` (níže).
- `AsideNote` — vsuvka s `title`. `TodoNote` značí nedopsanou část, na publikované
  stránce nemá co dělat.

## SEO plumbing

```tsx
<JsonLd data={articleLd({ slug, title, description, updated: meta.updated })} />
<JsonLd data={faqLd(faq)} />   // jen když stránka FAQ má
```

Oboje z `@/lib/jsonld`. Stejné `faq` pole slouží komponentě i strukturovaným datům —
nesmí se rozejít.

## Registrace

Nový článek potřebuje zápis v `articles` v `lib/nav.ts`, jinak `getArticle` vrátí
`undefined` a stránka spadne při buildu:

```ts
{
  slug: "whoop-cena",
  title: "…",        // do výpisu na homepage, může být jinak než H1
  nav: "Cena",       // do hlavičky
  kicker: "Průvodce",
  excerpt: "…",      // 1–2 věty do gridu
  updated: "2026-07-30",
  isWhoop: true,
  published: false,  // true až po Petrovu schválení
}
```

`published: false` drží stránku mimo homepage, footer i sitemapu, ale route i
`getArticle` fungují — dá se prohlížet, než jde ven. Do `primaryNav` nebo
`compareNav` se přidává jen záměrně.

## Konverze

Web existuje kvůli referral konverzím, takže:

- Odkazy na Whoop **vždy** přes `/go?src=<source>` (route `app/go/route.ts`),
  nikdy přímo na whoop.com. `ArticleShell` a `ReferralCTA` si `src` skládají samy.
- `ReferralCTA` na konci textu vykresluje `ArticleShell` sám (`showCTA`, default `true`).
- Na konverzních stránkách `heroCta` — čtenář nemá kvůli konverzi scrollovat.
- Vnitřní prolinkování: recenze ↔ srovnání ↔ cena ↔ deník. Odkaz je součástí věty,
  ne naskládaný imperativ (viz CTA vzor v `hlas.md`).

## Kontrola

```bash
npm run lint
npm run build
```

Pak náhled přes konfiguraci `whoop-blog-cz` (port 3007) a projít stránku očima.
