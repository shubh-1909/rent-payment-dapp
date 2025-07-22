import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const Dashboard = ({ data }) => {
  const chartData = data.map((item, i) => ({
    name: `#${i + 1}`,
    amount: Number(item.amount),
  }));

  return (
    <div className="bg-white rounded-xl p-4 mt-6 shadow-md">
      <h2 className="text-xl font-semibold mb-2">📊 Payment Dashboard</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#4f46e5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;
