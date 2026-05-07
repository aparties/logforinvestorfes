/**
 * Hero component para la landing page.
 * Muestra el mensaje principal y un CTA.
 */
export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-6 relative overflow-hidden">
      {/* Glow effect radial en el fondo (ui.md: Radial gradients suaves) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pch-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-4xl mb-6">
        Invierte con lógica, no con promesas mágicas
      </h1>
      
      <p className="text-lg md:text-xl text-foreground max-w-2xl mb-10">
        Descubre dónde está el &quot;Smart Money&quot; de forma gratuita y aprende un sistema validado para invertir a largo plazo sin perder tiempo operativo.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <a 
          href="#smart-money"
          className="bg-pch-primary text-[#0b241c] rounded-full px-8 py-4 font-bold hover:bg-pch-secondary transition-all"
        >
          Ver Smart Money Gratis
        </a>
        <a 
          href="#curso"
          className="bg-pch-card border border-pch-border text-white rounded-full px-8 py-4 font-bold hover:bg-pch-input transition-all"
        >
          Aprender a Invertir
        </a>
      </div>
    </section>
  );
};
