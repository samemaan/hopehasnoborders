export const site = {
  name: "Hope Has No Borders",
  tagline: "You are not forgotten.",
  description:
    "A humanitarian mission founded by Sam — bringing hope, food, and dignity to families in Afghanistan through people helping people.",
  founder: "Sam",
  // TODO: paste Revolut payment link when ready
  revolutDonateUrl: "#donate-link-coming-soon",
  contactEmail: "hello@hopehasnoborders.org",
  nav: [
    { href: "/story", label: "My Story", shortLabel: "Story" },
    { href: "/why-this-matters", label: "Why This Matters", shortLabel: "Why it matters" },
    { href: "/how-donations-help", label: "How Donations Help", shortLabel: "How help works" },
    { href: "/impact", label: "Impact Updates", shortLabel: "Impact" },
    { href: "/faq", label: "Questions & Answers", shortLabel: "FAQ" },
  ],
  images: {
    hero: {
      src: "https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=2400&q=80",
      alt: "Rugged mountain ranges under a wide sky in Afghanistan",
    },
    story: {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80",
      alt: "Sunlit mountain path suggesting a long journey toward hope",
    },
    ireland: {
      src: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=2000&q=80",
      alt: "Soft green Irish landscape under gentle light",
    },
    need: {
      src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=2000&q=80",
      alt: "Hands sharing food — a quiet moment of care and dignity",
    },
    children: {
      src: "https://images.unsplash.com/photo-1642917479900-c21796d982f3?auto=format&fit=crop&w=2000&q=80",
      alt: "A large group of Afghan children gathered on a dusty field in Kabul — a reminder of how many young lives face hardship",
    },
    community: {
      src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=2000&q=80",
      alt: "People standing together in solidarity and compassion",
    },
    winter: {
      src: "https://images.unsplash.com/photo-1637750832829-7cc7e0605c15?auto=format&fit=crop&w=2000&q=80",
      alt: "Snow-covered mountains in Afghanistan — harsh winters when families need warmth most",
    },
    medicine: {
      src: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1600&q=80",
      alt: "Essential medicine bottles representing health support",
    },
    food: {
      src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1600&q=80",
      alt: "Fresh bread and staples representing a food package",
    },
  },
} as const;

export type NavItem = (typeof site.nav)[number];
