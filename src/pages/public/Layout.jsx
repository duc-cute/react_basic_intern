/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import { Header, SideBar } from "~/components";

const Layout = () => {
  return (
    <div className="grid grid-cols-12">
      <aside className="col-span-2 bg-main h-full max-h-screen overflow-y-auto z-10">
        <SideBar />
      </aside>
      <div className="col-span-10 h-screen bg-gray-200">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
