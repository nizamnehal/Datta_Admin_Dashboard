import { Search, Sun, Settings, Bell, User } from "lucide-react";

function Navbar({ setOpen }) {   

  return (
    <div className="flex items-center justify-between h-14 w-full md:w-[83vw] fixed bg-white shadow px-8 z-10">

      {/* Hamburger (mobile only) */}
      <button
        className="md:hidden text-2xl mr-3"
        onClick={() => setOpen(true)}
      >
        ☰
      </button>

      {/* Search */}
      <div className="relative w-[280px]">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search..."
          className="w-full border rounded-md pl-10 pr-4 py-2 text-sm outline-none focus:ring-1 focus:ring-gray-300"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        <Sun className="text-gray-500 cursor-pointer" size={20} />
        <Settings className="text-gray-500 cursor-pointer" size={20} />

        <div className="relative">
          <Bell className="text-gray-500 cursor-pointer" size={20} />
          <span className="absolute -top-2 -right-2 bg-green-400 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            3
          </span>
        </div>

        <User className="text-gray-500 cursor-pointer" size={20} />
      </div>
    </div>
  );
}

export default Navbar;