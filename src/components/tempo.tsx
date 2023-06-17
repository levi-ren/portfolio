import Image from "next/image";
import { SiReact, SiReactquery, SiTailwindcss } from "react-icons/si";
import Anchor from "./anchor";
import ProjectNav from "./project-nav";

interface TempoProps {}

export default function Tempo(props: TempoProps) {
  return (
    <div className="flex flex-col-reverse items-center gap-4 text-right sm:flex-row">
      <div className="w-full flex-1">
        <h2 className="font-mono text-4xl">Tempo</h2>
        <h3 className="font-mono  text-lg">Weather app</h3>
        <p className="py-6 text-sm ">
          Sleek weather app, offering real-time updates, immersive visuals, and
          personalized forecasts for your everyday adventures.
        </p>
        <ProjectNav
          githubLink="https://github.com/levi-ren/weather-app-v3"
          demoLink="https://weather-app-v3-sepia.vercel.app/"
          projectName="Tempo"
          right
        />
      </div>
      <div className="w-full flex-1 ">
        <Anchor
          href="https://weather-app-v3-sepia.vercel.app/"
          target="_blank"
          className="relative block aspect-video w-full shrink-0 rounded-lg border border-white/20 shadow-lg transition-[border] duration-300"
          aria-label="Project Tempo demo link"
        >
          <Image
            src="/tempo.png"
            alt="tempo"
            fill
            className="rounded-lg object-contain"
          />
        </Anchor>
        <div className="flex items-center justify-center gap-x-2 py-2">
          <SiReact className="h-6 w-6 text-sky-400" title="React JS" />
          <SiTailwindcss className="h-6 w-6 text-blue-500" title="Tailwind" />
          <SiReactquery className="h-6 w-6 text-rose-500" title="React Query" />
        </div>
      </div>
    </div>
  );
}
