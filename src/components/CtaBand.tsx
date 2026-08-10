import { DonateButton } from "@/components/DonateButton";
import { FadeIn } from "@/components/FadeIn";

type CtaBandProps = {
  title?: string;
  text?: string;
};

export function CtaBand({
  title = "Your kindness can reach a family tonight.",
  text = "No amount is too small. Every gift is a meal, a warmer night, and a gentle reminder: you are not forgotten.",
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-night px-5 py-20 sm:px-8 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-saffron/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-sand/15 blur-3xl"
      />
      <FadeIn className="relative mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sand/60">
          Walk this journey with me
        </p>
        <h2 className="mt-4 font-display text-3xl leading-tight text-cream sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-sand/88 sm:text-lg">
          {text}
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <DonateButton>Give hope today</DonateButton>
          <DonateButton href="/story" variant="secondary">
            Read Sam&apos;s story
          </DonateButton>
        </div>
      </FadeIn>
    </section>
  );
}
