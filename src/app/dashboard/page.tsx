"use client";

import { GraduationCap, ShoppingCart } from "lucide-react";
import { COURSES } from "@/lib/courses";
import { CourseLessonsGrid } from "@/components/CourseLessonsGrid";
import { useLanguage } from "@/i18n/LanguageContext";

/**
 * Página principal del área de alumno.
 * Muestra los cursos disponibles con sus lecciones en video (Bunny.net).
 * En el MVP, el Curso Básico está disponible para todos los usuarios autenticados.
 * TODO: Verificar compra en Supabase cuando el webhook de Stripe esté configurado.
 */
export default function DashboardPage() {
  const { language } = useLanguage();
  const basicCourse = COURSES.basic;

  return (
    <div className="flex flex-col gap-12">
      {/* Bienvenida */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-pch-primary/20 flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-pch-primary" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground dark:text-white">
            {language === "es" ? "Tu Área de Aprendizaje" : "Your Learning Area"}
          </h1>
        </div>
        <p className="text-foreground/60 text-sm pl-[52px]">
          {language === "es"
            ? "Accede a tus cursos y lecciones en video a tu propio ritmo."
            : "Access your courses and video lessons at your own pace."}
        </p>
      </div>

      {/* Glow decorativo */}
      <div className="relative">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-pch-primary/5 rounded-full blur-[80px] pointer-events-none -z-10" />

        {/* Curso Básico */}
        <div className="bg-pch-card border border-pch-border rounded-[32px] p-6 md:p-10 shadow-xl">
          <CourseLessonsGrid course={basicCourse} />
        </div>
      </div>

      {/* CTA Intermedio (aún no disponible) */}
      <div className="bg-pch-card border border-pch-primary/30 rounded-[32px] p-8 shadow-xl flex flex-col md:flex-row items-center gap-6">
        <div className="w-14 h-14 rounded-full bg-pch-primary/10 flex items-center justify-center shrink-0">
          <ShoppingCart className="w-7 h-7 text-pch-primary" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-lg font-bold text-foreground dark:text-white mb-1">
            {COURSES.intermediate.title[language]}
          </h3>
          <p className="text-foreground/60 text-sm">
            {language === "es"
              ? "Próximamente disponible. Aprende el sistema Weinstein para identificar el momento óptimo de entrada."
              : "Coming soon. Learn the Weinstein system to identify the optimal entry point."}
          </p>
        </div>
        <a
          href="/#curso"
          className="shrink-0 bg-pch-primary text-white dark:text-[#0b241c] rounded-full px-6 py-3 font-bold text-sm hover:opacity-90 transition-all whitespace-nowrap"
        >
          {language === "es" ? "Ver Oferta" : "View Offer"}
        </a>
      </div>
    </div>
  );
}
