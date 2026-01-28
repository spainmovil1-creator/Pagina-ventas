import { motion } from "framer-motion";
import { MousePointer, ClipboardList, Download, AlertTriangle } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: MousePointer,
    title: "Haz Clic en Obtener Guía",
    description: "Te llevará a un checkout completamente seguro",
  },
  {
    number: "2",
    icon: ClipboardList,
    title: "Completa Tus Datos",
    description: "Tarjeta, PayPal o transferencia bancaria",
  },
  {
    number: "3",
    icon: Download,
    title: "Acceso Inmediato",
    description: "Descarga tu guía y bonuses al instante",
  },
];

const StepsSection = () => {
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
            Tu Camino a la Tranquilidad Fiscal
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-accent to-accent/30" />
              )}

              <div className="relative z-10 inline-flex flex-col items-center">
                <div className="w-24 h-24 rounded-2xl gradient-cta flex items-center justify-center mb-6 shadow-cta">
                  <step.icon className="w-10 h-10 text-accent-foreground" />
                </div>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground font-body font-bold text-sm mb-4">
                  {step.number}
                </span>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-body">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Urgency alert */}
        <motion.div
          className="max-w-3xl mx-auto bg-destructive/10 border border-destructive/30 rounded-xl p-6 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            <span className="font-body font-bold text-destructive">¡ALERTA URGENTE!</span>
          </div>
          <p className="text-foreground font-body">
            El <strong>20 de abril</strong> vence el primer trimestre. El <strong>30 de junio</strong> vence la Declaración de la Renta. 
            Cada día que pasa sin esta guía aumenta el riesgo de errores costosos.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StepsSection;
