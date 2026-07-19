import { motion } from "framer-motion";
import { LayoutGrid, PenTool, Smartphone } from "lucide-react";

const designs = [
  {
    title: "Bakers Kitchen UI",
    description: "Design d'une interface de e-commerce alimentaire avec navigation claire, hiérarchie visuelle et fiches produits appétissantes.",
    icon: LayoutGrid,
    tags: ["Figma", "UI Kit", "Responsive"],
    image: "/images/bakerskitchen.png"
  },
  {
    title: "nexit Construction ",
    description: "build and construction company",
    icon: Smartphone,
    tags: ["Mobile UX", "Wireframes", "Prototyping"],
    image: "/images/nexit_constraction.png"
  },
  
];

export default function Design() {
  return (
    <section id="design" className="py-24 relative bg-slate-950/40">
      {/* Background decoration */}
      <div className="absolute bottom-10 right-10 w-[250px] h-[250px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-widest">Maquette & Ergonomie</span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-4 mt-2">Design <span className="text-gradient">Créatif</span></h2>
          <p className="text-muted-foreground font-mono text-sm max-w-2xl mx-auto">
            Des projets de design pensés pour l'expérience utilisateur, l'identité visuelle et l'efficacité des interfaces.
          </p>
        </motion.div>

        {/* Adjusted grid for exactly 2 designs to avoid layout holes */}
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {designs.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group rounded-3xl border border-white/5 bg-slate-900/35 backdrop-blur-xl p-8 shadow-2xl shadow-black/20 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-sans">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-xs font-mono px-3 py-1.5 rounded-full bg-white/5 text-muted-foreground border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {item.image && (
                  <div className="overflow-hidden rounded-2xl border border-white/5 shadow-inner">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full object-cover aspect-video transform group-hover:scale-[1.03] transition-transform duration-700 ease-out" 
                    />
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
