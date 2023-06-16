import { SiAngularjs, SiReact } from "react-icons/si";
import { SlGraduation } from "react-icons/sl";
import Container from "./container";

interface ExperiencesProps {}

const Divider = () => {
  return (
    <div className="my-2 transition-[border] duration-300 dark:border-slate-50/20 border-zinc-400 border-b w-full " />
  );
};

export default function Experiences(props: ExperiencesProps) {
  return (
    <Container as="section" id="experiences" className="pt-28 px-2 space-y-8">
      <p className="text-7xl font-bold font-mono">Work:</p>
      <Container
        as="ol"
        className="relative before:content-[''] before:h-full before:bg-zinc-900 before:w-[3px] before:block before:absolute before:top-0 md:before:left-1/2 md:before:-translate-x-1/2 before:left-[26.5px] before:rounded-full before:dark:bg-white space-y-8 before:transition-[background-color] before:duration-300"
      >
        <Container
          as="li"
          maxWidth="lg"
          className="relative transition-[border] duration-300 dark:border-slate-50/20 border-zinc-400 px-2 flex md:text-right gap-x-2 flex-row-reverse md:flex-row"
        >
          <div className="flex-1">
            <time className="text-sm">January 2022 - Present</time>
            <h3 className="font-mono text-4xl">Senior Software Developer</h3>
            <p className="text-sm">• MDI Novare •</p>
            <Divider />
            <div className="text-sm space-y-2">
              React Developer
              <ul className="sm:p-2 list-disc md:list-none ml-4 md:ml-0">
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

          <span className="bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 rounded-full flex justify-center items-center mt-6 w-10 h-10 font-bold leading-none text-center transition-[background-color] duration-300">
            <SiReact className="h-7 w-7 transition-colors" />
          </span>

          <div className="flex-1 hidden md:block" />
        </Container>
        <Container
          as="li"
          maxWidth="lg"
          className="relative transition-[border] duration-300 dark:border-slate-50/20 border-zinc-400 px-2 flex gap-x-2 "
        >
          <div className="flex-1 hidden md:block" />
          <span className="bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 rounded-full flex justify-center items-center mt-6 w-10 h-10 font-bold leading-none text-center transition-[background-color] duration-300">
            <SiAngularjs className="h-7 w-7 transition-colors" />
          </span>
          <div className="flex-1">
            <time className="text-sm">April 2020</time>
            <h3 className="font-mono text-4xl">Software Developer</h3>
            <p className="text-sm">• Yoonet •</p>
            <Divider />
            <div className="text-sm space-y-2">
              Angular Developer / Team Lead
              <ul className="sm:p-2 list-disc md:list-none ml-4 md:ml-0">
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
          className="relative transition-[border] duration-300 dark:border-slate-50/20 border-zinc-400 px-2 flex md:text-right gap-x-2  flex-row-reverse md:flex-row"
        >
          <div className="flex-1">
            <time className="text-sm">August 2019</time>
            <h3 className="font-mono text-4xl">Associate Software Developer</h3>
            <p className="text-sm">• Quantum Crowd •</p>
            <Divider />
            <div className="text-sm space-y-2">
              Web 3 developer - Corda / React and Angular Developer
              <ul className="sm:p-2 list-disc md:list-none ml-4 md:ml-0">
                <li>Studied Corda and created Cordapps.</li>
                <li>Studied React and Angular 2</li>
                <li>Learned to integrate front-end to back-end apps</li>
              </ul>
            </div>
          </div>
          <span className="bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 rounded-full flex justify-center items-center mt-6 w-10 h-10 font-bold leading-none text-center transition-[background-color] duration-300">
            <SlGraduation className="h-7 w-7 transition-colors" />
          </span>
          <div className="flex-1 hidden md:block" />
        </Container>
      </Container>
    </Container>
  );
}
