import Image from "next/image";
import { SiNextdotjs } from "react-icons/si";
import Anchor from "./anchor";
import ProjectNav from "./project-nav";

interface PortfolioProps {}

export default function Portfolio(props: PortfolioProps) {
  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row">
      <div className="w-full flex-1 ">
        <Anchor
          href="/"
          className="relative block aspect-video w-full shrink-0 rounded-lg border border-white/20 shadow-lg transition-[border] duration-300 after:absolute after:-right-[2px] after:top-16 after:z-20 after:h-20 after:w-[2px] after:bg-gradient-to-t after:from-transparent after:via-sky-500 after:to-transparent after:transition-all after:content-[''] hover:after:top-32 dark:after:via-rose-500"
          aria-label="Project Portfolio demo link"
        >
          <Image
            src="/portfolio.webp"
            alt="portfolio"
            fill
            title="Portfolio Snapshot"
            className="rounded-lg object-contain"
          />
        </Anchor>
        <div className="flex items-center justify-center gap-x-2 py-2">
          <SiNextdotjs className="h-6 w-6" title="Next JS" />
        </div>
      </div>

      <div className="w-full flex-1 text-sm">
        <h4 className="font-shadows text-4xl">Portfolio</h4>
        <em className="font-shadows text-lg">Personal website</em>
        <p className="pt-6">
          Comprehensive representation of my professional and creative work.
        </p>
        <ul className="ml-6 list-disc p-2">
          <li>Supports theme switching</li>
          <li>Fully responsive on all devices</li>
        </ul>
        <ProjectNav
          githubLink="https://github.com/levi-ren/portfolio"
          demoLink="https://www.levideang.dev/"
          projectName="Portfolio"
        />
      </div>
    </div>
  );
}
