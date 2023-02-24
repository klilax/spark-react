import React, { useState, useEffect }  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from "./pages/login";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Home from "./pages/home";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('theme');
    return savedDarkMode !== null ? JSON.parse(savedDarkMode) : false;
  })

  useEffect(() => {
    localStorage.setItem('theme', darkMode);
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkMode(!darkMode)
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
