"use client";

import useUIStore from "@/store/ui";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { twMerge } from "tailwind-merge";

interface MenuButtonProps {}

const useHydration = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return ready;
};

const MenuButton = (props: MenuButtonProps) => {
  const ready = useHydration();
  const toggle = useUIStore((state) => state.toggleSideNav);
  return (
    <button
      className={twMerge("xs:hidden active:scale-[1.05]", !ready && "hidden")}
      aria-label="open menu button"
      onClick={() => {
        toggle();
      }}
    >
      <RxHamburgerMenu className="h-5 w-5" />
    </button>
  );
};

export default MenuButton;
