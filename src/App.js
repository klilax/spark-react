import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './fileUpload';
import FormExample from "./fileUpload";
import Login from "./components/login";
import Navbar from "./components/navbar";
import About from "./pages/about";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" component={Login} />
        <Route exact path="/about" component={About} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
