# Launch checklist — Whoop deník (Whoop blog)

Personal CZ wearables blog. Goal: rank for low-competition Czech Whoop queries
and earn referral credits. See the design doc in the Claude plan for full context.

## Before you go live — code placeholders

Search the repo for these and replace with real values:

- [ ] **`lib/site.ts` → `WHOOP_REFERRAL_URL`** — your real referral link from the
      Whoop app (☰ → "Get One Month Free"). Every CTA routes through `/go` to this.
- [ ] **`lib/site.ts` → `site.url`** — the real domain once purchased (leaning
      whoopdenik.cz).
- [x] **`lib/site.ts` → `site.name`** — set to "Whoop deník" (used in the header,
      footer, OG image, JSON-LD).

## Before you go live — content (`⚠ Doplnit` boxes)

Every page has bright dashed "⚠ Doplnit" boxes marking where your real data must go.
Grep for `TodoNote` or just open each page — nothing should ship with these still visible:

- [ ] Homepage — real photo (band on wrist / app screenshot)
- [ ] `/whoop-recenze` — real Recovery numbers, battery experience, photos
- [ ] `/whoop-vs-fitbit` — which Fitbit model, how long, side-by-side photo
- [ ] `/whoop-vs-helio` — real measured differences vs Helio, side-by-side photo
- [ ] `/whoop-cena` — current CZK prices from whoop.com (monthly + annual)
- [ ] `/jak-funguje-recovery` — Recovery graph screenshot + one real story
- [ ] `/zkusenosti` — real first-week/first-month notes (leave 3mo/6mo empty)

## Deploy

1. `npm run build` (must pass — currently green).
2. Push to a new GitHub repo, import to Vercel (free tier).
3. Add the domain in Vercel; update `site.url`.
4. Submit `https://<domain>/sitemap.xml` to Google Search Console.

## After launch (ongoing)

- Update `/zkusenosti` monthly (it's the "living" page Google likes).
- Watch Search Console → Queries. Any query showing impressions but no page → write one.
- Replace the `console.log` in `app/go/route.ts` with a real counter (Vercel
  Analytics custom event or KV) once you have traffic worth counting.

## Notes / risks

- Whoop referral is personal-sharing; sites like whoopreferral.com operate openly,
  but keep the footer disclaimer ("neoficiální osobní blog") in place.
- **You must keep an active Whoop membership with no scheduled cancellation** when a
  referral credit is awarded, or you forfeit it.
