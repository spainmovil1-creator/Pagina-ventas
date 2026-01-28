import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/cta-button";
import { Timer, CheckCircle, Zap } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="obtener-guia" className="py-20 md:py-28 gradient-hero relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-warning text-primary font-body font-semibold mb-6">
            <Timer className="w-4 h-4" />
            Oferta por Tiempo Limitado
          </span>

          {/* Price card */}
          <motion.div
            className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-2xl text-muted-foreground line-through font-body">17€</span>
              <span className="text-6xl md:text-7xl font-display font-bold text-accent">6€</span>
            </div>

            <p className="text-lg text-muted-foreground font-body mb-8">
              Precio de Lanzamiento - Oferta por Tiempo Limitado
            </p>

            <CTAButton 
              href="https://payhip.com/b/wyfLK" 
              size="lg"
              className="w-full md:w-auto"
            >
              <Zap className="w-5 h-5" />
              ¡Obtener Guía Ahora!
            </CTAButton>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground font-body">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                Pago Seguro
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                Acceso Inmediato
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                Tarjeta, PayPal o Transferencia
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
