"use client";

import Link from "next/link";
import { DonateButton } from "@/components/DonateButton";
import { Logo } from "@/components/Logo";
import { useI18n } from "@/components/LanguageProvider";
import { site } from "@/lib/site";

export function Footer() {
  const { t } = useI18n();

  const nav = [
    { href: "/story", label: t.nav.story },
    { href: "/why-this-matters", label: t.nav.why },
    { href: "/how-donations-help", label: t.nav.how },
    { href: "/impact", label: t.nav.impact },
    { href: "/faq", label: t.nav.faq },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <footer className="bg-night-deep pb-20 text-sand md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-md text-base leading-relaxed text-sand/80">
            {t.footer.blurb}
          </p>
          <div className="mt-7">
            <DonateButton>{t.common.giveHope}</DonateButton>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand/55">
            {t.footer.explore}
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sand/90 transition-colors hover:text-cream focus-ring"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/donate"
                className="text-sand/90 transition-colors hover:text-cream focus-ring"
              >
                {t.common.donate}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand/55">
            {t.footer.messageTitle}
          </p>
          <p className="mt-4 font-display text-lg italic leading-snug text-cream/90">
            &ldquo;{t.footer.messageQuote}&rdquo;
          </p>
          <p className="mt-5 text-sm leading-relaxed text-sand/75">
            {t.footer.questions}{" "}
            <Link
              href="/contact"
              className="text-cream underline decoration-saffron/60 underline-offset-4 hover:decoration-saffron focus-ring"
            >
              {t.footer.contactLink}
            </Link>{" "}
            {t.footer.orEmail}
          </p>
          <a
            href={`mailto:${site.contactEmail}`}
            className="mt-2 inline-block text-sm text-cream underline decoration-saffron/60 underline-offset-4 hover:decoration-saffron focus-ring"
          >
            {site.contactEmail}
          </a>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-sand/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}. {t.footer.builtWithHope}
          </p>
          <p>{t.footer.notAffiliated}</p>
        </div>
      </div>
    </footer>
  );
}
