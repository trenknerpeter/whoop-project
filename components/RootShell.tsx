import type { Metadata } from "next";
import { Space_Grotesk, Instrument_Sans } from "next/font/google";
import { site, SITE_TEXT } from "@/lib/site";
import { alternates, type Lang } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

// Site-wide metadata for one language; each root layout exports this.
export function rootMetadata(lang: Lang): Metadata {
  const t = SITE_TEXT[lang];
  return {
    metadataBase: new URL(site.url),
    title: {
      default: `${site.name} — ${t.tagline}`,
      template: `%s · ${site.name}`,
    },
    description: t.description,
    openGraph: {
      type: "website",
      locale: t.locale,
      alternateLocale: lang === "cs" ? SITE_TEXT.en.locale : SITE_TEXT.cs.locale,
      siteName: site.name,
      title: `${site.name} — ${t.tagline}`,
      description: t.description,
    },
    twitter: { card: "summary_large_image" },
    alternates: alternates(lang, ""),
  };
}

// <html>/<body> shared by the Czech and English root layouts. Two root layouts
// (route groups) so <html lang> is right for each language without reading
// request headers.
export function RootShell({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  return (
    <html
      lang={lang}
      className={`${spaceGrotesk.variable} ${instrumentSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <Header lang={lang} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} />
        <Analytics />
      </body>
    </html>
  );
}
