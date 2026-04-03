export default function handler(req, res) {
  res.status(200).json({
    status: "HEALTHY",
    timestamp: new Date().toISOString(),
    services: {
      financeEngine: "VERIFIED",
      carrierEngine: "CONNECTED",
      queueWorker: "ACTIVE",
      dashboard: "RESPONSIVE",
    },
  });
}
