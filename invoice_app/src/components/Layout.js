import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex overflow-hidden h-screen">
      <Navbar />
      {/* Main Content */}
      <div className="flex-1 mx-auto max-w-2xl py-3 px-3 overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
