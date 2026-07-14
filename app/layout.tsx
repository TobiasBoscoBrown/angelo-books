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
  title: "Angelo Books | Outbound Sales for Marketing Agencies",
  description:
    "Angelo Books fills your agency's pipeline with qualified meetings. We handle the outbound calling so you can focus on delivery. Serving marketing agencies in the US and Australia.",
  openGraph: {
    title: "Angelo Books | Outbound Sales for Marketing Agencies",
    description:
      "Get in a meeting with your dream clients without the tech headache. Outbound done for you.",
    type: "website",
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
