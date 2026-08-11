import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why This Matters",
  description:
    "A clear, human look at humanitarian need in Afghanistan — charts on hunger, poverty, and jobs, beyond politics, centred on dignity.",
};

export default function WhyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
