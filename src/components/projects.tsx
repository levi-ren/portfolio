import Container from "./container";
import NetflixClone from "./netflix-clone";
import Parcel from "./parcel";
import Portfolio from "./portfolio";
import Tempo from "./tempo";

interface ProjectsProps {}

export default function Projects(props: ProjectsProps) {
  return (
    <section id="projects" className="pt-28 px-2">
      <Container className="space-y-16">
        <p className="text-7xl font-bold font-mono">Projects:</p>
        <Portfolio />
        <Parcel />
        <Tempo />
        <NetflixClone />
      </Container>
    </section>
  );
}
