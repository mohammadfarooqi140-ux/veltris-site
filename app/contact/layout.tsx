import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Veltris | Website Strategy & Digital Design",
  description:
    "Discuss your website with Veltris. We review each enquiry to ensure focused attention and respond within one working day.",
  alternates: {
    canonical: "https://www.veltris.uk/contact",
  },
  openGraph: {
    title: "Contact Veltris | Website Strategy & Digital Design",
    description:
      "Discuss your website with Veltris. We review each enquiry to ensure focused attention and respond within one working day.",
    url: "https://www.veltris.uk/contact",
    siteName: "Veltris",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Veltris | Website Strategy & Digital Design",
    description:
      "Discuss your website with Veltris. We review each enquiry to ensure focused attention and respond within one working day.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
