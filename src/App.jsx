import React, { useState } from "react";
import WalletConnect from "./components/WalletConnect";
import RentForm from "./components/RentForm";
import PaymentHistory from "./components/PaymentHistory";
import Dashboard from "./components/Dashboard";
import EmailNotification from "./components/EmailNotification";
import PdfInvoice from "./components/PdfInvoice";

const App = () => {
  const [wallet, setWallet] = useState({ address: "", signer: null });
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [latestPayment, setLatestPayment] = useState(null);

  const handleNewPayment = (payment) => {
    setPaymentHistory((prev) => [...prev, payment]);
    setLatestPayment(payment);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">🏠 Rent Payment DApp</h1>

        {/* Connect Wallet */}
        <WalletConnect setWallet={setWallet} />

        {/* Once wallet is connected */}
        {wallet.address && (
          <>
            {/* Pay Rent */}
            <RentForm
              wallet={wallet}
              onPaymentSuccess={handleNewPayment}
            />

            {/* Email notification and invoice */}
            {latestPayment && (
              <div className="flex flex-col gap-4 my-4">
                <EmailNotification payment={latestPayment} />
                <PdfInvoice payment={latestPayment} />
              </div>
            )}

            {/* Payment History Table */}
            <PaymentHistory paymentHistory={paymentHistory} />

            {/* Dashboard Charts */}
            <Dashboard data={paymentHistory} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
