export const defaultContract = {
  contractNumber: "CNT-0001",
  date: new Date().toISOString().split("T")[0],

  businessName: "Vantix",
  businessEmail: "offcvantix@gmail.com",
  businessPhone: "+91 9137368991",
  businessAddress: "Pune, Maharashtra",

  clientName: "",
  clientEmail: "",
  clientPhone: "",
  clientCompany: "",
  clientAddress: "",

  projectName: "",
  service: "",
  scope: "",
  deliverables: "",
  timeline: "",
  paymentTerms: "",
  totalAmount: "",
  revisionPolicy: "2 rounds of revisions included.",
  cancellationPolicy:
    "Either party may terminate the agreement with written notice.",
  confidentiality:
    "Both parties agree to keep confidential information private.",

  clientSigner: "",
  businessSigner: "Mukhtar Karbelkar",
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

  return new Date(value + "T00:00:00").toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};