import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { CursorSpotlight } from "@/components/cursor-spotlight";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Nav } from "@/components/nav";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <>
      <CursorSpotlight />
      <Nav />
      <main className="relative">
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
