// Comparison table (Widget Stack: rounded card, muted header row).
// The ONLY place Whoop-green / strain-blue accents appear on white.
// `tone` on a cell renders a small colored data chip.

type Cell = { text: string; tone?: "recovery" | "strain" | "warn" };
type Row = { label: string; a: Cell; b: Cell };

const toneClass: Record<NonNullable<Cell["tone"]>, string> = {
  recovery: "bg-green-deep/10 text-green-deep",
  strain: "bg-blue-deep/10 text-blue-deep",
  warn: "bg-slate/10 text-slate",
};

function CellView({ cell }: { cell: Cell }) {
  if (cell.tone) {
    return (
      <span
        className={`inline-block rounded-full px-2.5 py-0.5 text-[0.9rem] font-semibold ${toneClass[cell.tone]}`}
      >
        {cell.text}
      </span>
    );
  }
  return <span className="text-ink-muted">{cell.text}</span>;
}

export function CompareTable({
  headA,
  headB,
  rows,
}: {
  headA: string;
  headB: string;
  rows: Row[];
}) {
  return (
    // overflow-x-auto, not overflow-hidden: on narrow screens the third column
    // is wider than the container, and hiding it dropped it silently.
    <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-line">
      <table className="w-full border-collapse text-left text-[0.95rem]">
        <thead>
          <tr className="border-b border-line bg-surface-muted">
            <th className="px-4 py-3 font-medium text-ink-muted"> </th>
            <th className="px-4 py-3 font-display font-semibold text-ink">
              {headA}
            </th>
            <th className="px-4 py-3 font-display font-semibold text-ink">
              {headB}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-line-soft last:border-0">
              <th
                scope="row"
                className="px-4 py-3 text-left align-top font-semibold text-ink"
              >
                {row.label}
              </th>
              <td className="px-4 py-3 align-top">
                <CellView cell={row.a} />
              </td>
              <td className="px-4 py-3 align-top">
                <CellView cell={row.b} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
