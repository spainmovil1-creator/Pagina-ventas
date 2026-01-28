import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisonData = [
  {
    aspect: "Inversión",
    guide: "6€ (una vez)",
    traditional: "600-1.800€/año",
  },
  {
    aspect: "Aprendizaje",
    guide: "Conocimiento para siempre",
    traditional: "Sin entender lo que pagas",
  },
  {
    aspect: "Disponibilidad",
    guide: "24/7 en tu dispositivo",
    traditional: "Horario laboral",
  },
  {
    aspect: "Personalización",
    guide: "Tú aplicas a TU caso",
    traditional: "Plantilla genérica",
  },
  {
    aspect: "Control",
    guide: "Controlas tu negocio",
    traditional: "Delegas tranquilidad",
  },
];

const ComparisonSection = () => {
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
            ¿Guía o Gestor Tradicional?
          </h2>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto bg-card rounded-2xl shadow-card overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Header */}
          <div className="grid grid-cols-3 text-center border-b border-border">
            <div className="p-4 md:p-6 bg-muted">
              <span className="font-body font-semibold text-muted-foreground">Aspecto</span>
            </div>
            <div className="p-4 md:p-6 gradient-cta">
              <span className="font-body font-bold text-accent-foreground">Esta Guía</span>
            </div>
            <div className="p-4 md:p-6 bg-muted">
              <span className="font-body font-semibold text-muted-foreground">Gestor Tradicional</span>
            </div>
          </div>

          {/* Rows */}
          {comparisonData.map((row, index) => (
            <div
              key={row.aspect}
              className={`grid grid-cols-3 text-center ${
                index !== comparisonData.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="p-4 md:p-5 flex items-center justify-center">
                <span className="font-body font-medium text-foreground text-sm md:text-base">
                  {row.aspect}
                </span>
              </div>
              <div className="p-4 md:p-5 bg-accent/5 flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="font-body text-foreground text-sm md:text-base">
                  {row.guide}
                </span>
              </div>
              <div className="p-4 md:p-5 flex items-center justify-center gap-2">
                <X className="w-4 h-4 text-destructive flex-shrink-0" />
                <span className="font-body text-muted-foreground text-sm md:text-base">
                  {row.traditional}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.p
          className="text-center text-lg font-body text-foreground mt-10 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Los mejores autónomos tienen <span className="font-bold text-accent">ESTA GUÍA + un gestor puntual</span>. 
          Cuando entiendes lo básico, usas al profesional para lo complejo. 
          <span className="font-bold"> ¡Ahorras el 80% de su factura!</span>
        </motion.p>
      </div>
    </section>
  );
};

export default ComparisonSection;
