import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartProduct, setCartProduct] = useState({});

  const value = { cartProduct, setCartProduct };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
