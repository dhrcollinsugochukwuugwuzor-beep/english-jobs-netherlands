import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <nav className="container">
        <Link to="/">
          <h1>English Jobs Netherlands</h1>
        </Link>
        <div>
          <Link to="/jobs">Browse Jobs</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;