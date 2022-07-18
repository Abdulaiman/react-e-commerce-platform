import { createContext, useEffect, useState } from "react";
const addCartItem = (cartItem, productToAdd) => {
  const existingItem = cartItem.find(
    (product) => product.id === productToAdd.id
  );
  if (existingItem) {
    return cartItem.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItem, { ...productToAdd, quantity: 1 }];
};
export const DropDownContext = createContext({
  state: null,
  setState: () => null,
  cartItem: [],
  addItemToCart: () => {},
  cartCount: 0,
  cartCounter: () => "",
});

export const DropDownContextProvider = ({ children }) => {
  const [state, setState] = useState(null);
  const [cartItem, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const addItemToCart = (productToAdd) => {
    setCartItem(addCartItem(cartItem, productToAdd));
  };
  useEffect(() => {
    const count = cartItem.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(count);
  }, [cartItem]);
  const value = {
    state,
    setState,
    addItemToCart,
    cartItem,
    cartCount,
  };
  return (
    <DropDownContext.Provider value={value}>
      {children}
    </DropDownContext.Provider>
  );
};
