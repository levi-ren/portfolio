import { SlSocialGithub } from "react-icons/sl";
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
    <nav className="flex items-center gap-x-2">
      <div
        className={twMerge(
          "w-full border-b border-zinc-400 transition-[border] duration-300 dark:border-slate-50/20",
          right ? "" : "sm:hidden"
        )}
      />
      {githubLink && (
        <Anchor
          href={githubLink}
          target="_blank"
          aria-label={`Project ${projectName} Github link`}
        >
          <SlSocialGithub className="h-6 w-6" />
        </Anchor>
      )}
      <Anchor
        href={demoLink}
        target="_blank"
        aria-label={`Project ${projectName} demo link`}
      >
        <VscLinkExternal className="h-6 w-6" />
      </Anchor>
      <div
        className={twMerge(
          "w-full border-b border-zinc-400 transition-[border] duration-300 dark:border-slate-50/20",
          !right ? "" : "sm:hidden"
        )}
      />
    </nav>
  );
}
