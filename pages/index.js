import React, { useState, useEffect } from 'react';
import { Shield, Brain, Wallet, Ship, AlertTriangle, CheckCircle, Search, Cpu } from 'lucide-react';

export default function ATGHub() {
  const [financialRisk, setFinancialRisk] = useState(88477.25);
  const [searchQuery, setSearchQuery] = useState("");
  const [deepInsight, setDeepInsight] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // --- DEEP SEARCH INTELLIGENCE ---
  const handleDeepSearch = (query) => {
    setSearchQuery(query);
    if (query.length > 3) {
      setIsSearching(true);
      // Simulating "Deep Search" analysis delay
      setTimeout(() => {
        if (query.toLowerCase().includes("maersk")) {
          setDeepInsight("DEEP ANALYSIS: Maersk Contract 300074142 is active. However, MSC market rates are 12% lower for the Lagos-Antwerp route this week.");
        } else if (query.toLowerCase().includes("risk")) {
          setDeepInsight("FINANCIAL SCAN: ₦88k risk detected in pending invoices. Suggesting 'Clear Invoices' to rebalance liquidity.");
        } else {
          setDeepInsight("SEARCHING SOVEREIGN LOGS... No immediate anomalies found for '" + query + "'.");
        }
        setIsSearching(false);
      }, 800);
    } else {
      setDeepInsight("");
    }
  };

  return (
    <div className="min-h-screen bg-[#05070a] text-slate-100 p-6 font-sans">
      {/* HEADER: CEO CONTROL */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 border-b border-slate-800 pb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter text-white">ATG GLOBAL CONTROL</h1>
          <p className="text-slate-500 text-sm mt-1 uppercase tracking-widest text-[10px]">Sovereign Logistics OS v1.2</p>
        </div>
        
        {/* DEEP SEARCH BAR */}
        <div className="relative w-full md:w-96">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            {isSearching ? <Cpu className="w-4 h-4 text-blue-500 animate-spin" /> : <Search className="w-4 h-4 text-slate-500" />}
          </div>
          <input 
            type="text"
            placeholder="DEEP SEARCH: Type 'Maersk' or 'Risk'..."
            className="w-full bg-slate-900 border border-slate-800 rounded-full py-2 pl-10 pr-4 text-sm focus:border-blue-500 outline-none transition-all placeholder:text-slate-600"
            value={searchQuery}
            onChange={(e) => handleDeepSearch(e.target.value)}
          />
          {deepInsight && (
            <div className="absolute top-12 left-0 w-full bg-blue-950/40 border border-blue-500/30 backdrop-blur-xl p-3 rounded-xl text-[11px] text-blue-200 animate-in fade-in slide-in-from-top-2 z-50">
              <span className="font-bold text-blue-400 mr-2">AI:</span> {deepInsight}
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-800">
          <Shield className="text-blue-400 w-5 h-5" />
          <span className="text-xs font-mono uppercase tracking-widest text-slate-300">CEO Access</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 1. OPERATIONS ENGINE */}
        <section className="bg-[#0c111a] border border-slate-800 rounded-xl p-5 hover:border-blue-500/50 transition-all">
          <div className="flex items-center gap-2 mb-6">
            <Ship className="text-blue-500 w-5 h-5" />
            <h2 className="text-lg font-semibold uppercase tracking-tight">Operations</h2>
          </div>
          <div className="bg-slate-900/80 p-4 rounded-lg border border-slate-800 mb-4">
            <p className="text-[10px] text-slate-500 uppercase mb-1">Contract Status</p>
            <p className="text-xl font-mono text-white">300074142</p>
            <span className="inline-flex items-center mt-2 px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/10 text-green-400 uppercase">
              Active
            </span>
          </div>
          <button className="w-full bg-slate-800 hover:bg-slate-700 py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors">
            Draft Shipment
          </button>
        </section>

        {/* 2. INTELLIGENCE ENGINE */}
        <section className="bg-[#0c111a] border border-slate-800 rounded-xl p-5 hover:border-purple-500/50 transition-all">
          <div className="flex items-center gap-2 mb-6">
            <Brain className="text-purple-500 w-5 h-5" />
            <h2 className="text-lg font-semibold uppercase tracking-tight">Intelligence</h2>
          </div>
          <div className="bg-purple-500/5 p-4 rounded-lg border border-purple-500/20 mb-4">
            <p className="text-[10px] text-purple-400 uppercase font-bold mb-2">Rate Intelligence</p>
            <p className="text-sm leading-relaxed text-slate-300">
              Contract rate (₦450k) is currently **Optimal**. No market switching required.
            </p>
          </div>
          <div className="flex justify-between text-[10px] font-mono text-slate-500 px-1 uppercase italic">
            <span>Scan Complete: 100% Accuracy</span>
          </div>
        </section>

        {/* 3. FINANCIAL ENGINE */}
        <section className="bg-[#0c111a] border border-slate-800 rounded-xl p-5 hover:border-red-500/50 transition-all">
          <div className="flex items-center gap-2 mb-6">
            <Wallet className="text-red-500 w-5 h-5" />
            <h2 className="text-lg font-semibold uppercase tracking-tight">Financial</h2>
          </div>
          <div className="bg-red-500/5 p-4 rounded-lg border border-red-500/20 mb-4">
            <p className="text-[10px] text-red-400 uppercase font-bold mb-1">Total Risk</p>
            <p className="text-3xl font-bold text-white tracking-tight">
              ₦{financialRisk.toLocaleString()}
            </p>
            <div className="flex items-center gap-1 mt-2 text-red-400 text-[10px] font-bold">
              <AlertTriangle size={12} />
              <span>OVERDUE INVOICES</span>
            </div>
          </div>
          <button 
            onClick={() => {
              setFinancialRisk(0);
              setDeepInsight("FINANCIAL UPDATE: Risk cleared. Ledger now at ₦0.00.");
            }}
            className="w-full bg-red-600 hover:bg-red-500 text-white py-3 rounded-lg text-xs font-bold uppercase tracking-widest shadow-lg shadow-red-900/20 transition-all"
          >
            Clear Invoices
          </button>
        </section>
      </div>

      <footer className="mt-10 border-t border-slate-900 pt-6">
        <div className="flex items-center gap-4 text-[9px] font-mono text-slate-600 uppercase tracking-[0.2em]">
          <span className="flex items-center gap-1"><CheckCircle size={10} className="text-green-500"/> System Online</span>
          <span>Sovereign ID: {Math.random().toString(36).substring(7).toUpperCase()}</span>
          <span>Location: Lagos Node</span>
        </div>
      </footer>
    </div>
  );
          }
