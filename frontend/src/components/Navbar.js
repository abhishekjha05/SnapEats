import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaStore, FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';
import '../styles/navbar.css';

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🍕</span>
          <span className="logo-text">SnapEats</span>
        </Link>

        {/* Search Bar */}
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search restaurants or dishes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Navigation Links */}
        <div className="navbar-links">
          <Link to="/" className="nav-link">
            <FaHome /> Home
          </Link>
          <Link to="/restaurants" className="nav-link">
            <FaStore /> Restaurants
          </Link>
          <Link to="/cart" className="nav-link">
            <FaShoppingCart /> Cart
            <span className="cart-badge">0</span>
          </Link>
          <Link to="/profile" className="nav-link">
            <FaUser /> Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
