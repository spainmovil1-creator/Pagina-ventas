import { motion } from "framer-motion";
import { Building2, CalendarDays, FileSpreadsheet, PiggyBank } from "lucide-react";

const modules = [
  {
    number: "01",
    icon: Building2,
    title: "Los Cimientos",
    description: "Cómo darte de alta correctamente y elegir entre autónomo o sociedad con tabla comparativa real de costes.",
  },
  {
    number: "02",
    icon: FileSpreadsheet,
    title: "Sistema Mensual",
    description: "Plantilla descargable de control de gastos y método de factura perfecta en 3 minutos.",
  },
  {
    number: "03",
    icon: CalendarDays,
    title: "Trimestres Sin Drama",
    description: "Calendario visual 2024-2025 y guía paso a paso para los Modelos 303 y 130.",
  },
  {
    number: "04",
    icon: PiggyBank,
    title: "La Renta Simplificada",
    description: "Lista definitiva de gastos deducibles y estrategia legal para minimizar lo que pagas.",
  },
];

const ContentSection = () => {
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
            Contenido del Manual
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            Todo lo que necesitas saber, organizado paso a paso
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={module.number}
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-lg transition-all duration-300 border border-border hover:border-accent/30 overflow-hidden"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Large number background */}
              <span className="absolute -top-4 -right-4 text-[120px] font-display font-bold text-muted/30 leading-none pointer-events-none">
                {module.number}
              </span>

              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl gradient-cta flex items-center justify-center flex-shrink-0">
                    <module.icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <div>
                    <span className="text-sm font-body font-semibold text-accent">
                      Módulo {module.number}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-foreground mt-1 mb-3">
                      {module.title}
                    </h3>
                    <p className="text-muted-foreground font-body">
                      {module.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
