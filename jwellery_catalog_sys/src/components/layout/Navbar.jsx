import React from "react";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggleSidebar }) => {
  return (
    <header className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-4 py-3 shadow flex items-center justify-between">
      <button onClick={toggleSidebar} className="text-xl">
        <FaBars />
      </button>
      <div className="text-lg font-semibold">Admin Panel</div>
    </header>
  );
};

export default Navbar;
