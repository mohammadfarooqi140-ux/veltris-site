# Privacy & PECR Compliance Implementation Plan — Veltris

## Overview
This document outlines the architecture for UK GDPR, Data Protection Act 2018, PECR, and international privacy framework compliance across `www.veltris.uk`.

## Implementation Breakdown

### 1. Cookie Consent Banner (`components/ui/CookieConsent.tsx`)
- **First-Visit Display**: Non-intrusive bottom banner with luxury dark aesthetic.
- **Buttons**:
  - `Accept All` — Enables essential, analytics, and marketing cookies.
  - `Reject All` — Disables non-essential cookies.
  - `Manage Preferences` — Opens granular modal choices (Essential, Analytics, Marketing).
- **Default State**: Strict opt-in (PECR compliant). No pre-checked boxes for non-essential cookies.
- **Persistence**: Remembers preferences in `localStorage` under `veltris_cookie_consent_v1`.
- **Withdrawal & Re-opening**: Floating discrete shield icon in bottom left corner allows users to change or revoke consent at any time.

### 2. Script Blocking Engine (`lib/cookieConsent.ts`)
- Prevents loading of third-party tracking scripts (Google Analytics, Meta Pixel, LinkedIn Insight Tag) until consent is granted.

### 3. Legal Documentation Pages
- **`/privacy-policy`**: Full UK GDPR disclosures including data controller identity, processing purposes, lawful basis, international data transfers (SCCs for processing outside UK/EEA), retention periods, and data subject rights.
- **`/cookie-policy`**: Comprehensive breakdown of essential vs. non-essential cookies and interactive preference manager.
