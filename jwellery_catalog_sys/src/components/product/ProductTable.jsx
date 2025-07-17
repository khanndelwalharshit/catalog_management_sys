import React from "react";

const dummyProducts = [
  { id: 1, name: "Gold Ring", price: "1200", category: "Rings", description: "22k gold ring" },
  { id: 2, name: "Diamond Necklace", price: "4500", category: "Necklace", description: "Real diamonds" },
  { id: 3, name: "Silver Bracelet", price: "800", category: "Bracelet", description: "925 silver" }
];

const ProductTable = () => {
  return (
    <div className="overflow-x-auto bg-white dark:bg-gray-900 rounded-lg shadow">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
          <tr>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Price</th>
            <th className="px-6 py-3">Category</th>
            <th className="px-6 py-3">Description</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dummyProducts.map((product) => (
            <tr key={product.id} className="border-b dark:border-gray-700">
              <td className="px-6 py-4">{product.name}</td>
              <td className="px-6 py-4">₹{product.price}</td>
              <td className="px-6 py-4">{product.category}</td>
              <td className="px-6 py-4">{product.description}</td>
              <td className="px-6 py-4">
                <button className="text-blue-600 hover:underline mr-2">Edit</button>
                <button className="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
