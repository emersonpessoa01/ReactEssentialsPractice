
import Timer from "../components/Timer";
import UseAppContext from "../hook/UseAppContext";
import BackgroundColorChanger from "../components/BackgroundColorChanger";
import Counter from "../components/Counter";
import Loader from "../components/Loader";
import { TodoList } from "../components/TodoList";
import FilterList from "../components/FilteredList";
import RegisterForm from "../components/RegisterForm";
import FetchPosts from "../components/FetchPosts";
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
              {currentMode === "background" && <BackgroundColorChanger />}
              {currentMode === "todo" && <TodoList />}
              {currentMode === "timer" && <Timer />}
              {currentMode ==="filter" && <FilterList />}
              {currentMode === "register" && <RegisterForm />}
              {currentMode === "posts" && <FetchPosts />}
              
            </>
          )}
        </div>
      </div>
    </main>
  );
}
