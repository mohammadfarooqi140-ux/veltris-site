"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  Star,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Info,
  ArrowRight,
  ChevronDown
} from "lucide-react";

// ============================================================================
// DATA STRUCTURES & VERIFIED CLINICAL CONTENT (SAFETY POLISHED)
// ============================================================================

interface TreatmentItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  keyPoints: string[];
}

const PRIORITY_TREATMENTS: TreatmentItem[] = [
  {
    id: "implants",
    title: "Dental Implants",
    shortDesc: "Natural-looking, long-lasting replacement teeth planned with digital dentistry techniques.",
    fullDesc:
      "Dental implants provide a stable, permanent foundation for replacement teeth that look, feel, and function like natural dentition. Planned digitally by Visiting Implantologist Dr Ismael Khan using minimally invasive techniques to preserve bone and soft tissue.",
    keyPoints: [
      "Single tooth, multiple teeth, or full arch restorations",
      "Digital surgical planning and careful case assessment",
      "Minimally invasive placement techniques",
      "Long-term oral health and bone stability focus"
    ]
  },
  {
    id: "bonding",
    title: "Cosmetic Bonding",
    shortDesc: "Minimally invasive composite artistry to repair chips, close gaps, and refine contours.",
    fullDesc:
      "Composite bonding is an ultra-conservative cosmetic treatment using high-grade composite resin directly sculpted onto your teeth. In most cases, zero natural tooth structure is removed, making it a gentle, immediate smile enhancement.",
    keyPoints: [
      "Often completed in a single comfortable visit",
      "No invasive enamel reduction in most cases",
      "Ideal for minor chips, worn edges, and small gaps",
      "Colour-matched to your natural tooth shade"
    ]
  },
  {
    id: "veneers",
    title: "Porcelain Veneers",
    shortDesc: "Custom-crafted ceramic shells for refined symmetry, radiant shade, and durable elegance.",
    fullDesc:
      "Custom-crafted porcelain veneers are ultra-thin ceramic restorations bonded to the front surface of the teeth. They correct deep discolouration, uneven alignment, and worn enamel while maintaining natural translucency and lifelike light reflection.",
    keyPoints: [
      "Individually designed to match facial aesthetics",
      "Highly stain-resistant ceramic materials",
      "Corrects alignment, spacing, and persistent staining",
      "Carefully planned mock-ups prior to final placement"
    ]
  },
  {
    id: "whitening",
    title: "Teeth Whitening",
    shortDesc: "Dentist-supervised brightening formulated to lift staining safely and effectively.",
    fullDesc:
      "Professional teeth whitening gently lifts deep and superficial stains caused by tea, coffee, and natural ageing. Administered under dental supervision to ensure safety, minimal sensitivity, and controlled, natural brightness.",
    keyPoints: [
      "Dentist-supervised formulations for patient safety",
      "Customised trays tailored to your dental anatomy",
      "Formulated to protect enamel and minimise sensitivity",
      "Gradual, controlled shade improvement"
    ]
  },
  {
    id: "invisalign",
    title: "Invisalign",
    shortDesc: "Discreet, removable clear aligners to straighten teeth comfortably without metal brackets.",
    fullDesc:
      "Invisalign straightens your teeth using a series of virtually invisible, custom-moulded clear aligners. Removable for eating and cleaning, clear aligners allow you to maintain your normal routine while gently guiding teeth into alignment.",
    keyPoints: [
      "Clear, discreet appearance with no metal wires",
      "Removable for effortless eating and oral hygiene",
      "Digital treatment preview before starting",
      "Comfortable custom fit tailored to your lifestyle"
    ]
  },
  {
    id: "makeovers",
    title: "Smile Makeovers",
    shortDesc: "A personalised combination of cosmetic and restorative treatments tailored to your goals.",
    fullDesc:
      "A comprehensive smile makeover combines multiple disciplines—such as bonding, veneers, whitening, and alignment—into a harmonious treatment plan. Designed collaboratively to achieve your aesthetic goals while respecting biological health.",
    keyPoints: [
      "Comprehensive aesthetic assessment",
      "Bespoke multi-disciplinary treatment sequence",
      "Balance between facial harmony and chewing function",
      "Transparent consultation with step-by-step guidance"
    ]
  }
];

// Grouped secondary services (Cosmetic, Restorative, Preventative, Specialist Care)
interface ServiceCategory {
  name: string;
  description: string;
  services: { title: string; desc: string }[];
}

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    name: "Cosmetic",
    description: "Aesthetic procedures to refine smile harmony, shade, and contour.",
    services: [
      {
        title: "Crowns and Veneers",
        desc: "Custom-crafted ceramic restorations that reinforce weakened teeth and refine smile aesthetics."
      },
      {
        title: "Dental Hygienist & Airflow Stain Removal",
        desc: "Airflow polishing and hygiene care to gently lift stubborn surface stains and support gum health."
      }
    ]
  },
  {
    name: "Restorative",
    description: "Reconstructive care to repair damaged teeth, restore chewing function, and replace missing dentition.",
    services: [
      {
        title: "Root Canal Treatment",
        desc: "Endodontic therapy to eliminate internal tooth infection, relieve discomfort, and save your natural tooth."
      },
      {
        title: "Dentures",
        desc: "Modern full or partial removable dentures crafted for chewing stability and natural appearance."
      },
      {
        title: "Dental Bridges",
        desc: "Durable fixed restorations anchored to adjacent teeth to bridge spaces left by missing teeth."
      }
    ]
  },
  {
    name: "Preventative",
    description: "Routine examinations, diagnostics, and protective appliances for long-term dental wellness.",
    services: [
      {
        title: "Dental Checkups",
        desc: "Thorough clinical examinations, soft tissue screening, and low-dose digital diagnostics."
      },
      {
        title: "Appliances",
        desc: "Custom-fitted nightguards for clenching or grinding, and protective sports mouthguards."
      }
    ]
  },
  {
    name: "Specialist Care",
    description: "Targeted surgical, alignment, and comfort-focused treatments.",
    services: [
      {
        title: "Dental Sedation",
        desc: "Conscious sedation options to help patients feel comfortable and relaxed during clinical treatment."
      },
      {
        title: "Orthodontics",
        desc: "Corrective alignment solutions for adults and teens to improve bite function and tooth alignment."
      },
      {
        title: "Extractions",
        desc: "Atraumatic tooth removal performed with gentle surgical techniques and clear aftercare guidance."
      }
    ]
  }
];

