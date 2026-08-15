import InvoiceHeader from "./InvoiceHeader";
import {
  calculateSubtotal,
  calculateTax,
  calculateTotal,
  formatCurrency,
} from "../utils/invoiceUtils";

function InvoicePreview({ invoice }) {
  const subtotal = calculateSubtotal(invoice.items);
  const tax = calculateTax(subtotal, invoice.tax);
  const total = calculateTotal(invoice.items, invoice.tax);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="preview-wrapper">
      <div className="preview-toolbar">
        <span>LIVE PREVIEW</span>

        <button
          type="button"
          onClick={handlePrint}
        >
          PRINT / SAVE PDF
        </button>
      </div>

      <div className="invoice-paper">
        <InvoiceHeader invoice={invoice} />

        <div className="bill-section">
          <div className="bill-to">
            <span className="label">BILL TO</span>

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

          <div className="payment-status">
            <span className="label">STATUS</span>
            <strong>UNPAID</strong>
          </div>
        </div>

        <div className="invoice-table">
          <div className="table-header">
            <span>DESCRIPTION</span>
            <span>QTY</span>
            <span>RATE</span>
            <span>AMOUNT</span>
          </div>

          {invoice.items.map((item) => (
            <div
              className="table-row"
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
                {formatCurrency(
                  item.quantity * item.rate
                )}
              </span>
            </div>
          ))}
        </div>

        <div className="invoice-bottom">
          <div className="invoice-notes">
            {invoice.notes && (
              <>
                <span className="label">NOTES</span>
                <p>{invoice.notes}</p>
              </>
            )}
          </div>

          <div className="totals">
            <div>
              <span>SUBTOTAL</span>
              <strong>
                {formatCurrency(subtotal)}
              </strong>
            </div>

            <div>
              <span>
                TAX ({invoice.tax || 0}%)
              </span>

              <strong>
                {formatCurrency(tax)}
              </strong>
            </div>

            <div className="total-row">
              <span>TOTAL</span>

              <strong>
                {formatCurrency(total)}
              </strong>
            </div>
          </div>
        </div>

        <div className="invoice-footer">
          <span>THANK YOU FOR YOUR BUSINESS.</span>
          <span>INVOICE SYSTEM</span>
        </div>
      </div>
    </div>
  );
}

export default InvoicePreview;