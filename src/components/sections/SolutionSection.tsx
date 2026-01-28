import { motion } from "framer-motion";
import { BookOpen, Sparkles } from "lucide-react";

const SolutionSection = () => {
  return (
    <section className="py-20 md:py-28 gradient-hero relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 rounded-l-[100px] blur-3xl" />
      
      <div className="container relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-body font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Tu Solución
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
            Manual de Supervivencia Fiscal
          </h2>

          <p className="text-xl md:text-2xl text-primary-foreground/80 font-body mb-10">
            Explicado como si te lo contara un colega experimentado, sin complicaciones innecesarias.
          </p>

          <motion.div
            className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-accent/20 animate-float"
            whileHover={{ rotate: 5 }}
          >
            <BookOpen className="w-12 h-12 text-accent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
