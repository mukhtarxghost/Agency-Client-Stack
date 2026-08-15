export const defaultProposal = {
  proposalNumber: "PROP-0001",
  date: new Date().toISOString().split("T")[0],
  validUntil: "",

  businessName: "Vantix",
  businessEmail: "offcvantix@gmail.com",
  businessPhone: "+91 9137368991",
  businessAddress: "Pune, Maharashtra",

  clientName: "",
  clientCompany: "",
  clientEmail: "",
  clientPhone: "",

  projectName: "",
  introduction: "",
  scope: "",
  deliverables: "",
  timeline: "",
  investment: "",
  paymentTerms: "",
  nextSteps: "",
};

export const formatCurrency = (value) => {
  if (!value) return "₹0.00";

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  }).format(Number(value));
};

export const formatDate = (value) => {
  if (!value) return "";

  return new Date(`${value}T00:00:00`).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};