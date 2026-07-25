import Link from "next/link";
import { ReferralCTA } from "./ReferralCTA";

type Props = {
  kicker: string;
  title: string;
  standfirst: string;
  updated?: string;
  source: string; // referral tracking source; also toggles the CTA
  showCTA?: boolean;
  children: React.ReactNode;
};

function formatDate(iso?: string) {
  if (!iso) return null;
  return new Date(iso).toLocaleDateString("cs-CZ", {
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
  children,
}: Props) {
  const date = formatDate(updated);
  return (
    <div className="mx-auto max-w-4xl px-5 pb-14 pt-2">
      <article className="animate-rise overflow-hidden rounded-3xl bg-surface shadow-widget">
        {/* Anthracite masthead */}
        <header className="bg-anthracite px-7 pb-11 pt-13 sm:px-10 sm:pt-14">
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
            <p className="mt-4 text-sm text-on-dark-faint">Aktualizováno {date}</p>
          )}
        </header>

        {/* White prose body */}
        <div className="px-7 pt-9 sm:px-10">
          <div className="prose-editorial">{children}</div>

          {showCTA && (
            <div className="mt-12">
              <ReferralCTA source={source} />
            </div>
          )}

          <p className="py-9 text-sm text-ink-muted">
            <Link href="/" className="transition-colors hover:text-green-deep">
              ← Zpět na všechny články
            </Link>
          </p>
        </div>
      </article>
    </div>
  );
}
