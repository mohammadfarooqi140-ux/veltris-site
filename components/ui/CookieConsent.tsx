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
      const timer = setTimeout(() => setShowBanner(true), 800);
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
      {/* Floating Re-open Shield Button (Bottom Left) */}
      {consent.hasResponded && !showBanner && !showModal && (
        <button
          onClick={() => setShowModal(true)}
          className="fixed bottom-5 left-5 z-40 bg-zinc-900/90 border border-white/15 text-zinc-400 hover:text-white p-2.5 rounded-full shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          title="Privacy & Cookie Preferences"
          aria-label="Privacy & Cookie Preferences"
        >
          <Shield className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
        </button>
      )}

      {/* Main Cookie Banner (Slimmer height, wider max-width on PC) */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-2 sm:p-3 md:p-4 pointer-events-none">
          <div className="max-w-5xl mx-auto bg-[#0d0d0d]/95 border border-[#262626] rounded-2xl md:rounded-full px-4 sm:px-6 py-3 shadow-2xl backdrop-blur-xl pointer-events-auto text-white animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-6">
              <div className="flex flex-col md:flex-row md:items-center gap-1.5 md:gap-4 flex-1 min-w-0">
                <div className="flex items-center gap-1.5 text-amber-400 text-[10px] font-semibold uppercase tracking-wider shrink-0">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Privacy</span>
                </div>
                <p className="text-zinc-400 text-xs font-light leading-snug">
                  We use cookies for essential site functions and performance analytics. Read our{" "}
                  <Link href="/privacy-policy" className="text-amber-400 underline hover:text-amber-300">
                    Privacy Policy
                  </Link>{" "}
                  &amp;{" "}
                  <Link href="/cookie-policy" className="text-amber-400 underline hover:text-amber-300">
                    Cookie Policy
                  </Link>.
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0 w-full md:w-auto justify-end">
                <button
                  onClick={() => setShowModal(true)}
                  className="px-3.5 py-1.5 rounded-full border border-white/10 bg-zinc-900 text-zinc-300 text-[11px] font-semibold uppercase tracking-wider hover:bg-zinc-800 hover:text-white transition-all flex items-center gap-1.5"
                >
                  <Settings className="w-3 h-3 text-amber-400" />
                  Preferences
                </button>
                <button
                  onClick={handleRejectAll}
                  className="px-3.5 py-1.5 rounded-full border border-white/10 bg-zinc-900 text-zinc-300 text-[11px] font-semibold uppercase tracking-wider hover:bg-zinc-800 hover:text-white transition-all"
                >
                  Reject All
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-4 py-1.5 rounded-full bg-white text-black text-[11px] font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-lg"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Preferences Modal (Optimized for PC & Mobile fit) */}
      {showModal && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowModal(false);
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
        >
          <div className="bg-[#0d0d0d] border border-[#262626] rounded-2xl p-6 sm:p-8 max-w-2xl w-full text-white shadow-2xl relative max-h-[85vh] flex flex-col justify-between overflow-hidden">
            
            {/* Modal Header */}
            <div className="flex-shrink-0">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 pr-8">
                <div>
                  <span className="text-[10px] uppercase font-semibold tracking-widest text-amber-400 block mb-0.5">
                    Privacy Preferences
                  </span>
                  <h2 className="font-playfair text-xl sm:text-2xl font-medium text-white">
                    Manage Cookie Options
                  </h2>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-6 right-6 text-zinc-400 hover:text-white p-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors"
                  aria-label="Close preferences"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-zinc-400 text-xs font-light mb-4 leading-relaxed">
                Customize your privacy settings below. Non-essential cookies are disabled until you enable them.
              </p>
            </div>

            {/* Toggles Scrollable Area */}
            <div className="flex-1 overflow-y-auto pr-1 space-y-3 my-2">
              {/* Essential */}
              <div className="p-3.5 rounded-xl bg-zinc-900/70 border border-white/5 flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 font-medium text-xs text-white mb-1">
                    Strictly Necessary Cookies
                    <span className="text-[9px] uppercase font-mono px-1.5 py-0.5 rounded bg-zinc-800 text-amber-400/90 border border-amber-500/20">Required</span>
                  </div>
                  <p className="text-zinc-400 text-[11px] font-light leading-snug">
                    Core security, session tokens, and navigation. Cannot be turned off.
                  </p>
                </div>
                <div className="w-8 h-5 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-amber-400" />
                </div>
              </div>

              {/* Analytics */}
              <div className="p-3.5 rounded-xl bg-zinc-900/70 border border-white/5 flex items-start justify-between gap-3">
                <div>
                  <div className="font-medium text-xs text-white mb-1">Analytics &amp; Performance Cookies</div>
                  <p className="text-zinc-400 text-[11px] font-light leading-snug">
                    Anonymous usage metrics to help us optimize deck service experience.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                  className={`w-10 h-5.5 rounded-full transition-colors duration-200 relative shrink-0 p-0.5 border ${
                    preferences.analytics ? "bg-amber-500 border-amber-400" : "bg-zinc-800 border-zinc-700"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
                      preferences.analytics ? "translate-x-4" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Marketing */}
              <div className="p-3.5 rounded-xl bg-zinc-900/70 border border-white/5 flex items-start justify-between gap-3">
                <div>
                  <div className="font-medium text-xs text-white mb-1">Marketing &amp; Attribution Cookies</div>
                  <p className="text-zinc-400 text-[11px] font-light leading-snug">
                    Measures marketing attribution for founder outreach campaigns.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                  className={`w-10 h-5.5 rounded-full transition-colors duration-200 relative shrink-0 p-0.5 border ${
                    preferences.marketing ? "bg-amber-500 border-amber-400" : "bg-zinc-800 border-zinc-700"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
                      preferences.marketing ? "translate-x-4" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-2 border-t border-white/10 pt-4 flex-shrink-0">
              <button
                onClick={handleRejectAll}
                className="w-full sm:w-auto px-4 py-2 rounded-full border border-white/10 text-zinc-400 text-[11px] uppercase tracking-wider font-semibold hover:text-white hover:bg-zinc-900 transition-colors text-center"
              >
                Reject Non-Essential
              </button>
              <button
                onClick={handleSavePreferences}
                className="w-full sm:w-auto px-4 py-2 rounded-full bg-zinc-800 border border-white/20 text-white text-[11px] uppercase tracking-wider font-semibold hover:bg-zinc-700 transition-colors text-center"
              >
                Save Selected
              </button>
              <button
                onClick={handleAcceptAll}
                className="w-full sm:w-auto px-5 py-2 rounded-full bg-white text-black text-[11px] uppercase tracking-wider font-semibold hover:bg-zinc-200 transition-colors text-center shadow-lg"
              >
                Accept All
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
