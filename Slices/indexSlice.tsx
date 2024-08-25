import { createSlice } from "@reduxjs/toolkit";
interface bodyDynamicWidth {
  value: number;
}
const initialState: bodyDynamicWidth = {
  value: 256,
};
const indexSlice = createSlice({
  name: "indexSlice",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});
export const { increment, decrement } = indexSlice.actions;
export default indexSlice.reducer;
