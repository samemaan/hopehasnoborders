import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Your Donation Helps",
  description:
    "See how gifts become food packages, medicine, winter clothing, and emergency assistance for families in need.",
};

export default function HowLayout({ children }: { children: React.ReactNode }) {
  return children;
}
