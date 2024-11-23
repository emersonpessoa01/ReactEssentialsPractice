import UseAppContext from "../hook/UseAppContext";

const Header = () => {
  const { darkMode, setDarkMode, sidebarOpen, setSidebarOpen } = UseAppContext();

  return (
    <div className={`fixed top-0 left-0 right-0 ${darkMode ? "bg-gray-800 text-gray-100 !important" : "bg-white text-gray-900 !important"} shadow-sm z-40`}>
      <div className="flex items-center justify-between px-6 py-4">
        {/* Botão do menu hamburger */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)} // Alterna o estado do menu
          className={`${
            darkMode
              ? "text-gray-300 hover:text-white" // Hover claro no modo escuro
              : "text-gray-600 hover:text-gray-900" // Hover escuro no modo claro
          }`}
        >
          {/* Alterna o ícone entre "hamburger" e "x" */}
          <i className={`fas ${sidebarOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
        </button>

        <div className="flex items-center gap-4">
          {/* Botão para alternar o modo escuro */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`${
              darkMode
                ? "text-gray-300 hover:text-white" // Hover claro no modo escuro
                : "text-gray-600 hover:text-gray-900" // Hover escuro no modo claro
            }`}
          >
            <i className={`fas ${darkMode ? "fa-sun" : "fa-moon"} text-xl`}></i>
          </button>
          {/* Nome do usuário */}
          <span className={darkMode ? "text-gray-300" : "text-gray-700"}>Emerson Pessoa</span>
          {/* Ícone do usuário */}
          <div
            className={`w-10 h-10 ${
              darkMode
                ? "bg-indigo-500 hover:bg-indigo-400" // Hover claro no modo escuro
                : "bg-indigo-600 hover:bg-indigo-500" // Hover escuro no modo claro
            } rounded-full flex items-center justify-center text-white`}
          >
            <i className="fas fa-user"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
