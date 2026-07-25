export type QA = { q: string; a: string };

// Reader-facing FAQ list. Pair with faqLd() for the FAQPage structured data.
export function Faq({ items }: { items: QA[] }) {
  return (
    <div className="not-prose my-8 divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.q} className="group py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-ink">
            {item.q}
            <span className="text-green-deep transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-2 leading-relaxed text-ink-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
