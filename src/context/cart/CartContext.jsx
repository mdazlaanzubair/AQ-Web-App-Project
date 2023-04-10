import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartProduct, setCartProduct] = useState(null);
  const [order, setOrder] = useState(null);

  const value = { cartProduct, setCartProduct, order, setOrder };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
