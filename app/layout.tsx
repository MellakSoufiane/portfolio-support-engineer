"use client";

import "./globals.css";
import { LanguageProvider, useLanguage } from "./components/LanguageContext";
import Navbar from "./components/Navbar";
import Head from "next/head"; // Pour gérer le titre dynamiquement si besoin

// On crée un petit composant interne pour consommer le context
function LayoutContent({ children }: { children: React.ReactNode }) {
  const { lang, setLang } = useLanguage();

  return (
    <>
      {/* 1. Gestion du Titre de l'onglet (Dynamique selon la langue) */}
      <title>
        {lang === "fr" 
          ? "Soufiane Mellak | Ingénieur Support Senior" 
          : "Soufiane Mellak | Senior Support Engineer"}
      </title>
      
      {/* 2. Gestion du Logo de l'onglet (Favicon) */}
      <link rel="icon" href="/favicon.ico" /> 
      {/* Note: Assure-toi d'avoir un fichier favicon.ico dans ton dossier /public */}

      <Navbar lang={lang} setLang={setLang} />
      <div className="pt-28">{children}</div>
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <LanguageProvider>
          <LayoutContent>{children}</LayoutContent>
        </LanguageProvider>
      </body>
    </html>
  );
}