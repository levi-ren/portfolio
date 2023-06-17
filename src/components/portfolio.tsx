import Image from "next/image";
import { SiNextdotjs } from "react-icons/si";
import Anchor from "./anchor";
import ProjectNav from "./project-nav";

interface PortfolioProps {}

export default function Portfolio(props: PortfolioProps) {
  return (
    <div className="flex flex-col-reverse items-center gap-4 text-right sm:flex-row">
      <div className="w-full flex-1">
        <h2 className="font-mono text-4xl">Portfolio</h2>
        <h3 className="font-mono  text-lg">Showcase</h3>
        <p className="py-6 text-sm ">
          Comprehensive representation of my professional and creative work.
        </p>
        <ProjectNav
          githubLink="https://github.com/levi-ren/portfolio"
          demoLink="https://www.levideang.dev/"
          right
          projectName="Portfolio"
        />
      </div>
      <div className="w-full flex-1 ">
        <Anchor
          href="/"
          className="relative block aspect-video w-full shrink-0 rounded-lg border border-white/20 shadow-lg transition-[border] duration-300"
          aria-label="Project Portfolio demo link"
        >
          <Image
            src="/portfolio.png"
            alt="portfolio"
            fill
            className="rounded-lg object-contain"
          />
        </Anchor>
        <div className="flex items-center justify-center gap-x-2 py-2">
          <SiNextdotjs className="h-6 w-6" title="Next JS" />
        </div>
      </div>
    </div>
  );
}
