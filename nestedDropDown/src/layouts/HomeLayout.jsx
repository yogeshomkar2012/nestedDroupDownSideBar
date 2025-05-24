import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../components/sideNav/SideNav";

const HomeLayout = () => {
  return (
    <div className="flex">
      <SideNav />
      <div className="bg-gray-100 flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
