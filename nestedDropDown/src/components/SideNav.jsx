import { NavLink } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

const SideNav = () => {
  const [openDropDown, setOpenDropDown] = useState(null);
  const [openSubDropDown, setOpenSubDropDown] = useState(null);
  const toggleDropDown = (key) => {
    setOpenDropDown((prev) => (prev === key ? null : key));
  };

  const toggleSubDropDown = (key) => {
    setOpenSubDropDown((prev) => (prev === key ? null : key));
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
              onClick={() => toggleDropDown("product")}
              className="w-full text-left py-2 px-4 rounded  hover:bg-gray-800 flex justify-between items-center"
            >
              <span>Product Management</span>
              {openDropDown === "product" ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </button>

            {openDropDown == "product" && (
              <ul className="ml-6">
                <li className=" px-4 py-1   capitalize  rounded cursor-pointer">
                  <button
                    onClick={() => toggleSubDropDown("productSub")}
                    className={
                      "w-full cursor-pointer text-left py-2 px-4 rounded  hover:bg-gray-800 flex justify-between items-center"
                    }
                  >
                    product
                    {openSubDropDown === "productSub" ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                  </button>
                  {openSubDropDown && (
                    <ul>
                      <li>
                        <NavLink
                          to="/admin/products"
                          className={({ isActive }) =>
                            `px-4 py-1.5 text-sm  block w-full}  ${
                              isActive ? "bg-gray-800 font-semibold" : ""
                            }`
                          }
                        >
                          Products List
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/admin/product/create"
                          className={({ isActive }) =>
                            `px-4 py-1.5 text-sm  block w-full}  ${
                              isActive ? "bg-gray-800 font-semibold" : ""
                            }`
                          }
                        >
                          Create Product
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>
             
              </ul>
            )}
          </li>
          {/* Product management dropdown */}
          {/* User management dropdown */}
          <li>
            <button
              onClick={() => toggleDropDown("user")}
              className="w-full text-left py-2 px-4 rounded  hover:bg-gray-800 flex justify-between items-center"
            >
              <span>User Management</span>
              {openDropDown === "user" ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </button>

            {openDropDown == "user" && (
              <ul className="ml-6">
                <li className=" px-4 py-1   capitalize  rounded cursor-pointer">
                  <NavLink
                    className={({ isActive }) =>
                      `px-4 py-1.5 text-sm  block w-full}  ${
                        isActive ? "bg-gray-800 font-semibold" : ""
                      }`
                    }
                    to="/admin/users"
                  >
                    Users List
                  </NavLink>
                </li>
                <li className=" capitalize  px-4 py-1 rounded cursor-pointer">
                  <NavLink
                    className={({ isActive }) =>
                      `px-4 py-1.5 text-sm  block w-full}  ${
                        isActive ? "bg-gray-800 font-semibold" : ""
                      }`
                    }
                    to="/admin/user/create"
                  >
                    User create
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          {/* User management dropdown */}
        </ul>
      </nav>
    </aside>
  );
};

export default SideNav;
