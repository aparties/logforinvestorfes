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
          en: "Module 1 — The Awakening: Exiting the Cave",
          es: "Módulo 1 — El Despertar: Saliendo de la Caverna",
        },
        duration: "",
        bunnyVideoId: "271a5ad9-24b4-4f4b-8822-e7b9fc0677e4",
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
        id: "lesson-2",
        title: {
          en: "Module 2 — The Emotional Audit: Healing Spiritual Debts",
          es: "Módulo 2 — La Auditoría Emocional: Sanando Deudas Espirituales",
        },
        duration: "",
        bunnyVideoId: "4e2dc924-d1d9-4070-88c9-61bcbd18eddc",
      },
      {
        id: "lesson-3",
        title: {
          en: "Module 3 — The Certainty Paradox and the Ego Trap",
          es: "Módulo 3 — La Paradoja de la Certeza y la Trampa del Ego",
        },
        duration: "",
        bunnyVideoId: "0445a2bb-5a35-478a-bc11-c3702d68c7b8",
      },
      {
        id: "lesson-4",
        title: {
          en: "Module 4 — Your Debt Level: The Net Worth Calculation & The Zero-Based Budget",
          es: "Módulo 4 — Tu Nivel de Deuda: El Cálculo de Patrimonio Neto y El Presupuesto Base Cero",
        },
        duration: "",
        bunnyVideoId: "a22f4b43-0759-4883-96e3-bf7a7bd337fc",
        resources: [
          {
            name: {
              en: "Net Worth Calculation Template (Google Sheets)",
              es: "Plantilla de Cálculo de Patrimonio Neto (Google Sheets)",
            },
            url: "https://docs.google.com/spreadsheets/d/1qgeQMdG2tRCUvB5ldlzxxRvWP4bcUuKbO4C5Y93I4GM/copy",
          },
          {
            name: {
              en: "Zero-Based Budget Spreadsheet (Google Sheets)",
              es: "Planilla de Presupuesto Base Cero (Google Sheets)",
            },
            url: "https://docs.google.com/spreadsheets/d/1qgeQMdG2tRCUvB5ldlzxxRvWP4bcUuKbO4C5Y93I4GM/copy",
          },
        ],
      },
      {
        id: "lesson-5",
        title: {
          en: "Module 5 — The Strategic Sieve",
          es: "Módulo 5 — El Tamiz Estratégico",
        },
        duration: "",
        bunnyVideoId: "bc5a0897-96b8-4dd1-808a-bfab5d9a0ff8",
        resources: [
          {
            name: {
              en: "Strategic Sieve Debt Tracker (Google Sheets)",
              es: "Rastreador de Deudas - El Tamiz Estratégico (Google Sheets)",
            },
            url: "https://docs.google.com/spreadsheets/d/1qgeQMdG2tRCUvB5ldlzxxRvWP4bcUuKbO4C5Y93I4GM/copy",
          },
        ],
      },
      {
        id: "lesson-6",
        title: {
          en: "Module 6 — Building Wealth",
          es: "Módulo 6 — Construyendo Riqueza",
        },
        duration: "",
        bunnyVideoId: "f4229dee-9aa2-4506-b1dd-7241fb39ab70",
        resources: [
          {
            name: {
              en: "ETF Return Calculator (DQYDJ)",
              es: "Calculadora de Retornos de ETF (DQYDJ)",
            },
            url: "https://dqydj.com/etf-return-calculator/?ticker=VOO",
          },
          {
            name: {
              en: "VOO vs. SPLG Comparison (ETF.com)",
              es: "Comparación VOO vs. SPLG (ETF.com)",
            },
            url: "https://www.etf.com/tools/etf-comparison/VOO-vs-SPLG",
          },
          {
            name: {
              en: "US Public Debt Chart (FRED)",
              es: "Gráfico de la Deuda Pública de EE. UU. (FRED)",
            },
            url: "https://fred.stlouisfed.org/series/GFDEBTN",
          },
        ],
      },
      {
        id: "lesson-7",
        title: {
          en: "Module 7 — Installing the Human Software",
          es: "Módulo 7 — Instalando el Software Humano",
        },
        duration: "",
        bunnyVideoId: "fc760048-bbf0-45b3-a808-eb12f9a11c0f",
      },
      {
        id: "lesson-8",
        title: {
          en: "Module 8 — The Wealth Legacy",
          es: "Módulo 8 — El Legado de la Riqueza",
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
