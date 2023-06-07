import Link from "next/link";
import { VscGithubAlt, VscLinkExternal } from "react-icons/vsc";
import { twMerge } from "tailwind-merge";

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
          "dark:border-slate-50/20 border-zinc-900 border-b w-full ",
          right ? "" : "sm:hidden"
        )}
      />
      {githubLink && (
        <Link
          href={githubLink}
          target="_blank"
          aria-label={`Project ${projectName} Github link`}
        >
          <VscGithubAlt className="h-6 w-6" />
        </Link>
      )}
      <Link
        href={demoLink}
        target="_blank"
        aria-label={`Project ${projectName} demo link`}
      >
        <VscLinkExternal className="h-6 w-6" />
      </Link>
      <div
        className={twMerge(
          "dark:border-slate-50/20 border-zinc-900 border-b w-full ",
          !right ? "" : "sm:hidden"
        )}
      />
    </nav>
  );
}
