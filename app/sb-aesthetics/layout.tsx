import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SB Aesthetics UK — Suggested Consultation Pathway Concept",
  description:
    "Private speculative mobile-first visual concept exploration by Veltris. Not commissioned, approved or endorsed by SB Aesthetics UK.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SbAestheticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
