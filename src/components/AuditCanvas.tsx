"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  AlertTriangle,
  Printer,
  RefreshCw,
  FileText,
  CheckSquare,
  Square,
  Sparkles,
  ShieldAlert,
  Sliders,
  Award,
  BookOpen,
  ClipboardList,
  Check,
  Lock,
  Unlock
} from "lucide-react";

interface AuditQuestion {
  id: string;
  text: { en: string; es: string };
  translation: { en: string; es: string };
  recommendation: { en: string; es: string };
}

interface AuditLevel {
  id: number;
  title: { en: string; es: string };
  subtitle: { en: string; es: string };
  color: string;
  icon: React.ComponentType<{ className?: string }>;
  description: { en: string; es: string };
  questions: AuditQuestion[];
}

const AUDIT_LEVELS: AuditLevel[] = [
  {
    id: 1,
    title: { en: "Level 1", es: "Nivel 1" },
    subtitle: { en: "Practical", es: "Práctico" },
    color: "emerald",
    icon: Sliders,
    description: {
      en: "Financial leaks, daily operational order, and visible consumption habits.",
      es: "Fugas financieras, orden operativo diario y hábitos de consumo visibles."
    },
    questions: [
      {
        id: "q1_1",
        text: { en: "Do I spend more than I earn?", es: "¿Gasto más de lo que gano?" },
        translation: { en: "Financial deficit/overspending", es: "Déficit financiero / Sobregasto" },
        recommendation: {
          en: "Establish a strict cash flow rule: Never spend capital or resources you do not physically have.",
          es: "Establece una regla estricta de flujo de caja: Nunca gastes capital o recursos que no tengas físicamente."
        }
      },
      {
        id: "q1_2",
        text: { en: "Have I acted as a guarantor, affecting my peace?", es: "¿He servido como codeudor o fiador, afectando mi paz?" },
        translation: { en: "Co-signing/guarantor liabilities", es: "Pasivos por codeudores / garantías" },
        recommendation: {
          en: "Politely but firmly refuse requests to act as a financial guarantor to protect your peace.",
          es: "Rechaza con cortesía pero con firmeza las solicitudes para ser codeudor o fiador y así proteger tu paz."
        }
      },
      {
        id: "q1_3",
        text: { en: "Do I lack a budget?", es: "¿No tengo un presupuesto?" },
        translation: { en: "Lacking active budget tracking", es: "Falta de seguimiento de presupuesto activo" },
        recommendation: {
          en: "Build a foundational emergency reserve representing at least 1 month of absolute essential expenditures.",
          es: "Construye una reserva de emergencia básica que represente al menos 1 mes de tus gastos absolutamente esenciales."
        }
      }
    ]
  },
  {
    id: 2,
    title: { en: "Level 2", es: "Nivel 2" },
    subtitle: { en: "Behavioral", es: "Conductual" },
    color: "amber",
    icon: BookOpen,
    description: {
      en: "Leaks tied to self-discipline, daily focus, and personal boundary settings.",
      es: "Fugas vinculadas a la autodisciplina, el enfoque diario y el establecimiento de límites personales."
    },
    questions: [
      {
        id: "q2_1",
        text: { en: "Do I not know how to say 'no'?", es: "¿No sé cómo decir 'no'?" },
        translation: { en: "Drained by people-pleasing tendencies", es: "Desgastado por tendencias a complacer a los demás" },
        recommendation: {
          en: "Practice declaring an elegant, calm, yet firm 'no' to demands that dilute your core focus.",
          es: "Practica declarar un 'no' elegante, tranquilo pero firme a las demandas que diluyen tu enfoque principal."
        }
      },
      {
        id: "q2_2",
        text: { en: "Do I watch a lot of TV and read very little?", es: "¿Veo mucha televisión y leo muy poco?" },
        translation: { en: "Excessive passive media consumption", es: "Consumo pasivo excesivo de medios" },
        recommendation: {
          en: "Redistribute 30 minutes of screen time daily into goal-specific reading or structured growth.",
          es: "Redistribuye 30 minutos de tiempo de pantalla al día en lectura específica de objetivos o crecimiento estructurado."
        }
      },
      {
        id: "q2_3",
        text: { en: "Do I start projects but not finish them?", es: "¿Empiezo proyectos pero no los termino?" },
        translation: { en: "Leaving initiatives incomplete", es: "Dejar iniciativas incompletas" },
        recommendation: {
          en: "Impose a strict 'One Active Project' policy: do not start new pursuits until the current one is shipped.",
          es: "Impón una política estricta de 'Un Solo Proyecto Activo': no comiences nuevas búsquedas hasta terminar la actual."
        }
      }
    ]
  },
  {
    id: 3,
    title: { en: "Level 3", es: "Nivel 3" },
    subtitle: { en: "Emotional", es: "Emocional" },
    color: "orange",
    icon: Award,
    description: {
      en: "Leaks rooted in self-image, social comparison, pride, and expressive complaining.",
      es: "Fugas arraigadas en la autoimagen, la comparación social, el orgullo y la queja constante."
    },
    questions: [
      {
        id: "q3_1",
        text: { en: "Do I compare myself frequently?", es: "¿Me comparo con otros frecuentemente?" },
        translation: { en: "Comparing your backstage to others' highlights", es: "Comparar tu trasbambalinas con el escenario ajeno" },
        recommendation: {
          en: "Measure your personal evolution strictly against your own yesterday, never against another's storefront.",
          es: "Mide tu evolución personal estrictamente en comparación con tu propio ayer, nunca contra la fachada de otra persona."
        }
      },
      {
        id: "q3_2",
        text: { en: "Do I turn down jobs because of pride?", es: "¿Rechazo trabajos por orgullo?" },
        translation: { en: "Refusing stepping stones or needed assistance", es: "Rechazar escalones o ayuda necesaria" },
        recommendation: {
          en: "Acquire operational humility: embrace every piece of honest labor as a valuable stepping stone.",
          es: "Adquiere humildad operativa: abraza cada labor honesta como un escalón valioso."
        }
      },
      {
        id: "q3_3",
        text: { en: "Do I spend my time complaining?", es: "¿Paso mi tiempo quejándome?" },
        translation: { en: "Wasting vocal energy on uncontrollable variables", es: "Desperdiciar energía verbal en variables fuera de control" },
        recommendation: {
          en: "Commit to a 7-day 'Zero Complaint' fast. Instantly reframe criticisms into objective solutions.",
          es: "Comprométete con un ayuno de 7 días de 'Cero Quejas'. Replantea de inmediato las críticas en soluciones objetivas."
        }
      }
    ]
  },
  {
    id: 4,
    title: { en: "Level 4", es: "Nivel 4" },
    subtitle: { en: "Spiritual", es: "Espiritual" },
    color: "rose",
    icon: ShieldAlert,
    description: {
      en: "The deepest root level. Affects essential principles, relational roots, and fundamental laws.",
      es: "El nivel raíz más profundo. Afecta principios esenciales, raíces relacionales y leyes fundamentales."
    },
    questions: [
      {
        id: "q4_1",
        text: { en: "Is there anyone I can forgive?", es: "¿Hay alguien a quien deba perdonar?" },
        translation: { en: "Carrying toxic relational baggage or grudges", es: "Cargar equipaje relacional tóxico o rencores" },
        recommendation: {
          en: "Initiate a systematic, internal process of reconciliation or active release of past resentments.",
          es: "Inicia un proceso interno y sistemático de reconciliación o liberación activa de resentimientos pasados."
        }
      },
      {
        id: "q4_2",
        text: { en: "Have I dishonored my parents?", es: "¿He deshonrado a mis padres?" },
        translation: { en: "Harboring unspoken disrespect, pride, or resentment", es: "Albergar falta de respeto, orgullo o resentimiento no expresados" },
        recommendation: {
          en: "Actively restore honorary status to your parents or ancestral lineage through intentional acts of gratitude.",
          es: "Restaura activamente la honra a tus padres o linaje ancestral mediante actos intencionados de gratitud."
        }
      },
      {
        id: "q4_3",
        text: { en: "Am I ignoring the law of sowing?", es: "¿Estoy ignorando la ley de la siembra?" },
        translation: { en: "Expecting a harvest without prior intentional planting", es: "Esperar una cosecha sin una siembra intencional previa" },
        recommendation: {
          en: "Re-align with the Law of Sowing: plant substantial, unselfish value in others before demanding returns.",
          es: "Vuelve a alinearte con la Ley de la Siembra: siembra valor sustancial y desinteresado en otros antes de exigir retornos."
        }
      }
    ]
  }
];

