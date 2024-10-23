// TransactionSummary.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const TransactionSummary = () => {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    axios
      // .get("http://localhost:3000/transactions/summary")
      .get(`${process.env.REACT_APP_BASE_URL}/transactions/summary`)
      .then((response) => {
        setSummary(response.data);
      })
      .catch((error) => {
        console.error("Error fetching summary:", error);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Transaction Summary</h1>
      {summary && (
        <div className="p-4 border">
          <p>Total Income: {summary.total_income}</p>
          <p>Total Expenses: {summary.total_expense}</p>
          <p>Balance: {summary.balance}</p>
        </div>
      )}
    </div>
  );
};

export default TransactionSummary;
