import React, { useState, useEffect } from "react";
import "./index.css";

// Icons as simple SVG components
const BrainIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>
    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/>
    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/>
    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/>
    <path d="M3.477 10.896a4 4 0 0 1 .585-.396"/>
    <path d="M19.938 10.5a4 4 0 0 1 .585.396"/>
    <path d="M6 18a4 4 0 0 1-1.967-.516"/>
    <path d="M19.967 17.484A4 4 0 0 1 18 18"/>
  </svg>
);

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const WalletIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/>
    <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>
  </svg>
);

const ContainerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"/>
    <path d="M6 18h12"/>
    <path d="M6 14h12"/>
    <rect width="12" height="12" x="6" y="10"/>
  </svg>
);

const ChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v16a2 2 0 0 0 2 2h16"/>
    <path d="m19 9-5 5-4-4-3 3"/>
  </svg>
);

const TerminalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5"/>
    <line x1="12" x2="20" y1="19" y2="19"/>
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const ShipIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
    <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"/>
    <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/>
    <path d="M12 10v4"/>
    <path d="M12 2v3"/>
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18"/>
    <path d="m6 6 12 12"/>
  </svg>
);

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/>
    <path d="M12 5v14"/>
  </svg>
);

const DollarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" x2="12" y1="2" y2="22"/>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);

// Carrier data for the 12-carrier grid
const CARRIERS = [
  { name: "Maersk", code: "MAEU", rate: 245, available: true },
  { name: "MSC", code: "MSCU", rate: 250, available: true },
  { name: "CMA CGM", code: "CMDU", rate: 255, available: true },
  { name: "COSCO", code: "COSU", rate: 248, available: true },
  { name: "Hapag-Lloyd", code: "HLCU", rate: 260, available: false },
  { name: "ONE", code: "ONEY", rate: 252, available: true },
  { name: "Evergreen", code: "EGLV", rate: 247, available: true },
  { name: "Yang Ming", code: "YMLU", rate: 243, available: true },
  { name: "HMM", code: "HDMU", rate: 251, available: false },
  { name: "ZIM", code: "ZIMU", rate: 249, available: true },
  { name: "PIL", code: "PCIU", rate: 240, available: true },
  { name: "Wan Hai", code: "WHLC", rate: 238, available: true },
];

// Active jobs/containers
const ACTIVE_JOBS = [
  {
    id: "JOB-2026-001",
    container: "HASU4240916",
    origin: "Beirut, Lebanon",
    destination: "Lagos, Nigeria",
    status: "Vessel Ready",
    carrier: "Maersk",
    rate: 250,
    clientRate: 1400,
    margin: 1150,
    eta: "Apr 15, 2026",
    client: "Malaysia Proforma",
  },
];

// Status Card Component
function StatusCard({ title, icon: Icon, status, statusClass, children }) {
  return (
    <div
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              background: "var(--muted)",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--primary)",
            }}
          >
            <Icon />
          </div>
          <span style={{ fontWeight: 600, fontSize: "14px" }}>{title}</span>
        </div>
        <span className={`status-live ${statusClass}`} style={{ fontSize: "12px", color: "var(--primary)", fontWeight: 500 }}>
          {status}
        </span>
      </div>
      {children}
    </div>
  );
}

// Command Button Component
function CommandButton({ children, variant = "default", onClick, disabled }) {
  const styles = {
    default: {
      background: "var(--muted)",
      color: "var(--foreground)",
      border: "1px solid var(--border)",
    },
    primary: {
      background: "var(--primary)",
      color: "var(--primary-foreground)",
      border: "none",
    },
    accent: {
      background: "var(--accent)",
      color: "var(--accent-foreground)",
      border: "none",
    },
    warning: {
      background: "var(--warning)",
      color: "#000",
      border: "none",
    },
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...styles[variant],
        padding: "12px 20px",
        borderRadius: "var(--radius)",
        fontWeight: 600,
        fontSize: "13px",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        display: "flex",
        alignItems: "center",
        gap: "8px",
        transition: "all 0.2s ease",
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      {children}
    </button>
  );
}

