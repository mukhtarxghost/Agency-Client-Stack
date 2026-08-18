import {
  formatCurrency,
  formatDate,
  calculateSubtotal,
  calculateTax,
  calculateTotal,
} from "../../utils/invoiceUtils";

function InvoicePreview({ invoice }) {
  const subtotal = calculateSubtotal(invoice.items);
  const taxAmount = calculateTax(subtotal, invoice.tax);
  const total = calculateTotal(subtotal, taxAmount);

  return (
    <div className="invoice-document">

      {/* HEADER */}
      <header className="invoice-document-header">
        <div className="invoice-brand">
          <img
            src="/branding/vantix-logo.jpeg"
            alt="Vantix"
            className="invoice-logo"
          />

          <h1>
            {invoice.seller.name || "YOUR BUSINESS"}
          </h1>

          {invoice.seller.address && (
            <p>{invoice.seller.address}</p>
          )}

          <p>
            {invoice.seller.email}
            {invoice.seller.phone &&
              `  ·  ${invoice.seller.phone}`}
          </p>
        </div>

        <div className="invoice-meta">
          <div className="invoice-type">
            INVOICE
          </div>

          <div>
            <span>NUMBER</span>
            <strong>
              {invoice.invoiceNumber}
            </strong>
          </div>

          <div>
            <span>DATE</span>
            <strong>
              {formatDate(invoice.date)}
            </strong>
          </div>
        </div>
      </header>

      <div className="invoice-rule" />

      {/* CLIENT */}
      <section className="invoice-client">
        <div>
          <span>BILL TO</span>

          <strong>
            {invoice.client.name || "CLIENT NAME"}
          </strong>

          {invoice.client.email && (
            <p>{invoice.client.email}</p>
          )}

          {invoice.client.phone && (
            <p>{invoice.client.phone}</p>
          )}

          {invoice.client.address && (
            <p>{invoice.client.address}</p>
          )}
        </div>

        <div className="invoice-status">
          <span>STATUS</span>

          <strong>
            UNPAID
          </strong>
        </div>
      </section>

      {/* ITEMS */}
      <section className="invoice-items">
        <div className="invoice-items-header">
          <span>DESCRIPTION</span>
          <span>QTY</span>
          <span>RATE</span>
          <span>AMOUNT</span>
        </div>

        {invoice.items.map((item) => {
          const amount =
            Number(item.quantity || 0) *
            Number(item.rate || 0);

          return (
            <div
              className="invoice-item"
              key={item.id}
            >
              <span>
                {item.description || "Service / Product"}
              </span>

              <span>
                {item.quantity}
              </span>

              <span>
                {formatCurrency(item.rate)}
              </span>

              <span>
                {formatCurrency(amount)}
              </span>
            </div>
          );
        })}
      </section>

      {/* TOTALS */}
      <section className="invoice-totals">
        <div className="invoice-total-row">
          <span>SUBTOTAL</span>

          <strong>
            {formatCurrency(subtotal)}
          </strong>
        </div>

        <div className="invoice-total-row">
          <span>
            TAX ({invoice.tax || 0}%)
          </span>

          <strong>
            {formatCurrency(taxAmount)}
          </strong>
        </div>

        <div className="invoice-total-divider" />

        <div className="invoice-total-final">
          <span>TOTAL</span>

          <strong>
            {formatCurrency(total)}
          </strong>
        </div>
      </section>

      {/* NOTES */}
      {invoice.notes && (
        <section className="invoice-notes">
          <span>NOTES</span>

          <p>
            {invoice.notes}
          </p>
        </section>
      )}

      {/* FOOTER */}
      <footer className="invoice-document-footer">
        <span>
          VANTIX / INVOICE
        </span>

        <span>
          THANK YOU FOR YOUR BUSINESS
        </span>

        <span>
          {invoice.invoiceNumber}
        </span>
      </footer>

    </div>
  );
}

export default InvoicePreview;