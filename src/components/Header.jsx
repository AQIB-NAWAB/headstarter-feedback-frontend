import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header-container">
      <h1>
       Anonymous Feedback
       </h1>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/notifications">Notifications</Link>
      </nav>
    </header>
  );
};

export default Header;
