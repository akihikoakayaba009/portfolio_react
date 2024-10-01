// LanguageContext.js
import React, { createContext, useState } from 'react';
import translations from './translations';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Idioma padrão é inglês

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};
