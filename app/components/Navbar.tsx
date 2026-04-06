"use client";
import { useState } from "react";

export default function Navbar({ lang, setLang }: { lang: "en" | "fr"; setLang: (l: "en" | "fr") => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: lang === "fr" ? "À propos" : "About", href: "#about" },
    { name: lang === "fr" ? "Projets" : "Projects", href: "#projects" },
    { name: lang === "fr" ? "Expérience" : "Experience", href: "#experience" },
    { name: lang === "fr" ? "Contact" : "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
        
       {/* Logo / Nom - Cliquable pour retour au Home */}
        <a href="/" className="hover:opacity-80 transition-opacity">
          <h1 className="font-bold text-lg tracking-wide text-white">
            Soufiane <span className="text-purple-500 transition-colors break-all bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Mellak</span>
          </h1>
        </a>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-300 hover:text-white transition-colors">
              {item.name}
            </a>
          ))}
          
          <div className="flex bg-white/5 p-1 rounded-lg border border-white/10 ml-4">
            {["en", "fr"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l as "en" | "fr")}
                className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                  lang === l ? "bg-purple-600 text-white shadow-lg" : "text-gray-400 hover:text-white"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Bouton Hamburger Mobile (Fait maison en CSS) */}
        <div className="md:hidden flex items-center gap-4">
            <button 
                onClick={() => setLang(lang === "en" ? "fr" : "en")} 
                className="text-xs font-bold text-blue-400 border border-blue-400/30 px-2 py-1 rounded"
            >
                {lang.toUpperCase()}
            </button>
            
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            >
                <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </button>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-black/95 backdrop-blur-2xl ${
          isOpen ? "max-h-[400px] border-b border-white/10" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-6 p-8 items-center">
          {navigation.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={() => setIsOpen(false)}
              className="text-purple-500 transition-colors break-all bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}