// Editorial hero graphic for the Whoop vs Helio page. Inlined as SVG (not an
// <img>) so it uses the page's real Space Grotesk font and stays crisp at any
// size. It sits directly under the masthead, so it deliberately does NOT repeat
// the title/tagline — instead it labels the two bands to reinforce the thesis
// (raw numbers vs. numbers + context). Palette matches the site tokens.
export function HelioVsWhoopHero() {
  return (
    <div className="not-prose my-2 overflow-hidden rounded-3xl shadow-widget">
      <svg
        viewBox="0 0 1200 630"
        className="block h-auto w-full"
        role="img"
        aria-label="Dva náramky bez displeje: Helio nasvícený modře se štítkem syrová čísla, Whoop zeleně se štítkem čísla plus kontext"
        style={{ fontFamily: "var(--font-display), 'Arial', sans-serif" }}
      >
        <defs>
          <radialGradient id="hvhGreen" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#19D992" stopOpacity="0.30" />
            <stop offset="100%" stopColor="#19D992" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hvhBlue" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4DA8F0" stopOpacity="0.26" />
            <stop offset="100%" stopColor="#4DA8F0" stopOpacity="0" />
          </radialGradient>
          <clipPath id="hvhCard">
            <rect x="0" y="0" width="1200" height="630" rx="28" />
          </clipPath>
        </defs>

        <g clipPath="url(#hvhCard)">
          <rect x="0" y="0" width="1200" height="630" fill="#23272E" />

          <circle cx="440" cy="280" r="220" fill="url(#hvhBlue)" />
          <circle cx="760" cy="280" r="230" fill="url(#hvhGreen)" />

          {/* top label */}
          <text
            x="600"
            y="92"
            textAnchor="middle"
            fontSize="18"
            fontWeight="600"
            letterSpacing="5"
            fill="#7B828B"
          >
            NÁRAMKY BEZ DISPLEJE
          </text>

          {/* data chips */}
          <g transform="translate(150 150)">
            <rect width="150" height="38" rx="19" fill="#4DA8F0" fillOpacity="0.16" />
            <text x="18" y="25" fontSize="17" fontWeight="600" fill="#8FC6F6">
              STRAIN 14,2
            </text>
          </g>
          <g transform="translate(874 150)">
            <rect width="176" height="38" rx="19" fill="#19D992" fillOpacity="0.16" />
            <text x="18" y="25" fontSize="17" fontWeight="600" fill="#5FE3B4">
              RECOVERY 87 %
            </text>
          </g>

          {/* Band A — Helio, strain-blue */}
          <g transform="rotate(-12 440 280)">
            <ellipse
              cx="440"
              cy="280"
              rx="80"
              ry="118"
              fill="none"
              stroke="#565D66"
              strokeWidth="19"
            />
            <rect x="417" y="149" width="46" height="26" rx="9" fill="#1288D8" />
          </g>

          {/* vs */}
          <text
            x="600"
            y="298"
            textAnchor="middle"
            fontSize="44"
            fontWeight="600"
            fill="#767C86"
          >
            vs
          </text>

          {/* Band B — Whoop, recovery-green */}
          <g transform="rotate(12 760 280)">
            <ellipse
              cx="760"
              cy="280"
              rx="80"
              ry="118"
              fill="none"
              stroke="#767C86"
              strokeWidth="19"
            />
            <rect x="737" y="149" width="46" height="26" rx="9" fill="#19D992" />
          </g>

          {/* labels */}
          <text x="440" y="452" textAnchor="middle" fontSize="27" fontWeight="600" fill="#FFFFFF">
            Helio Strap
          </text>
          <text x="440" y="483" textAnchor="middle" fontSize="19" fontWeight="500" fill="#4DA8F0">
            syrová čísla
          </text>

          <text x="760" y="452" textAnchor="middle" fontSize="27" fontWeight="600" fill="#FFFFFF">
            Whoop 5.0
          </text>
          <text x="760" y="483" textAnchor="middle" fontSize="19" fontWeight="500" fill="#19D992">
            čísla + kontext
          </text>

          {/* heartbeat: raw blue data resolving into a clean green rise */}
          <polyline
            points="70,548 210,548 250,548 275,512 300,580 330,534 360,548 470,548 500,548 525,528 552,570 578,548 600,548"
            fill="none"
            stroke="#4DA8F0"
            strokeWidth="3"
            opacity="0.26"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <polyline
            points="600,548 760,546 900,528 1010,506 1130,480"
            fill="none"
            stroke="#19D992"
            strokeWidth="3.5"
            opacity="0.45"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <circle cx="1130" cy="480" r="5" fill="#19D992" />

          <text
            x="600"
            y="602"
            textAnchor="middle"
            fontSize="19"
            fontWeight="600"
            fill="#7B828B"
          >
            whoopdenik.cz
          </text>

          <rect
            x="1"
            y="1"
            width="1198"
            height="628"
            rx="27"
            fill="none"
            stroke="#FFFFFF"
            strokeOpacity="0.08"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}
