import { Quicksand, Shadows_Into_Light } from "next/font/google";
import Script from "next/script";
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

export const metadata = {
  title: "Levi Deang",
  description: "Levi Deang's portfolio, bootstraped with Next JS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`relative dark:bg-[#121212] bg-slate-50 dark:text-white transition-colors duration-300 ${quicksand.className} ${shadows.variable}`}
      >
        {children}
      </body>
      <Script id="darkmode" src="/darkmode.js" />
    </html>
  );
}
