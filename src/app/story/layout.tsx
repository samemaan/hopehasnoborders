import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Journey",
  description:
    "A shared journey of hope — from Afghanistan to a second home, and back again to families who still need us.",
};

export default function StoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
