"use client";

import { useHydration } from "@/hooks/useHydration";
import useUIStore from "@/store/ui";
import { memo, useId } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

interface DarkmodeSwitchProps {
  className?: string;
}

const DarkmodeSwitch = memo(({ className }: DarkmodeSwitchProps) => {
  const { darkMode, toggleDarkMode } = useUIStore(
    ({ darkMode, toggleDarkMode }) => ({
      darkMode,
      toggleDarkMode,
    })
  );
  const ready = useHydration();
  const id = useId();
  return (
    <label
      htmlFor={id}
      className={twMerge(
        "w-12 h-7  justify-between items-center cursor-pointer relative p-1 rounded-full border-slate-50/20 dark:border-white/10 border bg-zinc-900 hidden xs:flex",
        !ready && "hidden",
        className
      )}
    >
      <input
        type="checkbox"
        className="opacity-0 absolute peer"
        id={id}
        aria-label="dark mode switch"
        onChange={(e) => {
          toggleDarkMode();
          document.documentElement.classList.toggle("dark", e.target.checked);
        }}
        checked={darkMode}
      />
      <IoMoon className="text-zinc-50" />
      <IoSunny className="text-yellow-400" />
      <span className="absolute  bg-white h-5 w-5 rounded-full peer-checked:translate-x-5 transition-all" />
    </label>
  );
});

DarkmodeSwitch.displayName = "DarkmodeSwitch";

export default DarkmodeSwitch;
