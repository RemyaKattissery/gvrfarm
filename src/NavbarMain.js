import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function NavbarMain({cartCount}) {
  // Example state for cart items, you can replace it with actual cart management logic
  const [cartItems, setCartItems] = useState(0); // Set the initial number of items in the cart

  return (
    <div>
      <Navbar expand="lg" className="navbar-custom">
        <Container>
          {/* Navbar brand aligned to the left */}
          <Navbar.Brand href="#" className="align-items-center navband">
            <img
              src='./images/logo.jpg'
              style={{ width: '50px', margin: '10px', borderRadius: '50px' }}
              alt="logo"
            />
            <span
              style={{
                fontSize: '24px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                fontFamily: 'Georgia, serif',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                marginLeft: '10px', // Adds spacing between logo and text
                color: 'white'
              }}
            >
              GVR FARM
            </span>
          </Navbar.Brand>

          {/* Navbar toggle button (for mobile responsiveness) */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: '50px' }} navbarScroll>
              <Link to="/" className='nav-link'>Home</Link>
              <Nav.Link href="#action2">Gallery</Nav.Link>
              <Link to="/product" className='nav-link'>Products</Link>
              <Nav.Link href="#action4">AboutUs</Nav.Link>
            </Nav>

            {/* Cart Icon with item count */}
            <Nav className="ms-auto">
              <Link to="/Cart" className="nav-link d-flex align-items-center">
                <i className="bi bi-cart" style={{ fontSize: '24px', color: 'white' }}></i>
                {cartItems >= 0 && (
                  <span
                    className="badge rounded-pill bg-danger ms-2"
                    style={{ position: 'relative', top: '1px', right: '1px', fontSize: '12px' }}
                  >
                    {cartCount}
                  </span>
                )}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
