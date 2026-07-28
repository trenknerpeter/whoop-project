// Art layer for the full-bleed homepage hero: breathing brand glows, three
// Whoop band cutouts crossfading over a slow Ken Burns drift, a self-drawing
// ECG trace and a recovery ring that springs to 90 %. Ported from the Claude
// Design prototype ("Whoop Journal Hero"); all motion is CSS-only (keyframes
// live in globals.css) and lands on a correct still frame for reduced-motion
// visitors.
//
// Layering note: the glows span the whole hero unclipped, while the band and
// ECG are confined to a right-anchored box. Clipping the glows to that box
// left a visible vertical seam mid-screen once the hero went full-bleed.
//
// The band photos are product shots with the white studio background cut out.
// To swap one, replace the file in public/images — nothing here needs to change.
const BANDS = [
  {
    src: "/images/band-black.webp",
    width: 794,
    height: 900,
    glow: "rgba(25,217,146,.18)",
    // Even 1/3 phase offsets against the 27s band-cycle. This works only
    // because the keyframe's opaque window is narrower than a third of the
    // cycle — see the note above band-cycle in globals.css. The prototype used
    // 0 / -13.5s / -18s, which left a ~1s window each cycle where all three
    // bands were transparent and the hero showed no product at all.
    delay: "0s",
  },
  {
    src: "/images/band-green.webp",
    width: 688,
    height: 782,
    glow: "rgba(25,217,146,.2)",
    delay: "-18s",
  },
  {
    src: "/images/band-blue.webp",
    width: 692,
    height: 793,
    glow: "rgba(77,168,240,.22)",
    delay: "-9s",
  },
];

const ECG_PATH =
  "M0,80 H170 L192,70 L204,88 L216,80 H258 L270,80 L282,18 L294,132 L306,80 H346 L358,62 L370,94 L382,80 H640";

// The Whoop app's three headline scores, in the app's own left-to-right order
// and tones: pale steel blue for sleep, recovery green, strain blue. `offset` is
// the leftover stroke-dashoffset against a 440 circumference, so it encodes how
// full each arc sits — strain is scored out of 21, not 100, hence 11.7 -> 56 %.
const RINGS = [
  {
    label: "Spánek",
    value: "96 %",
    color: "#93B4CE",
    offset: 18,
    delay: 0,
  },
  {
    label: "Recovery",
    value: "78 %",
    color: "#19D992",
    offset: 97,
    delay: 0.15,
  },
  {
    label: "Zátěž",
    value: "11.7",
    color: "#4DA8F0",
    offset: 195,
    delay: 0.3,
  },
];

function ScoreRing({
  label,
  value,
  color,
  offset,
  delay,
}: (typeof RINGS)[number]) {
  return (
    <div className="relative h-[104px] w-[104px] xl:h-[120px] xl:w-[120px]">
      {/* Soft scrim: the band cycles through black, green and light blue, so
          without a darker base the rings and their labels wash out on the
          lighter straps. Fades to nothing, so it reads as glow, not a plate. */}
      <div className="absolute inset-[-20%] rounded-full bg-[radial-gradient(circle,rgba(18,21,25,0.8)_38%,rgba(18,21,25,0)_72%)]" />
      <svg viewBox="0 0 160 160" className="relative h-full w-full -rotate-90">
        <circle
          cx="80"
          cy="80"
          r="70"
          fill="none"
          stroke="rgba(255,255,255,.12)"
          strokeWidth="9"
        />
        <circle
          className="animate-ring-fill"
          cx="80"
          cy="80"
          r="70"
          fill="none"
          stroke={color}
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray={440}
          strokeDashoffset={440}
          style={
            {
              "--ring-final": offset,
              animationDelay: `${0.8 + delay}s`,
              filter: `drop-shadow(0 0 8px ${color}66)`,
            } as React.CSSProperties
          }
        />
      </svg>
      <div
        className="animate-fade-late absolute inset-0 flex flex-col items-center justify-center gap-0.5"
        style={{ animationDelay: `${2.6 + delay}s` }}
      >
        <div className="font-display text-[19px] font-bold leading-none text-on-dark drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)] xl:text-[22px]">
          {value}
        </div>
        <div className="text-[8px] uppercase tracking-[0.18em] text-on-dark-soft drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] xl:text-[9px]">
          {label}
        </div>
      </div>
    </div>
  );
}

// Right-anchored box shared by the band, the ECG and the ring. Capped so the
// band can't become a billboard on ultra-wide displays.
const BAND_BOX = "absolute inset-y-0 right-0 w-[46%] max-w-[880px]";

export function HomeHeroVisual() {
  return (
    <div className="absolute inset-0 hidden lg:block" aria-hidden>
      {/* Ambient glows — full-hero, unclipped, breathing out of phase */}
      <div className="animate-breathe-a absolute -top-[24%] right-[2%] h-[120%] w-[34%] rounded-full bg-[radial-gradient(circle,rgba(25,217,146,.3)_0%,rgba(25,217,146,0)_68%)] blur-[30px]" />
      <div className="animate-breathe-b absolute -bottom-[30%] right-[26%] h-[120%] w-[36%] rounded-full bg-[radial-gradient(circle,rgba(77,168,240,.26)_0%,rgba(77,168,240,0)_68%)] blur-[30px]" />

      <div className={BAND_BOX}>
        {/* Band crossfade, clipped to its own box so the zoom can't spill
            across the copy column. */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="animate-kenburns absolute inset-0">
            {BANDS.map((band) => (
              /* eslint-disable-next-line @next/next/no-img-element -- repo convention, see PhotoFigure */
              <img
                key={band.src}
                src={band.src}
                alt=""
                width={band.width}
                height={band.height}
                className="animate-band-cycle absolute inset-[6%_4%_6%_8%] h-[88%] w-[88%] object-contain"
                style={{
                  animationDelay: band.delay,
                  filter: `brightness(1.08) contrast(1.06) drop-shadow(0 34px 50px rgba(0,0,0,.55)) drop-shadow(0 0 40px ${band.glow})`,
                }}
              />
            ))}
          </div>
        </div>

        {/* ECG trace, drawing itself once. Masked at the left so it emerges out
            of the dark rather than starting on a hard edge. */}
        <svg
          viewBox="0 0 640 160"
          preserveAspectRatio="none"
          className="absolute -left-[10%] bottom-[14%] h-[150px] w-[110%] overflow-visible [mask-image:linear-gradient(to_right,transparent,black_22%)]"
        >
          <path
            className="animate-ecg-draw"
            d={ECG_PATH}
            pathLength={100}
            fill="none"
            stroke="#19D992"
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeDasharray={100}
            strokeDashoffset={100}
            style={{ filter: "drop-shadow(0 0 6px rgba(25,217,146,.7))" }}
          />
        </svg>

        {/* Score rings — the app's summary row, floating over the band */}
        <div className="absolute left-1/2 top-[8%] flex -translate-x-1/2 gap-2.5 xl:gap-4">
          {RINGS.map((ring) => (
            <ScoreRing key={ring.label} {...ring} />
          ))}
        </div>
      </div>
    </div>
  );
}
