import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import Categoryslice from "./slices/CategorySlice";
import Searchslice from "./slices/SearchSlice";

// Configuring the Redux store with reducers for cart, category, and search
const Store = configureStore({
  reducer: {
    cart: CartSlice, // Manages the cart state
    category: Categoryslice, // Manages selected category state
    search: Searchslice, // Manages search query state
  },
});

export default Store; // Exporting the store to be used in the application
