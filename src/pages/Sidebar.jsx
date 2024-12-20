import UseAppContext from "../hook/UseAppContext";
import { menuItems } from "./menuItems";

const Sidebar = () => {
  const { sidebarOpen, darkMode, handleModuleChange, setSidebarOpen, currentMode } = UseAppContext();

  return (
    <>
      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setSidebarOpen(false)} // Apenas fecha o sidebar
        ></div>
      )}
      {/* Sidebar */}
      <aside
        className={`fixed z-30 left-0 top-0 h-full w-64 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        } shadow-lg overflow-y-auto`}
      >
        <nav className="pt-20 pl-4 pr-4 pb-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    handleModuleChange(item.id);
                    setSidebarOpen(false); // Fecha o sidebar ao selecionar um item
                  }}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg ${
                    darkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"
                  } transition-colors duration-200 ${
                    currentMode === item.id ? "bg-blue-500 text-white" : ""
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
