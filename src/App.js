import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from "./pages/login";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Home from "./pages/home";

function App() {
  return (
    // <div>
    //   <About />
    // </div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/about" element={<About />} />
        <Route  path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
