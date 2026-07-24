import { FadeInUp } from "@/components/FadeInUp";
import { Hero } from "./components/Hero";
import { ServicesGrid } from "./components/ServicesGrid";
import { WorkSection } from "./components/WorkSection";
import { AboutSection } from "./components/AboutSection";
import { PartnersSection } from "./components/PartnersSection";
import { ContactSection } from "./components/ContactSection";

export default function UKPropertiesPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <main className="flex-grow pt-16">
        <Hero />
        <ServicesGrid />
        <WorkSection />
        <AboutSection />
        <PartnersSection />
        <ContactSection />
      </main>
    </div>
  );
}
