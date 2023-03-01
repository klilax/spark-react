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
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    localStorage.setItem('theme', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const storedToken = localStorage.getItem('access_token');
    const token =  (storedToken !== null) ? storedToken : '';
// const token = localStorage.getItem('access_key')

    const appHeader = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Basic ${token}`
      }
    }

    if (localStorage.getItem('access_token') !== null) {
      const userInfo = axiosClient.post('/user/detail', null, appHeader)
        .then(res => {
          return res.data
        })
      console.log(token)
      console.log(userInfo)
      setUserData(userInfo)
      // setUserData(null)
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
