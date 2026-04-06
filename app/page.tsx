"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "./components/LanguageContext";

// Traductions EN/FR
export const translations = {
  en: {
    hero: {
      name: "Soufiane Mellak",
      role: "Senior Support Engineer",
      subtitle: "Expert in payment systems, incident resolution and compliance with Visa, Mastercard, UPI & Amex.",
      liveDemo: "Execute Test",
      viewWork: "View Projects",
      networks: ["Visa", "Mastercard", "Amex", "UPI", "ISO 8583", "PowerCard"]
    },
    stats: [
      { label: "Compliance", value: "100%" },
      { label: "Critical Support", value: "L2/L3" },
      { label: "Uptime Managed", value: "99.9%" },
      { label: "Experience", value: "3+ Years" },
    ],
    about: {
      title: "About",
      content: `As a Senior Support Engineer at HPS, I handle critical payment incidents and ensure high-quality delivery of solutions in production environments. 

I specialize in analyzing transaction failures, debugging APIs and validating fixes using internal simulation tools designed to reproduce real-world payment scenarios.

I also manage compliance with global payment networks by integrating updates and validating their behavior to ensure full compliance.`,
    },
    projects: {
      title: "Core Projects",
      list: [
        {
          title: "Payment Simulation Platform",
          desc: "Internal tool designed to simulate payment transactions and validate fixes before production deployment.",
          points: ["Transaction simulation", "Network compliance", "ISO response codes"],
        },
        {
          title: "Support Analysis Dashboard",
          desc: "Dashboard enabling faster incident resolution through API response analysis and log debugging.",
          points: ["API error analysis", "Log visualization", "Troubleshooting"],
        },
      ],
    },
    experience: {
      title: "Professional Experience",
      role: "Senior Support Engineer @ HPS",
      points: [
        "Resolve critical production incidents impacting payment systems",
        "Perform deep analysis and root cause identification",
        "Validate fixes using internal simulation tools",
        "Ensure compliance with Visa, Mastercard, UPI and Amex",
      ],
    },
    resume: {
      title: "Resume",
      view: "View CV",
      download: "Download",
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
      subtitle: "Expert en systèmes de paiement, résolution d’incidents et conformité avec Visa, Mastercard, UPI & Amex.",
      liveDemo: "Lancer Test",
      viewWork: "Voir Projets",
      networks: ["Visa", "Mastercard", "Amex", "UPI", "ISO 8583", "PowerCard"]
    },
    stats: [
      { label: "Conformité", value: "100%" },
      { label: "Support Critique", value: "L2/L3" },
      { label: "Uptime Géré", value: "99.9%" },
      { label: "Expérience", value: "3+ Ans" },
    ],
    about: {
      title: "À propos",
      content: `En tant qu'ingénieur support senior chez HPS, je gère les incidents critiques liés aux paiements et assure la livraison de solutions de haute qualité en production.

Je me spécialise dans l'analyse des échecs de transactions, le debugging d'APIs et la validation des correctifs à l'aide de simulateurs internes.

Je gère également la conformité avec les réseaux internationaux Visa, Mastercard, UPI et American Express.`,
    },
    projects: {
      title: "Projets Phares",
      list: [
        {
          title: "Plateforme de Simulation Paiement",
          desc: "Outil interne permettant de simuler les transactions et valider les correctifs avant production.",
          points: ["Simulation de flux", "Validation conformité", "Gestion codes ISO"],
        },
        {
          title: "Dashboard Support & Analyse",
          desc: "Interface facilitant la résolution rapide des incidents via l'analyse des réponses API et logs.",
          points: ["Analyse erreurs API", "Visualisation logs", "Debugging rapide"],
        },
      ],
    },
    experience: {
      title: "Parcours Professionnel",
      role: "Ingénieur Support Senior @ HPS",
      points: [
        "Résolution d’incidents critiques en production",
        "Analyse approfondie et identification des causes racines",
        "Validation via simulateurs internes",
        "Assurer la conformité Visa, Mastercard, UPI et Amex",
      ],
    },
    resume: {
      title: "Curriculum Vitae",
      view: "Voir le CV",
      download: "Télécharger",
    },
    contact: {
      title: "Contact",
      email: "mellaksoufiane4@gmail.com",
    },
    footer: "© 2026 — Soufiane Mellak — Ingénieur Support Senior",
  },
};

