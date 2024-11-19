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















// import { useState } from "react";
// import "./App.css";
// import ErrorBoundary from "./ErrorBoundary";

// function Alert({ msg }) {
//   if (!msg || typeof msg !== "string") {
//     throw new Error("Message must be string");
//   }

//   return <>{msg}</>;
// }

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <ErrorBoundary fallback={'Alert failled to load'}>
//         <Alert msg={2} />
//       </ErrorBoundary>

//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//       </div>
//     </>
//   );
// }

// export default App;