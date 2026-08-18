import {
  formatCurrency,
  formatDate,
} from "../../utils/contractUtils";

function ContractPreview({ contract }) {
  return (
    <div className="contract-document">

      <header className="contract-document-header">
        <div className="document-brand">

          <img
            src="/branding/vantix-logo.jpeg"
            alt="Vantix"
            className="document-logo-image"
          />

          <h1>
            {contract.businessName || "Vantix"}
          </h1>

          <p>
            {contract.businessAddress ||
              "Pune, Maharashtra"}
          </p>

          <p>
            {contract.businessEmail}
            {contract.businessPhone &&
              `  ·  ${contract.businessPhone}`}
          </p>
        </div>

        <div className="document-meta">
          <div className="document-type">
            AGREEMENT
          </div>

          <div>
            <span>CONTRACT</span>
            <strong>
              {contract.contractNumber}
            </strong>
          </div>

          <div>
            <span>DATE</span>
            <strong>
              {formatDate(contract.date)}
            </strong>
          </div>
        </div>
      </header>

      <div className="document-rule" />

      <section className="contract-intro">
        <div className="eyebrow">
          SERVICE AGREEMENT
        </div>

        <h2>
          {contract.projectName ||
            "Project Agreement"}
        </h2>

        <p>
          This agreement is entered into between{" "}
          <strong>
            {contract.businessName || "Vantix"}
          </strong>{" "}
          and{" "}
          <strong>
            {contract.clientName || "the Client"}
          </strong>
          .
        </p>
      </section>

      <section className="contract-parties">

        <div className="party">
          <span className="section-number">
            01
          </span>

          <div>
            <span className="document-label">
              SERVICE PROVIDER
            </span>

            <h3>
              {contract.businessName || "Vantix"}
            </h3>

            <p>{contract.businessEmail}</p>
            <p>{contract.businessPhone}</p>
            <p>{contract.businessAddress}</p>
          </div>
        </div>

        <div className="party">
          <span className="section-number">
            02
          </span>

          <div>
            <span className="document-label">
              CLIENT
            </span>

            <h3>
              {contract.clientName ||
                "Client Name"}
            </h3>

            {contract.clientCompany && (
              <p>{contract.clientCompany}</p>
            )}

            <p>{contract.clientEmail}</p>
            <p>{contract.clientPhone}</p>
            <p>{contract.clientAddress}</p>
          </div>
        </div>

      </section>

      <section className="contract-section">
        <div className="section-heading">
          <span>03</span>

          <div>
            <small>PROJECT</small>
            <h3>Engagement Overview</h3>
          </div>
        </div>

        <div className="project-summary">

          <div>
            <span>SERVICE</span>
            <strong>
              {contract.service ||
                "Professional Service"}
            </strong>
          </div>

          <div>
            <span>TIMELINE</span>
            <strong>
              {contract.timeline ||
                "To be confirmed"}
            </strong>
          </div>

          <div>
            <span>PROJECT VALUE</span>
            <strong>
              {formatCurrency(
                contract.totalAmount
              )}
            </strong>
          </div>

        </div>
      </section>

      <section className="contract-section">

        <div className="section-heading">
          <span>04</span>

          <div>
            <small>SCOPE</small>
            <h3>Scope of Work</h3>
          </div>
        </div>

        <p className="contract-copy">
          {contract.scope ||
            "The scope of work will be defined and agreed upon by both parties before project commencement."}
        </p>

      </section>

      <section className="contract-section">

        <div className="section-heading">
          <span>05</span>

          <div>
            <small>DELIVERABLES</small>
            <h3>What will be delivered</h3>
          </div>
        </div>

        <p className="contract-copy">
          {contract.deliverables ||
            "Project deliverables will be completed according to the agreed scope and timeline."}
        </p>

      </section>

      <section className="contract-section">

        <div className="section-heading">
          <span>06</span>

          <div>
            <small>PAYMENT</small>
            <h3>Commercial Terms</h3>
          </div>
        </div>

        <div className="payment-box">

          <div>
            <span>TOTAL PROJECT VALUE</span>

            <strong>
              {formatCurrency(
                contract.totalAmount
              )}
            </strong>
          </div>

          <div>
            <span>PAYMENT TERMS</span>

            <p>
              {contract.paymentTerms ||
                "Payment terms will be mutually agreed upon before commencement."}
            </p>
          </div>

        </div>

      </section>

      <section className="contract-terms">

        <div className="term">
          <span>07</span>

          <div>
            <small>REVISIONS</small>

            <p>
              {contract.revisionPolicy ||
                "Revisions will be handled according to the agreed project scope."}
            </p>
          </div>
        </div>

        <div className="term">
          <span>08</span>

          <div>
            <small>TERMINATION</small>

            <p>
              {contract.cancellationPolicy ||
                "Either party may terminate the agreement with written notice."}
            </p>
          </div>
        </div>

        <div className="term">
          <span>09</span>

          <div>
            <small>CONFIDENTIALITY</small>

            <p>
              {contract.confidentiality ||
                "Both parties agree to keep confidential information private."}
            </p>
          </div>
        </div>

      </section>

      <section className="contract-signatures">

        <div className="signature">

          <div className="signature-space" />

          <div className="signature-line" />

          <strong>
            {contract.businessSigner ||
              "Vantix Representative"}
          </strong>

          <span>FOR VANTIX</span>

        </div>

        <div className="signature">

          <div className="signature-space" />

          <div className="signature-line" />

          <strong>
            {contract.clientSigner ||
              "Client Representative"}
          </strong>

          <span>FOR CLIENT</span>

        </div>

      </section>

      <footer className="contract-document-footer">
        <span>VANTIX / CLIENT AGREEMENT</span>
        <span>CONFIDENTIAL</span>
        <span>{contract.contractNumber}</span>
      </footer>

    </div>
  );
}

export default ContractPreview;