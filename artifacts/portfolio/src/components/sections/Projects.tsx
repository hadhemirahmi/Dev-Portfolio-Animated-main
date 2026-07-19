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
    <section id="projects" className="py-24 relative bg-slate-950/40">
      {/* Background radial glow */}
      <div className="absolute top-[40%] right-[-10%] w-[350px] h-[350px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="text-xs font-mono text-primary uppercase tracking-widest">Réalisations</span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-4 mt-2">Projets <span className="text-gradient">Réalisés</span></h2>
            <p className="text-muted-foreground font-mono text-sm max-w-lg">
              Une sélection de travaux illustrant mon approche de l'architecture logicielle, de l'IA et du développement d'applications.
            </p>
          </div>
          <a 
            href="https://github.com/hadhemirahmi/" 
            target="_blank" 
            rel="noreferrer" 
            className="text-sm font-mono text-primary hover:text-accent hover:underline underline-offset-4 flex items-center gap-2 transition-colors duration-300"
          >
            Voir tout sur GitHub <Github size={16} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-slate-900/35 backdrop-blur-xl border border-white/5 rounded-3xl p-6 hover:border-primary/30 transition-all duration-500 shadow-2xl shadow-black/20 hover:shadow-primary/5 hover:-translate-y-2 flex flex-col h-full justify-between"
            >
              <div>
                {/* Project Image Frame with overlays */}
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border border-white/5 group-hover:border-primary/20 transition-all duration-500 shadow-md">
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-all duration-500 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  
                  {/* Glassmorphic hover actions panel */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/60 backdrop-blur-sm">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="p-3.5 rounded-xl bg-white/5 hover:bg-primary hover:text-slate-950 border border-white/10 text-white transition-all duration-300 transform scale-90 group-hover:scale-100 cursor-pointer shadow-lg"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="p-3.5 rounded-xl bg-white/5 hover:bg-primary hover:text-slate-950 border border-white/10 text-white transition-all duration-300 transform scale-90 group-hover:scale-100 cursor-pointer shadow-lg"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-[10px] font-mono px-3 py-1.5 rounded-full bg-slate-950 border border-white/5 text-muted-foreground group-hover:border-primary/20 group-hover:text-primary transition-all duration-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-display font-extrabold group-hover:text-primary transition-colors duration-300 mb-3">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed font-sans mt-auto">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
