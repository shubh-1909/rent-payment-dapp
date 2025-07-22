import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const PdfInvoice = ({ payment }) => {
  const generatePdf = () => {
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("🏠 Rent Payment Receipt", 20, 20);

    doc.setFontSize(12);
    doc.text(`Date: ${new Date(payment.date).toLocaleString()}`, 20, 30);
    doc.text(`From: ${payment.from}`, 20, 40);
    doc.text(`To: ${payment.to}`, 20, 50);
    doc.text(`Amount: ${payment.amount} ETH`, 20, 60);
    doc.text(`Transaction Hash:`, 20, 70);

    doc.setFontSize(10);
    doc.text(payment.txHash, 20, 80);

    doc.autoTable({
      startY: 100,
      head: [["Field", "Value"]],
      body: [
        ["From", payment.from],
        ["To", payment.to],
        ["Amount", `${payment.amount} ETH`],
        ["Date", new Date(payment.date).toLocaleString()],
        ["Tx Hash", payment.txHash],
      ],
    });

    doc.save("rent_invoice.pdf");
  };

  return (
    <button
      onClick={generatePdf}
      className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg mt-4 transition-transform duration-300 transform hover:scale-105 shadow-md"
    >
      📄 Download Invoice (PDF)
    </button>
  );
};

export default PdfInvoice;
