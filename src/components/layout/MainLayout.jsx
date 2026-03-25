import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex min-h-screen">

      <Sidebar />

      <div className="flex flex-col flex-1 ml-[17vw] min-h-screen">

        <Navbar />

        <div className=" mt-14 flex-1 p-8 bg-[#f4f7fa] ">
          <Outlet />
        </div>

        <Footer />

      </div>

    </div>
  );
}

export default MainLayout;