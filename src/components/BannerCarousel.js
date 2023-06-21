import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import PropTypes from 'prop-types';

import logo from '../images/logo.svg';

function BannerCarousel() {
  return (
    <div className="banner-carousel-container">
      <Carousel autoPlay infiniteLoop showArrows={false} showStatus={false} showThumbs={false}>
        <div>
          <img src={logo} alt="Logo" style={{ width: '40%', height: '100%' }} />
        </div>
        {/* Agrega más elementos del carrusel aquí */}
      </Carousel>
    </div>
  );
}

BannerCarousel.propTypes = {
  showBanner: PropTypes.bool.isRequired,
};

export default BannerCarousel;
