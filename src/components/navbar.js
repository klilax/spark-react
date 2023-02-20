import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isDark, setIsDark] = React.useState(false);

  const handleToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <nav className={`flex justify-between items-center h-16 bg-${isDark ? 'gray' : 'green'}-500 text-white`}>
      <div className="flex items-center">
        <Link to="/" className="mr-4 text-lg font-bold">My App</Link>
        <Link to="/about" className="mr-4">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="flex items-center">
        <button className="mr-4 text-pink-300" onClick={handleToggle}>{isDark ? 'Light' : 'Dark'} Mode</button>
      </div>
    </nav>
  );
}

export default Navbar;