import { motion } from "framer-motion";
import { HelpCircle, AlertTriangle, Clock, Calendar } from "lucide-react";

const painPoints = [
  {
    icon: HelpCircle,
    title: "Confusión",
    subtitle: "Modelos 130, 303, 115...",
    description: "Un laberinto de formularios que nadie te explicó",
  },
  {
    icon: AlertTriangle,
    title: "Miedo a Sanciones",
    subtitle: "Equivocarte con Hacienda",
    description: "El terror de cometer un error que cueste caro",
  },
  {
    icon: Clock,
    title: "Horas Perdidas",
    subtitle: "Buscando información",
    description: "Tiempo valioso que deberías dedicar a tu negocio",
  },
  {
    icon: Calendar,
    title: "Angustia Trimestral",
    subtitle: "Llegan las declaraciones",
    description: "Cada tres meses, la misma ansiedad",
  },
];

const PainPointsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            ¿Te Suenan Estas Situaciones?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-lg transition-all duration-300 border border-border hover:border-accent/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                <point.icon className="w-7 h-7 text-destructive group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-1">
                {point.title}
              </h3>
              <p className="text-sm font-body font-semibold text-accent mb-2">
                {point.subtitle}
              </p>
              <p className="text-muted-foreground font-body text-sm">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg md:text-xl font-body text-foreground">
            Si has respondido <span className="font-bold text-accent">Sí</span> a alguna...{" "}
            <span className="font-display font-bold text-2xl block mt-2">RELÁJATE. La solución está aquí.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPointsSection;
