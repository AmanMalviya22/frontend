import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Order = () => {
  const { cart, setCart } = useContext(CartContext);

  const placeOrder = async () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cart),
      });

      if (response.ok) {
        alert("Order placed successfully!");
        setCart([]); // Empty the cart after order placement
      } else {
        alert("Error placing order.");
      }
    } catch (error) {
      console.error("Order Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="order-container">
      <h2>Order Summary</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity} x ${item.price} = ${item.quantity * item.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <button onClick={placeOrder} className="btn btn-success">
        Place Order
      </button>
    </div>
  );
};

export default Order;
