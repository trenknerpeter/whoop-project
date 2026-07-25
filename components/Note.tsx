// Two callout styles:
//  - "todo": author-facing reminder (Peter must replace with real data/photos
//    before launch). Visually loud on purpose so nothing ships half-filled.
//  - "aside": reader-facing highlight box for tips/warnings.

export function TodoNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose my-6 rounded-xl border border-dashed border-blue-deep/50 bg-blue-deep/5 px-4 py-3 text-[0.95rem] text-blue-deep">
      <span className="mr-1 font-display font-semibold uppercase tracking-wide">
        ⚠ Doplnit:
      </span>
      {children}
    </div>
  );
}

export function AsideNote({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="not-prose my-6 rounded-2xl bg-surface-muted px-5 py-4">
      {title && (
        <p className="font-display text-base font-semibold text-ink">{title}</p>
      )}
      <div className="mt-1 text-[0.975rem] leading-relaxed text-ink-muted">
        {children}
      </div>
    </div>
  );
}
