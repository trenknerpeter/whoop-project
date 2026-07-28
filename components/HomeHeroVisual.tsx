// Right-hand column of the homepage hero: breathing brand glows, three Whoop
// band cutouts crossfading over a slow Ken Burns drift, a self-drawing ECG
// trace and a recovery ring that springs to 90 %. Ported from the Claude Design
// prototype ("Whoop Journal Hero"); all motion is CSS-only (keyframes live in
// globals.css) and lands on a correct still frame for reduced-motion visitors.
//
// The band photos are product shots with the white studio background cut out.
// To swap one, replace the file in public/images — nothing here needs to change.
const BANDS = [
  {
    src: "/images/band-black.webp",
    width: 794,
    height: 900,
    glow: "rgba(25,217,146,.18)",
    // Animation delays are load-bearing: 0 / -18s / -13.5s against a 27s cycle
    // keeps exactly one band visible at t=0 (black), so the hero never opens on
    // a double exposure. Even thirds (-9s) would land mid-fade — don't "fix".
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
    delay: "-13.5s",
  },
];

const ECG_PATH =
  "M0,80 H170 L192,70 L204,88 L216,80 H258 L270,80 L282,18 L294,132 L306,80 H346 L358,62 L370,94 L382,80 H640";

export function HomeHeroVisual() {
  return (
    /* h-full is load-bearing: every child is absolutely positioned, so without
       it this box collapses to zero height and the whole visual disappears. */
    <div className="relative h-full overflow-hidden" aria-hidden>
      {/* Ambient glows, breathing out of phase with each other */}
      <div className="animate-breathe-a absolute -right-[14%] -top-[18%] h-[70%] w-[60%] rounded-full bg-[radial-gradient(circle,rgba(25,217,146,.32)_0%,rgba(25,217,146,0)_68%)] blur-[30px]" />
      <div className="animate-breathe-b absolute -bottom-[22%] -left-[12%] h-[75%] w-[65%] rounded-full bg-[radial-gradient(circle,rgba(77,168,240,.28)_0%,rgba(77,168,240,0)_68%)] blur-[30px]" />

      {/* Band crossfade */}
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

      {/* ECG trace, drawing itself once */}
      <svg
        viewBox="0 0 640 160"
        preserveAspectRatio="none"
        className="absolute -left-[4%] right-0 bottom-[14%] h-[150px] w-[108%] overflow-visible"
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

      {/* Recovery ring. Scales down below lg — the prototype's fixed 150px was
          sized for a wider column and crowds the band on narrower screens. */}
      <div className="absolute right-[8%] top-[10%] h-[118px] w-[118px] lg:h-[150px] lg:w-[150px]">
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
          <div className="font-display text-[24px] font-bold leading-none text-on-dark drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)] lg:text-[30px]">
            90 %
          </div>
          <div className="text-[9px] uppercase tracking-[0.24em] text-on-dark-soft drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] lg:text-[10px]">
            Recovery
          </div>
        </div>
      </div>
    </div>
  );
}
