import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "James Allchurch — Freelance Motion Designer",
    template: "%s — James Allchurch",
  },
  description:
    "Portfolio of James Allchurch, a freelance motion designer creating animation, brand films and visual storytelling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.className} min-h-screen bg-[#F8F7F3] text-[#111111] antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />

          <div className="flex-1">{children}</div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
