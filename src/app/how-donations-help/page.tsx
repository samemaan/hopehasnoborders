"use client";

import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { DonateButton } from "@/components/DonateButton";
import { FadeIn } from "@/components/FadeIn";
import { useI18n } from "@/components/LanguageProvider";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { site } from "@/lib/site";

const wayImages = [
  site.images.food,
  site.images.medicine,
  site.images.winter,
  site.images.children,
] as const;

export default function HowDonationsHelpPage() {
  const { t, dir } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={t.nav.how}
        title={t.how.heroTitle}
        subtitle={t.how.heroSubtitle}
        image={site.images.food}
      />

      <Section>
        <FadeIn>
          <SectionHeading
            eyebrow={t.how.whereEyebrow}
            title={t.how.whereTitle}
            subtitle={t.how.whereSubtitle}
          />
        </FadeIn>

        <div className="space-y-16">
          {t.how.ways.map((way, i) => (
            <FadeIn key={way.title} delay={0.05 * i}>
              <article
                className={`grid items-center gap-8 md:grid-cols-2 md:gap-12 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={wayImages[i].src}
                    alt={wayImages[i].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
                    0{i + 1}
                  </p>
                  <h3 className="mt-3 font-display text-3xl text-night">
                    {way.title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-ink/70">
                    {way.text}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>

      <section className="relative isolate overflow-hidden bg-night" dir="ltr">
        {/* Keep photo layout LTR so the dark text panel always covers the face on the right */}
        <div className="absolute inset-0">
          <Image
            src={site.images.elderBread.src}
            alt={site.images.elderBread.alt}
            fill
            sizes="100vw"
            className="object-cover object-[center_20%] md:object-left"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night via-night/75 to-night/25 md:hidden" />
          <div className="absolute inset-0 hidden bg-gradient-to-r from-transparent via-night/40 to-night md:block" />
          <div className="absolute inset-y-0 right-0 hidden w-[55%] bg-gradient-to-l from-night via-night/95 to-transparent md:block" />
        </div>

        <div className="relative mx-auto grid min-h-[70vh] max-w-6xl md:grid-cols-2">
          <div className="hidden md:block" aria-hidden />
          <FadeIn
            className="flex flex-col justify-end px-5 pb-14 pt-48 sm:px-10 sm:pb-20 md:justify-center md:py-24 lg:pr-8"
            dir={dir}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-saffron">
              {t.how.scaleEyebrow}
            </p>
            <div className="mt-5 h-px w-16 bg-saffron/70" aria-hidden />
            <h2 className="mt-6 max-w-md font-display text-3xl leading-tight text-cream sm:text-4xl lg:text-[2.75rem]">
              {t.how.scaleTitle}
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-sand/90 sm:text-lg">
              {t.how.scaleText}
            </p>
            <p className="mt-8 max-w-md border-s-2 border-saffron ps-5 font-display text-lg italic leading-snug text-sand sm:text-xl">
              {t.how.scaleQuote}
            </p>
            <div className="mt-10">
              <DonateButton>{t.how.giveMeal}</DonateButton>
            </div>
          </FadeIn>
        </div>
      </section>

      <CtaBand title={t.how.ctaTitle} />
    </>
  );
}
