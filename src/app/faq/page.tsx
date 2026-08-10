import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Who receives help, how recipients are chosen, and how Hope Has No Borders stays transparent.",
};

const faqs = [
  {
    q: "Who receives help?",
    a: "Families in Afghanistan facing hunger, unemployment hardship, medical need, or winter emergency. We prioritise households with children, elderly members, and those with little or no income — always with dignity and without discrimination based on politics or religion.",
  },
  {
    q: "How are recipients chosen?",
    a: "Sam works through trusted personal networks and community contacts on the ground to identify families in genuine need. The focus is practical hardship — empty cupboards, medical urgency, winter exposure — verified as carefully as circumstances allow.",
  },
  {
    q: "Is this about politics or religion?",
    a: "No. Hope Has No Borders is about humanity — people helping people. The mission does not promote any political party or religious agenda.",
  },
  {
    q: "How do you keep the process transparent?",
    a: "Whenever possible, updates will be shared on the Impact page: what was purchased or delivered, how many households were reached, and honest summaries of funds used. Photos appear only with permission. If you ever have a question about a donation, email us.",
  },
  {
    q: "How can I donate?",
    a: `Use the Donate page. Contributions are collected via Revolut once the payment link is live. You can also email ${site.contactEmail} if you prefer to arrange support directly.`,
  },
  {
    q: "Can I donate any amount?",
    a: "Yes. No amount is too small. Every contribution carries the same message: you are not forgotten.",
  },
  {
    q: "Will I see how my money was used?",
    a: "Yes — as the mission grows, Sam commits to sharing updates so supporters can see the impact of their generosity. Real-world conditions can delay reporting; honesty about timing is part of the promise.",
  },
  {
    q: "How can I get in touch?",
    a: `Write to ${site.contactEmail}. Questions about the mission, donations, or partnership are always welcome.`,
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Clear answers. Open hands."
        subtitle="Transparency builds trust. Here is how the mission works — and how we treat every person we help with respect."
        image={site.images.ireland}
      />

      <Section>
        <FadeIn>
          <SectionHeading
            eyebrow="Common questions"
            title="Everything you need to know before you give."
          />
        </FadeIn>

        <div className="mx-auto max-w-3xl divide-y divide-night/10">
          {faqs.map((item, i) => (
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
                <p className="mt-4 leading-relaxed text-ink/70">{item.a}</p>
              </details>
            </FadeIn>
          ))}
        </div>
      </Section>

      <CtaBand title="Still have a question? Donate with confidence." />
    </>
  );
}
