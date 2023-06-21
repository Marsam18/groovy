import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/App.css';
import './styles/search.css';
import './styles/sidebar.css';
import './styles/navbar.css';
import './styles/Carrito.css';
import './styles/Footer.css'; // Importa los estilos CSS del Footer

import Navbar from './components/Navbar';
import Ofertas from './pages/ofertas';
import Uniformes from './pages/uniformes';
import Cinturones from './pages/cinturones';
import Accesorios from './pages/accesorios';
import Comprar from './pages/comprar'; // Importa el componente Comprar
import Carrito from './pages/carrito';
import ProductosList from './components/ProductosList'; // Importa el componente ProductosList
import Footer from './components/Footer'; // Importa el componente Footer

function App() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <Router>
      <div className="app-container">
        <Navbar showBanner={showBanner} setShowBanner={setShowBanner} />
        <Routes>
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/uniformes" element={<Uniformes />} />
          <Route path="/cinturones" element={<Cinturones />} />
          <Route path="/accesorios" element={<Accesorios />} />
          <Route path="/comprar" element={<Comprar />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/productoslist" element={<ProductosList />} />
        </Routes>
        <Footer /> {/* Agrega el componente Footer */}
      </div>
    </Router>
  );
}

export default App;
