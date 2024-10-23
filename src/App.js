// App.js
import React from "react";
import Navbar from "./components/Navbar";
import AllTransactions from "./components/TransactionList";
import TransactionById from "./components/TransactionById";
import AddTransaction from "./components/AddTransaction";
import UpdateTransaction from "./components/UpdateTransaction";
import DeleteTransaction from "./components/DeleteTransaction";
import TransactionSummary from "./components/TransactionSummary";

function App() {
  return (
    <div className="flex flex-col justify-center items-start">
      {/* Navbar at the top */}
      <Navbar />

      {/* Adding a spacer to avoid content overlap due to fixed navbar */}
      <div className="pt-20"></div>

      {/* Section: Transaction by ID */}
      <div id="transaction-by-id" className="section w-1/2 h-screen">
        <TransactionById />
      </div>

      {/* Section: Add Transaction */}
      <div id="add-transaction" className="section w-1/2 h-screen">
        <AddTransaction />
      </div>

      {/* Section: Update Transaction */}
      <div id="update-transaction" className="section w-1/2 h-screen">
        <UpdateTransaction />
      </div>

      {/* Section: Delete Transaction */}
      <div id="delete-transaction" className="section w-1/2 h-screen">
        <DeleteTransaction />
      </div>

      {/* Section: Transaction Summary */}
      <div id="transaction-summary" className="section w-1/2 h-screen">
        <TransactionSummary />
      </div>
      {/* Section: All Transactions */}
      <div id="all-transactions" className="section w-1/2 h-screen">
        <AllTransactions />
      </div>
    </div>
  );
}

export default App;