// 4 Verified Before and After comparisons (guaranteed local assets, strictly neutral clinical descriptions)
const BEFORE_AFTER_CASES = [
  {
    id: 1,
    title: "Comparison 01",
    subtitle: "Upper anterior alignment & aesthetic refinement",
    beforeImg: "/images/berkshire/case1_before.jpg",
    afterImg: "/images/berkshire/case1_after.jpg",
    beforeAlt: "Before Comparison 1: Close-up of upper front teeth prior to aesthetic care",
    afterAlt: "After Comparison 1: Upper anterior alignment and aesthetic refinement"
  },
  {
    id: 2,
    title: "Comparison 02",
    subtitle: "Smile uniformity & shade improvement",
    beforeImg: "/images/berkshire/case2_before.jpg",
    afterImg: "/images/berkshire/case2_after.jpg",
    beforeAlt: "Before Comparison 2: Upper anterior teeth prior to care",
    afterAlt: "After Comparison 2: Visibly more uniform and brighter shade"
  },
  {
    id: 3,
    title: "Comparison 03",
    subtitle: "Symmetry & incisal edge contour harmony",
    beforeImg: "/images/berkshire/case3_before.jpg",
    afterImg: "/images/berkshire/case3_after.jpg",
    beforeAlt: "Before Comparison 3: Upper anterior teeth showing uneven edge wear",
    afterAlt: "After Comparison 3: Improved symmetry and smooth incisal edges"
  },
  {
    id: 4,
    title: "Comparison 04",
    subtitle: "Bright uniform shade & balanced contours",
    beforeImg: "/images/berkshire/case4_before.jpg",
    afterImg: "/images/berkshire/case4_after.jpg",
    beforeAlt: "Before Comparison 4: Upper front teeth prior to care",
    afterAlt: "After Comparison 4: Bright uniform shade and harmonious contours"
  }
];

