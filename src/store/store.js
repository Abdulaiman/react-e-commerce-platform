import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["cart"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleWares = [
  process.env.NODE_ENV === "development" && logger,
  thunk,
].filter(Boolean);
const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const composedEnhancer = composeEnhancer(applyMiddleware(...middleWares));
export const store = createStore(persistedReducer, undefined, composedEnhancer);
export const persistor = persistStore(store);
