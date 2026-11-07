import type { Metadata } from "next";
import { alternates } from "@/lib/i18n";
import { ArticleShell } from "@/components/ArticleShell";
import { CompareTable } from "@/components/CompareTable";
import { AsideNote, TodoNote } from "@/components/Note";
import { JsonLd, articleLd } from "@/lib/jsonld";
import { getArticle } from "@/lib/nav";

// English twin of app/(cs)/whoop-cena. `slug` is the Czech slug: helpers map it.
const slug = "whoop-cena";
const meta = getArticle(slug)!;
const title = "How much Whoop costs in 2026 (in CZK)";
const description =
  "An overview of Whoop membership prices in Czech crowns — monthly vs yearly plan, what's included and how to lower the cost with a free month.";

export const metadata: Metadata = {
  title,
  description,
  alternates: alternates("en", slug),
  openGraph: { title, description, url: "/en/whoop-price" },
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
        kicker="Guide"
        title="What Whoop really costs"
        standfirst="You don't pay for Whoop like a watch — you buy a membership, not a box. I broke down what that means for your wallet."
        updated={meta.updated}
        source="en-pricing"
      >
        <p>
          The most common confusion with Whoop: you don&apos;t buy the band, you
          pay for a <strong>membership</strong> and get the hardware included.
          That keeps the entry price low, but you keep paying every year.
          Let&apos;s get to the numbers.
        </p>

        <TodoNote lang="en">
          Add current prices in Kč straight from whoop.com for the Czech/European
          market — both the monthly and yearly plan. Prices change, so I&apos;m
          leaving an approximate range here that needs to be confirmed.
        </TodoNote>

        <h2>Membership plans</h2>
        <CompareTable
          headA="Monthly membership"
          headB="Yearly membership"
          rows={[
            {
              label: "Payment",
              a: { text: "Every month" },
              b: { text: "Once a year" },
            },
            {
              label: "Price per month",
              a: { text: "Higher", tone: "warn" },
              b: { text: "Lower", tone: "recovery" },
            },
            {
              label: "Commitment",
              a: { text: "Short", tone: "recovery" },
              b: { text: "A year" },
            },
            {
              label: "Band included",
              a: { text: "Yes", tone: "recovery" },
              b: { text: "Yes", tone: "recovery" },
            },
          ]}
        />

        <AsideNote title="How to actually lower the price">
          You can get the first month free through a partner link — that&apos;s
          a legal and official way to cut the cost right at the start. The
          details are on the page{" "}
          <a href="/en/whoop-free-month">Whoop free month</a>.
        </AsideNote>

        <h2>What is and isn&apos;t included</h2>
        <ul>
          <li>The Whoop 5.0 band and the charging battery pack are part of the membership.</li>
          <li>The basic strap is included; colored and leather straps cost extra.</li>
          <li>All features in the app (Recovery, Sleep, Strain) come with the membership at no extra charge.</li>
        </ul>

        <h2>Is it worth it?</h2>
        <p>
          That depends on how much you&apos;ll use the data. My opinion, including
          who I wouldn&apos;t recommend Whoop to, is in the{" "}
          <a href="/en/whoop-review">Whoop review</a>. And if you&apos;re looking
          for an option without monthly fees, I compared Whoop with the{" "}
          <a href="/en/whoop-vs-helio">Helio Strap</a>.
        </p>
      </ArticleShell>
    </>
  );
}
