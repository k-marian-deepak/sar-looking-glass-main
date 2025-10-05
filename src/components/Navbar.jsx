import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="radar-icon">📡</span>
          SAR Looking Glass
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/chennai-floods" 
              className={location.pathname === '/chennai-floods' ? 'nav-link active' : 'nav-link'}
            >
              Chennai Floods
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/wayanad-landslide" 
              className={location.pathname === '/wayanad-landslide' ? 'nav-link active' : 'nav-link'}
            >
              Wayanad Landslide
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/about" 
              className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}
            >
              About SAR
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
