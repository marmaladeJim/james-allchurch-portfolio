import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Instrument_Sans } from "next/font/google";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: { default: "James Allchurch — Freelance Motion Designer", template: "%s — James Allchurch" },
  description: "Portfolio of James Allchurch, freelance motion designer.",
  openGraph: { title: "James Allchurch — Freelance Motion Designer", description: "Motion design, animation and visual storytelling.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header />{children}<Footer /></body></html>;
}
