"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, X, Check, Settings } from "lucide-react";
import { getStoredConsent, saveConsent, ConsentState, CookieCategories } from "@/lib/cookieConsent";

export default function CookieConsent() {
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  const [preferences, setPreferences] = useState<CookieCategories>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = getStoredConsent();
    setConsent(stored);
    if (!stored.hasResponded) {
      // Delay slightly for smooth page entrance
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const updated = saveConsent({ analytics: true, marketing: true });
    setConsent(updated);
    setShowBanner(false);
    setShowModal(false);
  };

  const handleRejectAll = () => {
    const updated = saveConsent({ analytics: false, marketing: false });
    setConsent(updated);
    setShowBanner(false);
    setShowModal(false);
  };

  const handleSavePreferences = () => {
    const updated = saveConsent(preferences);
    setConsent(updated);
    setShowBanner(false);
    setShowModal(false);
  };

  if (!consent) return null;

  return (
    <>
      {/* Floating Re-open Button (PEC/GDPR withdrawal mechanism) */}
      {consent.hasResponded && !showBanner && !showModal && (
        <button
          onClick={() => setShowModal(true)}
          className="fixed bottom-6 left-6 z-40 bg-zinc-900/90 border border-white/10 text-zinc-400 hover:text-white p-3 rounded-full shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          title="Privacy & Cookie Settings"
          aria-label="Privacy & Cookie Settings"
        >
          <Shield className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
        </button>
      )}

      {/* Main Cookie Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 md:p-8 pointer-events-none">
          <div className="max-w-4xl mx-auto bg-[#0d0d0d] border border-[#222222] rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-2xl pointer-events-auto relative text-white animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 flex-grow pr-4">
                <div className="flex items-center gap-2 text-amber-400 text-xs uppercase font-semibold tracking-widest">
                  <Shield className="w-4 h-4" />
                  UK GDPR & Privacy Preferences
                </div>
                <h3 className="font-playfair text-xl sm:text-2xl font-medium text-white">
                  We respect your privacy
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-2xl">
                  We use cookies to analyze site traffic and enhance your browsing experience. Essential cookies are required for security and core functionality. Non-essential cookies are only enabled with your explicit consent. Read our{" "}
                  <Link href="/privacy-policy" className="text-amber-400 underline hover:text-amber-300">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/cookie-policy" className="text-amber-400 underline hover:text-amber-300">
                    Cookie Policy
                  </Link>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
                <button
                  onClick={() => setShowModal(true)}
                  className="px-5 py-3 rounded-full border border-white/10 bg-zinc-900 text-zinc-300 text-xs font-semibold uppercase tracking-wider hover:bg-zinc-800 hover:text-white transition-all text-center flex items-center justify-center gap-2"
                >
                  <Settings className="w-3.5 h-3.5" />
                  Preferences
                </button>
                <button
                  onClick={handleRejectAll}
                  className="px-5 py-3 rounded-full border border-white/10 bg-zinc-900 text-zinc-300 text-xs font-semibold uppercase tracking-wider hover:bg-zinc-800 hover:text-white transition-all text-center"
                >
                  Reject All
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-3 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-all text-center shadow-lg"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Preferences Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-[#0d0d0d] border border-[#222222] rounded-3xl p-6 sm:p-8 max-w-xl w-full text-white shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 text-zinc-500 hover:text-white p-2 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6 pr-8">
              <span className="text-xs uppercase font-semibold tracking-widest text-amber-400 block mb-1">
                Cookie Preferences
              </span>
              <h2 className="font-playfair text-2xl font-medium text-white">
                Manage Privacy Options
              </h2>
              <p className="text-zinc-400 text-xs font-light mt-2">
                Configure your cookie preferences below. You can update or withdraw your consent at any time.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {/* Essential */}
              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 font-medium text-sm text-white mb-1">
                    Strictly Necessary Cookies
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">Required</span>
                  </div>
                  <p className="text-zinc-400 text-xs font-light">
                    Required for core security, session state, navigation, and CSRF protection. Cannot be disabled.
                  </p>
                </div>
                <div className="w-10 h-6 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-end px-1 shrink-0">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                </div>
              </div>

              {/* Analytics */}
              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5 flex items-start justify-between gap-4">
                <div>
                  <div className="font-medium text-sm text-white mb-1">Analytics & Performance Cookies</div>
                  <p className="text-zinc-400 text-xs font-light">
                    Helps us measure site traffic, popular deck services, and user interaction patterns to improve site experience.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                  className={`w-11 h-6 rounded-full transition-colors duration-300 relative shrink-0 p-0.5 border ${
                    preferences.analytics ? "bg-amber-500 border-amber-400" : "bg-zinc-800 border-zinc-700"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
                      preferences.analytics ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Marketing */}
              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5 flex items-start justify-between gap-4">
                <div>
                  <div className="font-medium text-sm text-white mb-1">Marketing & Attribution Cookies</div>
                  <p className="text-zinc-400 text-xs font-light">
                    Used to measure referral campaigns and tailor pitch deck service inquiries for founders.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                  className={`w-11 h-6 rounded-full transition-colors duration-300 relative shrink-0 p-0.5 border ${
                    preferences.marketing ? "bg-amber-500 border-amber-400" : "bg-zinc-800 border-zinc-700"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
                      preferences.marketing ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 border-t border-white/10 pt-6">
              <button
                onClick={handleRejectAll}
                className="w-full sm:w-auto px-5 py-3 rounded-full border border-white/10 text-zinc-400 text-xs uppercase tracking-wider font-semibold hover:text-white hover:bg-zinc-900 transition-colors text-center"
              >
                Reject Non-Essential
              </button>
              <button
                onClick={handleSavePreferences}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black text-xs uppercase tracking-wider font-semibold hover:bg-zinc-200 transition-colors text-center shadow-lg"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
