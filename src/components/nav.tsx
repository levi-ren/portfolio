import Container from "@/components/container";
import Logo from "@/components/logo";
import Link from "next/link";
import { IoMoon, IoSunny } from "react-icons/io5";
import { links } from "./links";
import MenuButton from "./menu-button";

interface NavProps {}

export default function Nav(props: NavProps) {
  return (
    <nav className="py-4 px-2  dark:text-white backdrop-blur border-b dark:border-slate-50/20 border-slate-200 text-sm sticky top-0 z-20 mt-16">
      <Container className="flex justify-between items-center ">
        <Link href="/">
          <Logo width={40} height={40} className="" />
        </Link>

        <div className="space-x-4 hidden xs:block">
          {links.map((link) => (
            <Link
              key={link.name}
              className="hover:text-base transition-[font-size]"
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <label
          htmlFor="darkmode-switch"
          className="dark:bg-zinc-800 w-12 h-7  justify-between items-center cursor-pointer relative p-1 rounded-full dark:border-slate-50/20 border-slate-200 bg-slate-400 hidden xs:flex"
        >
          <input
            type="checkbox"
            className="opacity-0 absolute peer"
            id="darkmode-switch"
          />
          <IoMoon className="text-slate-400" />
          <IoSunny className="text-yellow-400" />
          <span className="absolute bg-white h-5 w-5 rounded-full peer-checked:translate-x-5 transition-all" />
        </label>
        <MenuButton />
      </Container>
    </nav>
  );
}
