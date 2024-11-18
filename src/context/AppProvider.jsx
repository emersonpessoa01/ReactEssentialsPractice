import { useState } from "react";
import { AppContext } from "./AppContext";

export default function AppProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentMode, setCurrentMode] = useState("counter");
  const [loading, setLoading] = useState(false);

  const handleModuleChange = (moduleId) => {
    setLoading(true);
    setCurrentMode(moduleId);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  /* Para controlar vários useState */

  return (
    <AppContext.Provider
      value={{ darkMode, setDarkMode, sidebarOpen, setSidebarOpen, currentMode, setCurrentMode, loading, setLoading, handleModuleChange }}
    >
      <div className={`min-h-screen ${darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-indigo-950"}`}>
        {/* header */}

        {children}
      </div>
    </AppContext.Provider>
  );
}

import PropTypes from "prop-types";

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
