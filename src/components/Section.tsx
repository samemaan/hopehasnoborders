import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
};

export function Section({
  children,
  className = "",
  id,
  dark = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative px-5 py-20 sm:px-8 sm:py-28 ${
        dark ? "bg-night text-cream" : "bg-transparent text-ink"
      } ${className}`}
    >
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-3xl sm:mb-14">
      {eyebrow ? (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${
            light ? "text-sand/75" : "text-saffron"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-3xl leading-[1.15] tracking-tight sm:text-4xl md:text-[2.75rem] ${
          light ? "text-cream" : "text-night"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-5 text-lg leading-relaxed sm:text-xl ${
            light ? "text-sand/88" : "text-ink/68"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
