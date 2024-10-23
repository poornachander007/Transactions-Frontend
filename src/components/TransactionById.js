// TransactionById.js
import React, { useState } from "react";
import axios from "axios";

const TransactionById = () => {
  const [transaction, setTransaction] = useState(null);
  const [id, setId] = useState("");

  const fetchTransactionById = () => {
    axios
      // .get(`http://localhost:3000/transactions/${id}`)
      .get(`${process.env.REACT_APP_BASE_URL}/transactions/${id}`)
      .then((response) => {
        setTransaction(response.data);
      })
      .catch((error) => {
        console.error("Error fetching transaction:", error);
      });
    // refresh window
    // window.location.reload();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Transaction by ID</h1>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter transaction ID"
        className="border p-2 mb-4"
      />
      <button
        onClick={fetchTransactionById}
        className="bg-blue-500 text-white p-2"
      >
        Fetch Transaction
      </button>

      {transaction && transaction.id && (
        <div className="mt-4 p-4 border">
          <p>Id: {transaction.id}</p>
          <p>Type: {transaction.type}</p>
          <p>Category: {transaction.category}</p>
          <p>Amount: {transaction.amount}</p>
          <p>Date: {transaction.date}</p>
          <p>Description: {transaction.description}</p>
        </div>
      )}
    </div>
  );
};

export default TransactionById;
