// src/App.jsx
import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

export default function App() {
  const data = {
    labels: ["SEA", "PORTS", "LAND", "AIR", "DOCS", "COMMS"],
    datasets: [
      {
        label: "Global Sync Loop",
        data: [100, 95, 98, 97, 99, 100],
        borderColor: "#f59e0b",
        backgroundColor: "rgba(245,158,11,0.2)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans p-6">
      <header className="border-b border-amber-500 pb-4 mb-6">
        <h1 className="text-3xl font-black uppercase italic text-amber-500">
          ATG EMPIRE OS v∞
        </h1>
        <p className="text-sm text-slate-400">
          The Infinite World Engine — Continuous Global Operations
        </p>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2 bg-slate-800 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-amber-500 pl-3">
            World Engine Loop
          </h2>
          <Line data={data} />
        </section>

        <aside className="bg-slate-800 rounded-xl p-6 space-y-4">
          <h2 className="text-xl font-bold border-l-4 border-amber-500 pl-3">
            System Status
          </h2>
          <ul className="space-y-2 text-sm">
            <li>🌊 SEA → Carriers: Live</li>
            <li>⚓ PORTS → Terminals: Synced</li>
            <li>🚚 LAND → Truck/Rail: Active</li>
            <li>✈️ AIR → Cargo: Operational</li>
            <li>📑 DOCUMENT HUB: Secured</li>
            <li>📡 COMMUNICATION: Online</li>
          </ul>
        </aside>
      </main>

      <footer className="mt-8 text-center text-xs text-slate-500">
        © 2026 Aremo Temmy Group — Infinite Operating Mode Enabled
      </footer>
    </div>
  );
}
