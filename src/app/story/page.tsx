import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Journey",
  description:
    "From Afghanistan to Ireland — and a mission to carry hope back to families who feel forgotten.",
};

export default function StoryPage() {
  return (
    <>
      <PageHero
        eyebrow={site.storyLabel}
        title="I was given a chance. Now I want to pass that chance on."
        subtitle="Sixteen years ago I crossed into a new life with nothing but hope. Today I ask you to help me send that hope home — to families still waiting for their tomorrow."
        image={site.images.story}
      />

      <Section>
        <FadeIn className="prose-mission mx-auto max-w-3xl text-lg leading-relaxed text-ink/80">
          <p className="font-display text-2xl text-night sm:text-3xl">
            I am not asking you to know my name.
          </p>
          <p>
            I am asking you to know this: I came to Ireland from Afghanistan
            sixteen years ago with nothing but hope. I could not speak a single
            word of English. Everything was new, unfamiliar, and overwhelming.
            Every day was a lesson. Every conversation was courage. Every small
            step forward felt like a victory worth celebrating.
          </p>
          <p>
            If you have ever felt lost in a new place — unsure, unseen, and
            trying anyway — you already understand the beginning of this story.
          </p>
        </FadeIn>
      </Section>

      <section className="relative grid min-h-[50vh] md:grid-cols-2">
        <div className="relative min-h-[280px]">
          <Image
            src={site.images.ireland.src}
            alt={site.images.ireland.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="flex items-center bg-night px-5 py-16 sm:px-12">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sand/60">
              A second home
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-cream sm:text-4xl">
              Ireland did not just welcome me. It rebuilt me.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-sand/85">
              I learned the language. I worked hard. I graduated with a degree
              in Computer Science and have worked as a software developer for
              more than eight years. Ireland gave me dignity, purpose, and a
              future I once only dreamed of. That gift changed everything.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section>
        <FadeIn className="prose-mission mx-auto max-w-3xl text-lg leading-relaxed text-ink/80">
          <p className="font-display text-2xl text-night sm:text-3xl">
            But while my life changed, my heart never left Afghanistan.
          </p>
          <p>
            Every day I think of people who studied, dreamed, and worked toward
            a better future — and then found doors closed: no jobs, little hope,
            and not enough to cover even the basics for their families.
          </p>
          <p>
            I think of mothers who skip meals so their children can eat. Fathers
            who search for work and return home empty-handed. Elders with no one
            left to care for them. Children who fall asleep hungry — not because
            they failed, but because they were born into circumstances beyond
            their control.
          </p>
          <p className="font-display text-2xl text-night">
            No one deserves to be forgotten.
          </p>
          <p>
            This mission is not about politics. It is not about religion. It is
            about humanity — people helping people. It is about proving that
            kindness can travel farther than any border.
          </p>
          <p>
            My mission is simple, even when the need feels endless: bring hope
            to families who have almost none. I cannot do it alone. I was never
            meant to. Hope grows when we share it.
          </p>
          <p className="pull-quote my-10 text-2xl sm:text-3xl">
            One meal may seem small to us. To someone who has not eaten all day,
            it can mean everything.
          </p>
          <p>
            I am not asking you to change the whole world. I am asking you to
            change <em>someone&apos;s</em> world. Whether your gift is large or
            small, it carries the same message:
          </p>
          <p className="font-display text-3xl text-saffron">
            &ldquo;You are not forgotten.&rdquo;
          </p>
          <p>
            As this mission grows, updates will be shared with honesty and
            respect — so you can see the difference compassion makes. Every
            person we help will be treated with dignity.
          </p>
          <p>
            If you choose to support this work, you are not only making a
            donation. You are giving a child a meal. You are giving a parent a
            breath of relief. You are reminding another human being that
            someone, somewhere, still cares.
          </p>
          <p>
            Thank you for reading. Thank you for believing that kindness can
            cross oceans. Thank you for believing we are stronger when we stand
            together.
          </p>
          <p className="font-display text-xl text-night">
            This began as one person&apos;s promise.
            <br />
            With you, it can become a movement of hope.
          </p>
          <p className="mt-10 font-display text-xl italic text-night">
            With hope,
            <br />
            {site.founder}
          </p>
        </FadeIn>
      </Section>

      <CtaBand
        title="Together, we can give hope where hope feels impossible."
        text="Together, we can remind families in Afghanistan that they have not been forgotten — one meal, one family, one act of kindness at a time."
      />
    </>
  );
}
