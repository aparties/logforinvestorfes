"use client";

import { useQuery } from "@tanstack/react-query";
import { BarChart3, TrendingUp } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

/** Mock para obtener datos de Smart Money */
const fetchSmartMoneyData = async () => {
  // Simulando fetch de API o Supabase
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return [
    { ticker: "NVDA", name: "NVIDIA Corp.", volume: "45.2M", change: "+2.4%", trend: "up" },
    { ticker: "AAPL", name: "Apple Inc.", volume: "38.1M", change: "+1.1%", trend: "up" },
    { ticker: "TSLA", name: "Tesla Inc.", volume: "32.8M", change: "-0.5%", trend: "down" },
    { ticker: "AMD", name: "Advanced Micro", volume: "29.4M", change: "+3.2%", trend: "up" },
    { ticker: "MSFT", name: "Microsoft Corp.", volume: "22.5M", change: "+0.8%", trend: "up" },
  ];
};

/**
 * Componente que muestra una lista simulada de activos con alto volumen.
 * @returns {JSX.Element} La tabla de filtro de Smart Money.
 */
export const SmartMoneyFilter = () => {
  const { t } = useLanguage();
  const { data, isLoading } = useQuery({
    queryKey: ["smartMoneyList"],
    queryFn: fetchSmartMoneyData,
  });

  return (
    <section id="smart-money" className="py-20 px-6 max-w-6xl mx-auto w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-white mb-4">
          {t.filter.title} <span className="text-pch-primary">{t.filter.free}</span>
        </h2>
        <p className="text-foreground max-w-2xl mx-auto">
          {t.filter.description}
        </p>
      </div>

      <div className="bg-pch-card border border-pch-border rounded-[40px] p-6 md:p-10 shadow-2xl overflow-hidden relative">
        {/* Decoración */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-pch-primary/5 rounded-full blur-[80px]" />

        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-full bg-pch-primary/20 flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-pch-primary" />
          </div>
          <h3 className="text-xl font-bold text-foreground dark:text-white">{t.filter.table_title}</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-pch-border text-xs text-pch-primary font-semibold tracking-wider">
                <th className="pb-4 pl-4">{t.filter.col_asset}</th>
                <th className="pb-4">{t.filter.col_volume}</th>
                <th className="pb-4">{t.filter.col_change}</th>
                <th className="pb-4 text-right pr-4">{t.filter.col_action}</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={4} className="py-8 text-center text-foreground">
                    {t.filter.loading}
                  </td>
                </tr>
              ) : (
                data?.map((stock) => (
                  <tr key={stock.ticker} className="border-b border-pch-border/50 hover:bg-pch-input transition-colors group">
                    <td className="py-4 pl-4">
                      <div className="flex flex-col">
                        <span className="font-bold text-foreground dark:text-white">{stock.ticker}</span>
                        <span className="text-sm text-foreground/80">{stock.name}</span>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-foreground opacity-50" />
                        <span className="text-foreground dark:text-white font-medium">{stock.volume}</span>
                      </div>
                    </td>
                    <td className="py-4">
                      <span className={`font-medium ${stock.trend === "up" ? "text-pch-primary" : "text-red-400"}`}>
                        {stock.change}
                      </span>
                    </td>
                    <td className="py-4 text-right pr-4">
                      <button className="bg-pch-input border border-pch-border text-pch-primary rounded-full px-4 py-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity hover:bg-pch-primary hover:text-white dark:hover:text-[#0b241c]">
                        {t.filter.btn_view}
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
