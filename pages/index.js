import { useEffect, useState } from "react";

export default function Home() {
  const [health, setHealth] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/health")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load system");
        }
        return res.json();
      })
      .then((data) => setHealth(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <main style={{
      minHeight: "100vh",
      background: "#020617",
      color: "#fff",
      padding: "24px"
    }}>
      <h1>ATG GLOBAL CONTROL</h1>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {!health && !error && <p>Loading system...</p>}

      {health && (
        <div>
          <h2>Status: {health.status}</h2>
          <p>Service: {health.service}</p>
          <p>Time: {health.timestamp}</p>

          <h3>Modules</h3>
          <ul>
            <li>API: {health
