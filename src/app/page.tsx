"use client";

import Image from "next/image";
import { Hero } from "@/components/Hero";
import { SmartMoneyFilter } from "@/components/SmartMoneyFilter";
import { Calculator } from "@/components/Calculator";
import { CourseOffer } from "@/components/CourseOffer";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Home() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-background overflow-x-hidden">
      {/* Header simple para la Landing */}
      <header className="w-full max-w-6xl mx-auto py-6 px-6 flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" alt="logforinvestor logo" width={32} height={32} />
          <div className="text-2xl font-bold tracking-tight text-white hidden sm:block">
            log<span className="text-pch-primary">forinvestor</span>.com
          </div>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6">
            <a href="#smart-money" className="text-sm font-medium text-foreground hover:text-white transition-colors">
              {t.nav.filter}
            </a>
            <a href="#curso" className="text-sm font-medium text-pch-primary hover:text-pch-secondary transition-colors">
              {t.nav.course}
            </a>
          </nav>
          
          {/* Language Switcher */}
          <div className="flex items-center gap-2 border border-pch-border rounded-full p-1 bg-pch-card">
            <button 
              onClick={() => setLanguage("en")}
              className={`text-xs font-bold px-3 py-1 rounded-full transition-colors ${language === 'en' ? 'bg-pch-primary text-[#0b241c]' : 'text-foreground hover:text-white'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLanguage("es")}
              className={`text-xs font-bold px-3 py-1 rounded-full transition-colors ${language === 'es' ? 'bg-pch-primary text-[#0b241c]' : 'text-foreground hover:text-white'}`}
            >
              ES
            </button>
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
