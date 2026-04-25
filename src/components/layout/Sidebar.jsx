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

function Sidebar({ open, setOpen }) {

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-6 py-2 ${
      isActive
        ? "bg-[#3c4960] text-white border-l-4 border-cyan-400"
        : "text-[#A9B7D0] hover:bg-[#3c4960]"
    }`;

  return (
    <>
      {/* Overlay (mobile) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#3F4D67] text-gray-200 flex flex-col z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:w-[17vw]`}
      >
        {/* Logo */}
        <div className="flex items-center px-6 py-5">
          <img src={img} alt="logo" />
        </div>

        <div className="px-6 py-4 text-xs text-[rgb(232,237,247)]">NAVIGATION</div>

        <NavLink to="/" className={linkClass}>
          <Home size={18} />
          Dashboard
        </NavLink>

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

        <div className="px-6 py-4 text-xs text-[rgb(232,237,247)]">PAGES</div>

        <NavLink to="/login" className={linkClass}>
          <Lock size={18} />
          Login
        </NavLink>

        <NavLink to="/register" className={linkClass}>
          <UserPlus size={18} />
          Register
        </NavLink>

        <div className="px-6 py-4 text-xs text-[rgb(232,237,247)]">OTHER</div>

        <NavLink to="/sample" className={linkClass}>
          <Layout size={18} />
          Sample page
        </NavLink>
      </div>
    </>
  );
}

export default Sidebar;