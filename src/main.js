import './index.css'
import { ethers } from "ethers";

// Contract ABI and address
const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
const abi = [
  "function payRent() public payable",
  "function getTotalPayments(address tenant) public view returns (uint256)",
  "function withdraw() public",
  "function landlord() public view returns (address)"
];

const app = document.getElementById("app");
app.innerHTML = `
  <div class="min-h-screen flex items-center justify-center p-4">
    <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4 text-center">
      <h1 class="text-2xl font-bold text-blue-600">🏠 RentPayment DApp</h1>
      <button id="connectBtn" class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">🔌 Connect Wallet</button>
      <button id="payBtn" class="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 hidden">💸 Pay Rent (1 ETH)</button>
      <button id="checkBtn" class="w-full bg-yellow-400 text-white py-2 rounded hover:bg-yellow-500 hidden">📊 Check My Total</button>
      <button id="withdrawBtn" class="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 hidden">🏦 Withdraw</button>
      <div id="status" class="text-sm mt-4 text-gray-700"></div>
    </div>
  </div>
`;

const provider = new ethers.BrowserProvider(window.ethereum);
let signer, contract, userAddress;

document.getElementById("connectBtn").onclick = async () => {
  await window.ethereum.request({ method: 'eth_requestAccounts' });
  signer = await provider.getSigner();
  userAddress = await signer.getAddress();
  contract = new ethers.Contract(contractAddress, abi, signer);

  const landlord = await contract.landlord();
  const isLandlord = landlord.toLowerCase() === userAddress.toLowerCase();

  document.getElementById("payBtn").classList.remove("hidden");
  document.getElementById("checkBtn").classList.remove("hidden");
  if (isLandlord) document.getElementById("withdrawBtn").classList.remove("hidden");

  setStatus(`✅ Connected: ${userAddress}`);
};

document.getElementById("payBtn").onclick = async () => {
  try {
    const tx = await contract.payRent({ value: ethers.parseEther("1.0") });
    await tx.wait();
    setStatus("✅ Rent paid successfully!");
  } catch (err) {
    setStatus("❌ Error paying rent.");
  }
};

document.getElementById("checkBtn").onclick = async () => {
  try {
    const total = await contract.getTotalPayments(userAddress);
    setStatus(`📊 Total paid: ${ethers.formatEther(total)} ETH`);
  } catch {
    setStatus("❌ Could not fetch total.");
  }
};

document.getElementById("withdrawBtn").onclick = async () => {
  try {
    const tx = await contract.withdraw();
    await tx.wait();
    setStatus("💰 Funds withdrawn successfully!");
  } catch {
    setStatus("❌ Withdraw failed.");
  }
};

function setStatus(message) {
  document.getElementById("status").innerText = message;
}
