import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Angelo Books | Founder-Led Outbound Business Development",
  description:
    "Founder-led, calling-first business development for established B2B companies. We help you reach and engage the decision-makers who matter. Book a call.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Angelo Books | Founder-Led Outbound Business Development",
    description:
      "Founder-led, calling-first business development for established B2B companies. We help you reach and engage the decision-makers who matter. Book a call.",
    type: "website",
    url: SITE_URL,
    siteName: "Angelo Books",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Angelo Books: the right conversations can change your business. Angelo Miguel, founder.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Angelo Books | Founder-Led Outbound Business Development",
    description:
      "Founder-led, calling-first business development for established B2B companies. We help you reach and engage the decision-makers who matter. Book a call.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* Scroll reveals start hidden and are un-hidden by JS. If JS never
            arrives, un-hide everything rather than serve a blank page. */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
