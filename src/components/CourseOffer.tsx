"use client";

import { Check, Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

/**
 * Componente que muestra la oferta del único curso básico de inversión.
 * Presenta una sola card centrada y destacada con un CTA de compra.
 * @returns {JSX.Element} La sección de oferta del curso.
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

      {/* Single centered course card */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-md">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-pch-primary/20 rounded-[40px] blur-[60px] -z-10" />

          <div className="bg-pch-card border-2 border-pch-primary rounded-[40px] p-10 shadow-[0_0_60px_rgba(87,204,153,0.2)] relative overflow-hidden">
            {/* Badge */}
            <div className="absolute top-0 right-0 bg-pch-primary text-white dark:text-[#0b241c] text-xs font-bold px-5 py-2 rounded-bl-xl rounded-tr-[40px] uppercase tracking-wider">
              {t.course.badge_basic}
            </div>

            {/* Star decoration */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-pch-primary fill-pch-primary" />
              ))}
            </div>

            {/* Course name */}
            <h3 className="text-2xl font-bold text-foreground dark:text-white mb-2">
              {t.course.course_basic_name}
            </h3>
            <p className="text-foreground/70 mb-8 text-sm leading-relaxed">
              {t.course.course_basic_desc}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-6xl font-bold text-foreground dark:text-white">
                {t.course.course_basic_price}
              </span>
              <span className="text-sm text-foreground/60">{t.course.payment_type}</span>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-10">
              {t.course.features_basic.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="min-w-6 h-6 rounded-full bg-pch-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-pch-primary" />
                  </div>
                  <span className="text-foreground dark:text-white text-sm font-medium">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button className="w-full bg-pch-primary text-white dark:text-[#0b241c] rounded-full px-6 py-5 font-bold text-lg hover:opacity-90 hover:shadow-lg hover:shadow-pch-primary/30 transition-all">
              {t.course.btn_buy}
            </button>
          </div>
        </div>
      </div>

      <p className="text-xs text-foreground text-center mt-10 opacity-60">
        {t.course.stripe_msg}
      </p>
    </section>
  );
};
