import React from 'react'

function RecentUsers() {

  const users = [
    {
      name: "Isabella Christensen",
      time: "11 MAY 12:56",
      status: "online"
    },
    {
      name: "Mathilde Andersen",
      time: "11 MAY 10:35",
      status: "offline"
    },
    {
      name: "Karla Sorensen",
      time: "9 MAY 17:38",
      status: "online"
    },
    {
      name: "Ida Jorgensen",
      time: "19 MAY 12:56",
      status: "offline"
    },
    {
      name: "Albert Andersen",
      time: "21 July 12:56",
      status: "online"
    }
  ];

  return (
    <div className="bg-white rounded shadow">

      <div className="border-b p-4 font-semibold">
        Recent Users
      </div>

      {users.map((user, index) => (
        <div
          key={index}
          className="flex max-sm:flex-col items-center justify-between p-4 border-b last:border-none"
        >

          {/* User Info */}
          <div className="flex items-center gap-4 max-sm:mb-4">

            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>

            <div>
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-gray-500">
                Lorem Ipsum is simply dummy text of...
              </p>
            </div>

          </div>

          {/* Status */}
          <div className="flex items-center gap-6">

            <span
              className={`w-3 h-3 rounded-full ${
                user.status === "online"
                  ? "bg-green-500"
                  : "bg-red-500"
              }`}
            ></span>

            <span className="text-sm text-gray-500">
              {user.time}
            </span>

            <button className="bg-purple-400 text-white px-3 py-1 rounded text-sm">
              Reject
            </button>

            <button className="bg-teal-400 text-white px-3 py-1 rounded text-sm">
              Approve
            </button>

          </div>

        </div>
      ))}

    </div>
  );
}

export default RecentUsers;