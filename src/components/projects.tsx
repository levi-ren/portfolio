import Container from "./container";
import Parcel from "./parcel";
import Portfolio from "./portfolio";
import Resume from "./resume";
import NetflixClone from "./silver-screen";
import Tempo from "./tempo";

interface ProjectsProps {}

export default function Projects(props: ProjectsProps) {
  return (
    <section id="projects" className="px-2 pt-28">
      <Container className="space-y-16">
        <h3 className="font-shadows text-7xl font-bold">Projects:</h3>
        <Portfolio />
        <NetflixClone />
        <Tempo />
        <Parcel />
        <Resume />
      </Container>
    </section>
  );
}
