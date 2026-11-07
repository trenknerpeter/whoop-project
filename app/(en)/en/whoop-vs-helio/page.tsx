import type { Metadata } from "next";
import { alternates } from "@/lib/i18n";
import { ArticleShell } from "@/components/ArticleShell";
import { CompareTable } from "@/components/CompareTable";
import { Faq, type QA } from "@/components/Faq";
import { AsideNote } from "@/components/Note";
import { PhotoFigure } from "@/components/PhotoFigure";
import { HelioMastheadBg } from "@/components/HelioMastheadBg";
import { JsonLd, articleLd, faqLd } from "@/lib/jsonld";
import { getArticle } from "@/lib/nav";

// English twin of app/(cs)/whoop-vs-helio. `slug` is the Czech slug: helpers map it.
const slug = "whoop-vs-helio";
const meta = getArticle(slug)!;
const title = "Whoop vs Amazfit Helio Strap: I wore both";
const description =
  "A year with the Amazfit Helio Strap, then a switch to Whoop 5.0. Accuracy, BioCharge vs Recovery, data depth vs smart insights and the real costs in Kč — from my own wrist.";

export const metadata: Metadata = {
  title,
  description,
  alternates: alternates("en", slug),
  openGraph: { title, description, url: "/en/whoop-vs-helio" },
};

