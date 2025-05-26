import { ChevronDown, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const SideBarDropDown = ({ section, toggleSection, isOpen }) => {
  console.log(section.dropdownIntems);
  return (
    <div className="flex flex-col">
      <button className=" flex justify-between items-center w-full px-4 py-2 rounded-sm text-left hover:bg-gray-800 cursor-pointer">
        <span>{section.title}</span>
        {isOpen ? <ChevronRight size={16} /> : <ChevronRight size={16} />}
      </button>
     
    </div>
  );
};

export default SideBarDropDown;
