import { useEffect, useState } from "react";

export default function Home() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    fetch("/api/health")
      .then(res => res.json())
      .then(data => setStatus(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>ATG GLOBAL CONTROL</h1>

      {status ? (
        <div>
          <h3>System Status:</h3>
          <pre>{JSON.stringify(status, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading system...</p>
      )}
    </div>
  );
}
