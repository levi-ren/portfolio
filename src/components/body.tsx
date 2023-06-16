"use client";

import { useHydration } from "@/hooks/useHydration";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface BodyProps {
  children: ReactNode;
  className: string;
}

const Body = ({ children, className }: BodyProps) => {
  const ready = useHydration();
  return (
    <body
      className={twMerge(className, ready && "transition-colors duration-300")}
    >
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </body>
  );
};

export default Body;
