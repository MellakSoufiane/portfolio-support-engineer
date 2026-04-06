"use client";

import { useLanguage } from "./LanguageContext";
import Navbar from "./Navbar";
import { useEffect } from "react";
import Ticker from "./Ticker";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const { lang, setLang } = useLanguage();

  // On change le titre via useEffect pour ne pas casser le rendu serveur
  useEffect(() => {
    document.title = lang === "fr" 
      ? "Soufiane Mellak | Ingénieur Support Senior" 
      : "Soufiane Mellak | Senior Support Engineer";
  }, [lang]);

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      {/* On utilise une div avec relative pour s'assurer que 
         le flux du document ne "mange" pas les éléments fixes 
      */}
      {/* ON L'AJOUTE ICI */}
      <div className="fixed top-20 left-0 w-full z-40">
        <Ticker />
      </div>
      <div className="relative pt-28 min-h-screen">
        {children}
      </div>
    </>
  );
}