import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

function CartIcon({ handleCartToggle }) {
  return (
    <div className="cart-icon" onClick={handleCartToggle}>
      <FaShoppingCart />
    </div>
  );
}

export default CartIcon;
