export default function Home() {
  return (
    <div style={{ padding: 40, color: "white", background: "#0b0f1a", minHeight: "100vh" }}>
      <h1>ATG EMPIRE OS</h1>
      <p>System Fully Live</p>

      <button
        onClick={async () => {
          const res = await fetch("/api/track", {
            method: "POST",
            body: JSON.stringify({
              bl: [
                "265396574",
                "266448268",
                "265396660",
                "265589588",
                "265401591"
              ]
            })
          });

          const data = await res.json();
          alert(JSON.stringify(data, null, 2));
        }}
        style={{
          padding: "12px 20px",
          background: "green",
          border: "none",
          color: "white",
          cursor: "pointer"
        }}
      >
        TRACK SHIPMENT
      </button>
    </div>
  );
}
