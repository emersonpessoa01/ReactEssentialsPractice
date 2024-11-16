import { useState } from "react";
import "./styles/globals.css";
import Header from "./pages/Header";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentMode, setCurrentMode] = useState("counter");
  const [loading, setLoading] = useState(false);

  const menuItems = [
    {
      name: "Counter",
      id: "counter",
      icon: "🔢",
    },
    {
      name: "Background",
      id: "background",
      icon: "📝",
    },
    {
      name: "Timer",
      id: "timer",
      icon: "⏲️",
    },
    {
      name: "Filter",
      id: "filter",
      icon: "🔍",
    },
    {
      name: "Registration",
      id: "registration",
      icon: "📝",
    },
    {
      name: "API Posts",
      id: "posts",
      icon: "📡",
    },
    {
      name: "Image Gallery",
      id: "gallery",
      icon: "🖼️",
    },
    {
      name: "Countdown",
      id: "countdown",
      icon: "⏱️",
    },
    {
      name: "Tabs",
      id: "tabs",
      icon: "📑",
    },
  ];

  const handleModuleChange = (moduleId) => {
    setLoading(true);
    setCurrentMode(moduleId);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className={`min-h-screen ${darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-indigo-950"}`}>
      {/* header */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </div>
  );
};
export default App;
