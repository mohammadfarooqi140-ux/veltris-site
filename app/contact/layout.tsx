import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Veltris | Premium Website Studio UK",
  description:
    "Discuss a premium website project with Veltris. Enquiries are reviewed for fit before a project is offered.",
  alternates: {
    canonical: "https://www.veltris.uk/contact",
  },
  openGraph: {
    title: "Contact Veltris | Premium Website Studio UK",
    description:
      "Discuss a premium website project with Veltris. Enquiries are reviewed for fit before a project is offered.",
    url: "https://www.veltris.uk/contact",
    siteName: "Veltris",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Veltris | Premium Website Studio UK",
    description:
      "Discuss a premium website project with Veltris. Enquiries are reviewed for fit before a project is offered.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
