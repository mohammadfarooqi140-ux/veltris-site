"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { getStoredConsent, ConsentState } from "@/lib/cookieConsent";

const GA_MEASUREMENT_ID = "G-92G8DB3QE3";

export default function AnalyticsScriptLoader() {
  const [canLoadAnalytics, setCanLoadAnalytics] = useState(false);

  useEffect(() => {
    // Initial check
    const current = getStoredConsent();
    if (current.categories.analytics) {
      setCanLoadAnalytics(true);
    }

    // Listen for consent updates
    const handleConsentUpdate = (e: CustomEvent<ConsentState>) => {
      if (e.detail?.categories?.analytics) {
        setCanLoadAnalytics(true);
      } else {
        setCanLoadAnalytics(false);
      }
    };

    window.addEventListener("veltris_consent_updated", handleConsentUpdate as EventListener);
    return () => window.removeEventListener("veltris_consent_updated", handleConsentUpdate as EventListener);
  }, []);

  if (!canLoadAnalytics) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
