import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
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

      <Section dark>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl text-cream sm:text-4xl">
            One meal may seem small to us.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-sand/85">
            To someone who has not eaten all day, it can mean everything. That
            is the scale we work on — personal, practical, and deeply human.
          </p>
        </FadeIn>
      </Section>

      <CtaBand title="Turn compassion into a meal tonight." />
    </>
  );
}
