import React from 'react';

function Popup({ isRecogerEnTienda, mapSrc, handleAddressSubmit, handleClosePopup }) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleAddressSubmit(event);
  };

  return (
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
            <form onSubmit={handleFormSubmit}>
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
  );
}

export default Popup;
