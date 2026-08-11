"use client";

import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { FadeIn } from "@/components/FadeIn";
import { useI18n } from "@/components/LanguageProvider";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { StatsVisuals } from "@/components/StatsVisuals";
import { site } from "@/lib/site";

const faceImages = [
  site.images.womenFamily,
  site.images.childrenClose,
  site.images.children,
  site.images.hardship,
] as const;

const pointImages = [
  site.images.afghanKidsHope,
  site.images.womenFamily,
  site.images.winter,
  site.images.childrenClose,
] as const;

export default function WhyThisMattersPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={t.nav.why}
        title={t.why.heroTitle}
        subtitle={t.why.heroSubtitle}
        image={site.images.womenFamily}
      />

      <section className="bg-night px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sand/60">
              {t.why.facesEyebrow}
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl text-cream sm:text-4xl">
              {t.why.facesTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-sand/80">{t.why.facesLead}</p>
          </FadeIn>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {t.why.faces.map((face, i) => (
              <FadeIn key={face.caption} delay={0.06 * i}>
                <figure className="group relative overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={faceImages[i].src}
                      alt={faceImages[i].alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-night via-night/25 to-transparent" />
                  </div>
                  <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron">
                      {face.caption}
                    </p>
                    <p className="mt-2 font-display text-xl text-cream sm:text-2xl">
                      {face.text}
                    </p>
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <StatsVisuals />
      </Section>

      <Section className="!bg-sand-soft">
        <FadeIn>
          <SectionHeading
            eyebrow={t.why.humanEyebrow}
            title={t.why.humanTitle}
            subtitle={t.why.humanSubtitle}
          />
        </FadeIn>

        <div className="space-y-14">
          {t.why.points.map((point, i) => (
            <FadeIn key={point.title} delay={0.05 * i}>
              <article
                className={`grid items-center gap-8 md:grid-cols-2 md:gap-12 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image
                    src={pointImages[i].src}
                    alt={pointImages[i].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-night sm:text-3xl">
                    {point.title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-ink/70">
                    {point.text}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section dark className="bg-night">
        <FadeIn className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sand/55">
            {t.why.sourcesEyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl text-cream sm:text-4xl">
            {t.why.sourcesTitle}
          </h2>
          <p className="mt-5 leading-relaxed text-sand/85">
            {t.why.sourcesText}
          </p>
          <ul className="mt-8 space-y-3 text-sm text-sand/80">
            <li>
              <a
                href="https://www.wfp.org/countries/afghanistan"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-saffron/50 underline-offset-4 hover:decoration-saffron focus-ring"
              >
                {t.why.sourceWfp}
              </a>
            </li>
            <li>
              <a
                href="https://www.unocha.org/afghanistan"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-saffron/50 underline-offset-4 hover:decoration-saffron focus-ring"
              >
                {t.why.sourceOcha}
              </a>
            </li>
            <li>
              <a
                href="https://www.unicef.org/afghanistan"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-saffron/50 underline-offset-4 hover:decoration-saffron focus-ring"
              >
                {t.why.sourceUnicef}
              </a>
            </li>
          </ul>
        </FadeIn>
      </Section>

      <Section>
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="font-display text-3xl leading-snug text-night sm:text-4xl">
            {t.why.closing}
          </p>
        </FadeIn>
      </Section>

      <CtaBand />
    </>
  );
}
