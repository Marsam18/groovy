import React from 'react';

function Inicio({ ofertas }) {
  return (
    <div>
      <h2>Ofertas</h2>
      <ul>
        {ofertas.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inicio;
