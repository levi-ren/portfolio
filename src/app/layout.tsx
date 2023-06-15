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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth dark">
      <body
        className={`relative dark:bg-[#121212] bg-slate-50 font-medium  dark:text-white text-zinc-800 transition-colors duration-300 ${quicksand.className} ${shadows.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
