"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { DonateButton } from "@/components/DonateButton";
import { site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8 sm:py-4">
        <Link
          href="/"
          className="font-display text-lg leading-tight tracking-tight text-cream focus-ring sm:text-xl"
          onClick={() => setOpen(false)}
        >
          Hope Has No Borders
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {site.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm transition-colors focus-ring ${
                  active
                    ? "bg-cream/15 text-cream"
                    : "text-sand/90 hover:bg-cream/10 hover:text-cream"
                }`}
              >
                {item.shortLabel}
              </Link>
            );
          })}
          <DonateButton className="ml-2 !px-5 !py-2.5 !text-xs" />
        </nav>

        <div className="flex items-center gap-2 xl:hidden">
          <DonateButton className="!px-4 !py-2 !text-xs" />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-cream/30 text-cream focus-ring"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 h-0.5 w-full bg-cream transition-all ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-full bg-cream transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-full bg-cream transition-all ${
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
          <p className="mb-4 text-sm text-sand/70">
            People helping people — choose where to begin.
          </p>
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {site.nav.map((item) => {
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
        </div>
      ) : null}
    </header>
  );
}