const LOCALIZED_TEXTS = {
  en: {
    title: "Comprehensive Audit Engine",
    subtitle: "Deep structural diagnosis based on the Audit Leak methodology",
    clientPlaceholder: "Enter Evaluated Name / Client",
    resetBtn: "Reset",
    heading: "Your Comprehensive Audit",
    leakQuestion: "Where's your leak?",
    instruction: 'Locate active behavioral and structural leakages by ticking the indicators. Adhere strictly to the golden rule: "Identify your deepest level of failure, that is precisely where your true restructuring must begin."',
    depthGauge: "DEPTH GAUGE",
    selectAll: "Select All",
    deselect: "Deselect",
    observationsLabel: "Observations & Immediate Session Commitments",
    observationsPlaceholder: "Record deep personal insights, vulnerability blocks, session notes, or structured immediate action items here...",
    liveReportTitle: "Live Diagnosis Report",
    printBtn: "Print / Save as PDF",
    reportHeaderBadge: "Audit Leak Report",
    reportHeaderTitle: "Structural Restructuring Audit",
    auditDate: "Audit Date",
    evaluatedClient: "Evaluated Client",
    activeLeaks: "Active Leaks",
    secondaryFocus: "Secondary Focus",
    severityIndex: "Leak Severity Index",
    weightedDepth: "Weighted by Depth",
    primaryFocus: "Primary Restructuring Focus:",
    coreAnalysisHeading: "Core Root Analysis",
    coreAnalysisText: "In accordance with the Depth Gauge guidelines, leakages occurring at higher practical or behavioral altitudes are merely secondary expressions of deeper dysfunctions. Treating superficial behaviors will produce only temporary success unless the core architectural foundation at",
    coreAnalysisSuffix: "is fundamentally aligned first.",
    roadmapHeading: "Recommended Strategic Roadmap",
    riskIndicatorsHeading: "Identified Risk Indicators",
    noLeaksTitle: "No active leaks detected",
    noLeaksDesc: "Check indicators corresponding to your realities on the diagnostic sheet to synthesize a structured restoration plan.",
    strategicRemarks: "Coach & Counselor Strategic Remarks",
    methodologyFooter: 'Audit Leak methodology - "The restructure begins where the leak deepens."',
    footerRights: "Self-auditing diagnostic instrument. All rights reserved.",
    btnLock: "Save & Lock Diagnostic",
    btnUnlock: "Unlock to Edit",
    lockedStatus: "Diagnostic canvas locked and saved.",
  },
  es: {
    title: "Motor de Auditoría Integral",
    subtitle: "Diagnóstico estructural profundo basado en la metodología de Fugas de Auditoría",
    clientPlaceholder: "Ingrese Nombre del Evaluado / Cliente",
    resetBtn: "Restablecer",
    heading: "Tu Auditoría Integral",
    leakQuestion: "¿Dónde está tu fuga?",
    instruction: 'Localiza las fugas activas conductuales y estructurales marcando los indicadores. Adhiérete estrictamente a la regla de oro: "Identifica tu nivel más profundo de falla, ahí es precisamente donde debe comenzar tu verdadera reestructuración".',
    depthGauge: "MEDIDOR DE PROFUNDIDAD",
    selectAll: "Marcar Todo",
    deselect: "Desmarcar",
    observationsLabel: "Observaciones y Compromisos Inmediatos de la Sesión",
    observationsPlaceholder: "Registra aquí ideas personales profundas, bloqueos de vulnerabilidad, notas de la sesión o elementos de acción inmediata estructurados...",
    liveReportTitle: "Reporte de Diagnóstico en Vivo",
    printBtn: "Imprimir / Guardar como PDF",
    reportHeaderBadge: "Reporte de Fuga de Auditoría",
    reportHeaderTitle: "Auditoría de Reestructuración Estructural",
    auditDate: "Fecha de Auditoría",
    evaluatedClient: "Cliente Evaluado",
    activeLeaks: "Fugas Activas",
    secondaryFocus: "Enfoque Secundario",
    severityIndex: "Índice de Severidad de Fuga",
    weightedDepth: "Ponderado por Profundidad",
    primaryFocus: "Enfoque Principal de Reestructuración:",
    coreAnalysisHeading: "Análisis de Causa Raíz",
    coreAnalysisText: "De acuerdo con las pautas del Medidor de Profundidad, las fugas que ocurren a mayores altitudes prácticas o conductuales son simplemente expresiones secundarias de disfunciones más profundas. Tratar comportamientos superficiales producirá solo un éxito temporal a menos que la base arquitectónica central en",
    coreAnalysisSuffix: "esté fundamentalmente alineada primero.",
    roadmapHeading: "Hoja de Ruta Estratégica Recomendada",
    riskIndicatorsHeading: "Indicadores de Riesgo Identificados",
    noLeaksTitle: "No se detectaron fugas activas",
    noLeaksDesc: "Marca los indicadores correspondientes a tus realidades en la hoja de diagnóstico para sintetizar un plan de restauración estructurado.",
    strategicRemarks: "Observaciones Estratégicas del Coach y Consejero",
    methodologyFooter: 'Metodología Audit Leak - "La reestructuración comienza donde la fuga se profundiza."',
    footerRights: "Instrumento de diagnóstico de autoevaluación. Todos los derechos reservados.",
    btnLock: "Guardar y Bloquear Diagnóstico",
    btnUnlock: "Desbloquear para Editar",
    lockedStatus: "Lienzo de diagnóstico bloqueado y guardado.",
  }
};

