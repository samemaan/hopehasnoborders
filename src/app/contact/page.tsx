import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { CtaBand } from "@/components/CtaBand";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Hope Has No Borders — questions, donations, or partnership.",
};

const reasons = [
  {
    title: "Ask about the mission",
    text: "Curious how help reaches families, or how updates are shared? Write anytime.",
  },
  {
    title: "Arrange a donation",
    text: "Prefer to give by email first? Reach out and you will be guided with care.",
  },
  {
    title: "Walk this journey together",
    text: "Ideas for partnership, volunteering, or sharing the story are always welcome.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="I would love to hear from you."
        subtitle="Whether you have a question, want to donate, or simply felt moved by this mission — your message matters."
        image={site.images.ireland}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <FadeIn>
              <SectionHeading
                eyebrow="A personal note"
                title="Kindness begins with a conversation."
                subtitle="Every message is read with care. There is no call centre — only a human on the other side who believes this work matters."
              />
            </FadeIn>

            <FadeIn delay={0.08} className="space-y-8">
              {reasons.map((item) => (
                <div key={item.title} className="border-l-2 border-saffron pl-5">
                  <h3 className="font-display text-xl text-night">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink/70">{item.text}</p>
                </div>
              ))}
            </FadeIn>

            <FadeIn delay={0.12} className="mt-10 rounded-md bg-saffron-soft/50 px-5 py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
                Email directly
              </p>
              <a
                href={`mailto:${site.contactEmail}`}
                className="mt-3 inline-block font-display text-2xl text-night underline decoration-saffron/50 underline-offset-4 hover:decoration-saffron focus-ring"
              >
                {site.contactEmail}
              </a>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">
                Based in Ireland. Supporting families in Afghanistan — people
                helping people, beyond politics and beyond borders.
              </p>
            </FadeIn>
          </div>

          <div className="rounded-md border border-night/10 bg-sand-soft/60 px-5 py-8 sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
              Reach out
            </p>
            <h2 className="mt-3 font-display text-3xl text-night">
              Send a message
            </h2>
            <p className="mt-3 mb-8 text-ink/65">
              Fill in the form below. It will open your email so you can send it
              securely from your own inbox.
            </p>
            <ContactForm />
          </div>
        </div>
      </Section>

      <CtaBand
        title="Or support a family today."
        text="If you came here ready to help, every contribution — large or small — carries the same message: you are not forgotten."
      />
    </>
  );
}
