import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from "./components/login";
import Navbar from "./components/navbar";
import About from "./pages/about";

function App() {
  return (
    // <div>
    //   <About />
    // </div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route  path="/" element={<Login />} />
        <Route  path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
