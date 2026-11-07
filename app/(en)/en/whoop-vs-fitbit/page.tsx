import type { Metadata } from "next";
import { alternates } from "@/lib/i18n";
import { ArticleShell } from "@/components/ArticleShell";
import { CompareTable } from "@/components/CompareTable";
import { Faq, type QA } from "@/components/Faq";
import { AsideNote } from "@/components/Note";
import { PhotoFigure } from "@/components/PhotoFigure";
import { FitbitMastheadBg } from "@/components/FitbitMastheadBg";
import { JsonLd, articleLd, faqLd } from "@/lib/jsonld";
import { getArticle } from "@/lib/nav";

// English twin of app/(cs)/whoop-vs-fitbit. `slug` is the Czech slug: helpers map it.
const slug = "whoop-vs-fitbit";
const meta = getArticle(slug)!;
const title = "Whoop vs Fitbit Air: casual band vs in-depth data";
const description =
  "Google's Fitbit Air is also a band with no screen — just much more casual. Comfort, battery life, heart rate and sleep accuracy, the AI coach push and the real price in Kč. I wore it alongside Whoop 5.0.";

export const metadata: Metadata = {
  title,
  description,
  alternates: alternates("en", slug),
  openGraph: { title, description, url: "/en/whoop-vs-fitbit" },
};

