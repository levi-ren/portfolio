import Image from "next/image";
import { SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import Anchor from "./anchor";
import ProjectNav from "./project-nav";

interface ParcelProps {}

export default function Parcel(props: ParcelProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center">
      <div className="flex-1 w-full">
        <Anchor
          href="https://parcel-v2.vercel.app/"
          target="_blank"
          className="relative block w-full aspect-video rounded-lg border border-white/20 shrink-0 shadow-lg"
          aria-label="Project Parcel demo link"
        >
          <Image
            src="/parcel.png"
            alt="Parcel"
            fill
            className="object-contain rounded-lg"
          />
        </Anchor>
        <div className="flex gap-x-2 items-center justify-center py-2">
          <SiNextdotjs className="h-6 w-6" title="Next JS" />
          <div className="p-[1px] rounded-full border dark:border-slate-50/20 border-slate-400">
            <SiMongodb className="h-6 w-6 text-green-600" title="Mongo DB" />
          </div>
          <SiTailwindcss className="h-6 w-6 text-blue-500" title="Tailwind" />
        </div>
      </div>

      <div className="flex-1 w-full">
        <h2 className="text-4xl font-mono">Parcel</h2>
        <h3 className="text-lg  font-mono">eCommerce</h3>
        <p className="text-sm py-6">
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
