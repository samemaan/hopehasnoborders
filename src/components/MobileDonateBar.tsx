"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function MobileDonateBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/donate") return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-saffron/20 bg-cream/95 px-4 py-3 shadow-[0_-8px_30px_-12px_rgba(26,45,61,0.25)] backdrop-blur-md transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-lg items-center justify-between gap-3">
        <p className="min-w-0 text-sm leading-snug text-ink/75">
          <span className="font-display text-base text-night">
            A meal can mean everything.
          </span>
        </p>
        <Link
          href="/donate"
          className="shrink-0 rounded-md bg-saffron px-5 py-2.5 text-sm font-semibold text-cream shadow-[0_8px_20px_-8px_rgba(201,120,60,0.7)] focus-ring"
        >
          Give hope
        </Link>
      </div>
    </div>
  );
}
