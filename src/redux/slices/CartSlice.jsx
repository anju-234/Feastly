import { createSlice } from "@reduxjs/toolkit";

// Creating a Redux slice for cart management
const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [], // Initial state with an empty cart
  },
  reducers: {
    // Action to add an item to the cart
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // If item already exists, increase its quantity
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        // If item doesn't exist, add it to the cart
        state.cart.push(action.payload);
      }
    },

    // Action to remove an item from the cart
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    // Action to increase item quantity
    incrementQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
      );
    },

    // Action to decrease item quantity
    decrementQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
      );
    },
  },
});

// Exporting actions and reducer
export const { addToCart, removeFromCart, incrementQty, decrementQty } =
  CartSlice.actions;
export default CartSlice.reducer;
