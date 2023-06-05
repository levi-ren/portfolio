import AboutMe from "@/components/about-me";
import Hero from "@/components/hero";
import Nav from "@/components/nav";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Nav />
      <AboutMe />
      <Projects />
    </main>
  );
}
