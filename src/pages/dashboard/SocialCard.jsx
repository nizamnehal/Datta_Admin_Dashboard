import React from 'react'

function SocialCard({ icon, likes, percent }) {
  return (
    <div className="bg-white rounded shadow">

      <div className="flex items-center justify-between p-6">
        <div className="text-3xl">{icon}</div>

        <div className="text-right">
          <h2 className="text-xl font-semibold">{likes}</h2>
          <p className="text-green-500">{percent} Total Likes</p>
        </div>
      </div>

      <div className="border-t p-4 text-sm text-gray-500 flex justify-between">
        <span>Target:35,098</span>
        <span>Duration:350</span>
      </div>

    </div>
  );
}

export default SocialCard;
