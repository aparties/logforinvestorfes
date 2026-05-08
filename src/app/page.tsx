"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Hero } from "@/components/Hero";
import { SmartMoneyFilter } from "@/components/SmartMoneyFilter";
import { Calculator } from "@/components/Calculator";
import { CourseOffer } from "@/components/CourseOffer";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Home() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evitar hydration mismatch
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-background overflow-x-hidden transition-colors duration-300">
      {/* Header simple para la Landing */}
      <header className="w-full max-w-6xl mx-auto py-6 px-6 flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" alt="logforinvestor logo" width={32} height={32} className="dark:brightness-200" />
          <div className="text-2xl font-bold tracking-tight text-foreground dark:text-white hidden sm:block">
            log<span className="text-pch-primary">forinvestor</span>.com
          </div>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6">
            <a href="#smart-money" className="text-sm font-medium text-foreground dark:text-white hover:text-pch-primary transition-colors">
              {t.nav.filter}
            </a>
            <a href="#curso" className="text-sm font-medium text-pch-primary hover:text-pch-secondary transition-colors">
              {t.nav.course}
            </a>
          </nav>
          
          <div className="flex items-center gap-4">
            {/* Theme Switcher */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full border border-pch-border bg-pch-card text-foreground hover:bg-pch-input transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <Sun className="w-4 h-4 text-white" /> : <Moon className="w-4 h-4 text-foreground" />}
              </button>
            )}

            {/* Language Switcher */}
            <div className="flex items-center gap-2 border border-pch-border rounded-full p-1 bg-pch-card">
              <button 
                onClick={() => setLanguage("en")}
                className={`text-xs font-bold px-3 py-1 rounded-full transition-colors ${language === 'en' ? 'bg-pch-primary text-white dark:text-[#0b241c]' : 'text-foreground dark:text-white hover:text-pch-primary'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage("es")}
                className={`text-xs font-bold px-3 py-1 rounded-full transition-colors ${language === 'es' ? 'bg-pch-primary text-white dark:text-[#0b241c]' : 'text-foreground dark:text-white hover:text-pch-primary'}`}
              >
                ES
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <Hero />

      {/* Smart Money Filter Section (Gratiuto) */}
      <SmartMoneyFilter />

      {/* Calculadora (Validación) */}
      <Calculator />

      {/* Oferta de Curso */}
      <CourseOffer />

      {/* Footer simple */}
      <footer className="w-full border-t border-pch-border mt-auto">
        <div className="max-w-6xl mx-auto py-8 px-6 text-center text-sm text-foreground">
          <p>© {new Date().getFullYear()} logforinvestor.com - {t.footer.rights}</p>
        </div>
      </footer>
    </main>
  );
}