type AuditCanvasProps = {
  userId: string;
  isAlreadyCompleted: boolean;
  onComplete: () => void;
};

export const AuditCanvas = ({
  userId,
  isAlreadyCompleted,
  onComplete,
}: AuditCanvasProps) => {
  const { language } = useLanguage();
  const t = LOCALIZED_TEXTS[language === "es" ? "es" : "en"];

  const [selections, setSelections] = useState<Record<string, boolean>>({});
  const [userNotes, setUserNotes] = useState<string>("");
  const [clientName, setClientName] = useState<string>("");
  const [isLocked, setIsLocked] = useState<boolean>(isAlreadyCompleted);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // Load saved state
  useEffect(() => {
    setIsMounted(true);
    if (!userId) return;
    const stored = localStorage.getItem(`lfi_audit_data_${userId}`);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed.selections) setSelections(parsed.selections);
        if (parsed.userNotes) setUserNotes(parsed.userNotes);
        if (parsed.clientName) setClientName(parsed.clientName);
        if (parsed.isLocked !== undefined) setIsLocked(parsed.isLocked);
      } catch (e) {
        console.error("Error loading saved audit data:", e);
      }
    }
  }, [userId]);

  // Save changes to localstorage when states modify
  useEffect(() => {
    if (!isMounted || !userId) return;
    const dataToSave = {
      selections,
      userNotes,
      clientName,
      isLocked
    };
    localStorage.setItem(`lfi_audit_data_${userId}`, JSON.stringify(dataToSave));
  }, [selections, userNotes, clientName, isLocked, userId, isMounted]);

  // Sync isLocked with the isAlreadyCompleted prop if it changes
  useEffect(() => {
    if (isAlreadyCompleted) {
      setIsLocked(true);
    }
  }, [isAlreadyCompleted]);

  // Individual checkbox toggle
  const toggleSelection = (id: string) => {
    if (isLocked) return;
    setSelections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Mass select/deselect per audit tier
  const toggleAllLevel = (levelId: number, state: boolean) => {
    if (isLocked) return;
    const level = AUDIT_LEVELS.find((l) => l.id === levelId);
    if (!level) return;
    const updated = { ...selections };
    level.questions.forEach((q) => {
      updated[q.id] = state;
    });
    setSelections(updated);
  };

  const getDeepestLevel = (): AuditLevel | null => {
    // Evaluates from bottom (Level 4 - Spiritual) up to top (Level 1 - Practical)
    for (let i = AUDIT_LEVELS.length - 1; i >= 0; i--) {
      const level = AUDIT_LEVELS[i];
      const hasAnySelected = level.questions.some((q) => !!selections[q.id]);
      if (hasAnySelected) {
        return level;
      }
    }
    return null;
  };

  const deepestLevel = getDeepestLevel();

  // Metrics calculations
  const totalQuestions = AUDIT_LEVELS.flatMap((l) => l.questions).length;
  const selectedCount = Object.values(selections).filter(Boolean).length;
  const checkedQuestions = AUDIT_LEVELS.flatMap((l) => l.questions).filter(
    (q) => !!selections[q.id]
  );

  // Calculates level scores strictly matching user request:
  // L1 = max 10%, L2 = max 20%, L3 = max 30%, L4 = max 40% (sum is 100%)
  const getLevelPercentage = (levelId: number): number => {
    const level = AUDIT_LEVELS.find((l) => l.id === levelId);
    if (!level) return 0;
    const checkedCount = level.questions.filter((q) => !!selections[q.id]).length;
    const totalCount = level.questions.length;
    if (totalCount === 0) return 0;

    const maxContribution =
      levelId === 1 ? 10 : levelId === 2 ? 20 : levelId === 3 ? 30 : 40;
    return (checkedCount / totalCount) * maxContribution;
  };

  const leakPercentage = Math.round(
    getLevelPercentage(1) +
      getLevelPercentage(2) +
      getLevelPercentage(3) +
      getLevelPercentage(4)
  );

  // Clear workspace
  const resetCanvas = () => {
    if (isLocked) return;
    setSelections({});
    setUserNotes("");
    setClientName("");
  };

  // PDF Print
  const handlePrint = () => {
    window.print();
  };

  // Lock and complete lesson
  const handleLockDiagnostic = () => {
    setIsLocked(true);
    onComplete();
  };

  const handleUnlockDiagnostic = () => {
    setIsLocked(false);
  };

  // Prevent hydration discrepancies
  if (!isMounted) {
    return (
      <div className="flex items-center justify-center p-8 bg-pch-card border border-pch-border rounded-3xl">
        <div className="w-8 h-8 border-2 border-pch-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full space-y-8 print:bg-white print:text-black">
      
      {/* HEADER SECTION - Auto hidden during PDF output */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 bg-pch-card border border-pch-border rounded-3xl print:hidden">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-pch-primary/10 rounded-xl shadow-sm text-pch-primary">
            <ClipboardList className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-[#0b241c] dark:text-white">
              {t.title}
            </h1>
            <p className="text-xs text-foreground/60">{t.subtitle}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <input
            type="text"
            placeholder={t.clientPlaceholder}
            value={clientName}
            disabled={isLocked}
            onChange={(e) => setClientName(e.target.value)}
            className="px-4 py-2 text-sm bg-pch-input border border-pch-border rounded-xl focus:outline-none focus:ring-2 focus:ring-pch-primary w-full sm:w-60 placeholder:text-foreground/35 text-foreground disabled:opacity-60"
          />
          <button
            onClick={resetCanvas}
            disabled={isLocked}
            title={language === "es" ? "Restablecer Diagnóstico" : "Reset Diagnostic"}
            className="p-2 bg-pch-input hover:bg-pch-border border border-pch-border rounded-xl text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1.5 text-sm shrink-0 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <RefreshCw className="w-4 h-4" />
            <span className="hidden md:inline">{t.resetBtn}</span>
          </button>
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start print:block print:w-full">
        
        {/* LEFT COLUMN: INTERACTIVE AUDIT DIAGNOSIS SHEET */}
        <div className="lg:col-span-7 space-y-6 print:hidden">
          
          {/* Methodology instruction block */}
          <div className="bg-pch-card border border-pch-border p-6 rounded-3xl relative overflow-hidden">
            <div className="absolute right-0 top-0 w-32 h-32 bg-pch-primary/5 blur-3xl rounded-full"></div>
            <h2 className="text-xl font-bold text-[#0b241c] dark:text-white mb-2 flex items-center gap-2">
              {t.heading} <span className="text-pch-primary text-base font-semibold">{t.leakQuestion}</span>
            </h2>
            <p className="text-xs text-foreground/75 leading-relaxed max-w-xl">
              {t.instruction}
            </p>
          </div>

          <div className="grid grid-cols-12 gap-4 bg-pch-card border border-pch-border p-5 rounded-3xl relative">
            
            {/* DEPTH GAUGE TRACKER */}
            <div className="col-span-2 md:col-span-1 flex flex-col items-center py-6 relative">
              <div className="absolute top-0 bottom-0 w-1 bg-pch-input rounded"></div>
              
              {/* Responsive indicator line */}
              <div 
                className="absolute top-0 w-1 bg-gradient-to-b from-emerald-500 via-amber-500 to-rose-500 rounded transition-all duration-700 ease-out"
                style={{ 
                  height: deepestLevel ? `${(deepestLevel.id / 4) * 100}%` : '0%' 
                }}
              />

              <span className="text-[8px] uppercase font-black tracking-widest text-foreground/30 rotate-270 absolute -left-12 top-28 h-4 w-28 text-center origin-center select-none">
                {t.depthGauge}
              </span>

              {/* Gauge nodes corresponding to the four layers */}
              <div className="flex flex-col justify-between h-full z-10 py-2">
                {[1, 2, 3, 4].map((num) => {
                  const isActive = deepestLevel && deepestLevel.id >= num;
                  const isCurrentDeepest = deepestLevel && deepestLevel.id === num;
                  const levelMeta = AUDIT_LEVELS.find(l => l.id === num);
                  
                  return (
                    <div 
                      key={num} 
                      className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-[10px] border-2 transition-all duration-500 ${
                        isCurrentDeepest 
                          ? 'bg-rose-500 text-white border-white scale-110 shadow-lg shadow-rose-500/30' 
                          : isActive 
                            ? 'bg-pch-card text-pch-primary border-pch-primary' 
                            : 'bg-pch-input text-foreground/30 border-pch-border'
                      }`}
                      title={levelMeta ? `${levelMeta.title[language === "es" ? "es" : "en"]} (${levelMeta.subtitle[language === "es" ? "es" : "en"]})` : `Level ${num}`}
                    >
                      {num}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* AUDIT TIERS AND THEIR QUESTIONS */}
            <div className="col-span-10 md:col-span-11 space-y-4">
              {AUDIT_LEVELS.map((level) => {
                const isDeepest = deepestLevel?.id === level.id;
                const hasSelectionsInLevel = level.questions.some(q => !!selections[q.id]);
                
                return (
                  <div 
                    key={level.id}
                    className={`transition-all duration-300 rounded-2xl border p-4 ${
                      isDeepest 
                        ? 'bg-pch-input/20 border-rose-500/50 shadow-sm' 
                        : hasSelectionsInLevel
                          ? 'bg-pch-input/10 border-pch-primary/30'
                          : 'bg-pch-card border-pch-border'
                    }`}
                  >
                    {/* Tier Header block */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 mb-3 border-b border-pch-border/55">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                          isDeepest ? 'text-rose-600 bg-rose-500/10' : 'text-foreground/50 bg-pch-input'
                        }`}>
                          {level.title[language === "es" ? "es" : "en"]}
                        </span>
                        <h3 className="text-sm font-bold text-[#0b241c] dark:text-white">
                          {level.subtitle[language === "es" ? "es" : "en"]}
                        </h3>
                      </div>
                      
                      {!isLocked && (
                        <div className="flex items-center gap-1.5 text-[10px] text-foreground/50">
                          <button 
                            onClick={() => toggleAllLevel(level.id, true)} 
                            className="hover:text-pch-primary transition-colors cursor-pointer"
                          >
                            {t.selectAll}
                          </button>
                          <span>•</span>
                          <button 
                            onClick={() => toggleAllLevel(level.id, false)} 
                            className="hover:text-rose-500 transition-colors cursor-pointer"
                          >
                            {t.deselect}
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Interactive Level Checkboxes */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {level.questions.map((q) => {
                        const isChecked = !!selections[q.id];
                        return (
                          <div
                            key={q.id}
                            onClick={() => toggleSelection(q.id)}
                            className={`p-3 rounded-xl border transition-all flex flex-col justify-between text-left select-none group ${
                              isChecked
                                ? 'bg-pch-input/40 border-pch-primary shadow-inner'
                                : 'bg-pch-card border-pch-border hover:border-pch-primary/40 hover:bg-pch-input/20'
                            } ${isLocked ? 'cursor-default opacity-85' : 'cursor-pointer'}`}
                          >
                            <div className="flex items-start justify-between gap-2 mb-2">
                              {isChecked ? (
                                <CheckSquare className="w-4 h-4 text-pch-primary shrink-0" />
                              ) : (
                                <Square className="w-4 h-4 text-foreground/30 group-hover:text-foreground/55 shrink-0" />
                              )}
                              <span className="text-[9px] text-foreground/40 font-mono">#{q.id}</span>
                            </div>
                            <div>
                              <p className="text-[11px] font-semibold text-foreground group-hover:text-[#0b241c] dark:group-hover:text-white leading-tight mb-1">
                                {q.text[language === "es" ? "es" : "en"]}
                              </p>
                              <p className="text-[8px] text-foreground/45 uppercase tracking-wider font-semibold font-mono">
                                {q.translation[language === "es" ? "es" : "en"]}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Session commitments text area */}
          <div className="bg-pch-card border border-pch-border p-5 rounded-3xl">
            <h3 className="text-xs font-semibold text-foreground/80 mb-2.5 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-pch-primary" />
              {t.observationsLabel}
            </h3>
            <textarea
              value={userNotes}
              disabled={isLocked}
              onChange={(e) => setUserNotes(e.target.value)}
              placeholder={t.observationsPlaceholder}
              className="w-full h-24 p-3 rounded-xl bg-pch-input border border-pch-border text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-pch-primary placeholder:text-foreground/30 resize-none disabled:opacity-60"
            />
          </div>

          {/* LOCKING CONTROLS */}
          <div className="p-5 bg-pch-card border border-pch-border rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            {isLocked ? (
              <>
                <div className="flex items-center gap-2.5 text-pch-primary">
                  <Check className="w-5 h-5 shrink-0" />
                  <span className="text-xs font-semibold">{t.lockedStatus}</span>
                </div>
                <button
                  onClick={handleUnlockDiagnostic}
                  className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 py-2 border border-pch-primary/45 hover:border-pch-primary text-pch-primary text-xs font-bold rounded-full transition-colors cursor-pointer"
                >
                  <Unlock className="w-3.5 h-3.5" />
                  {t.btnUnlock}
                </button>
              </>
            ) : (
              <>
                <p className="text-xs text-foreground/60 leading-relaxed text-center sm:text-left">
                  {language === "es" 
                    ? "Una vez lleno, bloquea el diagnóstico para guardar tu reporte y desbloquear el siguiente módulo." 
                    : "Once filled, lock the diagnostic to save your report and unlock the next module."}
                </p>
                <button
                  onClick={handleLockDiagnostic}
                  disabled={selectedCount === 0}
                  className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-5 py-2.5 bg-pch-primary hover:bg-pch-primary/95 text-white dark:text-[#0b241c] text-xs font-black rounded-full shadow-md shadow-pch-primary/10 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
                >
                  <Lock className="w-3.5 h-3.5" />
                  {t.btnLock}
                </button>
              </>
            )}
          </div>

        </div>

        {/* RIGHT COLUMN: EXECUTIVE REPORT PREVIEW AND PRINT CANVAS */}
        <div className="lg:col-span-5 space-y-5 print:col-span-12 print:w-full print:p-0 print:m-0">
          
          {/* Action Trigger - hidden from PDF print but displays on live screen */}
          <div className="flex justify-between items-center print:hidden">
            <h3 className="text-xs font-bold text-foreground/40 tracking-wider uppercase">
              {t.liveReportTitle}
            </h3>
            <button 
              onClick={handlePrint}
              disabled={!deepestLevel}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                deepestLevel 
                  ? 'bg-pch-primary hover:opacity-95 text-white dark:text-[#0b241c] cursor-pointer shadow-md shadow-pch-primary/15' 
                  : 'bg-pch-input text-foreground/30 cursor-not-allowed border border-pch-border/60'
              }`}
            >
              <Printer className="w-3.5 h-3.5" />
              {t.printBtn}
            </button>
          </div>

          {/* PDF CANVAS - DESIGNED TO FIT AND RENDER PERFECTLY BOTH AS WEB PREVIEW AND PDF EXPORT */}
          <div className="bg-pch-card border border-pch-border rounded-3xl overflow-hidden shadow-md relative print:border-none print:shadow-none print:bg-white print:text-black print:w-full print:p-0">
            
            {/* Header Area of the Executive Report */}
            <div className="bg-pch-input/30 p-5 border-b border-pch-border/70 print:bg-slate-100 print:text-black print:border-b-2 print:border-slate-300 print:p-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[9px] bg-pch-primary/10 border border-pch-primary/20 text-pch-primary font-bold px-2 py-0.5 rounded uppercase tracking-wider print:border print:border-slate-350 print:text-pch-primary">
                    {t.reportHeaderBadge}
                  </span>
                  <h2 className="text-base font-extrabold text-[#0b241c] dark:text-white mt-1.5 print:text-black">
                    {t.reportHeaderTitle}
                  </h2>
                </div>
                <div className="text-right">
                  <p className="text-[8px] text-foreground/40 uppercase tracking-widest">{t.auditDate}</p>
                  <p className="text-xs font-semibold text-foreground print:text-slate-800">{new Date().toLocaleDateString()}</p>
                </div>
              </div>

              {clientName && (
                <div className="mt-3.5 p-2 bg-pch-input/40 border border-pch-border/50 rounded-lg print:bg-slate-50 print:border-slate-350">
                  <span className="text-[8px] text-foreground/45 block uppercase font-bold">{t.evaluatedClient}</span>
                  <p className="text-xs font-bold text-foreground print:text-black">{clientName}</p>
                </div>
              )}
            </div>

            {/* Document Body */}
            <div className="p-5 space-y-5 print:p-4 print:space-y-3">
              
              {/* Stat breakdown */}
              <div className="grid grid-cols-2 gap-3.5 print:gap-3">
                <div className="bg-pch-input/20 p-3 rounded-xl border border-pch-border/60 text-center print:bg-slate-50 print:border-slate-300 print:p-2">
                  <span className="text-[10px] text-foreground/50 block uppercase font-bold print:text-[8px]">{t.activeLeaks}</span>
                  <p className="text-2xl font-black text-foreground mt-1 print:text-black print:text-base">{selectedCount} / {totalQuestions}</p>
                </div>
                <div className="bg-pch-input/20 p-3 rounded-xl border border-pch-border/60 text-center print:bg-slate-50 print:border-slate-300 print:p-2">
                  <span className="text-[10px] text-foreground/50 block uppercase font-bold print:text-[8px]">{t.severityIndex}</span>
                  <p className={`text-2xl font-black mt-1 print:text-base ${
                    leakPercentage > 60 ? 'text-rose-500' : leakPercentage > 30 ? 'text-orange-500' : 'text-emerald-600'
                  }`}>
                    {leakPercentage}%
                  </p>
                  <span className="text-[8px] text-foreground/40 block mt-0.5 uppercase tracking-wider font-semibold font-mono print:text-slate-500 print:text-[7.5px] print:mt-0">
                    {t.weightedDepth}
                  </span>
                </div>
              </div>

              {deepestLevel ? (
                <div className="space-y-5 print:space-y-3">
                  
                  {/* CRITICAL STATE CARD */}
                  <div className="p-4 rounded-xl bg-pch-input/30 border-l-4 border-rose-500 relative print:bg-rose-50/50 print:border-rose-500 print:border-y print:border-r print:p-3 print:py-2">
                    <div className="absolute right-3 top-3 print:hidden">
                      <AlertTriangle className="w-5 h-5 text-rose-500 shrink-0" />
                    </div>
                    <span className="text-[9px] text-rose-600 dark:text-rose-400 font-bold uppercase tracking-wider block mb-0.5 print:text-rose-700 print:text-[8px]">
                      {t.primaryFocus}
                    </span>
                    <h4 className="text-sm font-black text-[#0b241c] dark:text-white print:text-black print:text-xs">
                      {deepestLevel.title[language === "es" ? "es" : "en"]} ({deepestLevel.subtitle[language === "es" ? "es" : "en"]})
                    </h4>
                    <p className="text-[11px] text-foreground/80 mt-1.5 leading-relaxed print:text-slate-800 print:mt-1 print:text-[9.5px]">
                      {deepestLevel.description[language === "es" ? "es" : "en"]}
                    </p>
                  </div>

                  {/* ROOT CAUSE EVALUATION - Auto hidden on print to guarantee 1-page budget */}
                  <div className="print:hidden">
                    <h5 className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest mb-2 border-b border-pch-border/50 pb-1">
                      {t.coreAnalysisHeading}
                    </h5>
                    <p className="text-[11px] text-foreground/75 leading-relaxed">
                      {t.coreAnalysisText}{" "}
                      <span className="text-rose-600 dark:text-rose-400 font-bold underline">
                        {deepestLevel.title[language === "es" ? "es" : "en"]} ({deepestLevel.subtitle[language === "es" ? "es" : "en"]})
                      </span>{" "}
                      {t.coreAnalysisSuffix}
                    </p>
                  </div>

                  {/* TAILORED STRATEGIC ROADMAP */}
                  <div className="space-y-2.5 print:space-y-1.5">
                    <h5 className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest border-b border-pch-border/50 pb-1 print:text-slate-500 print:border-slate-300 print:pb-0.5 print:text-[8px]">
                      {t.roadmapHeading}
                    </h5>
                    <div className="space-y-2 print:space-y-1">
                      {checkedQuestions.map((q, idx) => (
                        <div 
                          key={q.id} 
                          className="flex gap-2.5 items-start p-3 bg-pch-input/10 rounded-lg border border-pch-border/40 print:bg-slate-50 print:border-slate-200 print:p-2 print:gap-2"
                        >
                          <span className="flex items-center justify-center w-4 h-4 bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-full font-bold text-[9px] shrink-0 mt-0.5 print:border print:border-rose-300 print:text-rose-700 print:w-3.5 print:h-3.5 print:text-[8px]">
                            {idx + 1}
                          </span>
                          <p className="text-[11px] text-foreground print:text-slate-800 leading-snug print:text-[9.5px]">
                            <span className="font-semibold text-foreground/50 mr-1 print:text-slate-500">[{q.text[language === "es" ? "es" : "en"]}]</span>{" "}
                            {q.recommendation[language === "es" ? "es" : "en"]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* LISTING SELECTED TROUBLED METRICS */}
                  <div className="space-y-2 print:space-y-1.5">
                    <h5 className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest border-b border-pch-border/50 pb-1 print:text-slate-500 print:border-slate-300 print:pb-0.5 print:text-[8px]">
                      {t.riskIndicatorsHeading}
                    </h5>
                    <div className="flex flex-wrap gap-1.5 print:gap-1">
                      {checkedQuestions.map((q) => (
                        <span 
                          key={q.id} 
                          className="text-[9px] bg-rose-500/10 border border-rose-500/20 text-foreground/80 px-2 py-0.5 rounded print:bg-slate-100 print:text-black print:border-slate-200 print:py-0.5 print:px-1.5 print:text-[8px]"
                        >
                          ✓ {q.text[language === "es" ? "es" : "en"]}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              ) : (
                /* Placeholder screen when questionnaire is completely blank */
                <div className="py-10 text-center space-y-3.5">
                  <div className="w-12 h-12 bg-pch-input/40 rounded-full flex items-center justify-center mx-auto border border-pch-border/50">
                    <FileText className="w-6 h-6 text-foreground/30" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-foreground">{t.noLeaksTitle}</h4>
                    <p className="text-[10px] text-foreground/50 max-w-xs mx-auto mt-1">
                      {t.noLeaksDesc}
                    </p>
                  </div>
                </div>
              )}

              {/* Session comments section inside output card */}
              {userNotes.trim() && (
                <div className="pt-3 border-t border-pch-border/60 print:border-slate-300 print:pt-2">
                  <h5 className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest mb-1.5 print:text-slate-500 print:mb-1 print:text-[8px]">
                    {t.strategicRemarks}
                  </h5>
                  <div className="p-3 bg-pch-input/20 rounded-lg border border-pch-border/40 text-[11px] italic text-foreground leading-relaxed whitespace-pre-wrap print:bg-slate-50 print:text-slate-800 print:border-slate-200 print:p-2 print:text-[9.5px]">
                    "{userNotes}"
                  </div>
                </div>
              )}

              {/* Institutional Footer */}
              <div className="pt-4 border-t border-pch-border/40 text-center space-y-0.5 print:border-slate-300 print:pt-2 print:mt-1">
                <p className="text-[8px] text-foreground/40 print:text-[7.5px]">
                  {t.methodologyFooter}
                </p>
                <p className="text-[7.5px] text-foreground/30 print:text-[6.5px]">
                  {t.footerRights}
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
