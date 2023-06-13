import React, { useState } from 'react';
import { FaUser, FaShoppingCart, FaBars, FaTimes, FaPercentage, FaTshirt, FaTags, FaSearch, FaExclamationCircle } from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

import './App.css';

import logo from './images/logo.svg';
import Ofertas from './pages/ofertas';
import Uniformes from './pages/uniformes';
import Cinturones from './pages/cinturones';
import Accesorios from './pages/accesorios';

function Navbar() {
  const [showPopup, setShowPopup] = useState(false);
  const [isRecogerEnTienda, setIsRecogerEnTienda] = useState(true);
  const [mapSrc, setMapSrc] = useState('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8125384045567!2d-74.05815068571802!3d4.687862342881691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9dd9568c26ef%3A0x84e2f27794be3c27!2sCalle%20127%20Bis%20%2388-10%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1sen!2sus!4v1624443030095!5m2!1sen!2sus');
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showNoResults, setShowNoResults] = useState(false);
  const [showError, setShowError] = useState(false);
  const handleSearch = (event) => {
    event.preventDefault();
    setShowError(false); // Reset the showError state
    // Perform the search logic and get the results
    if (searchQuery.trim() === '') {
      setShowNoResults(true); // Show the no results message
    } else if (searchResults.length === 0) {
      setShowError(true); // Show the error message
    }
    // Rest of the code...
  };

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleItemClick = (path) => {
    navigate(path);
    setShowMenu(false);
  };

  const handleOutsideClick = (event) => {
    if (showMenu && !event.target.closest('.sidebar')) {
      setShowMenu(false);
    }
  };

  const handleDomicilioClick = () => {
    setIsRecogerEnTienda(!isRecogerEnTienda);
    setShowPopup(true);
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const handleAddressSubmit = (event) => {
    event.preventDefault();
    const address = event.target.elements.direccion.value;
    if (address) {
      geocodeAddress(address);
    }
  };
  const geocodeAddress = (address) => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK' && results && results.length > 0) {
        const location = results[0].geometry.location;
        const lat = location.lat();
        const lng = location.lng();
        const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8125384045567!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9dd9568c26ef%3A0x84e2f27794be3c27!2sCalle%20127%20Bis%20%2388-10%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1sen!2sus!4v1624443030095!5m2!1sen!2sus`;
        setMapSrc(mapSrc);
      } else {
        console.error('Geocode was not successful for the following reason:', status);
      }
    });
  };

  return (
    <>
      <nav className="navbar">
      <div className="navbar-logo">
    <Link to="/">
      <img src={logo} alt="Logo" />
    </Link>
  </div>
        <div className="navbar-search">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Buscar..."
            />
            <button type="submit" className="search-icon">
              <FaSearch />
            </button>
          </form>
        </div>
        
        <div className="navbar-icons">
    <div className="menu-icon" onClick={handleMenuToggle}>
      {showMenu ? <FaTimes /> : <FaBars />}
    </div>
    <div className="user-icon">
      <FaUser />
    </div>
    <div className="cart-icon">
      <FaShoppingCart />
    </div>
  </div>

      </nav>
      <div className="page-container" onClick={handleOutsideClick}>
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
        <div className="secondary-navbar">
          <ul>
            <li>
              <span>Método de entrega:</span>
            </li>
            <li>
              <span onClick={handleDomicilioClick}>Recoger en tienda</span>
            </li>
            <li>
              <span onClick={handleDomicilioClick}>Domicilio</span>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/uniformes" element={<Uniformes />} />
          <Route path="/cinturones" element={<Cinturones />} />
          <Route path="/accesorios" element={<Accesorios />} />
        </Routes>
        
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            {isRecogerEnTienda ? (
              <>
                <h3>Recoger en tienda</h3>
                <p>Dirección: Calle 127 bis #88-10</p>
                <p>
                  WhatsApp:{' '}
                  <a href="https://wa.me/3115640177" target="_blank" rel="noopener noreferrer">
                    3115640177
                  </a>
                </p>
                <p>Bogotá D.C.</p>
                <div className="map-container">
                  <iframe
                    title="Google Map"
                    src={mapSrc}
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </>
            ) : (
              <>
                <h3>Domicilio</h3>
                <form onSubmit={handleAddressSubmit}>
                  <div className="form-field">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="identificacion">Identificación</label>
                    <input type="text" id="identificacion" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="celular">Celular</label>
                    <input type="text" id="celular" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="ciudad">Ciudad</label>
                    <input type="text" id="ciudad" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="direccion">Dirección</label>
                    <input type="text" id="direccion" />
                  </div>
                  <button type="submit">Enviar</button>
                </form>
              </>
            )}
            <button onClick={handleClosePopup}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;