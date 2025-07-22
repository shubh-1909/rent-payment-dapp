import React, { useState } from "react";
import { payRent } from "../utils/interact.js";
import { toast } from "sonner";
import { FilePlus } from "lucide-react";
import { jsPDF } from "jspdf";

export default function RentForm({ signer, account, onPaid }) {
  const [amount, setAmount] = useState("");

  const generateInvoice = () => {
    const doc = new jsPDF();
    doc.text("Rent Payment Invoice", 20, 20);
    doc.text(`Tenant: ${account}`, 20, 40);
    doc.text(`Amount: ${amount} ETH`, 20, 50);
    doc.text(`Date: ${new Date().toLocaleString()}`, 20, 60);
    doc.save("invoice.pdf");
  };

  const handlePay = async () => {
    if (!signer) return toast.error("Connect your wallet first");
    if (!amount) return toast.error("Enter rent amount");
    try {
      await payRent(signer, amount);
      toast.success("Rent payment successful!");
      generateInvoice();
      onPaid();
    } catch (err) {
      console.error(err);
      toast.error("Payment failed");
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg transition hover:scale-105">
      <h2 className="flex items-center gap-2 text-xl font-semibold mb-4">
        <FilePlus /> Pay Rent
      </h2>
      <input
        type="number"
        placeholder="Amount in ETH"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 w-full mb-3 rounded-md"
      />
      <button
        onClick={handlePay}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
      >
        Pay Now
      </button>
    </div>
  );
}
