import Link from "next/link";
import { site, SITE_TEXT } from "@/lib/site";
import { articles, dealSlug, localized } from "@/lib/nav";
import { localePath, UI, type Lang } from "@/lib/i18n";

export function Footer({ lang = "cs" }: { lang?: Lang }) {
  const t = UI[lang];
  return (
    <footer className="mt-16">
      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="grid gap-8 sm:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="font-display text-lg font-semibold text-ink">
              {site.name}
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-muted">
              {SITE_TEXT[lang].description}
            </p>
          </div>
          <nav className="text-sm">
            <p className="font-display font-semibold text-ink">{t.articles}</p>
            <ul className="mt-3 space-y-2">
              {articles.filter((a) => a.published).map((a) => (
                <li key={a.slug}>
                  <Link
                    href={localized(a, lang).href}
                    className="text-ink-muted transition-colors hover:text-green-deep"
                  >
                    {localized(a, lang).nav}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={localePath(lang, dealSlug)}
                  className="text-ink-muted transition-colors hover:text-green-deep"
                >
                  {t.freeMonth}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-line pt-6 text-xs leading-relaxed text-ink-muted">
          <p>{t.disclaimer1}</p>
          <p className="mt-2">{t.disclaimer2}</p>
          <p className="mt-3">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
