import { useState } from "react";
import { PATHS } from "../../routes/paths";
import SideBarDropDown from "./SideBarDropDown";

const SideNav = () => {
  const [openSection, setOpenSection] = useState(null);
  const [openSubSection, setOpenSubSection] = useState(null);
  const toggleSection = (title) => {
    setOpenSection(openSection === title ? null : title);
  };

  const toggleSubSection = (title) => {
    setOpenSubSection(openSubSection === title ? null : title);
  };

  return (
    <aside className="bg-gray-900 text-white w-64 h-screen shadow-md overflow-y-auto">
      <div className="p-4 text-xl text-center font-bold  border-b border-gray-700 ">
        My App
      </div>
      <nav className=" flex flex-col space-y-1">
        {PATHS.sideNav.map((section) => (
          <SideBarDropDown
            isOpen={openSection === section.title}
            subItemIsOpen={openSubSection}
            key={section.title}
            section={section}
            toggleSubSection={toggleSubSection}
            toggleSection={toggleSection}
          />
        ))}
      </nav>
    </aside>
  );
};

export default SideNav;
