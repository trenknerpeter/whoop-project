// Animated background art for the homepage hero. Same job and geometry as
// HelioMastheadBg / FitbitMastheadBg (pure texture behind the title, anchored
// right so the left-aligned copy stays readable, transparent) — but this one
// moves: an ECG trace draws itself once, a recovery ring fills to 90 % and
// reveals its score, and the two brand glows breathe slowly. All animation is
// CSS-only (utilities in globals.css) and lands on a correct still frame for
// prefers-reduced-motion visitors.
export function HomeMastheadBg() {
  return (
    <svg
      viewBox="0 0 1200 460"
      preserveAspectRatio="xMaxYMid slice"
      className="h-full w-full opacity-40 sm:opacity-100"
      style={{ fontFamily: "var(--font-display), 'Arial', sans-serif" }}
    >
      <defs>
        <radialGradient id="hmbGreen" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#19D992" stopOpacity="0.24" />
          <stop offset="100%" stopColor="#19D992" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hmbBlue" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4DA8F0" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#4DA8F0" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient glows — slow breathing pulse, staggered so they alternate */}
      <circle
        className="animate-breathe"
        cx="1040"
        cy="120"
        r="280"
        fill="url(#hmbGreen)"
      />
      <circle
        className="animate-breathe"
        style={{ animationDelay: "2.4s" }}
        cx="880"
        cy="390"
        r="300"
        fill="url(#hmbBlue)"
      />

      {/* Recovery ring — track + progress arc filling to 90 %, score fades in
          when the arc lands. pathLength=100 makes the dash math read as
          percentages (offset 10 left over = 90 % filled). Kept in the far
          top-right so it never crowds the headline; hidden on mobile where
          the slice crop would park its score text behind the headline. */}
      <g className="max-sm:hidden">
      <circle
        cx="1072"
        cy="128"
        r="76"
        fill="none"
        stroke="#3A4048"
        strokeWidth="12"
      />
      <circle
        className="animate-ring-fill"
        cx="1072"
        cy="128"
        r="76"
        fill="none"
        stroke="#19D992"
        strokeWidth="12"
        strokeLinecap="round"
        pathLength={100}
        strokeDasharray={100}
        strokeDashoffset={100}
        transform="rotate(-90 1072 128)"
      />
      <text
        className="animate-fade-late"
        x="1072"
        y="130"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="34"
        fontWeight="600"
        opacity="0"
      >
        90 %
      </text>
      <text
        className="animate-fade-late"
        x="1072"
        y="158"
        textAnchor="middle"
        fill="#7B828B"
        fontSize="13"
        letterSpacing="2"
        opacity="0"
      >
        RECOVERY
      </text>
      </g>

      {/* ECG trace — draws itself left to right, resolves back to baseline.
          Lives in the lower-right quadrant, below the ring and clear of the
          copy column. pathLength=1000 pins the dash length regardless of
          real geometry. */}
      <path
        className="animate-ecg-draw"
        d="M820 330 H900 L918 302 L938 362 L958 270 L978 384 L998 330 H1068 L1084 310 L1100 348 L1114 330 H1180"
        fill="none"
        stroke="#19D992"
        strokeWidth="3"
        strokeLinejoin="round"
        strokeLinecap="round"
        opacity="0.8"
        pathLength={1000}
        strokeDasharray={1000}
        strokeDashoffset={1000}
      />
    </svg>
  );
}
