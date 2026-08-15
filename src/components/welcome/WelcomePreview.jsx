import { formatDate } from "../../utils/welcomeUtils";

function WelcomePreview({ welcome }) {
  return (
    <div className="welcome-document">

      <header className="welcome-document-header">

        <div className="welcome-brand">
          <h1>{welcome.businessName || "Vantix"}</h1>
          <p>{welcome.businessAddress}</p>
          <p>{welcome.businessEmail}</p>
        </div>

        <div className="welcome-meta">
          <div className="welcome-type">
            WELCOME
          </div>

          <div>
            <span>NUMBER</span>
            <strong>{welcome.welcomeNumber}</strong>
          </div>

          <div>
            <span>DATE</span>
            <strong>{formatDate(welcome.date)}</strong>
          </div>
        </div>

      </header>

      <div className="welcome-rule" />

      <section className="welcome-hero">

        <span>WELCOME ABOARD</span>

        <h2>
          {welcome.clientName
            ? `Welcome, ${welcome.clientName}.`
            : "Welcome aboard."}
        </h2>

        <p>
          We're excited to have{" "}
          <strong>
            {welcome.clientCompany || "you"}
          </strong>{" "}
          working with {welcome.businessName || "Vantix"}.
        </p>

      </section>

      <section className="welcome-client">

        <div>
          <span>CLIENT</span>

          <strong>
            {welcome.clientName || "Client Name"}
          </strong>

          <p>
            {welcome.clientCompany}
          </p>

          <p>
            {welcome.clientEmail}
          </p>
        </div>

        <div>
          <span>PROJECT</span>

          <strong>
            {welcome.projectName || "Your Project"}
          </strong>

          <p>
            {welcome.welcomeNumber}
          </p>
        </div>

      </section>

      <section className="welcome-section">

        <div className="welcome-heading">
          <span>01</span>

          <div>
            <small>WELCOME</small>
            <h3>We're glad you're here.</h3>
          </div>
        </div>

        <p>
          {welcome.welcomeMessage ||
            "We're excited to work together and turn your ideas into something exceptional."}
        </p>

      </section>

      <section className="welcome-section">

        <div className="welcome-heading">
          <span>02</span>

          <div>
            <small>PROJECT</small>
            <h3>What we're working on</h3>
          </div>
        </div>

        <p>
          {welcome.projectOverview ||
            "Your project overview will appear here."}
        </p>

      </section>

      <section className="welcome-section">

        <div className="welcome-heading">
          <span>03</span>

          <div>
            <small>COMMUNICATION</small>
            <h3>How we'll work together</h3>
          </div>
        </div>

        <p>
          {welcome.communication ||
            "We'll keep communication clear, simple and consistent throughout the project."}
        </p>

      </section>

      <section className="welcome-section">

        <div className="welcome-heading">
          <span>04</span>

          <div>
            <small>NEXT STEPS</small>
            <h3>Let's get started</h3>
          </div>
        </div>

        <p>
          {welcome.nextSteps ||
            "We'll confirm the requirements, collect the necessary assets and begin the project."}
        </p>

      </section>

      <div className="welcome-contact">

        <span>YOUR PRIMARY CONTACT</span>

        <strong>
          {welcome.contactPerson || "Vantix Team"}
        </strong>

        <p>
          {welcome.businessEmail}
        </p>

      </div>

      <footer className="welcome-footer">
        <span>VANTIX / CLIENT ONBOARDING</span>
        <span>CONFIDENTIAL</span>
        <span>{welcome.welcomeNumber}</span>
      </footer>

    </div>
  );
}

export default WelcomePreview;