import { useState } from "react";
import { PATHS } from "../../routes/paths";
import SideBarDropDown from "./SideBarDropDown";

const SideNav = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (title) => {
    setOpenSection(openSection === title ? null : title);
  };
  return (
    <aside className="bg-gray-900 text-white w-64 h-screen shadow-md overflow-y-auto">
      <div className="p-4 text-xl text-center font-bold  border-b border-gray-700 ">
        My App
      </div>
      <nav>
        {PATHS.sideNav.map((section) => (
          <SideBarDropDown
            key={section.title}
            section={section}
            toggleSection={toggleSection}
            isopen={openSection === section.title}
          />
        ))}
      </nav>
    </aside>
  );
};

export default SideNav;