// ============================================================================
// TOUCH-FRIENDLY BEFORE/AFTER COMPARISON SLIDER COMPONENT
// ============================================================================
function BeforeAfterSlider({
  caseItem
}: {
  caseItem: (typeof BEFORE_AFTER_CASES)[0];
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeMode, setActiveMode] = useState<"slider" | "before" | "after">("slider");
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="bg-[#FFFFFF] rounded-2xl border border-[#DDDDDD] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Interactive Visual Comparison Area */}
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-[#1D1D1D] select-none overflow-hidden cursor-ew-resize"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER Image (Background) */}
        <div className="absolute inset-0 w-full h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={caseItem.afterImg}
            alt={caseItem.afterAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 bg-[#1D1D1D]/80 backdrop-blur-sm text-[#F1E7D8] text-[9px] font-mono font-semibold px-2 py-0.5 rounded tracking-wider uppercase border border-white/10">
            Concept Placeholder Result
          </div>
          <span className="absolute bottom-3 right-3 bg-[#1D1D1D]/85 backdrop-blur-sm text-[#F1E7D8] text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wider uppercase">
            After
          </span>
        </div>

        {/* BEFORE Image (Clipped Overlay) */}
        <div
          className="absolute inset-0 h-full overflow-hidden transition-[clip-path] duration-75 ease-out"
          style={{
            clipPath:
              activeMode === "before"
                ? "inset(0 0 0 0)"
                : activeMode === "after"
                ? "inset(0 100% 0 0)"
                : `inset(0 ${100 - sliderPosition}% 0 0)`
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={caseItem.beforeImg}
            alt={caseItem.beforeAlt}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <span className="absolute bottom-3 left-3 bg-[#292929]/85 backdrop-blur-sm text-[#FFFFFF] text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wider uppercase">
            Before
          </span>
        </div>

        {/* Interactive Divider Bar */}
        {activeMode === "slider" && (
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-[#FFFFFF] shadow-[0_0_10px_rgba(0,0,0,0.6)] z-20 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#FFFFFF] border-2 border-[#292929] shadow-lg flex items-center justify-center text-[#292929] text-xs font-bold pointer-events-auto">
              ⟷
            </div>
          </div>
        )}
      </div>

      {/* Touch-Friendly Mode Controls & Caption */}
      <div className="p-4 sm:p-5 bg-[#FFFFFF]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#5E5EEE] font-semibold block">
              Concept Demonstration (Placeholder)
            </span>
            <h4 className="text-sm sm:text-base font-bold text-[#1D1D1D]">
              {caseItem.title}
            </h4>
            <p className="text-xs text-[#292929]/80 font-medium">
              {caseItem.subtitle}
            </p>
          </div>

          {/* Touch-friendly view toggle */}
          <div className="inline-flex rounded-lg p-0.5 bg-[#F1E7D8]/70 border border-[#DDDDDD] text-xs self-start sm:self-center">
            <button
              onClick={() => setActiveMode("slider")}
              className={`min-h-[36px] px-3 py-1 rounded-md text-[11px] font-medium transition-all ${
                activeMode === "slider"
                  ? "bg-[#292929] text-[#FFFFFF] shadow-sm"
                  : "text-[#292929] hover:text-[#000000]"
              }`}
            >
              Slider
            </button>
            <button
              onClick={() => setActiveMode("before")}
              className={`min-h-[36px] px-3 py-1 rounded-md text-[11px] font-medium transition-all ${
                activeMode === "before"
                  ? "bg-[#292929] text-[#FFFFFF] shadow-sm"
                  : "text-[#292929] hover:text-[#000000]"
              }`}
            >
              Before
            </button>
            <button
              onClick={() => setActiveMode("after")}
              className={`min-h-[36px] px-3 py-1 rounded-md text-[11px] font-medium transition-all ${
                activeMode === "after"
                  ? "bg-[#292929] text-[#FFFFFF] shadow-sm"
                  : "text-[#292929] hover:text-[#000000]"
              }`}
            >
              After
            </button>
          </div>
        </div>

        {activeMode === "slider" && (
          <p className="text-[11px] text-[#292929]/55 mt-2 italic">
            Drag or swipe horizontally across the teeth to compare results
          </p>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// MAIN BERKSHIRE DENTAL SUITE HOMEPAGE CONCEPT (SINGLE-PAGE MOBILE-FIRST)
// ============================================================================
export default function BerkshireDentalSuitePage() {
  const [activeModalTreatment, setActiveModalTreatment] = useState<TreatmentItem | null>(null);
  const [activeCategoryTab, setActiveCategoryTab] = useState<string>("Cosmetic");

  // Booking Prototype Form State
  const [bookingData, setBookingData] = useState({
    fullName: "",
    email: "",
    phone: "",
    treatment: "Dental Implants"
  });
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [bookingError, setBookingError] = useState("");

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingData.fullName.trim() || !bookingData.email.trim() || !bookingData.phone.trim()) {
      setBookingError("Please provide your full name, email address, and telephone number.");
      return;
    }
    setBookingError("");
    setBookingSubmitted(true);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#292929] font-['Montserrat',sans-serif] antialiased selection:bg-[#F1E7D8] selection:text-[#1D1D1D]">
      {/* Montserrat Google Font Import */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
      />

      {/* =====================================================================
          1. BERKSHIRE DENTAL SUITE HEADER (CLEAN MOBILE PRECISION)
          - Compact BDS branding
          - Limited mobile strapline: "SLOUGH · PRIVATE DENTISTRY"
          - Aligned Call button (min 44px touch target)
          - Aligned Book button (min 44px touch target)
          - Zero cut-off hamburger button (removed per user instruction)
          - Clean 64px header height
      ====================================================================== */}
      <header className="sticky top-0 z-50 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#DDDDDD] transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 h-16 sm:h-20 flex items-center justify-between gap-3">
          {/* Clinic Brand Identity */}
          <Link
            href="/berkshire"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none shrink-0"
            aria-label="Berkshire Dental Suite Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#F1E7D8] border border-[#DDDDDD] flex items-center justify-center text-[#1D1D1D] font-bold text-xs sm:text-sm tracking-wider shadow-sm group-hover:bg-[#e8dcce] transition-colors shrink-0">
              BDS
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[13px] sm:text-base md:text-lg font-bold tracking-tight text-[#1D1D1D] leading-tight truncate">
                Berkshire Dental Suite
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold tracking-wider text-[#292929]/70 uppercase truncate">
                SLOUGH · PRIVATE DENTISTRY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-[#292929] uppercase tracking-wider">
            <button
              onClick={() => scrollToSection("treatments")}
              className="hover:text-[#5E5EEE] transition-colors min-h-[44px] flex items-center"
            >
              Treatments
            </button>
            <button
              onClick={() => scrollToSection("dr-ismael")}
              className="hover:text-[#5E5EEE] transition-colors min-h-[44px] flex items-center"
            >
              Dr Ismael
            </button>
            <button
              onClick={() => scrollToSection("results")}
              className="hover:text-[#5E5EEE] transition-colors min-h-[44px] flex items-center"
            >
              Results
            </button>
            <button
              onClick={() => scrollToSection("clinic")}
              className="hover:text-[#5E5EEE] transition-colors min-h-[44px] flex items-center"
            >
              The Clinic
            </button>
            <button
              onClick={() => scrollToSection("hours-location")}
              className="hover:text-[#5E5EEE] transition-colors min-h-[44px] flex items-center"
            >
              Hours &amp; Location
            </button>
          </nav>

          {/* Header Actions: Call and Book CTA (Cleanly aligned, no cut-off hamburger) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Quick Click-to-Call Button */}
            <a
              href="tel:01753933006"
              className="inline-flex items-center justify-center gap-1.5 min-h-[44px] min-w-[44px] px-3 sm:px-3.5 rounded-full bg-[#F1E7D8] text-[#1D1D1D] text-xs font-semibold hover:bg-[#e8dcce] transition-colors border border-[#DDDDDD]"
              title="Call Berkshire Dental Suite on 01753 933006"
              aria-label="Call 01753 933006"
            >
              <Phone className="w-4 h-4 text-[#1D1D1D]" />
              <span className="hidden sm:inline">01753 933006</span>
            </a>

            {/* Book Consultation Primary CTA */}
            <button
              onClick={() => scrollToSection("booking-form")}
              className="inline-flex items-center justify-center min-h-[44px] px-4 sm:px-5 rounded-full bg-[#1D1D1D] text-[#FFFFFF] text-xs font-semibold hover:bg-[#000000] active:scale-95 transition-all shadow-sm"
            >
              <span className="hidden sm:inline">Book a consultation</span>
              <span className="sm:hidden">Book</span>
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================================
          2. HERO SECTION (RESPONSIVE & DENSITY OPTIMISED)
          - Shorter mobile headline: "Modern dental care in the heart of Slough."
          - Desktop headline: "Modern dental care, restorative expertise, and smile consultations in the heart of Slough."
          - Supporting copy: "Thoughtful implant, restorative, and cosmetic care with a calm, personalised approach."
          - Credential line: "Led by Dr Ismael Khan DMD, PGCert, PGDip, Principal Dentist and Restorative & Implant Dentistry Specialist."
          - Guaranteed visible local placeholder image
      ====================================================================== */}
      <section className="bg-[#F1E7D8] pt-10 pb-14 sm:pt-16 sm:pb-20 border-b border-[#DDDDDD] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Hero Text Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Slough Location Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFFFFF]/85 border border-[#DDDDDD] text-[#1D1D1D] text-xs font-semibold mb-4 sm:mb-6 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-[#5E5EEE]" />
                <span>Cornwall House, 55–57 High Street, Slough</span>
              </div>

              {/* Responsive Headline */}
              <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-bold text-[#1D1D1D] tracking-tight leading-[1.15] mb-4">
                <span className="block sm:hidden">Modern dental care in the heart of Slough.</span>
                <span className="hidden sm:inline">Modern dental care, restorative expertise, and smile consultations in the heart of Slough.</span>
              </h1>

              {/* Exact Credential Line */}
              <p className="text-sm sm:text-base font-semibold text-[#1D1D1D] leading-snug mb-2">
                Led by Dr Ismael Khan DMD, PGCert, PGDip, Principal Dentist and Restorative &amp; Implant Dentistry Specialist.
              </p>

              {/* Supporting Copy */}
              <p className="text-sm sm:text-base text-[#292929]/80 leading-relaxed font-normal mb-6 sm:mb-8 max-w-2xl">
                Thoughtful implant, restorative, and cosmetic care with a calm, personalised approach.
              </p>

              {/* CTAs (52px minimum height) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-6 sm:mb-8">
                <button
                  onClick={() => scrollToSection("booking-form")}
                  className="inline-flex items-center justify-center gap-2 min-h-[52px] h-[52px] px-7 rounded-full bg-[#1D1D1D] text-[#FFFFFF] font-semibold text-sm hover:bg-[#000000] active:scale-95 transition-all shadow-md"
                >
                  <span>Book a consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:01753933006"
                  className="inline-flex items-center justify-center gap-2 min-h-[52px] h-[52px] px-7 rounded-full bg-[#FFFFFF] text-[#1D1D1D] font-semibold text-sm border border-[#DDDDDD] hover:bg-[#FAF8F5] transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4 text-[#1D1D1D]" />
                  <span>Call 01753 933006</span>
                </a>
              </div>

              {/* Review Trust Signal Bar (Safer Wording) */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-[#292929]/80 pt-4 border-t border-[#DDDDDD]/70 w-full">
                <div className="flex items-center gap-1.5">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold text-[#1D1D1D]">5-star Google Reviews</span>
                </div>
                <span className="text-[#DDDDDD]">•</span>
                <span>Trustindex displays 24 reviews rated Excellent.</span>
              </div>
            </div>

            {/* Hero Visual Column (Guaranteed Visible Local Placeholder Image) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#FFFFFF] shadow-xl bg-[#FFFFFF] aspect-[4/3] sm:aspect-[4/3] lg:aspect-[5/4]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/berkshire/exterior.jpg"
                  alt="Berkshire Dental Suite practice exterior at Cornwall House Slough (Concept Presentation Placeholder)"
                  className="w-full h-full object-cover"
                />

                {/* Understated Placeholder Badge */}
                <div className="absolute top-3 right-3 bg-[#1D1D1D]/80 backdrop-blur-sm text-[#F1E7D8] text-[9px] font-mono font-semibold px-2.5 py-1 rounded-md tracking-wider uppercase border border-white/15">
                  Concept Presentation Placeholder
                </div>

                {/* Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#FFFFFF]/95 backdrop-blur-md rounded-xl p-3.5 border border-[#DDDDDD] shadow-md">
                  <p className="text-xs font-bold text-[#1D1D1D]">Berkshire Dental Suite</p>
                  <p className="text-[11px] text-[#292929]/70">Cornwall House • Slough High Street</p>
                </div>
              </div>

              <p className="text-[10px] text-[#292929]/60 italic mt-2 text-center">
                Placeholder imagery used for this independent concept presentation. Final imagery to be supplied or approved by Berkshire Dental Suite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. TRUST SECTION (SAFE REVIEW & ROLE STATEMENTS)
      ====================================================================== */}
      <section className="py-12 bg-[#FFFFFF] border-b border-[#DDDDDD]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Trust Point 1: Google Reviews */}
            <div className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#DDDDDD] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 mb-3 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-xs font-bold text-[#1D1D1D] ml-1">5-Star</span>
                </div>
                <h3 className="text-base font-bold text-[#1D1D1D] mb-1.5">
                  5-star Google Reviews
                </h3>
                <p className="text-xs sm:text-sm text-[#292929]/80 leading-relaxed">
                  Trustindex displays 24 reviews rated Excellent.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#DDDDDD]/60 flex items-center justify-between text-[11px] text-[#292929]/70 font-medium">
                <span>Trustindex Rating</span>
                <span className="text-emerald-700 font-semibold uppercase tracking-wider">EXCELLENT</span>
              </div>
            </div>

            {/* Trust Point 2: Dr Ismael Verified Role */}
            <div className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#DDDDDD] flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-[#F1E7D8] flex items-center justify-center text-[#1D1D1D] font-bold text-xs mb-3">
                  <ShieldCheck className="w-4 h-4 text-[#5E5EEE]" />
                </div>
                <h3 className="text-base font-bold text-[#1D1D1D] mb-1.5">
                  Restorative &amp; Implant Specialist
                </h3>
                <p className="text-xs sm:text-sm text-[#292929]/80 leading-relaxed">
                  Care led by Dr Ismael Khan DMD, PGCert, PGDip — Principal Dentist, Founder, and Visiting Implantologist.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#DDDDDD]/60 flex items-center justify-between text-[11px] text-[#292929]/70 font-medium">
                <span>Clinical Focus</span>
                <span className="text-[#1D1D1D] font-semibold">Minimally Invasive</span>
              </div>
            </div>

            {/* Trust Point 3: Opening Hours Advantage */}
            <div className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#DDDDDD] flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-[#F1E7D8] flex items-center justify-center text-[#1D1D1D] font-bold text-xs mb-3">
                  <Clock className="w-4 h-4 text-[#1D1D1D]" />
                </div>
                <h3 className="text-base font-bold text-[#1D1D1D] mb-1.5">
                  Evening &amp; Weekend Access
                </h3>
                <p className="text-xs sm:text-sm text-[#292929]/80 leading-relaxed">
                  Late evening clinics open until 8pm on Mondays and Wednesdays, plus weekend appointments Friday through Sunday 9am–6pm.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#DDDDDD]/60 flex items-center justify-between text-[11px] text-[#292929]/70 font-medium">
                <span>Mon &amp; Wed Evenings</span>
                <span className="text-[#1D1D1D] font-semibold">Open until 8:00pm</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. PRIORITY TREATMENTS SECTION
      ====================================================================== */}
      <section id="treatments" className="py-14 sm:py-20 bg-[#FBF9F5]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-semibold text-[#5E5EEE] uppercase tracking-widest block mb-2">
              Primary Treatments
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1D1D1D] tracking-tight mb-3">
              Focused Restorative &amp; Cosmetic Care
            </h2>
            <p className="text-xs sm:text-sm text-[#292929]/80 leading-relaxed font-normal">
              Our core treatment areas planned around careful clinical diagnosis and natural aesthetics. Select any treatment to read detailed considerations.
            </p>
          </div>

          {/* 6 Priority Treatment Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRIORITY_TREATMENTS.map((treatment) => (
              <div
                key={treatment.id}
                className="bg-[#FFFFFF] rounded-2xl border border-[#DDDDDD] p-6 flex flex-col justify-between hover:border-[#1D1D1D] transition-all group shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-lg bg-[#F1E7D8] text-[#1D1D1D] flex items-center justify-center font-bold text-xs">
                      {treatment.title[0]}
                    </span>
                    <span className="text-[10px] font-semibold tracking-wider text-[#292929]/50 uppercase font-mono">
                      Private Care
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1D1D1D] mb-2 group-hover:text-[#5E5EEE] transition-colors">
                    {treatment.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#292929]/80 leading-relaxed mb-6 font-normal">
                    {treatment.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DDDDDD]/60 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalTreatment(treatment)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D1D1D] hover:text-[#5E5EEE] transition-colors min-h-[44px]"
                  >
                    <span>Treatment details</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <button
                    onClick={() => {
                      setBookingData((prev) => ({ ...prev, treatment: treatment.title }));
                      scrollToSection("booking-form");
                    }}
                    className="text-[11px] font-medium text-[#292929]/70 hover:text-[#1D1D1D] underline underline-offset-4 min-h-[44px] flex items-center"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-Page Modal for Treatment Details */}
      {activeModalTreatment && (
        <div
          className="fixed inset-0 z-50 bg-[#000000]/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveModalTreatment(null)}
        >
          <div
            className="bg-[#FFFFFF] border border-[#DDDDDD] rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalTreatment(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#F1E7D8] text-[#1D1D1D] hover:bg-[#e6d9c6] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close treatment details"
            >
              ✕
            </button>

            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#5E5EEE] block mb-2 font-mono">
              Treatment Guide
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1D] mb-4">
              {activeModalTreatment.title}
            </h3>

            <p className="text-sm text-[#292929] leading-relaxed mb-6 font-normal">
              {activeModalTreatment.fullDesc}
            </p>

            <div className="mb-6 p-4 rounded-xl bg-[#FBF9F5] border border-[#DDDDDD]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D1D1D] mb-3">
                Key Considerations
              </h4>
              <ul className="space-y-2.5">
                {activeModalTreatment.keyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#292929]">
                    <CheckCircle2 className="w-4 h-4 text-[#5E5EEE] flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => {
                  setBookingData((prev) => ({
                    ...prev,
                    treatment: activeModalTreatment.title
                  }));
                  setActiveModalTreatment(null);
                  scrollToSection("booking-form");
                }}
                className="w-full sm:w-auto flex-1 min-h-[48px] py-3 px-6 rounded-full bg-[#1D1D1D] text-[#FFFFFF] font-semibold text-xs text-center uppercase tracking-wider hover:bg-[#000000] transition-colors"
              >
                Discuss in Consultation
              </button>
              <button
                onClick={() => setActiveModalTreatment(null)}
                className="w-full sm:w-auto min-h-[48px] py-3 px-5 rounded-full bg-[#F1E7D8] text-[#1D1D1D] font-semibold text-xs text-center uppercase tracking-wider hover:bg-[#e6d9c6] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          5. COMPACT GROUPED SERVICES SECTION
      ====================================================================== */}
      <section className="py-14 sm:py-20 bg-[#F1E7D8] border-y border-[#DDDDDD]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="max-w-2xl mb-8 sm:mb-10">
            <span className="text-xs font-semibold text-[#1D1D1D] uppercase tracking-widest block mb-2">
              All Services
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1D1D1D] tracking-tight mb-3">
              Additional Routine &amp; Specialist Care
            </h2>
            <p className="text-xs sm:text-sm text-[#292929] leading-relaxed font-normal">
              Berkshire Dental Suite provides comprehensive dental services organized across four core clinical categories.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategoryTab(cat.name)}
                className={`min-h-[44px] px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                  activeCategoryTab === cat.name
                    ? "bg-[#1D1D1D] text-[#FFFFFF] shadow-sm"
                    : "bg-[#FFFFFF] text-[#292929] border border-[#DDDDDD] hover:border-[#1D1D1D]"
                }`}
              >
                {cat.name} Care
              </button>
            ))}
          </div>

          {/* Active Category Display */}
          {SERVICE_CATEGORIES.filter((cat) => cat.name === activeCategoryTab).map((category) => (
            <div
              key={category.name}
              className="bg-[#FFFFFF] rounded-2xl border border-[#DDDDDD] p-6 sm:p-8 shadow-sm"
            >
              <div className="mb-6 pb-4 border-b border-[#DDDDDD]/60">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#5E5EEE] font-semibold block mb-1">
                  Category Overview
                </span>
                <h3 className="text-lg font-bold text-[#1D1D1D]">
                  {category.name} Dentistry
                </h3>
                <p className="text-xs sm:text-sm text-[#292929]/75 mt-1">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.services.map((service, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 rounded-xl bg-[#FBF9F5] border border-[#DDDDDD] flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-[#1D1D1D] mb-1.5 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5E5EEE] flex-shrink-0" />
                        {service.title}
                      </h4>
                      <p className="text-xs text-[#292929]/80 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          6. DR ISMAEL KHAN SECTION (VERIFIED CLINICIAN PROFILE)
          - Guaranteed visible local placeholder image
      ====================================================================== */}
      <section id="dr-ismael" className="py-14 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="bg-[#FBF9F5] rounded-2xl border border-[#DDDDDD] p-6 sm:p-10 md:p-12 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Doctor Portrait Column */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative w-full max-w-sm aspect-[4/5] rounded-xl overflow-hidden border border-[#DDDDDD] bg-[#F1E7D8] shadow-md">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/berkshire/dr_ismael.jpg"
                    alt="Dr Ismael Khan DMD, PGCert, PGDip — Principal Dentist (Concept Presentation Placeholder)"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-[#1D1D1D]/80 backdrop-blur-sm text-[#F1E7D8] text-[9px] font-mono font-semibold px-2.5 py-1 rounded tracking-wider uppercase border border-white/15">
                    Concept Presentation Placeholder
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <span className="text-xs font-bold text-[#1D1D1D] block">
                    Dr Ismael Khan DMD, PGCert, PGDip
                  </span>
                  <span className="text-[11px] text-[#292929]/70 font-medium">
                    Founder &amp; Principal Dentist
                  </span>
                </div>
              </div>

              {/* Bio & Facts Column */}
              <div className="lg:col-span-7">
                <span className="text-xs font-semibold text-[#5E5EEE] uppercase tracking-widest block mb-2 font-mono">
                  Principal Dentist
                </span>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1D1D1D] tracking-tight mb-4">
                  Dr Ismael Khan DMD, PGCert, PGDip
                </h2>

                {/* Verified Roles Badge Strip */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-md bg-[#F1E7D8] text-[#1D1D1D] text-xs font-semibold border border-[#DDDDDD]">
                    Principal Dentist
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-md bg-[#F1E7D8] text-[#1D1D1D] text-xs font-semibold border border-[#DDDDDD]">
                    Founder of Berkshire Dental Suite
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-md bg-[#1D1D1D] text-[#FFFFFF] text-xs font-semibold">
                    Restorative &amp; Implant Dentistry Specialist
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-md bg-[#F1E7D8] text-[#1D1D1D] text-xs font-semibold border border-[#DDDDDD]">
                    Visiting Implantologist
                  </span>
                </div>

                {/* Neutral Background Text */}
                <div className="space-y-3.5 text-xs sm:text-sm text-[#292929] leading-relaxed font-normal mb-8">
                  <p>
                    Dr Ismael Khan grew up in Berkshire and founded Berkshire Dental Suite with the commitment to provide modern, patient-focused dental care to his local community.
                  </p>
                  <p>
                    Having completed postgraduate training across private practices, he undertook advanced implant and surgical training both in the UK and internationally, including specialised surgical education in Brazil.
                  </p>
                  <p>
                    His clinical approach centres on careful planning, digital dentistry, and minimally invasive techniques—focusing on implant treatment, long-term outcomes, and oral health preservation. As a Visiting Implantologist, Dr Ismael also places dental implants in other private clinics.
                  </p>
                </div>

                {/* Direct Action CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    onClick={() => {
                      setBookingData((prev) => ({ ...prev, treatment: "Dental Implants" }));
                      scrollToSection("booking-form");
                    }}
                    className="inline-flex items-center justify-center gap-2 min-h-[52px] px-6 rounded-full bg-[#1D1D1D] text-[#FFFFFF] font-semibold text-xs uppercase tracking-wider hover:bg-[#000000] transition-colors shadow-sm"
                  >
                    <span>Consult with Dr Ismael</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href="tel:01753933006"
                    className="inline-flex items-center justify-center gap-2 min-h-[52px] px-6 rounded-full bg-[#FFFFFF] text-[#1D1D1D] font-semibold text-xs uppercase tracking-wider border border-[#DDDDDD] hover:bg-[#FAF8F5] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call 01753 933006</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. BEFORE-AND-AFTER GALLERY (TOUCH-FRIENDLY & CAUTIONARY)
          - Guaranteed visible local placeholder comparison images
          - Mandatory notice:
            “Case details to be confirmed with the clinic. Visual treatment interpretation is indicative only.”
      ====================================================================== */}
      <section id="results" className="py-14 sm:py-20 bg-[#FBF9F5] border-t border-[#DDDDDD]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-xs font-semibold text-[#5E5EEE] uppercase tracking-widest block mb-2">
              Results Gallery
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1D1D1D] tracking-tight mb-3">
              Smile Refinements &amp; Comparisons
            </h2>
            <p className="text-xs sm:text-sm text-[#292929]/80 leading-relaxed font-normal">
              Compare smile transformations before and after clinical care. Use the interactive touch sliders to inspect contour, alignment, and aesthetic symmetry.
            </p>
          </div>

          {/* Mandatory Clinical Notice Box */}
          <div className="mb-8 max-w-3xl mx-auto bg-[#F1E7D8] border border-[#DDDDDD] rounded-xl p-4 flex items-start gap-3">
            <Info className="w-4 h-4 text-[#1D1D1D] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-[#1D1D1D] uppercase tracking-wider mb-0.5">
                Clinical Transparency Notice
              </h4>
              <p className="text-xs text-[#292929] leading-relaxed font-normal">
                Case details to be confirmed with the clinic. Visual treatment interpretation is indicative only.
              </p>
            </div>
          </div>

          {/* 4 Interactive Before & After Sliders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {BEFORE_AFTER_CASES.map((caseItem) => (
              <BeforeAfterSlider key={caseItem.id} caseItem={caseItem} />
            ))}
          </div>

          <p className="text-[10px] text-[#292929]/60 italic mt-6 text-center">
            Placeholder imagery used for this independent concept presentation. Final imagery to be supplied or approved by Berkshire Dental Suite.
          </p>
        </div>
      </section>

      {/* =====================================================================
          8. CLINIC ENVIRONMENT SECTION (GUARANTEED VISIBLE LOCAL ASSETS)
      ====================================================================== */}
      <section id="clinic" className="py-14 sm:py-20 bg-[#FFFFFF] border-t border-[#DDDDDD]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="max-w-2xl mb-8 sm:mb-12">
            <span className="text-xs font-semibold text-[#5E5EEE] uppercase tracking-widest block mb-2 font-mono">
              The Practice
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1D1D1D] tracking-tight mb-3">
              A Calm, Modern Clinical Environment
            </h2>
            <p className="text-xs sm:text-sm text-[#292929]/80 leading-relaxed font-normal">
              Designed to put patients at ease from the moment they arrive. Situated in Cornwall House on Slough High Street, our modern practice combines warm, welcoming reception spaces with state-of-the-art digital treatment suites.
            </p>
          </div>

          {/* Environment Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Image 1: Practice Exterior */}
            <div className="bg-[#FBF9F5] rounded-xl border border-[#DDDDDD] overflow-hidden shadow-sm flex flex-col">
              <div className="relative aspect-[4/3] bg-[#DDDDDD]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/berkshire/exterior.jpg"
                  alt="Berkshire Dental Suite exterior at Cornwall House Slough (Concept Presentation Placeholder)"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2.5 right-2.5 bg-[#1D1D1D]/80 backdrop-blur-sm text-[#F1E7D8] text-[9px] font-mono font-semibold px-2 py-0.5 rounded tracking-wider uppercase border border-white/15">
                  Placeholder
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <h3 className="text-sm font-bold text-[#1D1D1D] mb-1">
                  Practice Exterior
                </h3>
                <p className="text-xs text-[#292929]/80 leading-relaxed font-normal">
                  Centrally located at Cornwall House, 55–57 High Street, with accessible ground floor entry and nearby parking.
                </p>
              </div>
            </div>

            {/* Image 2: Reception */}
            <div className="bg-[#FBF9F5] rounded-xl border border-[#DDDDDD] overflow-hidden shadow-sm flex flex-col">
              <div className="relative aspect-[4/3] bg-[#DDDDDD]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/berkshire/reception.jpg"
                  alt="Berkshire Dental Suite reception and patient lounge (Concept Presentation Placeholder)"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2.5 right-2.5 bg-[#1D1D1D]/80 backdrop-blur-sm text-[#F1E7D8] text-[9px] font-mono font-semibold px-2 py-0.5 rounded tracking-wider uppercase border border-white/15">
                  Placeholder
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <h3 className="text-sm font-bold text-[#1D1D1D] mb-1">
                  Welcoming Reception
                </h3>
                <p className="text-xs text-[#292929]/80 leading-relaxed font-normal">
                  Warm, relaxed seating with comfortable amenities to ensure your consultation begins in comfort and confidence.
                </p>
              </div>
            </div>

            {/* Image 3: Treatment Room */}
            <div className="bg-[#FBF9F5] rounded-xl border border-[#DDDDDD] overflow-hidden shadow-sm flex flex-col">
              <div className="relative aspect-[4/3] bg-[#DDDDDD]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/berkshire/treatment_room.jpg"
                  alt="Berkshire Dental Suite digital treatment suite (Concept Presentation Placeholder)"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2.5 right-2.5 bg-[#1D1D1D]/80 backdrop-blur-sm text-[#F1E7D8] text-[9px] font-mono font-semibold px-2 py-0.5 rounded tracking-wider uppercase border border-white/15">
                  Placeholder
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <h3 className="text-sm font-bold text-[#1D1D1D] mb-1">
                  Treatment Suite
                </h3>
                <p className="text-xs text-[#292929]/80 leading-relaxed font-normal">
                  Equipped with modern digital imaging and clinical technology for gentle, minimally invasive dental procedures.
                </p>
              </div>
            </div>
          </div>

          <p className="text-[10px] text-[#292929]/60 italic mt-6 text-center">
            Placeholder imagery used for this independent concept presentation. Final imagery to be supplied or approved by Berkshire Dental Suite.
          </p>
        </div>
      </section>

      {/* =====================================================================
          9. CONTACT AND OPENING HOURS
      ====================================================================== */}
      <section id="hours-location" className="py-14 sm:py-20 bg-[#FBF9F5] border-t border-[#DDDDDD]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Opening Hours & Contact Details Column */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#5E5EEE] uppercase tracking-widest block mb-2 font-mono">
                  Find &amp; Visit Us
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1D1D1D] tracking-tight mb-6">
                  Contact &amp; Opening Hours
                </h2>

                {/* Contact Card */}
                <div className="bg-[#FFFFFF] rounded-2xl border border-[#DDDDDD] p-6 mb-6 shadow-sm space-y-4">
                  <div className="flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-[#5E5EEE] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#1D1D1D]">
                        Practice Address
                      </h3>
                      <p className="text-xs sm:text-sm text-[#292929] mt-0.5 leading-relaxed font-normal">
                        Berkshire Dental Suite<br />
                        Cornwall House, 55–57 High Street<br />
                        Slough, Berkshire, SL1 1DZ
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#DDDDDD]/60 flex items-start gap-3.5">
                    <Phone className="w-5 h-5 text-[#5E5EEE] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#1D1D1D]">
                        Telephone
                      </h3>
                      <a
                        href="tel:01753933006"
                        className="text-xs sm:text-sm font-semibold text-[#1D1D1D] hover:text-[#5E5EEE] transition-colors block mt-0.5"
                      >
                        01753 933006
                      </a>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#DDDDDD]/60 flex items-start gap-3.5">
                    <Mail className="w-5 h-5 text-[#5E5EEE] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#1D1D1D]">
                        Email Enquiries
                      </h3>
                      <a
                        href="mailto:info@berkshiredentalsuite.co.uk"
                        className="text-xs sm:text-sm font-semibold text-[#1D1D1D] hover:text-[#5E5EEE] transition-colors block mt-0.5 break-all"
                      >
                        info@berkshiredentalsuite.co.uk
                      </a>
                    </div>
                  </div>
                </div>

                {/* Opening Hours Schedule */}
                <div className="bg-[#FFFFFF] rounded-2xl border border-[#DDDDDD] p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#1D1D1D] flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#1D1D1D]" /> Opening Schedule
                    </h3>
                    <span className="text-[10px] font-semibold text-[#5E5EEE] uppercase tracking-wider bg-[#5E5EEE]/10 px-2.5 py-0.5 rounded-full font-mono">
                      Evening &amp; Weekend Care
                    </span>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between py-1 border-b border-[#DDDDDD]/40">
                      <span className="font-medium text-[#292929]">Monday</span>
                      <span className="font-semibold text-[#1D1D1D]">9:00am – 8:00pm</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#DDDDDD]/40 text-[#292929]/50">
                      <span className="font-medium">Tuesday</span>
                      <span className="italic font-medium">Closed</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#DDDDDD]/40">
                      <span className="font-medium text-[#292929]">Wednesday</span>
                      <span className="font-semibold text-[#1D1D1D]">9:00am – 8:00pm</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#DDDDDD]/40">
                      <span className="font-medium text-[#292929]">Thursday</span>
                      <span className="font-semibold text-[#1D1D1D]">9:00am – 12:00pm</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#DDDDDD]/40">
                      <span className="font-medium text-[#292929]">Friday</span>
                      <span className="font-semibold text-[#1D1D1D]">9:00am – 6:00pm</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#DDDDDD]/40">
                      <span className="font-medium text-[#292929]">Saturday</span>
                      <span className="font-semibold text-[#1D1D1D]">9:00am – 6:00pm</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="font-medium text-[#292929]">Sunday</span>
                      <span className="font-semibold text-[#1D1D1D]">9:00am – 6:00pm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Location Map Column */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="bg-[#FFFFFF] rounded-2xl border border-[#DDDDDD] overflow-hidden shadow-sm h-full flex flex-col min-h-[380px]">
                <div className="p-4 border-b border-[#DDDDDD] bg-[#F1E7D8]/50 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#1D1D1D]">
                    Location Map • Cornwall House
                  </span>
                  <a
                    href="https://maps.google.com/maps?q=55-57%20High%20St%2C%20Slough%20SL1%201DZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold text-[#5E5EEE] hover:underline"
                  >
                    Open in Google Maps ↗
                  </a>
                </div>
                <div className="flex-1 w-full relative min-h-[320px]">
                  <iframe
                    title="Berkshire Dental Suite Slough Location Map"
                    src="https://maps.google.com/maps?q=55-57%20High%20St%2C%20Slough%20SL1%201DZ&t=m&z=15&output=embed&iwloc=near"
                    className="w-full h-full absolute inset-0 border-0"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          10. BOOKING PROTOTYPE SECTION
      ====================================================================== */}
      <section id="booking-form" className="py-14 sm:py-20 bg-[#FFFFFF] border-t border-[#DDDDDD]">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="bg-[#FBF9F5] border-2 border-[#1D1D1D] rounded-2xl p-6 sm:p-10 shadow-xl">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F1E7D8] border border-[#DDDDDD] text-xs font-semibold text-[#1D1D1D] mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#5E5EEE]" />
                <span>Consultation Enquiry</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D1D1D] tracking-tight mb-2">
                Book a Consultation
              </h2>
              <p className="text-xs sm:text-sm text-[#292929]/80 leading-relaxed font-normal">
                Take the first step towards your new smile. Submit your details below to request an initial discussion with our clinical team.
              </p>
            </div>

            {bookingSubmitted ? (
              <div className="bg-[#FFFFFF] border border-[#DDDDDD] rounded-xl p-6 sm:p-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#F1E7D8] text-[#1D1D1D] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-[#1D1D1D]">
                  Thank you, {bookingData.fullName}
                </h3>
                <p className="text-xs sm:text-sm text-[#292929] max-w-md mx-auto leading-relaxed">
                  Your consultation request for <strong className="font-semibold text-[#1D1D1D]">{bookingData.treatment}</strong> has been received in prototype mode.
                </p>
                <div className="p-3 bg-[#F1E7D8] rounded-xl text-[11px] text-[#292929] max-w-sm mx-auto font-mono">
                  Concept Prototype Note: No external transmission occurred. In production, this connects directly to the clinic&apos;s reception desk.
                </div>
                <button
                  onClick={() => {
                    setBookingSubmitted(false);
                    setBookingData({
                      fullName: "",
                      email: "",
                      phone: "",
                      treatment: "Dental Implants"
                    });
                  }}
                  className="min-h-[44px] px-5 py-2.5 rounded-full bg-[#1D1D1D] text-[#FFFFFF] text-xs font-semibold hover:bg-[#000000] transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4 sm:space-y-5">
                {bookingError && (
                  <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-medium">
                    {bookingError}
                  </div>
                )}

                {/* Field 1: Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#1D1D1D] mb-1.5"
                  >
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    value={bookingData.fullName}
                    onChange={(e) =>
                      setBookingData((prev) => ({ ...prev, fullName: e.target.value }))
                    }
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#DDDDDD] text-sm text-[#1D1D1D] placeholder-[#292929]/40 focus:outline-none focus:border-[#1D1D1D] transition-colors font-medium"
                  />
                </div>

                {/* Field 2 & 3: Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#1D1D1D] mb-1.5"
                    >
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={bookingData.email}
                      onChange={(e) =>
                        setBookingData((prev) => ({ ...prev, email: e.target.value }))
                      }
                      placeholder="e.g. sarah@example.com"
                      className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#DDDDDD] text-sm text-[#1D1D1D] placeholder-[#292929]/40 focus:outline-none focus:border-[#1D1D1D] transition-colors font-medium"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#1D1D1D] mb-1.5"
                    >
                      Telephone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={bookingData.phone}
                      onChange={(e) =>
                        setBookingData((prev) => ({ ...prev, phone: e.target.value }))
                      }
                      placeholder="e.g. 07123 456789"
                      className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#DDDDDD] text-sm text-[#1D1D1D] placeholder-[#292929]/40 focus:outline-none focus:border-[#1D1D1D] transition-colors font-medium"
                    />
                  </div>
                </div>

                {/* Field 4: Treatment Selection */}
                <div>
                  <label
                    htmlFor="treatment"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#1D1D1D] mb-1.5"
                  >
                    Primary Treatment of Interest
                  </label>
                  <select
                    id="treatment"
                    value={bookingData.treatment}
                    onChange={(e) =>
                      setBookingData((prev) => ({ ...prev, treatment: e.target.value }))
                    }
                    className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#DDDDDD] text-sm text-[#1D1D1D] focus:outline-none focus:border-[#1D1D1D] transition-colors font-medium"
                  >
                    <option value="Dental Implants">Dental Implants</option>
                    <option value="Cosmetic Bonding">Cosmetic Bonding</option>
                    <option value="Porcelain Veneers">Porcelain Veneers</option>
                    <option value="Teeth Whitening">Teeth Whitening</option>
                    <option value="Invisalign">Invisalign (Clear Aligners)</option>
                    <option value="Smile Makeovers">Smile Makeovers</option>
                    <option value="Root Canal Treatment">Root Canal Treatment</option>
                    <option value="Dental Checkup & Hygienist">Dental Checkup &amp; Hygienist</option>
                    <option value="Other Dental Service">Other Dental Service</option>
                  </select>
                </div>

                {/* Submit Action (52px height) */}
                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full min-h-[52px] h-[52px] rounded-full bg-[#1D1D1D] text-[#FFFFFF] font-semibold text-sm uppercase tracking-wider hover:bg-[#000000] active:scale-[0.99] transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Book a consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-center text-[11px] text-[#292929]/60 mt-3 font-medium">
                    Or call our reception directly on{" "}
                    <a href="tel:01753933006" className="text-[#1D1D1D] font-bold underline">
                      01753 933006
                    </a>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================================
          CLINIC FOOTER
          - Pure Berkshire Dental Suite footer
          - Zero Veltris branding
      ====================================================================== */}
      <footer className="bg-[#1D1D1D] text-[#F1E7D8] py-14 border-t border-[#292929]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Col 1: Brand & Address */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F1E7D8] text-[#1D1D1D] flex items-center justify-center font-bold text-xs">
                  BDS
                </div>
                <span className="text-base font-bold text-[#FFFFFF] tracking-tight">
                  Berkshire Dental Suite
                </span>
              </div>
              <p className="text-xs text-[#F1E7D8]/70 max-w-sm leading-relaxed font-normal">
                Cornwall House, 55–57 High Street, Slough, Berkshire, SL1 1DZ. Modern dental care, restorative expertise, and smile consultations in Slough.
              </p>
              <div className="text-xs text-[#F1E7D8]/90 space-y-1">
                <p>Phone: <a href="tel:01753933006" className="underline hover:text-[#FFFFFF]">01753 933006</a></p>
                <p>Email: <a href="mailto:info@berkshiredentalsuite.co.uk" className="underline hover:text-[#FFFFFF]">info@berkshiredentalsuite.co.uk</a></p>
              </div>
            </div>

            {/* Col 2: Priority Treatments */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFFFFF] mb-4 font-mono">
                Treatments
              </h4>
              <ul className="space-y-2 text-xs text-[#F1E7D8]/70">
                <li><button onClick={() => scrollToSection("treatments")} className="hover:text-[#FFFFFF] transition-colors min-h-[32px] flex items-center">Dental Implants</button></li>
                <li><button onClick={() => scrollToSection("treatments")} className="hover:text-[#FFFFFF] transition-colors min-h-[32px] flex items-center">Cosmetic Bonding</button></li>
                <li><button onClick={() => scrollToSection("treatments")} className="hover:text-[#FFFFFF] transition-colors min-h-[32px] flex items-center">Porcelain Veneers</button></li>
                <li><button onClick={() => scrollToSection("treatments")} className="hover:text-[#FFFFFF] transition-colors min-h-[32px] flex items-center">Teeth Whitening</button></li>
                <li><button onClick={() => scrollToSection("treatments")} className="hover:text-[#FFFFFF] transition-colors min-h-[32px] flex items-center">Invisalign</button></li>
                <li><button onClick={() => scrollToSection("treatments")} className="hover:text-[#FFFFFF] transition-colors min-h-[32px] flex items-center">Smile Makeovers</button></li>
              </ul>
            </div>

            {/* Col 3: Clinic Information */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFFFFF] mb-4 font-mono">
                Practice
              </h4>
              <ul className="space-y-2 text-xs text-[#F1E7D8]/70">
                <li><button onClick={() => scrollToSection("dr-ismael")} className="hover:text-[#FFFFFF] transition-colors min-h-[32px] flex items-center">Dr Ismael Khan</button></li>
                <li><button onClick={() => scrollToSection("results")} className="hover:text-[#FFFFFF] transition-colors min-h-[32px] flex items-center">Results Gallery</button></li>
                <li><button onClick={() => scrollToSection("clinic")} className="hover:text-[#FFFFFF] transition-colors min-h-[32px] flex items-center">The Practice</button></li>
                <li><button onClick={() => scrollToSection("hours-location")} className="hover:text-[#FFFFFF] transition-colors min-h-[32px] flex items-center">Opening Hours</button></li>
                <li><button onClick={() => scrollToSection("booking-form")} className="hover:text-[#FFFFFF] transition-colors min-h-[32px] flex items-center">Book Consultation</button></li>
              </ul>
            </div>
          </div>

          {/* Bottom Legal Strip */}
          <div className="pt-8 border-t border-[#292929] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#F1E7D8]/50">
            <p>© {new Date().getFullYear()} Berkshire Dental Suite. All rights reserved.</p>
            <p>Cornwall House, 55–57 High Street, Slough, Berkshire, SL1 1DZ</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
