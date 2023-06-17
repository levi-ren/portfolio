import { SiAngularjs, SiReact } from "react-icons/si";
import { SlGraduation } from "react-icons/sl";
import Container from "./container";

interface ExperiencesProps {}

const Divider = () => {
  return (
    <div className="my-2 w-full border-b border-zinc-400 transition-[border] duration-300 dark:border-slate-50/20 " />
  );
};

export default function Experiences(props: ExperiencesProps) {
  return (
    <Container as="section" id="experiences" className="space-y-8 px-2 pt-28">
      <p className="font-mono text-7xl font-bold">Work:</p>
      <Container
        as="ol"
        className="relative space-y-8 before:absolute before:left-[26.5px] before:top-0 before:block before:h-full before:w-[3px] before:rounded-full before:bg-zinc-900 before:transition-[background-color] before:duration-300 before:content-[''] before:dark:bg-white md:before:left-1/2 md:before:-translate-x-1/2"
      >
        <Container
          as="li"
          maxWidth="lg"
          className="relative flex flex-row-reverse gap-x-2 border-zinc-400 px-2 transition-[border] duration-300 dark:border-slate-50/20 md:flex-row md:text-right"
        >
          <div className="flex-1">
            <time className="text-sm">January 2022 - Present</time>
            <h3 className="font-mono text-4xl">Senior Software Developer</h3>
            <p className="text-sm">• MDI Novare •</p>
            <Divider />
            <div className="space-y-2 text-sm">
              React Developer
              <ul className="ml-4 list-disc sm:p-2 md:ml-0 md:list-none">
                <li>Develop new web-app features.</li>
                <li>Translated UI/UX designs to HTML components.</li>
                <li>Maintained and improved existing code base.</li>
                <li>
                  Worked closely with other developers and other team members to
                  locate and fix issues.
                </li>
                <li>
                  Discuss and estimate user stories with team members and
                  client.
                </li>
              </ul>
            </div>
          </div>

          <span className="mt-6 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-center font-bold leading-none text-white transition-[background-color] duration-300 dark:bg-white dark:text-zinc-900">
            <SiReact className="h-7 w-7 transition-colors" />
          </span>

          <div className="hidden flex-1 md:block" />
        </Container>
        <Container
          as="li"
          maxWidth="lg"
          className="relative flex gap-x-2 border-zinc-400 px-2 transition-[border] duration-300 dark:border-slate-50/20 "
        >
          <div className="hidden flex-1 md:block" />
          <span className="mt-6 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-center font-bold leading-none text-white transition-[background-color] duration-300 dark:bg-white dark:text-zinc-900">
            <SiAngularjs className="h-7 w-7 transition-colors" />
          </span>
          <div className="flex-1">
            <time className="text-sm">April 2020</time>
            <h3 className="font-mono text-4xl">Software Developer</h3>
            <p className="text-sm">• Yoonet •</p>
            <Divider />
            <div className="space-y-2 text-sm">
              Angular Developer / Team Lead
              <ul className="ml-4 list-disc sm:p-2 md:ml-0 md:list-none">
                <li>Lead a team of 4 developers for an Australian client.</li>
                <li>
                  Translated client&apos;s existing desktop app to a web-app.
                </li>
                <li>
                  Created, maintained, and integrated new features to the
                  web-app.
                </li>
              </ul>
            </div>
          </div>
        </Container>
        <Container
          as="li"
          maxWidth="lg"
          className="relative flex flex-row-reverse gap-x-2 border-zinc-400 px-2 transition-[border] duration-300 dark:border-slate-50/20  md:flex-row md:text-right"
        >
          <div className="flex-1">
            <time className="text-sm">August 2019</time>
            <h3 className="font-mono text-4xl">Associate Software Developer</h3>
            <p className="text-sm">• Quantum Crowd •</p>
            <Divider />
            <div className="space-y-2 text-sm">
              Web 3 developer - Corda / React and Angular Developer
              <ul className="ml-4 list-disc sm:p-2 md:ml-0 md:list-none">
                <li>Studied Corda and created Cordapps.</li>
                <li>Studied React and Angular 2</li>
                <li>Learned to integrate front-end to back-end apps</li>
              </ul>
            </div>
          </div>
          <span className="mt-6 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-center font-bold leading-none text-white transition-[background-color] duration-300 dark:bg-white dark:text-zinc-900">
            <SlGraduation className="h-7 w-7 transition-colors" />
          </span>
          <div className="hidden flex-1 md:block" />
        </Container>
      </Container>
    </Container>
  );
}
