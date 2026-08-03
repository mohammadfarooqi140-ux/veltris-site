import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display, Cinzel } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  title: "Veltris | AI Voice Agents & Premium Websites",
  description: "AI voice agents that answer your phone 24/7 and premium websites that convert. Built for cleaning companies, trades, roofers and facilities teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${cinzel.variable}`}>
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-92G8DB3QE3" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-92G8DB3QE3');
          `}
        </Script>
      </head>
      <body className={cn("min-h-screen font-sans antialiased bg-zinc-950 text-zinc-50 flex flex-col justify-between")}>
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
