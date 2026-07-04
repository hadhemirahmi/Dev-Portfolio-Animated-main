import { motion } from "framer-motion";
import { Terminal, ArrowRight, Github, Linkedin } from "lucide-react";

export default function Hero() {
  const codeLines = [
    "> Initialize system...",
    "> Loading dependencies...",
    "> Compiling profile...",
    "> Ready. Hello World."
  ];

  return (
    <section id="home" className="min-h-[100dvh] flex items-center justify-center pt-20 relative">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col gap-6 z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 w-fit font-mono text-sm">
            <Terminal size={14} />
            <span>System Status: Online</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
            Hadhemi <br/>
            <span className="text-gradient">Rahmi</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
            Développeuse Full-Stack passionnée par le développement web, mobile et l'intégration de l'intelligence artificielle.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <button 
              onClick={() => {
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 rounded-md bg-primary text-background font-mono font-bold hover:bg-primary/90 transition-all hover:-translate-y-1 hover:glow-effect flex items-center gap-2"
            >
              View Work <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 rounded-md bg-transparent border border-white/20 text-foreground font-mono font-medium hover:bg-white/5 transition-all"
            >
              Contact Me
            </button>
          </div>

          <div className="flex items-center gap-6 mt-8">
            <a href="https://github.com/hadhemirahmi/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative z-10 w-full max-w-md mx-auto lg:ml-auto"
        >
          {/* Decorative glowing backplate */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-blue-400/10 rounded-xl blur-2xl transform rotate-3 scale-105" />
          
          <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-200">
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 border-b border-gray-200">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-2 text-xs font-mono text-gray-500">terminal ~ zsh</span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed h-[300px] flex flex-col gap-2 bg-white">
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + i * 0.4 }}
                  className="text-teal-600 font-medium"
                >
                  {line}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 2.4 }}
                className="mt-4 text-gray-800"
              >
                <span className="text-blue-500">const</span> <span className="text-amber-500">developer</span> = {"{"}
                <br />
                &nbsp;&nbsp;name: <span className="text-emerald-500">"Hadhemi Rahmi"</span>,
                <br />
                &nbsp;&nbsp;role: <span className="text-emerald-500">"Full-Stack"</span>,
                <br />
                &nbsp;&nbsp;skills: [<span className="text-emerald-500">"React"</span>, <span className="text-emerald-500">"React Native"</span>, <span className="text-emerald-500">"Node.js"</span>]
                <br />
                {"}"  };
              </motion.div>
              <motion.div 
                animate={{ opacity: [1, 0, 1] }} 
                transition={{ repeat: Infinity, duration: 1 }}
                className="w-2 h-4 bg-teal-500 inline-block mt-2"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
