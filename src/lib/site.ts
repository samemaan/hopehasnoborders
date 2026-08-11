export const site = {
  name: "Hope Has No Borders",
  tagline: "You are not forgotten.",
  description:
    "A humanitarian mission bringing hope, food, and dignity to families in Afghanistan through people helping people.",
  /** Anonymous sign-off used in letters and footers */
  founder: "A grateful heart",
  storyLabel: "The Journey",
  paypalMeUrl: "https://paypal.me/hopehasnoborders",
  paypal: {
    clientId:
      "BAAq1FRW_FRwNMIIwqeeBqCJbsce2Zm--1gBXrZITmyRhISN8CBB-pH0xb3wnQghJ4xYCI79paDCNSiGf4",
    hostedButtonId: "7J7ZVFS7JRD9Y",
    paymentUrl: "https://www.paypal.com/ncp/payment/7J7ZVFS7JRD9Y",
    currency: "EUR",
  },
  contactEmail: "donate@hopehasnoborders.com",
  nav: [
    { href: "/story", label: "The Journey", shortLabel: "Journey" },
    { href: "/why-this-matters", label: "Why This Matters", shortLabel: "Why it matters" },
    { href: "/how-donations-help", label: "How Donations Help", shortLabel: "How help works" },
    { href: "/impact", label: "Impact Updates", shortLabel: "Impact" },
    { href: "/faq", label: "Questions & Answers", shortLabel: "FAQ" },
    { href: "/contact", label: "Contact", shortLabel: "Contact" },
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
      src: "/brand/ireland-second-home.png",
      alt: "Soft green Irish hills at golden hour — a second home of welcome, dignity, and new beginnings",
    },
    need: {
      src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=2000&q=80",
      alt: "Hands sharing food — a quiet moment of care and dignity",
    },
    afghanKidsHope: {
      src: "/brand/afghan-kids-hope-bread.png",
      alt: "Afghan children sharing a small piece of bread — hungry, hopeful, and holding on",
    },
    hardship: {
      src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=2000&q=80",
      alt: "People waiting for humanitarian aid — elders and families enduring poverty with quiet dignity",
    },
    elderBread: {
      src: "/brand/afghan-elder-bread.png",
      alt: "An elderly Afghan man with an emotional expression, holding simple bread — a reminder that one meal can mean everything",
    },
    children: {
      src: "https://images.unsplash.com/photo-1642917479900-c21796d982f3?auto=format&fit=crop&w=2000&q=80",
      alt: "A large group of Afghan children gathered on a dusty field in Kabul — a reminder of how many young lives face hardship",
    },
    womenFamily: {
      src: "https://images.unsplash.com/photo-1637034132563-d0a62d999d15?auto=format&fit=crop&w=2000&q=80",
      alt: "Afghan women and children during humanitarian assistance in Kabul — families carrying quiet strength through hardship",
    },
    childrenClose: {
      src: "https://images.unsplash.com/photo-1660945890218-05949a7b11eb?auto=format&fit=crop&w=2000&q=80",
      alt: "Young Afghan children in Kabul — faces that deserve safety, food, and a future",
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
