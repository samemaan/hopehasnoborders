"use client";

import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { FadeIn } from "@/components/FadeIn";
import { useI18n } from "@/components/LanguageProvider";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { site } from "@/lib/site";

const updateImages = [
  site.images.winter,
  site.images.food,
  site.images.medicine,
] as const;

export default function ImpactPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={t.nav.impact}
        title={t.impact.heroTitle}
        subtitle={t.impact.heroSubtitle}
        image={site.images.need}
      />

      <Section>
        <FadeIn>
          <SectionHeading
            eyebrow={t.impact.comingEyebrow}
            title={t.impact.comingTitle}
            subtitle={t.impact.comingSubtitle}
          />
        </FadeIn>

        <div className="space-y-12">
          {t.impact.updates.map((update, i) => (
            <FadeIn key={update.title} delay={0.06 * i}>
              <article className="grid gap-6 border-t border-night/10 pt-10 md:grid-cols-[1.1fr_1.4fr] md:gap-10">
                <div className="relative aspect-[16/10] overflow-hidden bg-sand-soft">
                  <Image
                    src={updateImages[i].src}
                    alt={updateImages[i].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
                    {t.impact.formatExample}
                  </p>
                  <h3 className="mt-3 font-display text-2xl text-night sm:text-3xl">
                    {update.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-ink/70">
                    {update.summary}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <FadeIn className="mx-auto max-w-2xl rounded-sm bg-sand-soft px-6 py-10 text-center sm:px-10">
          <p className="font-display text-2xl text-night">
            {t.impact.shareTitle}
          </p>
          <p className="mt-3 text-ink/70">
            {t.impact.shareTextBefore}{" "}
            <a
              href={`mailto:${site.contactEmail}`}
              className="font-semibold text-saffron underline decoration-saffron/40 underline-offset-4 focus-ring"
            >
              {site.contactEmail}
            </a>
            {t.impact.shareTextAfter}
          </p>
        </FadeIn>
      </Section>

      <CtaBand title={t.impact.ctaTitle} />
    </>
  );
}
