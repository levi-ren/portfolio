import Image from "next/image";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import Anchor from "./anchor";
import ProjectNav from "./project-nav";

interface NetflixCloneProps {}

export default function SilverScreen(props: NetflixCloneProps) {
  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row">
      <div className="w-full flex-1 ">
        <Anchor
          href="https://silver-screen-nu.vercel.app"
          target="_blank"
          className="relative block aspect-video w-full shrink-0 rounded-lg border border-white/20 shadow-lg transition-[border] duration-300"
          aria-label="Project Silver Screen demo link"
        >
          <Image
            src="/silver-screen.webp"
            alt="silver-screen"
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
        <h4 className="font-shadows text-4xl">Silver Screen</h4>
        <em className="font-shadows  text-lg">Movie and TV streaming site</em>
        <p className="pt-6">
          Free streaming platform for movies and TV shows with seamless viewing
          experience powered by cutting-edge streaming technology
        </p>
        <ul className="ml-6 list-disc p-2">
          <li>No subscription fees or hidden costs</li>
          <li>Integration with TMDB for comprehensive insights and details</li>
          <li>
            Video streaming functionality facilitated through a third-party
            library
          </li>
        </ul>
        <ProjectNav
          projectName="Silver Screen"
          demoLink="https://silver-screen-nu.vercel.app"
          githubLink="https://github.com/levi-ren/silver-screen"
        />
      </div>
    </div>
  );
}
