import Container from "@/components/container";
import Logo from "@/components/logo";
import Link from "next/link";
import { IoMoon, IoSunny } from "react-icons/io5";

export default function Home() {
  return (
    <main className="dark:bg-black min-h-screen">
      <header className="py-4 px-2 dark:bg-black/90 dark:text-white backdrop-blur border-b dark:border-slate-50/20 border-slate-200 text-sm">
        <Container className="flex justify-between items-center ">
          <Link href="/">
            <Logo width={64} height={64} className="" />
          </Link>

          <nav className="space-x-4">
            <Link
              className="hover:text-base transition-all duration-300"
              href="/about-me"
            >
              About Me
            </Link>
            <Link
              className="hover:text-base transition-all duration-300"
              href="/timeline"
            >
              Timeline
            </Link>
            <Link
              className="hover:text-base transition-all duration-300"
              href="/projects"
            >
              Projects
            </Link>
            <Link
              className="hover:text-base transition-all duration-300"
              href="/contact"
            >
              Contact
            </Link>
          </nav>
          <label
            htmlFor="darkmode-switch"
            className="dark:bg-zinc-800 w-[50px] h-7 flex justify-between items-center cursor-pointer relative p-1 rounded-full dark:border-slate-50/20 border-slate-200 bg-slate-400 "
          >
            <input
              type="checkbox"
              className="opacity-0 absolute peer"
              id="darkmode-switch"
            />
            <IoMoon className="text-slate-400 h-5 w-5" />
            <IoSunny className="text-yellow-400 h-5 w-5" />
            <span className="absolute bg-white h-5 w-5 rounded-full peer-checked:translate-x-[22px] transition-all" />
          </label>
        </Container>
      </header>
    </main>
  );
}
