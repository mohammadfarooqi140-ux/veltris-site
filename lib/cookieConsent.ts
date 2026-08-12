"use client";

export type CookieCategories = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
};

export type ConsentState = {
  hasResponded: boolean;
  timestamp: string | null;
  categories: CookieCategories;
};

const CONSENT_KEY = "veltris_cookie_consent_v1";

export const DEFAULT_CONSENT: ConsentState = {
  hasResponded: false,
  timestamp: null,
  categories: {
    essential: true, // Always required
    analytics: false,
    marketing: false,
  },
};

export function getStoredConsent(): ConsentState {
  if (typeof window === "undefined") return DEFAULT_CONSENT;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return DEFAULT_CONSENT;
    return JSON.parse(raw);
  } catch (e) {
    return DEFAULT_CONSENT;
  }
}

export function saveConsent(categories: Partial<CookieCategories>): ConsentState {
  if (typeof window === "undefined") return DEFAULT_CONSENT;
  
  const newState: ConsentState = {
    hasResponded: true,
    timestamp: new Date().toISOString(),
    categories: {
      essential: true,
      analytics: Boolean(categories.analytics),
      marketing: Boolean(categories.marketing),
    },
  };

  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(newState));
    // Trigger custom event so components and script loaders update immediately
    window.dispatchEvent(new CustomEvent("veltris_consent_updated", { detail: newState }));
  } catch (e) {
    console.error("Failed to save consent", e);
  }

  return newState;
}

export function resetConsent(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(CONSENT_KEY);
    window.dispatchEvent(new CustomEvent("veltris_consent_reset"));
  } catch (e) {
    console.error("Failed to reset consent", e);
  }
}
