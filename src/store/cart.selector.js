import { createSelector } from "reselect";
const cart = (state) => state.cart;
const cartItem = createSelector([cart], (cart) => cart.cartItem);
const cartCount = createSelector([cart], (cart) => cart.cartCount);
const state = createSelector([cart], (cart) => cart.state);
const totalAmount = createSelector([cart], (cart) => cart.totalAmount);

export const setCartItemsSelector = createSelector(
  [cartItem],
  (cartItem) => cartItem
);
// export const setCartCountSelector = createSelector(
//   [cartCount],
//   (cartCount) => cartCount
// );
export const setStateSelector = createSelector([state], (state) => state);
// export const setTotalAmountSelector = createSelector(
//   [totalAmount],
//   (totalAmount) => totalAmount
// );
export const cartTotalSelector = createSelector(
  [setCartItemsSelector],
  (cartItem) =>
    cartItem.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0)
);
export const cartCountSelector = createSelector(
  [setCartItemsSelector],
  (cartItem) => cartItem.reduce((acc, item) => acc + item.quantity, 0)
);
