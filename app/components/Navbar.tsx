"use client";


export default function Navbar({ lang, setLang }: { lang: "en" | "fr"; setLang: any }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">

        {/* Logo / Nom */}
        <h1 className="font-bold text-lg tracking-wide">
          Soufiane Mellak
        </h1>

        {/* Menu + toggle */}
        <div className="flex items-center gap-6">

          {/* Menu */}
          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>

          {/* Toggle langue */}
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