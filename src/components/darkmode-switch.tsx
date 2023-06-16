"use client";

import { useHydration } from "@/hooks/useHydration";
import { useTheme } from "next-themes";
import { useId } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

interface DarkmodeSwitchProps {
  className?: string;
}

const DarkmodeSwitch = ({ className }: DarkmodeSwitchProps) => {
  const { setTheme, theme } = useTheme();
  const ready = useHydration();
  const id = useId();
  return (
    <label
      htmlFor={id}
      className={twMerge(
        "w-12 h-7  justify-between items-center cursor-pointer relative p-1 rounded-full border-slate-50/20 dark:border-slate-900/10 border hidden xs:flex  duration-300 dark:bg-zinc-800 bg-sky-500 bg-gradient-to-tl from-sky-500 via-sky-600 to-sky-700 dark:from-slate-800 dark:via-slate-700 dark:to-slate-600",
        !ready && "!opacity-0 !cursor-default",
        className
      )}
    >
      <input
        type="checkbox"
        className="opacity-0 absolute peer"
        id={id}
        disabled={!ready}
        aria-label="dark mode switch"
        onChange={(e) => {
          setTheme(e.target.checked ? "dark" : "light");
        }}
        checked={theme !== "light"}
      />
      <FaMoon className="text-zinc-100" />
      <FaSun className="text-yellow-400" />
      <span className="absolute dark:bg-zinc-800 h-5 w-5 rounded-full peer-checked:translate-x-5 transition-all bg-white duration-300" />
    </label>
  );
};

export default DarkmodeSwitch;
