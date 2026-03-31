import React, { useState } from "react";

export default function App() {
  const [syncing, setSyncing] = useState(false);

  const shipments = [
    { bl: "265401591", route: "Apapa → Haifa", status: "IN TRANSIT" },
    { bl: "265396574", route: "Apapa → Beirut", status: "IN TRANSIT" },
    { bl: "265396660", route: "Apapa → Beirut", status: "IN TRANSIT" },
  ];

  const handleSync = () => {
    setSyncing(true);
    setTimeout(() => setSyncing(false), 1500);
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.header}>
          <div>
            <div style={styles.title}>ATG GLOBAL CONTROL</div>
            <div style={styles.subtitle}>Operations Core v2.5</div>
          </div>
          <button style={styles.syncButton} onClick={handleSync}>
            {syncing ? "SYNCING..." : "SYNC MAERSK HUB"}
          </button>
        </div>

        <div style={styles.alertBox}>
          <div style={styles.alertTitle}>CONTRACT FINANCIAL RISK DETECTED</div>
          <div style={styles.alertText}>
            Contract 300074142 has ₦88,477.25 in overdue invoices.
          </div>
          <button style={styles.alertButton}>CLEAR INVOICES NOW</button>
        </div>

        <div style={styles.grid}>
          <div style={styles.card}>
            <div style={styles.cardLabel}>CONTRACT STATUS</div>
            <div style={styles.cardValue}>ACTIVE</div>
            <div style={styles.cardSub}>ID: 300074142</div>
          </div>

          <div style={styles.card}>
            <div style={styles.cardLabel}>ACTIVE ROUTES</div>
            <div style={styles.cardValue}>2</div>
            <div style={styles.cardSub}>Apapa → Beirut / Haifa</div>
          </div>

          <div style={styles.card}>
            <div style={styles.cardLabel}>TRACKED BLs</div>
            <div style={styles.cardValue}>3</div>
            <div style={styles.cardSub}>Live contract-linked shipments</div>
          </div>

          <div style={styles.card}>
            <div style={styles.cardLabel}>FINANCIAL EXPOSURE</div>
            <div style={styles.cardValue}>₦88K</div>
            <div style={styles.redText}>Overdue invoices</div>
          </div>
        </div>

        <div style={styles.sectionTitle}>LIVE SHIPMENTS</div>

        <div style={styles.shipmentList}>
          {shipments.map((item) => (
            <div key={item.bl} style={styles.shipmentCard}>
              <div style={styles.shipmentLabel}>BL NUMBER</div>
              <div style={styles.shipmentValue}>{item.bl}</div>

              <div style={styles.shipmentLabel}>ROUTE</div>
              <div style={styles.shipmentText}>{item.route}</div>

              <div style={styles.shipmentLabel}>STATUS</div>
              <div style={styles.statusBadge}>{item.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #020617 0%, #0f172a 100%)",
    color: "#ffffff",
    fontFamily: "Arial, sans-serif",
    padding: "16px",
  },
  container: {
    maxWidth: "720px",
    margin: "0 auto",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "700",
    lineHeight: 1.1,
  },
  subtitle: {
    fontSize: "13px",
    color: "#94a3b8",
    marginTop: "4px",
    letterSpacing: "1px",
  },
  syncButton: {
    background: "#1e293b",
    color: "#fff",
    border: "1px solid #334155",
    borderRadius: "14px",
    padding: "14px 16px",
    fontWeight: "700",
    fontSize: "14px",
    cursor: "pointer",
  },
  alertBox: {
    background: "linear-gradient(135deg, rgba(127,29,29,0.9), rgba(159,18,57,0.85))",
    border: "1px solid rgba(251,113,133,0.35)",
    borderRadius: "20px",
    padding: "18px",
    marginBottom: "20px",
  },
  alertTitle: {
    color: "#fda4af",
    fontWeight: "700",
    fontSize: "18px",
    marginBottom: "8px",
  },
  alertText: {
    color: "#fecdd3",
    fontSize: "14px",
    marginBottom: "14px",
    lineHeight: 1.5,
  },
  alertButton: {
    width: "100%",
    background: "#e11d48",
    color: "#fff",
    border: "none",
    borderRadius: "14px",
    padding: "14px",
    fontWeight: "700",
    fontSize: "15px",
    cursor: "pointer",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "14px",
    marginBottom: "22px",
  },
  card: {
    background: "#0f172a",
    border: "1px solid #1e293b",
    borderRadius: "20px",
    padding: "18px",
  },
  cardLabel: {
    fontSize: "12px",
    color: "#94a3b8",
    letterSpacing: "0.8px",
    marginBottom: "8px",
  },
  cardValue: {
    fontSize: "32px",
    fontWeight: "700",
    lineHeight: 1.1,
    marginBottom: "6px",
  },
  cardSub: {
    fontSize: "13px",
    color: "#94a3b8",
  },
  redText: {
    fontSize: "13px",
    color: "#fb7185",
  },
  sectionTitle: {
    fontSize: "18px",
    fontWeight: "700",
    marginBottom: "12px",
  },
  shipmentList: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  shipmentCard: {
    background: "#0f172a",
    border: "1px solid #1e293b",
    borderRadius: "18px",
    padding: "16px",
  },
  shipmentLabel: {
    fontSize: "11px",
    color: "#94a3b8",
    marginBottom: "4px",
    marginTop: "8px",
    letterSpacing: "0.8px",
  },
  shipmentValue: {
    fontSize: "18px",
    fontWeight: "700",
  },
  shipmentText: {
    fontSize: "14px",
    color: "#e2e8f0",
  },
  statusBadge: {
    display: "inline-block",
    marginTop: "4px",
    background: "rgba(59,130,246,0.18)",
    color: "#93c5fd",
    border: "1px solid rgba(96,165,250,0.35)",
    borderRadius: "999px",
    padding: "6px 10px",
    fontSize: "12px",
    fontWeight: "700",
  },
};
