"use client";

import { BookOpen } from "lucide-react";
import type { Course } from "@/lib/courses";
import { CourseLesson } from "@/components/CourseLesson";
import { useLanguage } from "@/i18n/LanguageContext";

type CourseLessonsGridProps = {
  course: Course;
};

/**
 * Grid que renderiza todas las lecciones de un curso.
 * Todas las lecciones están desbloqueadas (el alumno ya pagó al estar en el dashboard).
 */
export const CourseLessonsGrid = ({ course }: CourseLessonsGridProps) => {
  const { language } = useLanguage();

  return (
    <div className="w-full">
      {/* Header del curso */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-pch-primary/20 flex items-center justify-center shrink-0">
          <BookOpen className="w-5 h-5 text-pch-primary" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground dark:text-white">
            {course.title[language]}
          </h2>
          <p className="text-sm text-foreground/70">{course.description[language]}</p>
        </div>
      </div>

      {/* Lista de lecciones */}
      <div className="flex flex-col gap-3">
        {course.lessons.map((lesson, index) => (
          <CourseLesson
            key={lesson.id}
            lesson={lesson}
            index={index}
            isUnlocked={true}
            title={lesson.title[language]}
          />
        ))}
      </div>
    </div>
  );
};
