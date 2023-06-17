import Container from "./container";
import NetflixClone from "./netflix-clone";
import Parcel from "./parcel";
import Portfolio from "./portfolio";
import Resume from "./resume";
import Tempo from "./tempo";

interface ProjectsProps {}

export default function Projects(props: ProjectsProps) {
  return (
    <section id="projects" className="px-2 pt-28">
      <Container className="space-y-16">
        <h3 className="font-mono text-7xl font-bold">Projects:</h3>
        <Portfolio />
        <Parcel />
        <Tempo />
        <NetflixClone />
        <Resume />
      </Container>
    </section>
  );
}
