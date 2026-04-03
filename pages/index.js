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
  <div id="output">Loading system...</div>

  <script>
    async function loadHealth() {
      try {
        const res = await fetch("http://localhost:3000/health");
        if (!res.ok) throw new Error("Failed to load system");
        const data = await res.json();

        document.getElementById("output").innerHTML = `
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
        document.getElementById("output").innerHTML =
          "<p class='error'>Error: " + err.message + "</p>";
      }
    }

    loadHealth();
  </script>
</body>
</html>
    
