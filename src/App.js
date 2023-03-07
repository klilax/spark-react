import React, { useState, useEffect }  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axiosClient from "./api/client";

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
  // const [userData, setUserData] = useState([]);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    localStorage.setItem('theme', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const storedToken = localStorage.getItem('access_token');
    const token =  (storedToken !== null) ? storedToken : '';
    async function fetchUser() {
      const appHeader = {
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }
      const res = await axiosClient.get('/inventory/list',  appHeader);
      setUserData(res.data);
    }

    if (localStorage.getItem('access_token') !== null) {
      fetchUser();
    }
  }, []);

  function toggleDarkMode() {
    setDarkMode(!darkMode)
  }
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <BrowserRouter>
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <Routes>
          <Route  path="/" element={<Home user={userData} />} />
          <Route  path="/about" element={<About />} />
          <Route  path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
