import React from 'react'

function SalesCard({ title, price, percent, color }) {
  return (
    <div className="bg-white p-6 rounded shadow">

      <p className="text-gray-600">{title}</p>

      <div className="flex justify-between items-center mt-3">
        <h2 className="text-2xl font-semibold">{price}</h2>
        <span className="text-gray-500">{percent}</span>
      </div>

      <div className="w-full h-2 bg-gray-200 rounded mt-4">
        <div
          className={`h-2 rounded ${color}`}
          style={{ width: percent }}
        ></div>
      </div>

    </div>
  );
}

export default SalesCard;