import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Design from "@/components/sections/Design";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import BackgroundEffects from "@/components/sections/BackgroundEffects";

export default function Home() {
  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary/30 selection:text-primary relative overflow-hidden">
      {/* Interactive Particle canvas */}
      <BackgroundEffects />

      {/* Background grid */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] opacity-40" />
      
      {/* Dynamic ambient glow spots matching teal/purple theme */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/15 blur-[150px] z-0 pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/15 blur-[150px] z-0 pointer-events-none" />
      <div className="fixed top-[40%] left-[60%] w-[35%] h-[35%] rounded-full bg-indigo-500/5 blur-[130px] z-0 pointer-events-none" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Design />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <footer className="py-8 text-center text-muted-foreground text-sm border-t border-white/5 bg-background/50 backdrop-blur-sm">
          <p>© {new Date().getFullYear()} Hadhemi Rahmi. Built with React & Framer Motion.</p>
        </footer>
      </div>
    </div>
  );
}