const faq: QA[] = [
  {
    q: "How much does the Fitbit Air cost in the Czech Republic?",
    a: "The band itself costs roughly 2 500 Kč (around €100) and you pay once. But the AI coach and deeper analysis run through the Premium subscription at 2 999 Kč a year. So “no subscription” only applies to the basic numbers.",
  },
  {
    q: "Is the Fitbit Air a screenless band like Whoop?",
    a: "Yes. It's a fabric strap with a sensor and no screen — close in philosophy to Whoop and the Amazfit Helio. The difference is the focus: the Fitbit Air is casual and lifestyle, aimed at a general overview, not in-depth data.",
  },
  {
    q: "How accurately does it measure heart rate and sleep?",
    a: "Sleep fit me well and the numbers were very similar to what the Amazfit Helio gave me. Heart rate didn't convince me, though — I saw deviations during workouts and wouldn't rely on it for serious interval or strength training.",
  },
  {
    q: "Is Premium worth 2 999 Kč a year?",
    a: "Mainly you get the AI coach and smarter insights. Without Premium you have an estimated 70–80% of the features. For “just” an AI coach that's a lot of money — it depends on whether its advice actually changes your behavior. Whoop includes the coach and biological age in the membership price.",
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
        title="Whoop vs Fitbit Air: not all bands are equal"
        standfirst="Google has released its own screenless band, the Fitbit Air. Same form as Whoop, just much more casual: the most comfortable band I've worn, but shallower data and the AI coach only with a subscription. I wore it for a few weeks alongside Whoop 5.0."
        updated={meta.updated}
        source="en-compare-fitbit"
        mastheadBg={<FitbitMastheadBg />}
      >
        <p>
          In my head, Fitbit was filed under watches with a screen, so the
          Fitbit Air surprised me. With it, Google stepped right into the
          category Whoop invented: <strong>a band with no screen</strong>, a
          fabric strap, a sensor on the underside, and everything is read in
          the app. The same concept as Whoop or the Amazfit Helio, just for a
          one-time price of roughly €100.
        </p>
        <p>
          I wore it for a few weeks alongside Whoop 5.0, so this isn&apos;t
          based on the manufacturer&apos;s spec sheet. The good news first:{" "}
          <strong>the comfort is top-notch</strong>.
        </p>

        <PhotoFigure
          images={[
            {
              src: "/images/fitbit1.jpg",
              alt: "Unboxed Google Fitbit Air — box, fabric band and charging cable",
            },
            {
              src: "/images/fitbit-wrist.jpg",
              alt: "Fitbit Air on the wrist next to the box and charger",
            },
          ]}
          caption="Google Fitbit Air: a fabric band with no screen, a sensor module and a magnetic charger. The same philosophy as Whoop — everything happens in the app."
        />

        <AsideNote title="TL;DR verdict">
          The Fitbit Air is the most comfortable and most &ldquo;casual&rdquo;
          of all the screenless bands — small, very light, ideal for lifestyle
          users who want a gentle overview, not a data lab. But it&apos;s
          weaker where it matters: heart rate didn&apos;t seem accurate to me,
          it tracks only the basics for sports, and it hides the real insights
          behind Premium at 2 999 Kč a year, which is a lot for
          &ldquo;just&rdquo; an AI coach. If you want in-depth data and advice
          you trust, Whoop still leads.
        </AsideNote>

        <h2>The most comfortable band in the whole category</h2>
        <p>
          This is a clear plus. The Fitbit Air is{" "}
          <strong>really small and light</strong> — after a few minutes you
          stop noticing it on your wrist, whether asleep or working out. Whoop
          5.0 isn&apos;t a brick either, but the Fitbit&apos;s sensor module is
          slimmer and the fabric strap fits slightly better. If anything on
          your wrist bothers you, this one will be the most comfortable of the
          three.
        </p>

        <h2>Quick comparison</h2>
        <CompareTable
          headA="Fitbit Air"
          headB="Whoop 5.0"
          rows={[
            {
              label: "Wrist display",
              a: { text: "None" },
              b: { text: "None" },
            },
            {
              label: "Comfort and weight",
              a: { text: "Lightest", tone: "recovery" },
              b: { text: "Light" },
            },
            {
              label: "Battery life",
              a: { text: "5–7 days", tone: "warn" },
              b: { text: "10–14 days", tone: "recovery" },
            },
            {
              label: "Heart rate accuracy",
              a: { text: "Average", tone: "warn" },
              b: { text: "Very good", tone: "recovery" },
            },
            {
              label: "Sleep accuracy",
              a: { text: "Good", tone: "recovery" },
              b: { text: "Very good", tone: "recovery" },
            },
            {
              label: "Sports in depth",
              a: { text: "Basics only", tone: "warn" },
              b: { text: "Decent + AI coach", tone: "recovery" },
            },
            {
              label: "Focus",
              a: { text: "Casual / lifestyle" },
              b: { text: "In-depth recovery", tone: "recovery" },
            },
            {
              label: "AI coach and insights",
              a: { text: "Premium only", tone: "warn" },
              b: { text: "Included in membership", tone: "recovery" },
            },
          ]}
        />

        <h2>Battery: 5–7 days, noticeably less</h2>
        <p>
          This is where the Fitbit Air loses. In practice I got{" "}
          <strong>5 to 7 days</strong> per charge — usable, but noticeably
          less than Whoop (10–14 days) and Helio (9–10 days). For a band whose
          main point is that you wear it nonstop, including during sleep,
          every extra charge is annoying. It&apos;s not a dealbreaker, but
          it&apos;s a class below the competition.
        </p>

        <h2>Accuracy: heart rate didn&apos;t convince me, sleep did</h2>
        <p>
          I&apos;d split this into two parts.{" "}
          <strong>Heart rate didn&apos;t seem very accurate to me</strong> —
          during workouts I saw deviations and values that didn&apos;t match
          how I felt. It&apos;s enough for a general daily overview, but I
          wouldn&apos;t rely on it for more serious interval or strength
          training. For comparison: with Helio and Whoop, heart rate matched
          much better for me.
        </p>
        <p>
          <strong>Sleep, on the other hand, was a pleasant surprise.</strong>{" "}
          The stages and total time made sense to me and the numbers were{" "}
          <strong>very similar to what the Amazfit Helio showed me</strong> —
          which I take as a good sign. If sleep and rest are your main metric,
          the Fitbit Air handles that part decently.
        </p>
        <PhotoFigure
          images={[
            {
              src: "/images/fitbit-sensor.jpg",
              alt: "Underside of the Fitbit Air with the sensor module and optical sensors",
            },
          ]}
          caption="The sensor module on the underside. Optical measurement handles sleep well, but I ran into deviations in heart rate under load."
        />

        <h2>AI coach everywhere — too much</h2>
        <p>
          Something I couldn&apos;t miss: the Fitbit Air{" "}
          <strong>pushes the AI coach hard</strong>. It&apos;s on the
          app&apos;s home screen, it pops up in cards, it invites you to
          &ldquo;Ask Coach&rdquo; at practically every step. I get the intent —
          it&apos;s the main selling point of Premium — but to me it felt{" "}
          <strong>too pushy</strong>. I want to open the app, glance at the
          numbers and move on, not keep dismissing prompts to chat with a
          coach.
        </p>
        <PhotoFigure
          images={[
            {
              src: "/images/Fitbit-app.jpg",
              alt: "Fitbit app home screen: Readiness score, sleep, steps, cardio and the Ask Coach button",
            },
          ]}
          caption="The home screen: Readiness score, sleep, cardio, steps — and the ever-present “Ask Coach”. There's a Premium badge at the top too, because the smarter features are paid."
        />
        <p>
          Whoop has a coach too, but it&apos;s tucked inside: you ask when you
          want to and get an answer tied to your data. I don&apos;t feel like
          it&apos;s jumping at me.
        </p>

        <h2>Casual first: great for lifestyle, thin on depth</h2>
        <p>
          This is the core of the Fitbit Air&apos;s whole identity.{" "}
          <strong>It feels much more casual</strong> than Whoop or Helio —
          it&apos;s a band for someone who wants a healthier routine, a gentle
          nudge and a clear score, not raw data to analyze. For lifestyle
          users it&apos;s a likable, approachable choice.
        </p>
        <p>
          The flip side: <strong>it lacks depth</strong>. Where Whoop breaks
          down your Strain, recovery and{" "}
          <a href="/en/whoop-age">biological age</a>, and Helio pours out
          workout details, the Fitbit Air stays on the surface. You get a nice
          overview, but not the level of data you&apos;d use to fine-tune your
          fitness.
        </p>

        <h2>Sports: basics only</h2>
        <p>
          Sports tracking is weaker than I expected. For runs it gives you the{" "}
          <strong>basics</strong> — heart rate, time, calories — but{" "}
          <strong>deeper insights are missing</strong>. No cadence, stride
          length or analysis that would actually help a runner. That&apos;s
          exactly what I enjoyed about Helio (cadence and stride length for
          runs, even stroke counting for tennis), and Whoop adds strain, heart
          rate zones and a line from the coach. The Fitbit Air is poorer than
          both here — fine for occasional sport, not for training with
          ambition.
        </p>

        <h2>What it really costs</h2>
        <p>
          At first glance the price is appealing: the band itself costs
          roughly <strong>€100 (around 2 500 Kč) and you pay once</strong>.
          For that, I&apos;d estimate you get 70–80% of what the band can do —
          the basic numbers on heart rate, sleep, activity and Readiness. The
          catch is the rest: the AI coach and smarter insights are{" "}
          <strong>only with Premium, which costs 2 999 Kč a year</strong>. And
          that&apos;s quite a lot for &ldquo;just&rdquo; an AI coach.
        </p>
        <CompareTable
          headA="Fitbit Air"
          headB="Whoop 5.0"
          rows={[
            {
              label: "Upfront",
              a: { text: "~2 500 Kč once", tone: "recovery" },
              b: { text: "0 (included in membership)" },
            },
            {
              label: "Subscription",
              a: { text: "Premium ~2 999 Kč/year (optional)", tone: "warn" },
              b: { text: "from ~€199/year", tone: "warn" },
            },
            {
              label: "3 years without AI",
              a: { text: "~2 500 Kč", tone: "recovery" },
              b: { text: "~15 000 Kč", tone: "warn" },
            },
            {
              label: "3 years with AI coach",
              a: { text: "~11 500 Kč", tone: "warn" },
              b: { text: "~15 000 Kč (coach included)", tone: "warn" },
            },
          ]}
        />
        <p>
          If a basic overview is enough for you, the Fitbit Air is much
          cheaper and the gap to Whoop is huge. But as soon as you want what
          most people buy a band like this for — advice and interpretation —
          the gap shrinks and you have to pay extra every year.
        </p>

        <h2>When the Fitbit Air and when Whoop</h2>
        <p>
          Get the Fitbit Air if you want{" "}
          <strong>the most comfortable, casual band</strong> for a daily
          overview of sleep and activity, you like Google&apos;s ecosystem and
          a one-time price — and you don&apos;t mind shallower data or a pushy
          coach. For lifestyle users it&apos;s a good entry ticket into the
          world of screenless bands.
        </p>
        <p>
          Whoop makes sense if you care about{" "}
          <strong>health, recovery and in-depth data</strong> and want someone
          to translate the numbers into &ldquo;what now&rdquo; — more accurate
          heart rate, strain analysis, biological age and a coach included.
          How I see it after wearing it longer, I write in my{" "}
          <a href="/en/whoop-review">Whoop 5.0 review</a>; if you&apos;re more
          concerned with a one-time price without a subscription, I&apos;d
          also suggest a look at the{" "}
          <a href="/en/whoop-vs-helio">comparison with the Amazfit Helio Strap</a>
          . And if Whoop appeals to you,{" "}
          <a href="/en/whoop-free-month">
            your first month is free through my link
          </a>{" "}
          — you can compare for yourself, for free.
        </p>

        <h2>Frequently asked questions</h2>
        <Faq items={faq} />
      </ArticleShell>
    </>
  );
}
