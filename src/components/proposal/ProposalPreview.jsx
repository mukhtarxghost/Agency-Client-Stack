import {
  formatCurrency,
  formatDate,
} from "../../utils/proposalUtils";

function ProposalPreview({ proposal }) {
  return (
    <div className="proposal-document">

      <header className="proposal-document-header">

        <div className="proposal-brand">

          <img
            src="/branding/vantix-logo.jpeg"
            alt="Vantix"
            className="document-logo-image"
          />

          <h1>
            {proposal.businessName || "Vantix"}
          </h1>

          <p>
            {proposal.businessAddress}
          </p>

          <p>
            {proposal.businessEmail}

            {proposal.businessPhone &&
              `  ·  ${proposal.businessPhone}`}
          </p>

        </div>

        <div className="proposal-meta">

          <div className="proposal-type">
            PROPOSAL
          </div>

          <div>
            <span>NUMBER</span>

            <strong>
              {proposal.proposalNumber}
            </strong>
          </div>

          <div>
            <span>DATE</span>

            <strong>
              {formatDate(proposal.date)}
            </strong>
          </div>

          {proposal.validUntil && (
            <div>
              <span>VALID UNTIL</span>

              <strong>
                {formatDate(
                  proposal.validUntil
                )}
              </strong>
            </div>
          )}

        </div>

      </header>

      <div className="proposal-rule" />

      <section className="proposal-hero">

        <span>PROPOSAL FOR</span>

        <h2>
          {proposal.projectName ||
            "Project Proposal"}
        </h2>

        <p>
          Prepared for{" "}
          <strong>
            {proposal.clientName ||
              "Client Name"}
          </strong>

          {proposal.clientCompany &&
            ` · ${proposal.clientCompany}`}
        </p>

      </section>

      <section className="proposal-client">

        <div>
          <span>CLIENT</span>

          <strong>
            {proposal.clientName ||
              "Client Name"}
          </strong>

          {proposal.clientCompany && (
            <p>{proposal.clientCompany}</p>
          )}

          <p>{proposal.clientEmail}</p>
          <p>{proposal.clientPhone}</p>
        </div>

        <div>
          <span>PROVIDER</span>

          <strong>
            {proposal.businessName ||
              "Vantix"}
          </strong>

          <p>{proposal.businessEmail}</p>
          <p>{proposal.businessPhone}</p>
        </div>

      </section>

      <section className="proposal-section">

        <div className="proposal-heading">
          <span>01</span>

          <div>
            <small>OVERVIEW</small>
            <h3>The Opportunity</h3>
          </div>
        </div>

        <p>
          {proposal.introduction ||
            "This proposal outlines the recommended solution, scope, deliverables and investment for the project."}
        </p>

      </section>

      <section className="proposal-section">

        <div className="proposal-heading">
          <span>02</span>

          <div>
            <small>SCOPE</small>
            <h3>What We'll Build</h3>
          </div>
        </div>

        <p>
          {proposal.scope ||
            "The proposed scope will be defined according to the client's requirements and agreed before commencement."}
        </p>

      </section>

      <section className="proposal-section">

        <div className="proposal-heading">
          <span>03</span>

          <div>
            <small>DELIVERABLES</small>
            <h3>What You Receive</h3>
          </div>
        </div>

        <p>
          {proposal.deliverables ||
            "Final deliverables will be provided according to the agreed project scope."}
        </p>

      </section>

      <section className="proposal-commercials">

        <div>
          <span>PROJECT TIMELINE</span>

          <strong>
            {proposal.timeline ||
              "To be confirmed"}
          </strong>
        </div>

        <div>
          <span>INVESTMENT</span>

          <strong>
            {formatCurrency(
              proposal.investment
            )}
          </strong>
        </div>

      </section>

      <section className="proposal-section">

        <div className="proposal-heading">
          <span>04</span>

          <div>
            <small>PAYMENT</small>
            <h3>Commercial Terms</h3>
          </div>
        </div>

        <p>
          {proposal.paymentTerms ||
            "Payment terms will be mutually agreed upon before project commencement."}
        </p>

      </section>

      <section className="proposal-section">

        <div className="proposal-heading">
          <span>05</span>

          <div>
            <small>NEXT STEPS</small>
            <h3>Moving Forward</h3>
          </div>
        </div>

        <p>
          {proposal.nextSteps ||
            "Approve this proposal, finalize the agreement and begin the project."}
        </p>

      </section>

      <footer className="proposal-footer">
        <span>
          VANTIX / PROJECT PROPOSAL
        </span>

        <span>
          CONFIDENTIAL
        </span>

        <span>
          {proposal.proposalNumber}
        </span>
      </footer>

    </div>
  );
}

export default ProposalPreview;