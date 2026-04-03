export default function handler(req, res) {
  res.status(200).json({
    status: "ATG SYSTEM LIVE",
    timestamp: new Date(),
    modules: {
      tracking: "ACTIVE",
      finance: "READY",
      carrier: "CONNECTED"
    }
  });
}
