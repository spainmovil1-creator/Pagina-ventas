import { motion } from "framer-motion";
import { ShieldCheck, Clock, PiggyBank } from "lucide-react";

const stats = [
  {
    icon: ShieldCheck,
    value: "300€",
    label: "Sanción Media Evitada",
    description: "Rango típico de multas: 300-3.000€",
  },
  {
    icon: Clock,
    value: "40h",
    label: "Horas Ahorradas al Año",
    description: "10 horas trimestrales de estrés y búsquedas",
  },
  {
    icon: PiggyBank,
    value: "15%",
    label: "Ahorro Fiscal Promedio",
    description: "Lo que el autónomo medio paga de más por desconocimiento",
  },
];

const ValueSection = () => {
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
            ¿Cuánto Vale Tu Tranquilidad?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-card rounded-2xl p-8 shadow-card text-center border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-accent" />
              </div>
              <p className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">
                {stat.value}
              </p>
              <p className="font-body font-semibold text-foreground mb-2">
                {stat.label}
              </p>
              <p className="text-sm text-muted-foreground font-body">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
