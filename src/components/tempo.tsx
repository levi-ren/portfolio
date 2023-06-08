import Image from "next/image";
import { SiReact, SiReactquery, SiTailwindcss } from "react-icons/si";
import Anchor from "./anchor";
import ProjectNav from "./project-nav";

interface TempoProps {}

export default function Tempo(props: TempoProps) {
  return (
    <div className="flex flex-col-reverse sm:flex-row gap-4 items-center text-right">
      <div className="flex-1 w-full">
        <h2 className="text-4xl font-mono">Tempo</h2>
        <h3 className="text-lg  font-mono">Weather app</h3>
        <p className="text-sm py-6 ">
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
      <div className="flex-1 w-full ">
        <Anchor
          href="https://weather-app-v3-sepia.vercel.app/"
          target="_blank"
          className="relative block w-full aspect-video rounded-lg border border-white/20 shrink-0 shadow-lg"
          aria-label="Project Tempo demo link"
        >
          <Image
            src="/tempo.png"
            alt="tempo"
            fill
            className="object-contain rounded-lg"
          />
        </Anchor>
        <div className="flex gap-x-2 items-center justify-center py-2">
          <SiReact className="h-6 w-6 text-blue-300" title="React JS" />
          <SiTailwindcss className="h-6 w-6 text-blue-500" title="Tailwind" />
          <SiReactquery className="h-6 w-6 text-rose-500" title="React Query" />
        </div>
      </div>
    </div>
  );
}
