import React from 'react';
import './CSS/Product.css'; // Import the CSS file

export default function Product({addToCart}) {
  const products = [
    { id: 1, name: 'Milk', price: 50, image: '/images/milk2.jpg' },
    { id: 2, name: 'Yogurt', price: 130, image: '/images/yogurt.jpg' },
    { id: 3, name: 'Paneer', price: 150, image: '/images/paneer.jpg' },
  ];
 
  // Handle adding product to cart
  const handleAddToCart = (product) => {
    addToCart(product);  // Add the selected product to the cart
  };

  return (
    <div className="product-container">
      <div className="imgdv-container">
        <div className="overlay-content">
          <h2 className="product-title">Our Products</h2>
          <div className="product-images">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <p className="product-name">{product.name}</p>
                <p className="product-price">Rs{product.price}</p>
                <button className='mybutton' onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
