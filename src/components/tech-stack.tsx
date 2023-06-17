import {
  SiCss3,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJirasoftware,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { SlSocialGithub } from "react-icons/sl";
import Container from "./container";

interface TechStackProps {}

export default function TechStack(props: TechStackProps) {
  return (
    <Container
      as="section"
      id="tech-stack"
      className="space-y-2 overflow-hidden px-2 pt-16"
    >
      <p className="text-center font-mono text-4xl font-bold">My techstack:</p>
      <Container
        maxWidth="lg"
        className="grid grid-cols-1 gap-2 p-4 sm:grid-cols-2 md:grid-cols-3"
      >
        <article className="relative flex-1 rounded-xl border border-zinc-400 p-4 text-center transition-[border] duration-300 after:absolute after:-left-[1px] after:top-8 after:h-20 after:w-[2px] after:bg-gradient-to-t after:from-transparent after:via-sky-500  after:to-transparent after:transition-all after:content-[''] hover:after:top-32 dark:border-slate-50/20 dark:after:via-rose-500 sm:col-span-2 md:col-span-1">
          <p className="font-mono text-xl font-semibold">Front-end</p>
          <p className="pb-4 pt-1 text-sm">My bread and butter.</p>
          <ul className="inline-block space-y-1">
            <li className="flex items-center gap-x-2 ">
              <SiNextdotjs className="h-5 w-5" /> Next JS
            </li>
            <li className="flex items-center gap-x-2 ">
              <SiReact className="h-5 w-5 text-sky-400" />
              React JS
            </li>
            <li className="flex items-center gap-x-2 ">
              <SiTailwindcss className="h-5 w-5 text-blue-500" />
              Tailwind
            </li>
            <li className="flex items-center gap-x-2 ">
              <SiTypescript className="h-5 w-5 text-blue-500" />
              TypeScript
            </li>
            <li className="flex items-center gap-x-2 ">
              <SiJavascript className="h-5 w-5 text-yellow-300" />
              JavaScript
            </li>
            <li className="flex items-center gap-x-2 ">
              <SiHtml5 className="h-5 w-5  text-orange-500" />
              HTML
            </li>
            <li className="flex items-center gap-x-2 ">
              <SiCss3 className="h-5 w-5 text-sky-600" />
              CSS
            </li>
          </ul>
        </article>
        <article className=" flex-1 rounded-xl border border-zinc-400 p-4 text-center transition-[border] duration-300 dark:border-slate-50/20">
          <p className="font-mono text-xl font-semibold">Back-end</p>
          <p className="pb-4 pt-1 text-sm">
            Aspiring, but not my strongest suit.
          </p>
          <ul className="inline-block space-y-1">
            <li className="flex items-center gap-x-2 ">
              <SiNodedotjs className="h-5 w-5 text-green-500" /> Node JS
            </li>
            <li className="flex items-center gap-x-2 ">
              <SiExpress className="h-5 w-5" /> Express JS
            </li>
            <li className="flex items-center gap-x-2 ">
              <SiMongodb className="h-5 w-5 text-green-600" /> MongoDB
            </li>
          </ul>
        </article>
        <article className=" flex-1 rounded-xl border border-zinc-400 p-4 text-center transition-[border] duration-300 dark:border-slate-50/20">
          <p className="font-mono text-xl font-semibold">Tools & Platform</p>
          <p className="pb-4 pt-1 text-sm">Favorite kits to get things done.</p>
          <ul className="inline-block space-y-1">
            <li className="flex items-center gap-x-2 ">
              <SiGit className="h-5 w-5 text-amber-600" /> Git
            </li>
            <li className="flex items-center gap-x-2 ">
              <SlSocialGithub className="h-5 w-5" /> GitHub
            </li>
            <li className="flex items-center gap-x-2 ">
              <SiVercel className="h-5 w-5" /> Vercel
            </li>
            <li className="flex items-center gap-x-2 ">
              <SiJirasoftware className="h-5 w-5 text-blue-600" /> Jira
            </li>
          </ul>
        </article>
      </Container>
    </Container>
  );
}
