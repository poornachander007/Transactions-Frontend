// Navbar.js
import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    // <nav className="fixed top-0 left-0 right-0 bg-purple-600 p-4 shadow-md z-50">
    //   <ul className="flex justify-around space-x-4 text-white font-bold">
    //     <li className="hover:bg-pink-500 rounded-lg p-1 px-2">

    // <nav className="fixed top-0 left-0 right-0 bg-green-600 p-4 shadow-md z-50">
    //   <ul className="flex justify-around space-x-4 text-white font-bold">
    //     <li className="hover:bg-yellow-400 rounded-lg p-1 px-2">

    // <nav className="fixed top-0 left-0 right-0 bg-red-600 p-4 shadow-md z-50">
    //   <ul className="flex justify-around space-x-4 text-white font-bold">
    //     <li className="hover:bg-orange-500 rounded-lg p-1 px-2">

    <nav className="fixed top-0 left-0 right-0 bg-gray-800 p-4 shadow-md z-50">
      <ul className="flex justify-around space-x-4 text-white font-bold">
        <li className="hover:bg-blue-400 rounded-lg p-1 px-2">
          <Link
            activeClass="active"
            to="all-transactions"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            Transactions
          </Link>
        </li>
        <li className="hover:bg-blue-400 rounded-lg p-1 px-2">
          <Link
            activeClass="active"
            to="transaction-by-id"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            TransactionByID
          </Link>
        </li>
        <li className="hover:bg-blue-400 rounded-lg p-1 px-2">
          <Link
            activeClass="active"
            to="add-transaction"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            Add Transaction
          </Link>
        </li>
        <li className="hover:bg-blue-400 rounded-lg p-1 px-2">
          <Link
            activeClass="active"
            to="update-transaction"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            Update Transaction
          </Link>
        </li>
        <li className="hover:bg-blue-400 rounded-lg p-1 px-2">
          <Link
            activeClass="active"
            to="delete-transaction"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            Delete Transaction
          </Link>
        </li>
        <li className="hover:bg-blue-400 rounded-lg p-1 px-2">
          <Link
            activeClass="active"
            to="transaction-summary"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            Summary
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
