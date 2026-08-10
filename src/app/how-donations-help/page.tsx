import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { DonateButton } from "@/components/DonateButton";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "How Your Donation Helps",
  description:
    "See how gifts become food packages, medicine, winter clothing, and emergency assistance for families in need.",
};

const ways = [
  {
    title: "Food packages",
    text: "Staples that fill empty shelves — flour, rice, oil, beans, and essentials that turn hunger into a shared meal.",
    image: site.images.food,
  },
  {
    title: "Medicine & health support",
    text: "When a fever rises or chronic need goes unmet, even modest medical support can protect a whole household.",
    image: site.images.medicine,
  },
  {
    title: "Winter clothing & warmth",
    text: "Coats, blankets, and basic winter gear — because surviving the cold should not be a luxury.",
    image: site.images.winter,
  },
  {
    title: "Emergency assistance",
    text: "Unplanned crises — a sudden eviction risk, a medical bill, a lost income — demand rapid, flexible help.",
    image: site.images.children,
  },
];

export default function HowDonationsHelpPage() {
  return (
    <>
      <PageHero
        eyebrow="How Your Donation Helps"
        title="Small gifts. Real tables. Warmer nights."
        subtitle="Every contribution becomes something tangible — food, medicine, warmth, or emergency relief — delivered with dignity."
        image={site.images.food}
      />

      <Section>
        <FadeIn>
          <SectionHeading
            eyebrow="Where kindness goes"
            title="Your generosity becomes someone’s tomorrow."
            subtitle="We focus on practical support that families can feel immediately — not abstract promises."
          />
        </FadeIn>

        <div className="space-y-16">
          {ways.map((way, i) => (
            <FadeIn key={way.title} delay={0.05 * i}>
              <article
                className={`grid items-center gap-8 md:grid-cols-2 md:gap-12 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={way.image.src}
                    alt={way.image.alt}
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

      <section className="relative isolate overflow-hidden bg-night">
        {/* Full-bleed emotional portrait */}
        <div className="absolute inset-0">
          <Image
            src={site.images.elderBread.src}
            alt={site.images.elderBread.alt}
            fill
            sizes="100vw"
            className="object-cover object-[center_20%] md:object-left"
            priority={false}
          />
          {/* Mobile: bottom wash; Desktop: left image / right dark panel blend */}
          <div className="absolute inset-0 bg-gradient-to-t from-night via-night/75 to-night/25 md:hidden" />
          <div className="absolute inset-0 hidden bg-gradient-to-r from-transparent via-night/40 to-night md:block" />
          <div className="absolute inset-y-0 right-0 hidden w-[55%] bg-gradient-to-l from-night via-night/95 to-transparent md:block" />
        </div>

        <div className="relative mx-auto grid min-h-[70vh] max-w-6xl md:grid-cols-2">
          <div className="hidden md:block" aria-hidden />
          <FadeIn className="flex flex-col justify-end px-5 pb-14 pt-48 sm:px-10 sm:pb-20 md:justify-center md:py-24 lg:pr-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-saffron">
              The true scale of kindness
            </p>
            <div className="mt-5 h-px w-16 bg-saffron/70" aria-hidden />
            <h2 className="mt-6 max-w-md font-display text-3xl leading-tight text-cream sm:text-4xl lg:text-[2.75rem]">
              One meal may seem small to us.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-sand/90 sm:text-lg">
              To someone who has not eaten all day, it can mean everything. That
              is the scale we work on — personal, practical, and deeply human.
            </p>
            <p className="mt-8 max-w-md border-l-2 border-saffron pl-5 font-display text-lg italic leading-snug text-sand sm:text-xl">
              For an elder with nothing left but bread — your kindness is not
              small. It is survival. It is dignity. It is hope.
            </p>
            <div className="mt-10">
              <DonateButton>Give a meal of hope</DonateButton>
            </div>
          </FadeIn>
        </div>
      </section>

      <CtaBand title="Turn compassion into a meal tonight." />
    </>
  );
}
