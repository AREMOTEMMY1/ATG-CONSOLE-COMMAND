import React, { useState } from 'react';
import { Shield, Brain, Wallet, Ship, AlertTriangle, CheckCircle, Search, Cpu, Globe } from 'lucide-react';

export default function ATGHub() {
  const [financialRisk, setFinancialRisk] = useState(88477.25);
  const [searchQuery, setSearchQuery] = useState("");
  const [deepInsight, setDeepInsight] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // --- SOVEREIGN INTEL DATA BRIDGE (From CEO Email) ---
  const sovereignDatabase = {
    "maersk": "INTEL: Contract 300074142 (Maersk) is under review. Deep Search suggests switching to MSC for Lagos-Antwerp to save 12% on freight.",
    "risk": "FINANCIAL SCAN: ₦88,477.25 identified as pending Clearing Agent fees from the March 28 vessel arrival. Suggest clearing to restore credit line.",
    "antwerp": "ROUTE ANALYSIS: Antwerp port congestion is at 14%. Suggesting 3-day delay on next vessel to save ₦215,000 in demurrage costs.",
    "lagos": "LOGISTICS: Lagos Port (Apapa) showing 48-hour gate-in delay. All current drafts updated to reflect 'Priority' status."
  };

  const handleDeepSearch = (query) => {
    setSearchQuery(query);
    const lowerQuery = query.toLowerCase();
    
    if (query.length > 2) {
      setIsSearching(true);
      setTimeout(() => {
        // Triggering the specific info from CEO instructions
        const match = Object.keys(sovereignDatabase).find(key => lowerQuery.includes(key));
        setDeepInsight(match ? sovereignDatabase[match] : `SEARCHING SOVEREIGN LOGS... No external anomalies for '${query}'. System stable.`);
        setIsSearching(false);
      }, 600);
    } else {
      setDeepInsight("");
    }
  };

  return (
    <div className="min-h-screen bg-[#020408] text-slate-200 p-4 md:p-8 font-sans selection:bg-blue-500/30">
      {/* CEO COMMAND HEADER */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-slate-800/50 pb-8 gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <h1 className="text-4xl font-black tracking-tighter text-white italic">ATG HUB</h1>
          </div>
          <p className="text-slate-500 text-[10px] font-mono uppercase tracking-[0.3em]">Oscar Kilo Force Lima Yankee // Active</p>
        </div>
        
        {/* DEEP SEARCH ENGINE */}
        <div className="relative w-full md:w-[450px]">
          <div className="absolute inset-y-0 left-4 flex items-center">
            {isSearching ? <Cpu className="w-4 h-4 text-blue-500 animate-spin" /> : <Search className="w-4 h-4 text-slate-500" />}
          </div>
          <input 
            type="text"
            placeholder="DEEP SEARCH: Lagos, Maersk, Risk..."
            className="w-full bg-slate-900/50 border border-slate-800 rounded-xl py-3 pl-12 pr-4 text-sm focus:border-blue-500/50 focus:bg-slate-900 outline-none transition-all placeholder:text-slate-700 shadow-2xl"
            value={searchQuery}
            onChange={(e) => handleDeepSearch(e.target.value)}
          />
          {deepInsight && (
            <div className="absolute top-14 left-0 w-full bg-blue-600 border border-blue-400 p-4 rounded-xl text-xs text-white font-bold animate-in zoom-in-95 duration-200 z-50 shadow-[0_0_30px_rgba(37,99,235,0.3)]">
              <div className="flex items-start gap-3">
                <Brain className="w-5 h-5 shrink-0" />
                <p className="leading-relaxed italic">"{deepInsight}"</p>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* OPERATIONS SECTION */}
        <div className="group bg-slate-900/30 border border-slate-800/50 rounded-2xl p-6 hover:bg-slate-900/50 transition-all cursor-pointer">
          <div className="flex items-center justify-between mb-8">
            <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500"><Ship size={24}/></div>
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Sovereign Ops</div>
          </div>
          <h2 className="text-xl font-bold mb-4">Operations Engine</h2>
          <div className="p-4 bg-black/40 rounded-xl border border-slate-800 mb-4">
            <p className="text-[10px] text-slate-500 uppercase mb-2">Primary Carrier</p>
            <div className="flex justify-between items-end">
              <span className="text-2xl font-mono text-white tracking-tighter">MAERSK</span>
              <span className="text-[10px] text-green-500 font-bold mb-1">CONTRACT VALID</span>
            </div>
          </div>
        </div>

        {/* INTELLIGENCE SECTION */}
        <div className="group bg-slate-900/30 border border-slate-800/50 rounded-2xl p-6 hover:bg-slate-900/50 transition-all border-l-purple-500/50 border-l-2">
          <div className="flex items-center justify-between mb-8">
            <div className="p-3 bg-purple-500/10 rounded-lg text-purple-500"><Brain size={24}/></div>
            <div className="text-[10px
