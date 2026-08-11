"use client";

import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { FadeIn } from "@/components/FadeIn";
import { useI18n } from "@/components/LanguageProvider";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export default function StoryPage() {
  const { t } = useI18n();
  const closingLines = t.story.closing.split("\n");

  return (
    <>
      <PageHero
        eyebrow={t.nav.story}
        title={t.story.heroTitle}
        subtitle={t.story.heroSubtitle}
        image={site.images.story}
      />

      <Section>
        <FadeIn className="prose-mission mx-auto max-w-3xl text-lg leading-relaxed text-ink/80">
          <p className="font-display text-2xl text-night sm:text-3xl">
            {t.story.openTitle}
          </p>
          <p>{t.story.openP1}</p>
          <p>{t.story.openP2}</p>
          <p>{t.story.openP3}</p>
        </FadeIn>
      </Section>

      <section className="relative grid min-h-[50vh] md:grid-cols-2">
        <div className="relative min-h-[280px]">
          <Image
            src={site.images.ireland.src}
            alt={site.images.ireland.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="flex items-center bg-night px-5 py-16 sm:px-12">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sand/60">
              {t.story.secondHomeEyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-cream sm:text-4xl">
              {t.story.secondHomeTitle}
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-sand/85">
              {t.story.secondHomeText}
            </p>
          </FadeIn>
        </div>
      </section>

      <Section>
        <FadeIn className="prose-mission mx-auto max-w-3xl text-lg leading-relaxed text-ink/80">
          <p className="font-display text-2xl text-night sm:text-3xl">
            {t.story.heartTitle}
          </p>
          <p>{t.story.heartP1}</p>
          <p>{t.story.heartP2}</p>
          <p className="font-display text-2xl text-night">{t.story.heartP3}</p>
          <p>{t.story.heartP4}</p>
          <p>{t.story.heartP5}</p>
          <p className="pull-quote my-10 text-2xl sm:text-3xl">
            {t.story.quote}
          </p>
          <p>{t.story.askP1}</p>
          <p className="font-display text-3xl text-saffron">
            &ldquo;{t.story.notForgotten}&rdquo;
          </p>
          <p>{t.story.updates}</p>
          <p>{t.story.ifYouSupport}</p>
          <p>{t.story.thankYou}</p>
          <p className="font-display text-xl text-night">
            {closingLines[0]}
            <br />
            {closingLines[1]}
          </p>
          <p className="mt-10 font-display text-xl italic text-night">
            {t.common.withHope}
            <br />
            {t.common.founderSignOff}
          </p>
        </FadeIn>
      </Section>

      <CtaBand title={t.story.ctaTitle} text={t.story.ctaText} />
    </>
  );
}
