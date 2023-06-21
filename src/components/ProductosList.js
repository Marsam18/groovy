import React from 'react';
import '../styles/ProductosList.css';
import uniforme1 from '../images/uniforme1.jpg'; // Importa la imagen uniforme1.jpg

function ProductosList() {
  // Supongamos que tienes una lista de productos
  const productos = [
    { nombre: 'Producto 1', cantidad: 2, imagen: uniforme1, precio: 10 }, // Utiliza la imagen uniforme1.jpg
    { nombre: 'Producto 2', cantidad: 1, imagen: uniforme1, precio: 15 },
    { nombre: 'Producto 3', cantidad: 3, imagen: uniforme1, precio: 20 },
    { nombre: 'Producto 4', cantidad: 3, imagen: uniforme1, precio: 20 },
  ];

  return (
    <div className="productos-list">
      <h2 className="productos-list-title">Destacados</h2>
      <div className="productos-grid">
        {productos.map((producto, index) => (
          <div key={index} className="producto-card">
            <img className="producto-image" src={producto.imagen} alt={producto.nombre} />
            <h3 className="producto-name">{producto.nombre}</h3>
            <p className="producto-quantity">Cantidad: {producto.cantidad}</p>
            <p className="producto-price">${producto.precio}</p>
            <button className="producto-button">Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductosList;
