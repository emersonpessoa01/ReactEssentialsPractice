import UseAppContext from "../hook/UseAppContext";
import Counter from "./Counter";
import Loader from "./Loader";

export default function Main() {
  const { sidebarOpen, darkMode, loading, currentMode } = UseAppContext();
  return (
    <main className={`pt-16 ${sidebarOpen ? "ml-64" : "ml-0"} transition-all duration-300`}>
      <div className="p-6">
        <div className={`p-6 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg`}>
          {loading ? (
            <Loader />
          ) : (
            <>
              {currentMode === "counter" && <Counter />}
              
            </>
          )}
        </div>
      </div>
    </main>
  );
}