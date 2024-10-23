// UpdateTransaction.js
import React, { useState } from "react";
import axios from "axios";

const UpdateTransaction = () => {
  const [id, setId] = useState("");
  const [formData, setFormData] = useState({
    type: "",
    category: "",
    amount: "",
    date: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    axios
      // .put(`http://localhost:3000/transactions/${id}`, formData)
      .put(`${process.env.REACT_APP_BASE_URL}/transactions/${id}`, formData)
      .then((response) => {
        alert("Transaction updated successfully");
      })
      .catch((error) => {
        console.error("Error updating transaction:", error);
        window.location.reload();
      });
    // refresh window
    window.location.reload();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Update Transaction</h1>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter transaction ID"
        className="border p-2 mb-4"
      />
      <input
        type="text"
        name="type"
        value={formData.type}
        onChange={handleChange}
        placeholder="Transaction Type (income/expense)"
        className="border p-2 mb-2"
      />
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
        className="border p-2 mb-2"
      />
      <input
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Amount"
        className="border p-2 mb-2"
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="border p-2 mb-2"
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="border p-2 mb-4"
      />
      <button onClick={handleUpdate} className="bg-blue-500 text-white p-2">
        Update Transaction
      </button>
    </div>
  );
};

export default UpdateTransaction;
