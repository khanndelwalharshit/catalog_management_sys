import React from "react";
import { Button } from "@/components/ui/button";

const CatalogsTable = () => {
  // Sample catalog data
  const catalogs = [
    {
      id: 1,
      name: "Wedding Collection",
      description: "Traditional gold and diamond wedding rings",
    },
    {
      id: 2,
      name: "Festive Special",
      description: "Colorful stone necklaces for festivals",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Catalog Name</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {catalogs.map((catalog, index) => (
            <tr key={catalog.id} className="border-t">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{catalog.name}</td>
              <td className="px-4 py-2">{catalog.description}</td>
              <td className="px-4 py-2 space-x-2">
                <Button size="sm" variant="outline">
                  Edit
                </Button>
                <Button size="sm" variant="destructive">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CatalogsTable;
