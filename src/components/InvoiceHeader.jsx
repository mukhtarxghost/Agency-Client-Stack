function InvoiceHeader({ invoice }) {
  return (
    <header className="invoice-header">

      {/* LEFT — VANTIX BRAND */}
      <div className="invoice-business">

        <img
          src="/branding/vantix-logo.jpeg"
          alt="Vantix"
          className="invoice-logo"
        />

        <h1>
          {invoice.seller.name || "Vantix"}
        </h1>

        <p>
          {invoice.seller.address || "Pune, Maharashtra"}
        </p>

        <p>
          {invoice.seller.email || "offcvantix@gmail.com"}
          {"  ·  "}
          {invoice.seller.phone || "+91 9137368991"}
        </p>

      </div>

      {/* RIGHT — INVOICE DETAILS */}
      <div className="invoice-header-right">

        <h2>
          INVOICE
        </h2>

        <div className="invoice-meta">

          <div>
            <span>
              NUMBER
            </span>

            <strong>
              {invoice.invoiceNumber}
            </strong>
          </div>

          <div>
            <span>
              DATE
            </span>

            <strong>
              {invoice.date}
            </strong>
          </div>

        </div>

      </div>

    </header>
  );
}

export default InvoiceHeader;