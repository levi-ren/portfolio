import Container from "./container";

interface AboutMeProps {}

export default function AboutMe(props: AboutMeProps) {
  return (
    <Container as="section" id="about-me" className="px-2 pt-28 text-justify">
      <article className="max-w-md space-y-2">
        <div className="space-y-2 border-b border-zinc-400 pb-2 text-sm transition-[border] duration-300 dark:border-slate-50/20">
          <p className="font-mono text-7xl font-bold">Levi</p>
          <em>/ ˈlɛ vi / noun:</em>
          <ul className="ml-4 list-disc pl-4">
            <li>a lover of [iced] coffee</li>
            <li>hardcore chocolate addict</li>
            <li>developer by day, gamer at night</li>
          </ul>
        </div>
        <div className="space-y-2 px-4">
          <p>
            I am Arron Levi Ren Deang, most people call me
            <span className="font-mono text-lg font-bold"> Levi.</span>
          </p>
          <p>
            A very passionate front-end developer with 4 years of experience.
          </p>
          <p>
            I help clients and businesses develop their unicorn web applications
            into reality.
          </p>
          <p>
            I create web-apps, translate UI/UX designs into views, integrate
            APIs into functionality and mostly work with forms, inputs, and
            buttons.
          </p>
          <p>Basically a machine to turn coffee into code.</p>
        </div>
      </article>
    </Container>
  );
}
