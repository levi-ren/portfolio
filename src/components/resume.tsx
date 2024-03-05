import Image from "next/image";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import Anchor from "./anchor";
import ProjectNav from "./project-nav";

interface ResumeProps {}

export default function Resume(props: ResumeProps) {
  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row">
      <div className="w-full flex-1 ">
        <Anchor
          href="https://resume.levideang.dev/"
          target="_blank"
          className="relative block aspect-video w-full shrink-0 rounded-lg border border-white/20 shadow-lg transition-[border] duration-300"
          aria-label="Project Resume demo link"
        >
          <Image
            src="/resume.webp"
            alt="resume"
            fill
            title="Resume Snapshot"
            className="rounded-lg object-contain"
          />
        </Anchor>
        <div className="flex items-center justify-center gap-x-2 py-2">
          <SiNextdotjs className="h-6 w-6" title="Next JS" />
          <SiTailwindcss className="h-6 w-6 text-blue-500" title="Tailwind" />
        </div>
      </div>

      <div className="w-full flex-1 text-sm">
        <h4 className="font-shadows text-4xl">Resume</h4>
        <em className="font-shadows  text-lg">Digital Abstract</em>
        <p className="pt-6">
          Simple and consice. A digital version of my traditional resume.
        </p>
        <ul className="ml-6 list-disc p-2">
          <li>Responsive documentation</li>
          <li>Downloadable PDF version</li>
        </ul>
        <ProjectNav
          githubLink="https://github.com/levi-ren/resume"
          demoLink="https://resume.levideang.dev/"
          projectName="Resume"
        />
      </div>
    </div>
  );
}
