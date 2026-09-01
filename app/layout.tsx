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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.veltris.uk"),
  title: {
    default: "A Clearer Website for the Decisions That Matter | Veltris",
    template: "%s | Veltris",
  },
  description: "Veltris creates clear, high trust websites for businesses whose real standard is stronger than their current online presence.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "A Clearer Website for the Decisions That Matter | Veltris",
    description: "Veltris creates clear, high trust websites for businesses whose real standard is stronger than their current online presence.",
    url: "https://www.veltris.uk/",
    siteName: "Veltris",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A Clearer Website for the Decisions That Matter | Veltris",
    description: "Veltris creates clear, high trust websites for businesses whose real standard is stronger than their current online presence.",
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
