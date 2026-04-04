export default function Home() {
  // Static data so we bypass the 404 API error for now
  const data = {
    treasury: { bybit: 12500, binance: 8400, reserve: 5000 },
    risk: { outstandingNGN: 88477.25 },
    logistics: { activeBL: 5, contract: "300074142" }
  };

  return (
    <main style={{ background: "#020617", color: "white", minHeight: "100vh", padding: "20px", fontFamily: "monospace" }}>
      <h1 style={{ color: "#38bdf8", borderBottom: "1px solid #1e293b", paddingBottom: "10px" }}>ATG GLOBAL CONTROL v1.0</h1>
      
      <div style={{ marginTop: "20px", padding: "15px", background: "#0f172a", borderRadius: "10px", border: "1px solid #334155" }}>
        <h3 style={{ color: "#4ade80", margin: "0 0 10px 0" }}>💰 TREASURY (ENGINE B)</h3>
        <p>BYBIT ATGHUB: <span style={{ color: "#f8fafc" }}>${data.treasury.bybit.toLocaleString()}</span></p>
        <p>BINANCE: <span style={{ color: "#f8fafc" }}>${data.treasury.binance.toLocaleString()}</span></p>
        <p>RESERVE: <span style={{ color: "#f8fafc" }}>${data.treasury.reserve.toLocaleString()}</span></p>
      </div>

      <div style={{ marginTop: "20px", padding: "15px", background: "#0f172a", borderRadius: "10px", border: "1px solid #334155" }}>
        <h3 style={{ color: "#fbbf24", margin: "0 0 10px 0" }}>📦 LOGISTICS (ENGINE A)</h3>
        <p>ACTIVE CONTRACT: <span style={{ color: "#f8fafc" }}>{data.logistics.contract}</span></p>
        <p>TRACKED BLs: <span style={{ color: "#f8fafc" }}>{data.logistics.activeBL} Active</span></p>
      </div>

      <div style={{ marginTop: "20px", padding: "15px", background: "#450a0a", borderRadius: "10px", border: "1px solid #f87171" }}>
        <h3 style={{ color: "#f87171", margin: "0 0 10px 0" }}>⚠️ RISK MANAGEMENT</h3>
        <p>OUTSTANDING: ₦{data.risk.outstandingNGN.toLocaleString()}</p>
        <button style={{ background: "#ef4444", color: "white", border: "none", padding: "12px", width: "100%", borderRadius: "5px", fontWeight: "bold", marginTop: "10px" }}>
          CLEAR INVOICES
        </button>
      </div>

      <footer style={{ marginTop: "40px", fontSize: "10px", color: "#475569", textAlign: "center" }}>
        ATG EMPIRE OS | CEO: ANIFOWOSE ABDULQUDRI TEMIDIRE
      </footer>
    </main>
  );
      }
