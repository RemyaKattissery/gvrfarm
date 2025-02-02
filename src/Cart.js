import React from 'react';
import './CSS/Cart.css';  // Add CSS styling for the cart

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-container">
      <div className="cart-image">
        <div className='cart-content'>
        <h2 className="cart-head">Your Cart</h2>

        {/* If the cart is empty */}
        {cartItems.length === 0 ? (
          <p className='empty'>Your cart is empty.</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Price: Rs {item.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Button to continue shopping or proceed to checkout */}
        <a href="/product" className="continue-shopping">Continue Shopping</a>
      </div>
      </div>
    </div>
  );
};

export default Cart;
