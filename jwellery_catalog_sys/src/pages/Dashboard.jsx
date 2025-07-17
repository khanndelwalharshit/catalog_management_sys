import React from "react";

const Dashboard = () => {
  const stats = [
    { label: "Total Users", value: 120 },
    { label: "Total Products", value: 54 },
    { label: "Total Inquiries", value: 30 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow"
          >
            <h2 className="text-xl font-semibold">{stat.label}</h2>
            <p className="text-2xl font-bold mt-2">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
