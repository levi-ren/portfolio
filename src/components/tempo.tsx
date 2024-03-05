import Image from "next/image";
import { SiReact, SiReactquery, SiTailwindcss } from "react-icons/si";
import Anchor from "./anchor";
import ProjectNav from "./project-nav";

interface TempoProps {}

export default function Tempo(props: TempoProps) {
  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row">
      <div className="w-full flex-1 ">
        <Anchor
          href="https://weather-app-v3-sepia.vercel.app/"
          target="_blank"
          className="relative block aspect-video w-full shrink-0 rounded-lg border border-white/20 shadow-lg transition-[border] duration-300"
          aria-label="Project Tempo demo link"
        >
          <Image
            src="/tempo.webp"
            alt="tempo"
            fill
            title="Tempo Snapshot"
            className="rounded-lg object-contain"
          />
        </Anchor>
        <div className="flex items-center justify-center gap-x-2 py-2">
          <SiReact className="h-6 w-6 text-sky-400" title="React JS" />
          <SiTailwindcss className="h-6 w-6 text-blue-500" title="Tailwind" />
          <SiReactquery className="h-6 w-6 text-rose-500" title="React Query" />
        </div>
      </div>

      <div className="w-full flex-1  text-sm ">
        <h4 className="font-shadows text-4xl">Tempo</h4>
        <em className="font-shadows  text-lg">Weather app</em>
        <p className="pt-6">
          Sleek weather app, offering real-time updates, immersive visuals, and
          personalized forecasts for your everyday adventures.
        </p>
        <ul className="ml-6 list-disc p-2">
          <li>Displays current and forcasted weather</li>
          <li>Supports location suggestions</li>
          <li>Toggle for temparature conversion</li>
        </ul>
        <ProjectNav
          githubLink="https://github.com/levi-ren/weather-app-v3"
          demoLink="https://weather-app-v3-sepia.vercel.app/"
          projectName="Tempo"
        />
      </div>
    </div>
  );
}
