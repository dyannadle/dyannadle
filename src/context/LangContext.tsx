import React, { createContext, useContext, useState } from 'react';
import enTranslations from '../locales/en.json';

type Language = 'en';

interface LangContextType {
  language: Language;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error('useLang must be used within a LangProvider');
  }
  return context;
};

interface LangProviderProps {
  children: React.ReactNode;
}

export const LangProvider: React.FC<LangProviderProps> = ({ children }) => {
  // Always default to 'en'
  const language: Language = 'en';

  const t = (key: string): string => {
    // @ts-ignore
    return enTranslations[key] || key;
  };

  return (
    <LangContext.Provider value={{ language, t }}>
      {children}
    </LangContext.Provider>
  );
};
