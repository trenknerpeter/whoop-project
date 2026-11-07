import { DEAL } from "@/lib/site";
import { UI, type Lang } from "@/lib/i18n";

// Shared affiliate CTA card (Widget Stack: slate surface, green pill button).
// Rendered at the end of every Whoop page. The button routes through /go so
// click-outs are countable server-side.
export function ReferralCTA({
  source,
  lang = "cs",
}: {
  source: string;
  lang?: Lang;
}) {
  const deal = DEAL[lang];
  return (
    <aside className="rounded-3xl bg-slate px-7 py-9 sm:px-9 sm:py-10">
      <p className="font-display text-2xl font-semibold leading-tight tracking-[-0.01em] text-on-dark sm:text-[1.6rem]">
        {deal.headline}
      </p>
      <p className="mt-2.5 max-w-[44ch] text-[0.95rem] leading-relaxed text-[#c9cdd2]">
        {deal.sub}
      </p>
      <a
        href={`/go?src=${encodeURIComponent(source)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-green px-6 py-3 font-display text-[0.95rem] font-semibold text-green-ink transition-transform hover:-translate-y-0.5"
      >
        {deal.button}
        <span aria-hidden>→</span>
      </a>
      <p className="mt-3.5 text-xs text-[#9ca2a9]">
        {UI[lang].ctaFootnote}
      </p>
    </aside>
  );
}
