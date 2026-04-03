import React, { useState } from 'react';
import { Shield, Brain, Wallet, Ship, AlertTriangle, CheckCircle } from 'lucide-react';

// --- ATG INTELLIGENCE ENGINE ---
const analyzeRates = (contract: number, market: number) => {
  const savings = market - contract;
  return {
    isOptimal: contract <= market,
    diff: Math.abs(savings),
    suggestion: contract <= market 
      ? "Contract rate is optimal. Proceed with Maersk." 
      : `Market is cheaper by ₦${Math.abs(savings).toLocaleString()}. Switch to MSC?`
  };
};

export default function ATGHub() {
  const [financialRisk, setFinancialRisk] = useState(88477.25);
  const [contractId] = useState("300074142");
  
  // Mock Data for the Intelligence Engine
  const analysis = analyzeRates(450000, 485000); 

  return (
    <div className="min-h-screen bg-[#05070a] text-slate-100 p-6 font-sans">
      {/* HEADER: CEO CONTROL */}
      <header className="flex justify-between items-center mb-10 border-b border-slate-800 pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter text-white">ATG GLOBAL CONTROL</h1>
          <p className="text-slate-500 text-sm mt-1">Sovereign Logistics Operating System v1.0</p>
        </div>
        <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-800">
          <Shield className="text-blue-400 w-5 h-5" />
          <span className="text-xs font-mono uppercase tracking-widest">CEO Access Only</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* 1. OPERATIONS ENGINE (Core) */}
        <section className="bg-[#0c111a] border border-slate-800 rounded-xl p-5 hover:border-blue-500/50 transition-all">
          <div className="flex items-center gap-2 mb-6">
            <Ship className="text-blue-500 w-5 h-5" />
            <h2 className="text-lg font-semibold uppercase tracking-tight">Operations Engine</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-slate-900/80 p-4 rounded-lg border border-slate-800">
              <p className="text-xs text-slate-500 uppercase mb-1">Active Contract</p>
              <p className="text-xl font-mono text-white">{contractId}</p>
              <span className="inline-flex items-center mt-2 px-2 py-0.5 rounded text-xs font-medium bg-green-500/10 text-green-400">
                ● ACTIVE
              </span>
            </div>
            <button className="w-full bg-slate-800 hover:bg-slate-700 py-3 rounded-lg text-sm font-medium transition-colors">
              Draft New Shipment
            </button>
          </div>
        </section>

        {/* 2. INTELLIGENCE ENGINE (The Brain) */}
        <section className="bg-[#0c111a] border border-slate-800 rounded-xl p-5 hover:border-purple-500/50 transition-all">
          <div className="flex items-center gap-2 mb-6">
            <Brain className="text-purple-500 w-5 h-5" />
            <h2 className="text-lg font-semibold uppercase tracking-tight">Intelligence Engine</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-purple-500/5 p-4 rounded-lg border border-purple-500/20">
              <p className="text-xs text-purple-400 uppercase font-bold mb-2">Rate Analysis</p>
              <p className="text-sm leading-relaxed text-slate-300">
                {analysis.suggestion}
              </p>
            </div>
            <div className="flex justify-between text-xs font-mono text-slate-500 px-1">
              <span>CONTRACT: ₦450k</span>
              <span>MARKET: ₦485k</span>
            </div>
          </div>
        </section>

        {/* 3. FINANCIAL ENGINE (Banking) */}
        <section className="bg-[#0c111a] border border-slate-800 rounded-xl p-5 hover:border-red-500/50 transition-all">
          <div className="flex items-center gap-2 mb-6">
            <Wallet className="text-red-500 w-5 h-5" />
            <h2 className="text-lg font-semibold uppercase tracking-tight">Financial Engine</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-red-500/5 p-4 rounded-lg border border-red-500/20">
              <p className="text-xs text-red-400 uppercase font-bold mb-1">Current Financial Risk</p>
              <p className="text-3xl font-bold text-white tracking-tight">
                ₦{financialRisk.toLocaleString()}
              </p>
              <div className="flex items-center gap-1 mt-2 text-red-400 text-xs">
                <AlertTriangle size={12} />
                <span>Pending Invoices Found</span>
              </div>
            </div>
            <button 
              onClick={() => setFinancialRisk(0)}
              className="w-full bg-red-600 hover:bg-red-500 text-white py-3 rounded-lg text-sm font-bold shadow-lg shadow-red-900/20 transition-all uppercase tracking-widest"
            >
              Clear All Invoices
            </button>
          </div>
        </section>

      </div>

      {/* FOOTER: SYSTEM LOGS */}
      <footer className="mt-10 border-t border-slate-900 pt-6">
        <div className="flex items-center gap-4 text-[10px] font-mono text-slate-600 uppercase tracking-widest">
          <span className="flex items-center gap-1"><CheckCircle size={10} className="text-green-500"/> System Online</span>
          <span>Database: Connected</span>
          <span>API: Sovereign v1.2</span>
        </div>
      </footer>
    </div>
  );
}
