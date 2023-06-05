import Container from "./container";

interface AboutMeProps {}

export default function AboutMe(props: AboutMeProps) {
  return (
    <section id="about-me" className="pt-28 px-2">
      <Container>
        <p className="text-7xl font-bold font-mono">Me:</p>
        <article className="max-w-md">
          I am Arron Levi Ren Deang, most people call me{" "}
          <h1 className="font-mono font-bold inline text-lg">Levi</h1>
          <br />
          A passionate front-end developer with over half a decade of experience
          <br />
          <br />
          Currently a Software Developer at{" "}
          <h1 className="font-mono font-bold inline text-lg">
            MDI Novare Inc.
          </h1>
          <br />
          <br />
          I create web-apps, translate UI/UX designs into reality, integrate
          APIs into functionality and mostly work with forms, inputs, and
          buttons.
          <br />
          <br />
        </article>
      </Container>
    </section>
  );
}
