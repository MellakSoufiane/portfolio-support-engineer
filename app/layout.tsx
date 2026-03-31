"use client";

import "./globals.css";
import { useState } from "react";

// 👇 On reprend ta Navbar ici
function Navbar({ lang, setLang }: any) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
        <h1 className="font-bold text-lg tracking-wide">
          Soufiane Mellak
        </h1>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="/#about">About</a>
            <a href="/#projects">Projects</a>
            <a href="/#experience">Experience</a>
            <a href="/#resume">Resume</a>
            <a href="/#contact">Contact</a>
            <a href="/demo" className="text-blue-400">Demo</a>
          </div>

          <div className="flex gap-2">
            <button
              className={`px-3 py-1 rounded ${
                lang === "en" ? "bg-blue-600" : "bg-white/10"
              }`}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <button
              className={`px-3 py-1 rounded ${
                lang === "fr" ? "bg-blue-600" : "bg-white/10"
              }`}
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
  const [lang, setLang] = useState<"en" | "fr">("en");

  return (
    <html lang="en">
      <body className="bg-black text-white">

        {/* Navbar globale */}
        <Navbar lang={lang} setLang={setLang} />

        {/* Contenu des pages */}
        <div className="pt-28">{children}</div>

      </body>
    </html>
  );
}