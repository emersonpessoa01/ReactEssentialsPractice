// import { useContext } from "react";
// import { AppContext } from "../App";
import { menuItems } from "./menuItems";
import UseAppContext from "../hook/UseAppContext";
const Sidebar = () => {
  // const { sidebarOpen, darkMode, handleModuleChange, currentMode }=useContext(AppContext);
  const { sidebarOpen, darkMode, handleModuleChange, currentMode } = UseAppContext();
  return (
    <aside
      className={`fixed z-30 left-0 top-16 h-[calc(100vh-4rem)] w-64 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
    transition-transform duration-300 ease-in-out ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg overflow-y-auto`}
    >
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleModuleChange(item.id)}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg ${
                  darkMode ? "hover:bg-gray-700" : "hover:bg-gray-400"
                } transition-colors duration-200 ${currentMode === item.id ? "bg-blue-500 text-white" : ""}`}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

// import PropTypes from "prop-types";
// Sidebar.propTypes = {
//   sidebarOpen: PropTypes.bool.isRequired,
//   darkMode: PropTypes.bool.isRequired,
//   handleModuleChange: PropTypes.func.isRequired,
//   currentMode: PropTypes.string.isRequired,
// };

export default Sidebar;
