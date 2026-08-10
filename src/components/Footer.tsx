import Link from "next/link";
import { DonateButton } from "@/components/DonateButton";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-night-deep text-sand pb-20 md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-md text-base leading-relaxed text-sand/80">
            People helping people. A warm, human mission of dignity,
            transparency, and hope for families in Afghanistan — beyond politics
            and beyond borders.
          </p>
          <div className="mt-7">
            <DonateButton>Give hope</DonateButton>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand/55">
            Explore
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sand/90 transition-colors hover:text-cream focus-ring"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/donate"
                className="text-sand/90 transition-colors hover:text-cream focus-ring"
              >
                Donate
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand/55">
            A message of hope
          </p>
          <p className="mt-4 font-display text-lg italic leading-snug text-cream/90">
            &ldquo;Thank you for believing that kindness can cross borders.&rdquo;
          </p>
          <p className="mt-5 text-sm leading-relaxed text-sand/75">
            Questions about the mission or how funds are used?{" "}
            <Link
              href="/contact"
              className="text-cream underline decoration-saffron/60 underline-offset-4 hover:decoration-saffron focus-ring"
            >
              Visit the contact page
            </Link>{" "}
            or email
          </p>
          <a
            href={`mailto:${site.contactEmail}`}
            className="mt-2 inline-block text-sm text-cream underline decoration-saffron/60 underline-offset-4 hover:decoration-saffron focus-ring"
          >
            {site.contactEmail}
          </a>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-sand/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}. Built with hope.
          </p>
          <p>Not affiliated with any political or religious organisation.</p>
        </div>
      </div>
    </footer>
  );
}
