import type { Metadata } from "next";
import ClaudiaConceptClient from "./ClaudiaConceptClient";

export const metadata: Metadata = {
  title: "Concept Study for Interior Design | Veltris",
  description:
    "An independent Veltris concept study exploring a brand aligned 3D narrative website direction for a residential interior design studio.",
  alternates: {
    canonical: "https://www.veltris.uk/work/claudia-dorsch-concept",
  },
  openGraph: {
    title: "Concept Study for Interior Design | Veltris",
    description:
      "An independent Veltris concept exploring place, material, atmosphere, and a calm digital journey for a residential interior design studio.",
    url: "https://www.veltris.uk/work/claudia-dorsch-concept",
    siteName: "Veltris",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Concept Study for Interior Design | Veltris",
    description:
      "An independent Veltris concept exploring place, material, atmosphere, and a calm digital journey for a residential interior design studio.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Concept Study for Interior Design | Veltris",
  "headline": "THREE WORLDS. ONE WAY OF LIVING.",
  "description":
    "An independent Veltris concept study exploring a brand aligned 3D narrative website direction for a residential interior design studio.",
  "url": "https://www.veltris.uk/work/claudia-dorsch-concept",
  "creator": {
    "@type": "Organization",
    "name": "Veltris",
    "url": "https://www.veltris.uk",
  },
  "isAccessibleForFree": true,
};

export default function ClaudiaConceptPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ClaudiaConceptClient />
    </>
  );
}
