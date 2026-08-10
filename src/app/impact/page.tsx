import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impact Updates",
  description:
    "Stories, summaries, and updates on how donations are used — shared with honesty and respect.",
};

const updates = [
  {
    title: "Example: First winter warmth drive",
    date: "Format example",
    summary:
      "When real updates begin, you will see who was reached, what was provided (blankets, coats, food), and a clear summary of funds used — always with permission for any photos shared.",
    image: site.images.winter,
  },
  {
    title: "Example: Family food packages",
    date: "Format example",
    summary:
      "Sample format: number of households supported, contents of packages, and a short note on how recipients were identified — transparent, respectful, and free of sensational detail.",
    image: site.images.food,
  },
  {
    title: "Example: Emergency medical help",
    date: "Format example",
    summary:
      "Sample format: the urgent need, the assistance given, and an honest accounting of costs. Faces and names appear only with consent.",
    image: site.images.medicine,
  },
];

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Impact Updates"
        title="See the hope your generosity creates."
        subtitle="Transparency is a promise. As the mission grows, updates will live here — photos with permission, stories shared with dignity, and clear summaries of how funds were used."
        image={site.images.need}
      />

      <Section>
        <FadeIn>
          <SectionHeading
            eyebrow="Coming soon — real stories"
            title="This is the shape of our updates."
            subtitle="The entries below are examples of how we will report impact. They will be replaced with real updates as soon as they can be shared responsibly."
          />
        </FadeIn>

        <div className="space-y-12">
          {updates.map((update, i) => (
            <FadeIn key={update.title} delay={0.06 * i}>
              <article className="grid gap-6 border-t border-night/10 pt-10 md:grid-cols-[1.1fr_1.4fr] md:gap-10">
                <div className="relative aspect-[16/10] overflow-hidden bg-sand-soft">
                  <Image
                    src={update.image.src}
                    alt={update.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
                    {update.date}
                  </p>
                  <h3 className="mt-3 font-display text-2xl text-night sm:text-3xl">
                    {update.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-ink/70">
                    {update.summary}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <FadeIn className="mx-auto max-w-2xl rounded-sm bg-sand-soft px-6 py-10 text-center sm:px-10">
          <p className="font-display text-2xl text-night">
            Have photos or stories from a distribution you helped make possible?
          </p>
          <p className="mt-3 text-ink/70">
            Reach out at{" "}
            <a
              href={`mailto:${site.contactEmail}`}
              className="font-semibold text-saffron underline decoration-saffron/40 underline-offset-4 focus-ring"
            >
              {site.contactEmail}
            </a>
            . We only publish what families consent to share.
          </p>
        </FadeIn>
      </Section>

      <CtaBand title="Help write the next update." />
    </>
  );
}
