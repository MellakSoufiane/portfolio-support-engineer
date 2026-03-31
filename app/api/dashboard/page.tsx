"use client";

import { useState } from "react";

export default function Dashboard() {
  const [amount, setAmount] = useState(100);
  const [card, setCard] = useState("4242424242424242");
  const [result, setResult] = useState<any>(null);

  const sendPayment = async () => {
    const res = await fetch("/api/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ amount, card })
    });

    const data = await res.json();
    setResult(data);
  };

  return (
    <div className="bg-black text-white min-h-screen p-10">
      
      <h1 className="text-3xl mb-6">💳 Simulation Paiement</h1>

      <div className="flex flex-col gap-4 max-w-md">

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="p-2 bg-gray-900 rounded"
          placeholder="Montant"
        />

        <input
          type="text"
          value={card}
          onChange={(e) => setCard(e.target.value)}
          className="p-2 bg-gray-900 rounded"
          placeholder="Carte"
        />

        <button
          onClick={sendPayment}
          className="bg-blue-600 p-2 rounded"
        >
          Envoyer transaction
        </button>

      </div>

      {result && (
        <pre className="mt-6 bg-gray-900 p-4 rounded">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}

    </div>
  );
}