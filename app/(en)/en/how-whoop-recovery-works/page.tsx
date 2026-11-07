import type { Metadata } from "next";
import { alternates } from "@/lib/i18n";
import { ArticleShell } from "@/components/ArticleShell";
import { AsideNote, TodoNote } from "@/components/Note";
import { JsonLd, articleLd } from "@/lib/jsonld";
import { getArticle } from "@/lib/nav";

// English twin of app/(cs)/jak-funguje-recovery. `slug` is the Czech slug: helpers map it.
const slug = "jak-funguje-recovery";
const meta = getArticle(slug)!;
const title = "What the Whoop Recovery score means";
const description =
  "HRV, resting heart rate and sleep turned into a single percentage. How Whoop calculates the Recovery score, how to read it and what not to trust about it.";

export const metadata: Metadata = {
  title,
  description,
  alternates: alternates("en", slug),
  openGraph: { title, description, url: "/en/how-whoop-recovery-works" },
};

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
      <ArticleShell
        lang="en"
        kicker="Living with Whoop"
        title="What the Recovery score means — and what not to trust"
        standfirst="One percentage in the morning that decides whether you push hard or rest. Where it comes from and when to take it with a grain of salt."
        updated={meta.updated}
        source="en-recovery"
      >
        <p>
          The Recovery score is Whoop&apos;s flagship feature — a number from 0
          to 100% that tells you in the morning how ready your body is for
          strain. Green means &ldquo;go&rdquo;, yellow &ldquo;careful&rdquo;,
          red &ldquo;rest today&rdquo;. Behind that simplicity, though, are a
          few measurements worth understanding.
        </p>

        <h2>What the score is calculated from</h2>
        <ul>
          <li>
            <strong>HRV (heart rate variability)</strong> — the main input.
            Higher variability usually means better recovery.
          </li>
          <li>
            <strong>Resting heart rate</strong> — when it&apos;s higher than
            usual in the morning, your body is fighting something.
          </li>
          <li>
            <strong>Sleep</strong> — how much you slept and how well.
          </li>
          <li>
            <strong>Respiratory rate</strong> — helps catch illness or
            overtraining before you feel it yourself.
          </li>
        </ul>

        <AsideNote title="The most important word: baseline">
          Whoop doesn&apos;t compare your numbers with the population, but with
          yourself. For the first few weeks it learns your normal, so take the
          score with a grain of salt at the start — it&apos;s still collecting
          data.
        </AsideNote>

        <h2>What not to trust</h2>
        <p>
          The Recovery score is a great trend, not the absolute truth. One red
          day after a hard workout is normal. It&apos;s only a problem when your
          score keeps dropping over a longer period. And watch out — it can be
          &ldquo;fooled&rdquo;: a quiet day at the computer will raise your
          score, even if you might be coming down with something. Always listen
          to your body too, not just the app.
        </p>

        <TodoNote lang="en">
          Add a screenshot of your Recovery graph after a few weeks and one
          concrete story: a day when the score correctly (or wrongly) predicted
          how you&apos;d feel.
        </TodoNote>

        <h2>Why it&apos;s useful</h2>
        <p>
          For me, Recovery is the main reason I wear Whoop at all — more in the{" "}
          <a href="/en/whoop-review">Whoop 5.0 review</a>. If you&apos;re
          tempted to try it,{" "}
          <a href="/en/whoop-free-month">your first month is free</a>.
        </p>
      </ArticleShell>
    </>
  );
}
