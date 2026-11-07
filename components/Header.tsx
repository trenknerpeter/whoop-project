import Link from "next/link";
import { site } from "@/lib/site";
import { LogoMark } from "@/components/LogoMark";
import { primaryNav, dealSlug } from "@/lib/nav";
import { localePath, type Lang } from "@/lib/i18n";
import { LangSwitch } from "@/components/LangSwitch";

export function Header({ lang = "cs" }: { lang?: Lang }) {
  return (
    <header>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2.5 px-4 py-5 sm:gap-6 sm:px-5">
        <Link
          href={localePath(lang, "")}
          className="flex shrink-0 items-center gap-2 whitespace-nowrap font-display text-base font-semibold sm:gap-2.5 sm:text-lg tracking-tight text-ink"
        >
          <LogoMark size={28} />
          {site.name}
        </Link>

        <nav className="flex items-center gap-1 text-[0.8rem] sm:text-[0.85rem]">
          {primaryNav(lang).map((item) => {
            if (item.children) {
              return (
                <div
                  key={item.label}
                  className="group relative hidden md:inline-block"
                >
                  <button
                    type="button"
                    aria-haspopup="true"
                    className="flex items-center gap-1 rounded-full px-3 py-1.5 text-ink-muted transition-colors group-hover:bg-surface group-hover:text-ink group-focus-within:bg-surface group-focus-within:text-ink"
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className="text-[0.6em] transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
                    >
                      ▼
                    </span>
                  </button>
                  {/* pt-2 bridges the gap so hover doesn't drop between trigger and panel */}
                  <div className="invisible absolute left-0 top-full z-20 min-w-[13rem] pt-2 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="rounded-2xl border border-line bg-surface p-1.5 shadow-widget">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-3 py-2 text-ink-muted transition-colors hover:bg-surface-muted hover:text-ink"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            const isDeal = item.href === localePath(lang, dealSlug);
            return (
              <Link
                key={item.href}
                href={item.href!}
                className={
                  isDeal
                    ? "whitespace-nowrap rounded-full bg-anthracite px-3 py-1.5 sm:ml-1 font-display sm:px-4 font-semibold text-green transition-opacity hover:opacity-90"
                    : "hidden rounded-full px-3 py-1.5 text-ink-muted transition-colors hover:bg-surface hover:text-ink md:inline-block"
                }
              >
                {item.label}
              </Link>
            );
          })}
          <div className="ml-1 sm:ml-2">
            <LangSwitch lang={lang} />
          </div>
        </nav>
      </div>
    </header>
  );
}
