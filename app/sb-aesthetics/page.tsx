"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  RotateCcw,
  ExternalLink,
  Shield,
  SlidersHorizontal,
} from "lucide-react";

// ============================================================================
// VERIFIED CLINIC CONTEXT & DATA (SPECULATIVE CONCEPT ONLY)
// ============================================================================

const VERIFIED_BOOKSY_URL = "https://sbaestheticsuk.booksy.com/";

type ScreenId = "entry" | "goal" | "experience" | "pathway" | "handoff";

interface GoalOption {
  id: string;
  label: string;
  tagline: string;
  suggestedConsultation: string;
  consultationDescription: string;
  keyTopics: string[];
}

const GOAL_OPTIONS: GoalOption[] = [
  {
    id: "facial-definition",
    label: "Facial definition or contour",
    tagline: "Exploring balance, jawline, cheek structure or profile harmony",
    suggestedConsultation: "Facial Aesthetics Consultation",
    consultationDescription:
      "A dedicated in-person discussion focusing on your facial structure and natural proportions to explore suitable aesthetic options for your goals.",
    keyTopics: [
      "Facial balance and proportion discussion",
      "Non-surgical contouring considerations",
      "In-person suitability and anatomical review",
    ],
  },
  {
    id: "skin-quality",
    label: "Skin quality and texture",
    tagline: "Addressing hydration, firmness, glow or texture refinement",
    suggestedConsultation: "Skin and Aesthetics Consultation",
    consultationDescription:
      "An in-person consultation to evaluate skin health, texture and hydration levels before exploring options such as skin boosters or revitalisation.",
    keyTopics: [
      "Skin texture and barrier assessment",
      "Targeted hydration and rejuvenation pathways",
      "Practical care and maintenance overview",
    ],
  },
  {
    id: "body-confidence",
    label: "Body confidence",
    tagline: "Exploring body contouring, silhouette enhancement or Liquid BBL",
    suggestedConsultation: "Body Goals Consultation",
    consultationDescription:
      "A focused consultation dedicated to body contouring goals, discussing silhouette, volume balance, and Liquid BBL suitability in person.",
    keyTopics: [
      "Silhouette and anatomical contour discussion",
      "Volume balance and realistic expectation setting",
      "Pre-treatment suitability and safety assessment",
    ],
  },
  {
    id: "anti-wrinkle",
    label: "Anti-wrinkle concerns",
    tagline: "Expression lines and smoothing goals",
    suggestedConsultation: "Facial Aesthetics Consultation",
    consultationDescription:
      "A consultation to evaluate facial movement, expression dynamics and skin elasticity to discuss subtle smoothing options tailored to your goals.",
    keyTopics: [
      "Dynamic expression and movement discussion",
      "Subtle, natural-looking smoothing options",
      "Suitability and facial balance overview",
    ],
  },
  {
    id: "not-sure",
    label: "I’m not sure yet",
    tagline: "Exploring possibilities and seeking honest practitioner guidance",
    suggestedConsultation: "General Discovery Consultation",
    consultationDescription:
      "An open, unpressured initial conversation to explore your aesthetic goals, answer questions and clarify potential pathways without obligation.",
    keyTopics: [
      "Open conversation about your aesthetic goals",
      "Explanation of facial vs body consultation routes",
      "Zero-pressure suitability and safety discussion",
    ],
  },
];

interface ExperienceOption {
  id: string;
  label: string;
  description: string;
}

const EXPERIENCE_OPTIONS: ExperienceOption[] = [
  {
    id: "first-time",
    label: "I’m exploring treatment for the first time",
    description: "Looking for clear guidance, step-by-step explanations, and an honest discussion on what to expect.",
  },
  {
    id: "had-before",
    label: "I have had treatment before",
    description: "Familiar with aesthetic procedures and looking to review ongoing goals or maintain results.",
  },
  {
    id: "comparing",
    label: "I’m comparing different options",
    description: "Researching different approaches, practitioners, or treatments before deciding on the right step.",
  },
];

