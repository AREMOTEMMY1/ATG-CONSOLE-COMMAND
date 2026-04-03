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
    h1 {
      color: #00ff99;
    }
    .error {
      color: red;
    }
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
    async function loadHealth() {
      try {
        const res = await fetch("http://localhost:3000/health");
        if (!res.ok) throw new Error("Failed to load health");
        const data = await res.json();
        document.getElementById("health").innerHTML = `
          <div class="card">
            <h2>Status: ${data.status}</h2>
            <p>Source: ${data.source}</p>
            <p>Time: ${data.timestamp}</p>
            <h3>Services</h3>
            <ul>
              ${Object.entries(data.services)
                .map(([k,v]) => `<li>${k}: ${v}</li>`)
                .join("")}
            </ul>
          </div>
        `;
      } catch (err) {
        document.getElementById("health").innerHTML =
          "<p class='error'>Error: " + err.message + "</p>";
      }
    }

    async function loadConfig() {
      try {
        const res = await fetch("http://localhost:3000/config");
        if (!res.ok) throw new Error("Failed to load config");
        const data = await res.json();
        document.getElementById("config").innerHTML = `
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
      } catch (err) {
        document.getElementById("config").innerHTML =
          "<p class='error'>Error: " + err.message + "</p>";
      }
    }

    // Load both sections once
    loadHealth();
    loadConfig();
  </script>
</body>
</html>
