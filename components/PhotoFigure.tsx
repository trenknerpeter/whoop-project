"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Img = { src: string; alt: string };

// Thumbnail(s) inside the article prose, with a click-to-zoom lightbox.
// One image → single small thumbnail; multiple → responsive grid.
export function PhotoFigure({
  images,
  caption,
  aspect = "portrait",
}: {
  images: Img[];
  caption?: string;
  // "portrait" fits phone-screenshot proportions (tall frame). "wide" is for
  // landscape crops (e.g. a cropped-down detail strip) that would otherwise
  // float tiny and letterboxed inside the tall portrait frame.
  aspect?: "portrait" | "wide";
}) {
  const [active, setActive] = useState<Img | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    // Lock page scroll so the lightbox stays put and the image is centered.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active]);

  const single = images.length === 1;
  // Portrait frame assumes phone-screenshot proportions (see comment below);
  // a landscape crop needs a wider, shorter frame or it floats tiny and
  // letterboxed inside all that unused vertical space.
  const frameMaxW = aspect === "wide" ? "max-w-[420px]" : "max-w-[240px]";
  const frameH = aspect === "wide" ? "h-32 sm:h-36" : "h-64 sm:h-72";

  return (
    <figure className="not-prose my-7">
      {/* Every thumbnail gets the same fixed max-width regardless of the
          source photo's aspect ratio. Sizing the frame off a fixed height
          instead (letting width fall out of each photo's own proportions)
          made portrait shots — phone screenshots especially — render at
          wildly different, often much narrower, widths than the prose
          column above and below them. */}
      <div className="flex flex-wrap justify-center gap-3">
        {images.map((img) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActive(img)}
            aria-label={`Zvětšit: ${img.alt}`}
            className={`group ${frameMaxW} overflow-hidden rounded-2xl border border-line bg-surface transition-shadow hover:shadow-widget ${
              single ? "" : "flex-1 basis-[200px]"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className={`${frameH} w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]`}
            />
          </button>
        ))}
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-ink-muted">
          {caption}
        </figcaption>
      )}

      {active &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center overflow-hidden bg-anthracite/90 p-5 backdrop-blur-sm"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={active.src}
              alt={active.alt}
              style={{ maxHeight: "88vh", maxWidth: "92vw" }}
              className="rounded-2xl object-contain shadow-widget"
            />
            <span className="absolute right-5 top-5 text-2xl text-on-dark-soft">
              ✕
            </span>
          </div>,
          document.body,
        )}
    </figure>
  );
}
