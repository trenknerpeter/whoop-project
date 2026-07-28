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

        {/* Recovery ring */}
        <div className="absolute right-[8%] top-[10%] h-[118px] w-[118px] xl:h-[150px] xl:w-[150px]">
          {/* Soft scrim: the band cycles through black, green and light blue, so
              without a darker base the ring and its label wash out on the light
              straps. Fades to nothing, so it reads as glow rather than a plate. */}
          <div className="absolute inset-[-22%] rounded-full bg-[radial-gradient(circle,rgba(18,21,25,0.78)_36%,rgba(18,21,25,0)_70%)]" />
          <svg viewBox="0 0 160 160" className="relative h-full w-full -rotate-90">
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="rgba(255,255,255,.1)"
              strokeWidth="7"
            />
            <circle
              className="animate-ring-fill"
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="#19D992"
              strokeWidth="7"
              strokeLinecap="round"
              strokeDasharray={440}
              strokeDashoffset={440}
              style={{ filter: "drop-shadow(0 0 8px rgba(25,217,146,.55))" }}
            />
          </svg>
          <div className="animate-fade-late absolute inset-0 flex flex-col items-center justify-center gap-0.5">
            <div className="font-display text-[24px] font-bold leading-none text-on-dark drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)] xl:text-[30px]">
              90 %
            </div>
            <div className="text-[9px] uppercase tracking-[0.24em] text-on-dark-soft drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] xl:text-[10px]">
              Recovery
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
