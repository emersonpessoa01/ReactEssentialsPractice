import Timer from "../components/Timer";
import UseAppContext from "../hook/UseAppContext";
import BackgroundColorChanger from "../components/BackgroundColorChanger";
import Counter from "../components/Counter";
import Loader from "../components/Loader";
import { TodoList } from "../components/TodoList";
import FilterList from "../components/FilteredList";
import RegisterForm from "../components/RegisterForm";
import FetchPosts from "../components/FetchPosts";
import ImageGallery from "../components/ImageGallery";
import CountdownTimer from "../components/CountdownTimer";
import Tabs from "../components/Tabs";
export default function Main() {
  const { darkMode, loading, currentMode } = UseAppContext();
  return (
    <main className="pt-16">
      <div className="p-6">
        <div className={`flex flex-wrap items-center justify-center max-w-4xl m-auto p-2 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg`}>
          {loading ? (
            <Loader />
          ) : (
            <>
              {currentMode === "counter" && <Counter />}
              {currentMode === "background" && <BackgroundColorChanger />}
              {currentMode === "todo" && <TodoList />}
              {currentMode === "timer" && <Timer />}
              {currentMode === "filter" && <FilterList />}
              {currentMode === "register" && <RegisterForm />}
              {currentMode === "posts" && <FetchPosts />}
              {currentMode === "gallery" && <ImageGallery />}
              {currentMode === "countdown" && <CountdownTimer />}
              {currentMode === "tabs" && <Tabs />}
            </>
          )}
        </div>
      </div>
    </main>
  );
}
