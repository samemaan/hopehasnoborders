import type { Metadata } from "next";
import Image from "next/image";
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

const faces = [
  {
    image: site.images.womenFamily,
    caption: "Mothers & families",
    text: "Women carrying households through hunger, cold, and uncertainty — with quiet courage.",
  },
  {
    image: site.images.childrenClose,
    caption: "Children",
    text: "Young lives that should be filled with play and learning — not empty stomachs.",
  },
  {
    image: site.images.children,
    caption: "A generation waiting",
    text: "Crowds of children in dusty fields — a reminder of how many futures hang in the balance.",
  },
  {
    image: site.images.hardship,
    caption: "Elders & everyday need",
    text: "Hands that once provided for others now wait for a meal, medicine, or a little warmth.",
  },
];

const points = [
  {
    title: "Hunger is a daily reality",
    text: "Millions of people in Afghanistan face acute food insecurity. Parents skip meals. Children go to bed hungry. A single food package can change the course of a family’s week.",
    image: site.images.afghanKidsHope,
  },
  {
    title: "Work and livelihoods have collapsed",
    text: "Many skilled and educated people — teachers, professionals, tradespeople — struggle to find paid work. When income disappears, dignity and hope disappear with it.",
    image: site.images.womenFamily,
  },
  {
    title: "Winter deepens the crisis",
    text: "Harsh winters turn scarcity into emergency. Families need warm clothing, blankets, and fuel support simply to survive the cold months.",
    image: site.images.winter,
  },
  {
    title: "Children carry the heaviest burden",
    text: "When households cannot afford food or medicine, children suffer first. Helping a family is protecting a child’s tomorrow.",
    image: site.images.childrenClose,
  },
];

export default function WhyThisMattersPage() {
  return (
    <>
      <PageHero
        eyebrow="Why This Matters"
        title="Behind every number is a face. Behind every face, a family."
        subtitle="This page is not about politics or religion. It is about mothers, fathers, elders, and children facing hardship no one deserves."
        image={site.images.womenFamily}
      />

      {/* Emotional faces before the charts */}
      <section className="bg-night px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sand/60">
              Faces of the need
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl text-cream sm:text-4xl">
              Charts measure the crisis. These images remind us why it hurts.
            </h2>
            <p className="mt-4 max-w-2xl text-sand/80">
              Women. Elders. Men searching for work. Children who did nothing
              wrong. Poverty is not a statistic when it has a human face.
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {faces.map((face, i) => (
              <FadeIn key={face.caption} delay={0.06 * i}>
                <figure className="group relative overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={face.image.src}
                      alt={face.image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-night via-night/25 to-transparent" />
                  </div>
                  <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron">
                      {face.caption}
                    </p>
                    <p className="mt-2 font-display text-xl text-cream sm:text-2xl">
                      {face.text}
                    </p>
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <StatsVisuals />
      </Section>

      <Section className="!bg-sand-soft">
        <FadeIn>
          <SectionHeading
            eyebrow="The human reality"
            title="When hope runs out, kindness must step in."
            subtitle="The charts show the scale. These moments show the people living inside it."
          />
        </FadeIn>

        <div className="space-y-14">
          {points.map((point, i) => (
            <FadeIn key={point.title} delay={0.05 * i}>
              <article
                className={`grid items-center gap-8 md:grid-cols-2 md:gap-12 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image
                    src={point.image.src}
                    alt={point.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-night sm:text-3xl">
                    {point.title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-ink/70">
                    {point.text}
                  </p>
                </div>
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
