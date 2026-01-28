import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/cta-button";
import { AlertTriangle, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-fiscal.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/20 text-destructive-foreground text-sm font-body font-medium mb-6">
              <AlertTriangle className="w-4 h-4" />
              Oferta de Lanzamiento por Tiempo Limitado
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            ¿Te Sientes Perdido Entre Modelos, Plazos y Obligaciones Fiscales?
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-primary-foreground/80 font-body max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Deja de arriesgar tu negocio y tu tranquilidad mental. Descubre el manual definitivo que te explica la fiscalidad de los autónomos en español claro, sin tecnicismos legales, en solo 2 horas de lectura.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <CTAButton 
              href="#obtener-guia" 
              size="lg"
            >
              <CheckCircle className="w-5 h-5" />
              Obtener Guía por solo 6€
            </CTAButton>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-primary-foreground/70 text-sm font-body"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              Acceso Inmediato
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              Sin Tecnicismos
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              Plantillas Incluidas
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary-foreground/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
