import type { Metadata } from "next";
import Link from "next/link";
import { DonateButton } from "@/components/DonateButton";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
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
  const hasRevolut = site.revolutDonateUrl.startsWith("http");

  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Give hope. Share compassion. Remind someone they are not forgotten."
        subtitle="No amount is too small. Every act of generosity becomes part of someone else’s tomorrow."
        image={site.images.hero}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
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
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-night px-6 py-8 text-cream sm:px-8 sm:py-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand/60">
                Secure payment
              </p>
              <h2 className="mt-3 font-display text-3xl">
                Donate via Revolut
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-sand/85">
                {hasRevolut
                  ? "You will be taken to Revolut to complete your contribution securely."
                  : "The Revolut payment link will be added here shortly. In the meantime, reach out by email if you would like to contribute or ask a question."}
              </p>

              {hasRevolut ? (
                <a
                  href={site.revolutDonateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-sm bg-saffron px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-saffron-hover focus-ring"
                >
                  Continue to Revolut
                </a>
              ) : (
                <div className="mt-8 space-y-4">
                  <p className="rounded-sm border border-sand/25 bg-night-deep/60 px-4 py-3 text-sm text-sand/80">
                    Payment link coming soon — paste your Revolut URL into{" "}
                    <code className="text-cream">src/lib/site.ts</code>.
                  </p>
                  <a
                    href={`mailto:${site.contactEmail}?subject=I%20want%20to%20donate`}
                    className="inline-flex w-full items-center justify-center rounded-sm bg-saffron px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-saffron-hover focus-ring"
                  >
                    Email Sam to contribute
                  </a>
                </div>
              )}

              <p className="mt-6 text-xs leading-relaxed text-sand/55">
                Hope Has No Borders is a people-to-people mission. Updates on
                how funds are used will be shared on the{" "}
                <Link
                  href="/impact"
                  className="underline decoration-saffron/40 underline-offset-2 hover:decoration-saffron"
                >
                  Impact
                </Link>{" "}
                page.
              </p>
            </div>
          </FadeIn>
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
