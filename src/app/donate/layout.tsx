import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Hope Has No Borders — every contribution helps families in Afghanistan with food, warmth, medicine, and emergency care.",
};

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
