export default function Home() {
  return (
    <main style={{
      background: "#020617",
      color: "white",
      minHeight: "100vh",
      padding: "40px",
      fontFamily: "Arial"
    }}>
      <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>
        ATG GLOBAL CONTROL
      </h1>

      <p style={{ marginTop: "20px" }}>
        Contract 300074142 ACTIVE
      </p>

      <p>
        Financial Risk: ₦88,477.25
      </p>

      <button style={{
        marginTop: "20px",
        padding: "12px 20px",
        background: "red",
        border: "none",
        color: "white",
        borderRadius: "6px"
      }}>
        CLEAR INVOICES
      </button>
    </main>
  );
}
