import type { Metadata } from "next";
import { alternates } from "@/lib/i18n";
import { ArticleShell } from "@/components/ArticleShell";
import { CompareTable } from "@/components/CompareTable";
import { Faq, type QA } from "@/components/Faq";
import { AsideNote } from "@/components/Note";
import { PhotoFigure } from "@/components/PhotoFigure";
import { JsonLd, articleLd, faqLd } from "@/lib/jsonld";
import { getArticle } from "@/lib/nav";

// English twin of app/(cs)/whoop-recenze. `slug` is the Czech slug: helpers map it.
const slug = "whoop-recenze";
const meta = getArticle(slug)!;
const title = "Whoop 5.0 review: why I came back to it";
const description =
  "Heart rate accuracy, strap comfort, 10-day battery life and whether a yearly membership makes sense next to a one-off purchase like the Helio Strap or Fitbit Air — a first review after returning on the Peak tier.";

export const metadata: Metadata = {
  title,
  description,
  alternates: alternates("en", slug),
  openGraph: { title, description, url: "/en/whoop-review" },
};

const faq: QA[] = [
  {
    q: "Is Whoop 5.0 accurate?",
    a: "For resting heart rate, sleep and breathing it's among the most accurate on the market. The tester the5krunner measured a 0.98 correlation with a chest strap for running, cycling and swimming, and The Quantified Scientist compares wearables against ECG and lab sleep studies, where Whoop is among the best. It's weaker during strength training and HIIT, when the optical sensor on the wrist reads heart rate less well; serious athletes wear it on the bicep for that reason. I've never worn two devices at the same time, but next to the Apple Watch, Helio Strap and Fitbit Air it gives me almost the same numbers in everyday wear and on runs.",
  },
  {
    q: "Is Whoop worth it without a screen?",
    a: "Whoop has no screen on purpose — it isn't about information on your wrist but about recovery and sleep, which is a different job from a smartwatch. You read the data on your phone in the morning. I didn't need to get used to it, because for a year before Whoop I wore the Helio Strap, which has no screen either. If what you want is the time and notifications on your wrist, this tool won't replace any of that.",
  },
  {
    q: "How much does Whoop cost in 2026?",
    a: "You pay for a membership and the device is included. One is €199 a year, Peak (with Healthspan and Stress Monitor) is €264 a year, Life with ECG and a blood pressure estimate is €399 a year. The membership is yearly; monthly payment only opens up after you've completed a twelve-month period.",
  },
  {
    q: "How long does the battery last and how does it charge?",
    a: "The manufacturer says 14+ days; mine lasts 10 days with 24/7 wear and regular exercise. Peak and Life charge with the wireless PowerPack, which slides onto the band while you wear it, so you don't have to take the band off and there are no gaps in the data. One comes with a wired charger, so it doesn't work that way.",
  },
  {
    q: "When does Whoop calculate your biological age?",
    a: "WHOOP Age is part of the Peak tier, and the app unlocks it after 21 recorded nights.",
  },
  {
    q: "Who is Whoop for, and who isn't it for?",
    a: "It suits people who want to track sleep, recovery and strain and let the numbers guide them. It doesn't make sense if you want a watch you can check at a glance, or if you know a daily score is more likely to stress you out.",
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
        kicker="Review"
        title="Whoop 5.0: why I came back to it"
        standfirst="Last year I put Whoop away after a month as an expensive toy. Now I have it back, on the Peak tier. These are my impressions from the first weeks; I'm logging the long-term data in a diary."
        updated={meta.updated}
        source="en-review"
      >
        <h2>What Whoop measures</h2>
        <p>
          Whoop has no screen. It doesn&apos;t show the time or steps on your
          wrist; you read it in the app, in the morning. Instead of watch faces
          it deals with three numbers: how much your body handled (Strain), how
          well it recovered (Recovery) and how you slept.
        </p>
        <p>
          Last year I didn&apos;t see the value in that. Now I want two things
          from it: sleep and recovery.
        </p>
        <PhotoFigure
          images={[
            {
              src: "/images/whoop-app-home.jpg",
              alt: "Whoop app home screen: Sleep 95%, Recovery 36%, Strain 5.0",
            },
          ]}
          caption="Three numbers on one screen: sleep 95%, Recovery 36%, Strain 5.0. Below them, a sentence on why Recovery is lower that day."
        />

        <h2>Heart rate accuracy</h2>
        <p>
          I&apos;ve never worn two devices at the same time, so I have no
          side-by-side measurements. What I have is a sequence: years of Apple
          Watch, then a year of Helio Strap, then a few weeks of Fitbit Air
          alongside Whoop. In everyday wear and on runs, Whoop gives me almost
          the same numbers as the bands before it.
        </p>
        <p>
          Independent measurements point the same way. The tester{" "}
          <a
            href="https://the5krunner.com/2025/10/31/2026-whoop-5-0-mg-review-discount-accuracy-strain-recovery-athletes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            the5krunner
          </a>{" "}
          measured a 0.98 correlation with a chest strap for running, cycling
          and swimming. The Quantified Scientist compares wearables against ECG
          and lab sleep measurement, and in his tests Whoop is among the best
          for heart rate and sleep stages. It&apos;s weaker with weights and
          HIIT, when the optical sensor on the wrist underestimates heart rate;
          people who guide strength training by heart rate wear Whoop on the
          bicep.
        </p>
        <PhotoFigure
          images={[
            {
              src: "/images/whoop-app-recovery.jpg",
              alt: "Recovery detail: HRV 18, resting heart rate 51, respiratory rate 17.4, sleep 95%",
            },
            {
              src: "/images/whoop-app-sleep.jpg",
              alt: "Sleep detail: 95% performance, consistency, efficiency, sleep stress",
            },
          ]}
          caption="The numbers Recovery is built from: HRV 18, resting heart rate 51, respiratory rate 17.4 and the sleep breakdown."
        />
        <AsideNote title="Where to find hard accuracy data">
          <a
            href="https://www.quantified.reviews/reviews/devicesiusemyself"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Quantified Scientist
          </a>{" "}
          compares wearables against ECG and lab sleep measurement (PSG). It&apos;s
          the only source in this category that measures against a reference,
          not against another band.
        </AsideNote>

        <h2>How it sits on the wrist</h2>
        <p>
          I wear it 24/7. The knit SuperKnit strap is much more comfortable than
          the Helio Strap. The Fitbit Air was comfortable too, but with Whoop I
          value something else: the clasp. The strap doesn&apos;t stick out
          anywhere on the other side, it can&apos;t come undone on its own, and
          that makes the band feel thinner than both the Fitbit and the Helio.
        </p>
        <PhotoFigure
          images={[
            {
              src: "/images/whoop-wrist.jpg",
              alt: "Whoop 5.0 on the wrist — graphite knit strap and metal clasp with the logo",
            },
            {
              src: "/images/whoop-strap.jpg",
              alt: "Whoop 5.0 up close — the sensor itself in a graphite SuperKnit strap",
            },
          ]}
          caption="Peak's graphite SuperKnit strap. The end of the strap doesn't stick out anywhere, so there's nothing for the band to catch on."
        />

        <h2>Charging</h2>
        <p>
          Charging while you wear it comes with Peak and Life, not the base One.
          It&apos;s easy to miss in the price list. Peak and Life get the
          wireless PowerPack, which slides onto the band and charges it on your
          wrist, so you don&apos;t have to take the band off. One comes with a
          basic wired charger.
        </p>
        <p>
          The manufacturer says the battery lasts 14+ days. Mine lasts 10 days
          with 24/7 wear and regular exercise. Because it charges on the wrist,
          I don&apos;t lose any data.
        </p>

        <h2>The app</h2>
        <p>
          The app doesn&apos;t just show the numbers; it adds a sentence on what
          they mean. The Journal works like this: you log behaviors (alcohol,
          stress, supplements), and Whoop then shows you what pushes your
          Recovery and HRV up or down. Stress Monitor and Health Monitor are part
          of Peak and Life, not One.
        </p>
        <p>
          I message with Coach regularly. It gives tips and advice and explains
          the individual scores and metrics, so I don&apos;t have to look
          elsewhere for what each number means.
        </p>
        <p>
          WHOOP Age (Healthspan) is also on Peak. The app unlocks it after 21
          recorded nights; it then showed me 26.9 against my calendar age of
          34.7. I break it down by the nine metrics in my article on{" "}
          <a href="/en/whoop-age">biological age</a>.
        </p>
        <PhotoFigure
          images={[
            {
              src: "/images/whoop-app-strain.jpg",
              alt: "Strain 13.7 detail with heart rate zones, steps and a sentence from Coach",
            },
            {
              src: "/images/whoop-app-trends.jpg",
              alt: "Daily activities (cycling) and the weekly Strain trend",
            },
          ]}
          caption="Strain 13.7 broken down into heart rate zones, and the weekly strain trend. Each number always comes with one sentence on what it meant."
        />

        <h2>Price</h2>
        <p>
          Whoop doesn&apos;t sell hardware. You pay for a membership and the
          device is included:{" "}
          <strong>One €199 a year</strong>, <strong>Peak €264 a year</strong>,{" "}
          <strong>Life €399 a year</strong>. Life runs on the WHOOP MG device,
          not the 5.0. The device comes with a lifetime warranty.
        </p>
        <p>
          One thing I had wrong here until now:{" "}
          <strong>you don&apos;t pay for Whoop month to month.</strong> The
          membership is yearly. Monthly payment isn&apos;t a standard option at
          sign-up and only opens up after you&apos;ve completed a twelve-month
          period. So it isn&apos;t a small amount every month, but one yearly
          payment up front.
        </p>
        <CompareTable
          headA="Whoop One"
          headB="Whoop Peak"
          rows={[
            {
              label: "Price per year",
              a: { text: "€199", tone: "recovery" },
              b: { text: "€264", tone: "warn" },
            },
            {
              label: "Device",
              a: { text: "WHOOP 5.0" },
              b: { text: "WHOOP 5.0" },
            },
            {
              label: "Charging",
              a: { text: "wired charger", tone: "warn" },
              b: { text: "charges while worn", tone: "recovery" },
            },
            {
              label: "Recovery, Strain, Sleep",
              a: { text: "yes", tone: "recovery" },
              b: { text: "yes", tone: "recovery" },
            },
            {
              label: "WHOOP Coach",
              a: { text: "yes", tone: "recovery" },
              b: { text: "yes", tone: "recovery" },
            },
            {
              label: "Healthspan (WHOOP Age)",
              a: { text: "no", tone: "warn" },
              b: { text: "after 21 nights", tone: "recovery" },
            },
            {
              label: "Stress and Health Monitor",
              a: { text: "no", tone: "warn" },
              b: { text: "yes", tone: "recovery" },
            },
          ]}
        />
        <p>
          The full breakdown in Czech crowns and the individual plans are in my
          article <a href="/en/whoop-price">how much Whoop costs</a>.
        </p>

        <h2>What bothers me</h2>
        <ul>
          <li>
            <strong>You keep paying, always.</strong> No one-off purchase. When
            you stop paying, you stop measuring.
          </li>
          <li>
            <strong>A fragmented chat with Coach.</strong> You can open Coach
            from several places in the app, and I don&apos;t get the sense they
            share context. When I&apos;m working through something and open the
            chat from somewhere else an hour later, I start over. I&apos;d like
            one chat that knows what we&apos;ve already covered.
          </li>
          <li>
            <strong>Heart rate during strength training.</strong> The optical
            sensor on the wrist underestimates during weights and HIIT, and
            Strain with it. The fix is to wear the band on the bicep.
          </li>
          <li>
            <strong>A daily score can weigh on your mind.</strong> You can end
            up waiting for and watching the morning number, and for some people
            that does more harm than good.
          </li>
          <li>
            <strong>A dent in its reputation.</strong> At the 5.0 launch, Whoop
            backed out of the free upgrades it had promised and took a wave of
            criticism for it. It eventually partly made up for it.
          </li>
        </ul>

        <h2>Is the extra cost of a membership worth it?</h2>
        <p>
          For me this is the real question, not the screen. I knew up front that
          Whoop costs more than the Helio Strap or Fitbit Air — you buy either of
          those once and that&apos;s it. What I was weighing was whether the
          membership actually adds anything over them for that extra recurring
          payment.
        </p>
        <p>
          After testing both, I concluded that it does. The difference isn&apos;t
          in what the band measures; they&apos;re close there. It&apos;s in what
          Whoop does with those numbers. The insights and Coach give me support I
          didn&apos;t have with bands I bought outright, and I now see Whoop as a
          tool I trust for improving my health and longevity, not as another
          gadget on my wrist.
        </p>
        <p>
          You pay for it with a yearly payment — it isn&apos;t a one-off
          purchase and never will be.
        </p>
        <p>
          The price breakdown in Czech crowns has its own article, and so does
          the <a href="/en/whoop-vs-helio">comparison with the Helio Strap</a>.
          If you want to try it yourself, my link gets you the{" "}
          <a href="/en/whoop-free-month">first month free</a>.
        </p>

        <h2>Frequently asked questions</h2>
        <Faq items={faq} />
      </ArticleShell>
    </>
  );
}
