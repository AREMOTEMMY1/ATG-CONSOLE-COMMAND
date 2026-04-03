export default function handler(req, res) {
  res.status(200).json({
    status: "HEALTHY",
    service: "ATG OS",
    timestamp: new Date().toISOString(),
    modules: {
      api: "ONLINE",
      tracking: "READY",
      finance: "READY",
      database: "NOT_CONNECTED"
    }
  });
}
