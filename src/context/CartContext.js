// import { createContext, useState } from "react";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([]);
  
   
 
  
//     const addToCart = (product) => {
//         setCart((prevCart) => {
//           const existingItem = prevCart.find((item) => item.id === product.id);
//           if (existingItem) {
//             return prevCart.map((item) =>
//               item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//             );
//           } else {
//             return [...prevCart, { ...product, quantity: 1 }];
//           }
//         });
//       };
//     return (
//       <CartContext.Provider value={{ cart, setCart, addToCart }}>
//         {children}
//       </CartContext.Provider>
//     );
//   };
  


import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to clear cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

