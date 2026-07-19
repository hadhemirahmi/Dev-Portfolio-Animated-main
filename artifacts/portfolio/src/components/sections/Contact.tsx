import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof contactSchema>) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(values);
    setIsSubmitting(false);
    setIsSuccess(true);
    form.reset();
    
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/5 bg-slate-950/20">
      {/* Background ambient light */}
      <div className="absolute top-[30%] left-[20%] w-[350px] h-[350px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Left Info Columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 flex flex-col justify-center"
          >
            <div>
              <span className="text-xs font-mono text-primary uppercase tracking-widest">Prendre Contact</span>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-4 mt-2">Discutons <span className="text-gradient">Ensemble</span></h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-sans">
                Je suis actuellement disponible pour de nouvelles opportunités de travail ou des projets collaboratifs. N'hésitez pas à m'envoyer un message !
              </p>
            </div>

            <div className="space-y-6">
              {[
                { 
                  label: "Email", 
                  value: "hadhemi93742594@gmail.com", 
                  href: "mailto:hadhemi93742594@gmail.com", 
                  icon: <Mail size={20} /> 
                },
                { 
                  label: "Téléphone", 
                  value: "+216 44 338 426", 
                  href: "tel:+21644338426", 
                  icon: <Phone size={20} /> 
                },
                { 
                  label: "Adresse", 
                  value: "Sfax, Tunisie (Route de l'aéroport, km 8)", 
                  href: null, 
                  icon: <MapPin size={20} /> 
                }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/35 backdrop-blur-xl border border-white/5 hover:border-primary/20 hover:bg-slate-900/50 hover:shadow-lg transition-all duration-300 group cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-slate-950 group-hover:scale-105 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-mono text-muted-foreground mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-lg font-semibold hover:text-primary transition-colors duration-300 font-sans">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-lg font-semibold font-sans text-foreground/90">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/35 backdrop-blur-xl p-8 rounded-3xl border border-white/5 relative overflow-hidden shadow-2xl shadow-black/30"
          >
            {/* Subtle glow behind form */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 blur-[120px] pointer-events-none" />
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground font-mono text-xs uppercase tracking-wider">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="John Doe" 
                          {...field} 
                          className="bg-slate-950/40 border-white/5 focus-visible:ring-primary/45 focus-visible:border-primary/50 text-foreground transition-all duration-300 rounded-xl py-5" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground font-mono text-xs uppercase tracking-wider">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="john@example.com" 
                          {...field} 
                          className="bg-slate-950/40 border-white/5 focus-visible:ring-primary/45 focus-visible:border-primary/50 text-foreground transition-all duration-300 rounded-xl py-5" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground font-mono text-xs uppercase tracking-wider">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell me about your project..." 
                          className="min-h-[120px] bg-slate-950/40 border-white/5 focus-visible:ring-primary/45 focus-visible:border-primary/50 text-foreground transition-all duration-300 rounded-xl resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting || isSuccess}
                  className="w-full bg-gradient-to-r from-primary to-accent text-slate-950 font-mono font-bold py-6 hover:glow-effect-accent transition-all duration-300 rounded-xl hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  {isSuccess ? (
                    <span className="flex items-center gap-2 text-slate-950"><CheckCircle2 size={18} /> Sent Successfully</span>
                  ) : isSubmitting ? (
                    <span className="flex items-center gap-2 text-slate-950">Sending...</span>
                  ) : (
                    <span className="flex items-center gap-2 text-slate-950">Send Message <Send size={18} /></span>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
