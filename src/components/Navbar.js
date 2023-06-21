import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Dropdown, Menu } from 'antd';
import PropTypes from 'prop-types';

import Logo from './Logo';
import MenuIcon from './MenuIcon';
import Search from './Search';
import UserIcon from './UserIcon';
import CartIcon from './CartIcon';
import Sidebar from './Sidebar';
import SecondaryNavbar from './SecondaryNavbar';
import BannerCarousel from './BannerCarousel';
import ProductosList from './ProductosList';

import logo from '../images/logo.svg';

function Navbar(props) {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [productos, setProductos] = useState([]); // Estado de los productos

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleItemClick = (path) => {
    navigate(path);
    setShowMenu(false);
    props.setShowBanner(false);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // Rest of the search logic...
  };

  const menu = (
    <Menu>
      <Menu.Item onClick={() => setShowLogin(true)}>Iniciar sesión</Menu.Item>
      <Menu.Item onClick={() => setShowRegister(true)}>Registrarse</Menu.Item>
    </Menu>
  );

  const closeLogin = () => {
    setShowLogin(false);
  };

  const closeRegister = () => {
    setShowRegister(false);
  };

  const handleCartToggle = () => {
    setShowCart(!showCart);
    navigate('/carrito');
  };

  useEffect(() => {
    if (location.pathname === '/') {
      props.setShowBanner(true);
    } else {
      props.setShowBanner(false);
    }

    // Limpiar los productos al cambiar de ubicación
    setProductos([]);
  }, [location.pathname, props.setShowBanner]);

  return (
    <>
      <nav className="navbar">
        <Logo />
        <MenuIcon showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
        <Search
          searchQuery={searchQuery}
          handleSearchQueryChange={(event) => setSearchQuery(event.target.value)}
          handleSearchSubmit={handleSearch}
        />
        <div className="navbar-icons">
          <Dropdown overlay={menu} placement="bottomLeft">
            <div className="user-icon ant-dropdown-trigger">
              <UserIcon />
            </div>
          </Dropdown>
          <div className="cart-icon" onClick={handleCartToggle}>
            <CartIcon />
          </div>
        </div>
      </nav>

      <Sidebar showMenu={showMenu} handleItemClick={handleItemClick} />

      <SecondaryNavbar />

      {props.showBanner && <BannerCarousel />}

      {location.pathname === '/' && (
        <div className="productos-container">
          <ProductosList productos={productos} /> {/* Pasar los productos como prop */}
        </div>
      )}

      <div className="footer-space" /> {/* Espacio para separar el componente ProductosList del footer */}

      {/* Resto del código... */}
    </>
  );
}

Navbar.propTypes = {
  showBanner: PropTypes.bool.isRequired,
  setShowBanner: PropTypes.func.isRequired,
};

export default Navbar;
