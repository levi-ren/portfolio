import AboutMe from "@/components/about-me";
import Aside from "@/components/aside";
import Experiences from "@/components/experiences";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <>
      <main id="main" className="min-h-screen relative">
        <Hero />
        <Nav />
        <AboutMe />
        <Experiences />
      </main>
      <Aside />
      <Footer />
    </>
  );
}
