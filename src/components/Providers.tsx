"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { LanguageProvider } from "@/i18n/LanguageContext";

/**
 * Componente proveedor para inicializar y envolver la aplicación 
 * con los contextos necesarios (como React Query y Lenguaje).
 * @param {Object} props - Propiedades del componente.
 * @param {ReactNode} props.children - Componentes hijos.
 * @returns {JSX.Element} El proveedor de la aplicación.
 */
export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        refetchOnWindowFocus: false,
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </QueryClientProvider>
  );
}
