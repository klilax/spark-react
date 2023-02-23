import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from "./pages/login";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Home from "./pages/home";

function App() {
  const [darkMode, setDarkMode] = React.useState(true)
  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }
  return (
    // <div>
    //   <About />
    // </div>
    <div className={`${darkMode ? "dark" : ""}`}>
      <BrowserRouter>
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/about" element={<About />} />
          <Route  path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;
