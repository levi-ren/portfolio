import AboutMe from "@/components/about-me";
import Hero from "@/components/hero";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Nav />
      <AboutMe />
    </main>
  );
}
