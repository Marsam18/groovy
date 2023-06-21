import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function MenuIcon(props) {
  const { showMenu, handleMenuToggle } = props;

  return (
    <div className="navbar-menu-icon">
      <div className="menu-icon" onClick={handleMenuToggle}>
        {showMenu ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
}

export default MenuIcon;
