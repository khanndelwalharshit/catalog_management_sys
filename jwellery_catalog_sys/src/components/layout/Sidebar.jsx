import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-all duration-300 ease-in-out ${isOpen ? 'w-64' : 'w-16'} overflow-hidden`}>
      <div className="p-4 font-bold text-lg">{isOpen ? 'Jewelry Admin' : 'JA'}</div>
      <nav className="flex flex-col gap-2 px-4">
        <Link to="/" className="hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded">🏠 {isOpen && 'Dashboard'}</Link>
        <Link to="/categories" className="hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded">📁 {isOpen && 'Categories'}</Link>
        <Link to="/products" className="hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded">💍 {isOpen && 'Products'}</Link>
        <Link to="/clients" className="hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded">👥 {isOpen && 'Clients'}</Link>
        <Link to="/inquiries" className="hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded">❓ {isOpen && 'Inquiries'}</Link>
        <Link to="/users" className="hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded">🙍‍♂️ {isOpen && 'Users'}</Link>
        <Link to="/catalogs" className="hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded">📦 {isOpen && 'Catalogs'}</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
