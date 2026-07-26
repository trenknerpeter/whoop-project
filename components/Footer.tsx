import Link from "next/link";
import { site } from "@/lib/site";
import { articles, dealSlug } from "@/lib/nav";

export function Footer() {
  return (
    <footer className="mt-16">
      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="grid gap-8 sm:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="font-display text-lg font-semibold text-ink">
              {site.name}
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-muted">
              {site.description}
            </p>
          </div>
          <nav className="text-sm">
            <p className="font-display font-semibold text-ink">Články</p>
            <ul className="mt-3 space-y-2">
              {articles.filter((a) => a.published).map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/${a.slug}`}
                    className="text-ink-muted transition-colors hover:text-green-deep"
                  >
                    {a.nav}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={`/${dealSlug}`}
                  className="text-ink-muted transition-colors hover:text-green-deep"
                >
                  Měsíc zdarma
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-line pt-6 text-xs leading-relaxed text-ink-muted">
          <p>
            Toto je neoficiální osobní blog. Nejsem spojený se společností WHOOP,
            Inc. ani s dalšími zmíněnými značkami. „WHOOP" a další názvy jsou
            ochranné známky příslušných vlastníků.
          </p>
          <p className="mt-2">
            Odkazy na Whoop jsou referral odkazy — když je použiješ, dostaneš
            první měsíc zdarma a já dostanu měsíc kreditu. Nic navíc tě to nestojí.
          </p>
          <p className="mt-3">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
