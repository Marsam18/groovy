import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-section-title">Acerca de nosotros</h3>
          <p className="footer-section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor mauris id
            tincidunt interdum.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-section-title">Enlaces rápidos</h3>
          <ul className="footer-section-links">
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/productos">Productos</a>
            </li>
            <li>
              <a href="/servicios">Servicios</a>
            </li>
            <li>
              <a href="/contacto">Contacto</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-section-title">Contáctanos</h3>
          <ul className="footer-section-contact">
            <li>
              <i className="fas fa-map-marker-alt"></i> Calle 127 bis #88-10 Bogota D.C
            </li>
            <li>
              <i className="fas fa-phone-alt"></i> +57 3115640177
            </li>
            <li>
              <i className="fas fa-envelope"></i> groovy.ingenieria@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Groovy Ingenieria. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
