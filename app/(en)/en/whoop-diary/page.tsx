import type { Metadata } from "next";
import { alternates } from "@/lib/i18n";
import { ArticleShell } from "@/components/ArticleShell";
import { TodoNote } from "@/components/Note";
import { JsonLd, articleLd } from "@/lib/jsonld";
import { getArticle } from "@/lib/nav";

// English twin of app/(cs)/zkusenosti. `slug` is the Czech slug: helpers map it.
const slug = "zkusenosti";
const meta = getArticle(slug)!;
const title = "Whoop diary: my experience after 1, 3 and 6 months";
const description =
  "A running diary of how my experience with Whoop has changed over time — first impressions, three months, six months. I update it every month.";

export const metadata: Metadata = {
  title,
  description,
  alternates: alternates("en", slug),
  openGraph: { title, description, url: "/en/whoop-diary" },
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
        kicker="Diary"
        title="Whoop diary: how it changes over time"
        standfirst="A review captures one moment. This diary shows how the excitement (or disappointment) holds up — I add an entry every month."
        updated={meta.updated}
        source="en-diary"
      >
        <p>
          Most reviews are written after a week of wearing it, and that&apos;s
          the end of it. Here I write down how my experience develops after
          that — because with a subscription, the most important question is
          whether I&apos;ll still enjoy it six months from now.
        </p>

        <h2>After the first week</h2>
        <p>
          The first days are about getting used to not seeing anything on your
          wrist. I caught myself looking at Whoop like a watch — no luck. After
          a few days that reflex went away, and instead I started looking
          forward to the morning number in the app.
        </p>
        <TodoNote lang="en">
          Replace with real impressions from the first days: what surprised
          you, what annoyed you, what your first Recovery score was.
        </TodoNote>

        <h2>After the first month</h2>
        <p>
          This is where it showed whether it was worth it. The data started to
          make sense because Whoop had learned my baseline. The strongest
          moment was when the score correctly predicted a day I felt run down.
        </p>
        <TodoNote lang="en">
          Add a concrete experience from the first month and ideally a
          screenshot of the trend.
        </TodoNote>

        <h2>After three months</h2>
        <TodoNote lang="en">
          Fill in this section once you get there. Leave it empty for now —
          the diary should feel alive and in progress, not written ahead of
          time.
        </TodoNote>

        <h2>After six months</h2>
        <TodoNote lang="en">
          This is where the key verdict goes: am I renewing the membership or
          not? That&apos;s exactly what readers are looking for.
        </TodoNote>

        <p>
          You&apos;ll find the overall verdict in the{" "}
          <a href="/en/whoop-review">Whoop review</a>. And if you want to try
          writing your own diary right away, you can get your{" "}
          <a href="/en/whoop-free-month">first month free</a>.
        </p>
      </ArticleShell>
    </>
  );
}
