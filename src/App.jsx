<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ATG EMPIRE OS v∞ | Infinite World Engine</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    
    <style>
        .chart-container { position: relative; width: 100%; max-width: 400px; margin: 0 auto; height: 300px; }
        .void-bg { background: radial-gradient(circle at center, #0f172a 0%, #020617 100%); }
        .pulse-gold { animation: gold-pulse 2s infinite; }
        @keyframes gold-pulse { 0% { box-shadow: 0 0 0 0 rgba(217, 119, 6, 0.4); } 70% { box-shadow: 0 0 0 12px rgba(217, 119, 6, 0); } 100% { box-shadow: 0 0 0 0 rgba(217, 119, 6, 0); } }
        .infinite-spin { animation: spin 20s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        body { background-color: #020617; color: #f8fafc; font-family: 'Inter', sans-serif; overflow-x: hidden; }
        .glass { background: rgba(15, 23, 42, 0.8); backdrop-filter: blur(8px); border: 1px solid rgba(51, 65, 85, 0.5); }
        .ticker { display: inline-block; animation: ticker-scroll 40s linear infinite; }
        @keyframes ticker-scroll { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }
    </style>
</head>
<body class="p-4 md:p-8 min-h-screen flex flex-col">

    <header class="w-full mb-8">
        <div class="glass p-6 rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-6 border-b-4 border-amber-600">
            <div class="flex items-center gap-6">
                <div class="w-20 h-20 bg-stone-950 rounded-[2rem] flex items-center justify-center text-amber-500 font-black text-4xl shadow-2xl pulse-gold border border-amber-600/30">∞</div>
                <div>
                    <h1 class="text-3xl font-black tracking-tighter uppercase italic">ATG Empire OS <span class="text-amber-500">v∞</span></h1>
                    <p class="text-[10px] font-bold text-slate-500 uppercase tracking-[0.5em] mt-1">The Infinite World Engine</p>
                    <div class="flex items-center gap-2 mt-2">
                        <span class="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
                        <p class="text-[10px] font-black text-emerald-500 uppercase">Universal Handshake: ACTIVE</p>
                    </div>
                </div>
            </div>
            <div class="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-right min-w-[320px]">
                <span class="block text-[8px] font-black text-slate-500 uppercase mb-1 tracking-widest">Sovereign Identity Key</span>
                <span class="block text-sm font-mono text-amber-500 font-bold italic">aremotemmygroup@gmail.com</span>
                <p class="text-[9px] text-emerald-500 mt-2 font-black uppercase">>> UNLIMITED OPERATING MODE ENABLED</p>
            </div>
        </div>
    </header>

    <div class="w-full bg-slate-900/50 py-3 mb-8 overflow-hidden border-y border-slate-800">
        <div class="ticker whitespace-nowrap font-mono text-[10px] text-slate-400 uppercase tracking-widest">
            >> INFINITE_LOOP: RUNNING // MAERSK_SYNC: 100% // MSC_EDI: LINKED // BEIRUT_STRIKE: PHYSICAL_CONFIRMED // LEKKI_GATE_AUTH: GRANTED // 500MT_LITHIUM: AIR_AWB_GENERATED // TRUTH_PULSE: LOGGED <<
        </div>
    </div>

    <main class="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-grow">
        
        <div class="lg:col-span-4 glass p-8 rounded-[3rem] space-y-10">
            <h2 class="text-xl font-black text-white uppercase italic border-l-4 border-amber-500 pl-4">The Loop Heartbeat</h2>
            
            <div class="space-y-6">
                <div class="flex items-center gap-4 group">
                    <div class="w-10 h-10 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-amber-500 transition-all">🚢</div>
                    <div class="flex-grow">
                        <h4 class="text-[10px] font-black text-slate-400 uppercase">Sea → Ports</h4>
                        <p class="text-xs font-bold text-white">EDI Auto-Booking active.</p>
                    </div>
                </div>
                <div class="flex items-center gap-4 group">
                    <div class="w-10 h-10 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-amber-500 transition-all">🚛</div>
                    <div class="flex-grow">
                        <h4 class="text-[10px] font-black text-slate-400 uppercase">Ports → Land</h4>
                        <p class="text-xs font-bold text-white">Gate-Out Schedules Synced.</p>
                    </div>
                </div>
                <div class="flex items-center gap-4 group">
                    <div class="w-10 h-10 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-amber-500 transition-all">✈️</div>
                    <div class="flex-grow">
                        <h4 class="text-[10px] font-black text-slate-400 uppercase">Land → Air</h4>
                        <p class="text-xs font-bold text-white">AWB Tracking + Customs Live.</p>
                    </div>
                </div>
                <div class="flex items-center gap-4 group">
                    <div class="w-10 h-10 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-amber-500 transition-all">📑</div>
                    <div class="flex-grow">
                        <h4 class="text-[10px] font-black text-slate-400 uppercase">Document Hub</h4>
                        <p class="text-xs font-bold text-white">100% Digital Archive.</p>
                    </div>
                </div>
                <div class="flex items-center gap-4 group">
                    <div class="w-10 h-10 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-amber-500 transition-all">💬</div>
                    <div class="flex-grow">
                        <h4 class="text-[10px] font-black text-slate-400 uppercase">Comm Node</h4>
                        <p class="text-xs font-bold text-white">Truth Pulse Logging.</p>
                    </div>
                </div>
            </div>

            <div class="pt-8 border-t border-slate-800">
                <p class="text-[10px] text-slate-500 italic leading-relaxed">
                    The cycle never breaks. It is the heartbeat of ATG Empire OS v∞. Everything feeds everything. Nothing waits.
                </p>
            </div>
        </div>

        <div class="lg:col-span-8 space-y-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="glass p-8 rounded-[3rem]">
                    <h3 class="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">Carrier API Strength (12 Major Lines)</h3>
                    <div class="chart-container">
                        <canvas id="radarChart"></canvas>
                    </div>
                </div>

                <div class="glass p-8 rounded-[3rem] overflow-hidden">
                    <h3 class="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">Physical Strike Evidence</h3>
                    <div class="space-y-4 max-h-64 overflow-y-auto pr-2 scrollbar-hide">
                        <div class="p-4 bg-slate-950 rounded-2xl border-l-4 border-emerald-500">
                            <p class="text-[10px] font-bold text-slate-500">CAAU9380071</p>
                            <p class="text-xs font-black text-white">STAGED @ APAPA (BEIRUT TARGET)</p>
                        </div>
                        <div class="p-4 bg-slate-950 rounded-2xl border-l-4 border-emerald-500">
                            <p class="text-[10px] font-bold text-slate-500">MSKU1685810</p>
                            <p class="text-xs font-black text-white">STAGED @ APAPA (BEIRUT TARGET)</p>
                        </div>
                        <div class="p-4 bg-slate-950 rounded-2xl border-l-4 border-sky-500">
                            <p class="text-[10px] font-bold text-slate-500">MRSU6301190</p>
                            <p class="text-xs font-black text-white">LOADED @ LEKKI (HAFIA BLOCK)</p>
                        </div>
                        <div class="p-4 bg-slate-950 rounded-2xl border-l-4 border-amber-500">
                            <p class="text-[10px] font-bold text-slate-500">LITHIUM_500MT</p>
                            <p class="text-xs font-black text-white">E-FREIGHT CLEARANCE: PUSHED</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="glass p-8 rounded-[3rem] border border-amber-500/20">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="text-sm font-black text-amber-500 uppercase tracking-widest">v∞ Decision Intelligence</h3>
                    <span class="text-[8px] bg-amber-500 text-slate-950 px-2 py-1 rounded font-black">AUTONOMOUS</span>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                        <p class="text-[10px] font-black text-emerald-500 uppercase">APPROVE</p>
                        <p class="text-[11px] text-slate-400 mt-1 italic">Rate ≤ Contract. Space guaranteed instantly across 12 carriers.</p>
                    </div>
                    <div class="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                        <p class="text-[10px] font-black text-amber-500 uppercase">NEGOTIATE</p>
                        <p class="text-[11px] text-slate-400 mt-1 italic">Rate > Threshold. Triggering EDI strike for volume discount.</p>
                    </div>
                    <div class="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                        <p class="text-[10px] font-black text-sky-500 uppercase">REROUTE</p>
                        <p class="text-[11px] text-slate-400 mt-1 italic">Congestion > 48h. Force POD override to Beirut Strike Node.</p>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <footer class="mt-8 text-center p-8 border-t border-slate-900">
        <p class="text-[10px] font-mono text-slate-600 tracking-[0.6em] uppercase">
            ATG Empire OS v∞ // One World // One System // Unlimited Operating Reality
        </p>
    </footer>

    <script>
        function initRadar() {
            const ctx = document.getElementById('radarChart').getContext('2d');
            new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: ['Maersk', 'MSC', 'CMA CGM', 'Hapag-L', 'Evergreen', 'COSCO', 'ONE', 'Yang Ming', 'ZIM', 'PIL', 'HMM', 'Wan Hai'],
                    datasets: [{
                        label: 'Sync Strength',
                        data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
                        backgroundColor: 'rgba(217, 119, 6, 0.1)',
                        borderColor: '#d97706',
                        borderWidth: 2,
                        pointRadius: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        r: {
                            beginAtZero: true,
                            max: 100,
                            ticks: { display: false },
                            grid: { color: '#1e293b' },
                            angleLines: { color: '#1e293b' },
                            pointLabels: { color: '#64748b', font: { size: 8, weight: 'bold' } }
                        }
                    },
                    plugins: {
                        legend: { display: false }
                    }
                }
            });
        }
        window.onload = initRadar;
    </script>
</body>
</html>
