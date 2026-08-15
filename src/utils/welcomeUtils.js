export const formatDate = (date) => {
  if (!date) return "";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return parsedDate.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

export const defaultWelcome = {
  welcomeNumber: "WELCOME-0001",
  date: new Date().toISOString().split("T")[0],

  businessName: "Vantix",
  businessEmail: "offcvantix@gmail.com",
  businessPhone: "+91 9137368991",
  businessAddress: "Pune, Maharashtra",

  clientName: "",
  clientCompany: "",
  clientEmail: "",

  projectName: "",
  welcomeMessage: "",
  projectOverview: "",
  communication: "",
  nextSteps: "",

  contactPerson: "Mukhtar Karbelkar",
};