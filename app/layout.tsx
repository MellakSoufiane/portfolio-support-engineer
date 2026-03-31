"use client";

import "./globals.css";
import { LanguageProvider, useLanguage } from "./components/LanguageContext";


// 👇 On reprend ta Navbar ici
function Navbar() {
  const { lang, setLang } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">

        <h1 className="font-bold text-lg tracking-wide">
          Soufiane Mellak
        </h1>

        <div className="flex items-center gap-6">

          {/* NAV LINKS */}
          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="/#about">{lang === "fr" ? "À propos" : "About"}</a>
            <a href="/#projects">{lang === "fr" ? "Projets" : "Projects"}</a>
            <a href="/#experience">{lang === "fr" ? "Expérience" : "Experience"}</a>
            <a href="/#resume">{lang === "fr" ? "CV" : "Resume"}</a>
            <a href="/#contact">{lang === "fr" ? "Contact" : "Contact"}</a>
          </div>

          {/* LANGUAGE SWITCH */}
          <div className="flex gap-2">
            <button
              className={`px-3 py-1 rounded ${lang === "en" ? "bg-blue-600" : "bg-white/10"}`}
              onClick={() => setLang("en")}
            >
              EN
            </button>

            <button
              className={`px-3 py-1 rounded ${lang === "fr" ? "bg-blue-600" : "bg-white/10"}`}
              onClick={() => setLang("fr")}
            >
              FR
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        <LanguageProvider>
          <Navbar />
          <div className="pt-28">{children}</div>
        </LanguageProvider>

      </body>
    </html>
  );
}