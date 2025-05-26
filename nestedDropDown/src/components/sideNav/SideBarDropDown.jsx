import { ChevronDown, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const SideBarDropDown = ({
  section,
  isOpen,
  toggleSection,
  toggleSubSection,
  subItemIsOpen,
}) => {
  return (
    <div className="flex flex-col">
      <button
        onClick={() => toggleSection(section.title)}
        className="flex justify-between items-center w-full px-4 py-2 rounded-sm text-left hover:bg-gray-800 cursor-pointer"
      >
        <span>{section.title}</span>
        {isOpen ? <ChevronDown /> : <ChevronRight />}
      </button>
      {isOpen && (
        <div className="px-4 ml-4 flex flex-col">
          {section.dropdownItems.map((item) => (
            <div className="mb-2" key={item.title}>
              <button
                onClick={() => toggleSubSection(item.title)}
                className="flex justify-between items-center w-full text-left py-1 hover:bg-gray-800 text-sm font-medium text-gray-300"
              >
                <span>{item.title}</span>
                {subItemIsOpen === item.title ? (
                  <ChevronDown />
                ) : (
                  <ChevronRight />
                )}
              </button>

              {subItemIsOpen === item.title &&
                item.dropDownItemLinks.map((link) => (
                  <NavLink
                    to={link.linkTo}
                    key={link.title}
                    className={({ isActive }) =>
                      `block text-sm p-4 ml-2 py-1 border-l hover:text-blue-300 ${
                        isActive ? "text-blue-400" : "text-gray-300"
                      }`
                    }
                  >
                    {link.title}
                  </NavLink>
                ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SideBarDropDown;
