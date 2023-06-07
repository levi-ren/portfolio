import Image from "next/image";
import Link from "next/link";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import ProjectNav from "./project-nav";

interface NetflixCloneProps {}

export default function NetflixClone(props: NetflixCloneProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center">
      <div className="flex-1 w-full ">
        <Link
          href="https://parcel-v2.vercel.app/"
          target="_blank"
          className="relative block w-full aspect-video rounded-lg border border-white/20 shrink-0 shadow-lg"
        >
          <Image
            src="/netflix-clone.png"
            alt="netflix-clone"
            fill
            className="object-contain rounded-lg"
          />
        </Link>
        <div className="flex gap-x-2 items-center justify-center py-2">
          <SiNextdotjs className="h-6 w-6" title="Next JS" />
          <SiTailwindcss className="h-6 w-6 text-blue-500" title="Tailwind" />
        </div>
      </div>

      <div className="flex-1 w-full">
        <h2 className="text-4xl font-mono">Flixy</h2>
        <h3 className="text-lg  font-mono">Netflix Clone</h3>
        <p className="text-sm py-6">
          Visual clone of the ever popular Netflix, delivering an immersive
          collection of content across genres, anytime, anywhere.
        </p>
        <ProjectNav
          githubLink="https://github.com/levi-ren/netflix-clone"
          demoLink="https://netflix-clone-five-drab.vercel.app"
        />
      </div>
    </div>
  );
}
