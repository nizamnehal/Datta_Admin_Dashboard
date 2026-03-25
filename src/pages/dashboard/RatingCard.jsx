import React from 'react'

function RatingCard() {
  const ratings = [
    { star: 5, count: 384, width: "75%" },
    { star: 4, count: 145, width: "40%" },
    { star: 3, count: 24, width: "25%" },
    { star: 2, count: 1, width: "10%" },
    { star: 1, count: 0, width: "0%" }
  ];

  return (
    <div className="bg-white rounded shadow">

      <div className="border-b p-4 font-semibold">
        Rating
      </div>

      <div className="p-6">

        {/* Rating Number */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-5xl font-light">
            4.7 <span className="text-yellow-400 text-xl">★</span>
          </div>

          <div className="text-green-500 text-sm">
            0.4 ▲
          </div>
        </div>

        {/* Rating Bars */}
        {ratings.map((item, index) => (
          <div key={index} className="mb-4">

            <div className="flex justify-between text-sm mb-1">
              <span>⭐ {item.star}</span>
              <span>{item.count}</span>
            </div>

            <div className="w-full h-2 bg-gray-200 rounded">
              <div
                className="h-2 bg-teal-400 rounded"
                style={{ width: item.width }}
              ></div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default RatingCard;