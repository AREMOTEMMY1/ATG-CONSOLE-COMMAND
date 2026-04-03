ATG GLOBAL OPERATING SYSTEM (ATG-OS)

🌍 Overview

ATG-OS is the internal logistics control system for Aremo Temmy Group (ATG).

This system transforms the company from a standard logistics operator into a centralized, CEO-controlled global execution platform.

---

⚙️ System Architecture

1. Frontend (Public Website)

- Landing page
- Request Quote interface
- Brand visibility
- Hosted on Vercel

---

2. Request Engine

- Captures shipment requests from clients/staff
- Converts actions into structured shipment data

Endpoint:

POST /api/shipments/create

---

3. CEO Control Layer (Authority System)

- Only the CEO can approve bookings
- All shipment decisions pass through this layer

Access:

/ceo

---

4. Data Flow (Core Logic)

User → Request Quote → API → Shipment Created → CEO Review → Approval

---

5. Security Model (RBAC)

Role| Email| Access
CEO| ceo.atg@mail.com| FULL CONTROL
Staff| staff.atghub@gmail.com| LIMITED (Create only)

---

🔄 Synchronization Logic

Every action in the system follows this structure:

CREATE → STORE → REVIEW → APPROVE → EXECUTE

- All requests are stored centrally
- No booking happens without CEO approval
- System maintains control integrity

---

🚢 Future Expansion (Already Designed)

- Carrier Intelligence Engine
  
  - Auto-detect vessel availability
  - Switch between Maersk, MSC, CMA CGM

- Telex Release Tracking System

- Financial & Payment Integration

- 24/7 Autonomous Operations

---

🔐 System Philosophy

«"Trust Nobody — Control Everything"»

- CEO is the single authority
- Staff actions are isolated and tracked
- Full audit capability will be implemented

---

🚀 Deployment

- Hosted via Vercel
- Auto-deploy on GitHub push
- API routes handled via Next.js backend

---

📌 Current System State

Module| Status
Website| ✅ Live
Request Engine| 🔧 Active
CEO Control| ⏭ Pending
Staff System| ⏭ Pending
Carrier Engine| 🚀 Planned

---

🧠 Final Note

ATG-OS is not just a website.

It is a logistics command system designed to:

- eliminate dependency
- increase control
- scale globally

---

---

👑 CEO Authority Layer

All shipment operations are controlled under a single-authority model.

- No shipment can be executed without CEO approval
- All requests remain in "PENDING" state until approved
- CEO has full visibility over all system activity

Approval Flow:

REQUEST CREATED → PENDING → CEO APPROVES → EXECUTION READY

Access Control:

- CEO: Full system access
- Staff: Request creation only
- No shared visibility between staff accounts

---
