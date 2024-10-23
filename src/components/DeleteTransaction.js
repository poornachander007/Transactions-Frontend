// DeleteTransaction.js
import React, { useState } from "react";
import axios from "axios";

const DeleteTransaction = () => {
  const [id, setId] = useState("");

  const handleDelete = () => {
    axios
      // .delete(`http://localhost:3000/transactions/${id}`)
      .delete(`${process.env.REACT_APP_BASE_URL}/transactions/${id}`)
      .then((response) => {
        alert("Transaction deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting transaction:", error);
      });
    // refresh window
    window.location.reload();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Delete Transaction</h1>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter transaction ID"
        className="border p-2 mb-4"
      />
      <button onClick={handleDelete} className="bg-red-500 text-white p-2">
        Delete Transaction
      </button>
    </div>
  );
};

export default DeleteTransaction;
