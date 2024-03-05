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
            src="/parcel.webp"
            alt="Parcel"
            fill
            title="Parcel Snapshot"
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

      <div className="w-full flex-1  text-sm">
        <h4 className="font-shadows text-4xl">Parcel</h4>
        <em className="font-shadows text-lg">eCommerce</em>
        <p className="pt-6">
          Rich and responsive e-commerce platform with a variety of products to
          choose from.
        </p>
        <ul className="ml-6 list-disc p-2">
          <li>Fullstack application using MongoDB</li>
          <li>Supports authentication via Next-Auth</li>
          <li>
            <em>*Work in progress*</em>
          </li>
        </ul>
        <ProjectNav
          projectName="Parcel"
          demoLink="https://parcel-v2.vercel.app/"
        />
      </div>
    </div>
  );
}
