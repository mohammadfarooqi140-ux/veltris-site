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
  title: "Veltris | Luxury Pitch Deck Studio",
  description: "Bespoke pitch deck agency for founders raising Pre-Seed through Series C. We clarify your narrative, visualize your financial data, and design investor-ready presentations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${cinzel.variable}`}>
      <head />
      <body className={cn("min-h-screen font-sans antialiased bg-black text-zinc-50 flex flex-col justify-between selection:bg-amber-500/20 selection:text-amber-200")}>
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
