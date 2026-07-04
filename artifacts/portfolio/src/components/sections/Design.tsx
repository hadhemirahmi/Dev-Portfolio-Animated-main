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
    <section id="design" className="py-24 relative bg-background/90">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Design <span className="text-primary">Créatif</span></h2>
          <p className="text-muted-foreground font-mono text-sm max-w-2xl mx-auto">
            Des projets de design pensés pour l'expérience utilisateur, l'identité visuelle et l'efficacité des interfaces.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {designs.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-3xl border border-white/10 bg-card/60 p-8 shadow-xl shadow-black/5 transition-all hover:-translate-y-2 hover:border-primary/30"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                  <Icon size={28} />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono px-3 py-2 rounded-full bg-white/5 text-muted-foreground border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
                {item.image && (
                  <img src={item.image} alt={item.title} className="mt-4 w-full rounded-lg border border-white/5 object-cover" />
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
