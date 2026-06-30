"use client";

import { useState } from "react";
import { PlayCircle, CheckCircle, Lock } from "lucide-react";
import type { Lesson } from "@/lib/courses";
import { VideoPlayer } from "@/components/VideoPlayer";

type CourseLessonProps = {
  lesson: Lesson;
  index: number;
  isUnlocked: boolean;
  title: string;
};

/**
 * Card de una lección individual del curso.
 * Al hacer click en una lección desbloqueada, expande el reproductor in-place.
 */
export const CourseLesson = ({
  lesson,
  index,
  isUnlocked,
  title,
}: CourseLessonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (!isUnlocked) return;
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        isUnlocked
          ? "border-pch-border bg-pch-card hover:border-pch-primary/50 cursor-pointer"
          : "border-pch-border/50 bg-pch-card/50 cursor-not-allowed opacity-60"
      }`}
    >
      {/* Header de la lección */}
      <div
        className="flex items-center gap-4 p-5"
        onClick={handleToggle}
        role="button"
        tabIndex={isUnlocked ? 0 : -1}
        onKeyDown={(e) => e.key === "Enter" && handleToggle()}
        aria-expanded={isOpen}
        aria-label={title}
      >
        {/* Número de lección */}
        <div className="w-9 h-9 rounded-full bg-pch-input border border-pch-border flex items-center justify-center shrink-0">
          <span className="text-sm font-bold text-pch-primary">{index + 1}</span>
        </div>

        {/* Título */}
        <span className="flex-1 font-semibold text-foreground dark:text-white text-sm">
          {title}
        </span>

        {/* Icono de estado */}
        <div className="shrink-0">
          {!isUnlocked ? (
            <Lock className="w-4 h-4 text-foreground/40" />
          ) : isOpen ? (
            <CheckCircle className="w-5 h-5 text-pch-primary" />
          ) : (
            <PlayCircle className="w-5 h-5 text-pch-primary" />
          )}
        </div>
      </div>

      {/* Reproductor expandible */}
      {isOpen && isUnlocked && (
        <div className="px-5 pb-5">
          <VideoPlayer videoId={lesson.bunnyVideoId} title={title} />
        </div>
      )}
    </div>
  );
};
