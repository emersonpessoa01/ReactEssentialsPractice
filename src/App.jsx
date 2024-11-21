import "./styles/globals.css";
import Header from "./pages/Header";
import Sidebar from "./pages/Sidebar";
import { AppContext } from "./context/AppContext";
import AppProvider from "./context/AppProvider";
import Main from "./pages/Main";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <AppProvider>
      {/* header */}
      <Header />
      {/* sidebar */}
      <Sidebar />
      {/* main content */}
      <Main />
      {/* footer */}
      <Footer />
    </AppProvider>
  );
};
export { AppContext };
export default App;
