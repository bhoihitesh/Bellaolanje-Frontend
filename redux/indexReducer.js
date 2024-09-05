import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: '256px',
};

export const indexReducer = createSlice({
  name: "index",
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.value = '256px';
    },
    closeSidebar: (state) => {
      state.value = '80px';
    },
  },
});

// Action creators are generated for each case reducer function
export const { openSidebar, closeSidebar } = indexReducer.actions;

export default indexReducer.reducer;
