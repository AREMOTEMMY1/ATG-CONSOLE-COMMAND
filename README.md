import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const ATGEmpireOS = () => {
  const [time, setTime] = useState('');
  
  // Real-time Clock Logic for ATG HUB
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-GB', { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const layers = [
    { id: 'L1', name: 'COMMAND CORE', desc: 'ATG OS Dashboard & Entity Management', status: 'ONLINE', color: 'border-green-500', text: 'text-green-500' },
    { id: 'L2', name: 'FINANCIAL ENGINE', desc: 'Banks + Crypto + Payment Rails', status: 'ACTIVE', color: 'border-purple-500', text: 'text-purple-500' },
    { id: 'L3', name: 'LOGISTICS ENGINE', desc: 'SEA + AIR + LAND Networks', status: 'LIVE', color: 'border-blue-400', text: 'text-blue-400' },
    { id: 'L4', name: 'TRADE NETWORK', desc: 'Global Buyers & Suppliers CRM', status: 'CONNECTED', color: 'border-orange-400', text: 'text-orange-400' },
    { id: 'L5', name: 'DOCUMENT VAULT', desc: 'Digital Trade Intelligence', status: 'SECURED', color: 'border-red-500', text: 'text-red-500' },
    { id: 'L6', name: 'API HUB', desc: 'Multi-Integration System', status: 'SYNCED', color: 'border-cyan-400', text: 'text-cyan-400' },
  ];

  return (
    <div className="min-h-screen bg-[#05070a] text-gray-300 p-4 md:p-8 font-sans selection:bg-emerald-500/30">
      <Head>
        <title>ATG EMPIRE | GLOBAL OS v2.0</title>
        <meta name="robots" content="noindex, nofollow" /> {/* Protocol Zero Zero Security */}
      </Head>

      {/* TOP NAVIGATION BAR */}
      <nav className="flex flex-wrap items-center justify-between mb-12 gap-6 border-b border-gray-800/50 pb-6">
        <div className="flex items-center gap-5">
          <div className="bg-emerald-500 text-black font-black p-3 rounded-xl text-2xl shadow-[0_0_20px_rgba(16,185,129,0.3)]">ATG</div>
          <div>
            <h1 className="text-3xl font-black text-white tracking-tighter italic">ATG EMPIRE</h1>
            <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold">Global Trade + Finance + Logistics OS</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <StatBox val="6" label="LAYERS" color="text-cyan-400" />
          <StatBox val="6" label="SATELLITES" color="text-purple-400" />
          
          <div className="bg-[#12161d] px-5 py-2 rounded-xl border border-gray-800 flex flex-col items-center min-w-[110px]">
            <span className="text-emerald-400 font-mono font-bold text-lg">{time || '00:00:00'}</span>
            <span className="text-[9px] text-gray-500 font-bold uppercase">Apr 3, 2026</span>
          </div>

          <div className="hidden md:flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-xl">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]"></div>
            <span className="text-emerald-500 text-[10px] font-black uppercase tracking-widest">Empire Online</span>
          </div>
        </div>
      </nav>

      {/* ARCHITECTURE GRID */}
      <main className="max-w-6xl mx-auto bg-[#0d1117] rounded-3xl border border-gray-800 shadow-2xl p-8">
        <div className="flex justify-between items-center mb-10 border-b border-gray-800 pb-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border-2 border-gray-700 flex items-center justify-center">
               <div className="w-4 h-4 bg-gray-500 rounded-sm rotate-45"></div>
            </div>
            <h2 className="text-xl font-bold text-white tracking-widest uppercase">6-Layer Architecture</h2>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/5 rounded-full border border-emerald-500/20">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            <span className="text-[9px] font-black text-emerald-500 uppercase">All Systems Operational</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {layers.map((l) => (
            <div key={l.id} className={`group bg-[#161b22] p-6 rounded-2xl border-l-4 ${l.color} hover:bg-[#1c2128] transition-all cursor-pointer border border-transparent hover:border-gray-700`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className={`text-[11px] font-black px-2 py-0.5 rounded-md ${l.text} bg-white/5`}>{l.id}</span>
                  <h3 className="font-bold text-white text-base tracking-tight">{l.name}</h3>
                </div>
                <div className={`${l.text} text-[10px] font-black uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity`}>Access Layer</div>
              </div>
              <p className="text-xs text-gray-500 mb-8 leading-relaxed max-w-[250px]">{l.desc}</p>
              <div className={`text-[10px] font-black tracking-[0.2em] ${l.text} flex items-center gap-2`}>
                <span className={`w-1.5 h-1.5 rounded-full ${l.color.replace('border', 'bg')}`}></span>
                {l.status}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER NODES */}
      <div className="max-w-6xl mx-auto mt-10">
        <h3 className="text-[10px] font-black text-gray-600 mb-4 tracking-[0.4em] uppercase">Empire Status Nodes</h3>
        <div className="bg-[#0d1117] p-5 rounded-2xl border border-gray-800 flex items-center justify-between hover:border-emerald-500/30 transition-colors">
          <div className="flex items-center gap-5">
            <div className="bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20">
              <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.989-2.386l-.548-.547z"></path></svg>
            </div>
            <span className="text-white font-black text-sm tracking-widest">COMMAND CORE</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[11px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">L1</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_8px_#10b981]"></span>
              <span className="text-emerald-500 text-[11px] font-black tracking-widest">LIVE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatBox = ({ val, label, color }) => (
  <div className="bg-[#12161d] px-4 py-2 rounded-xl border border-gray-800 flex flex-col items-center min-w-[90px]">
    <span className={`${color} font-black text-lg leading-tight`}>{val}</span>
    <span className="text-[8px] text-gray-500 font-black tracking-tighter uppercase">{label}</span>
  </div>
);

export default ATGEmpireOS;
