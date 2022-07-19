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
const removeItem = (cartItem, productToReduce) => {
  return cartItem.filter((cartItem) => cartItem.id !== productToReduce.id);
};
const reduceCartItem = (cartItem, productToReduce) => {
  if (productToReduce.quantity > 1) {
    return cartItem.map((cartItem) => {
      return cartItem.id === productToReduce.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem;
    });
  } else return removeItem(cartItem, productToReduce);
};
export const DropDownContext = createContext({
  state: null,
  setState: () => null,
  cartItem: [],
  addItemToCart: () => {},
  decreaseItemQuantity: () => {},
  cartCount: 0,
  cartCounter: () => "",
  removeItemFromCart: () => "",
  totalAmount: 0,
});

export const DropDownContextProvider = ({ children }) => {
  const [state, setState] = useState(null);
  const [cartItem, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalAmount, setTotalAmout] = useState(0);
  const addItemToCart = (productToAdd) => {
    setCartItem(addCartItem(cartItem, productToAdd));
  };
  const decreaseItemQuantity = (productToDecrease) => {
    setCartItem(reduceCartItem(cartItem, productToDecrease));
  };
  const removeItemFromCart = (itemToRemove) => {
    setCartItem(removeItem(cartItem, itemToRemove));
  };

  useEffect(() => {
    setTotalAmout(
      cartItem.reduce((acc, item) => {
        return acc + item.quantity * item.price;
      }, 0)
    );
  }, [cartItem]);
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
    decreaseItemQuantity,
    totalAmount,
    removeItemFromCart,
  };
  return (
    <DropDownContext.Provider value={value}>
      {children}
    </DropDownContext.Provider>
  );
};
