"use client";
import React, { useState, useEffect } from 'react';

const StatBox = ({ val, label, color }) => (
  <div className="bg-[#12161d] px-4 py-2 rounded-xl border border-gray-800 flex flex-col items-center min-w-[90px]">
    <span className={`${color} font-black text-lg leading-tight`}>{val}</span>
    <span className="text-[8px] text-gray-500 font-black tracking-tighter uppercase">{label}</span>
  </div>
);

export default function ATGEmpireOS() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-GB', { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const layers = [
    { id: 'L1', name: 'COMMAND CORE', desc: 'ATG OS Dashboard & Entity Management', status: 'ONLINE', color: 'border-emerald-500', text: 'text-emerald-500' },
    { id: 'L2', name: 'FINANCIAL ENGINE', desc: 'Banks + Crypto + Payment Rails', status: 'ACTIVE', color: 'border-purple-500', text: 'text-purple-500' },
    { id: 'L3', name: 'LOGISTICS ENGINE', desc: 'SEA + AIR + LAND Networks', status: 'LIVE', color: 'border-blue-400', text: 'text-blue-400' },
    { id: 'L4', name: 'TRADE NETWORK', desc: 'Global Buyers & Suppliers CRM', status: 'CONNECTED', color: 'border-orange-400', text: 'text-orange-400' },
    { id: 'L5', name: 'DOCUMENT VAULT', desc: 'Digital Trade Intelligence', status: 'SECURED', color: 'border-red-500', text: 'text-red-500' },
    { id: 'L6', name: 'API HUB', desc: 'Multi-Integration System', status: 'SYNCED', color: 'border-cyan-400', text: 'text-cyan-400' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0c10] text-gray-300 font-sans p-4">
      <nav className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
        <div className="flex items-center gap-5">
          <div className="bg-emerald-500 text-black font-black p-3 rounded-2xl text-xl">ATG</div>
          <div>
            <h1 className="text-2xl font-black text-white uppercase">ATG EMPIRE</h1>
            <p className="text-[10px] text-gray-500 font-black tracking-widest uppercase">Global Logistics OS v2.0</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <StatBox val="6" label="SATELLITES" color="text-purple-400" />
          <div className="bg-[#12161d] px-5 py-2 rounded-xl border border-gray-800 flex flex-col items-center">
            <span className="text-emerald-400 font-mono font-bold text-lg">{time || '00:00:00'}</span>
            <span className="text-[9px] text-gray-500 font-bold uppercase">APR 4, 2026</span>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto bg-[#0d1117] rounded-3xl border border-gray-800 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {layers.map((l) => (
            <div key={l.id} className={`bg-[#161b22] p-6 rounded-2xl border-l-4 ${l.color} border border-transparent hover:border-gray-700 transition-all`}>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[11px] font-black px-2 py-0.5 rounded-md ${l.text} bg-white/5`}>{l.id}</span>
                <h3 className="font-bold text-white text-base">{l.name}</h3>
              </div>
              <p className="text-xs text-gray-500 mb-4">{l.desc}</p>
              <div className={`text-[10px] font-black uppercase ${l.text}`}>{l.status}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
