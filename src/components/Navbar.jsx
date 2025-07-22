export default function Navbar({ account, onConnect }) {
  return (
    <div className="flex justify-between items-center py-4">
      <h1 className="text-3xl font-bold text-primary">🏠 TrustRent DApp</h1>
      <button
        onClick={onConnect}
        className="bg-primary text-white px-4 py-2 rounded-xl shadow hover:bg-secondary transition"
      >
        {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : "Connect Wallet"}
      </button>
    </div>
  );
}
