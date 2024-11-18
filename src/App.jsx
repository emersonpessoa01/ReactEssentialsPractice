import "./styles/globals.css";
import Header from "./pages/Header";
import Sidebar from "./pages/Sidebar";
import { AppContext } from "./context/AppContext";
import AppProvider from "./context/AppProvider";

const App = () => {
  return (
    <AppProvider>
      {/* header */}
      <Header />
      {/* sidebar */}
      <Sidebar />
    </AppProvider>
  );
};
export { AppContext };
export default App;
