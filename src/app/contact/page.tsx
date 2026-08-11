"use client";

import { ContactForm } from "@/components/ContactForm";
import { CtaBand } from "@/components/CtaBand";
import { FadeIn } from "@/components/FadeIn";
import { useI18n } from "@/components/LanguageProvider";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { site } from "@/lib/site";

export default function ContactPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={t.nav.contact}
        title={t.contact.heroTitle}
        subtitle={t.contact.heroSubtitle}
        image={site.images.ireland}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <FadeIn>
              <SectionHeading
                eyebrow={t.contact.noteEyebrow}
                title={t.contact.noteTitle}
                subtitle={t.contact.noteSubtitle}
              />
            </FadeIn>

            <FadeIn delay={0.08} className="space-y-8">
              {t.contact.reasons.map((item) => (
                <div
                  key={item.title}
                  className="border-s-2 border-saffron ps-5"
                >
                  <h3 className="font-display text-xl text-night">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink/70">{item.text}</p>
                </div>
              ))}
            </FadeIn>

            <FadeIn
              delay={0.12}
              className="mt-10 rounded-md bg-saffron-soft/50 px-5 py-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
                {t.contact.emailEyebrow}
              </p>
              <a
                href={`mailto:${site.contactEmail}`}
                className="mt-3 inline-block font-display text-2xl text-night underline decoration-saffron/50 underline-offset-4 hover:decoration-saffron focus-ring"
              >
                {site.contactEmail}
              </a>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">
                {t.contact.emailBlurb}
              </p>
            </FadeIn>
          </div>

          <div className="rounded-md border border-night/10 bg-sand-soft/60 px-5 py-8 sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
              {t.contact.reachEyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl text-night">
              {t.contact.reachTitle}
            </h2>
            <p className="mt-3 mb-8 text-ink/65">{t.contact.reachText}</p>
            <ContactForm />
          </div>
        </div>
      </Section>

      <CtaBand title={t.contact.ctaTitle} text={t.contact.ctaText} />
    </>
  );
}
