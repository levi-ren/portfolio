import Image from "next/image";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import Anchor from "./anchor";
import ProjectNav from "./project-nav";

interface ResumeProps {}

export default function Resume(props: ResumeProps) {
  return (
    <div className="flex flex-col-reverse items-center gap-4 text-right sm:flex-row">
      <div className="w-full flex-1">
        <h2 className="font-mono text-4xl">Resume</h2>
        <h3 className="font-mono  text-lg">Digital Abstract</h3>
        <p className="py-6 text-sm ">
          Simple, consice, and elegant. A digital version of my traditional
          resume.
        </p>
        <ProjectNav
          githubLink="https://github.com/levi-ren/resume"
          demoLink="https://resume.levideang.dev/"
          projectName="Resume"
          right
        />
      </div>
      <div className="w-full flex-1 ">
        <Anchor
          href="https://resume.levideang.dev/"
          target="_blank"
          className="relative block aspect-video w-full shrink-0 rounded-lg border border-white/20 shadow-lg transition-[border] duration-300"
          aria-label="Project Resume demo link"
        >
          <Image
            src="/resume.png"
            alt="resume"
            fill
            className="rounded-lg object-contain"
          />
        </Anchor>
        <div className="flex items-center justify-center gap-x-2 py-2">
          <SiNextdotjs className="h-6 w-6" title="Next JS" />
          <SiTailwindcss className="h-6 w-6 text-blue-500" title="Tailwind" />
        </div>
      </div>
    </div>
  );
}
