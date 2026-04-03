import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/health")
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>ATG GLOBAL CONTROL</h1>
      <p>System Status:</p>

      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading system...</p>
      )}
    </div>
  );
        }
