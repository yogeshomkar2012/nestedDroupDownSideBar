import { NavLink } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

const SideNav = () => {
  const [openDropDown, setOpenDropDown] = useState(null);
  const toggleDropDown = () => {
    setOpenDropDown(!openDropDown);
  };
  return (
    <aside className="bg-gray-900 text-white w-64 shadow-md top-0 left-0 overflow-y-auto">
      <div className="p-4 text-xl font-bold border-b border-gray-700">
        My App
      </div>
      <nav className="p-2 flex flex-col space-y-2">
        <ul className="flex flex-col space-y-2">
          <li className="hover:bg-gray-800  rounded cursor-pointer">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 hover:bg-gray-800 px-4 ${
                  isActive ? "bg-gray-800 font-semibold" : ""
                }`
              }
            >
              Dashboard
            </NavLink>
          </li>
          {/* Product management dropdown */}
          <li>
            <button
              onClick={() => toggleDropDown()}
              className="w-full text-left py-2 px-4 rounded  hover:bg-gray-800 flex justify-between items-center"
            >
              <span>Product Management</span>
              <ChevronDown />
            </button>

            {openDropDown && (
              <ul className="ml-6">
                <li className=" px-4 py-1   capitalize  rounded cursor-pointer">
                  <NavLink to="/admin/products">products List</NavLink>
                </li>
                <li className=" capitalize  px-4 py-1 rounded cursor-pointer">
                  <NavLink to="/admin/products/create">product create</NavLink>
                </li>
              </ul>
            )}
          </li>
          {/* Product management dropdown */}
          <li className="hover:bg-gray-800 rounded cursor-pointer">
            <button
              className="hover:bg-gray-800 px-3 py-2 rounded cursor-pointer"
              onClick={() => toggleDropDown()}
            >
              User Management
            </button>
            <ul>
              <li>
                <NavLink to="/admin/users">User List</NavLink>
              </li>
              <li>
                <NavLink to="/admin/users/create"> Create User</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideNav;
