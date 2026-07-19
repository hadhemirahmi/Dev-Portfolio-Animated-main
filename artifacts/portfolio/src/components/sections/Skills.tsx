import { motion, Variants } from "framer-motion";
import { SiReact, SiRedux, SiFlutter, SiTypescript, SiTailwindcss, SiMui, SiNodedotjs, SiPython, SiPhp, SiCplusplus, SiPostgresql, SiMongodb, SiFigma, SiDjango, SiDocker, SiKubernetes, SiTerraform, SiGrafana, SiGithub, SiJenkins } from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend & Mobile",
      skills: [
        { name: "React & React Native", icon: SiReact, color: "#61DAFB" },
        { name: "Redux", icon: SiRedux, color: "#764ABC" },
        { name: "Flutter", icon: SiFlutter, color: "#02569B" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        {name:"material UI", icon: SiMui, color:"#007FFF"}
      ]
    },
    {
      title: "Backend & Langages",
      skills: [
        { name: "Node.js & Express", icon: SiNodedotjs, color: "#339933" },
        { name: "Django", icon: SiDjango, color: "#277e28" },
        { name: "PHP ", icon: SiPhp, color: "#777BB4" },
        { name: "C++", icon: SiCplusplus, color: "#00599C" },
        { name: "Java", icon: () => <span style={{ fontSize: 20, color: "#960f00" }}>☕</span>, color: "#960f00" }, 
        { name: "Python", icon: SiPython, color: "#3776AB" },
        {name :"flask", icon: SiPython, color:"#000000"}
      ]
    },
    {
      title: "DevOps",
      skills: [
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
        { name: "Terraform", icon: SiTerraform, color: "#844FBA" },
        { name: "Grafana / Prometheus", icon: SiGrafana, color: "#F46800" },
        { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
        { name: "CI / CD (GitHub Actions)", icon: SiGithub, color: "#222" },
      ]
    },
    {
      title: "Design",
      skills: [
        { name: "Figma", icon: SiFigma, color: "#F24E1E" },
        { name: "Photoshop & Illustrator", icon: DiPhotoshop, color: "#31A8FF" },
        { name: "UI / UX Design", icon: (props: any) => <span style={{ fontSize: props.size ?? 20, color: props.style?.color ?? "#E74C3C" }}>🎨</span>, color: "#E74C3C" },
        { name: "Prototyping", icon: (props: any) => <span style={{ fontSize: props.size ?? 20, color: props.style?.color ?? "#0A84FF" }}>📐</span>, color: "#0A84FF" },
      ]
    },
    {
      title: "SGBD",
      skills: [
        { name: "PostgreSQL & MySQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      ]
    },
   
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants =  {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100 }
    }
  } as const;

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Decorative slant & blur glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/55 to-transparent" />
      <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-widest">Compétences Techniques</span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-4 mt-2">Technical <span className="text-gradient">Arsenal</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-mono text-sm">
            Outils et technologies que j'utilise pour concevoir des applications performantes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-slate-900/35 backdrop-blur-xl border border-white/5 rounded-3xl p-6 hover:border-primary/20 hover:bg-slate-900/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 transform"
            >
              <h3 className="text-xl font-display font-bold mb-6 border-b border-white/5 pb-4 text-foreground flex items-center">
                <span className="text-primary mr-2.5 font-mono text-sm">{`0${idx + 1}.`}</span>
                {category.title}
              </h3>
              
              <div className="flex flex-col gap-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="group relative"
                  >
                    <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] border border-transparent hover:border-white/10 hover:bg-white/[0.06] transition-all duration-300 cursor-default">
                      <div className="flex items-center gap-3">
                        <skill.icon size={22} style={{ color: skill.color }} className="opacity-80 group-hover:opacity-100 group-hover:scale-115 transition-all duration-300" />
                        <span className="font-semibold text-sm group-hover:text-primary transition-colors duration-300 font-sans">{skill.name}</span>
                      </div>
                      
                      {/* Fake proficiency bar with better border details */}
                      <div className="w-24 h-2 bg-slate-950 rounded-full border border-white/5 overflow-hidden">
                        <motion.div 
                          className="h-full rounded-full"
                          style={{ backgroundColor: skill.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${70 + Math.random() * 25}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
