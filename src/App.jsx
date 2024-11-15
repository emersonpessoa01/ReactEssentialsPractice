// src/App.js
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Importação dos componentes


const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="main-content">
        <Header />
        <main>
          <Routes>
            <Route path="/counter" component={Counter} />
            <Route path="/background-color-changer" component={BackgroundColorChanger} />
            <Route path="/todo-list" component={TodoList} />
            <Route path="/timer" component={Timer} />
            <Route path="/filtered-list" component={FilteredList} />
            <Route path="/simple-form" component={SimpleForm} />
            <Route path="/data-fetcher" component={DataFetcher} />
            <Route path="/image-gallery" component={ImageGallery} />
            <Route path="/countdown-timer" component={CountdownTimer} />
            <Route path="/tab-navigation" component={TabNavigation} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
