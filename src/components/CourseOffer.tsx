import { Check } from "lucide-react";

/**
 * Componente que muestra la oferta del curso de Inversión Pasiva 101.
 * Presenta los beneficios y un Call-To-Action (CTA) para la compra.
 * @returns {JSX.Element} La sección de oferta del curso.
 */
export const CourseOffer = () => {
  return (
    <section id="curso" className="py-20 px-6 max-w-5xl mx-auto w-full mb-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Pasa de Espectador a Inversor
        </h2>
        <p className="text-foreground text-lg max-w-2xl mx-auto">
          Un método directo, sin complicaciones y basado en el sistema de Weinstein para empezar a invertir de forma pasiva y protegida.
        </p>
      </div>

      <div className="bg-pch-card border border-pch-primary/30 rounded-[40px] p-8 md:p-12 shadow-[0_0_50px_rgba(87,204,153,0.1)] max-w-lg mx-auto relative">
        <div className="absolute top-0 right-0 bg-pch-primary text-[#0b241c] text-xs font-bold px-4 py-1 rounded-bl-xl rounded-tr-[40px] uppercase tracking-wider">
          MVP Especial
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-2">Curso Inversión Pasiva 101</h3>
        <p className="text-foreground mb-8">El sistema que necesitas para operar sin estrés.</p>
        
        <div className="flex items-baseline gap-2 mb-8">
          <span className="text-5xl font-bold text-white">$30</span>
          <span className="text-foreground">pago único</span>
        </div>

        <ul className="space-y-4 mb-10">
          {[
            "Acceso de por vida a 5-10 lecciones en video.",
            "Aprende a leer el Smart Money.",
            "Uso básico del sistema de Weinstein.",
            "Acceso automatizado post-pago.",
            "Sin suscripciones ocultas."
          ].map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="min-w-6 h-6 rounded-full bg-pch-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 text-pch-primary" />
              </div>
              <span className="text-white text-sm md:text-base">{feature}</span>
            </li>
          ))}
        </ul>

        <button className="w-full bg-pch-primary text-[#0b241c] rounded-full px-8 py-5 font-bold text-lg hover:bg-pch-secondary hover:shadow-lg hover:shadow-pch-primary/20 transition-all">
          Comprar Acceso Inmediato
        </button>
        <p className="text-xs text-foreground text-center mt-4 opacity-70">Pago seguro procesado por Stripe.</p>
      </div>
    </section>
  );
};
