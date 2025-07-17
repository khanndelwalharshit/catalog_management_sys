import { useEffect, useState } from "react";

const dummyClients = [
  { id: 1, name: "Amit Sharma", email: "amit@example.com", phone: "9876543210" },
  { id: 2, name: "Riya Mehta", email: "riya@example.com", phone: "9876501234" },
];

const ClientTable = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    setClients(dummyClients);
  }, []);

  return (
    <div className="overflow-x-auto border rounded-md">
      <table className="min-w-full bg-white text-sm text-left">
        <thead className="bg-gray-100 text-xs uppercase">
          <tr>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">Phone</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id} className="border-t">
              <td className="px-4 py-2">{client.name}</td>
              <td className="px-4 py-2">{client.email}</td>
              <td className="px-4 py-2">{client.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientTable;
