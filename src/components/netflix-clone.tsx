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
          href="https://parcel-v2.vercel.app/"
          target="_blank"
          className="relative block aspect-video w-full shrink-0 rounded-lg border border-white/20 shadow-lg transition-[border] duration-300"
          aria-label="Project Flixy demo link"
        >
          <Image
            src="/netflix-clone.png"
            alt="netflix-clone"
            fill
            className="rounded-lg object-contain"
          />
        </Anchor>
        <div className="flex items-center justify-center gap-x-2 py-2">
          <SiNextdotjs className="h-6 w-6" title="Next JS" />
          <SiTailwindcss className="h-6 w-6 text-blue-500" title="Tailwind" />
        </div>
      </div>

      <div className="w-full flex-1">
        <h2 className="font-mono text-4xl">Flixy</h2>
        <h3 className="font-mono  text-lg">Netflix Clone</h3>
        <p className="py-6 text-sm">
          Visual clone of the ever popular Netflix, delivering an immersive
          collection of content across genres, anytime, anywhere.
        </p>
        <ProjectNav
          projectName="Flixy"
          githubLink="https://github.com/levi-ren/netflix-clone"
          demoLink="https://netflix-clone-five-drab.vercel.app"
        />
      </div>
    </div>
  );
}
