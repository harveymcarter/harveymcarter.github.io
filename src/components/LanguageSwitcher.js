import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1.5">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
          language === 'en'
            ? 'bg-media-accent text-white'
            : 'text-media-muted hover:text-media-ink hover:bg-media-quote'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('tr')}
        className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
          language === 'tr'
            ? 'bg-media-accent text-white'
            : 'text-media-muted hover:text-media-ink hover:bg-media-quote'
        }`}
        aria-label="Switch to Turkish"
      >
        TR
      </button>
      <button
        onClick={() => changeLanguage('ru')}
        className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
          language === 'ru'
            ? 'bg-media-accent text-white'
            : 'text-media-muted hover:text-media-ink hover:bg-media-quote'
        }`}
        aria-label="Switch to Russian"
      >
        RU
      </button>
      <button
        onClick={() => changeLanguage('hr')}
        className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
          language === 'hr'
            ? 'bg-media-accent text-white'
            : 'text-media-muted hover:text-media-ink hover:bg-media-quote'
        }`}
        aria-label="Switch to Croatian"
      >
        HR
      </button>
      <button
        onClick={() => changeLanguage('bs')}
        className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
          language === 'bs'
            ? 'bg-media-accent text-white'
            : 'text-media-muted hover:text-media-ink hover:bg-media-quote'
        }`}
        aria-label="Switch to Bosnian"
      >
        BS
      </button>
    </div>
  );
}

export default LanguageSwitcher; 