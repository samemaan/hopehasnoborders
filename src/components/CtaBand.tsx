"use client";

import { DonateButton } from "@/components/DonateButton";
import { FadeIn } from "@/components/FadeIn";
import { useI18n } from "@/components/LanguageProvider";

type CtaBandProps = {
  title?: string;
  text?: string;
};

export function CtaBand({ title, text }: CtaBandProps) {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden bg-night px-5 py-20 sm:px-8 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -end-20 top-0 h-80 w-80 rounded-full bg-saffron/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -start-20 bottom-0 h-72 w-72 rounded-full bg-sand/15 blur-3xl"
      />
      <FadeIn className="relative mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sand/60">
          {t.cta.eyebrow}
        </p>
        <h2 className="mt-4 font-display text-3xl leading-tight text-cream sm:text-4xl md:text-5xl">
          {title ?? t.cta.title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-sand/88 sm:text-lg">
          {text ?? t.cta.text}
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <DonateButton>{t.common.giveHopeToday}</DonateButton>
          <DonateButton href="/story" variant="secondary">
            {t.common.readJourney}
          </DonateButton>
        </div>
      </FadeIn>
    </section>
  );
}
