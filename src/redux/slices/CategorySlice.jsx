import { createSlice } from "@reduxjs/toolkit";

// Creating a Redux slice for managing the selected category
const CategorySlice = createSlice({
  name: "category",
  initialState: {
    category: "All", // Default category is "All"
  },
  reducers: {
    // Action to update the selected category
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

// Exporting actions and reducer
export const { setCategory } = CategorySlice.actions;
export default CategorySlice.reducer;
