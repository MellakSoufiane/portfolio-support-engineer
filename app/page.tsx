"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Traductions EN/FR
export const translations = {
  en: {
    hero: {
      name: "Soufiane Mellak",
      role: "Senior Support Engineer",
      subtitle:
        "Expert in payment systems, incident resolution and compliance with Visa, Mastercard, UPI & Amex.",
      location: "📍 Morocco",
      domain: "💳 Payment Systems",
      skills: "⚙️ API & Support",
      liveDemo: "Live Demo",
      viewWork: "View Work",
    },
    about: {
      title: "About",
      content: `As a Senior Support Engineer, I handle critical payment incidents 
and ensure high-quality delivery of solutions in production environments. 

I specialize in analyzing transaction failures, debugging APIs and 
validating fixes using internal simulation tools designed to reproduce 
real-world payment scenarios.

I also manage compliance with global payment networks including Visa,
Mastercard, UPI and American Express by integrating updates and 
validating their behavior to ensure full compliance.`,
    },
    projects: {
      title: "Projects",
      list: [
        {
          title: "Payment Simulation Platform",
          desc: "Internal tool designed to simulate payment transactions and validate fixes before production deployment.",
          points: [
            "Transaction simulation (success / failure)",
            "Network compliance validation",
            "ISO response codes handling",
          ],
        },
        {
          title: "Support Analysis Dashboard",
          desc: "Dashboard enabling faster incident resolution through API response analysis and log debugging.",
          points: ["API error analysis", "Log visualization", "Faster troubleshooting"],
        },
      ],
    },
    experience: {
      title: "Experience",
      role: "Senior Support Engineer",
      points: [
        "Resolve critical production incidents impacting payment systems",
        "Perform deep analysis and root cause identification",
        "Validate fixes using internal simulation tools",
        "Ensure compliance with Visa, Mastercard, UPI and Amex",
        "Deliver high-quality tested solutions",
      ],
    },
    resume: {
      title: "Resume",
      view: "View CV",
      download: "Download CV",
      preview: "Preview",
    },
    contact: {
      title: "Contact",
      email: "mellaksoufiane4@gmail.com",
    },
    footer: "© 2026 — Soufiane Mellak — Senior Support Engineer",
  },
  fr: {
    hero: {
      name: "Soufiane Mellak",
      role: "Ingénieur Support Senior",
      subtitle:
        "Expert en systèmes de paiement, résolution d’incidents et conformité avec Visa, Mastercard, UPI & Amex.",
      location: "📍 Maroc",
      domain: "💳 Systèmes de Paiement",
      skills: "⚙️ API & Support",
      liveDemo: "Démo Live",
      viewWork: "Voir mes projets",
    },
    about: {
      title: "À propos",
      content: `En tant qu'ingénieur support senior, je gère les incidents critiques liés aux paiements 
et assure la livraison de solutions de haute qualité en environnement de production.

Je me spécialise dans l'analyse des échecs de transactions, le debugging d'APIs et 
la validation des correctifs à l'aide de simulateurs internes reproduisant 
des scénarios réels.

Je gère également la conformité avec les réseaux internationaux Visa, 
Mastercard, UPI et American Express en intégrant les évolutions et 
en validant leur bon fonctionnement.`,
    },
    projects: {
      title: "Projets",
      list: [
        {
          title: "Plateforme de Simulation Paiement",
          desc: "Outil interne permettant de simuler les transactions et valider les correctifs avant production.",
          points: [
            "Simulation de transactions (succès / échec)",
            "Validation conformité réseaux",
            "Gestion codes ISO",
          ],
        },
        {
          title: "Dashboard Support & Analyse",
          desc: "Dashboard facilitant la résolution rapide des incidents via l'analyse des réponses API et logs.",
          points: ["Analyse erreurs API", "Visualisation logs", "Résolution rapide des incidents"],
        },
      ],
    },
    experience: {
      title: "Expérience",
      role: "Ingénieur Support Senior",
      points: [
        "Résolution d’incidents critiques en production",
        "Analyse approfondie et identification des causes racines",
        "Validation via simulateurs internes",
        "Assurer la conformité Visa, Mastercard, UPI et Amex",
        "Livraison de solutions testées et fiables",
      ],
    },
     resume: {
      title: "CV",
      view: "Voir le CV",
      download: "Télécharger",
      preview: "Aperçu",
    },
    contact: {
      title: "Contact",
      email: "mellaksoufiane4@gmail.com",
    },
    footer: "© 2026 — Soufiane Mellak — Ingénieur Support Senior",
  },
};

