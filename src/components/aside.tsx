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
        "fixed xs:hidden bg-white/50 dark:bg-[#111]/50 backdrop-blur-lg top-0 z-30 h-full flex flex-col justify-center items-center gap-y-4 transition-all overflow-hidden",
        !isOpen ? "w-full " : "w-0"
      )}
    >
      <button
        className={twMerge("active:scale-[1.05] absolute top-4 right-4")}
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
          className="hover:text-base transition-[font-size]"
          href={link.href}
        >
          {link.name}
        </Anchor>
      ))}
      <DarkmodeSwitch className="flex absolute bottom-4" />
    </aside>
  );
};

export default Aside;
