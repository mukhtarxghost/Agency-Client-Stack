import { useState } from "react";

import InvoiceForm from "./components/InvoiceForm";
import InvoicePreview from "./components/InvoicePreview";

import ContractForm from "./components/contract/ContractForm";
import ContractPreview from "./components/contract/ContractPreview";

import { defaultContract } from "./utils/contractUtils";

import "./App.css";

function App() {
  const [activeTool, setActiveTool] = useState("invoice");

  // ================= INVOICE =================

  const [invoice, setInvoice] = useState({
    invoiceNumber: "INV-0001",
    date: new Date().toISOString().split("T")[0],

    seller: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },

    client: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },

    items: [
      {
        id: 1,
        description: "",
        quantity: 1,
        rate: 0,
      },
    ],

    tax: 0,
    notes: "",
  });

  // ================= CONTRACT =================

  const [contract, setContract] = useState(defaultContract);

  return (
    <div className="app">

      {/* TOP BAR */}
      <header className="topbar">

        <div className="brand">
          {activeTool === "invoice" ? (
            <>
              INVOICE<span>.</span>
            </>
          ) : (
            <>
              VANTIX<span>.</span>
            </>
          )}
        </div>

        <div className="topbar-label">
          {activeTool === "invoice"
            ? "LOCAL INVOICE GENERATOR"
            : "CLIENT STACK / CONTRACT"}
        </div>

      </header>

      {/* TOOL NAVIGATION */}
      <nav
        style={{
          height: "64px",
          display: "flex",
          alignItems: "center",
          gap: "42px",
          padding: "0 54px",
          borderBottom: "1px solid #242424",
          background: "#090909",
        }}
      >

        <button
          onClick={() => setActiveTool("invoice")}
          style={{
            background: "none",
            border: "none",
            color: activeTool === "invoice" ? "#fff" : "#666",
            fontSize: "12px",
            fontWeight: "700",
            letterSpacing: "2px",
            padding: "23px 0",
            cursor: "pointer",
            borderBottom:
              activeTool === "invoice"
                ? "1px solid #fff"
                : "1px solid transparent",
          }}
        >
          INVOICE
        </button>

        <button
          onClick={() => setActiveTool("contract")}
          style={{
            background: "none",
            border: "none",
            color: activeTool === "contract" ? "#fff" : "#666",
            fontSize: "12px",
            fontWeight: "700",
            letterSpacing: "2px",
            padding: "23px 0",
            cursor: "pointer",
            borderBottom:
              activeTool === "contract"
                ? "1px solid #fff"
                : "1px solid transparent",
          }}
        >
          CONTRACT
        </button>

        <button
          disabled
          style={{
            background: "none",
            border: "none",
            color: "#292929",
            fontSize: "12px",
            fontWeight: "700",
            letterSpacing: "2px",
            padding: "23px 0",
          }}
        >
          PROPOSAL <small style={{ marginLeft: "5px" }}>SOON</small>
        </button>

        <button
          disabled
          style={{
            background: "none",
            border: "none",
            color: "#292929",
            fontSize: "12px",
            fontWeight: "700",
            letterSpacing: "2px",
            padding: "23px 0",
          }}
        >
          WELCOME <small style={{ marginLeft: "5px" }}>SOON</small>
        </button>

      </nav>

      {/* ================= INVOICE ================= */}

      {activeTool === "invoice" && (
        <main className="workspace">

          <section className="editor">
            <InvoiceForm
              invoice={invoice}
              setInvoice={setInvoice}
            />
          </section>

          <section className="preview-panel">
            <InvoicePreview
              invoice={invoice}
            />
          </section>

        </main>
      )}

      {/* ================= CONTRACT ================= */}

      {activeTool === "contract" && (
        <main className="workspace">

          <section className="editor">
            <ContractForm
              contract={contract}
              setContract={setContract}
            />
          </section>

          <section className="preview-panel">
            <ContractPreview
              contract={contract}
            />
          </section>

        </main>
      )}

    </div>
  );
}

export default App;