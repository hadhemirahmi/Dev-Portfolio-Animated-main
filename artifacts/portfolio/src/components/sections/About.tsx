import { motion } from "framer-motion";
import { Code2, Cpu, GraduationCap, Award } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Formation", value: "Licence IT", icon: <GraduationCap className="text-primary mb-2" size={26} /> },
    { label: "Projets Développés", value: "10+", icon: <Code2 className="text-primary mb-2" size={26} /> },
    { label: "Expérience IA / Web", value: "2 Ans", icon: <Cpu className="text-accent mb-2" size={26} /> },
    { label: "Clubs Actifs", value: "2", icon: <Award className="text-accent mb-2" size={26} /> },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Subtle background glow */}
      <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row gap-16 items-center"
        >
          {/* Profile Image container with Gradient Glow */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-accent rounded-3xl blur-md opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
            <div className="relative aspect-square max-w-[360px] mx-auto rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
              <img 
                src="/images/profile.png" 
                alt="Hadhemi Rahmi" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-60" />
            </div>
          </div> 
 
          {/* Biography & stats details */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-primary uppercase tracking-widest">Présentation</span>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold">
                Qui est <span className="text-gradient">Hadhemi ?</span>
              </h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed font-sans">
              <p>
                Je suis étudiante en licence de technologie de l'informatique à l'ISET Sfax, passionnée par le développement web et mobile. J'ai une solide expérience pratique en conception d'applications connectées à l'intelligence artificielle et en développement full-stack.
              </p>
              <p>
                À l'aise avec l'analyse des besoins, le prototypage, le design d'interfaces et l'amélioration continue des produits, je cherche à mettre mes compétences et ma curiosité au service de projets innovants.
              </p>
            </div>

            {/* Stats Cards grid */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-5 rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-white/5 hover:border-primary/30 hover:bg-slate-900/70 hover:-translate-y-1.5 transition-all duration-300 shadow-xl shadow-black/10 group cursor-default"
                >
                  <div className="transform group-hover:scale-110 group-hover:translate-x-1 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-display font-extrabold text-foreground group-hover:text-primary transition-colors duration-300">{stat.value}</div>
                  <div className="text-sm font-mono text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
