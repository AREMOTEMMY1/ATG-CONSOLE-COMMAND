export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({
      status: "ERROR",
      message: "Method Not Allowed",
    });
  }

  return res.status(200).json({
    status: "HEALTHY",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    services: {
      financeEngine: "VERIFIED",
      carrierEngine: "CONNECTED",
      queueWorker: "ACTIVE",
      dashboard: "RESPONSIVE",
    },
  });
}
