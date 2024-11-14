import Dashboard from "./pages/Dashboard";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Sidebar from "./pages/Sidebar";
function App() {
  return (
    <div className="main-content">
      <Header />
      <Sidebar />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
