import { useEffect, useState } from "react";

export default function Home() {
  const [statusData, setStatusData] = useState(null);
  const [configData, setConfigData] = useState(null);
  const [statusError, setStatusError] = useState("");
  const [configError, setConfigError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const statusRes = await fetch("/api/status");
        if (!statusRes.ok) {
          throw new Error(`Status request failed: ${statusRes.status}`);
        }
        const statusJson = await statusRes.json();
        setStatusData(statusJson);
      } catch (err) {
        setStatusError(err.message || "Failed to load status");
      }

      try {
        const configRes = await fetch("/api/config");
        if (!configRes.ok) {
          throw new Error(`Config request failed: ${configRes.status}`);
        }
        const configJson = await configRes.json();
        setConfigData(configJson);
      } catch (err) {
        setConfigError(err.message || "Failed to load config");
      }
    };

    loadData();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0b1020",
        color: "#ffffff",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
          ATG Console Command
        </h1>
        <p style={{ color: "#b8c1ec", marginBottom: "30px" }}>
          Live system dashboard
        </p>

        <div
          style={{
            display: "grid",
            gap: "20px",
          }}
        >
          <section
            style={{
              background: "#141b34",
              padding: "20px",
              borderRadius: "12px",
              border: "1px solid #243056",
            }}
          >
            <h2 style={{ marginTop: 0 }}>System Status</h2>

            {statusError ? (
              <p style={{ color: "#ff6b6b" }}>{statusError}</p>
            ) : !statusData ? (
              <p>Loading status...</p>
            ) : (
              <div>
                <p>
                  <strong>Status:</strong> {statusData.status || "N/A"}
                </p>
                <p>
                  <strong>Timestamp:</strong> {statusData.timestamp || "N/A"}
                </p>

                {statusData.services && (
                  <div style={{ marginTop: "15px" }}>
                    <strong>Services:</strong>
                    <ul>
                      {Object.entries(statusData.services).map(([key, value]) => (
                        <li key={key}>
                          {key}: {String(value)}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </section>

          <section
            style={{
              background: "#141b34",
              padding: "20px",
              borderRadius: "12px",
              border: "1px solid #243056",
            }}
          >
            <h2 style={{ marginTop: 0 }}>System Config</h2>

            {configError ? (
              <p style={{ color: "#ff6b6b" }}>{configError}</p>
            ) : !configData ? (
              <p>Loading config...</p>
            ) : (
              <ul>
                {Object.entries(configData).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong>{" "}
                    {typeof value === "object"
                      ? JSON.stringify(value)
                      : String(value)}
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>
    </div>
  );
      }
