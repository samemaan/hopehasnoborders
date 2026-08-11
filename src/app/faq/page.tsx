"use client";

import { CtaBand } from "@/components/CtaBand";
import { FadeIn } from "@/components/FadeIn";
import { useI18n } from "@/components/LanguageProvider";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { fill } from "@/lib/i18n/fill";
import { site } from "@/lib/site";

export default function FaqPage() {
  const { t } = useI18n();
  const vars = {
    paymentUrl: site.paypal.paymentUrl,
    paypalMe: site.paypalMeUrl,
    email: site.contactEmail,
  };

  return (
    <>
      <PageHero
        eyebrow={t.nav.faqShort}
        title={t.faq.heroTitle}
        subtitle={t.faq.heroSubtitle}
        image={site.images.ireland}
      />

      <Section>
        <FadeIn>
          <SectionHeading
            eyebrow={t.faq.commonEyebrow}
            title={t.faq.commonTitle}
          />
        </FadeIn>

        <div className="mx-auto max-w-3xl divide-y divide-night/10">
          {t.faq.items.map((item, i) => (
            <FadeIn key={item.q} delay={0.04 * i}>
              <details className="group py-6">
                <summary className="cursor-pointer list-none font-display text-xl text-night marker:content-none focus-ring sm:text-2xl [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {item.q}
                    <span
                      aria-hidden
                      className="mt-1 text-saffron transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-ink/70">
                  {fill(item.a, vars)}
                </p>
              </details>
            </FadeIn>
          ))}
        </div>
      </Section>

      <CtaBand title={t.faq.ctaTitle} />
    </>
  );
}
