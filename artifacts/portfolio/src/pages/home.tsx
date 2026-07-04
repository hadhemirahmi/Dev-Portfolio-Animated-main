import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Design from "@/components/sections/Design";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  useEffect(() => {
    // Light mode
    document.documentElement.classList.remove("dark");
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary/30 selection:text-primary relative overflow-hidden">
      {/* Background grid */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] opacity-20" />
      
      {/* Dynamic ambient glow */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px] z-0 pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px] z-0 pointer-events-none" />

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
