import AboutMe from "@/components/about-me";
import Aside from "@/components/aside";
import Experiences from "@/components/experiences";
import Hero from "@/components/hero";
import Nav from "@/components/nav";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <>
      <main id="main" className="min-h-screen relative">
        <Hero />
        <Nav />
        <AboutMe />
        <Experiences />
        <Projects />
      </main>
      <Aside />
    </>
  );
}
