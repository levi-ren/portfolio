import Body from "@/components/body";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { Quicksand, Shadows_Into_Light } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

const shadows = Shadows_Into_Light({
  subsets: ["latin"],
  variable: "--font-shadows",
  display: "swap",
  weight: "400",
});

const description =
  "Welcome to my portfolio, where I share my journey as a software engineer. Explore a diverse collection of my coding projects, software designs, and technical expertise. Join me on this digital adventure as we navigate the realms of code and innovation together.";

const url = "https://levideang.dev";

export const metadata: Metadata = {
  title: "Levi Deang | Senior Software Engineer",
  description,
  metadataBase: new URL(url),
  applicationName: "Portfolio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Portfolio",
    description,
    url,
    images: "/portfolio.png",
  },
  twitter: {
    title: "Portfolio",
    description,
    card: "summary_large_image",
    site: url,
    images: "/portfolio.png",
  },
  other: {
    "darkreader-lock": "lock",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <Body
        className={`relative bg-[#fafafa] font-medium text-zinc-800  dark:bg-[#121212] dark:text-white  ${quicksand.className} ${shadows.variable}`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </Body>
    </html>
  );
}
