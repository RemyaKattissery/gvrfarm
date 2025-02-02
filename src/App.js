import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FarmMain from './FarmMain';  // Main farm page
import Product from './Product';  // Product page
import NavbarMain from './NavbarMain';  // Navbar component with cart count
import Cart from './Cart';  // Cart page to display added items

function App() {
  // Store the items added to the cart
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);  // Add the selected product to the cart
  };

  return (
    <Router>
      {/* Pass cart items count to Navbar */}
      <NavbarMain cartCount={cartItems.length} />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<FarmMain />} />

        {/* Product Page */}
        <Route path="/Product" element={<Product addToCart={addToCart} />} />

        {/* Cart Page */}
        <Route path="/Cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </Router>
  );
}

export default App;
