// Text-free background art for the "O 100 dní později" masthead: a 10 × 10
// grid of rounded day-cells, one per day worn, filling in row by row and
// shifting from blue to recovery-green as the hundred days pass. The last
// cell carries a soft ring, the "today" marker. Purely decorative: the cells
// encode no real scores, so no colour here implies a good or bad day.
// Anchored right so the left-aligned title stays readable. Transparent; the
// masthead supplies the anthracite.

const COLS = 10;
const STEP = 30;
const SIZE = 18;
const X0 = 836;
const Y0 = 82;

const BLUE = [0x4d, 0xa8, 0xf0];
const GREEN = [0x19, 0xd9, 0x92];

function mix(t: number): string {
  const c = BLUE.map((b, i) => Math.round(b + (GREEN[i] - b) * t));
  return `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
}

// Deterministic values only (no Math.random): server and client must render
// the same markup.
const DAYS = Array.from({ length: 100 }, (_, i) => {
  const col = i % COLS;
  const row = Math.floor(i / COLS);
  return {
    x: X0 + col * STEP,
    y: Y0 + row * STEP,
    fill: mix(i / 99),
    opacity: +(0.28 + (i / 99) * 0.5).toFixed(2),
    delay: +(0.4 + i * 0.022).toFixed(3),
  };
});

const LAST = DAYS[99];

export function HundredDaysMastheadBg() {
  return (
    <>
      <svg
        viewBox="0 0 1200 460"
        preserveAspectRatio="xMaxYMid slice"
        className="h-full w-full opacity-45 sm:opacity-100"
      >
        <defs>
          <radialGradient id="hdBlue" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4DA8F0" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#4DA8F0" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hdGreen" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#19D992" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#19D992" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle
          cx="900"
          cy="140"
          r="250"
          fill="url(#hdBlue)"
          className="animate-breathe-b"
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
        <circle
          cx="1110"
          cy="380"
          r="270"
          fill="url(#hdGreen)"
          className="animate-breathe-a"
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />

        {DAYS.map((d) => (
          <rect
            key={`${d.x}-${d.y}`}
            x={d.x}
            y={d.y}
            width={SIZE}
            height={SIZE}
            rx="5"
            fill={d.fill}
            fillOpacity={d.opacity}
            className="animate-day-in"
            style={{ animationDelay: `${d.delay}s` }}
          />
        ))}

        {/* "Today" ring around day 100, appearing after the grid fills. */}
        <rect
          x={LAST.x - 6}
          y={LAST.y - 6}
          width={SIZE + 12}
          height={SIZE + 12}
          rx="9"
          fill="none"
          stroke="#19D992"
          strokeWidth="2"
          strokeOpacity="0.85"
          className="animate-day-in"
          style={{ animationDelay: `${(LAST.delay + 0.3).toFixed(2)}s` }}
        />
      </svg>

      {/* Scrim over the art's left side so the title and standfirst stay
          readable where the grid reaches into the text column on narrower
          viewports (same approach as AgeMastheadBg). */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(93deg, #23272e 0%, #23272e 44%, rgba(35,39,46,0.9) 58%, rgba(35,39,46,0.55) 70%, rgba(35,39,46,0) 88%)",
        }}
      />
    </>
  );
}
