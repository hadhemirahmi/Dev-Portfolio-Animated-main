import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      company: "Web Graphique — entreprise de développement",
      role: "Développeuse Full-Stack",
      period: "2025 — 2026",
      description: "Application d'une démarche de conception complète : analyse des besoins, définition des objectifs, prototypage, tests et amélioration continue. Développement d'une application mobile de sensibilisation environnementale proposant des solutions et conseils écoresponsables.",
      technologies: ["React Native", "React", "Express.js", "Redux", "MongoDB"]
    },
    {
      company: "Visse Tunisie — boîte de développement",
      role: "Développeuse Web / IA",
      period: "2024 — 2025",
      description: "Conception de prompts IA structurés et développement d'une application web connectée à une API d'intelligence artificielle, avec tests et optimisation des réponses générées.",
      technologies: ["PHP", "SQL", "HTML", "CSS", "JavaScript", "Bootstrap"]
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Background glow decoration */}
      <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-widest">Mon Parcours</span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-4 mt-2">Parcours <span className="text-gradient">Professionnel</span></h2>
        </motion.div>

        {/* Timeline wrapper container */}
        <div className="relative ml-4 md:ml-8 space-y-10">
          
          {/* Vertical glowing gradient line */}
          <div className="absolute left-[7px] md:left-[15px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary via-accent to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-10 md:pl-14 group"
            >
              {/* Timeline marker with pulsing halo */}
              <div className="absolute left-0 md:left-[8px] top-2 z-20 flex items-center justify-center -translate-x-1/2">
                <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-primary/40 opacity-75"></span>
                <div className="w-4 h-4 rounded-full bg-slate-950 border-2 border-primary ring-4 ring-slate-950 group-hover:border-accent transition-colors duration-300" />
              </div>
              
              {/* Glassmorphic Experience Card */}
              <div className="bg-slate-900/35 backdrop-blur-xl border border-white/5 rounded-3xl p-6 md:p-8 hover:border-primary/25 hover:bg-slate-900/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-3">
                  <div>
                    <h3 className="text-xl md:text-2xl font-display font-extrabold text-foreground group-hover:text-primary transition-colors duration-300">{exp.role}</h3>
                    <div className="text-md text-primary/80 font-medium font-mono mt-1">{exp.company}</div>
                  </div>
                  <span className="text-xs font-mono text-primary bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full w-fit">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-sans">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="text-[10px] font-mono text-muted-foreground bg-slate-950 px-2.5 py-1.5 rounded-full border border-white/5 hover:text-primary hover:border-primary/20 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
