import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/cta-button";
import { Check, X, Rocket } from "lucide-react";

const optionA = [
  "Continuar con incertidumbre y miedo",
  "Perder horas valiosas de tu negocio",
  "Arriesgar sanciones por errores evitables",
  "Pagar miles de euros de más",
];

const optionB = [
  "Claridad total sobre obligaciones",
  "Sistema organizado que ahorra horas",
  "Tranquilidad de estar en regla",
  "Optimización legal de lo que pagas",
];

const FinalCTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Elige Tu Futuro Fiscal
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Option A */}
          <motion.div
            className="bg-card rounded-2xl p-8 border-2 border-destructive/20"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-display font-bold text-muted-foreground mb-6 flex items-center gap-2">
              <X className="w-6 h-6 text-destructive" />
              Opción A: Seguir Igual
            </h3>
            <ul className="space-y-4">
              {optionA.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground font-body">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Option B */}
          <motion.div
            className="bg-card rounded-2xl p-8 border-2 border-accent shadow-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
              <Check className="w-6 h-6 text-accent" />
              Opción B: Tomar el Control
            </h3>
            <ul className="space-y-4">
              {optionB.map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground font-body">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg font-body text-foreground mb-8">
            Imagina despertarte el día 20 de cada trimestre sabiendo exactamente qué presentar, cuánto pagar, y teniendo todo preparado desde hace días. 
            <strong> Eso es lo que esta guía te ofrece.</strong> No dejes que el miedo a lo desconocido frene tu negocio. 
            <span className="text-accent font-bold"> ¡La solución está aquí!</span>
          </p>

          <CTAButton 
            href="#obtener-guia" 
            size="lg"
          >
            <Rocket className="w-5 h-5" />
            ¡Accede a tu Guía ahora!
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
