import Image from "next/image";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import Anchor from "./anchor";
import ProjectNav from "./project-nav";

interface NetflixCloneProps {}

export default function NetflixClone(props: NetflixCloneProps) {
  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row">
      <div className="w-full flex-1 ">
        <Anchor
          href="https://netflix-clone-five-drab.vercel.app"
          target="_blank"
          className="relative block aspect-video w-full shrink-0 rounded-lg border border-white/20 shadow-lg transition-[border] duration-300"
          aria-label="Project Flixy demo link"
        >
          <Image
            src="/netflix-clone.png"
            alt="netflix-clone"
            fill
            title="Flixy Snapshot"
            className="rounded-lg object-contain"
          />
        </Anchor>
        <div className="flex items-center justify-center gap-x-2 py-2">
          <SiNextdotjs className="h-6 w-6" title="Next JS" />
          <SiTailwindcss className="h-6 w-6 text-blue-500" title="Tailwind" />
        </div>
      </div>

      <div className="w-full flex-1 text-sm">
        <h4 className="font-mono text-4xl">Flixy</h4>
        <em className="font-mono  text-lg">Netflix Clone</em>
        <p className="pt-6">
          Visual clone of the ever popular Netflix, delivering an immersive
          collection of content across genres, anytime, anywhere.
        </p>
        <ul className="ml-6 list-disc p-2">
          <li>Displays movies and TV shows currently streaming on Netflix</li>
          <li>1 : 1 visual copy</li>
          <li>
            <em>*Work in progress*</em>
          </li>
        </ul>
        <ProjectNav
          projectName="Flixy"
          githubLink="https://github.com/levi-ren/netflix-clone"
          demoLink="https://netflix-clone-five-drab.vercel.app"
        />
      </div>
    </div>
  );
}
