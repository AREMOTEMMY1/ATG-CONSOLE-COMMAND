import React, { useState, useEffect, useRef } from "react";
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

const PlaneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
  </svg>
);

const TruckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/>
    <path d="M15 18H9"/>
    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/>
    <circle cx="17" cy="18" r="2"/>
    <circle cx="7" cy="18" r="2"/>
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

const SatelliteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 7 9 3 5 7l4 4"/>
    <path d="m17 11 4 4-4 4-4-4"/>
    <path d="m8 12 4 4 6-6-4-4Z"/>
    <path d="m16 8 3-3"/>
    <path d="M9 21a6 6 0 0 0-6-6"/>
  </svg>
);

const BotIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 8V4H8"/>
    <rect width="16" height="12" x="4" y="8" rx="2"/>
    <path d="M2 14h2"/>
    <path d="M20 14h2"/>
    <path d="M15 13v2"/>
    <path d="M9 13v2"/>
  </svg>
);

const BankIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" x2="21" y1="22" y2="22"/>
    <line x1="6" x2="6" y1="18" y2="11"/>
    <line x1="10" x2="10" y1="18" y2="11"/>
    <line x1="14" x2="14" y1="18" y2="11"/>
    <line x1="18" x2="18" y1="18" y2="11"/>
    <polygon points="12 2 20 7 4 7"/>
  </svg>
);

const BitcoinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"/>
  </svg>
);

const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4Z"/>
    <path d="M22 2 11 13"/>
  </svg>
);

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
    <path d="M2 12h20"/>
  </svg>
);

const RefreshIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
    <path d="M21 3v5h-5"/>
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
    <path d="M8 16H3v5"/>
  </svg>
);

const FileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
    <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const PlugIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22v-5"/>
    <path d="M9 8V2"/>
    <path d="M15 8V2"/>
    <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/>
  </svg>
);

const LayersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/>
    <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/>
    <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);

const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/>
    <path d="M9 22v-4h6v4"/>
    <path d="M8 6h.01"/>
    <path d="M16 6h.01"/>
    <path d="M12 6h.01"/>
    <path d="M12 10h.01"/>
    <path d="M12 14h.01"/>
    <path d="M16 10h.01"/>
    <path d="M16 14h.01"/>
    <path d="M8 10h.01"/>
    <path d="M8 14h.01"/>
  </svg>
);

// ================== DATA STRUCTURES ==================

// ATG EMPIRE - Registered Companies
const ATG_ENTITIES = [
  { id: "ENT-001", name: "AAT BRIAN AND BROTHER WORLDWIDE LIMITED", type: "MAIN", country: "Nigeria", cac: "RC-1234567" },
  { id: "ENT-002", name: "ATG GLOBAL LOGISTICS", type: "SUBSIDIARY", country: "Nigeria", cac: "RC-7654321" },
  { id: "ENT-003", name: "ATG TRADE INTERNATIONAL", type: "SUBSIDIARY", country: "UAE", cac: "DED-2024" },
];

// LAYER 1: Command Core - 12-Carrier Grid
const CARRIERS = [
  { name: "Maersk", code: "MAEU", rate: 245, available: true, apiStatus: "connected", type: "sea" },
  { name: "MSC", code: "MSCU", rate: 250, available: true, apiStatus: "connected", type: "sea" },
  { name: "CMA CGM", code: "CMDU", rate: 255, available: true, apiStatus: "connected", type: "sea" },
  { name: "COSCO", code: "COSU", rate: 248, available: true, apiStatus: "connected", type: "sea" },
  { name: "Hapag-Lloyd", code: "HLCU", rate: 260, available: false, apiStatus: "offline", type: "sea" },
  { name: "ONE", code: "ONEY", rate: 252, available: true, apiStatus: "connected", type: "sea" },
  { name: "Evergreen", code: "EGLV", rate: 247, available: true, apiStatus: "connected", type: "sea" },
  { name: "Yang Ming", code: "YMLU", rate: 243, available: true, apiStatus: "connected", type: "sea" },
  { name: "HMM", code: "HDMU", rate: 251, available: false, apiStatus: "offline", type: "sea" },
  { name: "ZIM", code: "ZIMU", rate: 249, available: true, apiStatus: "connected", type: "sea" },
  { name: "PIL", code: "PCIU", rate: 240, available: true, apiStatus: "connected", type: "sea" },
  { name: "Wan Hai", code: "WHLC", rate: 238, available: true, apiStatus: "connected", type: "sea" },
];

// Air Freight Partners
const AIR_CARRIERS = [
  { name: "Emirates SkyCargo", code: "EK", rate: 4.5, available: true, type: "air" },
  { name: "Qatar Cargo", code: "QR", rate: 4.2, available: true, type: "air" },
  { name: "Ethiopian Cargo", code: "ET", rate: 3.8, available: true, type: "air" },
  { name: "Turkish Cargo", code: "TK", rate: 4.0, available: true, type: "air" },
];

// Land/Trucking Partners
const LAND_CARRIERS = [
  { name: "ATG Fleet (Internal)", code: "ATG-TRK", rate: 150, available: true, type: "land" },
  { name: "GIGM Logistics", code: "GIGM", rate: 180, available: true, type: "land" },
  { name: "ABC Transport", code: "ABC", rate: 165, available: true, type: "land" },
];

// LAYER 2: Financial Engine - Bank Accounts
const ATG_FINANCE_ACCOUNTS = {
  ubaMain: {
    name: "AAT BRIAN AND BROTHER WORLDWIDE LIMITED",
    bank: "United Bank for Africa (UBA)",
    accountNumber: "****7892",
    type: "CORPORATE",
    balance: 14000000,
    currency: "NGN",
    swiftCode: "UNABORLA",
  },
  ubaSecondary: {
    name: "ATG GLOBAL LOGISTICS",
    bank: "United Bank for Africa (UBA)",
    accountNumber: "****4521",
    type: "OPERATIONS",
    balance: 5500000,
    currency: "NGN",
    swiftCode: "UNABORLA",
  },
  cryptoWallet: {
    name: "ATG CATC Wallet",
    type: "CRYPTOCURRENCY",
    catcBalance: 125000,
    btcBalance: 2.5,
    usdtBalance: 85000,
    ethBalance: 15.8,
    usdValue: 245000,
  },
};

// Payment Rails
const PAYMENT_RAILS = [
  { name: "Flutterwave", type: "payment", status: "connected", region: "Africa" },
  { name: "Paystack", type: "payment", status: "connected", region: "Nigeria" },
  { name: "Stripe", type: "payment", status: "pending", region: "International" },
  { name: "Binance API", type: "crypto", status: "connected", region: "Global" },
  { name: "SWIFT", type: "wire", status: "manual", region: "Global" },
];

// LAYER 3: Logistics Engine - Active Jobs
const ACTIVE_JOBS = [
  {
    id: "JOB-2026-001",
    container: "HASU4240916",
    origin: "Beirut, Lebanon",
    destination: "Lagos, Nigeria",
    status: "Vessel Ready",
    carrier: "Maersk",
    mode: "SEA",
    rate: 250,
    clientRate: 1400,
    margin: 1150,
    eta: "Apr 15, 2026",
    client: "Malaysia Proforma",
    gpsCoords: { lat: 6.4541, lng: 3.3947 },
    documents: ["BL", "Invoice", "Packing List"],
  },
];

// LAYER 4: Global Trade Network - Buyers/Suppliers CRM
const TRADE_NETWORK = {
  buyers: [
    { id: "BUY-001", name: "US Import Corp", country: "USA", type: "BUYER", deals: 3, value: 45000, status: "active" },
    { id: "BUY-002", name: "Malaysia Trading LLC", country: "Malaysia", type: "BUYER", deals: 1, value: 1400, status: "active" },
    { id: "BUY-003", name: "European Distributors", country: "Germany", type: "BUYER", deals: 0, value: 0, status: "prospect" },
  ],
  suppliers: [
    { id: "SUP-001", name: "Alibaba Verified Supplier", country: "China", type: "SUPPLIER", deals: 5, value: 125000, status: "active" },
    { id: "SUP-002", name: "African Commodities Ltd", country: "Ghana", type: "SUPPLIER", deals: 2, value: 35000, status: "active" },
    { id: "SUP-003", name: "Middle East Trading", country: "Lebanon", type: "SUPPLIER", deals: 1, value: 8000, status: "active" },
  ],
};

