// Text-free background art for the Whoop vs Helio masthead. Sits behind the
// title/standfirst (which supply all the words), so this is pure texture:
// the two screenless bands, soft green/blue glows and a heartbeat line that
// resolves blue→green. Anchored to the right so the left-aligned title stays
// clean and readable. Transparent — the masthead already provides the anthracite.
export function HelioMastheadBg() {
  return (
    <svg
      viewBox="0 0 1200 460"
      preserveAspectRatio="xMaxYMid slice"
      className="h-full w-full opacity-50 sm:opacity-100"
      style={{ fontFamily: "var(--font-display), 'Arial', sans-serif" }}
    >
      <defs>
        <radialGradient id="hmbBlue" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4DA8F0" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#4DA8F0" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hmbGreen" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#19D992" stopOpacity="0.24" />
          <stop offset="100%" stopColor="#19D992" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="960" cy="130" r="270" fill="url(#hmbBlue)" />
      <circle cx="1080" cy="350" r="290" fill="url(#hmbGreen)" />

      {/* heartbeat: raw blue data resolving into a clean green rise */}
      <polyline
        points="640,360 720,360 748,326 772,392 800,346 826,360 900,360 928,340 952,382 978,360 1000,360"
        fill="none"
        stroke="#4DA8F0"
        strokeWidth="3"
        opacity="0.22"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <polyline
        points="1000,360 1070,352 1130,332 1180,312"
        fill="none"
        stroke="#19D992"
        strokeWidth="3.5"
        opacity="0.4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Band A — strain-blue */}
      <g transform="rotate(-12 905 215)">
        <ellipse
          cx="905"
          cy="215"
          rx="72"
          ry="106"
          fill="none"
          stroke="#565D66"
          strokeOpacity="0.55"
          strokeWidth="16"
        />
        <rect x="884" y="97" width="42" height="24" rx="8" fill="#1288D8" fillOpacity="0.9" />
      </g>

      {/* Band B — recovery-green */}
      <g transform="rotate(12 1045 255)">
        <ellipse
          cx="1045"
          cy="255"
          rx="72"
          ry="106"
          fill="none"
          stroke="#767C86"
          strokeOpacity="0.55"
          strokeWidth="16"
        />
        <rect x="1024" y="137" width="42" height="24" rx="8" fill="#19D992" fillOpacity="0.9" />
      </g>
    </svg>
  );
}
