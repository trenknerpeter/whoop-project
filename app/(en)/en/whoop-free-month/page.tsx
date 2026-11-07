import type { Metadata } from "next";
import { alternates } from "@/lib/i18n";
import { ArticleShell } from "@/components/ArticleShell";
import { Faq, type QA } from "@/components/Faq";
import { AsideNote } from "@/components/Note";
import { JsonLd, faqLd, articleLd } from "@/lib/jsonld";

// English twin of app/(cs)/whoop-zdarma. `slug` is the Czech slug: helpers map it.
const slug = "whoop-zdarma";
const title = "Whoop free month: how it works (2026)";
const description =
  "Sign up through my link and your first month of Whoop membership is free. Here's how it works, what's behind it and what the terms are.";
const updated = "2026-11-05";

export const metadata: Metadata = {
  title,
  description,
  alternates: alternates("en", slug),
  openGraph: { title, description, url: "/en/whoop-free-month" },
};

const faq: QA[] = [
  {
    q: "Is the free month really free?",
    a: "Yes. When you sign up through my link, Whoop waives your first month of membership. You pay nothing extra and the link doesn't raise the price.",
  },
  {
    q: "What do I, the blog owner, get out of it?",
    a: "I'm in Whoop's affiliate program, so when you sign up through my link, Whoop pays me a commission. Your price stays the same.",
  },
  {
    q: "Do I have to pay for a whole year up front?",
    a: "Not necessarily. Whoop offers monthly and annual memberships. The free first month applies whichever plan you pick. I break down the price in detail on a separate page.",
  },
  {
    q: "Can I use the link if I already have Whoop?",
    a: "The free month is for new members. If you already have an active membership, it doesn't apply to you.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd data={articleLd({ slug, title, description, updated, lang: "en" })} />
      <JsonLd data={faqLd(faq)} />
      <ArticleShell
        lang="en"
        kicker="Free month"
        title="A free month of Whoop — no catch"
        standfirst="The most common reason people look for a Whoop discount or promo code. I'll explain how it actually works, so you know what you're getting into."
        updated={updated}
        heroCta
        source="en-money-page"
      >
        <p>
          Whoop doesn&apos;t do generic discount codes like an online store — so
          don&apos;t go looking for something like &ldquo;SAVE20&rdquo;, it
          won&apos;t get you anywhere. Instead it has an{" "}
          <strong>affiliate program</strong>: anyone who signs up through a
          partner&apos;s link gets their first month of membership free.
          I&apos;m in the program, and the buttons on this site lead to my link.
        </p>

        <h2>How it works, step by step</h2>
        <ul>
          <li>You click the button below and the official Whoop sign-up opens.</li>
          <li>You choose a membership and finish signing up — <strong>your first month is free</strong>.</li>
          <li>The Whoop 5.0 band is included in the membership; you don&apos;t buy it separately.</li>
          <li>I get a commission from Whoop&apos;s affiliate program. Your price doesn&apos;t change.</li>
        </ul>

        <AsideNote title="Why trust this">
          I&apos;m not an anonymous coupon site. I actually wear Whoop 5.0 and
          this whole blog is about it — you&apos;ll find the review, comparisons
          and pricing in the menu. Whoop gave me the link through its affiliate
          program, and it leads to their official sign-up.
        </AsideNote>

        <h2>Good to know up front</h2>
        <p>
          Whoop is a subscription, not a one-off purchase. The free first month
          is a nice way to try it, but be aware — after that, you pay. Before
          you decide, go through my{" "}
          <a href="/en/whoop-price">price breakdown</a> and above all my{" "}
          <a href="/en/whoop-review">Whoop 5.0 review</a>, where I also say who
          I wouldn&apos;t recommend Whoop to.
        </p>

        <h2>Frequently asked questions</h2>
        <Faq items={faq} />
      </ArticleShell>
    </>
  );
}
