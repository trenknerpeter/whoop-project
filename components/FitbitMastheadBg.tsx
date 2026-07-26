// Text-free background art for the Whoop vs Fitbit Air masthead. Same job as
// HelioMastheadBg: pure texture behind the title/standfirst. Fitbit Air is a
// screenless fabric band whose app leans hard on a "Readiness" score and an AI
// coach — so the motif is a soft band, a partial readiness ring and a chat/AI
// spark bubble. Green/blue glows keep it on-brand with the rest of the site.
// Anchored right so the left-aligned title stays readable. Transparent.
export function FitbitMastheadBg() {
  return (
    <svg
      viewBox="0 0 1200 460"
      preserveAspectRatio="xMaxYMid slice"
      className="h-full w-full opacity-50 sm:opacity-100"
      style={{ fontFamily: "var(--font-display), 'Arial', sans-serif" }}
    >
      <defs>
        <radialGradient id="fmbBlue" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4DA8F0" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#4DA8F0" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="fmbGreen" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#19D992" stopOpacity="0.24" />
          <stop offset="100%" stopColor="#19D992" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="950" cy="120" r="270" fill="url(#fmbBlue)" />
      <circle cx="1090" cy="360" r="290" fill="url(#fmbGreen)" />

      {/* Screenless fabric band — a soft loop, echoing the Fitbit Air */}
      <g transform="rotate(-14 940 250)">
        <ellipse
          cx="940"
          cy="250"
          rx="78"
          ry="112"
          fill="none"
          stroke="#767C86"
          strokeOpacity="0.5"
          strokeWidth="18"
          strokeDasharray="2 9"
          strokeLinecap="round"
        />
        <rect x="917" y="126" width="46" height="26" rx="9" fill="#565D66" fillOpacity="0.85" />
      </g>

      {/* Readiness ring — a partial arc, the app's signature dial */}
      <circle
        cx="1075"
        cy="150"
        r="60"
        fill="none"
        stroke="#2B3038"
        strokeWidth="12"
      />
      <path
        d="M1075 90 A60 60 0 1 1 1015 150"
        fill="none"
        stroke="#4DA8F0"
        strokeWidth="12"
        strokeLinecap="round"
        opacity="0.55"
      />

      {/* AI coach chat bubble with a spark — the thing Fitbit pushes everywhere */}
      <g transform="translate(1000 320)">
        <rect x="0" y="0" width="150" height="86" rx="26" fill="#19D992" fillOpacity="0.14" />
        <path d="M34 86 L34 112 L62 86 Z" fill="#19D992" fillOpacity="0.14" />
        <path
          d="M62 30 l7 16 16 7 -16 7 -7 16 -7 -16 -16 -7 16 -7 Z"
          fill="#19D992"
          fillOpacity="0.6"
        />
        <circle cx="104" cy="43" r="4.5" fill="#19D992" fillOpacity="0.5" />
        <circle cx="120" cy="43" r="4.5" fill="#19D992" fillOpacity="0.5" />
      </g>
    </svg>
  );
}
