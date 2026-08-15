function ProposalForm({ proposal, setProposal }) {
  const update = (field, value) => {
    setProposal((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const input = (label, field, placeholder = "") => (
    <label className="proposal-field">
      <span>{label}</span>

      <input
        type="text"
        value={proposal[field] ?? ""}
        onChange={(e) => update(field, e.target.value)}
        placeholder={placeholder}
      />
    </label>
  );

  const textarea = (label, field, placeholder = "") => (
    <label className="proposal-field proposal-full">
      <span>{label}</span>

      <textarea
        value={proposal[field] ?? ""}
        onChange={(e) => update(field, e.target.value)}
        placeholder={placeholder}
        rows={4}
      />
    </label>
  );

  return (
    <div className="proposal-form">

      <div className="proposal-form-heading">
        <span>CREATE</span>
        <h1>New Proposal</h1>
      </div>

      <section>
        <div className="proposal-section-label">
          PROPOSAL DETAILS
        </div>

        <div className="proposal-grid">
          {input("PROPOSAL #", "proposalNumber")}
          {input("DATE", "date")}
          {input("VALID UNTIL", "validUntil")}
        </div>
      </section>

      <section>
        <div className="proposal-section-label">
          CLIENT
        </div>

        <div className="proposal-grid">
          {input("CLIENT NAME", "clientName", "Client name")}
          {input("COMPANY", "clientCompany", "Company name")}
          {input("EMAIL", "clientEmail", "client@example.com")}
          {input("PHONE", "clientPhone", "+91 00000 00000")}
        </div>
      </section>

      <section>
        <div className="proposal-section-label">
          PROJECT
        </div>

        <div className="proposal-grid">
          {input(
            "PROJECT NAME",
            "projectName",
            "WhatsApp Automation"
          )}

          {input(
            "TIMELINE",
            "timeline",
            "14 days"
          )}

          {input(
            "INVESTMENT",
            "investment",
            "25000"
          )}
        </div>

        {textarea(
          "INTRODUCTION",
          "introduction",
          "Briefly explain the proposed solution..."
        )}

        {textarea(
          "SCOPE OF WORK",
          "scope",
          "What will be included..."
        )}

        {textarea(
          "DELIVERABLES",
          "deliverables",
          "What the client will receive..."
        )}
      </section>

      <section>
        <div className="proposal-section-label">
          COMMERCIALS
        </div>

        {textarea(
          "PAYMENT TERMS",
          "paymentTerms",
          "50% advance, 50% on completion..."
        )}

        {textarea(
          "NEXT STEPS",
          "nextSteps",
          "Approve proposal → sign contract → project begins..."
        )}
      </section>

    </div>
  );
}

export default ProposalForm;