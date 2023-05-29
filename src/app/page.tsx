import About from "@/components/about/about";
import Experience from "@/components/experience/experience";
import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4">
      <Hero />
      <About />
      <Experience />
      <Projects />
    </main>
  );
}
