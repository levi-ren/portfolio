"use client";

import useUIStore from "@/store/ui";
import { TfiClose } from "react-icons/tfi";
import { twMerge } from "tailwind-merge";
import Anchor from "./anchor";
import DarkmodeSwitch from "./darkmode-switch";
import { links } from "./links";

interface AsideProps {}

const Aside = (props: AsideProps) => {
  const { isOpen, toggle } = useUIStore((state) => ({
    isOpen: state.sideNavOpen,
    toggle: state.toggleSideNav,
  }));

  const onClick = () => {
    toggle();
    document.documentElement.classList.remove("overflow-hidden");
  };
  return (
    <aside
      id="menu"
      className={twMerge(
        "fixed top-0 z-30 flex h-full flex-col items-center justify-center gap-y-4 overflow-hidden bg-white/50 backdrop-blur-lg transition-all dark:bg-[#111]/50 xs:hidden",
        !isOpen ? "w-full " : "w-0"
      )}
    >
      <button
        className={twMerge("absolute right-4 top-4 active:scale-[1.05]")}
        aria-label="close menu button"
        onClick={onClick}
      >
        <TfiClose className="h-5 w-5" />
      </button>
      {links.map((link) => (
        <Anchor
          key={link.name}
          onClick={onClick}
          aria-label={link.label}
          className="transition-[font-size] hover:text-base"
          href={link.href}
        >
          {link.name}
        </Anchor>
      ))}
      <DarkmodeSwitch className="absolute bottom-4 flex" />
    </aside>
  );
};

export default Aside;