export default function SbAestheticsPrototypePage() {
  // Navigation & Flow State
  const [currentScreen, setCurrentScreen] = useState<ScreenId>("entry");
  const [selectedGoalId, setSelectedGoalId] = useState<string | null>(null);
  const [selectedExperienceId, setSelectedExperienceId] = useState<string | null>(null);

  // Discreet Developer Jump Bar Toggle (Kept completely outside the phone frame)
  const [showDevControls, setShowDevControls] = useState<boolean>(false);

  // Derived current goal
  const currentGoal =
    GOAL_OPTIONS.find((g) => g.id === selectedGoalId) || GOAL_OPTIONS[0];

  const handleStartFlow = () => {
    setCurrentScreen("goal");
  };

  const handleRestart = () => {
    setCurrentScreen("entry");
    setSelectedGoalId(null);
    setSelectedExperienceId(null);
  };

  // Progress logic:
  // Goal screen = Step 1 of 3 (33%)
  // Experience screen = Step 2 of 3 (66%)
  // Pathway screen = Step 3 of 3 (100%)
  const isQuestionOrPathwayStage =
    currentScreen === "goal" ||
    currentScreen === "experience" ||
    currentScreen === "pathway";

  const getProgressDetails = () => {
    switch (currentScreen) {
      case "goal":
        return { stepLabel: "Step 1 of 3", percentage: "33%", width: "33.3%" };
      case "experience":
        return { stepLabel: "Step 2 of 3", percentage: "66%", width: "66.6%" };
      case "pathway":
        return { stepLabel: "Step 3 of 3", percentage: "100%", width: "100%" };
      default:
        return null;
    }
  };

  const progress = getProgressDetails();

  return (
    <div className="min-h-screen bg-[#121214] text-[#FAF8F5] font-sans antialiased selection:bg-[#C5A880]/20 selection:text-[#E8D7C0] flex flex-col justify-between items-center overflow-x-clip">
      {/* =========================================================================
          MAIN MOBILE PHONE FRAME (FOCUSED, ZERO OUTER DESKTOP TOOLBAR CHROME)
      ========================================================================== */}
      <main className="w-full flex-1 flex flex-col items-center justify-center p-0 sm:p-6 md:p-8">
        <div className="w-full sm:max-w-[390px] min-h-[100dvh] sm:min-h-[720px] bg-[#18181B] sm:rounded-[40px] sm:border sm:border-[#2A2A30] sm:shadow-[0_25px_80px_rgba(0,0,0,0.9)] flex flex-col justify-between overflow-hidden relative">
          {/* Internal Mobile Header (Clean, Compact Clinic Header) */}
          <header className="bg-[#18181B] border-b border-[#27272A] px-5 py-3.5 flex items-center justify-between select-none shrink-0">
            <div className="w-16 flex items-center">
              {currentScreen !== "entry" && (
                <button
                  onClick={() => {
                    if (currentScreen === "goal") setCurrentScreen("entry");
                    else if (currentScreen === "experience") setCurrentScreen("goal");
                    else if (currentScreen === "pathway") setCurrentScreen("experience");
                    else if (currentScreen === "handoff") setCurrentScreen("pathway");
                  }}
                  className="p-1 -ml-1 text-[#A1A1AA] hover:text-[#FAF8F5] transition-colors rounded-lg flex items-center gap-1 text-xs font-mono"
                  aria-label="Previous step"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span className="text-[11px] uppercase tracking-wider">Back</span>
                </button>
              )}
            </div>

            {/* Compact Clinic Wordmark */}
            <div className="text-center flex-1">
              <span className="font-playfair font-medium text-xs tracking-[0.22em] text-[#FAF8F5] uppercase block">
                SB AESTHETICS UK
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#C5A880] uppercase block">
                Consultation Pathway
              </span>
            </div>

            {/* Reset Action */}
            <div className="w-16 flex items-center justify-end">
              {currentScreen !== "entry" && (
                <button
                  onClick={handleRestart}
                  className="text-[10px] font-mono text-[#71717A] hover:text-[#C5A880] transition-colors"
                  title="Restart flow"
                >
                  Restart
                </button>
              )}
            </div>
          </header>

          {/* Progress Indicator Bar (Visible on Steps 1, 2, 3) */}
          {isQuestionOrPathwayStage && progress && (
            <div className="w-full bg-[#1F1F23] px-5 py-2.5 border-b border-[#27272A]/70 shrink-0">
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-[#A1A1AA] mb-1.5">
                <span className="font-medium text-[#FAF8F5]">{progress.stepLabel}</span>
                <span className="text-[#C5A880]">{progress.percentage}</span>
              </div>
              <div className="w-full h-1 bg-[#2E2E35] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#C5A880] to-[#DFCAAF] transition-all duration-300 ease-out"
                  style={{ width: progress.width }}
                />
              </div>
            </div>
          )}

          {/* Active Screen Body (Consistent 20-24px padding, no vertical sprawl) */}
          <div className="flex-1 px-5 sm:px-6 py-5 flex flex-col justify-between overflow-y-auto">
            <AnimatePresence mode="wait">
              {/* ===================================================================
                  SCREEN 1: ENTRY SCREEN (Streamlined, zero unnecessary copy)
              ==================================================================== */}
              {currentScreen === "entry" && (
                <motion.div
                  key="screen-entry"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.16 }}
                  className="flex-1 flex flex-col justify-between"
                >
                  <div className="pt-2">
                    {/* Eyebrow */}
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C5A880] block mb-2.5 font-medium">
                      CONSULTATION PATHWAY
                    </span>

                    {/* Heading */}
                    <h1 className="font-playfair text-[26px] sm:text-[28px] font-medium tracking-tight text-[#FAF8F5] leading-[1.2] mb-3">
                      Not sure which consultation is right for you?
                    </h1>

                    {/* Supporting Text */}
                    <p className="text-[#A1A1AA] text-sm leading-relaxed font-light mb-8">
                      Answer three quick questions and explore a possible next step before booking.
                    </p>
                  </div>

                  {/* Actions & Discreet Reassurance */}
                  <div className="pt-4 space-y-3">
                    {/* Primary CTA */}
                    <button
                      onClick={handleStartFlow}
                      className="w-full py-3.5 px-6 rounded-full bg-[#C5A880] text-[#141416] font-semibold text-xs uppercase tracking-[0.16em] hover:bg-[#D5BC98] active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#C5A880]/15"
                    >
                      <span>Find my next step</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    {/* Secondary CTA: Direct Booksy Route */}
                    <a
                      href={VERIFIED_BOOKSY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-6 rounded-full bg-transparent hover:bg-[#222226] border border-[#2E2E33] text-[#D4D4D8] text-xs font-mono uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                    >
                      <span>I already know what I want</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#C5A880]" />
                    </a>

                    {/* Small Reassurance Note */}
                    <p className="text-[11px] text-[#8E8E93] text-center leading-relaxed pt-2 font-light">
                      Guidance only. Suitability is confirmed during a consultation.
                    </p>

                    {/* Discreet Speculative Label */}
                    <p className="text-[9px] text-[#52525B] text-center leading-relaxed pt-1 font-mono">
                      Concept by Veltris — speculative UI exploration.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* ===================================================================
                  SCREEN 2: GOAL SELECTION (STEP 1 OF 3)
              ==================================================================== */}
              {currentScreen === "goal" && (
                <motion.div
                  key="screen-goal"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.16 }}
                  className="flex-1 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#C5A880] uppercase block mb-1">
                      Step 1 of 3
                    </span>
                    <h2 className="font-playfair text-[22px] sm:text-2xl font-medium tracking-tight text-[#FAF8F5] mb-1.5 leading-snug">
                      What would you most like help with?
                    </h2>
                    <p className="text-xs text-[#A1A1AA] mb-4 font-light">
                      Select the focus that best describes your aesthetic goal.
                    </p>

                    {/* Options list */}
                    <div className="space-y-2 mb-4" role="radiogroup" aria-label="Goal options">
                      {GOAL_OPTIONS.map((option) => {
                        const isSelected = selectedGoalId === option.id;
                        return (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => setSelectedGoalId(option.id)}
                            className={`w-full text-left p-3 rounded-2xl border transition-all flex items-start justify-between gap-3 ${
                              isSelected
                                ? "bg-[#242220] border-[#C5A880] text-[#FAF8F5] shadow-md shadow-[#C5A880]/10"
                                : "bg-[#1D1D21] border-[#27272D] text-[#D4D4D8] hover:bg-[#232328] hover:border-[#35353C]"
                            }`}
                            role="radio"
                            aria-checked={isSelected}
                          >
                            <div className="flex-1 min-w-0">
                              <span
                                className={`text-xs sm:text-sm font-medium block mb-0.5 truncate ${
                                  isSelected ? "text-[#FAF8F5]" : "text-[#D4D4D8]"
                                }`}
                              >
                                {option.label}
                              </span>
                              <span className="text-[11px] text-[#8E8E93] leading-relaxed block font-light">
                                {option.tagline}
                              </span>
                            </div>

                            {/* Radio check pill */}
                            <div
                              className={`w-4 h-4 rounded-full flex items-center justify-center border transition-all mt-0.5 flex-shrink-0 ${
                                isSelected
                                  ? "bg-[#C5A880] border-[#C5A880] text-[#141416]"
                                  : "border-[#3A3A42] bg-transparent"
                              }`}
                            >
                              {isSelected && <Check className="w-2.5 h-2.5 stroke-[2.5]" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Navigation Footer */}
                  <div className="pt-3 border-t border-[#27272A] flex items-center justify-between gap-2.5">
                    <button
                      onClick={() => setCurrentScreen("entry")}
                      className="py-3 px-4 rounded-full border border-[#2E2E33] hover:bg-[#222226] text-[#A1A1AA] text-xs font-mono uppercase tracking-wider transition-colors"
                    >
                      Back
                    </button>

                    <button
                      disabled={!selectedGoalId}
                      onClick={() => setCurrentScreen("experience")}
                      className={`flex-1 py-3 px-5 rounded-full text-xs uppercase tracking-[0.16em] transition-all flex items-center justify-center gap-2 ${
                        selectedGoalId
                          ? "bg-[#C5A880] text-[#141416] font-semibold hover:bg-[#D5BC98] shadow-lg shadow-[#C5A880]/15 active:scale-[0.99]"
                          : "bg-[#27272D] text-[#71717A] cursor-not-allowed border border-[#323238]"
                      }`}
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ===================================================================
                  SCREEN 3: EXPERIENCE AND GUIDANCE (STEP 2 OF 3)
              ==================================================================== */}
              {currentScreen === "experience" && (
                <motion.div
                  key="screen-experience"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.16 }}
                  className="flex-1 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#C5A880] uppercase block mb-1">
                      Step 2 of 3
                    </span>
                    <h2 className="font-playfair text-[22px] sm:text-2xl font-medium tracking-tight text-[#FAF8F5] mb-1.5 leading-snug">
                      How familiar are you with aesthetic treatments?
                    </h2>
                    <p className="text-xs text-[#A1A1AA] mb-4 font-light">
                      This helps frame what background details to discuss during your consultation.
                    </p>

                    {/* Options list */}
                    <div className="space-y-2.5 mb-5" role="radiogroup" aria-label="Experience options">
                      {EXPERIENCE_OPTIONS.map((option) => {
                        const isSelected = selectedExperienceId === option.id;
                        return (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => setSelectedExperienceId(option.id)}
                            className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-start justify-between gap-3 ${
                              isSelected
                                ? "bg-[#242220] border-[#C5A880] text-[#FAF8F5] shadow-md shadow-[#C5A880]/10"
                                : "bg-[#1D1D21] border-[#27272D] text-[#D4D4D8] hover:bg-[#232328] hover:border-[#35353C]"
                            }`}
                            role="radio"
                            aria-checked={isSelected}
                          >
                            <div className="flex-1">
                              <span
                                className={`text-xs sm:text-sm font-medium block mb-1 ${
                                  isSelected ? "text-[#FAF8F5]" : "text-[#D4D4D8]"
                                }`}
                              >
                                {option.label}
                              </span>
                              <span className="text-[11px] text-[#8E8E93] leading-relaxed block font-light">
                                {option.description}
                              </span>
                            </div>

                            <div
                              className={`w-4 h-4 rounded-full flex items-center justify-center border transition-all mt-0.5 flex-shrink-0 ${
                                isSelected
                                  ? "bg-[#C5A880] border-[#C5A880] text-[#141416]"
                                  : "border-[#3A3A42] bg-transparent"
                              }`}
                            >
                              {isSelected && <Check className="w-2.5 h-2.5 stroke-[2.5]" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Navigation Footer */}
                  <div className="pt-3 border-t border-[#27272A] flex items-center justify-between gap-2.5">
                    <button
                      onClick={() => setCurrentScreen("goal")}
                      className="py-3 px-4 rounded-full border border-[#2E2E33] hover:bg-[#222226] text-[#A1A1AA] text-xs font-mono uppercase tracking-wider transition-colors"
                    >
                      Back
                    </button>

                    <button
                      disabled={!selectedExperienceId}
                      onClick={() => setCurrentScreen("pathway")}
                      className={`flex-1 py-3 px-5 rounded-full text-xs uppercase tracking-[0.16em] transition-all flex items-center justify-center gap-2 ${
                        selectedExperienceId
                          ? "bg-[#C5A880] text-[#141416] font-semibold hover:bg-[#D5BC98] shadow-lg shadow-[#C5A880]/15 active:scale-[0.99]"
                          : "bg-[#27272D] text-[#71717A] cursor-not-allowed border border-[#323238]"
                      }`}
                    >
                      <span>See suggested pathway</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ===================================================================
                  SCREEN 4: SUGGESTED PATHWAY (STEP 3 OF 3)
              ==================================================================== */}
              {currentScreen === "pathway" && (
                <motion.div
                  key="screen-pathway"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.16 }}
                  className="flex-1 flex flex-col justify-between"
                >
                  <div>
                    {/* Header Label */}
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono tracking-widest text-[#C5A880] uppercase">
                        Step 3 of 3 • Suggested Pathway
                      </span>
                    </div>

                    <h2 className="font-playfair text-[20px] sm:text-[22px] font-medium tracking-tight text-[#FAF8F5] mb-1.5 leading-snug">
                      A consultation looks like the most useful next step.
                    </h2>

                    <p className="text-xs text-[#A1A1AA] font-light leading-relaxed mb-3.5">
                      Based on the goals you selected, a qualified practitioner can discuss your options and assess suitability.
                    </p>

                    {/* Suggested Consultation Card */}
                    <div className="p-4 rounded-2xl bg-[#1D1D21] border border-[#C5A880]/30 shadow-lg shadow-black/40 mb-3">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A880] bg-[#C5A880]/10 border border-[#C5A880]/20 px-2 py-0.5 rounded-full">
                          Suggested Consultation
                        </span>
                        <span className="text-[10px] font-mono text-[#8E8E93]">
                          In-person
                        </span>
                      </div>

                      <h3 className="font-playfair text-lg font-medium text-[#FAF8F5] mb-1.5">
                        {currentGoal.suggestedConsultation}
                      </h3>

                      <p className="text-xs text-[#D4D4D8] font-light leading-relaxed mb-3">
                        {currentGoal.consultationDescription}
                      </p>

                      <div className="pt-2.5 border-t border-[#2A2A30] space-y-1.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#8E8E93] block">
                          What is explored during this consultation:
                        </span>
                        {currentGoal.keyTopics.map((topic, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#A1A1AA]">
                            <Check className="w-3.5 h-3.5 text-[#C5A880] flex-shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Clear Suitability Notice */}
                    <div className="p-3 rounded-xl bg-[#23211F] border border-[#524434]/40 flex items-start gap-2.5 mb-1.5">
                      <Shield className="w-4 h-4 text-[#C5A880] flex-shrink-0 mt-0.5" />
                      <p className="text-[11px] text-[#DFD0BF] leading-relaxed font-light">
                        <strong className="font-medium text-[#FAF8F5]">
                          This pathway is for general guidance only.
                        </strong>{" "}
                        Treatment suitability is confirmed during a consultation with a qualified practitioner.
                      </p>
                    </div>
                  </div>

                  {/* Navigation & Booking Action */}
                  <div className="pt-3 border-t border-[#27272A] space-y-2">
                    <button
                      onClick={() => setCurrentScreen("handoff")}
                      className="w-full py-3.5 px-6 rounded-full bg-[#C5A880] text-[#141416] font-semibold text-xs uppercase tracking-[0.16em] hover:bg-[#D5BC98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#C5A880]/15 active:scale-[0.99]"
                    >
                      <span>Book a consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <div className="flex items-center justify-center pt-0.5">
                      <button
                        onClick={() => setCurrentScreen("goal")}
                        className="text-[11px] font-mono text-[#71717A] hover:text-[#C5A880] transition-colors py-1 px-2"
                      >
                        ← Change my answers
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ===================================================================
                  SCREEN 5: BOOKING HANDOFF SCREEN
              ==================================================================== */}
              {currentScreen === "handoff" && (
                <motion.div
                  key="screen-handoff"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.16 }}
                  className="flex-1 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C5A880] block mb-2 font-medium">
                      BOOKING HANDOFF
                    </span>

                    <h1 className="font-playfair text-[24px] sm:text-[26px] font-medium tracking-tight text-[#FAF8F5] leading-snug mb-2">
                      You’re ready to explore the next step.
                    </h1>

                    <p className="text-[#A1A1AA] text-sm leading-relaxed font-light mb-5">
                      You’ll be taken to SB Aesthetics UK’s existing booking system to choose a suitable consultation.
                    </p>

                    {/* Summary Card */}
                    <div className="p-4 rounded-2xl bg-[#1D1D21] border border-[#27272D] mb-4 space-y-2.5">
                      <div className="flex items-center justify-between text-xs pb-2 border-b border-[#2A2A30]">
                        <span className="text-[#71717A] font-mono uppercase text-[10px]">
                          Target Consultation
                        </span>
                        <span className="text-[#FAF8F5] font-medium">
                          {selectedGoalId
                            ? currentGoal.suggestedConsultation
                            : "Aesthetic Consultation"}
                        </span>
                      </div>

                      {selectedGoalId && (
                        <div className="flex items-center justify-between text-xs pb-2 border-b border-[#2A2A30]">
                          <span className="text-[#71717A] font-mono uppercase text-[10px]">
                            Selected Focus
                          </span>
                          <span className="text-[#A1A1AA]">{currentGoal.label}</span>
                        </div>
                      )}

                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#71717A] font-mono uppercase text-[10px]">
                          Booking Platform
                        </span>
                        <span className="text-[#C5A880] font-mono text-[11px] font-medium">
                          Booksy (Verified Route)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions Area */}
                  <div className="pt-3 border-t border-[#27272A] space-y-2.5">
                    {/* Primary Button: Direct Booksy Route */}
                    <a
                      href={VERIFIED_BOOKSY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-6 rounded-full bg-[#C5A880] text-[#141416] font-semibold text-xs uppercase tracking-[0.16em] hover:bg-[#D5BC98] active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#C5A880]/15"
                    >
                      <span>Continue to Booksy</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    {/* Secondary Action: Start over */}
                    <button
                      onClick={handleRestart}
                      className="w-full py-2.5 px-6 rounded-full bg-transparent hover:bg-[#222226] border border-[#2E2E33] text-[#A1A1AA] text-xs font-mono uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Start over</span>
                    </button>

                    <p className="text-[10px] text-[#71717A] text-center leading-relaxed font-mono pt-1">
                      This pathway is for general guidance only. Treatment suitability is confirmed during a consultation with a qualified practitioner.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* =========================================================================
          DISCREET EXTERNAL SPECULATIVE NOTICE (OUTSIDE PHONE FRAME)
      ========================================================================== */}
      <footer className="w-full py-4 px-6 text-center text-xs shrink-0 select-none">
        <p className="text-[11px] font-mono text-[#71717A] leading-relaxed max-w-xl mx-auto">
          This visual concept was created independently by Veltris. It has not been commissioned, approved or endorsed by SB Aesthetics UK.
        </p>
      </footer>

      {/* =========================================================================
          DEVELOPER ONLY SHORTCUT PILL (COMPLETELY UNOBTRUSIVE FLOATING TRIGGER)
      ========================================================================== */}
      <div className="fixed bottom-4 right-4 z-40 hidden sm:block">
        {showDevControls ? (
          <div className="bg-[#1D1D21] border border-[#2E2E35] rounded-2xl p-2 shadow-2xl flex items-center gap-1 text-[10px] font-mono">
            <span className="px-2 text-[#71717A]">Jump:</span>
            <button
              onClick={() => setCurrentScreen("entry")}
              className={`px-2 py-1 rounded ${currentScreen === "entry" ? "bg-[#C5A880] text-[#141416]" : "text-[#A1A1AA] hover:text-white"}`}
            >
              Entry
            </button>
            <button
              onClick={() => setCurrentScreen("goal")}
              className={`px-2 py-1 rounded ${currentScreen === "goal" ? "bg-[#C5A880] text-[#141416]" : "text-[#A1A1AA] hover:text-white"}`}
            >
              1. Goal
            </button>
            <button
              onClick={() => setCurrentScreen("experience")}
              className={`px-2 py-1 rounded ${currentScreen === "experience" ? "bg-[#C5A880] text-[#141416]" : "text-[#A1A1AA] hover:text-white"}`}
            >
              2. Exp
            </button>
            <button
              onClick={() => setCurrentScreen("pathway")}
              className={`px-2 py-1 rounded ${currentScreen === "pathway" ? "bg-[#C5A880] text-[#141416]" : "text-[#A1A1AA] hover:text-white"}`}
            >
              3. Path
            </button>
            <button
              onClick={() => setCurrentScreen("handoff")}
              className={`px-2 py-1 rounded ${currentScreen === "handoff" ? "bg-[#C5A880] text-[#141416]" : "text-[#A1A1AA] hover:text-white"}`}
            >
              Handoff
            </button>
            <button
              onClick={() => setShowDevControls(false)}
              className="ml-2 text-[#71717A] hover:text-[#FAF8F5] px-1"
              title="Close controls"
            >
              ×
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowDevControls(true)}
            className="px-2.5 py-1.5 rounded-full bg-[#1F1F23]/80 hover:bg-[#2A2A30] border border-[#2E2E35] text-[10px] font-mono text-[#71717A] hover:text-[#C5A880] transition-colors flex items-center gap-1 shadow-lg backdrop-blur-sm"
            title="Open developer quick-jump controls"
          >
            <SlidersHorizontal className="w-3 h-3" />
            <span>Dev Jump</span>
          </button>
        )}
      </div>
    </div>
  );
}
