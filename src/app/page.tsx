import { Hero } from "@/components/Hero";
import { SmartMoneyFilter } from "@/components/SmartMoneyFilter";
import { Calculator } from "@/components/Calculator";
import { CourseOffer } from "@/components/CourseOffer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-background overflow-x-hidden">
      {/* Header simple para la Landing */}
      <header className="w-full max-w-6xl mx-auto py-6 px-6 flex items-center justify-between z-10">
        <div className="text-2xl font-bold tracking-tight text-white">
          log<span className="text-pch-primary">forinvestor</span>.com
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#smart-money" className="text-sm font-medium text-foreground hover:text-white transition-colors">
            Filtro Smart Money
          </a>
          <a href="#curso" className="text-sm font-medium text-pch-primary hover:text-pch-secondary transition-colors">
            Curso 101
          </a>
        </nav>
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
          <p>© {new Date().getFullYear()} logforinvestor.com - Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
