import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

type DonateButtonProps = {
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  children?: ReactNode;
  href?: string;
};

const variants = {
  primary:
    "bg-saffron text-cream hover:bg-saffron-hover hover:-translate-y-0.5 shadow-[0_12px_28px_-10px_rgba(201,120,60,0.65)] active:translate-y-0",
  secondary:
    "bg-cream/15 text-cream border border-cream/40 hover:bg-cream/25 hover:border-cream/60 backdrop-blur-sm",
  ghost:
    "bg-saffron-soft/60 text-night border border-saffron/25 hover:bg-saffron-soft hover:border-saffron/45",
};

export function DonateButton({
  className = "",
  variant = "primary",
  children = "Give hope",
  href = "/donate",
}: DonateButtonProps) {
  const isExternal =
    href.startsWith("http") || href === site.revolutDonateUrl;

  const classes = `inline-flex items-center justify-center gap-2 rounded-md px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 focus-ring ${variants[variant]} ${className}`;

  const content = children;

  if (isExternal && site.revolutDonateUrl.startsWith("http")) {
    return (
      <a
        href={site.revolutDonateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
