import React, { createContext, useContext, useState, useEffect } from 'react';
import enTranslations from '../locales/en.json';
import hiTranslations from '../locales/hi.json';
import mrTranslations from '../locales/mr.json';

type Language = 'en' | 'hi' | 'mr';

interface LangContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
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
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && ['en', 'hi', 'mr'].includes(savedLang)) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const translations = {
      en: enTranslations,
      hi: hiTranslations,
      mr: mrTranslations,
    };
    return translations[language][key] || key;
  };

  return (
    <LangContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LangContext.Provider>
  );
};
