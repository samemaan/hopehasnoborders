"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CtaBand } from "@/components/CtaBand";
import { DonateButton } from "@/components/DonateButton";
import { FadeIn } from "@/components/FadeIn";
import { useI18n } from "@/components/LanguageProvider";
import { Section, SectionHeading } from "@/components/Section";
import { site } from "@/lib/site";

export default function HomePage() {
  const { t } = useI18n();
  const heroRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const preferReduced = mounted && !!reduce;
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", preferReduced ? "0%" : "18%"],
  );
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.55],
    [1, preferReduced ? 1 : 0.4],
  );

  return (
    <>
      <section
        ref={heroRef}
        className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-night"
      >
        <motion.div style={{ y: imageY }} className="absolute inset-0 scale-110">
          <Image
            src={site.images.hero.src}
            alt={site.images.hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/72 to-night/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-night/40 via-transparent to-saffron/15" />
        <div className="grain absolute inset-0" />

        <motion.div
          style={{ opacity: contentOpacity }}
          className="relative z-10 mx-auto w-full max-w-5xl px-5 pb-24 pt-36 sm:px-8 sm:pb-28"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-sand/75">
            {t.home.heroEyebrow}
          </p>
          <p className="font-display text-4xl leading-[1.05] tracking-tight text-cream sm:text-5xl md:text-7xl lg:text-[5.25rem]">
            {site.name}
          </p>
          <h1 className="mt-6 max-w-2xl font-display text-2xl italic text-sand sm:text-3xl md:text-4xl">
            {site.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-sand/90 sm:text-lg">
            {t.home.heroLead}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <DonateButton>{t.common.giveHopeToday}</DonateButton>
            <DonateButton href="/story" variant="secondary">
              {t.common.readJourney}
            </DonateButton>
          </div>
          <p className="scroll-hint mt-14 text-sm text-sand/55">
            {t.home.scrollHint}
          </p>
        </motion.div>
      </section>

      <Section>
        <FadeIn>
          <SectionHeading
            eyebrow={t.home.letterEyebrow}
            title={t.home.letterTitle}
            subtitle={t.home.letterSubtitle}
          />
        </FadeIn>
        <FadeIn delay={0.1} className="prose-mission max-w-3xl text-ink/80">
          <p>{t.home.letterP1}</p>
          <p>{t.home.letterP2}</p>
          <p>{t.home.letterP3}</p>
          <p className="pull-quote my-10 text-2xl sm:text-3xl">
            {t.home.letterQuote}
          </p>
          <p>{t.home.letterP4}</p>
          <p className="mt-10 font-display text-xl italic text-night">
            {t.common.withHope}
            <br />
            {t.common.founderSignOff}
          </p>
          <Link
            href="/story"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-saffron underline decoration-saffron/40 underline-offset-4 hover:decoration-saffron focus-ring"
          >
            {t.home.readFull}
            <span aria-hidden>→</span>
          </Link>
        </FadeIn>
      </Section>

      <section className="relative overflow-hidden bg-night px-5 py-20 sm:px-8 sm:py-28">
        <div className="absolute inset-0">
          <Image
            src={site.images.need.src}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-night via-night/88 to-night" />
        </div>
        <div className="relative mx-auto max-w-5xl">
          <FadeIn>
            <SectionHeading
              light
              eyebrow={t.home.heartsEyebrow}
              title={t.home.heartsTitle}
              subtitle={t.home.heartsSubtitle}
            />
          </FadeIn>
          <div className="grid gap-10 md:grid-cols-3 md:gap-10">
            {t.home.moments.map((item, i) => (
              <FadeIn key={item.title} delay={0.08 * i}>
                <div className="border-t border-saffron/35 pt-6">
                  <h3 className="font-display text-2xl leading-snug text-cream">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-sand/85">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="mt-12">
            <DonateButton href="/why-this-matters" variant="secondary">
              {t.home.seeWhy}
            </DonateButton>
          </FadeIn>
        </div>
      </section>

      <Section className="warm-wash">
        <FadeIn>
          <SectionHeading
            eyebrow={t.home.helpEyebrow}
            title={t.home.helpTitle}
            subtitle={t.home.helpSubtitle}
          />
        </FadeIn>
        <div className="grid gap-12 md:grid-cols-3">
          {t.home.helps.map((item, i) => (
            <FadeIn key={item.title} delay={0.08 * i}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
                0{i + 1}
              </p>
              <h3 className="mt-3 font-display text-2xl text-night">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink/70">{item.text}</p>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-14 flex flex-wrap gap-4">
          <DonateButton href="/how-donations-help" variant="ghost">
            {t.home.seeHow}
          </DonateButton>
          <DonateButton>{t.common.giveHopeToday}</DonateButton>
        </FadeIn>
      </Section>

      <Section className="!pt-4">
        <FadeIn className="mx-auto max-w-3xl border-y border-saffron/20 bg-saffron-soft/40 px-6 py-14 text-center sm:px-10">
          <p className="font-display text-2xl leading-snug text-night sm:text-3xl">
            {t.home.transparency}
          </p>
          <Link
            href="/impact"
            className="mt-6 inline-flex text-sm font-semibold text-saffron underline decoration-saffron/40 underline-offset-4 hover:decoration-saffron focus-ring"
          >
            {t.home.viewImpact}
          </Link>
        </FadeIn>
      </Section>

      <CtaBand />
    </>
  );
}
