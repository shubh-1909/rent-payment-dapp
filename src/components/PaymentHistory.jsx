import React from "react";
import { getTotalPayments } from "../utils/interact.js";

export default function PaymentHistory({ signer, account, totalPaid, refresh }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg transition hover:scale-105">
      <h2 className="text-xl font-semibold mb-2">📜 Payment History</h2>
      <p className="text-gray-700 mb-2">
        Total paid by you: <strong>{totalPaid} ETH</strong>
      </p>
      <button onClick={refresh} className="text-blue-600 hover:underline">
        Refresh
      </button>
    </div>
  );
}
