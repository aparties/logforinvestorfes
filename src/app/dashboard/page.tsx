"use client";

import { useEffect, useState } from "react";
import { GraduationCap, Lock } from "lucide-react";
import { COURSES } from "@/lib/courses";
import { CourseDashboard } from "@/components/CourseDashboard";

import { useLanguage } from "@/i18n/LanguageContext";
import { useAuth } from "@/context/AuthContext";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";

/** Verifica si el usuario tiene matrícula activa en el curso básico o bundle */
const checkEnrollment = async (userId: string): Promise<boolean> => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("enrollments")
    .select("id")
    .eq("user_id", userId)
    .in("course_id", ["basic"])
    .eq("status", "active")
    .limit(1)
    .maybeSingle();

  if (error) return false;
  return !!data;
};

/**
 * Página principal del área de alumno.
 * Solo muestra el contenido si el usuario tiene una matrícula activa.
 */
export default function DashboardPage() {
  const { language } = useLanguage();
  const { user } = useAuth();
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);
  const basicCourse = COURSES.basic;

  useEffect(() => {
    if (!user) return;
    checkEnrollment(user.id).then(setHasAccess);
  }, [user]);

  // Cargando verificación de acceso
  if (hasAccess === null) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-pch-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-foreground/50 text-sm">
            {language === "es" ? "Verificando acceso..." : "Verifying access..."}
          </p>
        </div>
      </div>
    );
  }

  // Sin acceso: no ha comprado
  if (!hasAccess) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8 text-center px-4">
        {/* Ícono de candado */}
        <div className="w-20 h-20 rounded-full bg-pch-card border border-pch-border flex items-center justify-center shadow-xl">
          <Lock className="w-10 h-10 text-pch-primary/60" />
        </div>

        {/* Mensaje */}
        <div className="flex flex-col gap-3 max-w-md">
          <h1 className="text-2xl md:text-3xl font-bold text-[#0b241c] dark:text-white">
            {language === "es"
              ? "Contenido exclusivo para alumnos"
              : "Exclusive content for students"}
          </h1>
          <p className="text-foreground/60 text-sm md:text-base">
            {language === "es"
              ? "Para acceder a los módulos del curso necesitas adquirir el acceso. Una vez realizado el pago, tu acceso se activa automáticamente."
              : "To access the course modules you need to purchase access. Once payment is made, your access is activated automatically."}
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/#curso"
            className="bg-pch-primary text-white dark:text-[#0b241c] rounded-full px-8 py-4 font-bold text-sm hover:opacity-90 hover:shadow-lg hover:shadow-pch-primary/20 transition-all"
          >
            {language === "es" ? "Ver Planes y Precios" : "View Plans & Pricing"}
          </Link>
          <Link
            href="/"
            className="bg-pch-card border border-pch-border text-[#0b241c] dark:text-white rounded-full px-8 py-4 font-bold text-sm hover:bg-pch-input transition-all"
          >
            {language === "es" ? "Volver al inicio" : "Back to home"}
          </Link>
        </div>

        {/* Nota de soporte */}
        <p className="text-xs text-foreground/40">
          {language === "es"
            ? "¿Ya compraste y no tienes acceso? Escríbenos a support@logforinvestor.com"
            : "Already purchased and no access? Email us at support@logforinvestor.com"}
        </p>
      </div>
    );
  }

  // Con acceso: muestra el curso
  if (!user) return null;

  return (
    <div className="flex flex-col gap-12">
      {/* Bienvenida */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-pch-primary/20 flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-pch-primary" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-[#0b241c] dark:text-white">
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
        <CourseDashboard course={basicCourse} userId={user.id} userEmail={user.email ?? ""} />
      </div>


    </div>
  );
}
