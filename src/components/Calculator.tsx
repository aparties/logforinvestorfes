"use client";

import { useState } from "react";
import { Calculator as CalcIcon } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

/** Presets de ETFs con su rendimiento histórico anual estimado */
const ETF_PRESETS = [
  { ticker: "VOO",  name: "Vanguard S&P 500",          rate: 10 },
  { ticker: "SPY",  name: "SPDR S&P 500",              rate: 10 },
  { ticker: "SPLG", name: "SPDR Portfolio S&P 500",    rate: 10 },
] as const;

type EtfTicker = (typeof ETF_PRESETS)[number]["ticker"];
type ContribFreq = "monthly" | "weekly";

/**
 * Calculadora interactiva para mostrar la diferencia entre el ahorro
 * tradicional y la inversión a largo plazo utilizando interés compuesto.
 * Permite seleccionar el ETF, editar el % anual y elegir frecuencia de aporte.
 */
export const Calculator = () => {
  const { t } = useLanguage();

  const [initialAmount, setInitialAmount] = useState<number>(1000);
  const [contribution, setContribution] = useState<number>(200);
  const [freq, setFreq] = useState<ContribFreq>("monthly");
  const [years, setYears] = useState<number>(10);
  const [selectedTicker, setSelectedTicker] = useState<EtfTicker>("VOO");
  const [investmentRatePct, setInvestmentRatePct] = useState<number>(10);

  const traditionalRate = 0.02;
  const investmentRate = investmentRatePct / 100;

  /**
   * Calcula el valor futuro con interés compuesto.
   * Acepta aportes mensuales o semanales.
   * Los aportes semanales se convierten a mensual equivalente: contrib × (52/12).
   */
  const calculateFutureValue = (rate: number): number => {
    const monthlyContrib =
      freq === "weekly" ? contribution * (52 / 12) : contribution;

    let total = initialAmount;
    for (let i = 0; i < years * 12; i++) {
      total += monthlyContrib;
      total *= 1 + rate / 12;
    }
    return Math.round(total);
  };

  /** Capital total aportado: capital inicial + todos los aportes periódicos */
  const monthlyEquiv = freq === "weekly" ? contribution * (52 / 12) : contribution;
  const totalInvested = initialAmount + monthlyEquiv * years * 12;

  const traditionalValue = calculateFutureValue(traditionalRate);
  const investmentValue  = calculateFutureValue(investmentRate);
  const difference       = investmentValue - traditionalValue;
  const gains            = investmentValue - totalInvested;
  const investedPct      = Math.min(100, Math.round((totalInvested / investmentValue) * 100));
  const gainsPct         = 100 - investedPct;

  /** Al seleccionar un ETF precarga su tasa */
  const handleEtfSelect = (ticker: EtfTicker) => {
    setSelectedTicker(ticker);
    const preset = ETF_PRESETS.find((e) => e.ticker === ticker);
    if (preset) setInvestmentRatePct(preset.rate);
  };

  const inputClass =
    "w-full bg-pch-input border border-pch-border rounded-2xl px-6 py-4 text-foreground dark:text-white focus:outline-none focus:border-pch-primary transition-colors";

  const pillActive   = "bg-pch-primary text-white dark:text-[#0b241c] border-pch-primary shadow-md shadow-pch-primary/20";
  const pillInactive = "bg-pch-input border-pch-border text-foreground dark:text-white hover:border-pch-primary/50";

  return (
    <section id="calculator" className="py-20 px-6 max-w-4xl mx-auto w-full">
      <div className="bg-pch-card border border-pch-border rounded-[40px] p-6 md:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pch-secondary/5 rounded-full blur-[100px]" />

        {/* Título */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="w-16 h-16 rounded-full bg-pch-primary/10 flex items-center justify-center mb-6">
            <CalcIcon className="w-8 h-8 text-pch-primary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground dark:text-white mb-2">
            {t.calculator.title}
          </h2>
          <p className="text-foreground">{t.calculator.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* ── Columna izquierda: inputs ── */}
          <div className="space-y-6">

            {/* Capital inicial */}
            <div>
              <label className="block text-xs font-semibold text-pch-primary mb-2 uppercase tracking-wide">
                {t.calculator.label_initial}
              </label>
              <input
                type="number"
                value={initialAmount}
                onChange={(e) => setInitialAmount(Number(e.target.value))}
                className={inputClass}
              />
            </div>

            {/* Frecuencia de aporte + monto */}
            <div>
              {/* Toggle mensual / semanal */}
              <label className="block text-xs font-semibold text-pch-primary mb-2 uppercase tracking-wide">
                {t.calculator.label_contribution}
              </label>
              <div className="flex gap-2 mb-3">
                <button
                  onClick={() => setFreq("monthly")}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-bold border transition-all ${
                    freq === "monthly" ? pillActive : pillInactive
                  }`}
                >
                  {t.calculator.freq_monthly}
                </button>
                <button
                  onClick={() => setFreq("weekly")}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-bold border transition-all ${
                    freq === "weekly" ? pillActive : pillInactive
                  }`}
                >
                  {t.calculator.freq_weekly}
                </button>
              </div>

              {/* Monto editable */}
              <div className="relative">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-pch-primary font-bold text-sm pointer-events-none">
                  $
                </span>
                <input
                  type="number"
                  min={0}
                  step={1}
                  value={contribution}
                  onChange={(e) => setContribution(Number(e.target.value))}
                  className="w-full bg-pch-input border border-pch-border rounded-2xl pl-10 pr-6 py-4 text-foreground dark:text-white focus:outline-none focus:border-pch-primary transition-colors"
                />
              </div>
              <p className="text-xs text-foreground/40 mt-1.5 pl-1">
                {freq === "weekly"
                  ? t.calculator.freq_weekly_hint
                  : t.calculator.freq_monthly_hint}
              </p>
            </div>

            {/* Años */}
            <div>
              <label className="block text-xs font-semibold text-pch-primary mb-2 uppercase tracking-wide">
                {t.calculator.label_years}
              </label>
              <input
                type="number"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className={inputClass}
              />
            </div>

            {/* Instrumento + % anual editable */}
            <div>
              <label className="block text-xs font-semibold text-pch-primary mb-2 uppercase tracking-wide">
                {t.calculator.label_instrument}
              </label>

              <div className="flex gap-2 mb-3">
                {ETF_PRESETS.map((etf) => (
                  <button
                    key={etf.ticker}
                    onClick={() => handleEtfSelect(etf.ticker)}
                    title={etf.name}
                    className={`flex-1 py-2.5 rounded-xl text-sm font-bold border transition-all ${
                      selectedTicker === etf.ticker ? pillActive : pillInactive
                    }`}
                  >
                    {etf.ticker}
                  </button>
                ))}
              </div>

              <div className="relative">
                <input
                  type="number"
                  min={0}
                  max={50}
                  step={0.1}
                  value={investmentRatePct}
                  onChange={(e) => setInvestmentRatePct(Number(e.target.value))}
                  className="w-full bg-pch-input border border-pch-border rounded-2xl px-6 py-4 pr-12 text-foreground dark:text-white focus:outline-none focus:border-pch-primary transition-colors"
                />
                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-pch-primary font-bold text-sm pointer-events-none">
                  %
                </span>
              </div>
              <p className="text-xs text-foreground/40 mt-1.5 pl-1">
                {t.calculator.rate_hint}
              </p>
            </div>
          </div>

          {/* ── Columna derecha: resultados ── */}
          <div className="bg-pch-input dark:bg-[#0b241c] rounded-3xl p-8 border border-pch-border/50 flex flex-col justify-center h-full">
            <h3 className="text-lg font-bold text-foreground dark:text-white mb-6 text-center">
              {t.calculator.results_title.replace("{years}", years.toString())}
            </h3>

            {/* Resumen de aporte */}
            <div className="bg-pch-card rounded-xl px-4 py-3 mb-6 flex items-center justify-between text-xs text-foreground/60">
              <span>
                {freq === "weekly"
                  ? t.calculator.freq_weekly
                  : t.calculator.freq_monthly}{" "}
                {t.calculator.contribution_label}
              </span>
              <span className="font-bold text-foreground dark:text-white">
                ${contribution.toLocaleString()}
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-foreground/80 mb-1">
                  {t.calculator.savings}
                </p>
                <p className="text-2xl font-bold text-foreground dark:text-white">
                  ${traditionalValue.toLocaleString()}
                </p>
              </div>

              <div className="h-[1px] w-full bg-pch-border/50" />

              <div>
                <p className="text-sm text-pch-primary mb-1 font-medium">
                  {selectedTicker} ({investmentRatePct}% / {t.calculator.per_year})
                </p>
                <p className="text-4xl font-bold text-pch-primary">
                  ${investmentValue.toLocaleString()}
                </p>
              </div>

              {/* ── Desglose: aportado vs ganancia ── */}
              <div>
                {/* Barra proporcional */}
                <div className="flex rounded-full overflow-hidden h-3 mb-3">
                  <div
                    className="bg-foreground/30 transition-all duration-500"
                    style={{ width: `${investedPct}%` }}
                  />
                  <div
                    className="bg-pch-primary transition-all duration-500"
                    style={{ width: `${gainsPct}%` }}
                  />
                </div>

                {/* Leyenda */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-pch-card rounded-xl p-3">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-foreground/30 shrink-0" />
                      <span className="text-xs text-foreground/60">{t.calculator.label_invested}</span>
                    </div>
                    <p className="text-base font-bold text-foreground dark:text-white">
                      ${Math.round(totalInvested).toLocaleString()}
                    </p>
                    <p className="text-xs text-foreground/40">{investedPct}%</p>
                  </div>

                  <div className="bg-pch-card rounded-xl p-3">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-pch-primary shrink-0" />
                      <span className="text-xs text-foreground/60">{t.calculator.label_gains}</span>
                    </div>
                    <p className="text-base font-bold text-pch-primary">
                      ${Math.round(gains).toLocaleString()}
                    </p>
                    <p className="text-xs text-foreground/40">{gainsPct}%</p>
                  </div>
                </div>
              </div>

              <div className="bg-pch-primary/10 rounded-xl p-4 mt-4">
                <p className="text-sm text-foreground dark:text-white text-center">
                  {t.calculator.losing_msg}{" "}
                  <span className="font-bold text-pch-secondary">
                    ${difference.toLocaleString()}
                  </span>{" "}
                  {t.calculator.not_investing_msg}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
