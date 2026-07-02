"use client";

import { Check, Star, BookOpen } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

/**
 * Componente que muestra la oferta del único curso básico de inversión.
 * Presenta una sola card centrada con features + acordeón de módulos.
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

      {/* Layout: card principal a la izquierda + módulos a la derecha en desktop */}
      <div className="flex flex-col lg:flex-row gap-8 items-start justify-center max-w-5xl mx-auto">

        {/* ── Card de compra ── */}
        <div className="relative w-full lg:max-w-sm shrink-0">
          {/* Glow */}
          <div className="absolute inset-0 bg-pch-primary/20 rounded-[40px] blur-[60px] -z-10" />

          <div className="bg-pch-card border-2 border-pch-primary rounded-[40px] p-8 shadow-[0_0_60px_rgba(87,204,153,0.2)] relative overflow-hidden">
            {/* Badge */}
            <div className="absolute top-0 right-0 bg-pch-primary text-white dark:text-[#0b241c] text-xs font-bold px-5 py-2 rounded-bl-xl rounded-tr-[40px] uppercase tracking-wider">
              {t.course.badge_basic}
            </div>

            {/* Estrellas */}
            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-pch-primary fill-pch-primary" />
              ))}
            </div>

            {/* Nombre del curso */}
            <h3 className="text-2xl font-bold text-foreground dark:text-white mb-2">
              {t.course.course_basic_name}
            </h3>
            <p className="text-foreground/60 mb-6 text-sm leading-relaxed">
              {t.course.course_basic_desc}
            </p>

            {/* Precio */}
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-bold text-foreground dark:text-white">
                {t.course.course_basic_price}
              </span>
              <span className="text-sm text-foreground/50">{t.course.payment_type}</span>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {t.course.features_basic.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="min-w-5 h-5 rounded-full bg-pch-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-pch-primary" />
                  </div>
                  <span className="text-foreground dark:text-white text-sm">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button className="w-full bg-pch-primary text-white dark:text-[#0b241c] rounded-full px-6 py-4 font-bold text-base hover:opacity-90 hover:shadow-lg hover:shadow-pch-primary/30 transition-all">
              {t.course.btn_buy}
            </button>
          </div>
        </div>

        {/* ── Lista de módulos ── */}
        <div className="w-full">
          <div className="bg-pch-card border border-pch-border rounded-[32px] p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-pch-primary/20 flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5 text-pch-primary" />
              </div>
              <h4 className="text-base font-bold text-foreground dark:text-white">
                {t.course.modules_label}
              </h4>
            </div>

            <ol className="space-y-3">
              {t.course.modules_list.map((mod, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  {/* Número */}
                  <span className="w-7 h-7 rounded-full bg-pch-input border border-pch-border flex items-center justify-center shrink-0 text-xs font-bold text-pch-primary group-hover:bg-pch-primary group-hover:text-white dark:group-hover:text-[#0b241c] transition-colors">
                    {i + 1}
                  </span>
                  {/* Título */}
                  <span className="text-sm text-foreground/80 dark:text-white/70 leading-snug pt-0.5 group-hover:text-foreground dark:group-hover:text-white transition-colors">
                    {mod}
                  </span>
                </li>
              ))}
            </ol>

            {/* Nota hojas editables */}
            <div className="mt-6 bg-pch-primary/10 border border-pch-primary/20 rounded-xl px-4 py-3">
              <p className="text-xs text-pch-primary font-medium">
                📄 {t.course.worksheets_note}
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs text-foreground text-center mt-10 opacity-50">
        {t.course.stripe_msg}
      </p>
    </section>
  );
};
