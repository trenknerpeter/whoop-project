// Text-free background art for the WHOOP Age masthead: the app's Healthspan
// orb — an organic green blob with a dark core and light speckles drifting in
// its rim — plus the Pace of Aging tick scale beneath it. Anchored right so
// the left-aligned title stays readable. Transparent; the masthead supplies
// the anthracite.
//
// Nothing here morphs an SVG path (`d` isn't animatable in CSS across
// browsers). The organic "breathing blob" read comes from two irregular
// blobs counter-rotating at different speeds behind a blur, so the combined
// silhouette shifts continuously with only transform animations.

// Pushed well right of centre: the title is the widest line in the masthead
// and reaches roughly 85 % across, so the orb's bright rim has to sit beyond
// that. Text still crosses the orb's clear core, which is what the core is
// for — the scrim at the bottom of this file knocks back the rest.
const CX = 1015;
const CY = 206;

// Smooth closed curve through points at the given radii, evenly spaced around
// (cx, cy). Catmull-Rom control points converted to cubic Béziers, so the seam
// at the start point is as smooth as every other joint.
function blobPath(cx: number, cy: number, radii: number[]): string {
  const n = radii.length;
  const pts = radii.map((r, i) => {
    const a = (i / n) * Math.PI * 2 - Math.PI / 2;
    return [cx + Math.cos(a) * r, cy + Math.sin(a) * r] as const;
  });
  let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % n];
    const p3 = pts[(i + 2) % n];
    d +=
      ` C ${(p1[0] + (p2[0] - p0[0]) / 6).toFixed(1)} ${(p1[1] + (p2[1] - p0[1]) / 6).toFixed(1)},` +
      ` ${(p2[0] - (p3[0] - p1[0]) / 6).toFixed(1)} ${(p2[1] - (p3[1] - p1[1]) / 6).toFixed(1)},` +
      ` ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  return `${d} Z`;
}

const BLOB_A = blobPath(
  CX,
  CY,
  [176, 168, 180, 170, 182, 172, 178, 166, 180, 171],
);
const BLOB_B = blobPath(
  CX,
  CY,
  [170, 181, 167, 179, 165, 177, 169, 183, 168, 178],
);

// Speckles in the orb's rim, on a golden-angle spiral so they scatter evenly
// without random numbers (which would desync server and client renders).
const SPECKLES = Array.from({ length: 26 }, (_, i) => {
  const angle = i * 137.508 * (Math.PI / 180);
  const radius = 96 + ((i * 7) % 5) * 17;
  return {
    cx: +(CX + Math.cos(angle) * radius).toFixed(1),
    cy: +(CY + Math.sin(angle) * radius).toFixed(1),
    r: +(2 + ((i * 3) % 4) * 1.4).toFixed(1),
    delay: +((i % 9) * 0.7).toFixed(2),
  };
});

// Pace of Aging ruler: dense ticks with one taller marker at the centre, where
// a steady 1.0x sits.
const TICKS = Array.from({ length: 30 }, (_, i) => i);

export function AgeMastheadBg() {
  return (
    <>
      <svg
        viewBox="0 0 1200 460"
        preserveAspectRatio="xMaxYMid slice"
        className="h-full w-full opacity-45 sm:opacity-100"
      >
        <defs>
          {/* Rim-lit donut: clear core, brightest just inside the edge. */}
          <radialGradient id="ambRim" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#19D992" stopOpacity="0" />
            <stop offset="52%" stopColor="#19D992" stopOpacity="0" />
            <stop offset="76%" stopColor="#19D992" stopOpacity="0.16" />
            <stop offset="93%" stopColor="#19D992" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#19D992" stopOpacity="0.62" />
          </radialGradient>
          <radialGradient id="ambGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#19D992" stopOpacity="0.26" />
            <stop offset="100%" stopColor="#19D992" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="ambGlowBlue" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4DA8F0" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#4DA8F0" stopOpacity="0" />
          </radialGradient>
          <filter id="ambSoft" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="9" />
          </filter>
        </defs>

        {/* Ambient glows behind the orb, breathing on offset cycles. */}
        <g style={{ transformBox: "fill-box", transformOrigin: "center" }}>
          <circle
            cx={CX}
            cy={CY}
            r="255"
            fill="url(#ambGlow)"
            className="animate-breathe-a"
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
        </g>
        <circle
          cx={CX - 130}
          cy={CY + 150}
          r="190"
          fill="url(#ambGlowBlue)"
          className="animate-breathe-b"
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />

        {/* Two counter-rotating irregular blobs: the shifting silhouette is what
            reads as an organic, living shape. */}
        <g filter="url(#ambSoft)">
          <path
            d={BLOB_A}
            fill="url(#ambRim)"
            className="animate-orb-spin"
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
          <path
            d={BLOB_B}
            fill="url(#ambRim)"
            opacity="0.55"
            className="animate-orb-spin-rev"
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
        </g>

        {/* Crisp rim on top of the blurred mass, so the edge still reads. */}
        <path
          d={BLOB_A}
          fill="none"
          stroke="#19D992"
          strokeOpacity="0.5"
          strokeWidth="2.5"
          className="animate-orb-spin"
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />

        {/* Speckles orbit as one group, each twinkling on its own offset. */}
        <g
          className="animate-orb-drift"
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        >
          {SPECKLES.map((s) => (
            <circle
              key={`${s.cx}-${s.cy}`}
              cx={s.cx}
              cy={s.cy}
              r={s.r}
              fill="#7DF3C4"
              opacity="0.55"
              className="animate-twinkle"
              style={{ animationDelay: `${s.delay}s` }}
            />
          ))}
        </g>

        {/* Pace of Aging ruler. */}
        <g opacity="0.3">
          {TICKS.map((i) => {
            const x = 838 + i * 12;
            const tall = i === 14;
            return (
              <rect
                key={i}
                x={x}
                y={tall ? 386 : 392}
                width={tall ? 3 : 1.6}
                height={tall ? 28 : 16}
                rx="0.8"
                fill={tall ? "#19D992" : "#AAB1B9"}
                opacity={tall ? 0.95 : 0.5}
              />
            );
          })}
        </g>
      </svg>

      {/*
        Scrim over the art's left side. Without it the title and standfirst
        run straight across the orb's bright rim and speckles, which wrecks
        readability at every width the orb reaches into the text column. Kept
        as a container-sized CSS gradient rather than a rect inside the SVG:
        `xMaxYMid slice` crops the viewBox by an amount that depends on the
        masthead's aspect ratio, so an in-SVG scrim would drift out of
        alignment with the text as the viewport changes.
      */}
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
