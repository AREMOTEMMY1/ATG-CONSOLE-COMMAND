<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>ATG GLOBAL CONTROL</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #002617;
      color: #fff;
      margin: 0;
      padding: 24px;
    }
    h1 { color: #00ff99; }
    .error { color: red; }
    .card {
      background: #013322;
      padding: 16px;
      border-radius: 8px;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <h1>ATG GLOBAL CONTROL</h1>
  <div id="health">Loading health...</div>
  <div id="config">Loading config...</div>
  <div id="shipments">Loading shipments...</div>
  <div id="finance">Loading finance risk...</div>

  <script>
    async function loadSection(endpoint, elementId, renderFn) {
      try {
        const res = await fetch(`http://localhost:3000${endpoint}`);
        if (!res.ok) throw new Error(`Failed to load ${endpoint}`);
        const data = await res.json();
        document.getElementById(elementId).innerHTML = renderFn(data);
      } catch (err) {
        document.getElementById(elementId).innerHTML =
          `<p class="error">Error: ${err.message}</p>`;
      }
    }

    // Render functions
    const renderHealth = (data) => `
      <div class="card">
        <h2>Status: ${data.status}</h2>
        <p>Source: ${data.source}</p>
        <p>Time: ${data.timestamp}</p>
        <h3>Services</h3>
        <ul>
          ${Object.entries(data.services).map(([k,v]) => `<li>${k}: ${v}</li>`).join("")}
        </ul>
      </div>
    `;

    const renderConfig = (data) => `
      <div class="card">
        <h2>Config Version: ${data.version}</h2>
        <p>Source: ${data.source}</p>
        <p>Time: ${data.timestamp}</p>
        <h3>Rules</h3>
        <ul>${data.rules.map(r => `<li>${r}</li>`).join("")}</ul>
        <h3>Adapters</h3>
        <ul>${data.adapters.map(a => `<li>${a}</li>`).join("")}</ul>
        <h3>Modes</h3>
        <ul>${data.modes.map(m => `<li>${m}</li>`).join("")}</ul>
      </div>
    `;

    const renderShipments = (list) => `
      <div class="card">
        <h2>Shipments</h2>
        <ul>
          ${list.map(s => `
            <li>
              Ref: ${s.atgRef}, Carrier: ${s.carrier}, Status: ${s.status}
            </li>`).join("")}
        </ul>
      </div>
    `;

    const renderFinance = (data) => `
      <div class="card">
        <h2>Finance Risk</h2>
        <p>Status: ${data.status}</p>
        <p>Source: ${data.source}</p>
        <p>Time: ${data.timestamp}</p>
        <h3>Ledger</h3>
        <ul>
          <li>Pending: ${data.ledger.pending}</li>
          <li>Verified: ${data.ledger.verified}</li>
          <li>Committed: ${data.ledger.committed}</li>
          <li>Settled: ${data.ledger.settled}</li>
          <li>At Risk: ${data.ledger.atRisk}</li>
          <li>Blocked: ${data.ledger.blocked}</li>
        </ul>
      </div>
    `;

    // Load all sections once
    loadSection("/health", "health", renderHealth);
    loadSection("/config", "config", renderConfig);
    loadSection("/shipments", "shipments", renderShipments);
    loadSection("/finance-risk", "finance", renderFinance);
  </script>
</body>
</html>
            
