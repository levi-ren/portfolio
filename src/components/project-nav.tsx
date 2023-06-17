import { SlCloudDownload, SlSocialGithub } from "react-icons/sl";
import { VscLinkExternal } from "react-icons/vsc";
import { twMerge } from "tailwind-merge";
import Anchor from "./anchor";

interface ProjectNavProps {
  githubLink?: string;
  demoLink: string;
  right?: boolean;
  projectName: string;
}

export default function ProjectNav({
  demoLink,
  githubLink,
  right = false,
  projectName,
}: ProjectNavProps) {
  return (
    <nav className="mt-2 flex items-center gap-x-2">
      <div
        className={twMerge(
          "w-full border-b border-zinc-400 transition-[border] duration-300 dark:border-slate-50/20 sm:w-16"
        )}
      />
      {githubLink && (
        <Anchor
          href={githubLink}
          target="_blank"
          aria-label={`Project ${projectName} Github link`}
          title={`${projectName} repository`}
        >
          <SlSocialGithub className="h-6 w-6" />
        </Anchor>
      )}
      <Anchor
        href={demoLink}
        target="_blank"
        aria-label={`Project ${projectName} demo link`}
        title={`${projectName} demo`}
      >
        <VscLinkExternal className="h-6 w-6" />
      </Anchor>
      {projectName === "Resume" && (
        <Anchor
          rel="noopener noreferrer"
          href="/Levi_Deang_Resume.pdf"
          target="_blank"
          aria-label={`Download ${projectName} link`}
          title={`Download my ${projectName}`}
          download
        >
          <SlCloudDownload className="h-6 w-6" />
        </Anchor>
      )}
      <div
        className={twMerge(
          "w-full border-b border-zinc-400 transition-[border] duration-300 dark:border-slate-50/20",
          !right ? "" : "sm:hidden"
        )}
      />
    </nav>
  );
}
