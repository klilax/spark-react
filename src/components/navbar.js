import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {


  return (
    // <nav className={`flex justify-between items-center h-16 bg-${isDark ? 'gray' : 'green'}-500 text-white`}>
    <nav className="flex justify-between items-center text-black dark:bg-gray-800 500 dark:text-white">
      <div className="flex items-center">
        <Link to="/" className="mr-4 text-lg font-bold">Spark</Link>
        <Link to="/about" className="mr-4">About</Link>
        <Link to="/login" className="mr-4">Login</Link>
      </div>
      <div className="flex items-center">
        {/* eslint-disable-next-line react/prop-types */}
        <button className="mr-4 text-pink-300" onClick={props.toggleDarkMode}>Dark Mode</button>
      </div>
    </nav>
  );
}

export default Navbar;