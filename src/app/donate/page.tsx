import type { Metadata } from "next";
import Link from "next/link";
import { DonateButton } from "@/components/DonateButton";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { PayPalDonate } from "@/components/PayPalDonate";
import { Section, SectionHeading } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Hope Has No Borders — every contribution helps families in Afghanistan with food, warmth, medicine, and emergency care.",
};

const gifts = [
  {
    label: "A shared meal",
    text: "Helps put food on a family’s table tonight.",
  },
  {
    label: "Warmth for winter",
    text: "Supports coats, blankets, or heating essentials.",
  },
  {
    label: "Urgent relief",
    text: "Meets sudden medical or emergency needs with dignity.",
  },
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Give hope. Share compassion. Remind someone they are not forgotten."
        subtitle="No amount is too small. Every act of generosity becomes part of someone else’s tomorrow."
        image={site.images.hero}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <FadeIn>
            <SectionHeading
              eyebrow="Your gift"
              title="You are not simply making a donation."
              subtitle="You are helping a child eat. You are helping a parent breathe a little easier. You are standing with humanity across borders."
            />
            <ul className="space-y-6">
              {gifts.map((gift) => (
                <li
                  key={gift.label}
                  className="border-l-2 border-saffron pl-5"
                >
                  <p className="font-display text-xl text-night">
                    {gift.label}
                  </p>
                  <p className="mt-1 text-ink/70">{gift.text}</p>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-sm leading-relaxed text-ink/60">
              Payments are processed securely by PayPal. Funds support the Hope
              Has No Borders mission. See{" "}
              <Link
                href="/impact"
                className="font-medium text-saffron underline decoration-saffron/40 underline-offset-2 hover:decoration-saffron"
              >
                Impact
              </Link>{" "}
              for how help is shared.
            </p>
          </FadeIn>

          <div className="space-y-6">
            <FadeIn delay={0.05}>
              <div className="bg-night px-6 py-8 text-cream sm:px-8 sm:py-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand/60">
                  Secure payment · EUR
                </p>
                <h2 className="mt-3 font-display text-3xl">Donate with PayPal</h2>
                <p className="mt-4 text-sm leading-relaxed text-sand/85">
                  Give securely through PayPal. You can use a PayPal balance or
                  card — checkout happens on PayPal’s site.
                </p>
                <div className="mt-6">
                  <PayPalDonate />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="border border-night/10 bg-sand-soft/70 px-6 py-7 sm:px-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
                  Prefer email?
                </p>
                <h2 className="mt-2 font-display text-2xl text-night">
                  Write to us
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  Questions about donating, or you’d rather arrange support by
                  email first? Reach out anytime.
                </p>
                <a
                  href={`mailto:${site.contactEmail}?subject=I%20want%20to%20donate`}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-md border border-night/15 bg-cream px-6 py-3.5 text-sm font-semibold text-night transition-colors hover:border-saffron focus-ring"
                >
                  Email {site.contactEmail}
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="font-display text-2xl text-night sm:text-3xl">
            Together, we can save lives — one meal, one family, one act of
            kindness at a time.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <DonateButton href="/faq" variant="ghost">
              Read the FAQ
            </DonateButton>
            <DonateButton href="/how-donations-help" variant="ghost">
              How donations help
            </DonateButton>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
