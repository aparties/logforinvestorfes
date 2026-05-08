"use client";

import { Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

/**
 * Componente que muestra la oferta de los cursos.
 * Presenta los 3 planes de cursos y un Call-To-Action (CTA) para la compra.
 * @returns {JSX.Element} La sección de oferta de cursos.
 */
export const CourseOffer = () => {
  const { t } = useLanguage();

  return (
    <section id="curso" className="py-20 px-6 max-w-7xl mx-auto w-full mb-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground dark:text-white mb-6">
          {t.course.title}
        </h2>
        <p className="text-foreground text-lg max-w-2xl mx-auto">
          {t.course.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* Curso Básico */}
        <div className="bg-pch-card border border-pch-border rounded-[40px] p-8 shadow-xl relative">
          <div className="absolute top-0 right-0 bg-pch-input text-foreground text-xs font-bold px-4 py-1 rounded-bl-xl rounded-tr-[40px] uppercase tracking-wider">
            {t.course.badge_basic}
          </div>
          <h3 className="text-xl font-bold text-foreground dark:text-white mb-2">{t.course.course_basic_name}</h3>
          <p className="text-foreground/80 mb-6 text-sm h-10">{t.course.course_basic_desc}</p>
          <div className="flex items-baseline gap-2 mb-8">
            <span className="text-4xl font-bold text-foreground dark:text-white">{t.course.course_basic_price}</span>
            <span className="text-xs text-foreground/80">{t.course.payment_type}</span>
          </div>
          <ul className="space-y-4 mb-8">
            {t.course.features_basic.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="min-w-5 h-5 rounded-full bg-pch-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-pch-primary" />
                </div>
                <span className="text-foreground dark:text-white text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          <button className="w-full bg-pch-input border border-pch-border text-foreground dark:text-white rounded-full px-6 py-4 font-bold text-sm hover:bg-pch-primary hover:text-white dark:hover:text-[#0b241c] hover:border-transparent transition-all">
            {t.course.btn_buy}
          </button>
        </div>

        {/* Curso Intermedio */}
        <div className="bg-pch-card border border-pch-border rounded-[40px] p-8 shadow-xl relative">
          <div className="absolute top-0 right-0 bg-pch-input text-foreground text-xs font-bold px-4 py-1 rounded-bl-xl rounded-tr-[40px] uppercase tracking-wider">
            {t.course.badge_intermediate}
          </div>
          <h3 className="text-xl font-bold text-foreground dark:text-white mb-2">{t.course.course_int_name}</h3>
          <p className="text-foreground/80 mb-6 text-sm h-10">{t.course.course_int_desc}</p>
          <div className="flex items-baseline gap-2 mb-8">
            <span className="text-4xl font-bold text-foreground dark:text-white">{t.course.course_int_price}</span>
            <span className="text-xs text-foreground/80">{t.course.payment_type}</span>
          </div>
          <ul className="space-y-4 mb-8">
            {t.course.features_int.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="min-w-5 h-5 rounded-full bg-pch-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-pch-primary" />
                </div>
                <span className="text-foreground dark:text-white text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          <button className="w-full bg-pch-input border border-pch-border text-foreground dark:text-white rounded-full px-6 py-4 font-bold text-sm hover:bg-pch-primary hover:text-white dark:hover:text-[#0b241c] hover:border-transparent transition-all">
            {t.course.btn_buy}
          </button>
        </div>

        {/* Bundle (Destacado) */}
        <div className="bg-pch-card border-2 border-pch-primary rounded-[40px] p-8 shadow-[0_0_40px_rgba(87,204,153,0.15)] relative transform md:-translate-y-4">
          <div className="absolute top-0 right-0 bg-pch-primary text-white dark:text-[#0b241c] text-xs font-bold px-4 py-1 rounded-bl-xl rounded-tr-[40px] uppercase tracking-wider">
            {t.course.badge_bundle}
          </div>
          <h3 className="text-2xl font-bold text-foreground dark:text-white mb-2">{t.course.course_bundle_name}</h3>
          <p className="text-pch-primary mb-6 text-sm h-10">{t.course.course_bundle_desc}</p>
          <div className="flex items-baseline gap-2 mb-8">
            <span className="text-5xl font-bold text-foreground dark:text-white">{t.course.course_bundle_price}</span>
            <span className="text-xs text-foreground/80">{t.course.payment_type}</span>
          </div>
          <ul className="space-y-4 mb-8">
            {t.course.features_bundle.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="min-w-6 h-6 rounded-full bg-pch-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-pch-primary" />
                </div>
                <span className="text-foreground dark:text-white text-sm font-medium">{feature}</span>
              </li>
            ))}
          </ul>
          <button className="w-full bg-pch-primary text-white dark:text-[#0b241c] rounded-full px-6 py-4 font-bold text-lg hover:opacity-90 hover:shadow-lg hover:shadow-pch-primary/20 transition-all">
            {t.course.btn_buy}
          </button>
        </div>
      </div>
      
      <p className="text-xs text-foreground text-center mt-12 opacity-70">{t.course.stripe_msg}</p>
    </section>
  );
};
