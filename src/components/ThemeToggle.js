import React, { useContext } from 'react';
import { ThemeContext, LanguageContext } from "../App";

const ThemeToggle = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);
   const { language } = useContext(LanguageContext);
  return (
    <button
      onClick={() => setIsDarkTheme(!isDarkTheme)}
      className={`px-5 py-2 rounded ${
        isDarkTheme 
          ? 'bg-dark text-light border border-light' 
          : 'bg-light text-dark border border-dark'
      }`}
    >
      {isDarkTheme ? (language === "fr" ? "Mode Clair" : "Clear Mode") : (language === "fr" ? "Mode Sombre" : "Dark Mode  ")}

    </button>
  );
};

export default ThemeToggle;