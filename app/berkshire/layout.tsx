import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Berkshire Dental Suite | Private Dentistry in Slough",
  },
  description:
    "Modern dental care, restorative expertise, and smile consultations in the heart of Slough.",
  alternates: {
    canonical: "https://www.veltris.uk/berkshire",
  },
  openGraph: {
    title: "Berkshire Dental Suite | Private Dentistry in Slough",
    description:
      "Modern dental care, restorative expertise, and smile consultations in the heart of Slough.",
    url: "https://www.veltris.uk/berkshire",
    siteName: "Berkshire Dental Suite",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berkshire Dental Suite | Private Dentistry in Slough",
    description:
      "Modern dental care, restorative expertise, and smile consultations in the heart of Slough.",
  },
};

export default function BerkshireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
