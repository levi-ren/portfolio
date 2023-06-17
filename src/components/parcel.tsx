import Image from "next/image";
import { SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import Anchor from "./anchor";
import ProjectNav from "./project-nav";

interface ParcelProps {}

export default function Parcel(props: ParcelProps) {
  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row">
      <div className="w-full flex-1">
        <Anchor
          href="https://parcel-v2.vercel.app/"
          target="_blank"
          className="relative block aspect-video w-full shrink-0 rounded-lg border border-white/20 shadow-lg transition-[border] duration-300"
          aria-label="Project Parcel demo link"
        >
          <Image
            src="/parcel.png"
            alt="Parcel"
            fill
            className="rounded-lg object-contain"
          />
        </Anchor>
        <div className="flex items-center justify-center gap-x-2 py-2">
          <SiNextdotjs className="h-6 w-6" title="Next JS" />
          <div className="rounded-full border border-slate-400 p-[1px] transition-[border] duration-300 dark:border-slate-50/20">
            <SiMongodb className="h-6 w-6 text-green-600" title="Mongo DB" />
          </div>
          <SiTailwindcss className="h-6 w-6 text-blue-500" title="Tailwind" />
        </div>
      </div>

      <div className="w-full flex-1">
        <h2 className="font-mono text-4xl">Parcel</h2>
        <h3 className="font-mono  text-lg">eCommerce</h3>
        <p className="py-6 text-sm">
          Rich and responsive e-commerce platform with a variety of products to
          choose from.
        </p>
        <ProjectNav
          projectName="Parcel"
          demoLink="https://parcel-v2.vercel.app/"
        />
      </div>
    </div>
  );
}
