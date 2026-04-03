export default function Home() {
  return (
    <div>
      <h1>ATG Console Command</h1>

      {/* Sections */}
      <div id="health">Loading health...</div>
      <div id="config">Loading config...</div>

      {/* Inline script for client-side fetch */}
      <script dangerouslySetInnerHTML={{ __html: `
        // Generic loader
        async function loadSection(endpoint, elementId, renderFn) {
          try {
            const res = await fetch(\`http://localhost:3000/\${endpoint}\`);
            if (!res.ok) throw new Error(\`Failed to load \${endpoint}\`);
            const data = await res.json();
            document.getElementById(elementId).innerHTML = renderFn(data);
          } catch (err) {
            document.getElementById(elementId).innerHTML =
              \`<p class="error">Error: \${err.message}</p>\`;
          }
        }

        // Renderers
        const renderHealth = (d) => \`
          <p>Status: \${d.status}</p>
          <p>Uptime: \${d.uptime}</p>
        \`;

        const renderConfig = (d) => \`
          <ul>
            \${Object.entries(d).map(([k,v]) => \`<li>\${k}: \${v}</li>\`).join("")}
          </ul>
        \`;

        // Load sections
        loadSection("health", "health", renderHealth);
        loadSection("config", "config", renderConfig);
      `}} />
    </div>
  );
}
