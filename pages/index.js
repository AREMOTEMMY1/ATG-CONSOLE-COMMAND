import { useEffect, useState } from "react";

export default function Home() {
  const [health, setHealth] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/health")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load health status");
        }
        return res.json();
      })
      .then((data) => {
        setHealth(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "#ffffff",
        padding: "24px",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "#0f172a",
          border: "1px solid #1e293b",
          borderRadius: "16px",
          padding: "24px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)"
        }}
      >
        <h1 style={{ marginTop: 0, marginBottom: "8px" }}>ATG GLOBAL CONTROL</h1>
        <p style={{ marginTop: 0, color: "#94a3b8" }}>
          Unified health and status dashboard
        </p>

        {error && (
          <div
            style={{
              background: "#7f1d1d",
              color: "#fecaca",
              padding: "12px",
              borderRadius: "10px",
              marginTop: "16px"
            }}
          >
            Error: {error}
          </div>
        )}

        {!health && !error && (
          <div
            style={{
              background: "#111827",
              color: "#cbd5e1",
              padding: "12px",
              borderRadius: "10px",
              marginTop: "16px"
            }}
          >
            Loading system...
          </div>
        )}

        {health && (
          <>
            <div
              style={{
                marginTop: "20px",
                padding: "16px",
                borderRadius: "12px",
                background: "#111827",
                border: "1px solid #1f2937"
              }}
            >
              <h2 style={{ marginTop: 0 }}>System Status: {health.status}</h2>
              <p><strong>Service:</strong> {health.service}</p>
              <p><strong>Timestamp:</strong> {health.timestamp}</p>
            </div>

            <div
              style={{
                marginTop: "20px",
                padding: "16px",
                borderRadius: "12px",
                background: "#111827",
                border: "1px solid #1f2937"
              }}
            >
              <h3 style={{ marginTop: 0 }}>Modules</h3>
              <ul style={{ lineHeight: "1.9", paddingLeft: "20px" }}>
                <li><strong>API:</strong> {health.modules.api}</li>
                <li><strong>Tracking:</strong> {health.modules.tracking}</li>
                <li><strong>Finance:</strong> {health.modules.finance}</li>
                <li><strong>Database:</strong> {health.modules.database}</li>
              </ul>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
