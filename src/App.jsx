import { useState } from "react";

import InvoiceForm from "./components/InvoiceForm";
import InvoicePreview from "./components/InvoicePreview";

import ContractForm from "./components/contract/ContractForm";
import ContractPreview from "./components/contract/ContractPreview";

import ProposalForm from "./components/proposal/ProposalForm";
import ProposalPreview from "./components/proposal/ProposalPreview";

import WelcomeForm from "./components/welcome/WelcomeForm";
import WelcomePreview from "./components/welcome/WelcomePreview";

import { defaultContract } from "./utils/contractUtils";
import { defaultProposal } from "./utils/proposalUtils";
import { defaultWelcome } from "./utils/welcomeUtils";

import "./App.css";

function App() {
  const [activeTool, setActiveTool] = useState("invoice");

  // =====================================================
  // INVOICE
  // =====================================================

  const [invoice, setInvoice] = useState({
    invoiceNumber: "INV-0001",
    date: new Date().toISOString().split("T")[0],

    seller: {
      name: "Vantix",
      email: "offcvantix@gmail.com",
      phone: "+91 9137368991",
      address: "Pune, Maharashtra",
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

  // =====================================================
  // CONTRACT
  // =====================================================

  const [contract, setContract] = useState(defaultContract);

  // =====================================================
  // PROPOSAL
  // =====================================================

  const [proposal, setProposal] = useState(defaultProposal);

  // =====================================================
  // WELCOME
  // =====================================================

  const [welcome, setWelcome] = useState(defaultWelcome);

  // =====================================================
  // PRINT / SAVE PDF
  // =====================================================

  const handlePrint = () => {
    window.print();
  };

  // =====================================================
  // NAVIGATION BUTTON
  // =====================================================

  const navButtonStyle = (tool) => ({
    background: "none",
    border: "none",
    color: activeTool === tool ? "#fff" : "#666",
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "2px",
    padding: "23px 0",
    cursor: "pointer",
    borderBottom:
      activeTool === tool
        ? "1px solid #fff"
        : "1px solid transparent",
  });

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <div className="app">

      {/* =================================================
          TOP BAR
          ================================================= */}

      <header className="topbar">

        <div className="brand">
          VANTIX<span>.</span>
        </div>

        <div className="topbar-label">
          CLIENT STACK
        </div>

      </header>

      {/* =================================================
          TOOL NAVIGATION
          ================================================= */}

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
          type="button"
          onClick={() => setActiveTool("invoice")}
          style={navButtonStyle("invoice")}
        >
          INVOICE
        </button>

        <button
          type="button"
          onClick={() => setActiveTool("contract")}
          style={navButtonStyle("contract")}
        >
          CONTRACT
        </button>

        <button
          type="button"
          onClick={() => setActiveTool("proposal")}
          style={navButtonStyle("proposal")}
        >
          PROPOSAL
        </button>

        <button
          type="button"
          onClick={() => setActiveTool("welcome")}
          style={navButtonStyle("welcome")}
        >
          WELCOME
        </button>

      </nav>

      {/* =================================================
          INVOICE
          ================================================= */}

      {activeTool === "invoice" && (
        <main className="workspace">

          <section className="editor">

            <InvoiceForm
              invoice={invoice}
              setInvoice={setInvoice}
            />

          </section>

          <section className="preview-panel">

            <div className="preview-header">

              <span>
                LIVE PREVIEW
              </span>

              <button
                type="button"
                className="print-button"
                onClick={handlePrint}
              >
                PRINT / SAVE PDF
              </button>

            </div>

            <InvoicePreview
              invoice={invoice}
            />

          </section>

        </main>
      )}

      {/* =================================================
          CONTRACT
          ================================================= */}

      {activeTool === "contract" && (
        <main className="workspace">

          <section className="editor">

            <ContractForm
              contract={contract}
              setContract={setContract}
            />

          </section>

          <section className="preview-panel">

            <div className="preview-header">

              <span>
                LIVE PREVIEW
              </span>

              <button
                type="button"
                className="print-button"
                onClick={handlePrint}
              >
                PRINT / SAVE PDF
              </button>

            </div>

            <ContractPreview
              contract={contract}
            />

          </section>

        </main>
      )}

      {/* =================================================
          PROPOSAL
          ================================================= */}

      {activeTool === "proposal" && (
        <main className="workspace">

          <section className="editor">

            <ProposalForm
              proposal={proposal}
              setProposal={setProposal}
            />

          </section>

          <section className="preview-panel">

            <div className="preview-header">

              <span>
                LIVE PREVIEW
              </span>

              <button
                type="button"
                className="print-button"
                onClick={handlePrint}
              >
                PRINT / SAVE PDF
              </button>

            </div>

            <ProposalPreview
              proposal={proposal}
            />

          </section>

        </main>
      )}

      {/* =================================================
          WELCOME
          ================================================= */}

      {activeTool === "welcome" && (
        <main className="workspace">

          <section className="editor">

            <WelcomeForm
              welcome={welcome}
              setWelcome={setWelcome}
            />

          </section>

          <section className="preview-panel">

            <div className="preview-header">

              <span>
                LIVE PREVIEW
              </span>

              <button
                type="button"
                className="print-button"
                onClick={handlePrint}
              >
                PRINT / SAVE PDF
              </button>

            </div>

            <WelcomePreview
              welcome={welcome}
            />

          </section>

        </main>
      )}

    </div>
  );
}

export default App;