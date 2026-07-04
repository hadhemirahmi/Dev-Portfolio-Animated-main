import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Server } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Formation", value: "Licence", icon: <Globe className="text-primary mb-2" size={24} /> },
    { label: "Projets Développés", value: "10+", icon: <Code2 className="text-primary mb-2" size={24} /> },
    { label: "Expérience IA / Web", value: "2 Ans", icon: <Cpu className="text-primary mb-2" size={24} /> },
    { label: "Clubs Actifs", value: "2", icon: <Server className="text-primary mb-2" size={24} /> },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-16 items-center"
        >
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-square max-w-[400px] mx-auto relative rounded-2xl overflow-hidden border border-border">
              <img 
                src="/images/profile.jpg" 
                alt="Hadhemi Rahmi" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Qui est <span className="text-primary">Hadhemi ?</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Je suis étudiante en licence de technologie de l'informatique à l'ISET Sfax, passionnée par le développement web et mobile. J'ai une solide expérience pratique en conception d'applications connectées à l'intelligence artificielle et en développement full-stack.
              </p>
              <p>
                À l'aise avec l'analyse des besoins, le prototypage, le design d'interfaces et l'amélioration continue des produits, je cherche à mettre mes compétences et ma curiosité au service de projets innovants.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors"
                >
                  {stat.icon}
                  <div className="text-3xl font-display font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm font-mono text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
