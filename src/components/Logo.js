import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

function Logo() {
  return (
    <div className="navbar-logo">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
    </div>
  );
}

export default Logo;
