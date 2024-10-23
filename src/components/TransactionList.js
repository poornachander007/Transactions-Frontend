import React, { useState, useEffect } from "react";
import axios from "axios";
console.log(process.env.REACT_APP_BASE_URL);

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      // .get("http://localhost:3000/transactions")
      .get(`${process.env.REACT_APP_BASE_URL}/transactions`)
      .then((response) => setTransactions(response.data))
      .catch((error) => console.error("Error fetching transactions:", error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>
      <table className="min-w-full bg-white shadow-md rounded">
        <thead>
          <tr>
            <th className="py-2 px-4 border">ID</th>
            <th className="py-2 px-4 border">Type</th>
            <th className="py-2 px-4 border">Category</th>
            <th className="py-2 px-4 border">Amount</th>
            <th className="py-2 px-4 border">Date</th>
            <th className="py-2 px-4 border">Description</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="py-2 px-4 border">{transaction.id}</td>
              <td className="py-2 px-4 border">{transaction.type}</td>
              <td className="py-2 px-4 border">{transaction.category}</td>
              <td className="py-2 px-4 border">{transaction.amount}</td>
              <td className="py-2 px-4 border">{transaction.date}</td>
              <td className="py-2 px-4 border">{transaction.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
