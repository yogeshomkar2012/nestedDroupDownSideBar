import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div className="flex min-h-screen">
      <SideNav />
      <div className="flex flex-col  flex-1 min-h-screen">
        <Header />
        <div className="flex-1 p-4 bg-gray-100">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
