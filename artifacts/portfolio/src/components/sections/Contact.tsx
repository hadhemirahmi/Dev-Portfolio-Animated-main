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
    <section id="contact" className="py-24 relative border-t border-white/5 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Discutons <span className="text-primary">Ensemble</span></h2>
              <p className="text-muted-foreground text-lg">
                Je suis actuellement disponible pour de nouvelles opportunités de travail ou des projets collaboratifs. N'hésitez pas à me contacter !
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm font-mono text-primary mb-1">Email</div>
                  <a href="mailto:hadhemi93742594@gmail.com" className="text-lg">hadhemi93742594@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-sm font-mono text-primary mb-1">Téléphone</div>
                  <a href="tel:+21644338426" className="text-lg">+216 44 338 426</a>
                </div>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm font-mono text-primary mb-1">Adresse</div>
                  <span className="text-lg">Sfax, Tunisie (Route de l'aéroport, km 8)</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card/50 p-8 rounded-2xl border border-white/10 relative overflow-hidden"
          >
            {/* Subtle glow behind form */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[100px] pointer-events-none" />
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground font-mono text-xs uppercase tracking-wider">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="bg-background/50 border-white/10 focus:border-primary/50 focus:ring-primary/20" />
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
                        <Input placeholder="john@example.com" {...field} className="bg-background/50 border-white/10 focus:border-primary/50 focus:ring-primary/20" />
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
                          className="min-h-[120px] bg-background/50 border-white/10 focus:border-primary/50 focus:ring-primary/20 resize-none" 
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
                  className="w-full bg-primary text-background hover:bg-primary/90 font-mono font-bold py-6 hover:glow-effect transition-all"
                >
                  {isSuccess ? (
                    <span className="flex items-center gap-2"><CheckCircle2 size={18} /> Sent Successfully</span>
                  ) : isSubmitting ? (
                    <span className="flex items-center gap-2">Sending...</span>
                  ) : (
                    <span className="flex items-center gap-2">Send Message <Send size={18} /></span>
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
