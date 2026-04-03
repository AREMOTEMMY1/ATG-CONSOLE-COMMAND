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

  <script>
    // Generic loader
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

    // Renderers
    const renderHealth = (d) => `
      <div class="card">
        <h2>Health Status: ${d.status}</h2>
        <p>Source: ${d.source}</p>
        <p>Time: ${d.timestamp}</p>
        <h3>Services</h3>
        <ul>${Object.entries(d.services).map(([k,v]) => `<li>${k}: ${v}</li>`).join("")}</ul>
      </div>
    `;

    const renderConfig = (d) => `
      <div class="card">
        <h2>Config Version: ${d.version}</h2>
        <h3>Rules</h3><ul>${d.rules.map(r => `<li>${r}</li>`).join("")}</ul>
        <h3>Adapters</h3><ul>${d.adapters.map(a => `<li>${a}</li>`).join("")}</ul>
        <h3>Modes</h3><ul>${d.modes.map(m => `<li>${m}</li>`).join("")}</ul>
      </div>
    `;

    // Load both sections once
    loadSection("/health", "health", renderHealth);
    loadSection("/config", "config", renderConfig);
  </script>
</body>
</html>
                                
