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
      <h3 className="font-mono text-7xl font-bold">Work:</h3>
      <Container
        as="ol"
        className="relative space-y-8 before:absolute before:left-[26.5px] before:top-0 before:block before:h-full before:w-[3px] before:rounded-full before:bg-zinc-900 before:transition-[background-color] before:duration-300 before:content-[''] before:dark:bg-white md:before:left-1/2 md:before:-translate-x-1/2"
      >
        <Container
          as="li"
          maxWidth="lg"
          className="relative flex flex-row-reverse gap-x-2 border-zinc-400 px-2 transition-[border] duration-300 after:absolute after:left-64 after:top-[91px] after:z-20 after:h-[2px] after:w-20 after:bg-gradient-to-l  after:from-transparent after:via-sky-500 after:to-transparent after:transition-all after:content-[''] hover:after:left-32 dark:border-slate-50/20 dark:after:via-rose-500 md:flex-row md:text-right"
        >
          <div className="flex-1">
            <time className="text-sm">January 2022 - Present</time>
            <h3 className="font-mono text-4xl">Lead Developer</h3>
            <p className="text-sm">• MDI Novare •</p>
            <Divider />
            <div className="space-y-2 text-sm">
              React Developer
              <p className="ml-[unset] max-w-sm sm:p-2 md:ml-auto">
                Developed high quality production code for a number of clients
                and worked closely with techleads and project owners and
                provided technical solutions to fulfill business requirements.
                Also lead front-end development through close collaborations,
                knowledge transfers, and mentorship.
              </p>
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
              <p className="ml-[unset] max-w-sm sm:p-2 md:mr-auto">
                Translated client&apos;s legacy desktop app to a robust web
                application; and lead a team of developers and provided
                mentorship in composing web components. Mostly maintained said
                application and added new high quality features.
              </p>
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
              <p className="ml-[unset] max-w-sm sm:p-2 md:ml-auto">
                Newbie developer. Learned the basics of software development,
                including both front-end and back-end development. Created
                meaningful case study projects in integrating both ends.
              </p>
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
