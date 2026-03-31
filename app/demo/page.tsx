"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Transaction = {
  id: number;
  amount: number;
  network: string;
  code: string;
  status: string;
};

export default function Demo() {
  const [amount, setAmount] = useState(100);
  const [network, setNetwork] = useState("VISA");
  const [code, setCode] = useState("00");
  const [logs, setLogs] = useState<string[]>([]);
  const [result, setResult] = useState<any>(null);
  const [history, setHistory] = useState<Transaction[]>([]);

  const simulate = async () => {
    setLogs([]);
    setResult(null);

    const addLog = (msg: string, delay: number) =>
      new Promise<void>((resolve) =>
        setTimeout(() => {
          setLogs((prev) => [...prev, msg]);
          resolve();
        }, delay)
      );

    await addLog("Initializing transaction...", 500);
    await addLog("Sending request to network...", 800);
    await addLog(`Routing to ${network}...`, 600);

    let status = "approved";
    if (code !== "00") status = "declined";

    const response = {
      status,
      code,
      network,
      amount,
      timestamp: new Date().toISOString(),
    };

    await addLog("Processing response...", 700);
    await addLog(`Transaction ${status.toUpperCase()}`, 500);

    setResult(response);

    setHistory((prev) => [
      {
        id: Date.now(),
        amount,
        network,
        code,
        status,
      },
      ...prev,
    ]);
  };

  return (
    <main className="bg-black text-white min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-10">
        💳 Payment Simulator Dashboard
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* FORM */}
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
          <h2 className="text-xl mb-4">Transaction Input</h2>

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full mb-3 p-2 bg-black border border-white/20 rounded"
            placeholder="Amount"
          />

          <select
            value={network}
            onChange={(e) => setNetwork(e.target.value)}
            className="w-full mb-3 p-2 bg-black border border-white/20 rounded"
          >
            <option>VISA</option>
            <option>MASTERCARD</option>
            <option>AMEX</option>
          </select>

          <select
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full mb-4 p-2 bg-black border border-white/20 rounded"
          >
            <option value="00">00 - Approved</option>
            <option value="05">05 - Do Not Honor</option>
            <option value="51">51 - Insufficient Funds</option>
            <option value="91">91 - Issuer Unavailable</option>
          </select>

          <button
            onClick={simulate}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            🚀 Simulate Transaction
          </button>
        </div>

        {/* RESULT */}
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
          <h2 className="text-xl mb-4">Response</h2>

          {result ? (
            <motion.pre
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-black p-4 rounded text-green-400 text-sm"
            >
              {JSON.stringify(result, null, 2)}
            </motion.pre>
          ) : (
            <p className="text-gray-400">No transaction yet</p>
          )}
        </div>

      </div>

      {/* LOGS */}
      <div className="mt-10 bg-white/5 p-6 rounded-2xl border border-white/10">
        <h2 className="text-xl mb-4">Logs</h2>
        <div className="text-green-400 font-mono text-sm space-y-1">
          {logs.map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {"> " + log}
            </motion.div>
          ))}
        </div>
      </div>

      {/* HISTORY */}
      <div className="mt-10 bg-white/5 p-6 rounded-2xl border border-white/10">
        <h2 className="text-xl mb-4">Transaction History</h2>

        <div className="space-y-2">
          {history.map((tx) => (
            <div
              key={tx.id}
              className="flex justify-between text-sm border-b border-white/10 pb-1"
            >
              <span>{tx.network}</span>
              <span>{tx.amount}</span>
              <span>{tx.code}</span>
              <span
                className={
                  tx.status === "approved"
                    ? "text-green-400"
                    : "text-red-400"
                }
              >
                {tx.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}