import type { Metadata } from "next";
import { alternates } from "@/lib/i18n";
import { AgeMastheadBg } from "@/components/AgeMastheadBg";
import { ArticleShell } from "@/components/ArticleShell";
import { Faq, type QA } from "@/components/Faq";
import { PhotoFigure } from "@/components/PhotoFigure";
import { JsonLd, articleLd, faqLd } from "@/lib/jsonld";
import { getArticle } from "@/lib/nav";

// English twin of app/(cs)/whoop-age. `slug` is the Czech slug: helpers map it.
const slug = "whoop-age";
const meta = getArticle(slug)!;
const title = "WHOOP Age: what my biological age showed after 21 days";
const description =
  "After 21 nights, Whoop put my biological age at 26.9 against a calendar age of 34.7. The nine metrics behind that number, and which ones actually lower or raise it.";

export const metadata: Metadata = {
  title,
  description,
  alternates: alternates("en", slug),
  openGraph: { title, description, url: "/en/whoop-age" },
};

const faq: QA[] = [
  {
    q: "What is WHOOP Age?",
    a: "An estimate of your physiological age that the app calculates from nine metrics across sleep, activity and fitness, comparing them with expert health guidelines. It can come out above or below your calendar age.",
  },
  {
    q: "How is it different from Pace of Aging?",
    a: "WHOOP Age is based on data from up to the last six months and changes slowly. Pace of Aging is recalculated every week and shows which direction your WHOOP Age is currently moving.",
  },
  {
    q: "When does Whoop calculate your biological age?",
    a: "WHOOP Age is part of the Peak tier, and the app unlocks it after 21 recorded nights.",
  },
  {
    q: "How do you lower your biological age according to Whoop?",
    a: "For each of the nine metrics, the app shows how many years it adds to or takes off your age, so you can see where the leverage is. For me, the biggest reductions come from VO₂ max (56 ml/kg/min, −3.9 years) and sleep consistency (91%, −2.8 years); the only metric that raises it is strength activity at zero (+1.5 years). According to Whoop, VO₂ max carries the most weight of the nine metrics.",
  },
  {
    q: "Is the number accurate?",
    a: "The model adds up the effect of the individual metrics, but it doesn't capture how they affect each other, doesn't account for diet or stress, and reports an exact number of years with no uncertainty range. So I take it as a rough estimate, not a medical diagnosis.",
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
        kicker="Living with Whoop"
        title="WHOOP Age: three weeks with a biological age"
        standfirst="After 21 days, the app showed me a WHOOP Age of 26.9 against a calendar age of 34.7, so 7.8 years younger. I turn 35 this year and became a father last year; staying healthy and fit for decades to come matters to me now more than ever."
        updated={meta.updated}
        source="en-healthspan"
        mastheadBg={<AgeMastheadBg />}
      >
        <h2>Why I bought Whoop for this</h2>
        <p>
          I&apos;m getting older like everyone else, but on the inside I want
          to work the way I did when I was younger. Becoming a father pushed
          this forward: health and fitness years down the line stopped being an
          abstract plan and became something I deal with now. When I saw that
          this could be measured, at least roughly, it was one of the main
          reasons I got Whoop.
        </p>

        <h2>What WHOOP Age is and how it calculates biological age</h2>
        <p>
          Healthspan is a section of the app that calculates two numbers.
          WHOOP Age is Whoop&apos;s estimate of your biological age, and it can
          come out above or below your calendar age; it changes slowly because
          it&apos;s based on data from up to the last six months. Next to it,
          Pace of Aging is a weekly indicator of direction: how fast that
          biological age is changing right now, more like a speedometer than
          an old photo.
        </p>
        <p>
          Both numbers are built on nine metrics: sleep consistency and hours
          of sleep, steps, time in heart rate zones 1–3 and 4–5, strength
          activity time, VO₂ max, resting heart rate and lean body mass. For
          each one, Whoop has a reference value derived from expert health
          guidelines, not from the average of its own users; above it, the
          metric lowers your age, below it, it raises it. The app unlocks
          WHOOP Age after 21 recorded nights.
        </p>

        <h2>What the app showed me after 21 days</h2>
        <p>
          The Health card showed me 26.9. Next to it, the app works out the
          difference from my calendar age: 7.8 years younger. There was no
          note anywhere saying it was a preliminary estimate; the only thing
          the app shows is the date of the next recalculation (in 4 days, for
          me), so WHOOP Age clearly updates weekly, not only after six months.
        </p>
        <p>
          A second number runs alongside it, Pace of Aging: 1.0x, unchanged
          from the previous week. The app wrote its own summary for it,
          &ldquo;Solid Progress&rdquo;: WHOOP Age improved by 0.3 years week
          over week, and the main lever was an increase in time in heart rate
          zones 1 to 3.
        </p>
        <PhotoFigure
          images={[
            {
              src: "/images/whoop-age-overview.jpg",
              alt: "Health card: WHOOP Age 26.9, 7.8 years younger, Pace of Aging 1.0x",
            },
            {
              src: "/images/whoop-age-detail.jpg",
              alt: "Healthspan detail with the weekly Solid Progress summary and the date of the next recalculation",
            },
          ]}
          caption="WHOOP Age of 26.9 against a calendar age of 34.7, and the weekly Solid Progress summary the app wrote on its own."
        />

        <h2>How accurate the biological age is</h2>
        <p>
          I know the number isn&apos;t entirely accurate. The model adds up the
          effect of the individual metrics, but it doesn&apos;t capture how
          they affect each other, and it reports an exact number of years with
          no uncertainty range, even though the underlying hazard ratios from
          research do carry uncertainty. It also doesn&apos;t account for diet
          or emotional stress.
        </p>
        <p>
          Even so, the number makes sense to me as a rough estimate. It tells
          me I&apos;m doing something right: 26.9 against a calendar age of
          34.7 is a signal to me that my body is biologically younger, even if
          the number on its own isn&apos;t a medical diagnosis.
        </p>

        <h2>What lowers biological age and what raises it</h2>
        <p>
          For me, this is the most important part of the whole feature: the
          app doesn&apos;t just show a number, it also shows which of those
          nine inputs lower your biological age and which raise it.
        </p>
        <p>
          Of all nine metrics, VO₂ max is the strongest predictor of all-cause
          mortality and carries the most weight in the model; you can see that
          in my numbers too. The app breaks them down like this: VO₂ max of 56
          ml/kg/min pulls my age down by 3.9 years, sleep consistency of 91% by
          2.8 years, resting heart rate of 51 bpm by 1.1 years, time in heart
          rate zones 1 to 3 (3:08 h a week) by 0.7 years, steps (11,628) by
          0.6 years and hours of sleep (7:43 h) by 0.2 years. The only metric
          that raises my age is strength activity: 0:00 h a week adds 1.5
          years. Added up, that&apos;s exactly the 7.8 years the app says
          I&apos;m younger.
        </p>
        <p>
          Sleep consistency doesn&apos;t just mean how many hours I sleep, but
          how regularly I go to bed and get up; above a certain amount of
          sleep, regularity matters more than duration. Seeing that this one
          metric takes almost three years off on its own is exactly the kind
          of proof that makes me want to keep up the routine.
        </p>
        <PhotoFigure
          images={[
            {
              src: "/images/whoop-age-sleep-strain.jpg",
              alt: "Sleep Consistency 91% (−2.8 years), Hours of Sleep 7:43 h (−0.2 years), zones 1–3 and 4–5",
            },
            {
              src: "/images/whoop-age-fitness.jpg",
              alt: "Strength Activity Time 0:00 h (+1.5 years), Steps 11,628, VO2 Max 56, RHR 51 bpm",
            },
          ]}
          caption="Breakdown by metric: for each one, the app shows how many years it adds to or takes off WHOOP Age."
        />

        <h2>Strength training by a single line</h2>
        <p>
          For each metric, the app draws a horizontal line from the worst
          value to the best and marks where I currently am with a dot. For
          strength activity, the scale runs from 0 to 2 hours a week, and my
          dot sits all the way on the left, at zero; that&apos;s the only
          metric that raises my WHOOP Age, by 1.5 years. I don&apos;t have to
          guess at anything: I just need to move that dot to the right, and
          that&apos;s exactly why my goal now is at least one strength workout
          a week.
        </p>
        <PhotoFigure
          aspect="wide"
          images={[
            {
              src: "/images/whoop-age-strength-crop.jpg",
              alt: "Strength Activity Time: dot at 0:00 h on a scale of 0 to 2 hours, +1.5 years",
            },
          ]}
          caption="The scale runs from 0 to 2 hours a week. My dot sits all the way on the left."
        />

        <h2>A trend line for the long run</h2>
        <p>
          The app also has a WHOOP Age Trend chart, where two lines run side
          by side: my WHOOP Age and my calendar age. For me, it only goes four
          weeks back so far, from July 19 to August 16, and both lines are
          flat, 26.9 against 34.7, because data that fresh has had no room to
          move yet. The Pace of Aging Trend chart is just as flat at 1.0x. For
          now, what I mostly take from it is that the timeline is set up;
          it&apos;ll be useful once there&apos;s more than one point on it.
        </p>
        <PhotoFigure
          images={[
            {
              src: "/images/whoop-age-trend.jpg",
              alt: "WHOOP Age Trend and Pace of Aging Trend: both lines still flat at 26.9 and 1.0x",
            },
          ]}
          caption="WHOOP Age Trend from July 19 to August 16: both lines still flat because the data is fresh."
        />

        <h2>The risk in the other direction</h2>
        <p>
          I&apos;m happy with my result, and that&apos;s exactly why the one
          metric pulling me up (strength activity at zero, plus 1.5 years)
          mostly makes me want to do something about it. But I can also
          imagine the opposite: if most of my charts came out older while I
          felt I was doing everything right, I&apos;d expect to feel
          depressed rather than motivated.
        </p>
        <p>
          That&apos;s exactly why it makes sense to me that the app always
          shows what caused the result next to the result itself. In
          Whoop&apos;s own internal survey, users who rated themselves as
          being in &ldquo;poor health&rdquo; had a WHOOP Age about 5 years
          higher than their calendar age on average, and those in
          &ldquo;excellent health&rdquo; about 5 years lower; so the number on
          its own can motivate you or take the wind out of your sails,
          depending on which side it lands.
        </p>
        <p>
          My first impressions of Whoop are in the{" "}
          <a href="/en/whoop-review">review</a>, and the price breakdown is in
          a separate article on{" "}
          <a href="/en/whoop-price">how much Whoop costs</a>. If you want to
          try it yourself, you can get your{" "}
          <a href="/en/whoop-free-month">first month free</a> through the link
          there.
        </p>

        <h2>Frequently asked questions</h2>
        <Faq items={faq} />
      </ArticleShell>
    </>
  );
}
