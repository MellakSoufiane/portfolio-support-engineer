"use client";

import "./globals.css";
import { LanguageProvider, useLanguage } from "./components/LanguageContext";
import Navbar from "./components/Navbar";

// On crée un petit composant interne pour consommer le context
function LayoutContent({ children }: { children: React.ReactNode }) {
  const { lang, setLang } = useLanguage(); // Maintenant lang est bien récupéré ici !

  return (
    <>
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
      <body className="bg-black text-white">
        <LanguageProvider>
          <LayoutContent>{children}</LayoutContent>
        </LanguageProvider>
      </body>
    </html>
  );
}