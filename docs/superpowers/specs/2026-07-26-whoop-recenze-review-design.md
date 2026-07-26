# Whoop 5.0 recenze — návrh (initial review)

**Datum:** 2026-07-26
**Stránka:** `app/whoop-recenze/page.tsx` (slug `whoop-recenze`)
**Cíl:** Povýšit stávající útržkovitou recenzi (99 řádků, plná `TodoNote`) na plnohodnotný článek na úrovni `whoop-vs-helio` — postavený primárně z rešerše cizích recenzí + osobních komentářů autora.

## Rámování (rozhodnuto s uživatelem)

- **Úvodní / „first impressions" recenze**, NE „po 6 týdnech". Autor Whoop vlastnil ~měsíc loni, teď se k němu vrací na tieru **Peak**. Hook = „proč jsem se vrátil".
- Dlouhodobé reportování (6 týdnů, 3 měsíce…) žije zvlášť ve `zkusenosti` (Whoop deník).
- Musí číst jako reálně prožitá zkušenost — upřímný first-person hlas jako na Helio stránce.

## Osobní úhel autora (zapracovat do textu)

- Orientace na sportovce/výkon — nástroj na optimalizaci výkonu, zdraví a wellbeingu.
- Vnímá ho jako velmi přesný — tep „perfektní", spánek dobrý na to, co to je.
- Vypadá skvěle — žádný jiný tracker se nepřibližuje.
- Skvěle sedí na ruce — menší než Helio, větší než Fitbit (Ace/Air), grafitový úpletový pásek extrémně pohodlný.
- Dobíjení na zápěstí — nikdy nesundáš.
- Insighty, které jiní nemají — behaviors, deník/journal.
- Biologický věk (WHOOP Age) — silně ho láká.
- Roky na trhu → vypilovaná appka; konkurence teprve dohání, hlavně software.

## Vizuály (rozhodnuto)

Placeholdery teď, foto doplní autor později. Použít 2 existující běžecké screenshoty
(`whoop-running-1.jpg`, `whoop-running-2.jpg`) + označené sloty (`TodoNote`) pro:
náramek na zápěstí, detail úpletového pásku, dobíjení na zápěstí.

## Struktura

Shell: kicker „Recenze" · nový upřímný titulek (např. „Whoop 5.0: proč jsem se k němu vrátil")
· standfirst k návratu na Peak · `source="review"`. Custom masthead grafika zatím NE (v1).

1. **Intro** — hook návratu (měl měsíc loni, odešel, teď zpět na Peaku) → nastaví „úvodní recenzi".
2. **TL;DR verdikt** (`AsideNote`) — pro koho (sportovci / optimalizace zdraví), pro koho ne.
3. **Co Whoop dělá jinak** — bez displeje, tři signály (Strain / Recovery / Sleep), app-first.
4. **Přesnost** — HR/HRV/spánek z rešerše + „tep perfektní"; malá přehledová tabulka (`CompareTable`).
5. **Jak vypadá a jak sedí na ruce** — vzhled, úpletový grafitový pásek, velikost vs Helio/Fitbit → foto sloty.
6. **Dobíjení na zápěstí** — nabíjení bez sundávání → foto slot.
7. **Software a insighty** — vypilovaná appka, WHOOP Coach, Journal/behaviors, biologický věk; konkurence roky pozadu.
8. **Předplatné a cena** — tiery One/Peak/Life, malá tabulka, link na `/whoop-cena`.
9. **Co mi vadí / komu ho nedoporučím** — upřímné mínusy (cena, bez displeje, data-anxiety).
10. **Verdikt** — vyplatí se pro výkon/zdraví/longevitu; linky na `/whoop-vs-helio`, `/whoop-cena`, `/whoop-zdarma`.
11. **Časté otázky** (`Faq` + `faqLd`).

## Zdroje

Naplnit z rešeršního agenta (The Quantified Scientist, DC Rainmaker, Wired, The Verge,
Tom's Guide, TechRadar, r/whoop…) — přesnost, hardware, cena tierů, mínusy. Fakta ověřit,
citace krátké a připsané.

## Konzistence napříč webem (opravit)

- `lib/nav.ts` — `whoop-recenze` title („6 týdnů na zápěstí") a excerpt („po šesti týdnech") přepsat na úvodní-recenzi rámování.
- `app/whoop-vs-helio/page.tsx` — řádek „Moji zkušenost s Whoopem po šesti týdnech… v recenzi Whoop 5.0" upravit, ať nekoliduje.
- `app/page.tsx` — hero/CTA copy zkontrolovat, ať nic netvrdí „6 týdnů" u recenze.

## Komponenty k použití

`ArticleShell`, `AsideNote`, `CompareTable`, `PhotoFigure`, `Faq`, `TodoNote`,
`JsonLd` + `articleLd` + `faqLd`.