// Modal Component
function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "20px",
      }}
      onClick={onClose}
    >
      <div
        className="animate-fade-in"
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: "12px",
          width: "100%",
          maxWidth: "500px",
          maxHeight: "90vh",
          overflow: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <h3 style={{ fontSize: "16px", fontWeight: 600 }}>{title}</h3>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              color: "var(--muted-foreground)",
              cursor: "pointer",
              padding: "4px",
            }}
          >
            <CloseIcon />
          </button>
        </div>
        <div style={{ padding: "20px" }}>{children}</div>
      </div>
    </div>
  );
}

// Track All Modal Content
function TrackAllContent({ jobs }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {jobs.map((job) => (
        <div
          key={job.id}
          style={{
            background: "var(--muted)",
            borderRadius: "8px",
            padding: "16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
            <span className="font-mono" style={{ fontSize: "14px", fontWeight: 600, color: "var(--primary)" }}>
              {job.container}
            </span>
            <span
              style={{
                background: "var(--warning)",
                color: "#000",
                padding: "4px 8px",
                borderRadius: "4px",
                fontSize: "11px",
                fontWeight: 600,
              }}
            >
              {job.status}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--muted-foreground)" }}>
              <MapPinIcon />
              <span>{job.origin}</span>
              <span style={{ color: "var(--border)" }}>→</span>
              <span>{job.destination}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--muted-foreground)" }}>
              <ShipIcon />
              <span>{job.carrier}</span>
              <span style={{ color: "var(--border)" }}>|</span>
              <span>ETA: {job.eta}</span>
            </div>
          </div>
        </div>
      ))}
      {jobs.length === 0 && (
        <p style={{ textAlign: "center", color: "var(--muted-foreground)", padding: "20px" }}>
          No active shipments to track
        </p>
      )}
    </div>
  );
}

