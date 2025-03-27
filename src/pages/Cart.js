
import React, { useContext, useState } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import "../components/Cart.css"; // Import CSS for styling

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({ firstName: "", lastName: "", address: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderDetails = {
      ...formData,
      cartItems: cart,
      totalAmount: cart.reduce((total, item) => total + item.price * item.quantity, 0),
    };

    console.log("📦 Order Details:", orderDetails); //  Print order details in console

    await axios.post("http://localhost:5000/api/orders", orderDetails);

    alert("✅ Order placed successfully!");

    clearCart(); // Clear cart after placing order
  };

  const grandTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1 className="cart-title">🛒 Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>Price: <strong>${item.price}</strong></p>
              <p>Quantity: <strong>{item.quantity}</strong></p>
              <p>Total: <strong>${(item.price * item.quantity).toFixed(2)}</strong></p>
            </div>
          ))}

          <h2 className="cart-total">Grand Total: ${grandTotal.toFixed(2)}</h2>

          <form onSubmit={handleSubmit} className="cart-form">
            <input type="text" name="firstName" placeholder="First Name" onChange={handleInputChange} required />
            <input type="text" name="lastName" placeholder="Last Name" onChange={handleInputChange} required />
            <input type="text" name="address" placeholder="Address" onChange={handleInputChange} required />
            <button type="submit" className="place-order-btn">Place Order</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Cart;

