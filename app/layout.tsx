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
    default: "Luxury Web Design for UK Clinics and Property Brands | Veltris",
    template: "%s",
  },
  description: "Veltris creates premium websites for selected UK clinics, aesthetics practices, property brands, and interior design businesses, combining strategy, design, build, and SEO foundations.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Luxury Web Design for UK Clinics and Property Brands | Veltris",
    description: "Veltris creates premium websites for selected UK clinics, aesthetics practices, property brands, and interior design businesses, combining strategy, design, build, and SEO foundations.",
    url: "https://www.veltris.uk/",
    siteName: "Veltris",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Web Design for UK Clinics and Property Brands | Veltris",
    description: "Veltris creates premium websites for selected UK clinics, aesthetics practices, property brands, and interior design businesses, combining strategy, design, build, and SEO foundations.",
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
