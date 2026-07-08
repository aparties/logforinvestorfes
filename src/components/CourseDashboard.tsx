"use client";

import { useEffect, useState } from "react";
import { 
  CheckCircle2, 
  Lock, 
  PlayCircle, 
  ChevronRight, 
  Download, 
  Award, 
  FileSpreadsheet 
} from "lucide-react";
import type { Course } from "@/lib/courses";
import { VideoPlayer } from "@/components/VideoPlayer";
import { useLanguage } from "@/i18n/LanguageContext";
import { CommitmentLetter } from "@/components/CommitmentLetter";
import { AuditCanvas } from "@/components/AuditCanvas";

type CourseDashboardProps = {
  course: Course;
  userId: string;
  userEmail: string;
};

export const CourseDashboard = ({ course, userId, userEmail }: CourseDashboardProps) => {
  const { language } = useLanguage();
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>([]);
  const [activeLessonIndex, setActiveLessonIndex] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!userId) {
      setTimeout(() => {
        setIsLoaded(true);
      }, 0);
      return;
    }
    const stored = localStorage.getItem(`lfi_progress_${userId}`);
    if (stored) {
      try {
        const ids = JSON.parse(stored);
        if (Array.isArray(ids)) {
          setTimeout(() => {
            setCompletedLessonIds(ids);
            const firstUncompleted = course.lessons.findIndex((l) => !ids.includes(l.id));
            if (firstUncompleted !== -1) {
              setActiveLessonIndex(firstUncompleted);
            }
          }, 0);
        }
      } catch (e) {
        console.error("Error cargando el progreso del curso:", e);
      }
    }
    setTimeout(() => {
      setIsLoaded(true);
    }, 0);
  }, [userId, course.lessons]);

  const isLessonUnlocked = (index: number) => {
    if (index === 0) return true;
    // La lección actual está desbloqueada si la anterior está completada
    return completedLessonIds.includes(course.lessons[index - 1].id);
  };

  const handleCompleteAndContinue = () => {
    const currentLesson = course.lessons[activeLessonIndex];
    const newCompleted = completedLessonIds.includes(currentLesson.id)
      ? completedLessonIds
      : [...completedLessonIds, currentLesson.id];

    setCompletedLessonIds(newCompleted);
    localStorage.setItem(`lfi_progress_${userId}`, JSON.stringify(newCompleted));

    if (activeLessonIndex < course.lessons.length - 1) {
      setActiveLessonIndex(activeLessonIndex + 1);
    }
  };

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-[40vh]">
        <div className="w-8 h-8 border-2 border-pch-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const activeLesson = course.lessons[activeLessonIndex];
  const isLastLesson = activeLessonIndex === course.lessons.length - 1;
  const isCurrentCompleted = completedLessonIds.includes(activeLesson.id);

  // Traducciones en línea rápidas
  const tLMS = {
    es: {
      completeBtn: "Marcar como Completado y Continuar",
      nextBtn: "Siguiente Módulo",
      downloadSection: "Recursos Descargables",
      congratsTitle: "¡Felicitaciones!",
      congratsDesc: "Has completado todos los módulos de El Arca Financiera. Estás listo para desplegar tu sistema financiero.",
      locked: "Bloqueado",
      completed: "Completado",
      inProgress: "En curso",
      module: "Módulo",
    },
    en: {
      completeBtn: "Mark as Completed & Continue",
      nextBtn: "Next Module",
      downloadSection: "Downloadable Resources",
      congratsTitle: "Congratulations!",
      congratsDesc: "You have completed all modules of The Financial Ark. You are ready to deploy your financial system.",
      locked: "Locked",
      completed: "Completed",
      inProgress: "In progress",
      module: "Module",
    }
  }[language === "es" ? "es" : "en"];

  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full items-start print:block">
      {/* ── BARRA LATERAL (SIDEBAR) DE MÓDULOS ── */}
      <aside className="w-full lg:w-80 shrink-0 bg-pch-card border border-pch-border rounded-3xl p-6 shadow-md print:hidden">
        <h3 className="text-sm font-bold text-pch-primary uppercase tracking-wider mb-4 px-2">
          {language === "es" ? "Módulos del Curso" : "Course Modules"}
        </h3>
        <nav className="flex flex-col gap-2">
          {course.lessons.map((lesson, index) => {
            const unlocked = isLessonUnlocked(index);
            const completed = completedLessonIds.includes(lesson.id);
            const isActive = index === activeLessonIndex;

            return (
              <button
                key={lesson.id}
                disabled={!unlocked}
                onClick={() => setActiveLessonIndex(index)}
                className={`
                  w-full flex items-start gap-3 p-3.5 rounded-2xl border text-left transition-all duration-200
                  ${isActive 
                    ? "border-pch-primary bg-pch-primary/10 text-pch-primary font-semibold" 
                    : unlocked 
                      ? "border-pch-border hover:border-pch-primary/50 text-[#0b241c] dark:text-white/80 hover:bg-pch-input cursor-pointer" 
                      : "border-pch-border/40 opacity-50 cursor-not-allowed"
                  }
                `}
              >
                {/* Indicador de estado */}
                <div className="shrink-0 mt-0.5">
                  {completed ? (
                    <CheckCircle2 className="w-5 h-5 text-pch-primary" />
                  ) : isActive ? (
                    <PlayCircle className="w-5 h-5 text-pch-primary" />
                  ) : unlocked ? (
                    <div className="w-5 h-5 rounded-full border border-pch-border flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-pch-primary/40" />
                    </div>
                  ) : (
                    <Lock className="w-4 h-4 text-foreground/40" />
                  )}
                </div>

                {/* Título de la clase */}
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs opacity-60 uppercase font-bold tracking-wider">
                    {tLMS.module} {index + 1}
                  </span>
                  <span className="text-xs md:text-sm leading-snug line-clamp-2">
                    {lesson.title[language].replace(/^Módulo \d+ — |^Module \d+ — /, "")}
                  </span>
                </div>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* ── ÁREA PRINCIPAL (VIDEO + DESCARGABLES + BOTÓN) ── */}
      <main className="flex-1 w-full bg-pch-card border border-pch-border rounded-3xl p-6 md:p-8 shadow-md print:border-0 print:shadow-none print:bg-transparent print:p-0">
        {/* Encabezado del Módulo */}
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex items-center gap-2 text-xs font-bold text-pch-primary uppercase tracking-wider">
            <span>{tLMS.module} {activeLessonIndex + 1}</span>
            <span>•</span>
            <span>
              {isCurrentCompleted 
                ? tLMS.completed 
                : isLessonUnlocked(activeLessonIndex) 
                  ? tLMS.inProgress 
                  : tLMS.locked}
            </span>
          </div>
          <h2 className="text-xl md:text-3xl font-bold text-[#0b241c] dark:text-white leading-tight">
            {activeLesson.title[language]}
          </h2>
        </div>

        {/* Reproductor de Video */}
        <div className="mb-8 print:hidden">
          <VideoPlayer 
            videoId={activeLesson.bunnyVideoId} 
            title={activeLesson.title[language]} 
          />
        </div>

        {/* Auditoría Integral (Solo en el Módulo 2 / lesson-2) */}
        {activeLesson.id === "lesson-2" && (
          <div className="mb-8 print:m-0 print:p-0">
            <AuditCanvas
              userId={userId}
              isAlreadyCompleted={isCurrentCompleted}
              onComplete={() => {
                const newCompleted = completedLessonIds.includes(activeLesson.id)
                  ? completedLessonIds
                  : [...completedLessonIds, activeLesson.id];

                setCompletedLessonIds(newCompleted);
                localStorage.setItem(`lfi_progress_${userId}`, JSON.stringify(newCompleted));
              }}
            />
          </div>
        )}

        {/* Carta de Compromiso Solemne (Solo en el Módulo 1 / lesson-1) */}
        {activeLesson.id === "lesson-1" && (
          <div className="mb-8">
            <CommitmentLetter
              studentEmail={userEmail}
              isAlreadySigned={isCurrentCompleted}
              onSign={() => {
                const newCompleted = completedLessonIds.includes(activeLesson.id)
                  ? completedLessonIds
                  : [...completedLessonIds, activeLesson.id];

                setCompletedLessonIds(newCompleted);
                localStorage.setItem(`lfi_progress_${userId}`, JSON.stringify(newCompleted));
              }}
            />
          </div>
        )}

        {/* Sección de Recursos Descargables */}
        {activeLesson.resources && activeLesson.resources.length > 0 && (
          <div className="mb-8 bg-pch-input border border-pch-border rounded-2xl p-6">
            <h4 className="flex items-center gap-2 text-sm font-bold text-[#0b241c] dark:text-white mb-4">
              <Download className="w-4 h-4 text-pch-primary" />
              {tLMS.downloadSection}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeLesson.resources.map((res, i) => (
                <a
                  key={i}
                  href={typeof res.url === "string" ? res.url : res.url[language]}
                  download
                  className="flex items-center gap-4 p-4 rounded-xl border border-pch-border bg-pch-card hover:border-pch-primary/50 hover:shadow-sm transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-pch-primary/10 flex items-center justify-center text-pch-primary group-hover:bg-pch-primary/20 shrink-0">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-xs font-bold text-[#0b241c] dark:text-white truncate">
                      {res.name[language]}
                    </span>
                    <span className="text-[10px] text-foreground/50">
                      {language === "es" ? "Haz clic para descargar" : "Click to download"}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Barra de Acciones / Avanzar (Oculta si es la carta de compromiso y aún no se ha firmado) */}
        {!(activeLesson.id === "lesson-3" && !isCurrentCompleted) && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-pch-border pt-6 mt-6 print:hidden">
            <div>
              {isLastLesson && isCurrentCompleted && (
                <div className="flex items-center gap-3 text-pch-primary bg-pch-primary/10 border border-pch-primary/20 px-4 py-2.5 rounded-xl">
                  <Award className="w-5 h-5 shrink-0" />
                  <span className="text-xs font-medium leading-relaxed max-w-sm">
                    {tLMS.congratsDesc}
                  </span>
                </div>
              )}
            </div>

            <button
              onClick={handleCompleteAndContinue}
              className="w-full sm:w-auto bg-pch-primary text-white dark:text-[#0b241c] rounded-full px-8 py-4 font-bold text-sm hover:opacity-90 hover:shadow-lg hover:shadow-pch-primary/30 transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <span>
                {isCurrentCompleted && !isLastLesson 
                  ? tLMS.nextBtn 
                  : tLMS.completeBtn}
              </span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </main>
    </div>
  );
};
