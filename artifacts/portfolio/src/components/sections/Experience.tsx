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
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Parcours <span className="text-primary">Professionnel</span></h2>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute w-4 h-4 rounded-full bg-background border-2 border-primary left-[-8.5px] top-1.5 ring-4 ring-background" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                <h3 className="text-xl md:text-2xl font-display font-bold">{exp.role}</h3>
                <span className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                  {exp.period}
                </span>
              </div>
              
              <div className="text-lg text-foreground/80 font-medium mb-4">{exp.company}</div>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map(tech => (
                  <span key={tech} className="text-xs font-mono text-muted-foreground bg-white/5 px-2 py-1 rounded border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
