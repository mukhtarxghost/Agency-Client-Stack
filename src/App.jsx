import { useState } from "react";
import InvoiceForm from "./components/InvoiceForm";
import InvoicePreview from "./components/InvoicePreview";
import "./App.css";

function App() {
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

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          INVOICE<span>.</span>
        </div>

        <div className="topbar-label">
          LOCAL INVOICE GENERATOR
        </div>
      </header>

      <main className="workspace">
        <section className="editor">
          <InvoiceForm
            invoice={invoice}
            setInvoice={setInvoice}
          />
        </section>

        <section className="preview-panel">
          <InvoicePreview invoice={invoice} />
        </section>
      </main>
    </div>
  );
}

export default App;