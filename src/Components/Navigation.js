import React from 'react';
import { Link } from 'react-router-dom';



const Navigation = () => {

    return (
      <div className="nav-bar">
        <ul>
          <li ><Link to="/" className="brand">ChouPli</Link></li>
        <div className="nav-list">
          <li ><Link className="nav-items" to="/">About</Link></li>
          <li ><Link className="nav-items" to="/catering">Catering</Link></li>
          <li ><Link className="nav-items" to="/contact">Contact</Link></li>
          <li ><Link className="nav-items" to="/">Directions</Link></li>
          <li ><Link className="nav-items" to="/">Press</Link></li>
          <div className="double-border">
          <li ><Link className="nav-items menu" to="/menu">Menu</Link></li>
          </div>
          </div>
        </ul>
      </div>
    );
  }

export default Navigation;