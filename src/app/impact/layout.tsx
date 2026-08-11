import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact Updates",
  description:
    "Stories, summaries, and updates on how donations are used — shared with honesty and respect.",
};

export default function ImpactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
