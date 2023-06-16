"use client";

import { useHydration } from "@/hooks/useHydration";
import { useTheme } from "next-themes";
import { useId } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
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
        "w-12 h-7  justify-between items-center cursor-pointer relative p-1 rounded-full border-slate-50/20 dark:border-white/10 border bg-zinc-900 hidden xs:flex",
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
      <IoMoon className="text-zinc-50" />
      <IoSunny className="text-yellow-400" />
      <span className="absolute  bg-white h-5 w-5 rounded-full peer-checked:translate-x-5 transition-all" />
    </label>
  );
};

export default DarkmodeSwitch;
