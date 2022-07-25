import { createAction } from "../../utils/reducer/reducer.utils";
import CART_ACTION_TYPE from "./cart.type";

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

export const addItemToCart = (cartItem, productToAdd) => {
  const newCartItem = addCartItem(cartItem, productToAdd);
  return newCartItem;
};
export const decreaseItemQuantity = (cartItem, productToDecrease) => {
  const newCartItem = reduceCartItem(cartItem, productToDecrease);
  return newCartItem;
};
export const removeItemFromCart = (cartItem, itemToRemove) => {
  const newCartItem = removeItem(cartItem, itemToRemove);
  return newCartItem;
};

export const setState = (value) => {
  return createAction(CART_ACTION_TYPE.setState, value);
};
