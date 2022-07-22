import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";
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
const CART_ACTION_TYPE = {
  setState: "SET_STATE",
  setCartItem: "SET_CART_ITEM",
  setCartCount: "SET_CART_COUNT",
  setTotalAmout: "SET_TOTAL_AMOUNT",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPE.setCartCount:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPE.setTotalAmout:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPE.setCartItem:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPE.setState:
      return {
        ...state,
        state: payload,
      };
    default:
      throw new Error("be like you don fuck up oo... wahala");
  }
};

const INITIAL_STATE = {
  state: null,
  cartItem: [],
  cartCount: 0,
  totalAmount: 0,
};
export const DropDownContextProvider = ({ children }) => {
  const [State, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { state, cartItem, cartCount, totalAmount } = State;

  const updateCartItemReducer = (cartItems) => {
    const total = cartItems.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0);
    const count = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    dispatch(
      createAction(CART_ACTION_TYPE.setCartItem, {
        cartItem: cartItems,
        cartCount: count,
        totalAmount: total,
      })
    );
  };
  const addItemToCart = (productToAdd) => {
    const newCartItem = addCartItem(cartItem, productToAdd);
    updateCartItemReducer(newCartItem);
  };
  const decreaseItemQuantity = (productToDecrease) => {
    const newCartItem = reduceCartItem(cartItem, productToDecrease);
    updateCartItemReducer(newCartItem);
  };
  const removeItemFromCart = (itemToRemove) => {
    const newCartItem = removeItem(cartItem, itemToRemove);
    updateCartItemReducer(newCartItem);
  };

  const setState = (value) => {
    dispatch(createAction(CART_ACTION_TYPE.setState, value));
  };
  console.log(cartCount);
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
