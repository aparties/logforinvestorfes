"use client";

import { useState } from "react";
import { Calculator as CalcIcon } from "lucide-react";

/**
 * Calculadora interactiva para mostrar la diferencia entre el ahorro
 * tradicional y la inversión a largo plazo utilizando interés compuesto.
 * @returns {JSX.Element} El componente de la calculadora.
 */
export const Calculator = () => {
  const [initialAmount, setInitialAmount] = useState<number>(1000);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(200);
  const [years, setYears] = useState<number>(10);

  // Rendimiento tradicional (ej. banco al 2%) vs Inversión en Índice (ej. 8%)
  const traditionalRate = 0.02;
  const investmentRate = 0.08;

  const calculateFutureValue = (rate: number) => {
    let total = initialAmount;
    for (let i = 0; i < years * 12; i++) {
      total += monthlyContribution;
      total *= 1 + rate / 12;
    }
    return Math.round(total);
  };

  const traditionalValue = calculateFutureValue(traditionalRate);
  const investmentValue = calculateFutureValue(investmentRate);
  const difference = investmentValue - traditionalValue;

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto w-full">
      <div className="bg-pch-card border border-pch-border rounded-[40px] p-6 md:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pch-secondary/5 rounded-full blur-[100px]" />

        <div className="flex flex-col items-center text-center mb-10">
          <div className="w-16 h-16 rounded-full bg-pch-primary/10 flex items-center justify-center mb-6">
            <CalcIcon className="w-8 h-8 text-pch-primary" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Calculadora de Validación</h2>
          <p className="text-foreground">Descubre el costo de NO invertir a largo plazo.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-semibold text-pch-primary mb-2 uppercase tracking-wide">
                Capital Inicial ($)
              </label>
              <input
                type="number"
                value={initialAmount}
                onChange={(e) => setInitialAmount(Number(e.target.value))}
                className="w-full bg-pch-input border border-pch-border rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-pch-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-pch-primary mb-2 uppercase tracking-wide">
                Aporte Mensual ($)
              </label>
              <input
                type="number"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                className="w-full bg-pch-input border border-pch-border rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-pch-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-pch-primary mb-2 uppercase tracking-wide">
                Años invirtiendo
              </label>
              <input
                type="number"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full bg-pch-input border border-pch-border rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-pch-primary transition-colors"
              />
            </div>
          </div>

          <div className="bg-[#0b241c] rounded-3xl p-8 border border-pch-border/50 flex flex-col justify-center h-full">
            <h3 className="text-lg font-bold text-white mb-6 text-center">Tus resultados en {years} años</h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-sm text-foreground mb-1">Ahorro Tradicional (2%)</p>
                <p className="text-2xl font-bold text-white">${traditionalValue.toLocaleString()}</p>
              </div>
              
              <div className="h-[1px] w-full bg-pch-border/50" />
              
              <div>
                <p className="text-sm text-pch-primary mb-1 font-medium">Inversión Pasiva (8%)</p>
                <p className="text-4xl font-bold text-pch-primary">${investmentValue.toLocaleString()}</p>
              </div>

              <div className="bg-pch-primary/10 rounded-xl p-4 mt-4">
                <p className="text-sm text-white text-center">
                  Estás perdiendo <span className="font-bold text-pch-secondary">${difference.toLocaleString()}</span> por no invertir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
