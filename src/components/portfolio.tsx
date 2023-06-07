import Image from "next/image";
import Link from "next/link";
import { SiNextdotjs } from "react-icons/si";
import ProjectNav from "./project-nav";

interface PortfolioProps {}

export default function Portfolio(props: PortfolioProps) {
  return (
    <div className="flex flex-col-reverse sm:flex-row gap-4 items-center text-right">
      <div className="flex-1 w-full">
        <h2 className="text-4xl font-mono">Portfolio</h2>
        <h3 className="text-lg  font-mono">Showcase</h3>
        <p className="text-sm py-6 ">
          Comprehensive representation of my professional and creative work.
        </p>
        <ProjectNav
          githubLink="https://github.com/levi-ren/portfolio"
          demoLink="/"
          right
          projectName="Portfolio"
        />
      </div>
      <div className="flex-1 w-full ">
        <Link
          href="https://weather-app-v3-sepia.vercel.app/"
          target="_blank"
          className="relative block w-full aspect-video rounded-lg border border-white/20 shrink-0 shadow-lg"
        >
          <Image
            src="/portfolio.png"
            alt="portfolio"
            fill
            className="object-contain rounded-lg"
          />
        </Link>
        <div className="flex gap-x-2 items-center justify-center py-2">
          <SiNextdotjs className="h-6 w-6" title="Next JS" />
        </div>
      </div>
    </div>
  );
}
