import Container from "./container";

interface AboutMeProps {}

export default function AboutMe(props: AboutMeProps) {
  return (
    <Container as="section" id="about-me" className="pt-28 px-2 text-justify">
      <article className="max-w-md space-y-2">
        <div className="text-sm border-b dark:border-slate-50/20 border-zinc-400 pb-2 space-y-2">
          <p className="text-7xl font-bold font-mono">Levi</p>
          <em>/ ˈlɛ vi / noun:</em>
          <ul className="list-disc pl-4 ml-4">
            <li>a lover of [iced] coffee</li>
            <li>hardcore chocolate addict</li>
            <li>developer by day, gamer at night</li>
          </ul>
        </div>
        <div className="space-y-2 px-4">
          <p>
            I am Arron Levi Ren Deang, most people call me
            <span className="font-mono font-bold text-lg"> Levi.</span>
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
          <p>Simply put - I turn coffe into code.</p>
        </div>
      </article>
    </Container>
  );
}
