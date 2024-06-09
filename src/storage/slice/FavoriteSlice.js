import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favoriteList: [],
  },
  reducers: {
    addFavorite: (state, action) => {},
  },
});

export const { addFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
