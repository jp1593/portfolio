import { useEffect, useState } from "react";
import { LanguageContext } from "./context";
import en from "../locales/en";
import es from "../locales/es";

const translations = { en, es };
const storageKey = "portfolio-language";

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    try {
      const saved = window.localStorage.getItem(storageKey);
      return saved === "en" || saved === "es" ? saved : "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    const content = translations[language];
    document.documentElement.lang = language;
    document.title = content.meta.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = content.meta.description;
    try {
      window.localStorage.setItem(storageKey, language);
    } catch {
      // Keep language switching usable when storage is unavailable.
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};
