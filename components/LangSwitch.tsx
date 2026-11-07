"use client";

import { usePathname } from "next/navigation";
import { switchPath, UI, type Lang } from "@/lib/i18n";

// Always-visible CZ / EN pill in the header. Links to the same page in the
// other language (via SLUG_MAP). Plain <a>, not <Link>: the two languages
// use different root layouts, so the switch is a full page load anyway.
export function LangSwitch({ lang }: { lang: Lang }) {
  const pathname = usePathname() ?? "/";
  const options: { code: Lang; label: string }[] = [
    { code: "cs", label: "CZ" },
    { code: "en", label: "EN" },
  ];
  return (
    <div
      role="group"
      aria-label={UI[lang].langLabel}
      className="flex shrink-0 items-center rounded-full border border-line bg-surface p-0.5 font-display text-[0.75rem] font-semibold"
    >
      {options.map((o) =>
        o.code === lang ? (
          <span
            key={o.code}
            aria-current="true"
            className="rounded-full bg-anthracite px-2 py-1 text-on-dark sm:px-2.5"
          >
            {o.label}
          </span>
        ) : (
          <a
            key={o.code}
            href={switchPath(pathname, o.code)}
            hrefLang={o.code}
            lang={o.code}
            className="rounded-full px-2 py-1 text-ink-muted sm:px-2.5 transition-colors hover:text-ink"
          >
            {o.label}
          </a>
        ),
      )}
    </div>
  );
}
