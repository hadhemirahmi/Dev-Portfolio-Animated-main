import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ArrowRight, Github, Linkedin, Cpu, Sparkles } from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("profile.ts");
  const [typedCode, setTypedCode] = useState("");
  
  const systemLines = [
    "> Loading system configuration...",
    "> Establishing neural bridges...",
    "> Injecting AI components...",
    "> Compilation successful. Hello world!"
  ];

  const codeString = `const developer = {
  name: "Hadhemi Rahmi",
  role: "Full-Stack & AI",
  skills: ["React", "Node.js", "Flutter", "AI APIs"],
  status: "Open to opportunities",
  location: "Sfax, Tunisia"
};`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < codeString.length) {
        setTypedCode((prev) => prev + codeString.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 15); // Adjust typing speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-[100dvh] flex items-center justify-center pt-24 relative overflow-hidden">
      {/* Decorative large backdrop blur sphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-primary/5 rounded-full blur-[160px] pointer-events-none z-0" />
      
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Info Column */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary w-fit font-mono text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span>Prête pour de nouveaux défis</span>
          </div>
          
          {/* Main Titles */}
          <div className="space-y-2">
            <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
              <Cpu size={14} className="text-primary animate-spin" style={{ animationDuration: '6s' }} /> Développeuse Full-Stack / IA
            </h2>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold leading-tight tracking-tight">
              Hadhemi <span className="text-gradient">Rahmi</span>
            </h1>
          </div>
          
          {/* Biography Paragraph */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Je conçois des applications web et mobiles modernes, connectées à des modèles d'intelligence artificielle, alliant performance technique et interfaces soignées.
          </p>

          {/* Interactive CTAs */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            
            <button 
              onClick={() => {
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-slate-950 font-mono font-bold hover:scale-105 active:scale-95 transition-all hover:glow-effect-accent flex items-center gap-2 cursor-pointer duration-300"
            >
              Voir mes projets <ArrowRight size={16} />
            </button>
            
            <button 
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/40 text-foreground font-mono font-medium hover:bg-primary/5 hover:scale-105 active:scale-95 transition-all cursor-pointer duration-300"
            >
              Me contacter
            </button>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-5 mt-6 border-t border-white/5 pt-6 w-fit">
            <a 
              href="https://github.com/hadhemirahmi/" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3 rounded-xl bg-white/5 border border-white/5 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 hover:scale-110 shadow-lg shadow-black/10"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/hadhemi-rahmi-9077962b8/?skipRedirect=true" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3 rounded-xl bg-white/5 border border-white/5 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 hover:scale-110 shadow-lg shadow-black/10"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>

        {/* Right IDE Block */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 relative w-full max-w-xl mx-auto lg:ml-auto"
        >
          {/* Deep blur background glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-accent/5 to-transparent rounded-2xl blur-3xl transform rotate-6 scale-105 pointer-events-none" />
          
          {/* Main IDE Window Wrapper */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-950/85 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            
            {/* IDE Window Header */}
            <div className="flex items-center justify-between px-4 py-3.5 bg-slate-900/90 border-b border-white/5">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm shadow-black/20" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm shadow-black/20" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm shadow-black/20" />
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground/80 select-none">
                <Terminal size={12} className="text-primary" />
                <span>workspace - Hadhemi IDE</span>
              </div>
              <div className="w-12" /> {/* Spacer */}
            </div>

            {/* Editor Tabs */}
            <div className="flex bg-slate-950 border-b border-white/5 text-xs font-mono select-none overflow-x-auto">
              {[
                { name: "profile.ts", active: true },
                { name: "skills.json", active: false },
                { name: "system.log", active: false }
              ].map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`px-4 py-2 border-r border-white/5 flex items-center gap-2 transition-colors cursor-pointer ${
                    activeTab === tab.name 
                      ? "bg-slate-900/60 text-primary border-t-2 border-t-primary" 
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  <span className={tab.active ? "text-primary" : "text-muted-foreground"}>
                    {tab.name.endsWith(".ts") ? "ts" : tab.name.endsWith(".json") ? "{}" : "log"}
                  </span>
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Code Content Area */}
            <div className="p-6 font-mono text-sm leading-relaxed min-h-[300px] overflow-y-auto bg-[#070b14]/50">
              <AnimatePresence mode="wait">
                {activeTab === "profile.ts" && (
                  <motion.div
                    key="profile"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-1 text-slate-300"
                  >
                    {/* Render typed developer details */}
                    <div className="whitespace-pre-wrap">
                      {/* Highlighted text styling */}
                      {typedCode.split("\n").map((line, i) => {
                        // Very simple syntax highlighter mockup for beautiful display
                        let styledLine = line;
                        
                        // replace keywords
                        if (line.startsWith("const ")) {
                          return (
                            <div key={i} className="min-h-[1.25rem]">
                              <span className="text-purple-400">const</span>{" "}
                              <span className="text-blue-400">developer</span>{" "}
                              <span className="text-white">=</span>{" "}
                              <span className="text-yellow-400">{"{"}</span>
                            </div>
                          );
                        }
                        
                        if (line.trim() === "};") {
                          return (
                            <div key={i} className="min-h-[1.25rem]">
                              <span className="text-yellow-400">{"};"}</span>
                            </div>
                          );
                        }

                        if (line.includes(":")) {
                          const parts = line.split(":");
                          const key = parts[0];
                          const value = parts.slice(1).join(":");
                          return (
                            <div key={i} className="pl-4 min-h-[1.25rem]">
                              <span className="text-pink-400">{key.trim()}</span>
                              <span className="text-white">:</span>{" "}
                              <span className="text-emerald-400">{value.trim()}</span>
                            </div>
                          );
                        }
                        
                        return <div key={i} className="min-h-[1.25rem]">{line}</div>;
                      })}
                      {/* Cursor */}
                      <motion.span 
                        animate={{ opacity: [1, 0, 1] }} 
                        transition={{ repeat: Infinity, duration: 0.9 }}
                        className="inline-block w-1.5 h-4 bg-primary ml-1"
                      />
                    </div>
                  </motion.div>
                )}

                {activeTab === "skills.json" && (
                  <motion.div
                    key="skills"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-indigo-300"
                  >
                    <pre className="text-xs md:text-sm">
{`{
  "techStack": {
    "frontend": ["React", "Typescript", "TailwindCSS"],
    "backend": ["Node.js", "Django", "PHP"],
    "databases": ["PostgreSQL", "MongoDB"],
    "devops": ["Docker", "Kubernetes", "CI/CD"]
  },
  "tools": ["Figma", "Photoshop", "Git"]
}`}
                    </pre>
                  </motion.div>
                )}

                {activeTab === "system.log" && (
                  <motion.div
                    key="system"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-2 text-xs font-mono text-teal-400/80"
                  >
                    {systemLines.map((line, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.2 }}
                      >
                        {line}
                      </motion.div>
                    ))}
                    <div className="text-muted-foreground/50 pt-2 flex items-center gap-1">
                      <Sparkles size={12} className="text-primary animate-pulse" /> Active logs streaming...
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Terminal Footer Info */}
            <div className="flex justify-between items-center px-4 py-2 bg-slate-950 text-[10px] font-mono text-muted-foreground select-none border-t border-white/5">
              <span>Lines: 7 | Words: 43</span>
              <span className="flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full" /> UTF-8 | TypeScript
              </span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