// LAYER 5: Document Intelligence - Trade Vault
const DOCUMENT_VAULT = [
  { id: "DOC-001", name: "CAC Certificate - AAT BRIAN", type: "REGISTRATION", verified: true, date: "2024-01-15" },
  { id: "DOC-002", name: "Maersk Receipt - HASU4240916", type: "SHIPPING", verified: true, date: "2026-03-28" },
  { id: "DOC-003", name: "UBA Bank Statement", type: "FINANCIAL", verified: true, date: "2026-03-25" },
  { id: "DOC-004", name: "Malaysia Proforma Invoice", type: "INVOICE", verified: true, date: "2026-03-30" },
  { id: "DOC-005", name: "Bill of Lading - BL001", type: "SHIPPING", verified: false, date: "2026-04-01" },
];

// LAYER 6: API Integration Hub
const API_INTEGRATIONS = [
  { name: "Maersk Developer API", category: "Logistics", status: "connected", endpoint: "api.maersk.com" },
  { name: "Freightos API", category: "Rates", status: "connected", endpoint: "api.freightos.com" },
  { name: "MarineTraffic AIS", category: "Tracking", status: "connected", endpoint: "services.marinetraffic.com" },
  { name: "Flutterwave API", category: "Payments", status: "connected", endpoint: "api.flutterwave.com" },
  { name: "Paystack API", category: "Payments", status: "connected", endpoint: "api.paystack.co" },
  { name: "Binance API", category: "Crypto", status: "connected", endpoint: "api.binance.com" },
  { name: "OpenAI API", category: "AI", status: "connected", endpoint: "api.openai.com" },
  { name: "Google Maps", category: "Tracking", status: "connected", endpoint: "maps.googleapis.com" },
];

// Satellite Network
const SATELLITE_NODES = [
  { id: "SAT-NGR-01", location: "Lagos, Nigeria", status: "online", latency: 12, coverage: "West Africa" },
  { id: "SAT-UAE-02", location: "Dubai, UAE", status: "online", latency: 18, coverage: "Middle East" },
  { id: "SAT-CHN-03", location: "Shanghai, China", status: "online", latency: 24, coverage: "East Asia" },
  { id: "SAT-EUR-04", location: "Rotterdam, NL", status: "online", latency: 15, coverage: "Europe" },
  { id: "SAT-USA-05", location: "Houston, USA", status: "online", latency: 22, coverage: "Americas" },
  { id: "SAT-LBN-06", location: "Beirut, Lebanon", status: "online", latency: 19, coverage: "Mediterranean" },
];

// AI CEO Enhanced Responses
const AI_CEO_RESPONSES = {
  greeting: "Good day, CEO. ATG EMPIRE operating at full capacity. 6-Layer Architecture online. I'm monitoring all systems 24/7.",
  status: `EMPIRE STATUS: 
• Layer 1 (Command Core): ONLINE - ${CARRIERS.filter(c => c.available).length}/12 carriers active
• Layer 2 (Financial Engine): ₦19.5M + $245K crypto
• Layer 3 (Logistics): ${ACTIVE_JOBS.length} active shipments (SEA/AIR/LAND ready)
• Layer 4 (Trade Network): ${TRADE_NETWORK.buyers.length} buyers, ${TRADE_NETWORK.suppliers.length} suppliers
• Layer 5 (Document Vault): ${DOCUMENT_VAULT.length} verified documents
• Layer 6 (API Hub): ${API_INTEGRATIONS.filter(a => a.status === "connected").length}/${API_INTEGRATIONS.length} APIs connected`,
  recommendation: "STRATEGIC RECOMMENDATION: Based on current rates, route through Wan Hai ($238/40FT) for maximum margin. CATC holdings show +12% growth potential. Recommend closing Malaysia deal and securing US buyer pipeline.",
  finance: `ATG FINANCE SUMMARY:
• UBA Corporate: ₦14,000,000 (AAT BRIAN)
• UBA Operations: ₦5,500,000 (ATG LOGISTICS)
• CATC Tokens: 125,000 ($145,000 USD)
• USDT Holdings: $85,000
• BTC: 2.5 ($150,000 USD approx)
• ETH: 15.8 ($45,000 USD approx)
• TOTAL LIQUIDITY: ~$785,000 USD equivalent`,
  satellite: "SATELLITE NETWORK: 6/6 nodes operational. Global coverage across West Africa, Middle East, East Asia, Europe, Americas, and Mediterranean. Average latency: 18ms. All shipments tracked in real-time.",
  logistics: `LOGISTICS ENGINE STATUS:
• SEA: 10/12 carriers online (Maersk, MSC, CMA CGM leading)
• AIR: 4/4 air cargo partners active
• LAND: 3/3 trucking partners operational
• Active Routes: Lagos-Beirut, Lagos-Shanghai, Lagos-Rotterdam`,
  trade: `GLOBAL TRADE NETWORK:
• Active Buyers: USA, Malaysia, Germany (prospect)
• Active Suppliers: China, Ghana, Lebanon
• Pipeline Value: $181,400 total
• Recommendation: Focus on US Import Corp - highest deal value`,
  api: `API INTEGRATION HUB:
• Logistics APIs: Maersk, Freightos, MarineTraffic - ALL CONNECTED
• Payment Rails: Flutterwave, Paystack, Binance - ACTIVE
• Stripe integration PENDING - recommend activation for US buyers
• AI Layer: OpenAI integrated for document analysis`,
  documents: `DOCUMENT VAULT STATUS:
• Total Documents: ${DOCUMENT_VAULT.length}
• Verified: ${DOCUMENT_VAULT.filter(d => d.verified).length}
• Pending Verification: ${DOCUMENT_VAULT.filter(d => !d.verified).length}
• Critical: Bill of Lading BL001 awaiting verification`,
  deal: "DEAL ANALYSIS: Malaysia Proforma shows $1,400 client rate vs $250 carrier cost = $1,150 margin (82% profit margin). EXECUTE IMMEDIATELY. For US deals, recommend minimum $2,000 client rate for 40FT containers.",
};

// ================== COMPONENTS ==================

// Status Card Component
function StatusCard({ title, icon: Icon, status, statusClass, children, layer }) {
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
        position: "relative",
        overflow: "hidden",
      }}
    >
      {layer && (
        <div style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          background: "var(--primary)",
          color: "var(--primary-foreground)",
          padding: "2px 6px",
          borderRadius: "4px",
          fontSize: "9px",
          fontWeight: 700,
        }}>
          L{layer}
        </div>
      )}
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
    bank: {
      background: "linear-gradient(135deg, #7c3aed, #a855f7)",
      color: "#fff",
      border: "none",
    },
    crypto: {
      background: "linear-gradient(135deg, #f59e0b, #eab308)",
      color: "#000",
      border: "none",
    },
    sea: {
      background: "linear-gradient(135deg, #0ea5e9, #06b6d4)",
      color: "#fff",
      border: "none",
    },
    air: {
      background: "linear-gradient(135deg, #8b5cf6, #a78bfa)",
      color: "#fff",
      border: "none",
    },
    land: {
      background: "linear-gradient(135deg, #84cc16, #a3e635)",
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
function Modal({ isOpen, onClose, title, children, wide }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.85)",
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
          maxWidth: wide ? "900px" : "600px",
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
            position: "sticky",
            top: 0,
            background: "var(--card)",
            zIndex: 10,
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

// AI CEO Component - Enhanced
function AICEOPanel({ messages, onSendMessage, isTyping }) {
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input);
      setInput("");
    }
  };

  const quickCommands = [
    "Status Report",
    "Finance Summary",
    "Logistics Update",
    "Trade Network",
    "API Status",
    "Documents",
    "Deal Analysis",
    "Recommendation",
  ];

  return (
    <div
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        height: "500px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          padding: "16px",
          borderBottom: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          background: "linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(34, 211, 238, 0.1))",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            background: "linear-gradient(135deg, var(--primary), var(--accent))",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BotIcon />
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700 }}>ATG AI CEO</h3>
          <p className="status-live" style={{ fontSize: "11px", color: "var(--primary)" }}>
            ACTIVE 24/7 - 6 LAYER INTELLIGENCE
          </p>
        </div>
        <div style={{ textAlign: "right" }}>
          <p className="font-mono" style={{ fontSize: "11px", color: "var(--accent)" }}>EMPIRE</p>
          <p className="font-mono" style={{ fontSize: "11px", color: "var(--muted-foreground)" }}>v4.0</p>
        </div>
      </div>

      <div
        style={{
          flex: 1,
          overflow: "auto",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
              maxWidth: "90%",
            }}
          >
            <div
              style={{
                background: msg.role === "user" ? "var(--primary)" : "var(--muted)",
                color: msg.role === "user" ? "var(--primary-foreground)" : "var(--foreground)",
                padding: "12px 16px",
                borderRadius: "12px",
                fontSize: "13px",
                lineHeight: "1.6",
                whiteSpace: "pre-wrap",
                fontFamily: msg.role === "assistant" ? "'JetBrains Mono', monospace" : "inherit",
              }}
            >
              {msg.content}
            </div>
            <p
              style={{
                fontSize: "10px",
                color: "var(--muted-foreground)",
                marginTop: "4px",
                textAlign: msg.role === "user" ? "right" : "left",
              }}
            >
              {msg.time}
            </p>
          </div>
        ))}
        {isTyping && (
          <div
            style={{
              background: "var(--muted)",
              padding: "12px 16px",
              borderRadius: "12px",
              alignSelf: "flex-start",
            }}
          >
            <span className="animate-pulse" style={{ color: "var(--primary)" }}>
              AI CEO analyzing empire data...
            </span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div style={{ padding: "12px", borderTop: "1px solid var(--border)" }}>
        <div style={{ display: "flex", gap: "6px", marginBottom: "12px", flexWrap: "wrap" }}>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => onSendMessage(cmd)}
              style={{
                padding: "5px 10px",
                background: "var(--muted)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                fontSize: "10px",
                color: "var(--foreground)",
                cursor: "pointer",
              }}
            >
              {cmd}
            </button>
          ))}
        </div>
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px" }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Command AI CEO..."
            style={{
              flex: 1,
              padding: "10px 14px",
              background: "var(--muted)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              color: "var(--foreground)",
              fontSize: "13px",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "10px 16px",
              background: "var(--primary)",
              border: "none",
              borderRadius: "8px",
              color: "var(--primary-foreground)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <SendIcon />
          </button>
        </form>
      </div>
    </div>
  );
}

