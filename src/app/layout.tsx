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

const description =
  "Welcome to my portfolio, where I share my journey as a software engineer. Explore a diverse collection of my coding projects, software designs, and technical expertise. From sleek user interfaces to robust backend systems, witness the practical application of my skills. Get a glimpse into my problem-solving approach, as I tackle real-world challenges through elegant solutions. Whether it's web development, or algorithmic solutions, you'll find a range of projects that highlight my passion for creating efficient and user-friendly software. Join me on this digital adventure as we navigate the realms of code and innovation together.";

export const metadata: Metadata = {
  title: "Levi Deang | Senior Software Engineer",
  description,
  applicationName: "Portfolio",
  alternates: {
    canonical: "https://levideang.dev",
  },
  openGraph: {
    title: "Portfolio",
    description,
    url: "https://levideang.dev",
    images: "/portfolio.png",
  },
  twitter: {
    title: "Portfolio",
    description,
    card: "summary_large_image",
    site: "https://levideang.dev",
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
      </Body>
    </html>
  );
}
