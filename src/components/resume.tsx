import Image from "next/image";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import Anchor from "./anchor";
import ProjectNav from "./project-nav";

interface ResumeProps {}

export default function Resume(props: ResumeProps) {
  return (
    <div className="flex flex-col-reverse sm:flex-row gap-4 items-center text-right">
      <div className="flex-1 w-full">
        <h2 className="text-4xl font-mono">Resume</h2>
        <h3 className="text-lg  font-mono">Digital Abstract</h3>
        <p className="text-sm py-6 ">
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
      <div className="flex-1 w-full ">
        <Anchor
          href="https://resume.levideang.dev/"
          target="_blank"
          className="relative block w-full aspect-video rounded-lg border border-white/20 shrink-0 shadow-lg"
          aria-label="Project Resume demo link"
        >
          <Image
            src="/resume.png"
            alt="resume"
            fill
            className="object-contain rounded-lg"
          />
        </Anchor>
        <div className="flex gap-x-2 items-center justify-center py-2">
          <SiNextdotjs className="h-6 w-6" title="Next JS" />
          <SiTailwindcss className="h-6 w-6 text-blue-500" title="Tailwind" />
        </div>
      </div>
    </div>
  );
}
