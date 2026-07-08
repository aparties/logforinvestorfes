"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Printer, Check, Star, Unlock } from "lucide-react";

type CommitmentLetterProps = {
  studentEmail: string;
  onSign: () => void;
  isAlreadySigned: boolean;
};

export const CommitmentLetter = ({
  studentEmail,
  onSign,
  isAlreadySigned,
}: CommitmentLetterProps) => {
  const { language } = useLanguage();
  const [studentName, setStudentName] = useState("");
  const [witnessName, setWitnessName] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("26"); // 2026

  const [acknowledgedPart1, setAcknowledgedPart1] = useState(false);
  const [acknowledgedPart2, setAcknowledgedPart2] = useState(false);
  const [acknowledgedPart3, setAcknowledgedPart3] = useState(false);
  const [isSigned, setIsSigned] = useState(isAlreadySigned);

  useEffect(() => {
    setIsSigned(isAlreadySigned);
  }, [isAlreadySigned]);

  // Load saved name and witness on mount
  useEffect(() => {
    if (!studentEmail) return;
    const storedName = localStorage.getItem(`lfi_commitment_name_${studentEmail}`);
    const storedWitness = localStorage.getItem(`lfi_commitment_witness_${studentEmail}`);
    if (storedName) setStudentName(storedName);
    if (storedWitness) setWitnessName(storedWitness);
  }, [studentEmail]);

  // Save changes to localStorage
  useEffect(() => {
    if (!studentEmail) return;
    localStorage.setItem(`lfi_commitment_name_${studentEmail}`, studentName);
  }, [studentName, studentEmail]);

  useEffect(() => {
    if (!studentEmail) return;
    localStorage.setItem(`lfi_commitment_witness_${studentEmail}`, witnessName);
  }, [witnessName, studentEmail]);

  useEffect(() => {
    // Inicializar la fecha de hoy por defecto
    const today = new Date();
    const monthsEs = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    const monthsEn = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const mList = language === "es" ? monthsEs : monthsEn;
    
    setTimeout(() => {
      setDay(String(today.getDate()));
      setMonth(mList[today.getMonth()]);
      setYear(String(today.getFullYear()).slice(-2));
    }, 0);
  }, [language]);

  const handleSign = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim()) return;
    if (!acknowledgedPart1 || !acknowledgedPart2 || !acknowledgedPart3) return;

    setIsSigned(true);
    onSign();
  };

  const handlePrint = () => {
    window.print();
  };

  const t = {
    es: {
      title: "CARTA DE COMPROMISO SOLEMNE",
      quote: "“No basta con predecir la lluvia; hay que construir el arca.”",
      part1Title: "PARTE I: EL RECONOCIMIENTO DE LAS SOMBRAS",
      intro: `Yo, _______________, situándome en este día, _______________, por la presente reconozco que he pasado demasiado tiempo viviendo en la caverna financiera, persiguiendo sombras en la pared.`,
      introLabel: "Yo,",
      introDateLabel: ", situándome en este día,",
      introEnd: ", por la presente reconozco que he pasado demasiado tiempo viviendo en la caverna financiera, persiguiendo sombras en la pared.",
      admit: "Al firmar este documento, admito sinceramente ante mí mismo que:",
      shadow1Title: "La Ilusión del Jugador:",
      shadow1Desc: "He perseguido el subidón de dopamina de las apuestas a corto plazo, la suerte y los esquemas de enriquecimiento rápido, dándome cuenta ahora de que la ventaja de la casa estaba matemáticamente diseñada para mantenerme atrapado.",
      shadow2Title: "El Ciclo de la Deuda:",
      shadow2Desc: "Me he permitido vivir en un ciclo de simple pago de facturas e intereses, sacrificando mi libertad futura por una gratificación temporal.",
      shadow3Title: "La Necesidad de un Sistema:",
      shadow3Desc: "Mis elecciones financieras pasadas no han dado los frutos de una verdadera riqueza, y tengo la urgente necesidad de una reconstrucción estructural.",
      
      part2Title: "PARTE II: LOS CIMIENTOS DEL NUEVO HOMBRE",
      part2Intro: "A partir de este momento, me aparto de las sombras y doy un paso hacia la luz. Me comprometo a construir mi vida como una Proeza Histórica bajo los siguientes pilares:",
      pilar1Title: "Dios Primero:",
      pilar1Desc: "Reconozco que estoy en un estado de gracia y coloco mi relación con Cristo como la máxima autoridad y luz que guía mi camino financiero.",
      pilar2Title: "Sinceridad Absoluta:",
      pilar2Desc: "Ya no me mentiré a mí mismo sobre mis números. Enfrentaré mi Patrimonio Neto, mis deudas y mis gastos con total transparencia.",
      pilar3Title: "El Proceso Sobre la Suerte:",
      pilar3Desc: "Entiendo que la riqueza no es un golpe de suerte; es un proyecto de ingeniería construido a través de hábitos diarios aburridos y constantes, combinados con una disciplina a largo plazo.",
      pilar4Title: "Perseverancia Implacable:",
      pilar4Desc: "Reconozco que puedo tropezar durante este viaje, pero me comprometo con el sistema de levantarme siempre.",
      
      part3Title: "PARTE III: LAS REGLAS DE ENFRENTAMIENTO",
      part3Intro: "Prometo solemnemente ejecutar los pasos prácticos de este curso con el máximo rigor técnico:",
      rule1: "Realizaré una Auditoría Emocional profunda para limpiar el pasado.",
      rule2: "Construiré un Presupuesto Base Cero donde cada dólar tenga un nombre y un propósito específico.",
      rule3: "Dejaré de alimentar a los bancos y eliminaré las malas deudas de consumo utilizando reglas matemáticas estrictas.",
      rule4: "Invertiré en mis propias capacidades para incrementar mis ingresos, sabiendo que recortar gastos tiene un límite físico.",
      
      finalQuote: "“Si nací en la caverna, no fue mi culpa. Pero quedarme allí después de ver la luz es mi elección. Yo elijo construir el Arca.”",
      
      signingText: "Firmado en este día {day} de {month} de 20{year}.",
      studentSig: "FIRMA DEL ESTUDIANTE",
      witnessSig: "TESTIGO / ANTE DIOS",
      witnessDesc: "(Alguien de confianza)",
      
      placeholderName: "Escribe tu nombre completo",
      placeholderWitness: "Nombre del Testigo (opcional)",
      checkboxPart1: "Reconozco y acepto mis sombras financieras del pasado.",
      checkboxPart2: "Me comprometo a cimentar mi vida sobre estos pilares espirituales y técnicos.",
      checkboxPart3: "Prometo solemnemente ejecutar las reglas de enfrentamiento con rigor.",
      btnSign: "Firmar y Sellar Compromiso",
      btnPrint: "Imprimir Carta Solemne",
      signedSeal: "SELLADO Y FIRMADO",
      signedStatus: "Compromiso solemnemente asumido en el sistema."
    },
    en: {
      title: "THE SOLEMN COMMITMENT LETTER",
      quote: "“It is not enough to predict the rain; you must build the ark.”",
      part1Title: "PART I: THE ACKNOWLEDGMENT OF THE SHADOWS",
      introLabel: "I,",
      introDateLabel: ", standing on this day,",
      introEnd: ", do hereby acknowledge that I have spent too much time living in the financial cave, chasing shadows on the wall.",
      admit: "By signing this document, I sincerely admit to myself that:",
      shadow1Title: "The Gambler’s Illusion:",
      shadow1Desc: "I have chased the dopamine hit of short-term bets, luck, and get-rich-quick schemes, realizing now that the house edge was mathematically designed to keep me trapped.",
      shadow2Title: "The Cycle of Debt:",
      shadow2Desc: "I have allowed myself to live in a cycle of simply paying bills and interest, sacrificing my future freedom for temporary gratification.",
      shadow3Title: "The Need for a System:",
      shadow3Desc: "My past financial choices have not yielded the fruits of true wealth, and I am in urgent need of a structural reconstruction.",
      
      part2Title: "PART II: THE FOUNDATION OF THE NEW MAN",
      part2Intro: "From this moment forward, I turn away from the shadows and step into the light. I commit to building my life as a Historical Feat under the following pillars:",
      pilar1Title: "God First:",
      pilar1Desc: "I recognize that I am in a state of grace, and I place my relationship with Christ as the ultimate authority and light guiding my financial path.",
      pilar2Title: "Absolute Sincerity:",
      pilar2Desc: "I will no longer lie to myself about my numbers. I will face my Net Worth, my debts, and my expenses with total transparency.",
      pilar3Title: "The Process Over Luck:",
      pilar3Desc: "I understand that wealth is not a stroke of luck; it is an engineering project built through boring, consistent daily habits and long-term discipline.",
      pilar4Title: "Relentless Perseverance:",
      pilar4Desc: "I acknowledge that I may stumble during this journey, but I commit to the system of always getting back up.",
      
      part3Title: "PART III: THE RULES OF ENGAGEMENT",
      part3Intro: "I solemnly pledge to execute the practical steps of this course with maximum technical rigor:",
      rule1: "I will conduct a thorough Emotional Audit to clear the past.",
      rule2: "I will build a Zero-Based Budget where every single dollar has a specific name and purpose.",
      rule3: "I will stop feeding the banks and eliminate bad consumer debts using strict mathematical rules.",
      rule4: "I will invest in my own capabilities to increase my income, knowing that cutting expenses has a physical limit.",
      
      finalQuote: "“If I was born in the cave, it was not my fault. But staying there after seeing the light is my choice. I choose to build the Ark.”",
      
      signingText: "Signed on this {day} day of {month}, 20{year}.",
      studentSig: "STUDENT'S SIGNATURE",
      witnessSig: "WITNESS / BEFORE GOD",
      witnessDesc: "(A trusted person)",
      
      placeholderName: "Enter your full name",
      placeholderWitness: "Witness name (optional)",
      checkboxPart1: "I acknowledge and accept my past financial shadows.",
      checkboxPart2: "I commit to building my life on these spiritual and technical pillars.",
      checkboxPart3: "I solemnly pledge to execute the rules of engagement with rigor.",
      btnSign: "Sign & Seal Commitment",
      btnPrint: "Print Solemn Letter",
      signedSeal: "SIGNED AND SEALED",
      signedStatus: "Commitment solemnly accepted in the system."
    }
  }[language === "es" ? "es" : "en"];

  return (
    <div className="w-full flex flex-col items-center">
      {/* ── CARTA ESTILIZADA (FORMATO IMPRIMIBLE) ── */}
      <div 
        id="solemn-letter-card" 
        className={`
          w-full max-w-3xl bg-amber-50/70 dark:bg-[#0c1e19] border-[12px] border-double border-[#0b241c] dark:border-[#1d4034] p-8 md:p-12 rounded-[32px] shadow-2xl relative
          font-serif text-[#0b241c] dark:text-emerald-100/90
          print:border-[6px] print:bg-white print:text-black print:shadow-none print:p-6 print:rounded-none
        `}
      >
        {/* Adorno de esquina (Mermaid SVG / CSS) */}
        <div className="absolute top-2 left-2 text-[#0b241c]/20 dark:text-emerald-500/10 pointer-events-none print:hidden">
          <Star className="w-6 h-6" />
        </div>
        <div className="absolute top-2 right-2 text-[#0b241c]/20 dark:text-emerald-500/10 pointer-events-none print:hidden">
          <Star className="w-6 h-6" />
        </div>

        {/* Título */}
        <div className="text-center mb-8 border-b border-[#0b241c]/20 dark:border-emerald-500/20 pb-4">
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide uppercase">
            {t.title}
          </h1>
          <p className="text-xs md:text-sm italic mt-2 opacity-85">
            {t.quote}
          </p>
        </div>

        {/* PARTE I */}
        <div className="mb-6">
          <h2 className="text-sm font-bold border-l-4 border-[#0b241c] dark:border-pch-primary pl-3 mb-3">
            {t.part1Title}
          </h2>
          <p className="text-xs md:text-sm leading-relaxed mb-4">
            {t.introLabel}{" "}
            {isSigned ? (
              <span className="font-bold border-b border-[#0b241c] dark:border-emerald-100 px-2">
                {studentName}
              </span>
            ) : (
              <input
                type="text"
                placeholder={t.placeholderName}
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="font-bold border-b border-[#0b241c]/40 dark:border-emerald-100/30 bg-transparent px-2 py-0.5 focus:outline-none focus:border-[#0b241c] text-xs md:text-sm text-[#0b241c] dark:text-white"
                style={{ width: "200px" }}
              />
            )}
            {t.introDateLabel}{" "}
            <span className="font-bold border-b border-[#0b241c] dark:border-emerald-100 px-1">
              {day}
            </span>{" "}
            {language === "es" ? "de" : ""}{" "}
            <span className="font-bold border-b border-[#0b241c] dark:border-emerald-100 px-1">
              {month}
            </span>{" "}
            {language === "es" ? "de" : ""}{" "}
            20
            <span className="font-bold border-b border-[#0b241c] dark:border-emerald-100 px-1">
              {year}
            </span>
            {t.introEnd}
          </p>
          <p className="text-xs md:text-sm leading-relaxed italic mb-3 opacity-90">
            {t.admit}
          </p>
          <ul className="space-y-2 text-xs md:text-sm pl-4 list-none">
            <li className="relative pl-5">
              <span className="absolute left-0 top-1 text-pch-primary font-bold">•</span>
              <strong>{t.shadow1Title}</strong> {t.shadow1Desc}
            </li>
            <li className="relative pl-5">
              <span className="absolute left-0 top-1 text-pch-primary font-bold">•</span>
              <strong>{t.shadow2Title}</strong> {t.shadow2Desc}
            </li>
            <li className="relative pl-5">
              <span className="absolute left-0 top-1 text-pch-primary font-bold">•</span>
              <strong>{t.shadow3Title}</strong> {t.shadow3Desc}
            </li>
          </ul>
        </div>

        {/* PARTE II */}
        <div className="mb-6">
          <h2 className="text-sm font-bold border-l-4 border-[#0b241c] dark:border-pch-primary pl-3 mb-3">
            {t.part2Title}
          </h2>
          <p className="text-xs md:text-sm leading-relaxed mb-3">
            {t.part2Intro}
          </p>
          <ul className="space-y-2 text-xs md:text-sm pl-4 list-none">
            <li className="relative pl-5">
              <span className="absolute left-0 top-1 text-pch-primary font-bold">•</span>
              <strong>{t.pilar1Title}</strong> {t.pilar1Desc}
            </li>
            <li className="relative pl-5">
              <span className="absolute left-0 top-1 text-pch-primary font-bold">•</span>
              <strong>{t.pilar2Title}</strong> {t.pilar2Desc}
            </li>
            <li className="relative pl-5">
              <span className="absolute left-0 top-1 text-pch-primary font-bold">•</span>
              <strong>{t.pilar3Title}</strong> {t.pilar3Desc}
            </li>
            <li className="relative pl-5">
              <span className="absolute left-0 top-1 text-pch-primary font-bold">•</span>
              <strong>{t.pilar4Title}</strong> {t.pilar4Desc}
            </li>
          </ul>
        </div>

        {/* PARTE III */}
        <div className="mb-8">
          <h2 className="text-sm font-bold border-l-4 border-[#0b241c] dark:border-pch-primary pl-3 mb-3">
            {t.part3Title}
          </h2>
          <p className="text-xs md:text-sm leading-relaxed mb-3">
            {t.part3Intro}
          </p>
          <ul className="space-y-2 text-xs md:text-sm pl-4 list-none">
            <li className="relative pl-5">
              <span className="absolute left-0 top-1 text-pch-primary font-bold">•</span>
              {t.rule1}
            </li>
            <li className="relative pl-5">
              <span className="absolute left-0 top-1 text-pch-primary font-bold">•</span>
              {t.rule2}
            </li>
            <li className="relative pl-5">
              <span className="absolute left-0 top-1 text-pch-primary font-bold">•</span>
              {t.rule3}
            </li>
            <li className="relative pl-5">
              <span className="absolute left-0 top-1 text-pch-primary font-bold">•</span>
              {t.rule4}
            </li>
          </ul>
        </div>

        {/* Cita final */}
        <div className="text-center italic text-xs md:text-sm font-semibold border-t border-b border-[#0b241c]/25 dark:border-emerald-500/20 py-4 mb-8 max-w-xl mx-auto opacity-95">
          {t.finalQuote}
        </div>

        {/* Sección de firmas */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-8 mt-12 px-4 border-t border-[#0b241c]/10 dark:border-emerald-500/10 pt-6">
          
          {/* Estudiante */}
          <div className="flex flex-col items-center text-center">
            <div className="h-10 flex items-center justify-center">
              {isSigned ? (
                <span className="font-serif italic text-lg font-bold border-b border-pch-primary px-4 py-1 text-pch-primary shadow-sm tracking-wide">
                  {studentName}
                </span>
              ) : (
                <span className="text-xs text-foreground/30 italic">Paso pendiente...</span>
              )}
            </div>
            <div className="w-48 border-t border-[#0b241c] dark:border-white/50 mt-2 pt-1" />
            <span className="text-[10px] font-bold uppercase tracking-wider">{t.studentSig}</span>
            <span className="text-[9px] text-foreground/40 mt-0.5">{studentEmail}</span>
          </div>

          {/* Sello de Lemon Squeezy o Arca */}
          {isSigned && (
            <div className="relative w-20 h-20 rounded-full border-4 border-double border-pch-primary flex flex-col items-center justify-center text-pch-primary shrink-0 animate-fade-in print:border-black print:text-black">
              <div className="absolute inset-0 rounded-full bg-pch-primary/5 -z-10" />
              <Star className="w-4 h-4 fill-pch-primary text-pch-primary animate-pulse" />
              <span className="text-[7px] font-bold uppercase tracking-widest mt-1">THE ARK</span>
              <span className="text-[6px] tracking-wider uppercase opacity-75">{t.signedSeal}</span>
            </div>
          )}

          {/* Testigo / Ante Dios */}
          <div className="flex flex-col items-center text-center">
            <div className="h-10 flex items-center justify-center">
              {isSigned ? (
                <span className="font-serif italic text-sm font-bold border-b border-[#0b241c]/60 dark:border-emerald-100/60 px-4 py-1">
                  {witnessName || (language === "es" ? "Dios y Conciencia" : "God and Conscience")}
                </span>
              ) : (
                <input
                  type="text"
                  placeholder={t.placeholderWitness}
                  value={witnessName}
                  onChange={(e) => setWitnessName(e.target.value)}
                  className="border-b border-[#0b241c]/40 dark:border-emerald-100/30 bg-transparent px-2 py-0.5 focus:outline-none focus:border-[#0b241c] text-xs text-center"
                  style={{ width: "160px" }}
                />
              )}
            </div>
            <div className="w-48 border-t border-[#0b241c] dark:border-white/50 mt-2 pt-1" />
            <span className="text-[10px] font-bold uppercase tracking-wider">{t.witnessSig}</span>
            <span className="text-[9px] text-foreground/40 mt-0.5">{t.witnessDesc}</span>
          </div>

        </div>
      </div>

      {/* ── SECCIÓN DE ACCIONES (CHECKBOXES Y BOTÓN DE FIRMA) ── */}
      <div className="w-full max-w-3xl mt-6 bg-pch-card border border-pch-border rounded-2xl p-6 shadow-md print:hidden">
        {!isSigned ? (
          <form onSubmit={handleSign} className="flex flex-col gap-4">
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={acknowledgedPart1}
                  onChange={(e) => setAcknowledgedPart1(e.target.checked)}
                  className="w-4 h-4 text-pch-primary bg-pch-input border-pch-border rounded focus:ring-pch-primary focus:ring-2"
                />
                <span className="text-xs md:text-sm text-foreground/80">
                  {t.checkboxPart1}
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={acknowledgedPart2}
                  onChange={(e) => setAcknowledgedPart2(e.target.checked)}
                  className="w-4 h-4 text-pch-primary bg-pch-input border-pch-border rounded focus:ring-pch-primary focus:ring-2"
                />
                <span className="text-xs md:text-sm text-foreground/80">
                  {t.checkboxPart2}
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={acknowledgedPart3}
                  onChange={(e) => setAcknowledgedPart3(e.target.checked)}
                  className="w-4 h-4 text-pch-primary bg-pch-input border-pch-border rounded focus:ring-pch-primary focus:ring-2"
                />
                <span className="text-xs md:text-sm text-foreground/80">
                  {t.checkboxPart3}
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={
                !studentName.trim() ||
                !acknowledgedPart1 ||
                !acknowledgedPart2 ||
                !acknowledgedPart3
              }
              className="mt-2 w-full bg-pch-primary disabled:bg-pch-border/50 disabled:text-foreground/40 disabled:cursor-not-allowed text-white dark:text-[#0b241c] rounded-full py-4 font-bold text-sm hover:opacity-95 hover:shadow-lg hover:shadow-pch-primary/20 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>{t.btnSign}</span>
            </button>
          </form>
        ) : (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-pch-primary">
              <Check className="w-5 h-5" />
              <span className="text-sm font-semibold">{t.signedStatus}</span>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setIsSigned(false)}
                className="w-full sm:w-auto border border-pch-primary/45 hover:border-pch-primary text-pch-primary font-bold text-xs rounded-full px-5 py-3 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Unlock className="w-3.5 h-3.5" />
                <span>{language === "es" ? "Editar Firma" : "Edit Signature"}</span>
              </button>
              <button
                type="button"
                onClick={handlePrint}
                className="w-full sm:w-auto bg-pch-primary text-white dark:text-[#0b241c] rounded-full px-6 py-3 font-bold text-xs hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>{t.btnPrint}</span>
              </button>
            </div>
          </div>
        )}
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          header, nav, aside, footer, button, form, .print\\:hidden, #auth-user-menu-btn, #auth-user-dropdown {
            display: none !important;
          }
          body, html {
            background: white !important;
            color: black !important;
          }
          #solemn-letter-card {
            border: 6px double #0b241c !important;
            background: #fffcf9 !important;
            color: #0b241c !important;
            position: relative !important;
            box-shadow: none !important;
            margin: 0 auto !important;
            padding: 2rem !important;
            width: 100% !important;
            max-width: 100% !important;
          }
        }
      ` }} />
    </div>
  );
};