export default function Home() {
  const { lang } = useLanguage();
  const t = translations[lang || "fr"];

  // État du simulateur
  const [txStep, setTxStep] = useState<"idle" | "processing" | "success">("idle");

  const runSimulation = () => {
    setTxStep("processing");
    setTimeout(() => setTxStep("success"), 2000);
    setTimeout(() => setTxStep("idle"), 6000);
  };

  return (
    <main className="bg-black text-white min-h-screen relative scroll-smooth overflow-x-hidden">
      
      {/* BACKGROUND DECORATION */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[30%] h-[30%] bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 z-10">

        {/* HERO SECTION */}
        <motion.section
          id="home"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-32 grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
              {t.hero.name}
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
              {t.hero.role}
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              {t.hero.networks.map((net) => (
                <span key={net} className="px-3 py-1 border border-white/10 bg-white/5 rounded-full text-xs font-mono text-purple-300">
                  {net}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <button 
                onClick={runSimulation}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition shadow-lg shadow-purple-900/20"
              >
                {t.hero.liveDemo}
              </button>
              <a href="#projects" className="border border-white/20 px-8 py-3 rounded-xl hover:bg-white/5 transition font-medium">
                {t.hero.viewWork}
              </a>
            </div>
          </div>

          {/* SIMULATEUR INTERACTIF */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-xl shadow-2xl relative z-10 overflow-hidden">
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 bg-red-500/50 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500/50 rounded-full" />
                  <div className="w-3 h-3 bg-green-500/50 rounded-full" />
                </div>
                <span className="text-[10px] text-gray-500 font-mono italic">iso8583_engine_v3.log</span>
              </div>

              <div className="bg-black/60 rounded-2xl p-5 mb-4 min-h-[160px] flex flex-col justify-center border border-white/5 relative">
                {txStep === "idle" && (
                  <div className="text-center space-y-3">
                    <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">System Ready</p>
                    <p className="text-purple-300/40 font-mono text-[10px]">Awaiting MTI 0100 Request...</p>
                  </div>
                )}

                {txStep === "processing" && (
                  <div className="space-y-2 font-mono text-[11px]">
                    <p className="text-blue-400 animate-pulse"> {">"} SENDING 0100 AUTH REQ</p>
                    <p className="text-gray-500 italic"> {">"} Routing via HPS Switch...</p>
                    <p className="text-gray-500 italic"> {">"} Validating Network Rules...</p>
                    <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden mt-4">
                      <motion.div 
                        initial={{ x: "-100%" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 2 }}
                        className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500"
                      />
                    </div>
                  </div>
                )}

                {txStep === "success" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-mono text-[11px]">
                    <p className="text-green-400 mb-2"> {">"} RECEIVED 0110 RESPONSE</p>
                    <pre className="text-purple-300 bg-purple-500/5 p-3 rounded-lg border border-purple-500/10">
{`{
  "MTID": "0110",
  "DE_39": "00",
  "status": "APPROVED",
  "compliance": "VISA_EXT"
}`}
                    </pre>
                  </motion.div>
                )}
              </div>

              <div className="mt-4 p-3 border border-purple-500/20 bg-purple-500/5 rounded-xl flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full animate-pulse ${txStep === "processing" ? "bg-yellow-500" : "bg-purple-500"}`} />
                <span className="text-[10px] text-purple-400 font-mono tracking-widest uppercase">
                  {txStep === "processing" ? "Transaction in progress..." : "Production Monitor: Secure"}
                </span>
              </div>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
          </motion.div>
        </motion.section>

        {/* STATS SECTION */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-40">
          {t.stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, borderColor: "rgba(168, 85, 247, 0.4)" }}
              className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center transition-colors"
            >
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-1">
                {stat.value}
              </h3>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </section>

        {/* ABOUT SECTION */}
        <motion.section
          id="about"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-40 text-center"
        >
          <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 inline-block border-b border-purple-900/50 pb-2">
            {t.about.title}
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed whitespace-pre-line">
            {t.about.content}
          </p>
        </motion.section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="mb-40">
          <h2 className="text-4xl font-bold mb-12 text-center">{t.projects.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.projects.list.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="group p-8 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-3xl hover:border-purple-500/50 transition-all"
              >
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">{p.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.points.map((pt, idx) => (
                    <span key={idx} className="bg-white/5 px-3 py-1 rounded-md text-[11px] text-gray-400 font-mono border border-white/5">
                      #{pt}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="max-w-4xl mx-auto mb-40">
          <h2 className="text-4xl font-bold mb-12 text-center">{t.experience.title}</h2>
          <div className="relative pl-8 border-l border-purple-500/30">
            <div className="absolute w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full -left-[8.5px] top-1 shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
            <h3 className="text-2xl font-bold text-white mb-2">{t.experience.role}</h3>
            <p className="text-purple-400 font-mono text-sm mb-6 uppercase tracking-widest font-bold">2023 — PRESENT</p>
            <ul className="space-y-4">
              {t.experience.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400">
                  <span className="text-purple-500 mt-1">▹</span>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* RESUME SECTION */}
        <section id="resume" className="mb-40 max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">{t.resume.title}</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl h-[450px]">
              <iframe
                src="/CV_Soufiane_Mellak.pdf"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-gray-400 text-lg">
                Consultez mon profil complet détaillé pour en savoir plus sur mon expertise en solutions de paiement.
              </p>
              <div className="flex gap-4">
                <a href="/CV_Soufiane_Mellak.pdf" target="_blank" className="flex-1 text-center bg-white text-black py-4 rounded-2xl font-bold hover:bg-gray-200 transition">
                  {t.resume.view}
                </a>
                <a href="/CV_Soufiane_Mellak.pdf" download className="flex-1 text-center border border-white/20 py-4 rounded-2xl font-bold hover:bg-white/10 transition">
                  {t.resume.download}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto mb-32"
        >
          <div className="relative bg-white/5 border border-white/10 rounded-3xl p-12 backdrop-blur-xl overflow-hidden shadow-2xl">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none" />

            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                  {lang === "fr" ? "Discutons " : "Let's "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    {lang === "fr" ? "Paiement" : "Payment"}
                  </span>
                  .
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
                  {lang === "fr" 
                    ? "Disponible pour des opportunités en ingénierie de paiement, support critique ou conformité réseaux. Basé à Casablanca."
                    : "Available for opportunities in payment engineering, critical support, or network compliance. Based in Casablanca."
                  }
                </p>
                <div className="flex items-center gap-3 p-4 bg-black/40 border border-white/5 rounded-2xl w-fit">
                    <span className="text-2xl">🌍</span>
                    <span className="text-sm font-mono text-gray-300">Open to Global Opportunities</span>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <motion.a 
                  href={`mailto:${t.contact.email}`}
                  whileHover={{ scale: 1.03, borderColor: "rgba(168, 85, 247, 0.4)" }}
                  className="group flex items-center gap-6 p-6 bg-black/40 border border-white/10 rounded-2xl transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-purple-500/20 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                    ✉️
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-1">Email</h4>
                    <p className="text-lg text-white font-medium break-all group-hover:text-purple-300 transition-colors">
                      {t.contact.email}
                    </p>
                  </div>
                </motion.a>

                <motion.a 
                  href="https://www.linkedin.com/in/soufiane-mellak-8101b0216/"
                  target="_blank"
                  whileHover={{ scale: 1.03, borderColor: "rgba(59, 130, 246, 0.4)" }}
                  className="group flex items-center gap-6 p-6 bg-black/40 border border-white/10 rounded-2xl transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/20 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                    🔗
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-1">Network</h4>
                    <p className="text-lg text-white font-medium group-hover:text-blue-300 transition-colors">
                      linkedin/soufiane-mellak
                    </p>
                  </div>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.section>

        <footer className="pt-10 text-gray-600 text-sm flex justify-between items-center border-t border-white/5">
          <p>{t.footer}</p>
        </footer>
      </div>
    </main>
  );
}