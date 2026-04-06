// PAS DE "use client" ICI
import "./globals.css";
import { LanguageProvider } from "./components/LanguageContext";
import LayoutContent from "./components/LayoutContent"; // On va créer ce fichier

export const metadata = {
  title: "Soufiane Mellak | Engineer",
  description: "Portfolio de Soufiane Mellak, Ingénieur Support Senior",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="bg-black text-white antialiased overflow-x-hidden">
        <LanguageProvider>
          {/* Ce composant gérera la Navbar et le titre dynamique */}
          <LayoutContent>{children}</LayoutContent>
        </LanguageProvider>
      </body>
    </html>
  );
}