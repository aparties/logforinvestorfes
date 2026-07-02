/**
 * Configuración central del curso básico de inversión.
 * Los videos están alojados en Bunny.net Stream (Library ID: 693818).
 * Embed URL: https://iframe.mediadelivery.net/embed/{libraryId}/{videoId}
 */

const BUNNY_LIBRARY_ID = "693818";

export type Lesson = {
  id: string;
  title: { en: string; es: string };
  duration: string;
  bunnyVideoId: string;
};

export type CourseId = "basic";

export type Course = {
  id: CourseId;
  title: { en: string; es: string };
  description: { en: string; es: string };
  lessons: Lesson[];
};

export const COURSES: Record<CourseId, Course> = {
  basic: {
    id: "basic",
    title: {
      en: "Passive Investing",
      es: "Inversión Pasiva",
    },
    description: {
      en: "The basic system to invest without stress.",
      es: "El sistema básico para invertir sin estrés.",
    },
    lessons: [
      {
        id: "lesson-1",
        title: { en: "Module 1", es: "Módulo 1" },
        duration: "",
        bunnyVideoId: "271a5ad9-24b4-4f4b-8822-e7b9fc0677e4",
      },
      {
        id: "lesson-2",
        title: { en: "Module 2", es: "Módulo 2" },
        duration: "",
        bunnyVideoId: "4e2dc924-d1d9-4070-88c9-61bcbd18eddc",
      },
      {
        id: "lesson-3",
        title: { en: "Module 3", es: "Módulo 3" },
        duration: "",
        bunnyVideoId: "0445a2bb-5a35-478a-bc11-c3702d68c7b8",
      },
      {
        id: "lesson-4",
        title: { en: "Module 4", es: "Módulo 4" },
        duration: "",
        bunnyVideoId: "a22f4b43-0759-4883-96e3-bf7a7bd337fc",
      },
      {
        id: "lesson-5",
        title: { en: "Module 5", es: "Módulo 5" },
        duration: "",
        bunnyVideoId: "bc5a0897-96b8-4dd1-808a-bfab5d9a0ff8",
      },
      {
        id: "lesson-6",
        title: { en: "Module 6", es: "Módulo 6" },
        duration: "",
        bunnyVideoId: "f4229dee-9aa2-4506-b1dd-7241fb39ab70",
      },
      {
        id: "lesson-7",
        title: { en: "Module 7", es: "Módulo 7" },
        duration: "",
        bunnyVideoId: "fc760048-bbf0-45b3-a808-eb12f9a11c0f",
      },
      {
        id: "lesson-8",
        title: { en: "Module 8", es: "Módulo 8" },
        duration: "",
        bunnyVideoId: "4931c9a4-568d-4650-ae1d-dd6bb6dfc48a",
      },
    ],
  },
};

/** Construye el URL de embed de Bunny Stream para un video dado. */
export const getBunnyEmbedUrl = (videoId: string): string =>
  `https://iframe.mediadelivery.net/embed/${BUNNY_LIBRARY_ID}/${videoId}?autoplay=false&loop=false&muted=false&preload=true&responsive=true`;

/** Devuelve el thumbnail de Bunny para un video dado. */
export const getBunnyThumbnailUrl = (videoId: string): string =>
  `https://vz-${BUNNY_LIBRARY_ID}.b-cdn.net/${videoId}/thumbnail.jpg`;
