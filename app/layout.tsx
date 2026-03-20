import type { Metadata } from "next";
import { DM_Serif_Display, Outfit, Geist } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cn } from "@/lib/utils";

/* ✅ IMPORT HERE */
import { Navigation } from "@/app/components/Navigation";
import { FooterSection } from "@/app/components/Footer";

/* ---------------- FONTS ---------------- */

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const headingFont = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-heading",
});

const bodyFont = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

/* ---------------- METADATA ---------------- */

export const metadata: Metadata = {
  title: "Presidency University International",
  description:
    "Study at Presidency University Bangalore – a globally connected campus offering undergraduate, postgraduate and doctoral programmes.",
};

/* ---------------- ROOT LAYOUT ---------------- */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        headingFont.variable,
        bodyFont.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body className="antialiased font-body bg-background text-foreground">
        {/* 🔥 GLOBAL NAVBAR */}
        <Navigation />

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* 🔥 GLOBAL FOOTER */}
        <FooterSection />
      </body>
    </html>
  );
}
