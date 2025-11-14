import React from 'react';
import { useLang } from '@/context/LangContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLang();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'mr', name: 'मराठी', flag: '🇮🇳' },
  ] as const;

  const currentLang = languages.find(lang => lang.code === language);

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        className="flex items-center gap-2 text-foreground hover:text-blue-600"
        onClick={() => {
          const currentIndex = languages.findIndex(lang => lang.code === language);
          const nextIndex = (currentIndex + 1) % languages.length;
          setLanguage(languages[nextIndex].code);
        }}
      >
        <Globe size={16} />
        <span className="hidden sm:inline">{currentLang?.flag} {currentLang?.name}</span>
        <span className="sm:hidden">{currentLang?.flag}</span>
      </Button>
    </div>
  );
};

export default LanguageToggle;
