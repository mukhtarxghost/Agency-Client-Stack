import InvoiceItems from "./InvoiceItems";

function InvoiceForm({ invoice, setInvoice }) {
  const updateSection = (section, field, value) => {
    setInvoice((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const updateInvoice = (field, value) => {
    setInvoice((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="form-container">
      <div className="form-heading">
        <div>
          <span className="eyebrow">CREATE</span>
          <h1>New Invoice</h1>
        </div>

        <div className="invoice-number">
          <label>INVOICE #</label>
          <input
            type="text"
            value={invoice.invoiceNumber}
            onChange={(e) =>
              updateInvoice("invoiceNumber", e.target.value)
            }
          />
        </div>
      </div>

      <div className="form-section">
        <div className="section-title">Invoice Details</div>

        <div className="form-grid">
          <div className="field">
            <label>DATE</label>
            <input
              type="date"
              value={invoice.date}
              onChange={(e) =>
                updateInvoice("date", e.target.value)
              }
            />
          </div>

          <div className="field">
            <label>TAX (%)</label>
            <input
              type="number"
              min="0"
              value={invoice.tax}
              onChange={(e) =>
                updateInvoice("tax", Number(e.target.value))
              }
            />
          </div>
        </div>
      </div>

      <div className="form-section">
        <div className="section-title">From</div>

        <div className="form-grid">
          <div className="field">
            <label>BUSINESS NAME</label>
            <input
              type="text"
              placeholder="Your business"
              value={invoice.seller.name}
              onChange={(e) =>
                updateSection("seller", "name", e.target.value)
              }
            />
          </div>

          <div className="field">
            <label>EMAIL</label>
            <input
              type="email"
              placeholder="hello@example.com"
              value={invoice.seller.email}
              onChange={(e) =>
                updateSection("seller", "email", e.target.value)
              }
            />
          </div>

          <div className="field">
            <label>PHONE</label>
            <input
              type="text"
              placeholder="+91 00000 00000"
              value={invoice.seller.phone}
              onChange={(e) =>
                updateSection("seller", "phone", e.target.value)
              }
            />
          </div>

          <div className="field full-width">
            <label>ADDRESS</label>
            <textarea
              placeholder="Business address"
              value={invoice.seller.address}
              onChange={(e) =>
                updateSection("seller", "address", e.target.value)
              }
            />
          </div>
        </div>
      </div>

      <div className="form-section">
        <div className="section-title">Bill To</div>

        <div className="form-grid">
          <div className="field">
            <label>CLIENT NAME</label>
            <input
              type="text"
              placeholder="Client name"
              value={invoice.client.name}
              onChange={(e) =>
                updateSection("client", "name", e.target.value)
              }
            />
          </div>

          <div className="field">
            <label>EMAIL</label>
            <input
              type="email"
              placeholder="client@example.com"
              value={invoice.client.email}
              onChange={(e) =>
                updateSection("client", "email", e.target.value)
              }
            />
          </div>

          <div className="field">
            <label>PHONE</label>
            <input
              type="text"
              placeholder="+91 00000 00000"
              value={invoice.client.phone}
              onChange={(e) =>
                updateSection("client", "phone", e.target.value)
              }
            />
          </div>

          <div className="field full-width">
            <label>ADDRESS</label>
            <textarea
              placeholder="Client address"
              value={invoice.client.address}
              onChange={(e) =>
                updateSection("client", "address", e.target.value)
              }
            />
          </div>
        </div>
      </div>

      <InvoiceItems
        items={invoice.items}
        setInvoice={setInvoice}
      />

      <div className="form-section">
        <div className="section-title">Notes</div>

        <div className="field">
          <textarea
            className="notes-input"
            placeholder="Payment terms, thank you message, additional notes..."
            value={invoice.notes}
            onChange={(e) =>
              updateInvoice("notes", e.target.value)
            }
          />
        </div>
      </div>
    </div>
  );
}

export default InvoiceForm;