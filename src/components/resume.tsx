import Image from "next/image";
import Link from "next/link";
import { SiCss3, SiHtml5, SiVite } from "react-icons/si";
import ProjectNav from "./project-nav";

interface ResumeProps {}

export default function Resume(props: ResumeProps) {
  return (
    <div className="flex flex-col-reverse sm:flex-row gap-4 items-center text-right">
      <div className="flex-1 w-full">
        <h2 className="text-4xl font-mono">Resume</h2>
        <h3 className="text-lg  font-mono">Online Document</h3>
        <p className="text-sm py-6 ">
          Simple, consice, and elegant. A digital version of my traditional
          resume.
        </p>
        <ProjectNav
          githubLink="https://github.com/levi-ren/digital-resume-v2"
          demoLink="https://digital-resume-v2-blond.vercel.app/"
          right
        />
      </div>
      <div className="flex-1 w-full ">
        <Link
          href="https://digital-resume-v2-blond.vercel.app/"
          target="_blank"
          className="relative block w-full aspect-[9/12.9] rounded-lg border border-white/20 shrink-0 shadow-lg"
        >
          <Image
            src="/resume.png"
            alt="resume"
            fill
            className="object-contain rounded-lg"
          />
        </Link>
        <div className="flex gap-x-2 items-center justify-center py-2">
          <SiHtml5 className="h-6 w-6 text-orange-600" title="HTML" />
          <SiCss3 className="h-6 w-6 text-blue-500" title="CSS" />
          <SiVite className="h-6 w-6 text-yellow-400" title="Vite" />
        </div>
      </div>
    </div>
  );
}
