import Container from "./container";

interface ExperiencesProps {}

const Divider = () => {
  return (
    <div className="my-2 dark:border-slate-50/20 border-zinc-400 border-b w-full " />
  );
};

export default function Experiences(props: ExperiencesProps) {
  return (
    <section id="experiences" className="pt-28 px-2">
      <Container className="space-y-16">
        <p className="text-7xl font-bold font-mono text-right">Work:</p>

        <ol className="relative max-w-2xl m-auto pl-2">
          <li className="relative border-l dark:border-slate-50/20 border-zinc-400 pl-8 pr-2 pt-2">
            <time className="text-sm">January 2022</time>
            <h3 className="font-mono text-4xl">Senior Software Developer</h3>
            <p className="text-sm">• MDI Novare •</p>
            <Divider />
            <div className="text-sm space-y-2">
              React Developer
              <ul className="list-disc pl-6">
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
            <span className="bg-zinc-900 text-white dark:bg-white dark:text-black rounded-full p-1 -left-3 w-6 font-bold h-6 leading-none text-center absolute top-10">
              3
            </span>
          </li>
          <li className="relative border-l dark:border-slate-50/20 border-zinc-400 pl-8 pr-2 pt-16">
            <time className="text-sm">April 2020</time>
            <h3 className="font-mono text-4xl">Software Developer</h3>
            <p className="text-sm">• Yoonet •</p>
            <Divider />
            <div className="text-sm space-y-2">
              Angular Developer / Team Lead
              <ul className="list-disc pl-6">
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
            <span className="text-white bg-zinc-900 rounded-full p-1 -left-3 w-6 font-bold h-6 leading-none text-center absolute top-24 g-zinc-900  dark:bg-white dark:text-black ">
              2
            </span>
          </li>
          <li className="relative border-l dark:border-slate-50/20 border-zinc-400 pl-8 pr-2 pt-16">
            <time className="text-sm">August 2019</time>
            <h3 className="font-mono text-4xl">Associate Software Developer</h3>
            <p className="text-sm">• Quantum Crowd •</p>
            <Divider />
            <div className="text-sm space-y-2">
              Web 3 developer - Corda / React and Angular Developer
              <ul className="list-disc pl-6">
                <li>Studied Corda and created Cordapps.</li>
                <li>Studied React and Angular 2</li>
                <li>Learned to integrate front-end to back-end apps</li>
              </ul>
            </div>

            <span className="text-white bg-zinc-900 rounded-full p-1 -left-3 w-6 font-bold h-6 leading-none text-center absolute top-24 g-zinc-900  dark:bg-white dark:text-black ">
              1
            </span>
          </li>
        </ol>
      </Container>
    </section>
  );
}
