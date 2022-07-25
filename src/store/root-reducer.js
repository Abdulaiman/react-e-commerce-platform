import { combineReducers } from "redux";
import { categoryReducer } from "./categories/category-reducer";
import { userReducer } from "./user/user-reducer";
import { cartReducer } from "./cart/cart.reducer";
export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoryReducer,
  cart: cartReducer,
});
