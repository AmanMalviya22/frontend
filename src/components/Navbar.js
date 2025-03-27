
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Navbar.css"; // Importing the CSS file for styling

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">🛍️ ShopEase</Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Products</Link>
          <Link to="/cart" className="nav-link cart">
            🛒 Cart <span className="cart-count">{cart.length}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
