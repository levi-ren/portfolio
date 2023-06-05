import Container from "./container";

interface ProjectsProps {}

export default function Projects(props: ProjectsProps) {
  return (
    <section id="projects" className="pt-28 px-2">
      <Container className="space-y-16">
        <p className="text-7xl font-bold font-mono text-right">My projects:</p>
        <div className="flex gap-4 items-center ">
          <div className="flex-1 text-right">
            <h2 className="text-4xl font-mono">Portfolio</h2>
            <h3 className="text-lg font-mono">Showcase</h3>
            <p className="text-xs">
              Comprehensive representation of my professional and creative work.
            </p>
          </div>
          <div className="flex-1 aspect-video bg-slate-200 animate-pulse rounded-lg"></div>
        </div>
        <div className="flex gap-4 items-center ">
          <div className="flex-1 aspect-video bg-slate-200 animate-pulse rounded-lg"></div>
          <div className="flex-1">
            <h2 className="text-4xl font-mono">Parcel</h2>
            <h3 className="text-lg font-mono">eCommerce</h3>
            <p className="text-xs">
              Rich and responsive e-commerce platform with a variety of products
              to choose from.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center ">
          <div className="flex-1 text-right">
            <h2 className="text-4xl font-mono">Resume</h2>
            <h3 className="text-lg font-mono">Online CV</h3>
            <p className="text-xs">Digital version of my traditional resume</p>
          </div>
          <div className="flex-1 aspect-[1/1.3] bg-slate-200 animate-pulse rounded-lg"></div>
        </div>
      </Container>
    </section>
  );
}