// Load New Job Modal Content
function LoadNewJobContent({ onSubmit, carriers }) {
  const [formData, setFormData] = useState({
    container: "",
    destination: "",
    client: "",
    carrier: "",
    clientRate: "",
  });

  const selectedCarrier = carriers.find((c) => c.code === formData.carrier);
  const margin = formData.clientRate && selectedCarrier 
    ? parseFloat(formData.clientRate) - selectedCarrier.rate 
    : 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.container && formData.destination && formData.carrier && formData.clientRate) {
      onSubmit({
        ...formData,
        rate: selectedCarrier?.rate || 250,
        margin,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div>
        <label style={{ display: "block", fontSize: "12px", color: "var(--muted-foreground)", marginBottom: "6px" }}>
          Container Number
        </label>
        <input
          type="text"
          placeholder="XXXX0000000"
          value={formData.container}
          onChange={(e) => setFormData({ ...formData, container: e.target.value.toUpperCase() })}
          style={{
            width: "100%",
            padding: "12px",
            background: "var(--muted)",
            border: "1px solid var(--border)",
            borderRadius: "6px",
            color: "var(--foreground)",
            fontSize: "14px",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        />
      </div>
      <div>
        <label style={{ display: "block", fontSize: "12px", color: "var(--muted-foreground)", marginBottom: "6px" }}>
          Destination
        </label>
        <input
          type="text"
          placeholder="Lagos, Nigeria"
          value={formData.destination}
          onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
          style={{
            width: "100%",
            padding: "12px",
            background: "var(--muted)",
            border: "1px solid var(--border)",
            borderRadius: "6px",
            color: "var(--foreground)",
            fontSize: "14px",
          }}
        />
      </div>
      <div>
        <label style={{ display: "block", fontSize: "12px", color: "var(--muted-foreground)", marginBottom: "6px" }}>
          Client Name
        </label>
        <input
          type="text"
          placeholder="Client Name"
          value={formData.client}
          onChange={(e) => setFormData({ ...formData, client: e.target.value })}
          style={{
            width: "100%",
            padding: "12px",
            background: "var(--muted)",
            border: "1px solid var(--border)",
            borderRadius: "6px",
            color: "var(--foreground)",
            fontSize: "14px",
          }}
        />
      </div>
      <div>
        <label style={{ display: "block", fontSize: "12px", color: "var(--muted-foreground)", marginBottom: "6px" }}>
          Select Carrier (Best Rate: $250 anchor)
        </label>
        <select
          value={formData.carrier}
          onChange={(e) => setFormData({ ...formData, carrier: e.target.value })}
          style={{
            width: "100%",
            padding: "12px",
            background: "var(--muted)",
            border: "1px solid var(--border)",
            borderRadius: "6px",
            color: "var(--foreground)",
            fontSize: "14px",
          }}
        >
          <option value="">Select a carrier...</option>
          {carriers
            .filter((c) => c.available)
            .map((carrier) => (
              <option key={carrier.code} value={carrier.code}>
                {carrier.name} ({carrier.code}) - ${carrier.rate}/40FT
              </option>
            ))}
        </select>
      </div>
      <div>
        <label style={{ display: "block", fontSize: "12px", color: "var(--muted-foreground)", marginBottom: "6px" }}>
          Client Rate (USD)
        </label>
        <input
          type="number"
          placeholder="1400"
          value={formData.clientRate}
          onChange={(e) => setFormData({ ...formData, clientRate: e.target.value })}
          style={{
            width: "100%",
            padding: "12px",
            background: "var(--muted)",
            border: "1px solid var(--border)",
            borderRadius: "6px",
            color: "var(--foreground)",
            fontSize: "14px",
          }}
        />
      </div>
      {margin > 0 && (
        <div
          style={{
            background: "rgba(16, 185, 129, 0.1)",
            border: "1px solid var(--primary)",
            borderRadius: "6px",
            padding: "12px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ color: "var(--muted-foreground)", fontSize: "13px" }}>Projected Margin</span>
          <span className="font-mono" style={{ color: "var(--primary)", fontSize: "16px", fontWeight: 700 }}>
            +${margin.toFixed(2)}
          </span>
        </div>
      )}
      <button
        type="submit"
        disabled={!formData.container || !formData.destination || !formData.carrier || !formData.clientRate}
        style={{
          padding: "14px",
          background: "var(--primary)",
          color: "var(--primary-foreground)",
          border: "none",
          borderRadius: "6px",
          fontWeight: 600,
          fontSize: "14px",
          cursor: "pointer",
          marginTop: "8px",
          opacity: (!formData.container || !formData.destination || !formData.carrier || !formData.clientRate) ? 0.5 : 1,
        }}
      >
        LOAD JOB
      </button>
    </form>
  );
}

// Withdraw Margin Modal Content
function WithdrawMarginContent({ jobs }) {
  const totalMargin = jobs.reduce((acc, job) => acc + job.margin, 0);
  const ngnRate = 1550; // Example NGN/USD rate
  const totalMarginNGN = totalMargin * ngnRate;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div
        style={{
          background: "var(--muted)",
          borderRadius: "8px",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <p style={{ color: "var(--muted-foreground)", fontSize: "12px", marginBottom: "8px" }}>TOTAL AVAILABLE MARGIN</p>
        <p className="font-mono" style={{ fontSize: "32px", fontWeight: 700, color: "var(--primary)" }}>
          ${totalMargin.toLocaleString()}.00
        </p>
        <p className="font-mono" style={{ fontSize: "14px", color: "var(--muted-foreground)", marginTop: "4px" }}>
          ₦{totalMarginNGN.toLocaleString()}.00
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <p style={{ fontSize: "12px", color: "var(--muted-foreground)", fontWeight: 600 }}>MARGIN BREAKDOWN</p>
        {jobs.map((job) => (
          <div
            key={job.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px",
              background: "var(--muted)",
              borderRadius: "6px",
            }}
          >
            <div>
              <p className="font-mono" style={{ fontSize: "13px", fontWeight: 600 }}>{job.container}</p>
              <p style={{ fontSize: "11px", color: "var(--muted-foreground)" }}>{job.client}</p>
            </div>
            <span className="font-mono" style={{ color: "var(--primary)", fontWeight: 600 }}>
              +${job.margin.toLocaleString()}
            </span>
          </div>
        ))}
      </div>

      <button
        style={{
          padding: "14px",
          background: "var(--warning)",
          color: "#000",
          border: "none",
          borderRadius: "6px",
          fontWeight: 600,
          fontSize: "14px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        <DollarIcon />
        WITHDRAW TO NIBSS
      </button>

      <p style={{ fontSize: "11px", color: "var(--muted-foreground)", textAlign: "center" }}>
        Funds will be transferred to your verified NIBSS account within 24 hours
      </p>
    </div>
  );
}

// Main App Component
export default function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeModal, setActiveModal] = useState(null);
  const [jobs, setJobs] = useState(ACTIVE_JOBS);
  const [commandHistory, setCommandHistory] = useState([
    { time: "09:42:15", command: "SYSTEM BOOT", status: "success" },
    { time: "09:42:16", command: "12-CARRIER AGGREGATOR ONLINE", status: "success" },
    { time: "09:42:17", command: "NIBSS VERIFICATION COMPLETE", status: "success" },
    { time: "09:42:18", command: "READY FOR OPERATIONS", status: "success" },
  ]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLoadJob = (jobData) => {
    const newJob = {
      id: `JOB-2026-${String(jobs.length + 1).padStart(3, "0")}`,
      container: jobData.container,
      origin: "Trade Fair, Lagos",
      destination: jobData.destination,
      status: "Pending Gate-In",
      carrier: CARRIERS.find((c) => c.code === jobData.carrier)?.name || "Unknown",
      rate: jobData.rate,
      clientRate: parseFloat(jobData.clientRate),
      margin: jobData.margin,
      eta: "TBD",
      client: jobData.client,
    };
    setJobs([...jobs, newJob]);
    setCommandHistory([
      ...commandHistory,
      {
        time: currentTime.toLocaleTimeString("en-US", { hour12: false }),
        command: `LOADED: ${newJob.container} → ${newJob.destination}`,
        status: "success",
      },
    ]);
    setActiveModal(null);
  };

  const totalRevenue = jobs.reduce((acc, job) => acc + job.clientRate, 0);
  const totalMargin = jobs.reduce((acc, job) => acc + job.margin, 0);

  return (
    <div style={{ minHeight: "100vh", background: "var(--background)" }}>
      {/* Header */}
      <header
        style={{
          borderBottom: "1px solid var(--border)",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              background: "linear-gradient(135deg, var(--primary), var(--accent))",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: "14px",
            }}
          >
            ATG
          </div>
          <div>
            <h1 style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "-0.02em" }}>ATG GLOBAL OS</h1>
            <p style={{ fontSize: "12px", color: "var(--muted-foreground)" }}>Sovereign Trade Node Control</p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div style={{ textAlign: "right" }}>
            <p className="font-mono" style={{ fontSize: "14px", color: "var(--primary)" }}>
              {currentTime.toLocaleTimeString("en-US", { hour12: false })}
            </p>
            <p style={{ fontSize: "11px", color: "var(--muted-foreground)" }}>
              {currentTime.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
            </p>
          </div>
          <div
            className="status-live"
            style={{
              padding: "8px 12px",
              background: "rgba(16, 185, 129, 0.1)",
              borderRadius: "6px",
              fontSize: "12px",
              color: "var(--primary)",
              fontWeight: 600,
            }}
          >
            OPERATIONAL
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ padding: "24px", maxWidth: "1400px", margin: "0 auto" }}>
        {/* System Status Grid */}
        <section style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "12px", color: "var(--muted-foreground)", fontWeight: 600, marginBottom: "16px", letterSpacing: "0.05em" }}>
            SYSTEM NODES
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "16px",
            }}
          >
            <StatusCard title="THE BRAIN" icon={BrainIcon} status="LIVE" statusClass="">
              <div style={{ fontSize: "13px", color: "var(--muted-foreground)" }}>
                <p>Job Registry (Express.js)</p>
                <p className="font-mono" style={{ color: "var(--foreground)", marginTop: "4px" }}>
                  $250.00 <span style={{ color: "var(--muted-foreground)" }}>anchor rate</span>
                </p>
              </div>
            </StatusCard>

            <StatusCard title="THE EYES" icon={EyeIcon} status="LIVE" statusClass="">
              <div style={{ fontSize: "13px", color: "var(--muted-foreground)" }}>
                <p>12-Carrier Echo Aggregator</p>
                <p className="font-mono" style={{ color: "var(--foreground)", marginTop: "4px" }}>
                  {CARRIERS.filter((c) => c.available).length}/12 <span style={{ color: "var(--muted-foreground)" }}>carriers online</span>
                </p>
              </div>
            </StatusCard>

            <StatusCard title="THE FINANCE" icon={WalletIcon} status="LOCKED" statusClass="status-locked">
              <div style={{ fontSize: "13px", color: "var(--muted-foreground)" }}>
                <p>NIBSS Verified</p>
                <p className="font-mono" style={{ color: "var(--accent)", marginTop: "4px" }}>
                  ₦14,000,000.00
                </p>
                <p className="font-mono" style={{ fontSize: "11px", color: "var(--muted-foreground)" }}>
                  $540,085.92 liquidity
                </p>
              </div>
            </StatusCard>

            <StatusCard title="THE ASSETS" icon={ContainerIcon} status="MOVING" statusClass="status-moving">
              <div style={{ fontSize: "13px", color: "var(--muted-foreground)" }}>
                <p>Active Containers</p>
                <p className="font-mono" style={{ color: "var(--warning)", marginTop: "4px" }}>
                  {jobs.length} <span style={{ color: "var(--muted-foreground)" }}>in transit</span>
                </p>
              </div>
            </StatusCard>

            <StatusCard title="THE REVENUE" icon={ChartIcon} status="TRIGGERED" statusClass="status-triggered">
              <div style={{ fontSize: "13px", color: "var(--muted-foreground)" }}>
                <p>Proforma Generated</p>
                <p className="font-mono" style={{ color: "var(--primary)", marginTop: "4px" }}>
                  ${totalRevenue.toLocaleString()}.00 <span style={{ color: "var(--muted-foreground)" }}>total</span>
                </p>
                <p className="font-mono" style={{ fontSize: "11px", color: "var(--primary)" }}>
                  +${totalMargin.toLocaleString()}.00 margin
                </p>
              </div>
            </StatusCard>
          </div>
        </section>

        {/* Command Center */}
        <section style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "12px", color: "var(--muted-foreground)", fontWeight: 600, marginBottom: "16px", letterSpacing: "0.05em" }}>
            CEO COMMAND CENTER
          </h2>
          <div
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              padding: "20px",
            }}
          >
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "20px" }}>
              <CommandButton variant="primary" onClick={() => setActiveModal("track")}>
                <MapPinIcon /> TRACK ALL
              </CommandButton>
              <CommandButton variant="accent" onClick={() => setActiveModal("load")}>
                <PlusIcon /> LOAD NEW JOB
              </CommandButton>
              <CommandButton variant="warning" onClick={() => setActiveModal("withdraw")}>
                <DollarIcon /> WITHDRAW MARGIN
              </CommandButton>
            </div>

            {/* Command Log */}
            <div
              style={{
                background: "var(--background)",
                borderRadius: "6px",
                padding: "16px",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "12px",
                maxHeight: "150px",
                overflow: "auto",
              }}
            >
              {commandHistory.map((entry, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", marginBottom: "4px" }}>
                  <span style={{ color: "var(--muted-foreground)" }}>[{entry.time}]</span>
                  <span style={{ color: entry.status === "success" ? "var(--primary)" : "var(--destructive)" }}>
                    {entry.command}
                  </span>
                </div>
              ))}
              <div style={{ display: "flex", gap: "12px" }}>
                <span style={{ color: "var(--muted-foreground)" }}>
                  [{currentTime.toLocaleTimeString("en-US", { hour12: false })}]
                </span>
                <span className="animate-pulse" style={{ color: "var(--primary)" }}>
                  AWAITING COMMAND_
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Two Column Layout: Carrier Grid & Active Jobs */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "24px",
          }}
        >
          {/* Carrier Grid */}
          <section>
            <h2 style={{ fontSize: "12px", color: "var(--muted-foreground)", fontWeight: 600, marginBottom: "16px", letterSpacing: "0.05em" }}>
              12-CARRIER RATE GRID
            </h2>
            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto auto",
                  padding: "12px 16px",
                  borderBottom: "1px solid var(--border)",
                  fontSize: "11px",
                  color: "var(--muted-foreground)",
                  fontWeight: 600,
                }}
              >
                <span>CARRIER</span>
                <span>40FT RATE</span>
                <span>STATUS</span>
              </div>
              <div style={{ maxHeight: "300px", overflow: "auto" }}>
                {CARRIERS.map((carrier) => (
                  <div
                    key={carrier.code}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr auto auto",
                      padding: "12px 16px",
                      borderBottom: "1px solid var(--border)",
                      fontSize: "13px",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <span style={{ fontWeight: 500 }}>{carrier.name}</span>
                      <span className="font-mono" style={{ color: "var(--muted-foreground)", marginLeft: "8px", fontSize: "11px" }}>
                        {carrier.code}
                      </span>
                    </div>
                    <span className="font-mono" style={{ color: carrier.rate <= 250 ? "var(--primary)" : "var(--foreground)" }}>
                      ${carrier.rate}
                    </span>
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: carrier.available ? "var(--primary)" : "var(--destructive)",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Active Jobs */}
          <section>
            <h2 style={{ fontSize: "12px", color: "var(--muted-foreground)", fontWeight: 600, marginBottom: "16px", letterSpacing: "0.05em" }}>
              ACTIVE SHIPMENTS ({jobs.length})
            </h2>
            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                maxHeight: "356px",
                overflow: "auto",
              }}
            >
              {jobs.map((job) => (
                <div
                  key={job.id}
                  style={{
                    background: "var(--muted)",
                    borderRadius: "8px",
                    padding: "16px",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                    <div>
                      <p className="font-mono" style={{ fontSize: "11px", color: "var(--muted-foreground)" }}>{job.id}</p>
                      <p className="font-mono" style={{ fontSize: "15px", fontWeight: 600, color: "var(--primary)" }}>{job.container}</p>
                    </div>
                    <span
                      style={{
                        background: job.status === "Vessel Ready" ? "var(--warning)" : "var(--muted)",
                        color: job.status === "Vessel Ready" ? "#000" : "var(--foreground)",
                        padding: "4px 10px",
                        borderRadius: "4px",
                        fontSize: "11px",
                        fontWeight: 600,
                      }}
                    >
                      {job.status}
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", fontSize: "12px" }}>
                    <div>
                      <p style={{ color: "var(--muted-foreground)" }}>Route</p>
                      <p>{job.origin.split(",")[0]} → {job.destination.split(",")[0]}</p>
                    </div>
                    <div>
                      <p style={{ color: "var(--muted-foreground)" }}>Carrier</p>
                      <p>{job.carrier}</p>
                    </div>
                    <div>
                      <p style={{ color: "var(--muted-foreground)" }}>Client Rate</p>
                      <p className="font-mono">${job.clientRate.toLocaleString()}</p>
                    </div>
                    <div>
                      <p style={{ color: "var(--muted-foreground)" }}>Margin</p>
                      <p className="font-mono" style={{ color: "var(--primary)" }}>+${job.margin.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              ))}
              {jobs.length === 0 && (
                <div style={{ textAlign: "center", padding: "40px", color: "var(--muted-foreground)" }}>
                  <ContainerIcon />
                  <p style={{ marginTop: "12px" }}>No active shipments</p>
                  <p style={{ fontSize: "12px" }}>Load your first job to begin</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "16px 24px",
          marginTop: "32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
          fontSize: "12px",
          color: "var(--muted-foreground)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span>ATG GLOBAL OS v2.0</span>
          <span style={{ color: "var(--border)" }}>|</span>
          <span>Ghost Monitoring: ACTIVE</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span>Identifiers:</span>
          <span className="font-mono" style={{ color: "var(--foreground)" }}>Quodri</span>
          <span style={{ color: "var(--border)" }}>|</span>
          <span className="font-mono" style={{ color: "var(--foreground)" }}>Aremo Temmy</span>
        </div>
      </footer>

      {/* Modals */}
      <Modal isOpen={activeModal === "track"} onClose={() => setActiveModal(null)} title="TRACK ALL SHIPMENTS">
        <TrackAllContent jobs={jobs} />
      </Modal>

      <Modal isOpen={activeModal === "load"} onClose={() => setActiveModal(null)} title="LOAD NEW JOB">
        <LoadNewJobContent onSubmit={handleLoadJob} carriers={CARRIERS} />
      </Modal>

      <Modal isOpen={activeModal === "withdraw"} onClose={() => setActiveModal(null)} title="WITHDRAW MARGIN">
        <WithdrawMarginContent jobs={jobs} />
      </Modal>
    </div>
  );
}