// Navbar sticky + toggle langue + section highlight
function Navbar({ lang, setLang }: { lang: "en" | "fr"; setLang: any }) {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "experience","resume", "contact"];
      const scrollPos = window.scrollY + 200;
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el && el.offsetTop <= scrollPos && scrollPos < el.offsetTop + el.offsetHeight) {
          setActive(sec);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
        <h1 className="font-bold text-lg tracking-wide">Soufiane Mellak</h1>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            {["about", "projects", "experience","resume", "contact"].map((sec) => (
              <a
                key={sec}
                href={`#${sec}`}
                className={`hover:text-white transition ${
                  active === sec ? "text-white font-semibold" : ""
                }`}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </a>
          ))}
          </div>
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

export default function Home() {
  const [lang, setLang] = useState<"en" | "fr">("en");
  const t = translations[lang];

  return (
    <main className="bg-black text-white min-h-screen relative scroll-smooth">
      <Navbar lang={lang} setLang={setLang} />

      <div className="relative max-w-7xl mx-auto px-6 pt-40">

        {/* HERO */}
        <motion.section
          id="hero"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-40 grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl font-bold mb-6">{t.hero.name}</h1>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
              {t.hero.role}
            </h2>
            <p className="text-xl text-gray-400 mb-8">{t.hero.subtitle}</p>
            <div className="flex gap-4">
              <Link
                href="/dashboard"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-lg transition"
              >
                {t.hero.liveDemo}
              </Link>
              <a
                href="#projects"
                className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 hover:scale-105 transition"
              >
                {t.hero.viewWork}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-xl shadow-2xl"
          >
            <p className="text-sm text-gray-400 mb-2">Transaction Preview</p>
            <div className="bg-black p-4 rounded-xl text-green-400 font-mono text-sm">
{`{
  status: "approved",
  code: "00",
  network: "VISA",
  amount: 100
}`}
            </div>
          </motion.div>
        </motion.section>

        {/* ABOUT */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto mb-40"
        >
          <h2 className="text-4xl font-semibold mb-6">{t.about.title}</h2>
          <p className="text-gray-400 leading-relaxed whitespace-pre-line">{t.about.content}</p>
        </motion.section>

        {/* PROJECTS */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          className="max-w-7xl mx-auto mb-40"
        >
          <h2 className="text-4xl font-semibold mb-10">{t.projects.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.projects.list.map((p, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:scale-105 hover:bg-white/10 transition"
              >
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-400 mb-4">{p.desc}</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  {p.points.map((pt, idx) => (
                    <li key={idx}>• {pt}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* EXPERIENCE */}
        <motion.section
          id="experience"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto mb-40"
        >
          <h2 className="text-4xl font-semibold mb-10">{t.experience.title}</h2>
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-xl">
            <h3 className="text-xl font-bold mb-4">{t.experience.role}</h3>
            <ul className="text-gray-400 space-y-3 text-sm">
              {t.experience.points.map((pt, i) => (
                <li key={i}>• {pt}</li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* ✅ RESUME SECTION */}
        <motion.section
          id="resume"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-40"
        >
          <h2 className="text-4xl mb-10">{t.resume.title}</h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Preview PDF réel */}
            <div className="border border-white/10 rounded-xl overflow-hidden">
              <iframe
                src={lang === "en" ? "/cv-en.pdf" : "/cv-fr.pdf"}
                className="w-full h-[500px]"
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-4 justify-center">
              <a
                href={lang === "en" ? "/cv-en.pdf" : "/cv-fr.pdf"}
                target="_blank"
                className="border px-6 py-3 rounded-xl text-center hover:bg-white/10"
              >
                👁️ {t.resume.view}
              </a>

              <a
                href={lang === "en" ? "/cv-en.pdf" : "/cv-fr.pdf"}
                download
                className="bg-blue-500 text-black px-6 py-3 rounded-xl text-center"
              >
                ⬇️ {t.resume.download}
              </a>
            </div>

          </div>
        </motion.section>

         {/* CONTACT */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-semibold mb-6">{t.contact.title}</h2>
          <p className="text-gray-400">{t.contact.email}</p>
        </motion.section>

        {/* FOOTER */}
        <footer className="text-center text-gray-500">{t.footer}</footer>
      </div>
    </main>
  );
}