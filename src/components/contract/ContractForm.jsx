function ContractForm({ contract, setContract }) {
  const update = (field, value) => {
    setContract((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const input = (label, field, placeholder = "") => (
    <label className="contract-field">
      <span>{label}</span>

      <input
        type="text"
        value={contract[field] ?? ""}
        onChange={(e) => update(field, e.target.value)}
        placeholder={placeholder}
      />
    </label>
  );

  const textarea = (label, field, placeholder = "") => (
    <label className="contract-field full">
      <span>{label}</span>

      <textarea
        value={contract[field] ?? ""}
        onChange={(e) => update(field, e.target.value)}
        placeholder={placeholder}
        rows={4}
      />
    </label>
  );

  return (
    <div className="contract-form">

      <div className="contract-form-heading">
        <span>CREATE</span>
        <h1>New Contract</h1>
      </div>

      {/* CONTRACT DETAILS */}
      <section>
        <div className="section-label">
          CONTRACT DETAILS
        </div>

        <div className="contract-grid">
          {input("CONTRACT #", "contractNumber")}
          {input("DATE", "date")}
        </div>
      </section>

      {/* CLIENT */}
      <section>
        <div className="section-label">
          CLIENT
        </div>

        <div className="contract-grid">
          {input("CLIENT NAME", "clientName", "Client name")}
          {input("COMPANY", "clientCompany", "Company name")}
          {input("EMAIL", "clientEmail", "client@example.com")}
          {input("PHONE", "clientPhone", "+91 00000 00000")}
          {input("ADDRESS", "clientAddress", "Client address")}
        </div>
      </section>

      {/* PROJECT */}
      <section>
        <div className="section-label">
          PROJECT
        </div>

        <div className="contract-grid">
          {input(
            "PROJECT NAME",
            "projectName",
            "WhatsApp Automation"
          )}

          {input(
            "SERVICE",
            "service",
            "Automation / Development"
          )}

          {input(
            "TIMELINE",
            "timeline",
            "14 days"
          )}

          {input(
            "TOTAL AMOUNT",
            "totalAmount",
            "25000"
          )}
        </div>

        {textarea(
          "SCOPE OF WORK",
          "scope",
          "Describe exactly what will be provided..."
        )}

        {textarea(
          "DELIVERABLES",
          "deliverables",
          "List the final deliverables..."
        )}
      </section>

      {/* TERMS */}
      <section>
        <div className="section-label">
          TERMS
        </div>

        {textarea(
          "PAYMENT TERMS",
          "paymentTerms",
          "50% advance, 50% on completion..."
        )}

        {textarea(
          "REVISION POLICY",
          "revisionPolicy",
          "Number of revisions included..."
        )}

        {textarea(
          "CANCELLATION / TERMINATION",
          "cancellationPolicy",
          "Cancellation terms..."
        )}

        {textarea(
          "CONFIDENTIALITY",
          "confidentiality",
          "Confidentiality terms..."
        )}
      </section>

      {/* SIGNATURES */}
      <section>
        <div className="section-label">
          SIGNATURES
        </div>

        <div className="contract-grid">
          {input(
            "VANTIX REPRESENTATIVE",
            "businessSigner"
          )}

          {input(
            "CLIENT REPRESENTATIVE",
            "clientSigner"
          )}
        </div>
      </section>

    </div>
  );
}

export default ContractForm;