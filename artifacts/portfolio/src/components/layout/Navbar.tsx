import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Design", href: "#design" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple scroll spy
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 150)) {
          current = section;
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: (element as HTMLElement).offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-slate-950/60 backdrop-blur-xl border-white/5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.3)]" 
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
          className="text-2xl font-display font-bold tracking-tighter text-foreground group"
        >
          &lt;HR <span className="text-primary group-hover:text-accent transition-colors duration-300">/</span>&gt;
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
              className={cn(
                "text-sm font-mono transition-colors relative py-1",
                activeSection === item.href.substring(1) ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
              {activeSection === item.href.substring(1) && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-accent rounded-full shadow-[0_0_8px_rgba(170,100,255,0.5)]"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
            </a>
          ))}
          <button 
            onClick={() => scrollTo("#contact")}
            className="ml-4 px-5 py-2 text-sm font-mono font-bold text-foreground bg-primary/20 hover:bg-primary text-slate-950 rounded-lg border border-primary/30 hover:border-primary transition-all duration-300 hover:scale-105 active:scale-95 hover:glow-effect flex items-center gap-2 cursor-pointer"
          >
            Hire Me
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col py-4 px-6 gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                  className={cn(
                    "text-lg font-mono py-2 border-b border-white/5",
                    activeSection === item.href.substring(1) ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
