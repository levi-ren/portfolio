"use client";

import { useHydration } from "@/hooks/useHydration";
import useUIStore from "@/store/ui";
import { RxHamburgerMenu } from "react-icons/rx";
import { twMerge } from "tailwind-merge";

interface MenuButtonProps {}

const MenuButton = (props: MenuButtonProps) => {
  const ready = useHydration();
  const toggle = useUIStore((state) => state.toggleSideNav);
  return (
    <button
      className={twMerge(
        "ov active:scale-[1.05] xs:hidden",
        !ready && "hidden"
      )}
      aria-label="open menu button"
      onClick={() => {
        toggle();
        document.documentElement.classList.add("overflow-hidden");
      }}
    >
      <RxHamburgerMenu className="h-5 w-5" />
    </button>
  );
};

export default MenuButton;
