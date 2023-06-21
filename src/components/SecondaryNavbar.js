import React from 'react';
import { useNavigate } from 'react-router-dom';

function SecondaryNavbar() {
  const navigate = useNavigate();

  const handleComprarClick = () => {
    navigate('/comprar');
  };

  return (
    <div className="secondary-navbar">
      <ul>
        <li className="right">
          <span onClick={handleComprarClick}>¿Cómo comprar?</span>
        </li>
        <li>
          <span>Método de entrega:</span>
        </li>
        <li>
          <span>Recoger en tienda</span>
        </li>
        <li>
          <span>Domicilio</span>
        </li>
      </ul>
    </div>
  );
}

export default SecondaryNavbar;
