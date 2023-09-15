import React from 'react';
import logo from "./images/logo.png"
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './Navbar.css';
import Taskdetails from './Taskdetails';

function Navbar() {
  return (
    <Router>
      <nav className="navbar">
      <div className="navbar-content">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/task" className="first">Home</a>
          </li>
          <li className="nav-item">
            <a href="/signup" className="second">Sign Up</a>
          </li>
          <li className="nav-item">
            <a href="/features" className="third">Features</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="fourth">About</a>
          </li>
        </ul>
      </div>
    </nav>
    {/* <Route path="/" exact component={Home} /> */}
    <Routes>
      <Route path="/task" component={ Taskdetails} />

      <Route path="/signup" component={ Taskdetails} />

    </Routes>
    
    </Router>
    
  );
}

export default Navbar;
