import Link from "next/link";
import { ReferralCTA } from "./ReferralCTA";
import { DEAL } from "@/lib/site";
import { localePath, UI, type Lang } from "@/lib/i18n";

type Props = {
  kicker: string;
  title: string;
  standfirst: string;
  updated?: string;
  source: string; // referral tracking source; also toggles the CTA
  showCTA?: boolean;
  // Show a compact CTA button in the masthead, above the fold — for money
  // pages where the reader shouldn't have to scroll to convert.
  heroCta?: boolean;
  // Optional decorative art rendered behind the masthead title (text-free).
  mastheadBg?: React.ReactNode;
  children: React.ReactNode;
  lang?: Lang;
};

function formatDate(iso: string | undefined, lang: Lang) {
  if (!iso) return null;
  return new Date(iso).toLocaleDateString(UI[lang].dateLocale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function ArticleShell({
  kicker,
  title,
  standfirst,
  updated,
  source,
  showCTA = true,
  heroCta = false,
  mastheadBg,
  children,
  lang = "cs",
}: Props) {
  const date = formatDate(updated, lang);
  const t = UI[lang];
  return (
    <div className="mx-auto max-w-5xl px-5 pb-14 pt-2">
      <article className="animate-rise overflow-hidden rounded-3xl bg-surface shadow-widget">
        {/* Anthracite masthead */}
        <header className="relative overflow-hidden bg-anthracite px-7 pb-11 pt-13 sm:px-10 sm:pt-14">
          {mastheadBg && (
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              {mastheadBg}
            </div>
          )}
          <div className="relative">
            <p className="font-display text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-blue">
              {kicker}
            </p>
            <h1 className="mt-3.5 font-display text-[2rem] font-semibold leading-[1.08] tracking-[-0.02em] text-on-dark sm:text-[2.4rem]">
              {title}
            </h1>
            <p className="mt-4 max-w-[46ch] text-[1.05rem] leading-relaxed text-on-dark-soft">
              {standfirst}
            </p>
            {date && (
              <p className="mt-4 text-sm text-on-dark-faint">
                {t.updated} {date}
              </p>
            )}
            {heroCta && (
              <a
                href={`/go?src=${encodeURIComponent(source)}-hero`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-green px-6 py-3 font-display text-[0.95rem] font-semibold text-green-ink transition-transform hover:-translate-y-0.5"
              >
                {DEAL[lang].button}
                <span aria-hidden>→</span>
              </a>
            )}
          </div>
        </header>

        {/* White prose body */}
        <div className="px-7 pt-9 sm:px-10">
          <div className="prose-editorial">{children}</div>

          {showCTA && (
            <div className="mt-12">
              <ReferralCTA source={source} lang={lang} />
            </div>
          )}

          <p className="py-9 text-sm text-ink-muted">
            <Link href={localePath(lang, "")} className="transition-colors hover:text-green-deep">
              {t.back}
            </Link>
          </p>
        </div>
      </article>
    </div>
  );
}
