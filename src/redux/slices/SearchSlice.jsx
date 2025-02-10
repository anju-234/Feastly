import { createSlice } from "@reduxjs/toolkit";

// Creating a Redux slice for managing search state
const SearchSlice = createSlice({
  name: "search",
  initialState: {
    search: "", // Initial search state set to an empty string
  },
  reducers: {
    // Action to update the search query in the state
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

// Exporting the action creator
export const { setSearch } = SearchSlice.actions;

// Exporting the reducer to be used in the store
export default SearchSlice.reducer;
