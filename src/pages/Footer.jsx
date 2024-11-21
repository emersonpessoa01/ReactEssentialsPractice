import UseAppContext from "../hook/UseAppContext";

export default function Footer() {
    const{sidebarOpen, darkMode}=UseAppContext()
  return (
    <footer
      className={`fixed bottom-0 w-full ${sidebarOpen ? "ml-64" : "ml-0"} transition-all duration-300
        ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg p-4 text-center`}
    >
      <p className={darkMode ? "text-gray-300" : "text-gray-600"}>© 2024 React Components Dashboard.Todos os direitos reservados.</p>
    </footer>
  );
}
