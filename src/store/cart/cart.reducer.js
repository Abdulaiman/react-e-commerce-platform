import CART_ACTION_TYPE from "./cart.type";
const INITIAL_STATE = {
  state: null,
  cartItem: [],
  cartCount: 0,
  totalAmount: 0,
};

export const cartReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPE.setCartCount:
      return {
        ...state,
        cartCount: payload,
      };
    case CART_ACTION_TYPE.setTotalAmout:
      return {
        ...state,
        totalAmount: payload,
      };
    case CART_ACTION_TYPE.setCartItem:
      return {
        ...state,
        cartItem: payload,
      };
    case CART_ACTION_TYPE.setState:
      return {
        ...state,
        state: payload,
      };
    default:
      return state;
  }
};
