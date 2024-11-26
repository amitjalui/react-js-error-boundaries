import { useState } from "react";
import Navbar from "./components/Navbar";
import LeftDrawer from './components/LeftDrawer';
import Footer from "./components/Footer";
import MainBody from "./components/MainBody";
import "./App.css";

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(prevState => !prevState);
  };

  return (
    <div className="app-container">
      <Navbar toggleDrawer={toggleDrawer} />
      <div className="content-container">
        <LeftDrawer isOpen={isDrawerOpen} />
        <MainBody />
      </div>
      <Footer />
    </div>
  );
};

export default App;
