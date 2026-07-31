# Hlas: schválené vzory

Tyhle texty Petr schválil. Nejsou to návrhy ani inspirace — je to cíl, na který
se má nová próza tvarem, rytmem a hustotou konkrétních detailů podobat.
U každého je vlevo to, co reálně vyšlo na webu, vpravo schválená verze.

Mechanické kontroly (superlativy, pomlčky, imperativy) dělá `lint.sh`.
Tenhle soubor je na to, co skript neumí: rytmus a to, kdo v textu mluví.

---

## Hlavní vzor: BioCharge

Nejlepší próza, která na webu už je — z `app/whoop-vs-helio/page.tsx`. Petr ji
napsal sám. Konkrétní čísla, skutečný týden, nevyřešená frustrace. Když si nejsi
jistý, jak má odstavec znít, srovnej ho s tímhle.

> BioCharge je Amazfit obdoba Whoop Recovery, ale funguje jako palivoměr: ráno se
> naplní, přes den klesá a dobije se až spánkem — stejný princip jako Body Battery
> od Garminu. Whoop Recovery se spočítá jednou ráno z HRV, klidového tepu a spánku
> a přes den se nemění.
>
> Nikdy mi to nesedlo natolik, abych podle toho něco dělal. Skoro každé ráno jsem
> začínal kolem 80 a pak už to nesledoval, protože po sportu to spadne a večer jsem
> na dvaceti nebo třiceti. Byl i týden, kdy jsem se ráno budil konstantně kolem 30
> a nechápal proč: stejná rutina, stejný spánek, a Zepp mi k tomu neřekl nic.

