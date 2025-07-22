import jsPDF from "jspdf";

export const generateInvoice = (tenant, amount, date) => {
  const doc = new jsPDF();
  doc.setFontSize(16);
  doc.text("Rent Payment Invoice", 20, 20);
  doc.setFontSize(12);
  doc.text(`Tenant: ${tenant}`, 20, 40);
  doc.text(`Amount: ${amount} ETH`, 20, 50);
  doc.text(`Date: ${date}`, 20, 60);
  doc.save(`invoice_${tenant}.pdf`);
};
