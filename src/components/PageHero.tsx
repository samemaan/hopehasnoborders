import Image from "next/image";
import type { ReactNode } from "react";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  image: { src: string; alt: string };
  children?: ReactNode;
};

export function PageHero({
  title,
  subtitle,
  eyebrow,
  image,
  children,
}: PageHeroProps) {
  return (
    <div className="relative isolate min-h-[54vh] overflow-hidden bg-night pt-28 sm:min-h-[60vh] sm:pt-32">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/78 to-night/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-night/35 via-transparent to-saffron/10" />
      <div className="grain absolute inset-0" />

      <div className="relative mx-auto flex max-w-5xl flex-col justify-end px-5 pb-16 pt-20 sm:px-8 sm:pb-20">
        {eyebrow ? (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-sand/80">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-3xl font-display text-4xl leading-[1.12] tracking-tight text-cream sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-sand/92 sm:text-xl">
            {subtitle}
          </p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </div>
  );
}
