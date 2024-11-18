import { useState } from "react";
import "./styles/globals.css";
import Header from "./pages/Header";
import Sidebar from "./pages/Sidebar";
import { AppContext } from "./context/AppContext";


const App = () => {
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

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode, sidebarOpen, setSidebarOpen, currentMode, setCurrentMode, loading, setLoading }}>
      <div className={`min-h-screen ${darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-indigo-950"}`}>
        {/* header */}
        <Header darkMode={darkMode} setDarkMode={setDarkMode} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} darkMode={darkMode} handleModuleChange={handleModuleChange} currentMode={currentMode} />
      </div>
    </AppContext.Provider>
  );
};

export { AppContext };
export default App;
