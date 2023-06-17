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
  const { setTheme, theme, systemTheme } = useTheme();
  const ready = useHydration();
  const id = useId();
  const isChecked = () => {
    if (theme === "system") {
      return systemTheme === "dark" ? true : false;
    }

    return theme === "dark" ? true : false;
  };
  return (
    <label
      htmlFor={id}
      className={twMerge(
        "relative hidden  h-7 w-12 cursor-pointer items-center justify-between rounded-full border border-slate-50/20 bg-sky-500 bg-gradient-to-tl from-sky-500  via-sky-600 to-sky-700 p-1 duration-300 dark:border-slate-900/10 dark:bg-zinc-800 dark:from-slate-800 dark:via-slate-700 dark:to-slate-600 xs:flex",
        !ready && "!cursor-default !opacity-0",
        className
      )}
    >
      <input
        type="checkbox"
        className="peer absolute opacity-0"
        id={id}
        disabled={!ready}
        aria-label="dark mode switch"
        onChange={(e) => {
          setTheme(e.target.checked ? "dark" : "light");
        }}
        checked={isChecked()}
      />
      <FaMoon className="text-zinc-100" />
      <FaSun className="text-yellow-400" />
      <span className="absolute h-5 w-5 rounded-full bg-white transition-all duration-300 peer-checked:translate-x-5 dark:bg-zinc-800" />
    </label>
  );
};

export default DarkmodeSwitch;
