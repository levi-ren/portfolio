import Body from "@/components/body";
import { Analytics } from "@vercel/analytics/react";
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

export const metadata: Metadata = {
  title: "Levi Deang",
  description:
    "Comprehensive representation of my professional and creative work.",
  applicationName: "Portfolio",
  openGraph: {
    title: "Portfolio",
    description:
      "Comprehensive representation of my professional and creative work.",
    url: "https://www.levideang.dev",
    images: "/portfolio.png",
  },
  twitter: {
    title: "Portfolio",
    description:
      "Comprehensive representation of my professional and creative work.",
    card: "summary_large_image",
    site: "https://www.levideang.dev",
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
        className={`relative bg-slate-200 font-medium text-zinc-800  dark:bg-[#121212] dark:text-white  ${quicksand.className} ${shadows.variable}`}
      >
        {children}
        <Analytics />
      </Body>
    </html>
  );
}