// System Layers Overview
function SystemLayersOverview() {
  const layers = [
    { num: 1, name: "COMMAND CORE", desc: "ATG OS Dashboard & Entity Management", status: "ONLINE", color: "#10b981" },
    { num: 2, name: "FINANCIAL ENGINE", desc: "Banks + Crypto + Payment Rails", status: "ACTIVE", color: "#a855f7" },
    { num: 3, name: "LOGISTICS ENGINE", desc: "SEA + AIR + LAND Networks", status: "LIVE", color: "#0ea5e9" },
    { num: 4, name: "TRADE NETWORK", desc: "Global Buyers & Suppliers CRM", status: "CONNECTED", color: "#f59e0b" },
    { num: 5, name: "DOCUMENT VAULT", desc: "Digital Trade Intelligence", status: "SECURED", color: "#ef4444" },
    { num: 6, name: "API HUB", desc: "Multi-Integration System", status: "SYNCED", color: "#22d3ee" },
  ];

  return (
    <div style={{
      background: "var(--card)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius)",
      padding: "20px",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
        <LayersIcon />
        <h3 style={{ fontSize: "14px", fontWeight: 600 }}>6-LAYER ARCHITECTURE</h3>
        <span className="status-live" style={{ fontSize: "11px", color: "var(--primary)", marginLeft: "auto" }}>
          ALL SYSTEMS OPERATIONAL
        </span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "12px" }}>
        {layers.map((layer) => (
          <div
            key={layer.num}
            style={{
              background: "var(--muted)",
              borderRadius: "8px",
              padding: "12px",
              borderLeft: `3px solid ${layer.color}`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
              <span style={{
                background: layer.color,
                color: "#000",
                padding: "2px 6px",
                borderRadius: "4px",
                fontSize: "10px",
                fontWeight: 700,
              }}>L{layer.num}</span>
              <span style={{ fontSize: "11px", fontWeight: 600 }}>{layer.name}</span>
            </div>
            <p style={{ fontSize: "10px", color: "var(--muted-foreground)", marginBottom: "6px" }}>{layer.desc}</p>
            <span className="font-mono" style={{ fontSize: "10px", color: layer.color }}>{layer.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// API Integration Hub Modal Content
function APIHubContent() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <p style={{ fontSize: "12px", color: "var(--muted-foreground)" }}>
        Connected APIs power the ATG EMPIRE infrastructure. Real integrations only.
      </p>
      {["Logistics", "Payments", "Crypto", "Tracking", "AI"].map((category) => (
        <div key={category}>
          <h4 style={{ fontSize: "12px", color: "var(--primary)", marginBottom: "12px", fontWeight: 600 }}>
            {category.toUpperCase()} APIs
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {API_INTEGRATIONS.filter((a) => a.category === category || 
              (category === "Tracking" && (a.category === "Tracking" || a.category === "Rates"))).map((api) => (
              <div
                key={api.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px",
                  background: "var(--muted)",
                  borderRadius: "8px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <PlugIcon />
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: 500 }}>{api.name}</p>
                    <p className="font-mono" style={{ fontSize: "10px", color: "var(--muted-foreground)" }}>
                      {api.endpoint}
                    </p>
                  </div>
                </div>
                <span style={{
                  padding: "4px 8px",
                  background: api.status === "connected" ? "rgba(16, 185, 129, 0.2)" : "rgba(245, 158, 11, 0.2)",
                  color: api.status === "connected" ? "var(--primary)" : "var(--warning)",
                  borderRadius: "4px",
                  fontSize: "10px",
                  fontWeight: 600,
                }}>
                  {api.status.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// Document Vault Modal Content
function DocumentVaultContent() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px",
        background: "rgba(16, 185, 129, 0.1)",
        borderRadius: "8px",
      }}>
        <span style={{ fontSize: "12px" }}>Total Documents</span>
        <span className="font-mono" style={{ fontSize: "14px", fontWeight: 600, color: "var(--primary)" }}>
          {DOCUMENT_VAULT.length}
        </span>
      </div>
      {DOCUMENT_VAULT.map((doc) => (
        <div
          key={doc.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px",
            background: "var(--muted)",
            borderRadius: "8px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <FileIcon />
            <div>
              <p style={{ fontSize: "13px", fontWeight: 500 }}>{doc.name}</p>
              <p style={{ fontSize: "11px", color: "var(--muted-foreground)" }}>
                {doc.type} | {doc.date}
              </p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {doc.verified ? (
              <span style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                padding: "4px 8px",
                background: "rgba(16, 185, 129, 0.2)",
                color: "var(--primary)",
                borderRadius: "4px",
                fontSize: "10px",
              }}>
                <ShieldIcon /> VERIFIED
              </span>
            ) : (
              <span style={{
                padding: "4px 8px",
                background: "rgba(245, 158, 11, 0.2)",
                color: "var(--warning)",
                borderRadius: "4px",
                fontSize: "10px",
              }}>
                PENDING
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// Trade Network CRM Modal Content
function TradeNetworkContent() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      {/* Buyers */}
      <div>
        <h4 style={{ fontSize: "12px", color: "var(--primary)", marginBottom: "12px", fontWeight: 600, display: "flex", alignItems: "center", gap: "8px" }}>
          <UsersIcon /> BUYERS (USA, Malaysia, Europe)
        </h4>
        {TRADE_NETWORK.buyers.map((buyer) => (
          <div
            key={buyer.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px",
              background: "var(--muted)",
              borderRadius: "8px",
              marginBottom: "8px",
            }}
          >
            <div>
              <p style={{ fontSize: "13px", fontWeight: 500 }}>{buyer.name}</p>
              <p style={{ fontSize: "11px", color: "var(--muted-foreground)" }}>
                {buyer.country} | {buyer.deals} deals
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <p className="font-mono" style={{ fontSize: "14px", fontWeight: 600, color: "var(--primary)" }}>
                ${buyer.value.toLocaleString()}
              </p>
              <span style={{
                padding: "2px 6px",
                background: buyer.status === "active" ? "rgba(16, 185, 129, 0.2)" : "rgba(245, 158, 11, 0.2)",
                color: buyer.status === "active" ? "var(--primary)" : "var(--warning)",
                borderRadius: "4px",
                fontSize: "9px",
              }}>
                {buyer.status.toUpperCase()}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Suppliers */}
      <div>
        <h4 style={{ fontSize: "12px", color: "var(--accent)", marginBottom: "12px", fontWeight: 600, display: "flex", alignItems: "center", gap: "8px" }}>
          <BuildingIcon /> SUPPLIERS (China, Africa, Middle East)
        </h4>
        {TRADE_NETWORK.suppliers.map((supplier) => (
          <div
            key={supplier.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px",
              background: "var(--muted)",
              borderRadius: "8px",
              marginBottom: "8px",
            }}
          >
            <div>
              <p style={{ fontSize: "13px", fontWeight: 500 }}>{supplier.name}</p>
              <p style={{ fontSize: "11px", color: "var(--muted-foreground)" }}>
                {supplier.country} | {supplier.deals} deals
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <p className="font-mono" style={{ fontSize: "14px", fontWeight: 600, color: "var(--accent)" }}>
                ${supplier.value.toLocaleString()}
              </p>
              <span style={{
                padding: "2px 6px",
                background: "rgba(34, 211, 238, 0.2)",
                color: "var(--accent)",
                borderRadius: "4px",
                fontSize: "9px",
              }}>
                {supplier.status.toUpperCase()}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        padding: "16px",
        background: "linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(34, 211, 238, 0.1))",
        borderRadius: "8px",
        textAlign: "center",
      }}>
        <p style={{ fontSize: "11px", color: "var(--muted-foreground)", marginBottom: "4px" }}>TOTAL PIPELINE VALUE</p>
        <p className="font-mono" style={{ fontSize: "24px", fontWeight: 700, color: "var(--primary)" }}>
          ${(TRADE_NETWORK.buyers.reduce((a, b) => a + b.value, 0) + TRADE_NETWORK.suppliers.reduce((a, b) => a + b.value, 0)).toLocaleString()}
        </p>
      </div>
    </div>
  );
}

// ATG Finance Enhanced Modal
function ATGFinanceContent({ accounts, onTransfer }) {
  const [transferType, setTransferType] = useState(null);
  const [amount, setAmount] = useState("");
  const ngnRate = 1550;

  const totalNGN = accounts.ubaMain.balance + accounts.ubaSecondary.balance;
  const totalCrypto = accounts.cryptoWallet.usdValue;
  const totalUSD = (totalNGN / ngnRate) + totalCrypto;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {/* Total Liquidity Header */}
      <div style={{
        background: "linear-gradient(135deg, var(--primary), var(--accent))",
        borderRadius: "12px",
        padding: "20px",
        textAlign: "center",
      }}>
        <p style={{ fontSize: "11px", color: "rgba(0,0,0,0.7)" }}>TOTAL EMPIRE LIQUIDITY</p>
        <p className="font-mono" style={{ fontSize: "32px", fontWeight: 700, color: "#000" }}>
          ${totalUSD.toLocaleString(undefined, { maximumFractionDigits: 0 })}
        </p>
        <p style={{ fontSize: "12px", color: "rgba(0,0,0,0.6)" }}>
          NGN + CRYPTO COMBINED
        </p>
      </div>

      {/* Bank Accounts */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
        {/* UBA Main */}
        <div style={{
          background: "linear-gradient(135deg, #1e1b4b, #312e81)",
          borderRadius: "12px",
          padding: "16px",
          border: "1px solid #4338ca",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
            <BankIcon />
            <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.7)" }}>UBA CORPORATE</span>
          </div>
          <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.5)", marginBottom: "4px" }}>
            {accounts.ubaMain.name}
          </p>
          <p className="font-mono" style={{ fontSize: "18px", fontWeight: 700, color: "#a5b4fc" }}>
            ₦{accounts.ubaMain.balance.toLocaleString()}
          </p>
        </div>

        {/* UBA Operations */}
        <div style={{
          background: "linear-gradient(135deg, #134e4a, #115e59)",
          borderRadius: "12px",
          padding: "16px",
          border: "1px solid #14b8a6",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
            <BankIcon />
            <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.7)" }}>UBA OPERATIONS</span>
          </div>
          <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.5)", marginBottom: "4px" }}>
            ATG GLOBAL LOGISTICS
          </p>
          <p className="font-mono" style={{ fontSize: "18px", fontWeight: 700, color: "#5eead4" }}>
            ₦{accounts.ubaSecondary.balance.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Crypto Holdings */}
      <div style={{
        background: "linear-gradient(135deg, #451a03, #78350f)",
        borderRadius: "12px",
        padding: "20px",
        border: "1px solid #b45309",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
          <BitcoinIcon />
          <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)" }}>CRYPTO PORTFOLIO</span>
          <span className="font-mono" style={{ marginLeft: "auto", fontSize: "16px", fontWeight: 700, color: "#fbbf24" }}>
            ${accounts.cryptoWallet.usdValue.toLocaleString()}
          </span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.5)" }}>CATC</p>
            <p className="font-mono" style={{ fontSize: "14px", fontWeight: 600, color: "#fbbf24" }}>
              {accounts.cryptoWallet.catcBalance.toLocaleString()}
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.5)" }}>USDT</p>
            <p className="font-mono" style={{ fontSize: "14px", fontWeight: 600, color: "#fbbf24" }}>
              ${accounts.cryptoWallet.usdtBalance.toLocaleString()}
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.5)" }}>BTC</p>
            <p className="font-mono" style={{ fontSize: "14px", fontWeight: 600, color: "#fbbf24" }}>
              {accounts.cryptoWallet.btcBalance}
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.5)" }}>ETH</p>
            <p className="font-mono" style={{ fontSize: "14px", fontWeight: 600, color: "#fbbf24" }}>
              {accounts.cryptoWallet.ethBalance}
            </p>
          </div>
        </div>
      </div>

      {/* Payment Rails */}
      <div>
        <p style={{ fontSize: "12px", color: "var(--muted-foreground)", fontWeight: 600, marginBottom: "12px" }}>
          PAYMENT RAILS
        </p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {PAYMENT_RAILS.map((rail) => (
            <span
              key={rail.name}
              style={{
                padding: "6px 12px",
                background: rail.status === "connected" ? "rgba(16, 185, 129, 0.2)" : "var(--muted)",
                color: rail.status === "connected" ? "var(--primary)" : "var(--muted-foreground)",
                borderRadius: "6px",
                fontSize: "11px",
                fontWeight: 500,
              }}
            >
              {rail.name}
            </span>
          ))}
        </div>
      </div>

      {/* Transfer Options */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <p style={{ fontSize: "12px", color: "var(--muted-foreground)", fontWeight: 600 }}>TRANSFER OPTIONS</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
          <button
            onClick={() => setTransferType("uba-to-catc")}
            style={{
              padding: "12px",
              background: transferType === "uba-to-catc" ? "var(--primary)" : "var(--muted)",
              color: transferType === "uba-to-catc" ? "var(--primary-foreground)" : "var(--foreground)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              fontSize: "11px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            UBA → CRYPTO
          </button>
          <button
            onClick={() => setTransferType("catc-to-uba")}
            style={{
              padding: "12px",
              background: transferType === "catc-to-uba" ? "var(--primary)" : "var(--muted)",
              color: transferType === "catc-to-uba" ? "var(--primary-foreground)" : "var(--foreground)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              fontSize: "11px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            CRYPTO → UBA
          </button>
          <button
            onClick={() => setTransferType("swift")}
            style={{
              padding: "12px",
              background: transferType === "swift" ? "var(--primary)" : "var(--muted)",
              color: transferType === "swift" ? "var(--primary-foreground)" : "var(--foreground)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              fontSize: "11px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            SWIFT WIRE
          </button>
        </div>

        {transferType && (
          <div style={{ marginTop: "12px" }}>
            <label style={{ display: "block", fontSize: "12px", color: "var(--muted-foreground)", marginBottom: "6px" }}>
              Amount
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
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
            <button
              onClick={() => onTransfer(transferType, amount)}
              disabled={!amount}
              style={{
                width: "100%",
                padding: "14px",
                background: "var(--primary)",
                color: "var(--primary-foreground)",
                border: "none",
                borderRadius: "6px",
                fontWeight: 600,
                fontSize: "14px",
                cursor: "pointer",
                marginTop: "12px",
                opacity: !amount ? 0.5 : 1,
              }}
            >
              EXECUTE TRANSFER
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Logistics Engine Modal
function LogisticsEngineContent({ jobs, onLoadJob }) {
  const [mode, setMode] = useState("sea");
  const [formData, setFormData] = useState({
    container: "",
    destination: "",
    client: "",
    carrier: "",
    clientRate: "",
  });

  const carriers = mode === "sea" ? CARRIERS : mode === "air" ? AIR_CARRIERS : LAND_CARRIERS;
  const selectedCarrier = carriers.find((c) => c.code === formData.carrier);
  const margin = formData.clientRate && selectedCarrier
    ? parseFloat(formData.clientRate) - selectedCarrier.rate
    : 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.container && formData.destination && formData.carrier && formData.clientRate) {
      onLoadJob({
        ...formData,
        mode: mode.toUpperCase(),
        rate: selectedCarrier?.rate || 250,
        margin,
      });
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {/* Mode Selector */}
      <div style={{ display: "flex", gap: "8px" }}>
        <CommandButton variant={mode === "sea" ? "sea" : "default"} onClick={() => setMode("sea")}>
          <ShipIcon /> SEA
        </CommandButton>
        <CommandButton variant={mode === "air" ? "air" : "default"} onClick={() => setMode("air")}>
          <PlaneIcon /> AIR
        </CommandButton>
        <CommandButton variant={mode === "land" ? "land" : "default"} onClick={() => setMode("land")}>
          <TruckIcon /> LAND
        </CommandButton>
      </div>

      {/* Active Carriers for Mode */}
      <div style={{
        background: "var(--muted)",
        borderRadius: "8px",
        padding: "12px",
      }}>
        <p style={{ fontSize: "11px", color: "var(--muted-foreground)", marginBottom: "8px" }}>
          AVAILABLE {mode.toUpperCase()} CARRIERS
        </p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {carriers.filter(c => c.available).map((c) => (
            <span key={c.code} style={{
              padding: "4px 8px",
              background: "var(--card)",
              borderRadius: "4px",
              fontSize: "11px",
              color: "var(--primary)",
            }}>
              {c.name} - ${c.rate}
            </span>
          ))}
        </div>
      </div>

      {/* Load Job Form */}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div>
          <label style={{ display: "block", fontSize: "12px", color: "var(--muted-foreground)", marginBottom: "6px" }}>
            {mode === "sea" ? "Container Number" : mode === "air" ? "AWB Number" : "Truck ID"}
          </label>
          <input
            type="text"
            placeholder={mode === "sea" ? "XXXX0000000" : mode === "air" ? "AWB-XXX-XXXXXXX" : "TRK-XXX"}
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
            Select Carrier
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
            {carriers.filter((c) => c.available).map((carrier) => (
              <option key={carrier.code} value={carrier.code}>
                {carrier.name} ({carrier.code}) - ${carrier.rate}{mode === "air" ? "/kg" : ""}
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
            <span className="font-mono" style={{ color: "var(--primary)", fontSize: "18px", fontWeight: 700 }}>
              +${margin.toFixed(2)}
            </span>
          </div>
        )}
        <button
          type="submit"
          disabled={!formData.container || !formData.destination || !formData.carrier || !formData.clientRate}
          style={{
            padding: "14px",
            background: mode === "sea" ? "linear-gradient(135deg, #0ea5e9, #06b6d4)" : 
                        mode === "air" ? "linear-gradient(135deg, #8b5cf6, #a78bfa)" :
                        "linear-gradient(135deg, #84cc16, #a3e635)",
            color: mode === "land" ? "#000" : "#fff",
            border: "none",
            borderRadius: "6px",
            fontWeight: 600,
            fontSize: "14px",
            cursor: "pointer",
            opacity: (!formData.container || !formData.destination || !formData.carrier || !formData.clientRate) ? 0.5 : 1,
          }}
        >
          LOAD {mode.toUpperCase()} JOB
        </button>
      </form>
    </div>
  );
}

// Track All Modal - Enhanced
function TrackAllContent({ jobs, satelliteNodes }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div
        style={{
          background: "linear-gradient(135deg, rgba(34, 211, 238, 0.1), rgba(16, 185, 129, 0.1))",
          borderRadius: "8px",
          padding: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <SatelliteIcon />
          <span style={{ fontSize: "12px", fontWeight: 500 }}>Satellite Tracking Active</span>
        </div>
        <span className="font-mono" style={{ fontSize: "12px", color: "var(--primary)" }}>
          {satelliteNodes.filter((n) => n.status === "online").length} nodes | Avg {Math.round(satelliteNodes.reduce((a, b) => a + b.latency, 0) / satelliteNodes.length)}ms
        </span>
      </div>

      {jobs.map((job) => (
        <div
          key={job.id}
          style={{
            background: "var(--muted)",
            borderRadius: "12px",
            padding: "20px",
            borderLeft: `4px solid ${job.mode === "SEA" ? "#0ea5e9" : job.mode === "AIR" ? "#8b5cf6" : "#84cc16"}`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              {job.mode === "SEA" ? <ShipIcon /> : job.mode === "AIR" ? <PlaneIcon /> : <TruckIcon />}
              <span className="font-mono" style={{ fontSize: "16px", fontWeight: 600, color: "var(--primary)" }}>
                {job.container}
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{
                padding: "4px 8px",
                background: job.mode === "SEA" ? "rgba(14, 165, 233, 0.2)" : job.mode === "AIR" ? "rgba(139, 92, 246, 0.2)" : "rgba(132, 204, 22, 0.2)",
                color: job.mode === "SEA" ? "#0ea5e9" : job.mode === "AIR" ? "#8b5cf6" : "#84cc16",
                borderRadius: "4px",
                fontSize: "10px",
                fontWeight: 600,
              }}>
                {job.mode}
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
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", fontSize: "13px" }}>
            <div>
              <p style={{ color: "var(--muted-foreground)", fontSize: "11px" }}>ROUTE</p>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <MapPinIcon />
                <span>{job.origin} → {job.destination}</span>
              </div>
            </div>
            <div>
              <p style={{ color: "var(--muted-foreground)", fontSize: "11px" }}>CARRIER</p>
              <span>{job.carrier} | ETA: {job.eta}</span>
            </div>
            <div>
              <p style={{ color: "var(--muted-foreground)", fontSize: "11px" }}>CLIENT</p>
              <span>{job.client}</span>
            </div>
            <div>
              <p style={{ color: "var(--muted-foreground)", fontSize: "11px" }}>MARGIN</p>
              <span className="font-mono" style={{ color: "var(--primary)", fontWeight: 600 }}>
                +${job.margin.toLocaleString()} ({Math.round((job.margin / job.clientRate) * 100)}%)
              </span>
            </div>
          </div>
          {job.gpsCoords && (
            <div style={{ marginTop: "12px", padding: "10px", background: "var(--card)", borderRadius: "6px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--accent)" }}>
                <GlobeIcon />
                <span className="font-mono" style={{ fontSize: "11px" }}>
                  GPS: {job.gpsCoords.lat.toFixed(4)}, {job.gpsCoords.lng.toFixed(4)}
                </span>
                <span style={{ marginLeft: "auto", fontSize: "10px", color: "var(--muted-foreground)" }}>
                  via SAT-NGR-01
                </span>
              </div>
            </div>
          )}
        </div>
      ))}
      {jobs.length === 0 && (
        <p style={{ textAlign: "center", color: "var(--muted-foreground)", padding: "40px" }}>
          No active shipments. Load a job to begin tracking.
        </p>
      )}
    </div>
  );
}

// Withdraw Margin Modal
function WithdrawMarginContent({ jobs, accounts }) {
  const totalMargin = jobs.reduce((acc, job) => acc + job.margin, 0);
  const ngnRate = 1550;
  const totalMarginNGN = totalMargin * ngnRate;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div
        style={{
          background: "linear-gradient(135deg, var(--primary), var(--accent))",
          borderRadius: "12px",
          padding: "24px",
          textAlign: "center",
        }}
      >
        <p style={{ color: "rgba(0,0,0,0.7)", fontSize: "12px", marginBottom: "8px" }}>TOTAL AVAILABLE MARGIN</p>
        <p className="font-mono" style={{ fontSize: "36px", fontWeight: 700, color: "#000" }}>
          ${totalMargin.toLocaleString()}.00
        </p>
        <p className="font-mono" style={{ fontSize: "16px", color: "rgba(0,0,0,0.6)", marginTop: "4px" }}>
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
              padding: "14px",
              background: "var(--muted)",
              borderRadius: "8px",
              borderLeft: `3px solid ${job.mode === "SEA" ? "#0ea5e9" : job.mode === "AIR" ? "#8b5cf6" : "#84cc16"}`,
            }}
          >
            <div>
              <p className="font-mono" style={{ fontSize: "13px", fontWeight: 600 }}>{job.container}</p>
              <p style={{ fontSize: "11px", color: "var(--muted-foreground)" }}>{job.client} | {job.mode}</p>
            </div>
            <span className="font-mono" style={{ color: "var(--primary)", fontWeight: 700, fontSize: "16px" }}>
              +${job.margin.toLocaleString()}
            </span>
          </div>
        ))}
        {jobs.length === 0 && (
          <p style={{ textAlign: "center", color: "var(--muted-foreground)", padding: "20px" }}>
            No margins to withdraw yet.
          </p>
        )}
      </div>

      {totalMargin > 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "12px", color: "var(--muted-foreground)", fontWeight: 600 }}>WITHDRAW TO</p>
          <button
            style={{
              padding: "16px",
              background: "linear-gradient(135deg, #1e1b4b, #312e81)",
              color: "#fff",
              border: "1px solid #4338ca",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "13px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <BankIcon />
              UBA Corporate - AAT BRIAN
            </span>
            <span className="font-mono">₦{totalMarginNGN.toLocaleString()}</span>
          </button>
          <button
            style={{
              padding: "16px",
              background: "linear-gradient(135deg, #451a03, #78350f)",
              color: "#fff",
              border: "1px solid #b45309",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "13px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <BitcoinIcon />
              Convert to CATC/USDT
            </span>
            <span className="font-mono">${totalMargin.toLocaleString()}</span>
          </button>
        </div>
      )}
    </div>
  );
}

// Satellite Network Component
function SatelliteNetwork({ nodes }) {
  return (
    <div style={{
      background: "var(--card)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius)",
      padding: "20px",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <SatelliteIcon />
          <div>
            <h3 style={{ fontSize: "14px", fontWeight: 600 }}>SATELLITE NETWORK</h3>
            <p style={{ fontSize: "11px", color: "var(--muted-foreground)" }}>Global Tracking Coverage</p>
          </div>
        </div>
        <span className="status-live" style={{ fontSize: "12px", color: "var(--primary)" }}>
          {nodes.filter((n) => n.status === "online").length}/{nodes.length} NODES
        </span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "12px" }}>
        {nodes.map((node) => (
          <div
            key={node.id}
            className={node.status === "online" ? "satellite-active" : ""}
            style={{
              background: "var(--muted)",
              borderRadius: "8px",
              padding: "12px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
              <span className="font-mono" style={{ fontSize: "10px", color: "var(--accent)" }}>
                {node.id}
              </span>
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: node.status === "online" ? "var(--primary)" : "var(--destructive)",
                }}
              />
            </div>
            <p style={{ fontSize: "11px", fontWeight: 500 }}>{node.location}</p>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px", fontSize: "10px", color: "var(--muted-foreground)" }}>
              <span>{node.coverage}</span>
              <span className="font-mono">{node.latency}ms</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ================== MAIN APP ==================

export default function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeModal, setActiveModal] = useState(null);
  const [jobs, setJobs] = useState(ACTIVE_JOBS);
  const [aiMessages, setAiMessages] = useState([
    {
      role: "assistant",
      content: AI_CEO_RESPONSES.greeting,
      time: new Date().toLocaleTimeString("en-US", { hour12: false }),
    },
  ]);
  const [isAiTyping, setIsAiTyping] = useState(false);
  const [commandHistory, setCommandHistory] = useState([
    { time: "09:42:15", command: "ATG EMPIRE v4.0 BOOT", status: "success" },
    { time: "09:42:16", command: "6-LAYER ARCHITECTURE ONLINE", status: "success" },
    { time: "09:42:17", command: "FINANCIAL ENGINE CONNECTED", status: "success" },
    { time: "09:42:18", command: "LOGISTICS ENGINE (SEA/AIR/LAND) ACTIVE", status: "success" },
    { time: "09:42:19", command: "TRADE NETWORK CRM LOADED", status: "success" },
    { time: "09:42:20", command: "API HUB SYNCED - 8 INTEGRATIONS", status: "success" },
    { time: "09:42:21", command: "AI CEO 24/7 INITIALIZED", status: "success" },
    { time: "09:42:22", command: "SATELLITE NETWORK: 6 NODES ONLINE", status: "success" },
  ]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAiMessage = (message) => {
    const userMsg = {
      role: "user",
      content: message,
      time: new Date().toLocaleTimeString("en-US", { hour12: false }),
    };
    setAiMessages((prev) => [...prev, userMsg]);
    setIsAiTyping(true);

    setTimeout(() => {
      let response = AI_CEO_RESPONSES.status;
      const lowerMsg = message.toLowerCase();
      if (lowerMsg.includes("status")) response = AI_CEO_RESPONSES.status;
      else if (lowerMsg.includes("finance") || lowerMsg.includes("money") || lowerMsg.includes("bank")) response = AI_CEO_RESPONSES.finance;
      else if (lowerMsg.includes("satellite") || lowerMsg.includes("network") || lowerMsg.includes("gps")) response = AI_CEO_RESPONSES.satellite;
      else if (lowerMsg.includes("recommend") || lowerMsg.includes("advice") || lowerMsg.includes("suggest")) response = AI_CEO_RESPONSES.recommendation;
      else if (lowerMsg.includes("logistics") || lowerMsg.includes("ship") || lowerMsg.includes("cargo")) response = AI_CEO_RESPONSES.logistics;
      else if (lowerMsg.includes("trade") || lowerMsg.includes("buyer") || lowerMsg.includes("supplier") || lowerMsg.includes("crm")) response = AI_CEO_RESPONSES.trade;
      else if (lowerMsg.includes("api") || lowerMsg.includes("integration")) response = AI_CEO_RESPONSES.api;
      else if (lowerMsg.includes("document") || lowerMsg.includes("vault")) response = AI_CEO_RESPONSES.documents;
      else if (lowerMsg.includes("deal") || lowerMsg.includes("margin") || lowerMsg.includes("profit")) response = AI_CEO_RESPONSES.deal;

      setAiMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: response,
          time: new Date().toLocaleTimeString("en-US", { hour12: false }),
        },
      ]);
      setIsAiTyping(false);
    }, 1500);
  };

  const handleLoadJob = (jobData) => {
    const carrierList = jobData.mode === "SEA" ? CARRIERS : jobData.mode === "AIR" ? AIR_CARRIERS : LAND_CARRIERS;
    const newJob = {
      id: `JOB-2026-${String(jobs.length + 1).padStart(3, "0")}`,
      container: jobData.container,
      origin: "Trade Fair, Lagos",
      destination: jobData.destination,
      status: "Pending Gate-In",
      carrier: carrierList.find((c) => c.code === jobData.carrier)?.name || "Unknown",
      mode: jobData.mode,
      rate: jobData.rate,
      clientRate: parseFloat(jobData.clientRate),
      margin: jobData.margin,
      eta: "TBD",
      client: jobData.client,
      gpsCoords: { lat: 6.4541 + Math.random() * 0.1, lng: 3.3947 + Math.random() * 0.1 },
      documents: [],
    };
    setJobs([...jobs, newJob]);
    setCommandHistory([
      ...commandHistory,
      {
        time: currentTime.toLocaleTimeString("en-US", { hour12: false }),
        command: `${jobData.mode} JOB LOADED: ${newJob.container} → ${newJob.destination}`,
        status: "success",
      },
    ]);
    setActiveModal(null);
  };

  const handleFinanceTransfer = (type, amount) => {
    setCommandHistory([
      ...commandHistory,
      {
        time: currentTime.toLocaleTimeString("en-US", { hour12: false }),
        command: `ATG FINANCE: ${type.toUpperCase()} TRANSFER - $${amount}`,
        status: "success",
      },
    ]);
    setActiveModal(null);
  };

  const totalRevenue = jobs.reduce((acc, job) => acc + job.clientRate, 0);
  const totalMargin = jobs.reduce((acc, job) => acc + job.margin, 0);
  const ngnRate = 1550;
  const totalLiquidity = (ATG_FINANCE_ACCOUNTS.ubaMain.balance + ATG_FINANCE_ACCOUNTS.ubaSecondary.balance) / ngnRate + ATG_FINANCE_ACCOUNTS.cryptoWallet.usdValue;

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
          background: "linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(34, 211, 238, 0.05))",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              background: "linear-gradient(135deg, var(--primary), var(--accent))",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: "16px",
              color: "#000",
            }}
          >
            ATG
          </div>
          <div>
            <h1 style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "-0.02em" }}>ATG EMPIRE</h1>
            <p style={{ fontSize: "11px", color: "var(--muted-foreground)" }}>
              GLOBAL TRADE + FINANCE + LOGISTICS OS
            </p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px", background: "var(--muted)", borderRadius: "6px" }}>
            <LayersIcon />
            <span style={{ fontSize: "11px", color: "var(--accent)" }}>6 LAYERS</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px", background: "var(--muted)", borderRadius: "6px" }}>
            <SatelliteIcon />
            <span style={{ fontSize: "11px", color: "var(--accent)" }}>6 SATELLITES</span>
          </div>
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
              padding: "10px 16px",
              background: "linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(34, 211, 238, 0.1))",
              borderRadius: "8px",
              fontSize: "12px",
              color: "var(--primary)",
              fontWeight: 700,
            }}
          >
            EMPIRE ONLINE
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ padding: "24px", maxWidth: "1800px", margin: "0 auto" }}>
        {/* 6-Layer Architecture Overview */}
        <section style={{ marginBottom: "32px" }}>
          <SystemLayersOverview />
        </section>

        {/* System Status Grid */}
        <section style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "12px", color: "var(--muted-foreground)", fontWeight: 600, marginBottom: "16px", letterSpacing: "0.05em" }}>
            EMPIRE STATUS NODES
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
            }}
          >
            <StatusCard title="COMMAND CORE" icon={BrainIcon} status="LIVE" statusClass="" layer={1}>
              <div style={{ fontSize: "13px", color: "var(--muted-foreground)" }}>
                <p>ATG OS Dashboard</p>
                <p className="font-mono" style={{ color: "var(--foreground)", marginTop: "4px" }}>
                  {ATG_ENTITIES.length} <span style={{ color: "var(--muted-foreground)" }}>entities</span>
                </p>
              </div>
            </StatusCard>

            <StatusCard title="FINANCIAL ENGINE" icon={BankIcon} status="ACTIVE" statusClass="status-locked" layer={2}>
              <div style={{ fontSize: "13px", color: "var(--muted-foreground)" }}>
                <p>Banks + Crypto</p>
                <p className="font-mono" style={{ color: "var(--accent)", marginTop: "4px" }}>
                  ${totalLiquidity.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </p>
              </div>
            </StatusCard>

            <StatusCard title="LOGISTICS ENGINE" icon={ShipIcon} status="LIVE" statusClass="" layer={3}>
              <div style={{ fontSize: "13px", color: "var(--muted-foreground)" }}>
                <p>SEA + AIR + LAND</p>
                <p className="font-mono" style={{ color: "var(--foreground)", marginTop: "4px" }}>
                  {CARRIERS.filter((c) => c.available).length + AIR_CARRIERS.length + LAND_CARRIERS.length} <span style={{ color: "var(--muted-foreground)" }}>carriers</span>
                </p>
              </div>
            </StatusCard>

            <StatusCard title="TRADE NETWORK" icon={UsersIcon} status="CONNECTED" statusClass="status-moving" layer={4}>
              <div style={{ fontSize: "13px", color: "var(--muted-foreground)" }}>
                <p>Global CRM</p>
                <p className="font-mono" style={{ color: "var(--warning)", marginTop: "4px" }}>
                  {TRADE_NETWORK.buyers.length + TRADE_NETWORK.suppliers.length} <span style={{ color: "var(--muted-foreground)" }}>partners</span>
                </p>
              </div>
            </StatusCard>

            <StatusCard title="DOCUMENT VAULT" icon={FileIcon} status="SECURED" statusClass="status-triggered" layer={5}>
              <div style={{ fontSize: "13px", color: "var(--muted-foreground)" }}>
                <p>Trade Intelligence</p>
                <p className="font-mono" style={{ color: "var(--primary)", marginTop: "4px" }}>
                  {DOCUMENT_VAULT.length} <span style={{ color: "var(--muted-foreground)" }}>docs verified</span>
                </p>
              </div>
            </StatusCard>

            <StatusCard title="API HUB" icon={PlugIcon} status="SYNCED" statusClass="" layer={6}>
              <div style={{ fontSize: "13px", color: "var(--muted-foreground)" }}>
                <p>Multi-Integration</p>
                <p className="font-mono" style={{ color: "var(--accent)", marginTop: "4px" }}>
                  {API_INTEGRATIONS.filter((a) => a.status === "connected").length}/{API_INTEGRATIONS.length} <span style={{ color: "var(--muted-foreground)" }}>APIs</span>
                </p>
              </div>
            </StatusCard>
          </div>
        </section>

        {/* Command Center + AI CEO */}
        <section style={{ marginBottom: "32px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))",
              gap: "24px",
            }}
          >
            {/* CEO Command Center */}
            <div>
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
                {/* Primary Commands */}
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "16px" }}>
                  <CommandButton variant="primary" onClick={() => setActiveModal("track")}>
                    <MapPinIcon /> TRACK ALL
                  </CommandButton>
                  <CommandButton variant="sea" onClick={() => setActiveModal("logistics")}>
                    <ShipIcon /> LOAD JOB
                  </CommandButton>
                  <CommandButton variant="warning" onClick={() => setActiveModal("withdraw")}>
                    <DollarIcon /> WITHDRAW
                  </CommandButton>
                </div>
                
                {/* Secondary Commands */}
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "16px" }}>
                  <CommandButton variant="bank" onClick={() => setActiveModal("finance")}>
                    <BankIcon /> ATG FINANCE
                  </CommandButton>
                  <CommandButton variant="crypto" onClick={() => setActiveModal("finance")}>
                    <BitcoinIcon /> CRYPTO
                  </CommandButton>
                  <CommandButton variant="accent" onClick={() => setActiveModal("trade")}>
                    <UsersIcon /> TRADE CRM
                  </CommandButton>
                </div>

                {/* Tertiary Commands */}
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "16px" }}>
                  <CommandButton variant="default" onClick={() => setActiveModal("documents")}>
                    <FileIcon /> VAULT
                  </CommandButton>
                  <CommandButton variant="default" onClick={() => setActiveModal("api")}>
                    <PlugIcon /> API HUB
                  </CommandButton>
                </div>

                {/* Command Log */}
                <div
                  style={{
                    background: "var(--background)",
                    borderRadius: "8px",
                    padding: "16px",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10px",
                    maxHeight: "180px",
                    overflow: "auto",
                  }}
                >
                  {commandHistory.slice(-8).map((entry, i) => (
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
                      AWAITING CEO COMMAND_
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI CEO Assistant */}
            <div>
              <h2 style={{ fontSize: "12px", color: "var(--muted-foreground)", fontWeight: 600, marginBottom: "16px", letterSpacing: "0.05em" }}>
                ATG AI CEO (24/7 INTELLIGENCE)
              </h2>
              <AICEOPanel messages={aiMessages} onSendMessage={handleAiMessage} isTyping={isAiTyping} />
            </div>
          </div>
        </section>

        {/* Satellite Network */}
        <section style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "12px", color: "var(--muted-foreground)", fontWeight: 600, marginBottom: "16px", letterSpacing: "0.05em" }}>
            SATELLITE NETWORK - GLOBAL COVERAGE
          </h2>
          <SatelliteNetwork nodes={SATELLITE_NODES} />
        </section>

        {/* Three Column Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {/* Carrier Grid */}
          <section>
            <h2 style={{ fontSize: "12px", color: "var(--muted-foreground)", fontWeight: 600, marginBottom: "16px", letterSpacing: "0.05em" }}>
              LOGISTICS CARRIERS ({CARRIERS.filter(c => c.available).length} SEA + {AIR_CARRIERS.length} AIR + {LAND_CARRIERS.length} LAND)
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
                  gridTemplateColumns: "1fr auto auto auto",
                  padding: "12px 16px",
                  borderBottom: "1px solid var(--border)",
                  fontSize: "10px",
                  color: "var(--muted-foreground)",
                  fontWeight: 600,
                }}
              >
                <span>CARRIER</span>
                <span>MODE</span>
                <span>RATE</span>
                <span>API</span>
              </div>
              <div style={{ maxHeight: "300px", overflow: "auto" }}>
                {CARRIERS.slice(0, 6).map((carrier) => (
                  <div
                    key={carrier.code}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr auto auto auto",
                      padding: "10px 16px",
                      borderBottom: "1px solid var(--border)",
                      fontSize: "12px",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <span style={{ fontWeight: 500 }}>{carrier.name}</span>
                    </div>
                    <span style={{ padding: "2px 6px", background: "rgba(14, 165, 233, 0.2)", color: "#0ea5e9", borderRadius: "4px", fontSize: "9px" }}>SEA</span>
                    <span className="font-mono" style={{ color: carrier.rate <= 245 ? "var(--primary)" : "var(--foreground)" }}>
                      ${carrier.rate}
                    </span>
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: carrier.apiStatus === "connected" ? "var(--primary)" : "var(--destructive)",
                      }}
                    />
                  </div>
                ))}
                {AIR_CARRIERS.slice(0, 2).map((carrier) => (
                  <div
                    key={carrier.code}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr auto auto auto",
                      padding: "10px 16px",
                      borderBottom: "1px solid var(--border)",
                      fontSize: "12px",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <span style={{ fontWeight: 500 }}>{carrier.name}</span>
                    </div>
                    <span style={{ padding: "2px 6px", background: "rgba(139, 92, 246, 0.2)", color: "#8b5cf6", borderRadius: "4px", fontSize: "9px" }}>AIR</span>
                    <span className="font-mono" style={{ color: "var(--foreground)" }}>
                      ${carrier.rate}/kg
                    </span>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--primary)" }} />
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
                    borderLeft: `4px solid ${job.mode === "SEA" ? "#0ea5e9" : job.mode === "AIR" ? "#8b5cf6" : "#84cc16"}`,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                    <div>
                      <p className="font-mono" style={{ fontSize: "10px", color: "var(--muted-foreground)" }}>{job.id}</p>
                      <p className="font-mono" style={{ fontSize: "14px", fontWeight: 600, color: "var(--primary)" }}>{job.container}</p>
                    </div>
                    <div style={{ display: "flex", gap: "6px" }}>
                      <span style={{
                        background: job.mode === "SEA" ? "rgba(14, 165, 233, 0.2)" : job.mode === "AIR" ? "rgba(139, 92, 246, 0.2)" : "rgba(132, 204, 22, 0.2)",
                        color: job.mode === "SEA" ? "#0ea5e9" : job.mode === "AIR" ? "#8b5cf6" : "#84cc16",
                        padding: "3px 6px",
                        borderRadius: "4px",
                        fontSize: "9px",
                        fontWeight: 600,
                      }}>
                        {job.mode}
                      </span>
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", fontSize: "11px" }}>
                    <div>
                      <p style={{ color: "var(--muted-foreground)" }}>Route</p>
                      <p>{job.origin.split(",")[0]} → {job.destination.split(",")[0]}</p>
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
                </div>
              )}
            </div>
          </section>

          {/* Financial Overview */}
          <section>
            <h2 style={{ fontSize: "12px", color: "var(--muted-foreground)", fontWeight: 600, marginBottom: "16px", letterSpacing: "0.05em" }}>
              ATG FINANCE OVERVIEW
            </h2>
            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div
                style={{
                  background: "linear-gradient(135deg, var(--primary), var(--accent))",
                  borderRadius: "8px",
                  padding: "16px",
                  textAlign: "center",
                }}
              >
                <p style={{ fontSize: "10px", color: "rgba(0,0,0,0.7)" }}>TOTAL LIQUIDITY</p>
                <p className="font-mono" style={{ fontSize: "22px", fontWeight: 700, color: "#000" }}>
                  ${totalLiquidity.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </p>
              </div>

              <div style={{
                background: "linear-gradient(135deg, #1e1b4b, #312e81)",
                borderRadius: "8px",
                padding: "12px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
                  <BankIcon />
                  <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.7)" }}>UBA CORPORATE</span>
                </div>
                <p className="font-mono" style={{ fontSize: "16px", fontWeight: 700, color: "#a5b4fc" }}>
                  ₦{ATG_FINANCE_ACCOUNTS.ubaMain.balance.toLocaleString()}
                </p>
              </div>

              <div style={{
                background: "linear-gradient(135deg, #451a03, #78350f)",
                borderRadius: "8px",
                padding: "12px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
                  <BitcoinIcon />
                  <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.7)" }}>CRYPTO PORTFOLIO</span>
                </div>
                <p className="font-mono" style={{ fontSize: "16px", fontWeight: 700, color: "#fbbf24" }}>
                  ${ATG_FINANCE_ACCOUNTS.cryptoWallet.usdValue.toLocaleString()}
                </p>
              </div>

              <div style={{
                background: "var(--muted)",
                borderRadius: "8px",
                padding: "12px",
                display: "flex",
                justifyContent: "space-between",
              }}>
                <span style={{ fontSize: "11px", color: "var(--muted-foreground)" }}>Active Margin</span>
                <span className="font-mono" style={{ fontSize: "14px", fontWeight: 600, color: "var(--primary)" }}>
                  +${totalMargin.toLocaleString()}
                </span>
              </div>

              <button
                onClick={() => setActiveModal("finance")}
                style={{
                  padding: "12px",
                  background: "var(--primary)",
                  color: "var(--primary-foreground)",
                  border: "none",
                  borderRadius: "6px",
                  fontWeight: 600,
                  fontSize: "12px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <RefreshIcon /> MANAGE FINANCE
              </button>
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
          fontSize: "11px",
          color: "var(--muted-foreground)",
          background: "linear-gradient(135deg, rgba(16, 185, 129, 0.02), rgba(34, 211, 238, 0.02))",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span className="font-mono" style={{ color: "var(--primary)" }}>ATG EMPIRE v4.0</span>
          <span style={{ color: "var(--border)" }}>|</span>
          <span>6-LAYER ARCHITECTURE</span>
          <span style={{ color: "var(--border)" }}>|</span>
          <span>AI CEO: 24/7</span>
          <span style={{ color: "var(--border)" }}>|</span>
          <span>SATELLITES: 6 NODES</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span>CEO:</span>
          <span className="font-mono" style={{ color: "var(--foreground)" }}>Aremo Temmy</span>
          <span style={{ color: "var(--border)" }}>|</span>
          <span className="font-mono" style={{ color: "var(--foreground)" }}>Quodri</span>
        </div>
      </footer>

      {/* Modals */}
      <Modal isOpen={activeModal === "track"} onClose={() => setActiveModal(null)} title="TRACK ALL SHIPMENTS - SATELLITE VIEW" wide>
        <TrackAllContent jobs={jobs} satelliteNodes={SATELLITE_NODES} />
      </Modal>

      <Modal isOpen={activeModal === "logistics"} onClose={() => setActiveModal(null)} title="LOGISTICS ENGINE - LOAD JOB" wide>
        <LogisticsEngineContent jobs={jobs} onLoadJob={handleLoadJob} />
      </Modal>

      <Modal isOpen={activeModal === "withdraw"} onClose={() => setActiveModal(null)} title="WITHDRAW MARGIN">
        <WithdrawMarginContent jobs={jobs} accounts={ATG_FINANCE_ACCOUNTS} />
      </Modal>

      <Modal isOpen={activeModal === "finance"} onClose={() => setActiveModal(null)} title="ATG FINANCE - BANK & CRYPTO" wide>
        <ATGFinanceContent accounts={ATG_FINANCE_ACCOUNTS} onTransfer={handleFinanceTransfer} />
      </Modal>

      <Modal isOpen={activeModal === "trade"} onClose={() => setActiveModal(null)} title="GLOBAL TRADE NETWORK - CRM" wide>
        <TradeNetworkContent />
      </Modal>

      <Modal isOpen={activeModal === "documents"} onClose={() => setActiveModal(null)} title="DOCUMENT VAULT - TRADE INTELLIGENCE">
        <DocumentVaultContent />
      </Modal>

      <Modal isOpen={activeModal === "api"} onClose={() => setActiveModal(null)} title="API INTEGRATION HUB" wide>
        <APIHubContent />
      </Modal>
    </div>
  );
}
