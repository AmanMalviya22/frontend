import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import './styles.css';

import Navbar from "./components/Navbar";

const App = () => (
  <CartProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  </CartProvider>
);

export default App;
