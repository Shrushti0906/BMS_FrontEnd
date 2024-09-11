// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="App-header">
      <h1>Battery Management System</h1>
      
    </header>
  );
};

export default Header;
/*<nav>
        <ul>
          <li><Link to="/">Batteries</Link></li>
          <li><Link to="/water-level">Water Level</Link></li>
          <li><Link to="/fuel-level">Fuel Level</Link></li>
        </ul>
      </nav>*/