Proti původní verzi zmizely dvě věci: labelující otvírák „A tady je můj problém:"
a shrnující pointa na konci („To je celá slabina v kostce: dostal jsem číslo, ale
ne důvod ani radu."). Odstavec končí na konkrétním faktu. Vysvětlovat čtenáři,
co si má z historky odnést, není potřeba.

Nadpis byl `BioCharge: zajímavý nápad, který mě nepřesvědčil` → `BioCharge`.

---

## Standfirst

**Bylo** (`whoop-recenze`)
> Náramek, který nic neukazuje a k tomu si za něj platíš každý měsíc. Loni jsem ho
> měl měsíc a odložil. Teď jsem zpátky — na tieru Peak — a tohle je moje úvodní
> recenze, než naskočí dlouhodobá data.

**Schváleno**
> Loni jsem Whoop po měsíci odložil jako drahou hračku. Teď ho mám zpátky, na tieru
> Peak. Tohle jsou dojmy z prvních týdnů; dlouhodobá data si zapisuju do deníku.

**Bylo** (`whoop-vs-helio`)
> Stejný koncept — žádný displej, měření 24/7, ranní číslo v appce. Úplně jiný
> obchodní model: Whoop chce předplatné, Helio jednu platbu. Helio jsem nosil přes
> rok, tohle je upřímné srovnání.

**Schváleno**
> Oba náramky vynechávají displej a měří nonstop, ale platí se za ně úplně jinak:
> Helio jednou, Whoop každý měsíc. Helio jsem nosil přes rok a pak přešel na Whoop 5.0.

Slovo „upřímné" jde ven. Tvrdit o sobě upřímnost není totéž jako být upřímný.

---

## Sekce s nadpisem

Nadpis `Přesnost: tohle je jeho doména` → `Přesnost tepu`.

**Bylo**
> Tady pro mě Whoop pokaždé vyhrává. Tep v klidu i na kardiu měří tak přesně, že
> jsem ho ani jednou nepřistihl mimo — a nejsem sám. Recenzovaná studie porovnávala
> Whoop proti EKG a našla odchylku tepu pod půl procenta […]

**Schváleno**
> `[[PETR: máš čím Whoop srovnat — hrudní pás, jiné hodinky? Potřebuju jednu
> konkrétní věc: kdy ti to sedlo nebo nesedlo, ideálně s číslem.]]` Nezávislá měření
> se shodují: recenzovaná studie našla proti EKG odchylku tepu pod půl procenta,
> tester the5krunner naměřil korelaci 0,98 s hrudním pásem u běhu, kola i plavání.
> Slabší je to u činek a HIIT, kdy optický senzor na zápěstí tep podhodnocuje; kdo
> podle tepu řídí silový trénink, nosí Whoop na bicepsu.

**Tenhle vzor je nejdůležitější z celého souboru.** Šlo napsat „Tep si hlídám na
hrudním pásu při každém intervalu, za tři týdny se Whoop nerozešel o víc než dva
tepy" — čte se to výborně a je to vymyšlené. Přesně tomu má značka zabránit.
Odstavec smí zůstat neúplný. Vymyšlená zkušenost do něj nepatří.

---

## Buňky v CompareTable

Buňka nese měření, ne známku. Vizuální hodnocení dělá `tone`, text ho nemusí opakovat.

| Řádek | Bylo | Schváleno |
|---|---|---|
| Klidový tep | Špičková | odchylka pod 0,5 % vs EKG |
| Tep na kardiu | Bez chyby | korelace 0,98 s hrudním pásem |
| Tep při silovém / HIIT | Slabší na zápěstí | na zápěstí podhodnocuje |
| Dýchání | Do jednoho dechu | odchylka do 1 dechu/min |
| Hloubka dat z tréninku | Špičková / Slušná | kadence, délka kroku, u tenisu forhend/bekhend — proti tep, zóny, Strain |
| Insighty | Skoro žádné / AI kouč | jen čísla bez vysvětlení — proti AI kouč navázaný na data |
| Aplikace | Zepp — pomalejší sync | `[[PETR: jak dlouho reálně trvá sync po tréninku?]]` |

Sloupec „Moje zkušenost" se plní jen z toho, co Petr řekl. Jinak `[[PETR]]`.

---

## FAQ odpovědi

**Bylo**
> Chybějící displej je záměr — nekoukáš na zápěstí, ráno se podíváš do appky. Když
> chceš čas, notifikace nebo mapu z běhu na ruce, kup si chytré hodinky.

**Schváleno**
> Displej chybí záměrně. Prvních pár dní jsem se na zápěstí pořád koukal a nic tam
> nebylo; po týdnu mi ten reflex zmizel a data si čtu ráno v telefonu. Komu na ruce
> chybí čas a notifikace, tomu Whoop nic z toho nenahradí.

**Bylo**
> Nabíjí se přisunutým bezdrátovým powerbankem přímo za nošení, takže náramek nikdy
> nesundáš — u zařízení, co měří spánek 24/7, je to zásadní.

**Schváleno**
> Whoop udává až 14 dní, recenzenti naměřili 16 až 18. Powerbanka se přisune na
> náramek a dobíjí ho za nošení, náramek se sundávat nemusí. V grafech spánku pak
> nejsou mezery.

Tady je vidět hranice mezi oběma tvrdými pravidly: **mechanika** řečená neosobně
je v pořádku, **výsledek nebo dojem** potřebuje Petra. „Sundávat se nemusí" projde.
„Nesundal jsem ho ani na nabíjení" je zkušenost a potřebuje značku.

**Bylo**
> Takže „bez předplatného" platí pro čísla, ne pro insighty.

**Schváleno**
> Základní měření a data ano, zaplatí se jednou. AI koučink a hlubší rozbory ale
> běží přes prémiové předplatné Zepp Aura, takže bezplatná je u Helia jen ta
> číselná část.

**Bylo**
> Helio dává skvělá a přesná data, ale neřekne ti, co s nimi. Whoop čísla přeloží do
> doporučení — má integrovaného AI kouče, vyladěnou appku a věci jako biologický věk.

**Schváleno**
> Kvůli tomu týdnu s BioCharge kolem 30, kdy mi Zepp neřekl proč. Whoop u stejné
> situace napíše, co skóre stáhlo dolů a co s tím, a to jsem u Helia po roce pořád
> neměl.

Odpověď se opírá o konkrétní historku z článku, ne o obecné shrnutí schopností.

---

## Závěrečný odstavec s CTA

Jediné místo, kde se čtenář oslovuje. Jeden požadavek, ne tři naskládané imperativy.

**Bylo**
> Než se rozhodneš, projdi si kolik Whoop reálně stojí, a jestli zvažuješ alternativu
> bez předplatného, přečti si srovnání s Helio Strapem. A pokud to chceš rovnou
> zkusit, první měsíc máš přes můj odkaz zdarma.

**Schváleno**
> Rozpad ceny v korunách mám v samostatném článku, srovnání s Helio Strapem taky.
> Jestli to chceš zkusit sám, přes můj odkaz máš první měsíc zdarma.

**Bylo**
> Když chceš přesná, syrová a hluboká data za skvělou cenu a insighty si poskládáš
> sám, Helio Strap je jednička ve své třídě — a rok mi dělal radost. Když ti ale jde
> o zdraví, dlouhověkost a wellbeing […]

**Schváleno**
> Helio bych dnes koupil někomu, kdo chce syrová data za dva a půl tisíce a rozbor
> si udělá sám. Já jsem u Whoopu kvůli tomu, že mi čísla vyhodnotí za mě — za rok
> s Heliem jsem si to nahradit nezvládl. Přes můj odkaz máš první měsíc zdarma,
> takže se to dá porovnat bez placení.

---

## Anglicismy

Petr některé reálně používá. Sterilní čeština není cíl.

**Nechat:** tracker, appka, tier, powerbanka, sync, Recovery, Strain, HRV, HIIT,
BioCharge (produktové názvy se nepřekládají).

**Přepsat:** insight → poznatek nebo vysvětlení · feature → funkce ·
glanceable → opsat česky („na co se dá kouknout jedním pohledem") ·
sleek → popsat rozměr nebo materiál · wellbeing → zdraví · dealbreaker → důvod odmítnutí.

## Ostatní

- Pomlčka nikdy jako napínák před pointou („a tady je ten rozdíl — …"). Hustotu
  hlídá `lint.sh`, tenhle konkrétní tvar ne: publikované články jedou jednu pomlčku
  na 45 slov, tedy skoro každou druhou větu. Většina z nich chce být dvojtečka,
  středník, tečka nebo nic.
- Číslovky česky s mezerou: `2 499 Kč`, `199 €/rok`, `0,98`, `16 až 18 dní`.
- Uvozovky české: „takhle", ne "takhle".
- Datum ve `updated` je ISO, v textu se datum nepíše — vykresluje ho `ArticleShell`.
