---
name: whoop-clanek
description: Use when writing, drafting, translating or rewriting Czech prose for the Whoop deník site — a new article from a YouTube transcript or an English review, a voice pass over an existing page, or any edit to a standfirst, heading, FAQ answer, CompareTable cell or CTA paragraph in app/*/page.tsx.
---

# Whoop deník: články Petrovým hlasem

Petr dodá anglický zdroj (transcript, recenzi, výzkum). Odtud vznikne český
koncept, který zní jako on. Prózu si nepíše sám.

## Co je koncept

Soubor `docs/drafts/<slug>.md`, v tomhle pořadí:

1. `## Potřebuju od tebe` — všechny značky `[[PETR: ...]]` z textu, vypsané jako otázky.
2. `## Zdroje` — každé tvrzení ze zdroje: tvrzení → kdo to měřil → URL.
3. Článek: standfirst, `##` sekce, `## Časté otázky`, závěrečný odstavec s CTA.

## Každý odstavec je jeden ze tří druhů

Ze čtení musí být poznat který. Tohle je celé jádro hlasu:

| Druh | Jak se pozná | Odkud smí vzniknout |
|---|---|---|
| **Petrův** | první osoba, minulý čas, konkrétní číslo, den nebo moment | jen z toho, co Petr sám řekl |
| **Ze zdroje** | neosobně, jmenuje toho, kdo měřil, odkazuje | z `## Zdroje` |
| **Mechanika** | neosobně, jak věc funguje, bez hodnocení | z dokumentace nebo zdroje |

Odstavec, který není ani jeden z těch tří, do konceptu nepatří. Marketingová
próza je čtvrtý druh — hodnocení bez měření za ním — a přesně ten odsud mizí.

## Dvě tvrdá pravidla

**1. Žádná zkušenost v první osobě, kterou Petr neřekl.**
Ne „je to pravděpodobné", ne „vyplývá to ze zdroje", ne „kdo náramek nosí, to
zjevně zažil". Mezera se stane `[[PETR: konkrétní otázka]]`. Test na youtuberově
stolním srovnání je jeho, ne Petrův — připiš mu ho.

**2. Žádné hodnocení bez toho, co ho vyvolalo.**
Každý úsudek nese ve stejné větě své číslo, zdroj nebo moment, jinak jde ven.
Platí i pro buňky v `CompareTable`.

Obě pravidla platí i pro standfirst, FAQ odpovědi, popisky fotek a CTA.

## Postup

1. Přečti zdroj. Nejdřív postav `## Zdroje`: tvrzení → kdo měřil → URL.
   Nikdy nepřekládej věta po větě — žádná věta v konceptu nesmí být rozpoznatelný
   překlad věty ze zdroje.
2. Přečti `references/hlas.md` a řiď se vzory. Jsou to schválené texty, ne inspirace.
3. Napiš koncept.
4. Spusť `references/lint.sh <soubor>`. Co najde, oprav — nehlas to Petrovi.
   **Čistý lint neznamená hotovo.** Chytá jen mechanické tvary; `app/whoop-vs-fitbit/page.tsx`
   projde bez jediného nálezu a přesto zní jako affiliate blog. Po lintu srovnej
   odstavce se vzory v `hlas.md` — tam je ta skutečná práce.
5. Ukaž koncept se sekcí `## Potřebuju od tebe` nahoře.

Převod schváleného konceptu na stránku: `references/stranka.md`.

## Červené vlajky — zastav se

- Chystáš se napsat „za tři týdny mi to…", co Petr neřekl → značka `[[PETR:]]`
- Sahá ti ruka po *špičkový / paráda / vypilovaný* → chybí ti číslo, ne přídavné jméno
- Věta bez přísudku jako pointa odstavce → přepiš
- Nadpis s dvojtečkou a ozdobou („Dobíjení: malý detail, velký rozdíl") → pojmenuj téma
- Skládáš `page.tsx`, zatímco v konceptu zůstala `[[PETR:` → nejdřív to doplní Petr
