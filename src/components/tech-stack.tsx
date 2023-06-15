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
      className="pt-16 px-2 overflow-hidden space-y-2"
    >
      <p className="text-4xl font-bold font-mono">Techstack:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:grid-cols-3 p-4">
        <article className="flex-1 p-4 border dark:border-slate-50/20 border-slate-200 rounded-xl text-center sm:col-span-2 md:col-span-1">
          <p className="font-mono text-xl font-semibold">Front-end</p>
          <p className="text-sm py-4">
            I am a front-end developer by trade, and my current expertise.
          </p>
          <ul className="space-y-1 inline-block">
            <li className="flex gap-x-2 items-center ">
              <SiNextdotjs className="h-5 w-5" /> Next JS
            </li>
            <li className="flex gap-x-2 items-center ">
              <SiReact className="h-5 w-5 text-sky-400" />
              React JS
            </li>
            <li className="flex gap-x-2 items-center ">
              <SiTailwindcss className="h-5 w-5 text-blue-500" />
              Tailwind
            </li>
            <li className="flex gap-x-2 items-center ">
              <SiTypescript className="h-5 w-5 text-blue-500" /> TypeScript
            </li>
            <li className="flex gap-x-2 items-center ">
              <SiJavascript className="h-5 w-5 text-yellow-300" />
              JavaScript
            </li>
            <li className="flex gap-x-2 items-center ">
              <SiHtml5 className="h-5 w-5  text-orange-500" />
              HTML
            </li>
            <li className="flex gap-x-2 items-center ">
              <SiCss3 className="h-5 w-5 text-sky-600" />
              CSS
            </li>
          </ul>
        </article>
        <article className="flex-1 p-4 border dark:border-slate-50/20 border-slate-200 rounded-xl text-center">
          <p className="font-mono text-xl font-semibold">Back-end</p>
          <p className="text-sm py-4">
            Not my strongest suit, but have a good understanding.
          </p>
          <ul className="space-y-1 inline-block">
            <li className="flex gap-x-2 items-center ">
              <SiNodedotjs className="h-5 w-5 text-green-500" /> Node JS
            </li>
            <li className="flex gap-x-2 items-center ">
              <SiExpress className="h-5 w-5" /> Express JS
            </li>
            <li className="flex gap-x-2 items-center ">
              <SiMongodb className="h-5 w-5 text-green-600" /> MongoDB
            </li>
          </ul>
        </article>
        <article className="flex-1 p-4 border dark:border-slate-50/20 border-slate-200 rounded-xl text-center">
          <p className="font-mono text-xl font-semibold">Tools & Platform</p>
          <p className="text-sm py-4">Favorite tools to get things done.</p>
          <ul className="space-y-1 inline-block">
            <li className="flex gap-x-2 items-center ">
              <SiGit className="h-5 w-5 text-amber-600" /> Git
            </li>
            <li className="flex gap-x-2 items-center ">
              <SlSocialGithub className="h-5 w-5" /> GitHub
            </li>
            <li className="flex gap-x-2 items-center ">
              <SiVercel className="h-5 w-5" /> Vercel
            </li>
            <li className="flex gap-x-2 items-center ">
              <SiJirasoftware className="h-5 w-5 text-blue-600" /> Jira
            </li>
          </ul>
        </article>
      </div>
    </Container>
  );
}