import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cSData: {},
  isLoading: true,
};
const singleCSlice = createSlice({
  name: "singleC",
  initialState,
  reducers: {
    setCData(state, actions) {
      state.cSData = actions.payload;
      state.isLoading = false;
    },
    setLoader(state, actions) {
      state.isLoading = actions.payload;
    },
  },
});
export default singleCSlice.reducer;
export const { setCData, setLoader } = singleCSlice.actions;
export function fetchSignleCData(id, cname) {
  return async function fetchData(dispatch, getState) {
    try {
      const res = await fetch(`http://localhost:8080/${id}`);
      const resl = await res.json();
      dispatch(setCData(resl));
      console.log(resl);
    } catch (err) {
      console.log(err);
    }
  };
}
