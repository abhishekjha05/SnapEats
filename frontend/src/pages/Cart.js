import React, { useState } from 'react';
import '../styles/cart.css';

function Cart() {
  const [cartItems] = useState([]);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <p>Your cart is empty. Start adding items!</p>
        </div>
      ) : (
        <div className="cart-content">
          {/* Cart items will be displayed here */}
        </div>
      )}
    </div>
  );
}

export default Cart;
