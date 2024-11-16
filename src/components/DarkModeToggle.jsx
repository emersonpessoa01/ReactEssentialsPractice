import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white">
      {darkMode ? "Modo Claro" : "Modo Escuro"}
    </button>
  );
};

export default DarkModeToggle;
