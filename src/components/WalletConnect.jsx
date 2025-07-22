import React from "react";
import { Button } from "@/components/ui/button"; // If you're using shadcn UI; else replace
import { ethers } from "ethers";

const WalletConnect = ({ setWallet }) => {
  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("Please install MetaMask to use this feature.");
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();

      setWallet({ address: accounts[0], signer });

      console.log("Wallet connected:", accounts[0]);
    } catch (error) {
      console.error("Wallet connection failed:", error);
    }
  };

  return (
    <div className="flex justify-center my-4">
      <Button onClick={connectWallet} className="text-lg px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md">
        🔗 Connect Wallet
      </Button>
    </div>
  );
};

export default WalletConnect;

