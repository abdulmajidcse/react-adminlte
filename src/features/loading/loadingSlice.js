import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    is: true,
    bgColor: "black",
  },
  reducers: {
    updateLoading: (state, action) => {
      state.is = action.payload.is ?? true;
      state.bgColor = action.payload.bgColor ?? null;
    },
  },
});

export const { updateLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
