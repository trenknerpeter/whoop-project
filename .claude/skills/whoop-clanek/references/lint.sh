#!/usr/bin/env bash
# Mechanické kontroly konceptu pro Whoop deník.
# Posouzení hlasu tenhle skript nedělá — na to je hlas.md.
#
#   references/lint.sh docs/drafts/whoop-cena.md
#
# Exit 0 = čisté, 1 = něco k opravě, 2 = špatné použití.

set -uo pipefail

f="${1:-}"
if [ -z "$f" ]; then
  echo "použití: lint.sh <koncept.md>" >&2
  exit 2
fi
if [ ! -r "$f" ]; then
  echo "nelze přečíst: $f" >&2
  exit 2
fi

fail=0

report() { # $1 = popis, $2 = ERE vzor
  local hits
  hits=$(grep -nEi -- "$2" "$f") || return 0
  printf '\n== %s ==\n%s\n' "$1" "$hits"
  fail=1
}

report "Hodnocení bez měření — doplň číslo, zdroj nebo moment, nebo smaž" \
  'špičkov|parád|klobouk dolů|extrémně|naprost|vypilovan|sleek|neuvěřitelně|bez chyby|těžko hledáš|roky před konkurencí|jednička ve své třídě|nejlepší v kategorii'

report "Antiteze — řekni to přímo, bez souměrné dvojice" \
  'otázka nezní|nejde o .+, ale|není to .+, je to|ne proto, .+ale protože|nejde tolik o'

report "Imperativ na čtenáře — povolený jen v závěrečném CTA odstavci" \
  '\b(kup si|zvaž|projdi si|přečti si|podívej se|nezapomeň|představ si|zkus si)\b'

report "Nadpis s dvojtečkou a ozdobou — pojmenuj téma" \
  '^#{2,4} [^:]+: .+'

report "Labelující otvírák odstavce — začni věcí samotnou" \
  '^(Jádro |Tady |A tady je |To je celá |A přesně tam|Přiznávám)'

# Pomlčky: rozpočet 1 na 200 slov, minimum 2.
# Publikované články jedou 1 na ~45 slov, tj. jedna skoro každou druhou větu.
# Skript hlídá hustotu; „nikdy jako napínák před pointou" je na posouzení v hlas.md.
words=$(grep -oE -- '[A-Za-zÁ-Žá-ž]{2,}' "$f" | wc -l | tr -d ' ')
dashes=$(grep -o -- '—' "$f" | wc -l | tr -d ' ')
budget=$(( words / 200 ))
[ "$budget" -lt 2 ] && budget=2
if [ "${dashes:-0}" -gt "$budget" ]; then
  printf '\n== Pomlčky: %s na %s slov (rozpočet %s) ==\n' "$dashes" "$words" "$budget"
  grep -n -- '—' "$f"
  fail=1
fi

# Povinná struktura konceptu.
for section in '## Potřebuju od tebe' '## Zdroje'; do
  grep -qF -- "$section" "$f" || {
    printf '\n== Chybí sekce: %s ==\n' "$section"
    fail=1
  }
done

# Každá značka musí být vypsaná v sekci Potřebuju od tebe.
markers=$(grep -c -- '\[\[PETR' "$f") || markers=0
printf '\nZnaček [[PETR: ...]]: %s — všechny musí být v ## Potřebuju od tebe\n' "$markers"

if [ "$fail" -eq 0 ]; then
  echo "Mechanicky OK. Hlas posuď proti hlas.md."
fi
exit "$fail"
