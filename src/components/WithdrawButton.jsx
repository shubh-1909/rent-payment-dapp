{contract && (
  <div className="flex justify-center mt-4">
    <button
      onClick={async () => {
        try {
          const tx = await contract.withdraw();
          await tx.wait();
          alert("Withdrawal successful!");
        } catch (error) {
          alert("Withdrawal failed");
          console.error(error);
        }
      }}
      className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded"
    >
      Withdraw Funds
    </button>
  </div>
)}
