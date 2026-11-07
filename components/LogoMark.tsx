// Site logo: a spiral notebook with a W on the cover.
// Keep in sync with app/icon.svg (the favicon).
// Plain SVG elements only, so the next/og routes can render it as well.

const RINGS = [16, 32, 48, 64];

export function LogoMark({
  size = 32,
  title,
}: {
  size?: number;
  title?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 90 90"
      xmlns="http://www.w3.org/2000/svg"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <rect x="14" y="4" width="68" height="82" rx="9" fill="#23272E" />
      {RINGS.map((y) => (
        <rect key={y} x="7" y={y} width="14" height="6" rx="3" fill="#AAB1B9" />
      ))}
      <polyline
        points="30,30 39,62 48,40 57,62 66,30"
        fill="none"
        stroke="#19D992"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
