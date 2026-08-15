function InvoiceHeader({ invoice }) {
  return (
    <div className="invoice-header">
      <div className="invoice-brand">
        <h2>{invoice.seller.name || "YOUR BUSINESS"}</h2>

        {invoice.seller.address && (
          <p>{invoice.seller.address}</p>
        )}

        <div className="contact-line">
          {invoice.seller.email && (
            <span>{invoice.seller.email}</span>
          )}

          {invoice.seller.phone && (
            <span>{invoice.seller.phone}</span>
          )}
        </div>
      </div>

      <div className="invoice-meta">
        <div className="invoice-title">
          INVOICE
        </div>

        <div className="meta-row">
          <span>NUMBER</span>
          <strong>{invoice.invoiceNumber}</strong>
        </div>

        <div className="meta-row">
          <span>DATE</span>
          <strong>{invoice.date || "—"}</strong>
        </div>
      </div>
    </div>
  );
}

export default InvoiceHeader;