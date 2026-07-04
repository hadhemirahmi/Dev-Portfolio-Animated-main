import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "BloodConnect",
      description: "Plateforme médicale connectant les donneurs de sang et les centres hospitaliers en temps réel. Permet aux donneurs de s'inscrire et aux hôpitaux de signaler des urgences avec groupe sanguin et localisation.",
      image: "/images/bloodconnect.png",
      tags: ["Python", "Django", "SQLite", "HTML/CSS", "JavaScript"],
      github: "https://github.com/hadhemirahmi/BloodConnect",
      demo: "https://hadhemi.pythonanywhere.com/"
    },
    {
      title: "movieForja",
      description: "Application web de découverte de films permettant de rechercher, consulter et mettre en favoris des films populaires. Interface intuitive avec mode sombre et système d'authentification.",
      image: "/images/simplemovies.png",
      tags: ["React", "HTML/CSS", "JavaScript", "API TMDB"],
      github: "https://github.com/hadhemirahmi/movie",
      demo: "https://movieforja.netlify.app/"
    },
    {
      title: "GreenLife",
      description: "Application innovante qui transforme vos choix quotidiens en un impact positif mesurable pour la planète. Sensibilisation environnementale avec suivi de l'empreinte carbone.",
      image: "/images/greenlife.png",
      tags: ["React Native", "JavaScript","TypeScript","MongoDb", "Node.js","Express.js"],
      github: "https://github.com/hadhemirahmi/stage",
      demo: "https://greenlifehadh.netlify.app/"
    },
    {
      title: "Motorz.tn",
      description: "Plateforme de vente et de location de véhicules en Tunisie.",
      image: "/images/motorz.png",
      tags: ["React.js", "material UI"],
      github: "https://github.com/hadhemirahmi/voiture",
      demo: "https://voiture-production.up.railway.app/"
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Projets <span className="text-primary">Réalisés</span></h2>
            <p className="text-muted-foreground font-mono text-sm max-w-lg">
              Une sélection de travaux illustrant mon approche de l'architecture logicielle, de l'IA et du développement d'applications.
            </p>
          </div>
          <a href="https://github.com/hadhemirahmi/" target="_blank" rel="noreferrer" className="text-sm font-mono text-primary hover:underline underline-offset-4 flex items-center gap-2">
            View all on GitHub <Github size={16} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden mb-6 border border-white/10 group-hover:border-primary/50 transition-colors">
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay actions */}
                <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity bg-background/60 backdrop-blur-sm">
                  <a href={project.github} className="p-3 rounded-full bg-white/10 hover:bg-primary text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.demo} className="p-3 rounded-full bg-white/10 hover:bg-primary text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
