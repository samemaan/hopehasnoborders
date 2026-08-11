import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Who receives help, how recipients are chosen, and how Hope Has No Borders stays transparent.",
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
