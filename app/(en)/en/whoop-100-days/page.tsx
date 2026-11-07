import type { Metadata } from "next";
import { alternates } from "@/lib/i18n";
import { ArticleShell } from "@/components/ArticleShell";
import { Faq, type QA } from "@/components/Faq";
import { HundredDaysMastheadBg } from "@/components/HundredDaysMastheadBg";
import { PhotoFigure } from "@/components/PhotoFigure";
import { JsonLd, articleLd, faqLd } from "@/lib/jsonld";
import { getArticle } from "@/lib/nav";

// English twin of app/(cs)/whoop-100-dni. `slug` is the Czech slug: helpers map it.
const slug = "whoop-100-dni";
const meta = getArticle(slug)!;
const title = "Whoop after 100 days: sleep, Recovery, HRV and running";
const description =
  "A hundred days with Whoop: sleep at 95 to 100%, Recovery dragged down by low HRV, shallow running data, and exercise mapping that raised my Strain from 9.7 to 14.1.";

export const metadata: Metadata = {
  title,
  description,
  alternates: alternates("en", slug),
  openGraph: { title, description, url: "/en/whoop-100-days" },
};

const faq: QA[] = [
  {
    q: "What affects Whoop Recovery the most?",
    a: "Whoop doesn't publish the exact weights, but according to its own podcast, HRV carries more weight in Recovery than sleep. That fits my experience: with sleep at 100% and a steady resting heart rate, HRV around 30 keeps me in the yellow and around 40 moves me into the green.",
  },
  {
    q: "Why is my Recovery red when I feel fine?",
    a: "For me, in September, it was low HRV, around 18 to 20 for weeks, while sleep, respiratory rate and resting heart rate stayed the same. Then it went back up on its own, and I never found the cause.",
  },
  {
    q: "Does Whoop show splits, cadence and stride length for runs?",
    a: "In the run detail in the Whoop app, I see distance, average pace and a map from my phone. Per-kilometer splits, cadence and stride length I only get in Strava, where my runs sync from Whoop.",
  },
  {
    q: "Does Whoop show active calories?",
    a: "No, only total daily expenditure. For me, that averages around 2,000 calories. So instead of calories, I track weekly Strain and steps.",
  },
  {
    q: "How does exercise mapping work for strength training?",
    a: "In Strength Trainer, you add the exercises, reps and weights to a workout, and Whoop uses the band's movement to calculate muscular load and add it to Strain. My kettlebell workout came out at Strain 9.7 without mapping, and at 14.1 with swings, cleans and push-ups mapped.",
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
        title="100 days later"
        standfirst="I've worn Whoop for a hundred days, almost without taking it off. My sleep is at 95 to 100% and the band keeps me in a routine. But because of low HRV, Recovery often showed me red, even when I felt good."
        updated={meta.updated}
        source="en-100-days"
        mastheadBg={<HundredDaysMastheadBg />}
      >
        <h2>What changed</h2>
        <p>
          Whoop keeps me disciplined. For every day I stick to my routine, I
          get a number in the morning, and that works as a reward. Over a
          hundred days, it turned into a list I follow almost without
          thinking: I eat healthy, I don&apos;t drink alcohol, I work out, I go
          to bed at the same time every night and get up at the same time or
          earlier. Most of all, though, I&apos;m much more aware of what&apos;s
          good for me and what isn&apos;t.
        </p>
        <p>
          That regular sleep plays a big role in overall health probably
          won&apos;t surprise anyone; now I see it in my own numbers every
          morning.
        </p>

        <h2>Sleep</h2>
        <p>
          I sleep 7.5 to 8 hours every night, go to bed at the same time and
          often wear earplugs. So my Sleep Performance is usually between 95
          and 100%, often at 99 or 100. Whoop has a Community section in the
          app with groups by country; in the Czech one, I usually stay around
          the top ten in the weekly sleep ranking. This week I&apos;m eleventh
          with 97%.
        </p>
        <PhotoFigure
          images={[
            {
              src: "/images/whoop-100-sleep-community.jpg",
              alt: "Community, Weekly Sleep Rank: Czech Republic 11th of 4.9 thousand, Men 30-40 239th of 249.6 thousand",
            },
          ]}
          caption="Weekly sleep ranking: 11th place out of 4,900 people in the Czech group."
        />

        <h2>Recovery and HRV</h2>
        <p>
          My respiratory rate has stayed at almost the same number for all
          hundred days, 17 to 17.5. Resting heart rate too: 48 or 49,
          sometimes 47 or 50. It only jumps when I&apos;m slightly sick or
          when I have a beer, which rarely happens. After a beer or a late
          night, both respiratory rate and resting heart rate go up, and
          that&apos;s clearly visible in the data in the morning.
        </p>
        <PhotoFigure
          images={[
            {
              src: "/images/whoop-100-rhr-rr.jpg",
              alt: "Week of November 1 to 7: resting heart rate 47 to 49, respiratory rate 17.2 to 17.6",
            },
          ]}
          caption="A typical week: resting heart rate 47 to 49, respiratory rate 17.2 to 17.6."
        />
        <p>
          HRV is more complicated. Mine is low overall, usually 25 to 31. In
          September, it dropped to 18 to 20 and stayed there for weeks.
          Everything else stayed the same: sleep, respiratory rate, resting
          heart rate, routine. Then HRV started rising out of nowhere, and I
          still don&apos;t know what I did differently. I didn&apos;t change
          anything.
        </p>
        <PhotoFigure
          images={[
            {
              src: "/images/whoop-100-hrv-trend.jpg",
              alt: "HRV for September 9 to October 8: average 23 ms, 23% lower than the previous month's average of 30",
            },
          ]}
          caption="September to early October: average HRV of 23 ms against 30 in the previous month."
        />
        <p>
          Over that time, I had a number of red days when I felt great and did
          everything as usual. In my own numbers, I can see that for me,
          Recovery is driven mainly by HRV: when it shows around 40 in the
          morning, I&apos;m in the green; around 30, in the yellow. Whoop
          doesn&apos;t publish the exact weights of the inputs, but it says
          itself on its podcast that sleep carries less weight in Recovery
          than HRV, and respiratory rate only adjusts the score on days when
          it&apos;s elevated.
        </p>
        <PhotoFigure
          images={[
            {
              src: "/images/whoop-100-recovery-red.jpg",
              alt: "Friday, October 2: Sleep 99%, Recovery 28%, Strain 4.2, sleep 8:11",
            },
          ]}
          caption="October 2: sleep 99%, Recovery 28%."
        />
        <p>
          So for someone whose HRV is low or jumps around, it&apos;s hard to
          get into the green, even when they sleep at 100%. Sometimes the
          number seems harsh to me. Maybe it reflects stress I don&apos;t
          consciously feel, but in the morning I don&apos;t feel the way
          Recovery says I do.
        </p>

        <h2>A prisoner of my own numbers</h2>
        <p>
          Discipline has a flip side. The band measures nonstop, so in the
          evening my head starts calculating: if I have a beer, will it throw
          off tomorrow&apos;s numbers? If I go to bed half an hour later, will
          my sleep score drop? It&apos;s easy to become too dependent on what
          the app shows.
        </p>
        <p>
          It works the other way too. Opening the app is the first thing I do
          in the morning. When I see 100% sleep and 90% Recovery, I suddenly
          feel good, even if I woke up only half awake.
        </p>
        <p>
          I recently heard some advice from someone who also wears Whoop: they
          only open the app in the evening, after the whole day, never in the
          morning. I don&apos;t do that; I still look right away in the
          morning.
        </p>

        <h2>Running</h2>
        <p>
          I track my runs with Whoop and take my phone with me. In the app, I
          then see distance, average pace and a map of the route, because the
          phone provides the GPS. What I miss, though, are per-kilometer
          splits, stride length and cadence. I see all of that in Strava,
          which I have connected to Whoop. I don&apos;t understand why it
          isn&apos;t available right in the run detail in the Whoop app;
          I&apos;d like to dig into it without switching apps.
        </p>
        <PhotoFigure
          images={[
            {
              src: "/images/whoop-100-run-detail-1.jpg",
              alt: "Whoop, run on October 7: Strain 12.6, 4,549 steps, heart rate over time and time in zones 1 to 5",
            },
            {
              src: "/images/whoop-100-run-detail-2.jpg",
              alt: "Whoop, the same run: blurred route map, 5.27 km, pace 5:55/km, elevation gain 105 m, 401 calories, average heart rate 149",
            },
            {
              src: "/images/whoop-100-run-strava.jpg",
              alt: "Strava, the same run: per-kilometer splits from 5:41 to 6:08 and a pace chart",
            },
          ]}
          caption="The same run on October 7: Whoop shows heart rate, zones and an average pace of 5:55/km; per-kilometer splits only in Strava."
        />

        <h2>What works</h2>
        <p>
          It&apos;s so comfortable to wear that I only take it off on rare
          occasions. The battery lasts about ten days. It detects workouts on
          its own: I recently kicked a ball around with my son and the app
          logged it as soccer without me entering anything.
        </p>
        <p>
          For kettlebell workouts, I can add the specific exercises to the
          record, in my case swings, cleans and push-ups, with weights. The
          feature is called Strength Trainer: it uses the band&apos;s movement
          to estimate muscular load and counts it toward Strain. One workout
          showed me Strain 9.7 without mapping, and 14.1 after I added the
          exercises. It also shows me whether a workout was more cardio or
          more muscular.
        </p>
        <PhotoFigure
          images={[
            {
              src: "/images/whoop-100-kettlebell.jpg",
              alt: "Kettlebell upper body, October 27: Strain 14.1, cardio 22%, muscular 78%, 7 exercises, 35 sets, 7,440 kg, 640 reps",
            },
          ]}
          caption="Kettlebell workout with mapped exercises: Strain 14.1, 78% of it muscular load."
        />
        <p>
          And I like how it looks: I still think it&apos;s the best-looking
          device on the market, and I like wearing it. After a hundred days,
          it&apos;s more of a habit than something where I learn something new
          every week.
        </p>

        <h2>Calories, Strain and steps</h2>
        <p>
          On Apple Watch, I tracked active calories, with a goal of 800 to 900
          a day. Whoop doesn&apos;t show active calories at all, only total
          expenditure, around 2,000 a day on average for me, and that number
          seems lower to me than what I was used to from Apple Watch. So
          calories stopped being a metric I track.
        </p>
        <p>
          Instead, I watch Strain for the whole week. I don&apos;t work out
          every day, but when I&apos;m healthy, I want to average 11. And on
          top of that, steps, 10,000 a day on average.
        </p>

        <h2>After a hundred days</h2>
        <p>
          I&apos;m keeping Whoop. What matters to me is keeping up the
          routine, and in the meantime the band has become a fixture on my wrist. Health
          is important to me; I just sometimes have to remind myself that the
          goal isn&apos;t a nice number in the app in the morning.
        </p>
        <p>
          My first impressions are in the{" "}
          <a href="/en/whoop-review">review</a>, and the price breakdown is in
          the article on <a href="/en/whoop-price">how much Whoop costs</a>.
          If you want to try it yourself, you can get your{" "}
          <a href="/en/whoop-free-month">first month free</a> through my link.
        </p>

        <h2>Frequently asked questions</h2>
        <Faq items={faq} />
      </ArticleShell>
    </>
  );
}
