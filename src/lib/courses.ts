/**
 * Configuración central del curso básico de inversión.
 * Los videos están alojados en Bunny.net Stream (Library ID: 693818).
 * Embed URL: https://iframe.mediadelivery.net/embed/{libraryId}/{videoId}
 */

const BUNNY_LIBRARY_ID = "693818";

export type Resource = {
  name: { en: string; es: string };
  url: string;
};

export type Lesson = {
  id: string;
  title: { en: string; es: string };
  duration: string;
  bunnyVideoId: string;
  resources?: Resource[];
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
      en: "The complete 8-module system to go from debt to passive investor.",
      es: "El sistema completo de 8 módulos para pasar de deudas a inversor pasivo.",
    },
    lessons: [
      {
        id: "lesson-1",
        title: {
          en: "Module 1 — Emotional Debt Recognition",
          es: "Módulo 1 — Reconocimiento de Deudas Emocionales",
        },
        duration: "",
        bunnyVideoId: "271a5ad9-24b4-4f4b-8822-e7b9fc0677e4",
      },
      {
        id: "lesson-2",
        title: {
          en: "Module 2 — Spiritual Debt Recognition",
          es: "Módulo 2 — Reconocimiento de Deudas Espirituales",
        },
        duration: "",
        bunnyVideoId: "4e2dc924-d1d9-4070-88c9-61bcbd18eddc",
      },
      {
        id: "lesson-3",
        title: {
          en: "Module 3 — Commitment Sheet",
          es: "Módulo 3 — Firma de la Hoja de Compromiso",
        },
        duration: "",
        bunnyVideoId: "0445a2bb-5a35-478a-bc11-c3702d68c7b8",
        resources: [
          {
            name: {
              en: "Editable Commitment Sheet (Excel)",
              es: "Hoja de Compromiso Editable (Excel)",
            },
            url: "/resources/commitment_sheet.xlsx",
          },
        ],
      },
      {
        id: "lesson-4",
        title: {
          en: "Module 4 — Your Debt Level (4 Levels)",
          es: "Módulo 4 — Tu Nivel de Deuda (4 Niveles)",
        },
        duration: "",
        bunnyVideoId: "a22f4b43-0759-4883-96e3-bf7a7bd337fc",
      },
      {
        id: "lesson-5",
        title: {
          en: "Module 5 — Net Worth Statement",
          es: "Módulo 5 — Estado de Patrimonio Neto",
        },
        duration: "",
        bunnyVideoId: "bc5a0897-96b8-4dd1-808a-bfab5d9a0ff8",
        resources: [
          {
            name: {
              en: "Net Worth Statement Template (Excel)",
              es: "Plantilla de Estado de Patrimonio Neto (Excel)",
            },
            url: "/resources/net_worth_statement.xlsx",
          },
        ],
      },
      {
        id: "lesson-6",
        title: {
          en: "Module 6 — Zero-Based Budget",
          es: "Módulo 6 — Presupuesto Base Cero",
        },
        duration: "",
        bunnyVideoId: "f4229dee-9aa2-4506-b1dd-7241fb39ab70",
        resources: [
          {
            name: {
              en: "Zero-Based Budget Spreadsheet (Excel)",
              es: "Planilla de Presupuesto Base Cero (Excel)",
            },
            url: "/resources/zero_based_budget.xlsx",
          },
        ],
      },
      {
        id: "lesson-7",
        title: {
          en: "Module 7 — Debt Snowball Payoff",
          es: "Módulo 7 — Pago de Deudas: Bola de Nieve",
        },
        duration: "",
        bunnyVideoId: "fc760048-bbf0-45b3-a808-eb12f9a11c0f",
        resources: [
          {
            name: {
              en: "Debt Snowball Calculator (Excel)",
              es: "Calculadora de Bola de Nieve de Deudas (Excel)",
            },
            url: "/resources/debt_snowball.xlsx",
          },
        ],
      },
      {
        id: "lesson-8",
        title: {
          en: "Module 8 — Passive Investing & Global Economy",
          es: "Módulo 8 — Inversión Pasiva y Economía Global",
        },
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
