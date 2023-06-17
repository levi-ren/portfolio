import AboutMe from "@/components/about-me";
import Aside from "@/components/aside";
import Contact from "@/components/contact";
import Experiences from "@/components/experiences";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Nav from "@/components/nav";
import Projects from "@/components/projects";
import TechStack from "@/components/tech-stack";

export const runtime = "edge";

export default function Home() {
  return (
    <>
      <main id="main" className="relative min-h-screen">
        <Hero />
        <Nav />
        <AboutMe />
        <TechStack />
        <Experiences />
        <Projects />
        <Contact />
      </main>
      <Aside />
      <Footer />
    </>
  );
}
