import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen">

      <Sidebar open={open} setOpen={setOpen} />

      <div className="flex flex-col flex-1 md:ml-[17vw] min-h-screen">

        <Navbar setOpen={setOpen} />

        <div className="mt-14 flex-1 p-8 bg-[#f4f7fa]">
          <Outlet />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;