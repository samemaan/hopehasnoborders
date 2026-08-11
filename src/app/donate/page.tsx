"use client";

import Link from "next/link";
import { DonateButton } from "@/components/DonateButton";
import { FadeIn } from "@/components/FadeIn";
import { useI18n } from "@/components/LanguageProvider";
import { PageHero } from "@/components/PageHero";
import { PayPalDonate } from "@/components/PayPalDonate";
import { Section, SectionHeading } from "@/components/Section";
import { site } from "@/lib/site";

export default function DonatePage() {
  const { t } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={t.donate.heroEyebrow}
        title={t.donate.heroTitle}
        subtitle={t.donate.heroSubtitle}
        image={site.images.hero}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <FadeIn>
            <SectionHeading
              eyebrow={t.donate.giftEyebrow}
              title={t.donate.giftTitle}
              subtitle={t.donate.giftSubtitle}
            />
            <ul className="space-y-6">
              {t.donate.gifts.map((gift) => (
                <li
                  key={gift.label}
                  className="border-s-2 border-saffron ps-5"
                >
                  <p className="font-display text-xl text-night">
                    {gift.label}
                  </p>
                  <p className="mt-1 text-ink/70">{gift.text}</p>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-sm leading-relaxed text-ink/60">
              {t.donate.secureNote}{" "}
              <Link
                href="/impact"
                className="font-medium text-saffron underline decoration-saffron/40 underline-offset-2 hover:decoration-saffron"
              >
                {t.donate.impactLink}
              </Link>{" "}
              {t.donate.forHowShared}
            </p>
          </FadeIn>

          <div className="space-y-6">
            <FadeIn delay={0.05}>
              <div className="bg-night px-6 py-8 text-cream sm:px-8 sm:py-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand/60">
                  {t.donate.boxEyebrow}
                </p>
                <h2 className="mt-3 font-display text-3xl">
                  {t.donate.boxTitle}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-sand/85">
                  {t.donate.boxText}
                </p>
                <div className="mt-6">
                  <PayPalDonate />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="border border-night/10 bg-sand-soft/70 px-6 py-7 sm:px-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
                  {t.donate.emailEyebrow}
                </p>
                <h2 className="mt-2 font-display text-2xl text-night">
                  {t.donate.emailTitle}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {t.donate.emailText}
                </p>
                <a
                  href={`mailto:${site.contactEmail}?subject=I%20want%20to%20donate`}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-md border border-night/15 bg-cream px-6 py-3.5 text-sm font-semibold text-night transition-colors hover:border-saffron focus-ring"
                >
                  {t.donate.emailCta} {site.contactEmail}
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="font-display text-2xl text-night sm:text-3xl">
            {t.donate.closing}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <DonateButton href="/faq" variant="ghost">
              {t.donate.readFaq}
            </DonateButton>
            <DonateButton href="/how-donations-help" variant="ghost">
              {t.donate.howHelp}
            </DonateButton>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
