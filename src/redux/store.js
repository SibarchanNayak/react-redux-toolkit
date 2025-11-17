import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "react-redux-toolkit",
  storage,
};
const persitedReducer = persistReducer(persistConfig, cartReducer);
const store = configureStore({
  reducer: {
    cart: persitedReducer,
  },
});
export const persistor = persistStore(store);

export default store;
