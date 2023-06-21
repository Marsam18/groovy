import React from 'react';
import PropTypes from 'prop-types';
import { FaTags } from 'react-icons/fa';

function Sidebar({ showMenu, handleItemClick }) {
  return (
    <div className={`sidebar ${showMenu ? 'show' : ''}`}>
      <ul className="menu-items">
        <li>
          <span className="menu-icon">
            <FaTags />
          </span>
          <span className="menu-title">Categorías</span>
        </li>
        <li onClick={() => handleItemClick('/ofertas')}>
          <span>Ofertas</span>
        </li>
        <li onClick={() => handleItemClick('/uniformes')}>
          <span>Uniformes</span>
        </li>
        <li onClick={() => handleItemClick('/cinturones')}>
          <span>Cinturones</span>
        </li>
        <li onClick={() => handleItemClick('/accesorios')}>
          <span>Accesorios</span>
        </li>
      </ul>
    </div>
  );
}

Sidebar.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  handleItemClick: PropTypes.func.isRequired,
};

export default Sidebar;
