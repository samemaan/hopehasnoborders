"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { DonateButton } from "@/components/DonateButton";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Logo } from "@/components/Logo";
import { useI18n } from "@/components/LanguageProvider";
import { site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const nav = [
    { href: "/story", label: t.nav.story, shortLabel: t.nav.storyShort },
    { href: "/why-this-matters", label: t.nav.why, shortLabel: t.nav.whyShort },
    { href: "/how-donations-help", label: t.nav.how, shortLabel: t.nav.howShort },
    { href: "/impact", label: t.nav.impact, shortLabel: t.nav.impactShort },
    { href: "/faq", label: t.nav.faq, shortLabel: t.nav.faqShort },
    { href: "/contact", label: t.nav.contact, shortLabel: t.nav.contactShort },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-night/97 shadow-[0_8px_30px_-12px_rgba(8,24,37,0.55)] backdrop-blur-md"
          : "bg-gradient-to-b from-night/55 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:px-6 sm:py-3.5 lg:px-8">
        <Logo onClick={() => setOpen(false)} compactOnNav />

        <nav
          className="hidden min-w-0 items-center gap-0.5 2xl:gap-1 xl:flex"
          aria-label="Primary"
        >
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap rounded-md px-2 py-2 text-xs transition-colors focus-ring 2xl:px-2.5 2xl:text-sm ${
                  active
                    ? "bg-cream/15 text-cream"
                    : "text-sand/90 hover:bg-cream/10 hover:text-cream"
                }`}
              >
                {item.shortLabel}
              </Link>
            );
          })}
          <LanguageSwitcher compact />
          <DonateButton className="ms-1 !whitespace-nowrap !px-3.5 !py-2 !text-xs 2xl:ms-2 2xl:!px-5">
            {t.common.donate}
          </DonateButton>
        </nav>

        <div className="flex items-center gap-2 xl:hidden">
          <LanguageSwitcher compact />
          <DonateButton className="!whitespace-nowrap !px-3.5 !py-2 !text-xs">
            {t.common.donate}
          </DonateButton>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-cream/30 text-cream focus-ring"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.header.closeMenu : t.header.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute start-0 h-0.5 w-full bg-cream transition-all ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute start-0 top-1.5 h-0.5 w-full bg-cream transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute start-0 h-0.5 w-full bg-cream transition-all ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="max-h-[calc(100svh-4.5rem)] overflow-y-auto border-t border-cream/10 bg-night px-5 py-6 xl:hidden"
        >
          <p className="mb-4 text-sm text-sand/70">{t.header.mobileIntro}</p>
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-md px-3 py-3.5 text-base focus-ring ${
                    active
                      ? "bg-cream/15 text-cream"
                      : "text-sand hover:bg-cream/10 hover:text-cream"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <p className="mt-2 text-xs text-sand/40">{site.name}</p>
        </div>
      ) : null}
    </header>
  );
}
