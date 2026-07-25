import Link from "next/link";
import { site } from "@/lib/site";
import { primaryNav, dealSlug } from "@/lib/nav";

export function Header() {
  return (
    <header>
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-5 py-5">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight text-ink">
          {site.name}
        </Link>

        <nav className="flex items-center gap-1 text-[0.85rem]">
          {primaryNav.map((item) => {
            const isDeal = item.href === `/${dealSlug}`;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isDeal
                    ? "ml-1 rounded-full bg-anthracite px-4 py-1.5 font-display font-semibold text-green transition-opacity hover:opacity-90"
                    : "hidden rounded-full px-3 py-1.5 text-ink-muted transition-colors hover:bg-surface hover:text-ink md:inline-block"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
