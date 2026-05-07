"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Language, dictionaries } from "./dictionaries";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof dictionaries.en;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * Proveedor de contexto para manejar el idioma de la aplicación.
 * @param {Object} props - Propiedades del componente.
 * @param {ReactNode} props.children - Componentes hijos.
 * @returns {JSX.Element} El proveedor de contexto de idioma.
 */
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const value = {
    language,
    setLanguage,
    t: dictionaries[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * Hook para consumir el contexto de idioma.
 * @returns {LanguageContextType} El contexto de idioma actual.
 */
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
