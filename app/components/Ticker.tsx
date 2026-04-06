"use client";
import { motion } from "framer-motion";

export default function Ticker() {
  const logs = [
    "MTI 0100 - VISA - AUTH APPROVED (00)",
    "MTI 0420 - MASTERCARD - REVERSAL SUCCESS",
    "ISO 8583 COMPLIANCE: PASSED",
    "POWERCARD L2 - NODE ACTIVE",
    "MTI 0200 - AMEX - TRANSACTION CAPTURED",
    "PCI-DSS SECURITY CHECK: SECURE",
    "HPS GATEWAY: OPERATIONAL",
  ];

  // On duplique la liste pour un défilement infini fluide
  const fullLogs = [...logs, ...logs, ...logs].join("  •  ");

  return (
    <div className="w-full bg-purple-950/20 border-y border-white/5 py-1.5 overflow-hidden whitespace-nowrap font-mono text-[9px] md:text-[10px] text-purple-400/50 uppercase tracking-[0.2em] backdrop-blur-sm">
      <motion.div
        animate={{ x: [0, -1500] }}
        transition={{ 
          repeat: Infinity, 
          duration: 40, 
          ease: "linear" 
        }}
        className="inline-block"
      >
        {fullLogs}
      </motion.div>
    </div>
  );
}