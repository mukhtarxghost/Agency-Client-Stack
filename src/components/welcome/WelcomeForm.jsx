function WelcomeForm({ welcome, setWelcome }) {
  const update = (field, value) => {
    setWelcome((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const input = (label, field, placeholder = "") => (
    <label className="welcome-field">
      <span>{label}</span>

      <input
        value={welcome[field] ?? ""}
        onChange={(e) => update(field, e.target.value)}
        placeholder={placeholder}
      />
    </label>
  );

  const textarea = (label, field, placeholder = "") => (
    <label className="welcome-field welcome-full">
      <span>{label}</span>

      <textarea
        value={welcome[field] ?? ""}
        onChange={(e) => update(field, e.target.value)}
        placeholder={placeholder}
      />
    </label>
  );

  return (
    <div className="welcome-form">

      <div className="welcome-form-heading">
        <span>ONBOARD</span>
        <h1>Welcome Client</h1>
      </div>

      <section>
        <div className="welcome-section-label">
          DOCUMENT DETAILS
        </div>

        <div className="welcome-grid">
          {input("WELCOME #", "welcomeNumber")}
          {input("DATE", "date")}
        </div>
      </section>

      <section>
        <div className="welcome-section-label">
          CLIENT
        </div>

        <div className="welcome-grid">
          {input("CLIENT NAME", "clientName", "Client name")}
          {input("COMPANY", "clientCompany", "Company name")}
          {input("EMAIL", "clientEmail", "client@example.com")}
        </div>
      </section>

      <section>
        <div className="welcome-section-label">
          PROJECT
        </div>

        <div className="welcome-grid">
          {input(
            "PROJECT NAME",
            "projectName",
            "Website Development"
          )}
        </div>

        {textarea(
          "WELCOME MESSAGE",
          "welcomeMessage",
          "We're excited to have you onboard..."
        )}

        {textarea(
          "PROJECT OVERVIEW",
          "projectOverview",
          "Brief overview of the project..."
        )}
      </section>

      <section>
        <div className="welcome-section-label">
          WORKING TOGETHER
        </div>

        {textarea(
          "COMMUNICATION",
          "communication",
          "Email, WhatsApp, weekly updates..."
        )}

        {textarea(
          "NEXT STEPS",
          "nextSteps",
          "Kickoff → assets → development → review..."
        )}

        {input(
          "PRIMARY CONTACT",
          "contactPerson",
          "Your name"
        )}
      </section>

    </div>
  );
}

export default WelcomeForm;