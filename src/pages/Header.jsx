const Header = ({ darkMode, setDarkMode, sidebarOpen, setSidebarOpen }) => {
  return (
    <header className={`fixed w-full z-30 flex items-center justify-between h-16 px-6 ${darkMode ? "bg-gray-800" : "bg-white text-indigo-950"}`}>
      <div className="flex items-center space-x-4">
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
          {sidebarOpen ? "🔙" : "🔜"}
        </button>
        <h1 className="text-xl font-bold">React Components</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
          {darkMode ? "🌞" : "🌙"}
        </button>
      </div>
    </header>
  );
};

import PropTypes from "prop-types";

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
  setSidebarOpen: PropTypes.func.isRequired,
};

export default Header;
