import React from "react";
import { NavLink } from "react-router-dom";
import img from "/src/assets/images/logo-white.svg";


import {
  Home,
  Palette,
  Type,
  Smile,
  Lock,
  UserPlus,
  Layout
} from "lucide-react";

function Sidebar() {

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-6 py-2 ${
      isActive
        ? "bg-[#3c4960] text-white border-l-4 border-cyan-400"
        : "text-[#A9B7D0] hover:bg-[#3c4960]"
    }`;

  return (
    <div className="w-[17vw] h-screen fixed bg-[#3F4D67] text-gray-200 flex flex-col">

      {/* Logo */}
      <div className="flex items-center px-6 py-5">
        <img src={img} alt="logo and text" />
      </div>

      <div className="px-6 py-4 text-xs text-[rgb(232,237,247)]">NAVIGATION</div>

      <NavLink to="/" className={linkClass}>
        <Home size={18} />
        Dashboard
      </NavLink>

      {/* UI Components */}
      <div className="px-6 py-4 text-xs text-[rgb(232,237,247)]">UI COMPONENTS</div>

      <NavLink to="/color" className={linkClass}>
        <Palette size={18} />
        Color
      </NavLink>

      <NavLink to="/typography" className={linkClass}>
        <Type size={18} />
        Typography
      </NavLink>

      <NavLink to="/icons" className={linkClass}>
        <Smile size={18} />
        Icons
      </NavLink>

      {/* Pages */}
      <div className="px-6 py-4 text-xs text-[rgb(232,237,247)]">PAGES</div>

      <NavLink to="/login" className={linkClass}>
        <Lock size={18} />
        Login
      </NavLink>

      <NavLink to="/register" className={linkClass}>
        <UserPlus size={18} />
        Register
      </NavLink>

      {/* Other */}
      <div className="px-6 py-4 text-xs text-[rgb(232,237,247)]">OTHER</div>

      <NavLink to="/sample" className={linkClass}>
        <Layout size={18} />
        Sample page
      </NavLink>

    </div>
  );
}

export default Sidebar;