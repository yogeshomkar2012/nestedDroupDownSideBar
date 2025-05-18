import React from "react";

const Header = () => {
  return (
    <div className="bg-blue-500 flex justify-between text-white p-4">
      <div>Logo</div>
      <div className="flex gap-4 font-bold">
        <div className="cursor-pointer">Lout</div>
        <div>/</div>
        <div className="cursor-pointer">Login</div>
      </div>
    </div>
  );
};

export default Header;
