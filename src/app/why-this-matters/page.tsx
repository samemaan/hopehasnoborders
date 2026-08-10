import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { StatsVisuals } from "@/components/StatsVisuals";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Why This Matters",
  description:
    "A clear, human look at humanitarian need in Afghanistan — charts on hunger, poverty, and jobs, beyond politics, centred on dignity.",
};

const points = [
  {
    title: "Hunger is a daily reality",
    text: "Millions of people in Afghanistan face acute food insecurity. Parents skip meals. Children go to bed hungry. A single food package can change the course of a family’s week.",
  },
  {
    title: "Work and livelihoods have collapsed",
    text: "Many skilled and educated people — teachers, professionals, tradespeople — struggle to find paid work. When income disappears, dignity and hope disappear with it.",
  },
  {
    title: "Winter deepens the crisis",
    text: "Harsh winters turn scarcity into emergency. Families need warm clothing, blankets, and fuel support simply to survive the cold months.",
  },
  {
    title: "Children carry the heaviest burden",
    text: "When households cannot afford food or medicine, children suffer first. Helping a family is protecting a child’s tomorrow.",
  },
];

export default function WhyThisMattersPage() {
  return (
    <>
      <PageHero
        eyebrow="Why This Matters"
        title="Human need does not wait for perfect conditions."
        subtitle="This page is not about politics or religion. It is about people — mothers, fathers, elders, and children — facing hardship no one deserves."
        image={site.images.community}
      />

      <Section>
        <StatsVisuals />
      </Section>

      <Section className="!bg-sand-soft">
        <FadeIn>
          <SectionHeading
            eyebrow="The human reality"
            title="When hope runs out, kindness must step in."
            subtitle="The charts above show the scale. These truths show the faces behind the numbers."
          />
        </FadeIn>

        <div className="grid gap-10 md:grid-cols-2">
          {points.map((point, i) => (
            <FadeIn key={point.title} delay={0.06 * i}>
              <article className="border-t border-night/15 pt-6">
                <h3 className="font-display text-2xl text-night">
                  {point.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink/70">{point.text}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section dark className="bg-night">
        <FadeIn className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sand/55">
            Reliable information
          </p>
          <h2 className="mt-4 font-display text-3xl text-cream sm:text-4xl">
            We look to trusted humanitarian sources — not headlines.
          </h2>
          <p className="mt-5 leading-relaxed text-sand/85">
            For ongoing reporting on food security, livelihoods, and emergency
            need, we encourage readers to consult organisations such as the
            World Food Programme (WFP), UN OCHA, and UNICEF. Their public
            situation reports help us stay grounded in verified need — while our
            mission stays focused on dignity and direct help.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-sand/80">
            <li>
              <a
                href="https://www.wfp.org/countries/afghanistan"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-saffron/50 underline-offset-4 hover:decoration-saffron focus-ring"
              >
                World Food Programme — Afghanistan
              </a>
            </li>
            <li>
              <a
                href="https://www.unocha.org/afghanistan"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-saffron/50 underline-offset-4 hover:decoration-saffron focus-ring"
              >
                UN OCHA — Afghanistan
              </a>
            </li>
            <li>
              <a
                href="https://www.unicef.org/afghanistan"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-saffron/50 underline-offset-4 hover:decoration-saffron focus-ring"
              >
                UNICEF — Afghanistan
              </a>
            </li>
          </ul>
        </FadeIn>
      </Section>

      <Section>
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="font-display text-3xl leading-snug text-night sm:text-4xl">
            Knowing the need is only the beginning. Meeting it — together — is
            the mission.
          </p>
        </FadeIn>
      </Section>

      <CtaBand />
    </>
  );
}
