import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "My Story",
  description:
    "Sam’s journey from Afghanistan to Ireland — and the mission to bring hope home.",
};

export default function StoryPage() {
  return (
    <>
      <PageHero
        eyebrow="My Story"
        title="From Afghanistan to Ireland — and back to the heart."
        subtitle="I came with nothing but hope. Ireland gave me a future. Now I want to give hope to those who still wait for theirs."
        image={site.images.story}
      />

      <Section>
        <FadeIn className="prose-mission mx-auto max-w-3xl text-lg leading-relaxed text-ink/80">
          <p className="font-display text-2xl text-night sm:text-3xl">
            My name is Sam.
          </p>
          <p>
            I came to Ireland from Afghanistan sixteen years ago with nothing
            but hope. I couldn&apos;t speak a single word of English. Everything
            was new, unfamiliar, and challenging. Every day was a lesson, every
            conversation was a struggle, and every small achievement felt like a
            victory.
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
              Over the years, Ireland became my second home.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-sand/85">
              I learned the language, worked hard, graduated with a degree in
              Computer Science, and have proudly worked as a Software Developer
              for more than eight years. Ireland gave me opportunities that
              changed my life forever.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section>
        <FadeIn className="prose-mission mx-auto max-w-3xl text-lg leading-relaxed text-ink/80">
          <p className="font-display text-2xl text-night sm:text-3xl">
            But while my life has changed, my heart has never left Afghanistan.
          </p>
          <p>
            Every single day I think about the people who never had the
            opportunities I was fortunate enough to receive. I think about
            educated men and women who spent years studying, dreaming, and
            working toward a better future — only to find themselves without
            jobs, without hope, and without the ability to provide even the most
            basic necessities for their families.
          </p>
          <p>
            I think about mothers who skip meals so their children can eat. I
            think about fathers who search endlessly for work but return home
            empty-handed. I think about elderly people who have no one to care
            for them. I think about children who fall asleep hungry — not
            because they did anything wrong, but because they were born into
            circumstances beyond their control.
          </p>
          <p className="font-display text-2xl text-night">No one deserves that.</p>
          <p>
            This website is not about politics. It is not about religion. It is
            about humanity. It is about people helping people.
          </p>
          <p>
            My mission is simple, even if the challenge is enormous. I want to
            bring hope to families who have almost none. I know I cannot help
            everyone by myself. But I truly believe that together, we can make a
            real difference.
          </p>
          <p>
            One meal may seem small to us. To someone who has not eaten all day,
            it can mean everything. One small donation might seem insignificant.
            To a struggling family, it could be the reason their children do not
            go to bed hungry tonight.
          </p>
          <p>
            Every act of kindness matters. Every contribution matters. Every
            life matters.
          </p>
          <p>
            I&apos;m not asking anyone to change the world alone. I&apos;m
            simply asking you to join me in changing someone&apos;s world.
            Whether your contribution is large or small, it carries the same
            message:
          </p>
          <p className="font-display text-3xl text-saffron">
            &ldquo;You are not forgotten.&rdquo;
          </p>
          <p>
            As this mission grows, I will share updates whenever possible so you
            can see the impact your generosity is making. I believe in
            transparency, honesty, and treating every person we help with
            dignity and respect.
          </p>
          <p>
            If you choose to support this mission, you are not simply making a
            donation. You are giving hope. You are sharing compassion. You are
            helping a child eat. You are helping a parent breathe a little
            easier. You are reminding another human being that there are still
            people in this world who care.
          </p>
          <p>
            From the bottom of my heart, thank you for reading my story. Thank
            you for believing that kindness can cross borders. Thank you for
            believing that humanity is stronger when we stand together.
          </p>
          <p>
            This is my mission. I hope it becomes your mission too.
          </p>
          <p className="font-display text-xl italic text-night">
            With hope,
            <br />
            Sam
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
