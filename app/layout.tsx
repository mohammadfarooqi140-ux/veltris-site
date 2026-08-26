import type { Metadata } from "next";
import { Inter, Playfair_Display, Cinzel } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/ui/CookieConsent";
import AnalyticsScriptLoader from "@/components/ui/AnalyticsScriptLoader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

export const dynamic = "force-static";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.veltris.uk"),
  title: {
    default: "Veltris | Luxury Web Design & Conversion Architecture UK",
    template: "%s | Veltris",
  },
  description: "Bespoke digital flagships and conversion optimization for UK private clinics and luxury property developers. Built strictly to The Veltris Standard.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Veltris | Luxury Web Design & Conversion Architecture UK",
    description: "Bespoke digital flagships and conversion optimization for UK private clinics and luxury property developers. Built strictly to The Veltris Standard.",
    url: "https://www.veltris.uk",
    siteName: "Veltris",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veltris | Luxury Web Design & Conversion Architecture UK",
    description: "Bespoke digital flagships and conversion optimization for UK private clinics and luxury property developers. Built strictly to The Veltris Standard.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${cinzel.variable}`}>
      <head />
      <body className={cn("min-h-screen font-sans antialiased bg-paper text-ink flex flex-col justify-between selection:bg-surface-raised selection:text-ink")}>
        <AnalyticsScriptLoader />
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