const faq: QA[] = [
  {
    q: "How much does the Amazfit Helio Strap cost in the Czech Republic?",
    a: "Currently around 2 499 Kč (e.g. at Decathlon). I bought mine for roughly €100. You pay once, with no monthly fees for the basic features.",
  },
  {
    q: "Is the Helio Strap really subscription-free?",
    a: "The basic measurements and data, yes — you pay once and have them for good. But AI coaching and smarter analysis run through the premium Zepp Aura subscription. So “no subscription” applies to the numbers, not to the insights.",
  },
  {
    q: "What is BioCharge and does it work?",
    a: "Amazfit's take on Recovery — a single energy number that drops during the day and refills with sleep (like Garmin's Body Battery). Personally, it never fit me well enough to plan around it. Whoop Recovery is a morning verdict based on HRV, resting heart rate and sleep, and I trust it more.",
  },
  {
    q: "Why did I end up switching to Whoop?",
    a: "Helio gives you great, accurate data, but it doesn't tell you what to do with it. Whoop turns the numbers into recommendations — it has a built-in AI coach, a polished app and things like biological age. If you care about health and longevity, that interpretation is worth the extra cost.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={articleLd({
          slug,
          title,
          description,
          updated: meta.updated,
          lang: "en",
        })}
      />
      <JsonLd data={faqLd(faq)} />
      <ArticleShell
        lang="en"
        kicker="Comparison"
        title="Whoop vs Amazfit Helio Strap: not all data is equal"
        standfirst="Both bands skip the screen and measure around the clock, but you pay for them in completely different ways: Helio once, Whoop every year. I wore the Helio for over a year and then switched to Whoop 5.0."
        updated={meta.updated}
        source="en-compare-helio"
        mastheadBg={<HelioMastheadBg />}
      >
        <p>
          The Amazfit Helio Strap arrived in summer 2025 with a clear ambition:
          to be a &ldquo;Whoop killer&rdquo;. It took the idea of a band with
          no screen and cut what people dislike most about Whoop: the{" "}
          <strong>recurring payment</strong>. For a one-time price it promises
          24/7 tracking of heart rate, sleep, strain and recovery in the Zepp
          app, with no further payments.
        </p>
        <p>
          I wore the Helio Strap for over a year — I bought it for roughly
          €100, wore it nonstop and logged workouts with it. Then I switched to
          Whoop 5.0. So this comparison isn&apos;t based on manufacturers&apos;
          spec sheets; I know both bands from my own wrist, and I liked the
          Helio.
        </p>

        <PhotoFigure
          images={[
            {
              src: "/images/helio-strap.png",
              alt: "Amazfit Helio Strap — a fabric band with no screen",
            },
          ]}
          caption="Amazfit Helio Strap — no screen, just a fabric strap and a sensor. The same philosophy as Whoop."
        />

        <AsideNote title="TL;DR verdict">
          The Helio Strap is great value for money — accurate, with incredibly
          deep workout data, and no subscription. Its weakness isn&apos;t the
          numbers, it&apos;s that it doesn&apos;t tell you what those numbers
          mean. That&apos;s exactly where Whoop has the edge: it turns data
          into recommendations. The question isn&apos;t &ldquo;which one
          measures better&rdquo;, but &ldquo;do I just want numbers, or also
          what to do with them?&rdquo;.
        </AsideNote>

        <h2>What it really costs</h2>
        <p>
          This is the core of the whole comparison. You buy the Helio Strap
          once and that&apos;s it — today you can get it for around 2 499 Kč
          (at Decathlon, for example). Whoop doesn&apos;t sell hardware: you
          pay for a membership (the band is included), which starts at roughly
          €199 a year for the basic Whoop One tier; the higher Peak and Life
          tiers cost more. Over three years of wear, the difference is huge:
        </p>
        <CompareTable
          headA="Amazfit Helio Strap"
          headB="Whoop 5.0"
          rows={[
            {
              label: "Upfront",
              a: { text: "~2 499 Kč once", tone: "recovery" },
              b: { text: "0 (included in membership)" },
            },
            {
              label: "Yearly payment",
              a: { text: "0 Kč", tone: "recovery" },
              b: { text: "from ~€199/year", tone: "warn" },
            },
            {
              label: "Cost over 3 years",
              a: { text: "~2 500 Kč", tone: "recovery" },
              b: { text: "~15 000 Kč", tone: "warn" },
            },
          ]}
        />
        <p>
          So the price of one Helio Strap gets you roughly half a year of
          Whoop. That&apos;s an argument you can&apos;t ignore — and it&apos;s
          why I put off Whoop for a year.
        </p>

        <h2>The main differences at a glance</h2>
        <CompareTable
          headA="Amazfit Helio Strap"
          headB="Whoop 5.0"
          rows={[
            {
              label: "Payment model",
              a: { text: "One-time", tone: "recovery" },
              b: { text: "Subscription", tone: "warn" },
            },
            {
              label: "Battery life",
              a: { text: "9–10 days", tone: "recovery" },
              b: { text: "10–14 days", tone: "recovery" },
            },
            {
              label: "Heart rate accuracy",
              a: { text: "Very good", tone: "recovery" },
              b: { text: "Very good", tone: "recovery" },
            },
            {
              label: "Workout data depth",
              a: { text: "Top-tier", tone: "recovery" },
              b: { text: "Decent" },
            },
            {
              label: "Insights and recommendations",
              a: { text: "Almost none", tone: "warn" },
              b: { text: "AI coach", tone: "recovery" },
            },
            {
              label: "App",
              a: { text: "Zepp — slower sync" },
              b: { text: "Polished", tone: "recovery" },
            },
          ]}
        />

        <h2>What the Helio Strap is really good at</h2>
        <p>
          I enjoyed wearing it for a year, and in a few ways it was more fun
          than I expected.
        </p>
        <ul>
          <li>
            <strong>Heart rate accuracy.</strong> Hats off here — not once did
            I catch it measuring wrong. Completely reliable.
          </li>
          <li>
            <strong>Workout data depth.</strong> This is what I enjoyed most.
            For runs I could see stride length and cadence — average and
            maximum — and I actually used them. Tennis went even further: it
            counted strokes and told forehands from backhands. That&apos;s a
            level of detail Whoop doesn&apos;t advertise.
          </li>
          <li>
            <strong>Battery.</strong> A real 9–10 days, even with 3–5 logged
            workouts a week and wearing it nonstop. Charging without any
            routine.
          </li>
          <li>
            <strong>Price.</strong> For the money, there&apos;s simply nothing
            better in the category.
          </li>
        </ul>
        <PhotoFigure
          images={[
            {
              src: "/images/helio-running-detail.jpg",
              alt: "Run detail in the Zepp app: cadence, stride length, steps",
            },
          ]}
          caption="Run detail in Zepp: average and maximum cadence, stride length, steps, elevation gain. This is how deep Helio goes on every workout."
        />

        <h2>BioCharge: an interesting idea that didn&apos;t convince me</h2>
        <p>
          BioCharge is Amazfit&apos;s answer to Whoop Recovery — a single
          number for how &ldquo;charged&rdquo; you are. Philosophically,
          though, it&apos;s different: it works like a fuel gauge. It fills up
          in the morning, drops during the day and only recharges with sleep
          (the same principle as Garmin&apos;s Body Battery). Whoop Recovery,
          on the other hand, is calculated once in the morning from HRV,
          resting heart rate and sleep, and doesn&apos;t change during the
          day.
        </p>
        <p>
          And here&apos;s my problem: it never fit me well enough to act on
          it. Almost every morning I started around 80 and then stopped
          watching it — because it&apos;s obvious it will drop after a workout,
          and by evening I&apos;d be at twenty or thirty. There was also a week
          when I kept waking up at around 30 and had no idea why — same
          routine, same sleep, and the app told me nothing about it. That&apos;s
          the whole weakness in a nutshell:{" "}
          <strong>I got a number, but no reason and no advice.</strong>
        </p>
        <h2>Where Whoop has the edge: from numbers to what to do with them</h2>
        <p>
          For me, this is the whole reason for the switch. Helio is a deep,
          accurate database about my body — but it&apos;s only a database. It
          hands you the numbers and the rest is up to you. Whoop reads the
          numbers for you and tells you what matters and what to do to keep
          it up or improve it.
        </p>
        <PhotoFigure
          images={[
            {
              src: "/images/whoop-running-1.jpg",
              alt: "Whoop run: route, pace and a message from the AI coach",
            },
            {
              src: "/images/whoop-running-2.jpg",
              alt: "Whoop run: Strain and heart rate zones",
            },
          ]}
          caption="Whoop on the same type of run: next to the numbers (Strain, heart rate zones) it adds a line from the AI coach — “that 26-minute hill run had some real bite to it”. Exactly the context Helio is missing."
        />
        <ul>
          <li>
            <strong>Built-in AI coach.</strong> Whoop has a smart coach right
            in the app — you ask and get an answer tied to your data. Helio
            offers something similar only through the premium Zepp Aura
            subscription, so &ldquo;no subscription&rdquo; applies to its
            numbers, not to its insights.
          </li>
          <li>
            <strong>Polished app.</strong> The Whoop app is noticeably faster
            and smoother. Zepp works, but syncing and loading data are slower
            and less refined.
          </li>
          <li>
            <strong>Biological age.</strong> In the Peak tier, Whoop calculates
            a biological age, which Helio doesn&apos;t have. After 21 nights the
            app showed me 26.9 against my calendar age of 34.7; I break down
            what goes into that number in my article on{" "}
            <a href="/en/whoop-age">biological age</a>.
          </li>
          <li>
            <strong>Community and reach.</strong> Seeing athletes I follow
            wearing Whoop and sharing the same data gives me a reference for
            where I actually stand. Helio doesn&apos;t have that network.
          </li>
        </ul>

        <AsideNote title="Want hard data on accuracy?">
          The most thorough independent test of the Helio Strap was made by
          The Quantified Scientist — a{" "}
          <a
            href="https://www.youtube.com/watch?v=qVVQd9Lg79s"
            target="_blank"
            rel="noopener noreferrer"
          >
            six-month scientific review
          </a>{" "}
          comparing it against a chest strap and an EEG headband. Great if you
          want accuracy in detail — my experience with heart rate matches his
          conclusions.
        </AsideNote>

        <h2>One more upside of the subscription that rarely gets mentioned</h2>
        <p>
          It sounds contradictory, but the membership has a nice side too. You
          don&apos;t deal with warranty or repairs — it&apos;s ongoing. And
          when a new band model comes out, you get it as part of the
          subscription instead of buying hardware again. With Helio you pay
          once, but that&apos;s also where it ends; if a better version
          appears in two years, you buy a whole new one.
        </p>

        <h2>What I&apos;d buy today</h2>
        <p>
          If you want <strong>accurate, raw and deep data</strong> at a great
          price and you&apos;ll put the insights together yourself, the Helio
          Strap is the best in its class — and it made me happy for a year. But
          if you care about{" "}
          <strong>health, longevity and wellbeing</strong> and want someone to
          translate those numbers into &ldquo;what now&rdquo;, Whoop is the
          best choice despite the price — and{" "}
          <a href="/en/whoop-free-month">
            your first month is free through my link
          </a>
          , so you can compare for yourself, for free.
        </p>
        <p>
          You&apos;ll find my first experience with Whoop in my{" "}
          <a href="/en/whoop-review">Whoop 5.0 review</a> and the full price
          breakdown in <a href="/en/whoop-price">how much Whoop costs</a>.
        </p>

        <h2>Frequently asked questions</h2>
        <Faq items={faq} />
      </ArticleShell>
    </>
  );
}
