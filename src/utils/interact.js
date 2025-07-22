import { ethers } from "ethers";
import RentPaymentABI from "./RentPaymentABI.json";

const CONTRACT_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"; // Replace this

let contract;

function getContract(signerOrProvider) {
  return new ethers.Contract(CONTRACT_ADDRESS, RentPaymentABI, signerOrProvider);
}

export async function payRent(signer, amount) {
  try {
    const contract = getContract(signer);
    const tx = await contract.payRent({ value: ethers.utils.parseEther(amount.toString()) });
    await tx.wait();
    return true;
  } catch (err) {
    console.error("payRent failed:", err);
    return false;
  }
}

export async function getAllPayments(provider) {
  try {
    const contract = getContract(provider);
    const payments = await contract.getAllPayments();
    return payments.map((p) => ({
      tenant: p.tenant,
      amount: ethers.utils.formatEther(p.amount),
      timestamp: new Date(p.timestamp.toNumber() * 1000).toLocaleString(),
    }));
  } catch (err) {
    console.error("getAllPayments failed:", err);
    return [];
  }
}

export async function getTotalPayments(provider) {
  try {
    const contract = getContract(provider);
    const total = await contract.getTotalPayments();
    return ethers.utils.formatEther(total);
  } catch (err) {
    console.error("getTotalPayments failed:", err);
    return "0";
  }
}

