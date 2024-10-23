import React, { useState } from "react";
import axios from "axios";

const AddTransaction = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      // .post("http://localhost:3000/transactions", formData)
      .post(`${process.env.REACT_APP_BASE_URL}/transactions`, formData)
      .then(() => alert("Transaction Added"))
      .catch((error) => console.error("Error adding transaction:", error));
    // refresh window
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h1 className="text-2xl font-bold mb-4">Add Transaction</h1>
      <div className="mb-4">
        <label className="block">Type</label>
        <input
          type="text"
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block">Category</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block">Amount</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block">Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block">Description</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>
      <button
        onClick={handleSubmit}
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default AddTransaction;
