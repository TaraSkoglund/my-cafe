"use client";
import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const incrementCount = (item) => {
    const updatedCart = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return {
          ...cartItem,
          count: cartItem.count + 1,
        };
      }
      return cartItem;
    });
    updateCartItems(updatedCart);
  };

  const decrementCount = (item) => {
    const updatedCart = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        const newCount = Math.max(cartItem.count - 1, 1);

        return {
          ...cartItem,
          count: newCount,
        };
      }
      return cartItem;
    });
    updateCartItems(updatedCart);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.count,
      0
    );
  };

  const totalItemCount = cartItems.reduce(
    (total, item) => total + item.count,
    0
  );

  const updateCartItems = (updatedItems) => {
    setCartItems(updatedItems);
  };

  const addToCart = (product) => {
    const existingCartItem = cartItems.find((item) => item.id === product.id);

    if (existingCartItem) {
      const updatedCart = cartItems.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            count: item.count + 1,
          };
        }
        return item;
      });

      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, count: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    updateCartItems(updatedCart);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    incrementCount,
    decrementCount,
    calculateTotalPrice,
    totalItemCount,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
